---
sidebar_position: 50
---

# Setup

![Setup Tab](./img/setup-main.png)

## Calibrate Accelerometer

The accelerometer is used to determine the orientation of the flight controller. It is used to determine the pitch, roll and yaw angles. You can calibrate it here, following the instructions.

:::info
The accelerometer is used for self stabilization features, like angle, horizon, acro trainer, and even rescue. If you do not intend to use these features, you can skip this step, or even disable the accelerometer entirely.
:::

## Calibrate Magnetometer

The magnetometer (compass) is used to determine the heading of the flight controller in 3d space. This is useful for more accurate information for GPS rescue. Calibrate it following the instructions

The magnetometer calibration process is time limited, you only have 30 seconds to do the movements.

## Reset Settings

:::danger
This will reset ALL settings to default, leading to an empty config. This is not a "Factory Reset" for your heli or flight controller, nor will it reset your just-changed settings. It's to be used as a hard reset, and can lead to unpredictable results, or you may even need to re-flash in order to even be able to connect again.
:::

## Bootloader/DFU

A manual way to put the flight controller into DFU (Device Firmware Update) mode without having to hold down the physical boot button. This is useful if you're having issues when flashing. Board will remain in DFU mode until cycled or a flash is completed.

## Mass Storage Mode

Reboot into mass storage mode to access blackbox data logs.

## System Reboot

Reboot and reinitialize the system.

