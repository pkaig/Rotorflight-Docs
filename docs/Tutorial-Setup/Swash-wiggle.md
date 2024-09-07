---
sidebar_position: 55
---

# Swashplate Wiggle

The swashplate can be configured to 'wiggle' as an indication for when you are
* Ready to fly
* Armed (default is disabled)
* FC Error detected
* FC Fatal Error

These can be enaabled (currently only via the CLI) using the following commands.

`set wiggle_enable_ready = ON or OFF (defailt ON)`  
`set wiggle_enable_armed = ON or OFF (default OFF)`  
`set wiggle_enable_error = ON or OFF (defailt ON)`  
`set wiggle_enable_fatal = ON or OFF (defailt ON)`  

The 'amount' (strength) of wiggle and 'speed' (frequency) can be modified by changing the values below.  
`set wiggle_strength = 50`  
`set wiggle_frequency = 10`  
