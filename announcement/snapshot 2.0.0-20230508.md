---
title: snapshot 2.0.0-20230508
authors:
  name: Rotorflight
  image_url: https://github.com/rotorflight.png
---

Rotorflight snapshot 2.0.0-20230508 is ready
NOTE! This snapshot is not suitable for end-users. It is intended for beta-testers.

* The Configurator is available to download [here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20230508).
* The Blackbox is available to download [here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20230508).
* The LUA scripts is available to download [here](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20230510).

Please also read the Snapshots Wiki page for general information about snapshots.

Changes to the firmware:
* CRSF Flight Mode reuse fixed (system lockup with ELRS)
* Governor Mode1 fixed without Voltage sensor
* Filter stack refactored
* PID loop saturation fixed
* CPU and System Load fixed
* BlackBox header improvements
* DEBUG log improvements
* ARM status LED indication improvements

Changes to the Configurator:
* Filtering setup refactored
* System and CPU Load fixed
* Beeper flags fixed

Changes to the BlackBox:
* Add missing Debug in in 'Add Graph'
* Fix gyro graph scaling