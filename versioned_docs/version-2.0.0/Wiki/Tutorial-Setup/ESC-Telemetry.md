---
sidebar_position: 120
---

# ESC Telemetry

:::info
The purpose of ESC telemetry is to provide a method of reading the values provided by the ESC. These are things such as RPM, Temperature, Voltage, Current and mAh consumed. This is accomplished by connecting the ESC telemetry wire to the flight controller with a spare UART.

ESC Telemetry currently supported are :

- **BLHELI32**: BLheli and KISS
- **HOBBYWING V4**: Platinum PRO V4, V4.1,& FLYFUN V5
- **HOBBYWING V5**: Platinum V5
- **SCORPION**: Unsc Telem
- **KONTRONIK**: Kosmik & Kolibri
- **OMPHOBBY**
- **ZTW**: Skyhawk
- **APD**: HV Pro UART telemetry
- **YGE**: OpenYGE - Note - The ESC must have firmware V1.03547 or above. At the moment this is in beta and has not been released. Please use the contact form to request the updated firmware. [YGE: Contact Us](https://www.yge.de/en/contact/)
  :::

### Select Serial Port

The ESC telemetry pin TX needs to be connected to a spare UART RX.

Select the UART from the Configuration page.

![ESC Telemetry](./img/esc-telem-uart.png)

### Select the Protocol

Select the correct ESC telemetry protocol based on the one you are using.

![ESC Telemetry](./img/esc-telem-sel-p.png)

### Power Config

Enable the Voltage and Current from the `Power` Tab.

![ESC Telemetry](./img/esc-telem-power.png)
