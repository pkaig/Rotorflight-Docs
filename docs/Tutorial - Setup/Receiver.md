---
sidebar_position: 50
---

One of the first things you should do is to connect a receiver to the FC. Your FC has several UARTs, and each UART has an RX and a TX. A receiver needs to be connected to an RX and/or TX pad, depending on the type of receiver.

First activate `Serial RX` on that UART.

![Receiver Tab](./img/receiver-uart.png)

* SBUS needs to be connected to an RX pad. With `Inverted Serial Signaling` set to ***ON***

![Receiver Tab](./img/receiver-sbus.png)

* [SBUS with SmartPort](https://oscarliang.com/sbus-smartport-telemetry-naze32/): the SBUS pin needs to be connected to a free UART RX, with `Inverted Serial Signaling` set to ***ON***, and the S.Port pin needs to be connected to a free UART TX of *another free UART*.

![Receiver Tab](./img/receiver-sbus.png)
![Receiver Tab](./img/receiver-uart-sport.png)


* F.Port needs be connected to a TX pad. With `Inverted Serial Signaling` set to ***ON*** ,and `Half-Duplex` set to ***ON***

![Receiver Tab](./img/receiver-fport.png)

* [CRSF/ELRS](https://www.expresslrs.org/2.0/quick-start/receivers/wiring-up/) needs an RX and a TX on the same UART. 

![Receiver Tab](./img/receiver-crsf.png)

:::note
The `Inverted Serial Signaling` option will work only on F7/H7 type mcu, if you are using an F4 mcu, then you need to use and external signal inverter, or hack your receiver to get an Un-Inverted signal for SBUS, S.Port, and F.Port.
for more info check [Uninverted SBUS and Smart Port on Frsky Receivers](https://oscarliang.com/uninverted-sbus-smart-port-frsky-receivers/)
:::

Please see the documentation for your FC for more details on how to connect your receiver. 

![Receiver Tab](./img/receiver-tab.png)

## Configure your receiver

Connect the FC to your computer and go to the *Receiver* tab in Rotorflight Configurator to configure your receiver.
- Check *Channel Map* and make sure the *Receiver Channels* respond as expected. 
    * For **CRSF/ELRS** use *AECR1T23* Channel Order, *ARM* switch should be always set to *CH5*.
- Revert channels on your transmitter if a channel responds the wrong way around. 
- Make sure that centre stick is at 1500µs. You might need to recalibrate your transmitter now and then.
- Set channel endpoints to 1000µs and 2000µs.
- Do not use trim for Roll, Pitch or Yaw on your transmitter. 
- You can use trim for Collective to adjust zero collective pitch.

You should end up with something like this:  
![Receiver tab](./img/tx-output-calibrated.gif)

### Deadband

Set *Cyclic Deadband* and *Yaw Deadband* to the smallest possible value that doesn't make your model drift in the *Rates Preview* window.

### OpenTX / EdgeTX

The channel mid- and endpoints can be set on the *Output* page of your model. 
- Set *Min* so that full left/down stick indicates 1000µs (e.g. -97.8).
- Set *Max* so that full right/up shows 2000µs.
- Set *PPM Center* to 1500.

### But... my transmitter can't set endpoints!
Some old transmitters can't adjust endpoints. In that case you could use the `rxrange` CLI command to scale the output of your transmitter to 1000-2000µs. [Oscar](https://oscarliang.com/adjust-tx-channel-mid-end-point/) can show you how.

### I'm only using RX2 for my receiver. Can I use TX2 for something else?

No. You can't connect two different devices to the same UART. So you can't connect an SBUS receiver to RX2 and OpenLager to TX2, for example.

### Calibrating Stability Mode

The stability modes (Angle, Horizon or Rescue) can be calibrated so that the heli doesn't drift much when using such a mode. This can only be done via the [accelerometer trims](https://github.com/rotorflight/rotorflight/wiki/Using-stability-modes/_edit#calibrating-stability-modes). Do not use trim on your transmitter.


