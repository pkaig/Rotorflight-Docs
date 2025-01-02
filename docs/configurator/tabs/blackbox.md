# Blackbox

## What is Blackbox

Blackbox is a flight data recording feature in Rotorflight. A Blackbox log contains a lot of data, such as the attitude of the heli, gyro sensor measurements, PID data,  RC commands, motor outputs etc. It’s an extremely powerful tool for tuning and troubleshooting the heli.

## Blackbox data can be logged to:

* A flash chip on the FC. Logging is fast, but storage is limited, unless you are using a dedicated RF controller(FlyDragon F7 has 128MByte Flash), and copying log files can be slow.
* An SD card on the FC, it's fast and storage is only limited by the capacity of the SD card.
* An external logging device: [OpenLager](../../setup/openlager.md). These devices write the log to a micro SD card.
  
A flash chip or an SD card on the FC are nice, but if your FC doesn't have that you can connect an OpenLager logging device.

![Blackbox Tab](../img/blackbox-main.png)

## Blackbox Configuration

![Blackbox Tab](../img/blackbox-config.png)

### Logging Device

Here you can select the device type.

* **No Logging**: Disable Logging.
* **Onboard Flash**: Log to the onboard flash chip (if available).
* **SD Card**: Log to the onboard SD Card (if available).
* **Serial Port**: Log to an external logging device (eg. [OpenLager](../../setup/openlager.md)).

### Logging Mode

Select the preferred logging mode.

* **No Logging**: Disable Logging.
* **Normal**: Start logging when both [**ARM**](../../setup/arming.mdx) and [**BLACKBOX**](./modes.md#blackbox) switches are active.
* **Armed**: Start logging when [**ARM**](../../setup/arming.mdx) switch is active.
* **Switch**: Start logging when [**BLACKBOX**](./modes.md#blackbox) switch is active.

### Logging Rate

The log data is saved to the logging device with this rate. For logging to an external device, lower speed may be required.

Set it to 2kHz for OpenLager.

### Debug Mode

Choose what *extra* data is being logged, eight extra debug items are added to the Blackbox Log.

:::note
Under _Blackbox debug mode_ you can specify what should be logged. There are a lot of choices, but you can select _GYRO_SCALED_ for PID tuning, _GOVERNOR_ for analyzing the governor or _CYCLETIME_ if you're interested in CPU time.
:::

### Debug Axis

Choose which *axis* is being debugged. Applies to some of the debug modes.

## Blackbox Logging Options

![Blackbox Tab](../img/blackbox-options.png)

Here you activate the parameters that you want to log.

For general use activate the following options `Command` `Setpoint` `Mixer` `PID` `Raw Gyro` `Gyro` `Battery` `RSSI` `RPM` `Motors` `Servos`.

## Onboard dataflash chip

![Blackbox Tab](../img/blackbox-save.png)

* **Erase** - Erase Blackbox Data.
* **Save to file** - Download Blackbox Data.

## Mass Storage Mode

![Blackbox Tab](../img/blackbox-mass.png)

# Blackbox Explorer

The log files can be read with the [Rotorflight Blackbox Explorer](https://github.com/rotorflight/rotorflight-blackbox).
