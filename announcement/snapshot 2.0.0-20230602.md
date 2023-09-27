---
title: snapshot 2.0.0-20230602
authors:
  name: Rotorflight
  image_url: https://github.com/rotorflight.png
---

Rotorflight snapshot 2.0.0-20230602 is ready
NOTE! This snapshot is not suitable for end-users. It is intended for beta-testers.

* The Configurator is available to download [here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20230602).
* The Blackbox is available to download [here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20230602).
* The LUA scripts is available to download [here](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20230602).

Please also read the Snapshots Wiki page for general information about snapshots.

Changes to the firmware:
* RPM filter refactored
* ESC telemetry refactored
* Gyro filter config sanity checks added
* motor_rpm_lpf default changed to 100Hz
* fterm_filter removed in PID mode 9
* pid_dterm_mode and pid_dterm_mode_yaw enabled
* debug_axis parameter changed to an integer value
* led CLI command fixed to be backwards compatible
* SPI ELRS binding bugfix cherry-picked

Changes to the Configurator:
* Refactor RPM filter support
* Fix filter config corruption
* Fix debug axis values
* Fix debug mode names
* Reorganise tabs

Changes to the Blackbox:
* Win32 build added
* More Debug field fixes

Changes to the LUA Scripts:
* PID Error limits fixed
* Rate selection fixed
* Better labels fox small screens
* Filter config aligned with the firmware