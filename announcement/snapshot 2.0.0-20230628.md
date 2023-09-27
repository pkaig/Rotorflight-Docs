---
title: snapshot 2.0.0-20230628
authors:
  name: Rotorflight
  image_url: https://github.com/rotorflight.png
---

Rotorflight snapshot 2.0.0-20230628 is ready
NOTE! This snapshot is not suitable for end-users. It is intended for beta-testers.

* The Configurator is available to download [here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20230628).
* The Blackbox is available to download [here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20230628).
* The LUA scripts is available to download [here](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20230628).

Please also read the Snapshots Wiki page for general information about snapshots.

Changes to the firmware:
* Servo twitch at reboot fixed
* OMP Hobby ESC telemetry protocol added
* HobbyWing ESC telemetry fixed
* ESC telemetry debug refactored
* ESC telemetry stream collection support added
* BLACKBOX_ERASE mode fixed
* Error decay (I-term decay) parameter added for cyclic and yaw
* Collective to Yaw precompensation refactored
* Unsynced motor update rate limits refactored
* MSP message fixes

Changes to the Configurator:
* Rates Smoothness added to Rates tab
* Collective added to Rates tab
* ESC Debug modes fixed
* ESC sensor fixed in Power tab
* Receiver tab and support refactored
* Unsynced PWM rate handling fixed
* MSP messages aligned with new firmware
* Localization disabled until translations done

Changes to the Blackbox:
* ESC Sensor debug fixed
* Custom event types added

Changes to the LUA Scripts:
* Support for rates smoothness added
* Support for error decay added
* Filter support fixed