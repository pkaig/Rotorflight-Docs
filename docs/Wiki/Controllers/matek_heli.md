---
sidebar_position: 50
---

# Matek G474Heli

![Matek G474HELI](./img/matek-g474.png)

:::info Specifications  
### Hardware Specifications： 
MCU: STM32G474CE  
IMU: ICM42688-P  
Black Box: W25N01G (128MB)  
Baro: SPL06 (I2C2）   
LED: LED_STRIP port  
Beeper: Buzzer output  
USB: Type-C  
UARTS: UART1, UART2，UART3  
I2C: I2C1  
ADC: Battery measurement VBat 2-6s (5.4-30v)
Servo Pins: CH1-CH4  
Motor Pins: M1, M2  
RPM Inputs: RPM Frequency input  
Onboard BEC: 5 or 7.2v selectable (disable using bridge if using external BEC)   
Dimensions: 38mm x 26mm x 13mm  
Weight: 15g  
:::

### Rotorflight Target
When updating Rotorflight firmware. Please use the MATEKG474HELI target.

![Matek G474Heli Target](./img/g474-target.png)

### Wiring

![Wiring Diagram](./img/g474-wiring.jpg)

### UART ports

![UARTS](./img/mt-uarts.png)

![UARTS](./img/mt-ports.png)

### Onboard BEC
 The Matek G474Heli contains a 5A-8A peak, Variable voltage (5v or 7.2v) BEC to supply the servos. The BEC will supply 5v by default and 7.2 v when the solder bridge is connected. THis is powered by the VBat connection.

:::caution
If using an external BEC the internal BEC MUST be disabled via the [Vx Off] solder bridge.  
:::

![BEC](./img/mt-bec.png)

### Manuals
Detail specifications and documentation available at the Matek website.  
[Matek G474-HELI website](https://www.mateksys.com/?portfolio=g474-heli)
