---
title: snapshot 2.0.0-20230822
authors:
  name: Rotorflight
  image_url: https://github.com/rotorflight.png
---

Rotorflight snapshot 2.0.0-20230822 is ready
NOTE! This snapshot is not suitable for end-users. It is intended for beta-testers.

NOTE! The locales (language translations) are now ready for translation. From now on, they will be kept up-to-date.

* The Configurator is available to download [here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20230822).

Please also read the Snapshots Wiki page for general information about snapshots.

Changes to the Firmware:
* Add linear decay limit to error decay
* Add tail_center_trim parameter
* Add cyclic servo speed equaliser
* Add cyclic crosstalk precomp
* Add setpoint boost (B-term)
* Fix cyclic limit handling in the mixer
* Fix collective rates default from 25° to 12.5°
* Fix PID gain defaults
* Remove PID Mode 9

Changes to the Configurator:
* Locales updated for translation effort
* Yaw limits in Mixer extended to 45°
* MSP aligned with the firmware

Changes to the LUA scripts:
* Aligned MSP messages with firmware 20230822
* Added stick booster to the Profile - PIDs page.
* Added error decay limits to the Profile - Various page