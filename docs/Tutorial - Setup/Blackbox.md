---
sidebar_position: 170
---

# Blackbox logging

## What is Blackbox

Blackbox is a flight data recording feature in Rotorflight. A Blackbox log contains a lot of data, such as the attitude of the heli, gyro sensor measurements, RC commands, motor outputs etc. It’s an extremely powerful tool for tuning and troubleshooting the heli.

## what are the blackbox logging devices?

Blackbox data can be logged to:

* An SD card on the FC. This is probably the best way to log: it's fast and storage is only limited by the capacity of the SD card.
* A flash chip on the FC. Logging is fast, but storage is limited and copying log files can be slow.
* Or to an external logging device: OpenLog or OpenLager. Both devices use a micro SD card. OpenLog is slow, OpenLager is a lot faster.
  
A flash chip or an SD card on the FC are nice, but if your FC doesn't have that you can connect an OpenLog or OpenLager logging device.

## Connecting OpenLog or OpenLager

OpenLog and OpenLager can be connected to the FC using just three wires: +5V, ground and a TX output pad from a free UART on the FC, which is connected to the RX pad of the logging device. As soon as you power the device on, it will create a new log file on the SD card. Then it'll log everything it receives to that file. Simple but effective. For maximum performance the SD card should be formatted with the SD Association's special formatting tool. A fast SD card is needed, e.g. the Sandisk Extreme 16GB Class 10 UHS microSDHC.

## OpenLog

OpenLog is a data logger developed by SparkFun. It can record up to 250kbps, but since it doesn't have a write buffer data can be lost. For better results the original SparkFun firmware should be replaced with Blackbox firmware. You need an FTDI cable/adapter to update the OpenLog board. There are also OpenLog clones for sale that are already equipped with Blackbox firmware. You can check your firmware by inspecting the Config.txt file on the SD card, a file that will be created if it doesn't already exist. If it just states the baud rate (e.g. a line with a number and then a line with the word baud), it's using the Blackbox firmware. The SparkFun firmware specifies more properties in Config.txt: baud, escape, esc#, mode, verb, echo, ignoreRX.

## OpenLager

OpenLager is a Blackbox data logger developed by dRonin. It can log a lot faster (up to 2470kbps) and uses a write buffer. It's superior to OpenLog, and unless you're on a very tight budget there's no excuse not to use OpenLager.

Some versions use an open/lock hinge mechanism instead of a 'push to eject' SD card socket, so you can't wrap it in heat shrink tube. You can fix that by carefully flattening the SD card retainer pin a little bit.



