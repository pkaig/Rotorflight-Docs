---
sidebar_position: 30
---
# Configuration tab

## Personalization
Allows you to set your heli name to be shown in the OSD, blackbox logs and diff/dump outputs.

![Configuration Tab](./img/config-prsnl.png)

## System Configuration

![Configuration Tab](./img/config-sys-conf.png)

### Gyro Update Frequency

This indicates the current gyro update frequency.

### PID Loop Frequency
This is the frequency that the control loop operates at. Set to between 1kHz and 2kHz. 

There is limited or no benefit in higher rates and will result in high loads for your flight controller. This could be an issue for F405 and F411 boards.  

### Accelerometer
This must be selected if you wish to use stability (6G modes) such as Angle, Horizon or Rescue modes. 

### Barometer
This is used for Altitude hold Rescue which is currently still being developed

### Magnetometer
Currently this does not provide any control functionality, however, it can be used for telemetry. 

## Features
This section is used to enable or disable features.

![Configuration Tab](./img/config-features.png)

:::tip
Features such as the GPS must be selected in the [Serial ports](#serial-ports) section before selecting the Feature here. 
:::

## Serial Ports
Please choose the functions you wish to assign to your UART. 

![Configuration Tab](./img/config-serial.png)

### MSP

As the name suggests, usually only used for lower-level communication using the MSP (MultiWii Serial Protocol) for configuration done by external devices, or to allow a more direct way of control. 
You can also set a specific baud rate.

### GPS
GPS is not currently used for Rotorflight for any flight controls. This can be used for telemetry purposes.

### Serial Rx
Check [Receiver](./Receiver) page for detailed info. 

### ESC Telemetry
Check [ESC Telemetry](./ESC-Telemetry) page for detailed info. 

### Blackbox Logging
This enables a UART for an external logging device such as [OpenLager](./Blackbox#openlager).

### Telemetry: FrSky SmartPort
This is used when connecting an FrSky SmartPort receiver pin to this UART.

## Board and Sensor alignment

Change the roll, pitch and yaw gyro alignment value until the model on the status page moves in the same direction as the gyro board.

A method of determining what settings to use: 
* set Roll, Pitch and Yaw values to 0 degrees.  
* set Gyro alignment to CW-0 degrees.  
* Move the FC around until the movement of the FC matches the movement of the helicopter on the "Status" page. You may have to "reset Z axis".  
* Now take note of how you have to rotate/flip the board in order to get the FC oriented in the way you wish to mount it in the helicopter. An example would be that you have to rotate the board 180 and flip. You would chose 'CW180 Flip' in the Gyro alignment dropdown.    

![Configuration Tab](./img/config-sens-align.png)

## Accelerometer Trim
This section is used to trim the roll and pitch axis while the helicopter is in Stability mode (e.g Angle, horizon or Rescue). 

The Transmitter trims for each cyclic axis must be at neutral when using Rotorflight (at 1500us). This will usually result in the helicopter drifting while in a stable hover. To correct for this drift the Accelerometer roll and pitch trims are to be used. 

This can be done either directly by the configurator or via the transmitter with [Lua](../Tutorial-Walkthroughs/Using-Stability-Modes-Example.md).

![Configuration Tab](./img/config-accel-trim.png)
