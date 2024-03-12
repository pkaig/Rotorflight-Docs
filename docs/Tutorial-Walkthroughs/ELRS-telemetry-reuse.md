---
sidebar_position: 6
---

# ELRS Telemetry Reuse

The Crossfire Protocol (CRSF) used by ELRS does not include the full range of sensors that can be useful for rotorflight. Crossfire was specifically designed for Drones, which generally have different parameters that are useful to the pilot.

As a temporary fix for this issue a series of telemetry items that are currently transferred to the transmitter can be ***re-used*** to transfer information we would rather see. There are four messages that can be chosen, each with a variety of telemetry sensor options.

1. Flight mode 
    `set crsf_flight_mode_reuse = [OPTION]`  
    [Option] Allowed values: NONE, GOVERNOR, HEADSPEED, THROTTLE, ESC_TEMP, MCU_TEMP, MCU_LOAD, SYS_LOAD, RT_LOAD, BEC_VOLTAGE, BUS_VOLTAGE, MCU_VOLTAGE, ADJFUNC, GOV_ADJFUNC
2. Pitch attitude 
    `set crsf_att_pitch_reuse = [OPTION]`  
    [Option] Allowed values: NONE, HEADSPEED, THROTTLE, ESC_TEMP, MCU_TEMP, MCU_LOAD, SYS_LOAD, RT_LOAD, BEC_VOLTAGE, BUS_VOLTAGE, MCU_VOLTAGE
3. Roll attitude
    `set crsf_att_roll_reuse = [OPTION]`   
    [Option] Allowed values: NONE, HEADSPEED, THROTTLE, ESC_TEMP, MCU_TEMP, MCU_LOAD, SYS_LOAD, RT_LOAD, BEC_VOLTAGE, BUS_VOLTAGE, MCU_VOLTAGE 
4. Yaw position
    `set crsf_att_yaw_reuse = [OPTION]`  
    [Option] Allowed values: NONE, HEADSPEED, THROTTLE, ESC_TEMP, MCU_TEMP, MCU_LOAD, SYS_LOAD, RT_LOAD, BEC_VOLTAGE, BUS_VOLTAGE, MCU_VOLTAGE
5. GPS Heading
    `set crsf_gps_heading_reuse = [OPTION]`  
    [Option] Allowed values: NONE, HEADSPEED, THROTTLE, ESC_TEMP, MCU_TEMP, MCU_LOAD, SYS_LOAD, RT_LOAD
6. GPS Ground Speed
    `set crsf_gps_ground_speed_reuse = [OPTION]`  
    [Option] Allowed values: NONE, HEADSPEED, THROTTLE, ESC_TEMP, MCU_TEMP, MCU_LOAD, SYS_LOAD, RT_LOAD
7. GPS Altitude
    `set crsf_gps_altitude_reuse = [OPTION]`  
    [Option] Allowed values: NONE, HEADSPEED, THROTTLE, ESC_TEMP, MCU_TEMP, MCU_LOAD, SYS_LOAD, RT_LOAD
8. GPS Sats
    `set crsf_gps_sats_reuse = [OPTION]`  
    [Option] Allowed values: NONE, ESC_TEMP, MCU_TEMP, PROFILE, RATE_PROFILE, LED_PROFILE

This tutorial will guide you through the process of *re-using/transforming* the unused ELRS sensor into a more useful Rotorflight sensors.

The following procedure will allow you to get the following telemetry sensors on your radio, these sensors are:

* Flight/Governor status and adjustment functions
* BEC Voltage
* VBUS(5V) Voltage
* Real time controller load
* Throttle
* ESC Temperature
* Headspeed
* MCU Temperature

To begin:

* Enable Telemetry. If you have not done so already enable the telemetry toggle on the receiver tab.

![Receiver Tab](./img/elrs-reuse-telem-enable.png)

* Enable each of the telemetry messages that you wish to 'reuse'.

![Receiver Tab](./img/elrs-reuse-telem-sensors.png)

* Enter CLI tab, copy and paste the below commands, then type `save` and hit enter.

```
set crsf_flight_mode_reuse = GOV_ADJFUNC
set crsf_att_pitch_reuse = BEC_VOLTAGE
set crsf_att_roll_reuse = BUS_VOLTAGE
set crsf_att_yaw_reuse = RT_LOAD
set crsf_gps_heading_reuse = THROTTLE
set crsf_gps_ground_speed_reuse = ESC_TEMP
set crsf_gps_altitude_reuse = HEADSPEED
set crsf_gps_sats_reuse = MCU_TEMP
```

Next, go to your radio telemetry page and discover new sensors.

You should see eight sensors, called: *`FM, Ptch, Roll, Yaw, Hdg, Gspd, Alt, Sats`*

These sensors will be transformed to the following sensors respectively: *`FM, Bec Voltage, VBus Voltage , Real Time Load, Throttle, ESC Temperature, Headspeed, MCU Temperature`*

Copy the sensors from *`Ptch`* to *`Sats`*

Rename the sensors and modify the Unit, Precision, and ratio as per the below pictures.

#### For *Ptch*

![ELRS Reuse](./img/elrs-reuse-bec.png)

#### For *Roll*

![ELRS Reuse](./img/elrs-reuse-bus.png)

#### For *Yaw*

![ELRS Reuse](./img/elrs-reuse-rtl.png)

#### For *Hdg*

![ELRS Reuse](./img/elrs-reuse-thr.png)

#### For *Gspd*

![ELRS Reuse](./img/elrs-reuse-esct.png)

#### For *Alt*

![ELRS Reuse](./img/elrs-reuse-rpm.png)

#### For *Sats*

![ELRS Reuse](./img/elrs-reuse-mcut.png)

After you finish you will see the new sensors in your telemetry page as per below.

![ELRS Reuse](./img/elrs-reuse-tele.png)

You can use these new sensors to monitor your heli and create useful alarms and warnings.
