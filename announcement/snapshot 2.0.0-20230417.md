---
title: snapshot 2.0.0-20230417
authors:
  name: Rotorflight
  image_url: https://github.com/rotorflight.png
---

Rotorflight snapshot 2.0.0-20230417 is ready
NOTE! This snapshot is not suitable for end-users. It is intended for beta-testers.

* The Configurator is available to download [here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20230417).
* The Blackbox is available to download [here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20230417).
* The LUA scripts is available to download [here](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20230510).

Please also read the Snapshots Wiki page for general information about snapshots.

Changes to the firmware:
* Add throttle command to BlackBox log
* Add crsf_flight_mode_reuse parameter
* Fix Horizon mode gain
* Fix Error Rotation (piro compensation)
* Fix MIXER MSP format (trims + swash phase)
* Refactor Custom Defaults handling
* Refactor Altitude fusion
* Simplify PID Mode#2
* Improve PID parameter defaults
* Improve Gyro filter parameter defaults

Changes to the Configurator:
* Fix Receiver tab Model Preview
* Add Zoom function on Ctrl-Wheel
* Refactor Custom Defaults handling
* Fix Blackbox Log field selection
* Fix MSP_MIXER_CONFIG parameters
* Fix Gyro & PID loop speed calculation

Changes to the BlackBox:
* Update Flight Mode flags
* Update Feature flags
* Update Field names
* Update Field value presentations
* Update enabled fields handling
* Remove broken Heading estimation
* Clean up whitespace in the code