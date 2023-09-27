---
title: snapshot 2.0.0-20230724
authors:
  name: Rotorflight
  image_url: https://github.com/rotorflight.png
---

Rotorflight snapshot 2.0.0-20230724 is ready
NOTE! This snapshot is not suitable for end-users. It is intended for beta-testers.

* The Configurator is available to download [here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20230724).
* The LUA scripts is available to download [here](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20230730).

Please also read the Snapshots Wiki page for general information about snapshots.

Changes to the Firmware:
* Increase Governer total FF limit to 50%
* Fix Rescue MSP_RESCUE_PROFILE message
* Fix Rescue max_collective parameter handling
* Refactor collective-to-yaw precomp again
* Reorganise Adjustment Functions
* Fix LED strip and ADC on H7
* Change Collective curve (rates) scale
* Change PID gain scaling

Changes to the Configurator:
* Collective Rates fixed
* Collective-to-Yaw precomp fixed
* Rescue Altitude hold D-gain added
* Mixer Override for Yaw extended to -45°..45°
* Rx signal validity limits moved back to Failsafe
* Rx channel count bug fixed

Changes to the LUA scripts:
* Profile - Various and Profile - Rescue now work correctly with firmware 20230724