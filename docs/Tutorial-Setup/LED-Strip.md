---
sidebar_position: 130
---

# LED Strip

Rotorflight supports the use of addressable LED strips.  Addressable LED strips allow each LED in the strip to
be programmed with a unique and independent color.  This is far more advanced than the normal RGB strips which
require that all the LEDs in the strip show the same color.

Addressable LED strips can be used to show information from the flight controller system, the current implementation
supports the following:

* Up to 32 LEDs.
* Indicators showing pitch/roll stick positions.
* Heading/Orientation lights.
* Flight mode specific color schemes.
* Low battery warning.
* AUX operated on/off switch

The function and orientation configuration is fixed for now but later it should be able to be set via the UI or CLI..

## Supported hardware

Only strips of 32 WS2811/WS2812 LEDs are supported currently.  If the strip is longer than 32 LEDs it does not matter,
but only the first 32 are used.

WS2812 LEDs require an 800khz signal and precise timings and thus requires the use of a dedicated hardware timer.

Note: Not all WS2812 ICs use the same timings, some batches use different timings.  

It could be possible to be able to specify the timings required via CLI if users request it.

### Tested Hardware

* [Adafruit NeoPixel Jewel 7](https://www.adafruit.com/products/2226) (preliminary testing)
  * Measured current consumption in all white mode ~ 350 mA.
  * Fits well under motors on mini 250 quads.
* [Adafruit NeoPixel Stick](https://www.adafruit.com/products/1426) (works well)
  * Measured current consumption in all white mode ~ 350 mA.

## Connections

WS2812 LED strips generally require a single data line, 5V and GND.

WS2812 LEDs on full brightness can consume quite a bit of current.  It is recommended to verify the current draw and ensure your 5V power source can cope with the load.
uses.  e.g. ESC1/BEC1 -> FC, ESC2/BEC2 -> LED strip.   It's also possible to power one half of the strip from one BEC and the other half

LED Strip pin should be on a separate timer.

If you have LEDs that are intermittent, flicker or show the wrong colors then drop the VIN to less than 4.7v, e.g. by using an inline
diode on the VIN to the LED strip. The problem occurs because of the difference in voltage between the data signal and the power
signal.  The WS2811 LED's require the data signal (Din) to be between 0.3 * Vin (Max) and 0.7 * VIN (Min) to register valid logic
low/high signals.  The LED pin on the CPU will always be between 0v to ~3.3v, so the Vin should be 4.7v (3.3v / 0.7 = 4.71v).
Some LEDs are more tolerant of this than others.

The datasheet can be found here: [WS2812](http://www.adafruit.com/datasheets/WS2812.pdf)

## Configuration

The led strip feature can be configured via the GUI

GUI:
Enable the Led Strip feature via the GUI under setup.

Configure the leds from the Led Strip tab in the Rotorflight GUI.
First setup how the led's are laid out so that you can visualize it later as you configure and so the flight controller knows how many led's there are available.

There is a step by step guide on how to use the GUI to configure the Led Strip feature using the GUI [Setting up RGB LED](https://oscarliang.com/setup-RGB-LED-cleanflight/) which was published early 2015 by Oscar Liang which may or may not be up-to-date by the time you read this.

CLI:
Enable the `LED_STRIP` feature via the cli:

```
feature LED_STRIP
```

If you enable LED_STRIP feature and the feature is turned off again after a reboot then check your config does not conflict with other features, as above.

Configure the LEDs using the `led` command.

The `led` command takes either zero or two arguments - an zero-based led number and a sequence which indicates pair of coordinates, direction flags and mode flags and a color.

If used with zero arguments it prints out the led configuration which can be copied for future reference.

Each led is configured using the following template: `x,y:ddd:mmm:cc`

`x` and `y` are grid coordinates of a 0 based 16x16 grid, north west is 0,0, south east is 15,15
`ddd` specifies the directions, since an led can face in any direction it can have multiple directions.  Directions are:

 `N` - North
 `E` - East
 `S` - South
 `W` - West
 `U` - Up
 `D` - Down

For instance, an LED that faces South-east at a 45 degree downwards angle could be configured as `SED`.

Note: It is perfectly possible to configure an LED to have all directions `NESWUD` but probably doesn't make sense.

`mmm` specifies the modes that should be applied an LED.  Modes are:

* `W` - `W`warnings.
* `F` - `F`light mode & Orientation
* `I` - `I`ndicator.
* `A` - `A`rmed state.
* `T` - `T`hrust state.
* `R` - `R`ing thrust state.
* `C` - `C`olor.

`cc` specifies the color number (0 based index).

Example:

```
led 0 0,15:SD:IAW:0
led 1 15,0:ND:IAW:0
led 2 0,0:ND:IAW:0
led 3 0,15:SD:IAW:0
led 4 7,7::C:1
led 5 8,8::C:2
```

To erase an led, and to mark the end of the chain, use `0,0::` as the second argument, like this:

```
led 4 0,0:::
```

It is best to erase all LEDs that you do not have connected.

### Modes

#### Warning

This mode simply uses the LEDs to flash when warnings occur.

| Warning | LED Pattern | Notes |
|---------|-------------|-------|
| Arm-lock enabled | flash between green and off | occurs calibration or when unarmed and the aircraft is tilted too much |
| Low Battery | flash red and off | battery monitoring must be enabled.  May trigger temporarily under high-throttle due to voltage drop |
| Failsafe | flash between light blue and yellow | Failsafe must be enabled |

Flash patterns appear in order, so that it's clear which warnings are enabled.

#### Flight Mode & Orientation

This mode shows the flight mode and orientation.

When flight modes are active then the LEDs are updated to show different colors depending on the mode, placement on the grid and direction.

LEDs are set in a specific order:
 * LEDs that marked as facing up or down.
 * LEDs that marked as facing west or east AND are on the west or east side of the grid.
 * LEDs that marked as facing north or south AND are on the north or south side of the grid.

That is, south facing LEDs have priority.

The mapping between modes led placement and colors is currently fixed and cannot be changed.

#### Indicator

This mode flashes LEDs that correspond to roll and pitch stick positions.  i.e.  they indicate the direction the craft is going to turn.

| Mode | Direction | LED Color |
|------------|--------|---------------------|
|Orientation | North  | WHITE			|
|Orientation | East   | DARK VIOLET	|  
|Orientation | South  | RED			|
|Orientation | West   | DEEP PINK		|
|Orientation | Up     | BLUE			|
|Orientation | Down   | ORANGE		|
| | | |
|Head Free   | North  | LIME GREEN 	|
|Head Free   | East   | DARK VIOLET 	|
|Head Free   | South  | ORANGE 		|
|Head Free   | West   | DEEP PINK 	|
|Head Free   | Up     | BLUE 			|
|Head Free   | Down   | ORANGE 		|
| | | |
|Horizon     | North  | BLUE			|
|Horizon     | East   | DARK VIOLET 	|
|Horizon     | South  | YELLOW 		|
|Horizon     | West   | DEEP PINK 	|
|Horizon     | Up     | BLUE 			|
|Horizon     | Down   | ORANGE 		|
| | | |
|Angle       | North  | CYAN			|
|Angle       | East   | DARK VIOLET 	|
|Angle       | South  | YELLOW 		|
|Angle       | West   | DEEP PINK 	|
|Angle       | Up     | BLUE 			|
|Angle       | Down   | ORANGE 		|
| | | |
|Mag         | North  | MINT GREEN	|
|Mag         | East   | DARK VIOLET 	|
|Mag         | South  | ORANGE 		|
|Mag         | West   | DEEP PINK 	|
|Mag         | Up     | BLUE 			|
|Mag         | Down   | ORANGE 		|
| | | |
|Baro        | North  | LIGHT BLUE 	|
|Baro        | East   | DARK VIOLET 	|
|Baro        | South  | RED 			|
|Baro        | West   | DEEP PINK 	|
|Baro        | Up     | BLUE 			|
|Baro        | Down   | ORANGE 		|

#### Armed state

This mode toggles LEDs between green and blue when disarmed and armed, respectively.

Note: Armed State cannot be used with Flight Mode.

#### Thrust state

This mode fades the LED current LED color to the previous/next color in the HSB color space depending on throttle stick position.  When the
throttle is in the middle position the color is unaffected, thus it can be mixed with orientation colors to indicate orientation and throttle at
the same time.  Thrust should normally be combined with Color or Mode/Orientation.

#### Thrust ring state

This mode is allows you to use a 12, 16 or 24 leds ring (e.g. NeoPixel ring) for an afterburner effect. When armed the leds use the following sequences: 2 On, 4 Off, 2 On, 4 Off, and so on.  The light pattern rotates clockwise as throttle increases. 

A better effect is achieved when LEDs configured for thrust ring have no other functions.

LED direction and X/Y positions are irrelevant for thrust ring LED state.  The order of the LEDs that have the state determines how the LED behaves.

Each LED of the ring can be a different color. The color can be selected between the 16 colors availables.

For example, led 0 is set as a `R`ing thrust state led in color 13 as follow. 

```
led 0 2,2::R:13
```

LED strips and rings can be combined.

#### Solid Color

The mode allows you to set an LED to be permanently on and set to a specific color.

x,y position and directions are ignored when using this mode.

Other modes will override or combine with the color mode.

For example, to set led 0 to always use color 10 you would issue this command. 

```
led 0 0,0::C:10
```

### Colors

Colors can be configured using the cli `color` command.

The `color` command takes either zero or two arguments - an zero-based color number and a sequence which indicates pair of hue, saturation and value (HSV).

See [HSL and HSV](http://en.wikipedia.org/wiki/HSL_and_HSV)

If used with zero arguments it prints out the color configuration which can be copied for future reference.

The default color configuration is as follows:

| Index | Color       |
| ----- | ----------- |
|     0 | black       |
|     1 | white       |
|     2 | red         |
|     3 | orange      |
|     4 | yellow      |
|     5 | lime green  |
|     6 | green       |
|     7 | mint green  |
|     8 | cyan        |
|     9 | light blue  |
|    10 | blue        |
|    11 | dark violet |
|    12 | magenta     |
|    13 | deep pink   |
|    14 | black       |
|    15 | black       |

```
color 0 0,0,0
color 1 0,255,255
color 2 0,0,255
color 3 30,0,255
color 4 60,0,255
color 5 90,0,255
color 6 120,0,255
color 7 150,0,255
color 8 180,0,255
color 9 210,0,255
color 10 240,0,255
color 11 270,0,255
color 12 300,0,255
color 13 330,0,255
color 14 0,0,0
color 15 0,0,0
```


## Troubleshooting

On initial power up the LEDs on the strip will be set to WHITE.  This means you can attach a current meter to verify
the current draw if your measurement equipment is fast enough.  Most 5050 LEDs will draw 0.3 Watts a piece.
This also means that you can make sure that each R,G and B LED in each LED module on the strip is also functioning.

After a short delay the LEDs will show the unarmed color sequence and or low-battery warning sequence.

Also check that the feature `LED_STRIP` was correctly enabled and that it does not conflict with other features, as above.

