---
sidebar_position: 80
---

# OpenLager

OpenLager is a [Blackbox data logger developed by dRonin](https://github.com/d-ronin/openlager/wiki).

:::note
An OpenLager is not the much cheaper OpenLog. They can log much faster and is more reliable than the OpenLog because it uses a dedicated MCU for logging. The OpenLog; while looking very similar, really is not suitable for use in Rotorflight.
:::

Some versions use an open/lock hinge mechanism instead of a 'push to eject' SD card socket, so you can't wrap it in heat shrink tube. You can fix that by carefully flattening the SD card retainer pin a little bit.

![OpenLager](./img/OpenLager-slide-in-fix.png)

## Introduction

An OpenLager is an external logging devices that use SD cards. Logging with an OpenLager has several benefits compared to other logging methods:

- Virtually unlimited storage when using, for example, a 32GB SD card
- High read speeds when you eject the SD card and connect it directly to your PC
- Logging using an UART TX is a lightweight process and very MCU friendly, so you'll have more processing power for other tasks.

## Connecting an OpenLager

The OpenLager can be connected to the FC using just three wires: +5V, ground and a TX output pad of a free UART on the FC, which is connected to the RX pad of the logging device. As soon as you power the device on, it will create a new log file on the SD card. Then it'll log everything it receives to that file. Simple but effective.

After you've connected the OpenLager, you have to tell Rotorflight which UART the TX pad for the logger is connected to. You can specify that UART in the _Configuration_ tab, under _Blackbox logging_. For the OpenLager select 2000000 bps. Click _Save_ and _Reboot_.

![OpenLager port setup](./img/openlager-serial-port.png)

After configuring the OpenLager you can go to the *Blackbox* tab to specify what should be logged at what speed when.

:::note
For maximum performance the SD card should be formatted with the [SD Association's special formatting tool](https://www.sdcard.org/downloads/formatter). A fast SD card is needed, e.g. the Sandisk Extreme 16GB Class 10 UHS microSDHC.
:::


