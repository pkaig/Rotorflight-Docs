---
sidebar_position: 0
---

# Getting Started

The general process for setting up a helicopter using Rotorflight.  

This process is generic and may be slightly different, depending on your particular helicopter.  

1. Install the latest RF2 [release](../Tutorial-Setup/Flashing-the-firmware.mdx#install-rotorflight-configurator)
2. [Remap](../Tutorial-Setup/Remapping.mdx) your servos and motors if you are using a Betaflight FC, otherwise, skip this step.
3. [Calibrate the Accelerometer](../Configurator/Setup.md#calibrate-accelerometer).
4. Check you [Board alignment](../Configurator/Configuration.md#board-and-sensor-alignment) setting and adjust if necessary.
5. Connect [Receiver](../Configurator/Receiver.mdx) to a free UART and select corresponding receiver settings.
6. Select [Battery Voltage and Current Source](../Configurator/Power.md#battery) as per you setup, and Set Battery [Capacity](../Configurator/Power.md#capacity) and [Cell Count](../Configurator/Power.md#cell-count).
7. Select [ESC Throttle protocol](../Configurator/Motor-and-Esc.md#esc-throttle-protocol), and Optional: [ESC Telemetry protocol](../Configurator/Motor-and-Esc.md#esc-telemetry-protocol), Set [Gear Ratios](../Configurator/Motor-and-Esc.md#gear-ratio-configuration), and [Motor Pole Count](../Configurator/Motor-and-Esc.md#motor-pole-count).
8. Optional: Select and Setup the [Governor](../Tutorial-Setup/Governor.md).
9. Setup [Servos](../Tutorial-Setup/setup-servos.mdx).
10. Setup and Calibrate the [Mixer](../Tutorial-Setup/setup-mixer.mdx).
11. Setup the [Gyro RPM Filters](../Tutorial-Setup/RPM-Filters.md#basic-rpm-filters-settings).
12. Set the [Rates](../Configurator/Rates.md) as per flying style.
13. Set the [PID](../Configurator/Profiles.md#pid-controller-gains) Values.
14. Setup [ARMING](../Configurator/Modes.md#arm), and other required modes.
15. Setup [Profile Switching](../Tutorial-Setup/Profile-switching-example.md) and other [Adjustments](../Configurator/Adjustments.md) if required.
16. Setup [BLACKBOX](../Configurator/Blackbox.md#what-is-blackbox) Logging.
17. Optional: Setup [LUA Script](../Tutorial-Setup/Lua-Scripts.mdx#introduction) on radio.