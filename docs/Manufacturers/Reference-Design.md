---
sidebar_position: 50
---

# Reference Design
Design
Please read the page [Rotorflight FC Design Requirements](https://github.com/rotorflight/rotorflight/wiki/Rotorflight-FC-Design-Requirements) first. It is explaining the generic requirements for all Rotorflight designs.

__For an FC to be fully supported by Rotorflight-2, it _must_ follow one of the reference designs.__

RF2 will offer more features and easier configurability for designs that are fully compatible.

Lots of effort has been put into these designs for making sure they are as flexible as possible, while not imposing any hardware limitations on the functionality. The manufacturer can choose not to implement any features that are marked _optional_. All other features must be implemented.

The reference designs are considering only the aspects that have effect on the software support, mostly the STM32 resource allocation and the minimum set of supported features. The rest - like size, form factor, connector locations - are left for the manufacturer to decide.


# Reference Design F7Ax

The following design is for the STM32F722RET (64 pins LQFP) chip.


## Variants

The design F7Ax has a few variants, depending on the chosen port combination.

| Variant   | Servos | Motors | TELE  | SBUS | DSM | Port A | Port B | Port C | Port D | Port E | Port F | Port G |
| --------- | ------ | ------ | ----- | ---- | --- | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| F7A1      |  ✔     |  ✔     |   ✔   |  ✔   |  ✓  |  ✔ ᴿˣ  |  ✓     |  ✓     |  ✓     |  ✓     |        |        |
| F7A2      |  ✔     |  ✔     |   ✔   |  ✔   |  ✓  |  ✔ ᴿˣ  |        |        |  ✓     |  ✓     |  ✓     |  ✔     |
| F7A3      |  ✔     |  ✔     |   ✔   |  ✔   |  ✓  |        |  ✓     |  ✓     |  ✓     |  ✓     |  ✔ ᴿˣ  |        |
| F7A4      |  ✔     |  ✔     |   ✔   |  ✔   |  ✓  |        |        |        |  ✓     |  ✓     |  ✔ ᴿˣ  |  ✔     |

Legend:
  ✔ = Mandatory Port,
  ✓ = Optional Port,
  ᴿˣ = Primary port for a serial receiver


## Ports

### Servo and Motor Port

The servos and motors are connected to standard 0.1" pin headers.
The pin headers are organised as two blocks, of size 4x3 and 3x3 pins.

The cyclic servos and the tail servo/ESC connect to the 4x3 block.

The main ESC connects to the 3x3 block.

A receiver can be connected to the 3x3 block in some configurations.

All pin headers in these blocks have a common GND and a common VX (BEC power).

| Label    | Pin1 | Pin2 | Pin3 | MCU Pin |
| -------- | ---- | ---- | ---- | ------- |
| S1       | GND  | VX   | PWM  | PB4     |
| S2       | GND  | VX   | PWM  | PB5     |
| S3       | GND  | VX   | PWM  | PB0     |
| TAIL     | GND  | VX   | PWM  | PB3     |
|          |      |      |      |         |
| ESC      | GND  | VX   | SIG  | PB6     |
| RPM      | GND  | VX   | SIG  | PA2     |
| SBUS     | GND  | VX   | SIG  | PA3     |

The ESC pin headers are designed to accommodate all variations of traditional and drone ESCs.
The following combinations are possible:

| Type                  | ESC Header     | RPM Header    | SBUS Header   | Example ESC                     |
| --------------------- | -------------- | ------------- | ------------- | ------------------------------- |
| Large heli ESC        | PWM + BEC      | RPM + BEC     | Telem + BEC   | Hobbywing Platinum V4 120A      |
| Small heli ESC        | PWM + BEC      | RPM + BEC     | S.BUS⁶        | Hobbywing Platinum V3 50A       |
| BLHeli32 ESC          | DShot          | BEC.          | Telemetry     | IFlight BLITZ E80               |
| BLHeli-S ESC          | DShot          | BEC           | S.BUS⁶        | Holybro 20A                     |

A one-wire receiver can be connected to the SBUS header, if the ESC Telemetry feature is not in use.
The receiver must be high voltage capable, e.g. up to 8.4V.


### Extended Servo and Motor Port

In case four cyclic servos are required, the following pinout with two 4x3 blocks can be used.

| Label    | Pin1 | Pin2 | Pin3 | MCU Pin |
| -------- | ---- | ---- | ---- | ------- |
| S1       | GND  | VX   | PWM  | PB4     |
| S2       | GND  | VX   | PWM  | PB5     |
| S3       | GND  | VX   | PWM  | PB0     |
| S4       | GND  | VX   | PWM  | PB1     |
|          |      |      |      |         |
| TAIL     | GND  | VX   | PWM  | PB3     |
| ESC      | GND  | VX   | SIG  | PB6     |
| RPM      | GND  | VX   | SIG  | PA2     |
| SBUS     | GND  | VX   | SIG  | PA3     |


### Expansion Port A

Port A is primarily a UART port. It shall be labelled with Ⓐ.

The connector type is 4-pin JST-GH, with the following pinout:

| Pin1 | Pin2 | Pin3 | Pin4 |
| ---- | ---- | ---- | ---- |
| TX   | RX   | 5V   | GND  |

The signal pins are connected to PA0 (TX) and PA1 (RX) on UART4.

Port A can be also used as an RPM input port for two RPM signals,
or two voltage inputs for the ADC.


### Expansion Port B

Port B is primarily a UART port. It shall be labelled with Ⓑ.

The connector type is 4-pin JST-GH, with the following pinout:

| Pin1 | Pin2 | Pin3 | Pin4 |
| ---- | ---- | ---- | ---- |
| TX   | RX   | 5V   | GND  |

The signal pins are connected to PC6 (TX) and PC7 (RX) on UART6.

Port B can be also used for Camera Control, or for LED Strip.


### Expansion Port C

Port C is a UART port or an I2C port. It shall be labelled with Ⓒ.

The connector type is 4-pin JST-GH, with the following pinout:

| Pin1   | Pin2   | Pin3 | Pin4 |
| ------ | ------ | ---- | ---- |
| TX/SCL | RX/SDA | 5V   | GND  |


The signal pins are connected to PB10 (TX) and PB11 (RX) on UART3.


### Expansion Port D

Port D is primarily a UART port. It shall be labelled with Ⓓ.

The connector type is 4-pin JST-GH, with the following pinout:

| Pin1 | Pin2 | Pin3 | Pin4 |
| ---- | ---- | ---- | ---- |
| TX   | RX   | 5V   | GND  |

The signal pins are connected to PA9 (TX) and PA10 (RX) on UART1.

Port D can be also used for Camera Control or LED Strip.


### Expansion Port E

Port E is a UART port. It shall be labelled with Ⓔ.

The connector type is 4-pin JST-GH, with the following pinout:

| Pin1 | Pin2 | Pin3 | Pin4 |
| ---- | ---- | ---- | ---- |
| TX   | RX   | 5V   | GND  |

The signal pins are connected to PC12 (TX) and PD2 (RX) on UART5.


### Expansion Port F

Port F is a UART port. It shall be labelled with Ⓕ.

The connector type is 4-pin JST-GH, with the following pinout:

| Pin1 | Pin2 | Pin3 | Pin4 |
| ---- | ---- | ---- | ---- |
| TX   | RX   | 5V   | GND  |

The signal pins are connected to PC10 (TX) and PC11 (RX) on UART3/4.


### Expansion Port G

Port G is primarily for a UART/GPS and a I2C/Compass. It shall be labelled with Ⓖ.

The connector type is 6-pin JST-GH, with the following pinout:

| Pin1 | Pin2 | Pin3 | Pin4 | Pin5 | Pin6 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 5V   | TX   | RX   | SCL  | SDA  | GND  |

This socket is Pixhawk GPS compatible.

The signal pins are connected to PB10 (SCL), PB11 (SDA) on I2C2; and PC6 (TX), PC7 (RX) on UART6.

Port G is an alternative to Ports B and C. Either Port G can be implemented,
or Ports B and C - but not both.


### DSM Port

The DSM Port is a dedicated port for connecting a Spektrum DSM satellite.

The connector type is 3-pin JST-ZH, with the following pinout:

| Pin1 | Pin2 | Pin3 |
| ---- | ---- | ---- |
| 3.3V | GND  | SIG  |

The signal pin is connected to PA10 on UART1.

The DSM Port is sharing the RX pin with Port D. It is possible to implement
either DSM Port, or Port D - or both.


## MCU Resource Allocation

| Function      | PIN    | ALT1   | ALT2   | ALT3   | ALT4   | Notes     |
| ------------- | ------ | ------ | ------ | ------ | ------ | ----------|
| Servo1        | PB4    | T3Ch1  |
| Servo2        | PB5    | T3Ch2  |
| Servo3        | PB0    | T3Ch3  |
| Servo4        | PB1    | T3Ch4  |||| Optional: Fourth cyclic servo¹ |
| Rudder        | PB3    | T2Ch2  |||| Tail servo or motor |
| Motor1        | PB6    | T4Ch1  |||| Main motor |
| Motor2        | PB7    | T4Ch2  |||| Optional: Second motor¹ |
|               |        |
| UART1 Tx      | PA9    | TX1    | T1Ch2⁹ ||| Optional: UART, LED strip, CC |
| UART1 Rx      | PA10   | RX1    | T1Ch3⁹ ||| Optional: UART, LED strip, CC |
| UART2 Tx      | PA2    | TX2    | T5Ch3 | T9Ch1 | A2 | ESC Telem, RPM, CPPM, ADC, LED strip⁵ |
| UART2 Rx      | PA3    | RX2    | T5Ch4 | T9Ch2 | A3 | ESC Telem, RPM, CPPM, ADC, LED strip⁵ |
| UART3 Tx      | PC10   | TX3    | TX4 |
| UART3 Rx      | PC11   | RX3    | RX4 |
| UART4 Tx      | PA0    | TX4    | T5Ch1 | A0 |
| UART4 Rx      | PA1    | RX4    | T5Ch2 | A1 |
| UART5 Tx      | PC12   | TX5    |
| UART5 Rx      | PD2    | RX5    |
| UART6 Tx      | PC6    | TX6    | T8Ch1⁹ ||| Optional: UART, LED strip, CC, GPS |
| UART6 Rx      | PC7    | RX6    | T8Ch2⁹ ||| Optional: UART, LED strip, CC, GPS |
|               |        |
| SCL1          | PB8    | SCL1   |||| Internal baro |
| SDA1          | PB9    | SDA1   |||| Internal baro |
|               |        |
| SCL2          | PB10   | SCL2   | TX3 | T2Ch3 || Optional: External compass, UART3, PWM |
| SDA2          | PB11   | SDA2   | RX3 | T2Ch4 || Optional: External compass, UART3, PWM |
|               |        |
| NSS           | PA4    | NSS1   |||| Gyro SPI NSS |
| SCK           | PA5    | SCK1   |||| Gyro SPI SCK |
| MISO          | PA6    | MISO1  |||| Gyro SPI MISO |
| MOSI          | PA7    | MOSI1  |||| Gyro SPI MOSI |
| GEXT          | PA15   | EXTI   |||| Gyro INT |
|               |        |
| NSS           | PB12   | NSS2   |||| Flash SPI NSS |
| SCK           | PB13   | SCK2   |||| Flash SPI SCK |
| MISO          | PB14   | MISO2  |||| Flash SPI MISO |
| MOSI          | PB15   | MOSI2  |||| Flash SPI MOSI |
|               |        |
| ADC1          | PC0    | A10 |||| Optional: Vbat voltage sensor⁷ |
| ADC2          | PC1    | A11 |||| Vx voltage sensor⁷ |
| ADC3          | PC2    | A12 |||| 5V voltage sensor⁷ |
| ADC4          | PC3    | A13 |||| Optional: extra ADC input |
| ADC5          | PC4    | A14 |||| Optional: extra ADC input |
|               |        |
| LED STRIP     | PA8    | T1Ch1⁹ |||| Optional: Dedicated LED strip |
|               |        |
| BEEPER        | PC13   | GPIO |||| Optional: buzzer |
| LED1          | PC14   | GPIO |||| Green status LED³ |
| LED2          | PC15   | GPIO |||| Red status LED³ |
|               |        |
| USB DM        | PA11   | DM |||| USB data- |
| USB DP        | PA12   | DP |||| USB data+ |
|               |        |
| SWDIO         | PA13   | SWDIO |||| Debugger test pad⁴ |
| SWCLK         | PA14   | SWCLK |||| Debugger test pad⁴ |
|               |        |
| Free¹⁰        | PB2    |
| Free¹⁰        | PC8    |
| Free¹⁰        | PC9    |

¹ The optional motors and servos should have solder pads on the PCB.

² PC10/PC11 can be configured as UART3 or UART4, or a combination of RX3/TX4, allowing S.BUS and S.Port on the same socket.

³ A dual colour LED is preferred.

⁴ For easy debugging, GND,3V3,SWDIO,SWCLK solder pads should be available on the PCB.

⁵ PA2/PA3 is used for a combined ESC telemetry / RPM / Receiver pin header block.

⁶ A receiver can be connected if ESC telemetry is not used. PA2 and PA3 also support CPPM receivers.

⁷ A voltage divider and a filter cap is needed on each ADC input. The cutoff frequency for the input filter should be ~ 25Hz.

⁸ ~~Not used~~

⁹ TIM1 can be used only if TIM8 is unused; and vice versa.

¹⁰ If space permits, all unused/free pins should have solder pads on the PCB.


