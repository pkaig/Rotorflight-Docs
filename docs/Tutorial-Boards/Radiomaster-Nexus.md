# Radiomaster Nexus

## Features
https://www.radiomasterrc.com/products/nexus-helicopter-flight-controller

## ELRS
* non-ELRS users don't need to deal with dangling antennas. 
* ELRS users have a plug-and-play option with the RP3-H. 

### Update ELRS
ELRS RX version MUST match the ELRS TX version! 

Using the WiFi method is the easiest.
1. Plug the NEXUS with USB-C without LiPo and wait for 60s
3. Download ExpressLRS configurator
4. Build 
5. Connect to "ExpressLrs RX"
6. Upload bin file

## Mounting

WIP

## F.Port Support
If you want to connect f.port to sbus port then you need to switch the resources from rx to tx
F.port is one wire only
You connect it to SBUS slot
Then in CLI you switch the resources

```
resource SERIAL_RX 2 NONE
resource SERIAL_TX 2 A03
```
![f-port](https://github.com/cedricwalter/Rotorflight-Docs/assets/763491/ce4b6dc5-9908-4d38-a8de-bf97ef964bee)

Then in configurator you enable these two

# Setup

## Radiomaster Tx16s setup
use 
* https://github.com/bob01/etx-templates
* https://github.com/offer-shmuely/rf2-touch-edgetx

## Rotorflight setup
Long
* https://www.youtube.com/live/VcOebsyBGqM
* https://www.youtube.com/watch?v=YdfZgF5WKuQ

Fast
* 14 min setup https://www.youtube.com/watch?v=WxYWBPVDbu0

# FAQs

## Motors are not spooling
Does it spool if you use override? YES look at the arming flag to locate issue (https://www.rotorflight.org/docs/Tutorial-Setup/Status#arming), NO! you may need to calibrate ESC

## Throttle position is higher than the min arm position
1. Lower the throttle in your TX
2. If you can't make your throttle go lower on your TX you can increase the throttle channel value for Armin on the receiver tab


## Tips
- A, B, C are nearly identical expansion ports
- You can use the S.BUS port for ESC telemetry, if you are not using it for S.BUS or F.Port. You can use the S.BUS port for F.Port, and use the DSM port for ESC telemetry Or you can use any of the expansion ports for ESC telemetry
