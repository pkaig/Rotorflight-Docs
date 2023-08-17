---
sidebar_position: 90
---

# ESC Telemetry

:::info
The purpose of ESC telemetry is to provide a method of reading the values provided by the ESC. These are things such as RPM, Temperature, Voltage, Current and mAh consumed. This is accomplished by connecting the ESC telemetry wire to the flight controller with a spare UART. 

ESC Telemetry currently supported are :  
* KISS - BLheli  
* HOBBYWING V4  
* OMPHOBBY  
* KONTRONIK  
:::

### Select Serial Port
The ESC telemetry pin TX needs to be connected to a spare UART RX. Select the UART from the Configuration page. 

![ESC Telemetry](./img/ESC_Telem_1.png)

### Enable the feature
Select **ESC_SENSOR** from the features to enable reading from the ESC.

If you wish these values to be returned to the Tx you will also have to select the **TELEMETRY** and have a telemetry capable Receiver.  

![ESC Telemetry](./img/ESC_Telem_2.png)

### Half Duplex (to be updated)
The Telemetry wire can be connected to the UART TX (as opposed to the RX) if the UART is set to half duplex. In most cases just leave this OFF. This still needs to be added to the configuration. Currently it is enabled through the CLI.

`set esc_sensor_halfduplex = ON` 

### Set the Protocol (to be updated)
This still needs to be added to the configuration. Currently it is enabled through the CLI.

Please enter the protocol you wish to use from the following commands:  
* `set esc_sensor_protocol = NONE`  
* `set esc_sensor_protocol = KISS`  
* `set esc_sensor_protocol = HOBBYWINGV4`  
* `set esc_sensor_protocol = OMPHOBBY`  
* `set esc_sensor_protocol = KONTRONIK`  

**For Hobbywing V4**
Aditional parameters are provided for the current and zero offsets.

* `set esc_sensor_hw4_current_offset = 15`  
* `set esc_sensor_hw4_current_gain = 100`  
* `set esc_sensor_hw4_voltage_gain = 110`  

### Power Config
Enable the Voltage and Current from the ESC Sensor

![ESC Telemetry](./img/ESC_Telem_3.png)


