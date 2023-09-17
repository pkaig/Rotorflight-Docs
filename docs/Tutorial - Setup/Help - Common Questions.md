---
sidebar_position: 1
---

# Help - Frequent questions?

A list of common config issues and the solutions?



## Motor won't start
1. Is ARM mode configured? 
* Please check your Arm Mode has been enabled. See details in the [Modes](./Modes#arm) 
* Note!! Arm and Throttle hold need to be on different switches. The FC must see minimum throttle before Arm is enabled; therefore, if Arm activates at the same time as throttle hold is removed, it will fail the minimum check. 
* Check status page for Arming disables  
3. Using a Governor?  
* Does the Motor spool in Governor 'passthrough'. If not this could indicate a pin or timer alocation issue. Also please check your Reciever is connected and has the correct channel order.  
* Does the Motor spool in Governor 'Mode 1'. Please confirm you have either Frequency input or Bi-directional Dshot enabled and functioning. Using the Motor override run the motor at minimum speed and confirm there an RPM signal present  
* Governor mode 'Mode 2'. If the motor is able to spool in the other modes but not Mode 2 it means the Battery Voltage is not available. Please update this in the Power tab. 


## Telemetry 
1. 
2. 
3.  