---
sidebar_position: 80
---

# Motor and ESC

The *Motors* tab is used to configure the ESC communications protocol as well as to provide the ability to test motor operation. Depending on the selected ESC protocol and selected Rotorflight features, you might need to specify some other parameters as well.

::::info
This section is about Rotorflight communicating with the ESC. The settings for your motor -such as timing, braking and motor update frequency- can only be set in your ESC, and not in Rotorflight.
::::

Set the ESC protocol required for your ESC under *ESC/Motor protocol*. Usually this would be *PWM* or *DSHOT300*.

![Motor and ESC](./img/motor-2.png)

If you want to use the Rotorflight *GOVERNOR* or *RPM_FILTER* features, the FC also needs to know the [RPM of the main motor](rpm-measurement), main rotor and optionally the tail rotor. For this you have to exactly specify the *Motor pole count* and the *Gear ratios*. With this info, the FC can calculate the:
- Main motor RPM = eRPM / (motor pole count / 2)
- Main rotor RPM = Main motor RPM * main motor pinion tooth count / main gear tooth count

If you don't use those features, you don't have to specify the gear ratios and motor pole counts.

### PWM Protocol
Traditional helicopter ESCs (e.g. from Hobbywing, YGE, Scorpion or Castle) use [PWM](https://en.wikipedia.org/wiki/Servo_control), an analog protocol. Here's a PWM setup for a Gaui X3.

![Motor and ESC](./img/motor-1a.png)

**ESC Update Rate:** the PWM update rate for your ESC. Usually between 50-400Hz.

**Disarm Throttle PWM value:** the value that is sent to the ESC when the craft is disarmed. It should stop the motors. Usually 1000µs.

**0% Throttle PWM value:** the value that is sent to the ESC when the craft is armed and at 0% throttle.

**100% Trottle PWM value:** the value that is sent to the ESC when the craft is armed and at full throttle.

### DSHOT Protocol
Most drone ESCs support DSHOT, a digital protocol. Here's a DSHOT setup of an XK K120.

![Motor and ESC](./img/motor-1b.png)

If you use DSHOT, use either DSHOT150 or DSHOT300. DSHOT600 is not recommended. Also make sure that the main motor isn't actively being braked by the ESC, especially if you [don't have a one way bearing](https://youtu.be/ahWzhT5Bn28) on the main shaft.
- BLHeli_32: set *Non Damped Mode* to *On* on the main motor ESC
- Bluejay: set *Maximum Breaking Strength* to *0*

#### Bidirectional DSHOT
This switch is only visible when the *ESC/Motor protocol* is DSHOTxxx. It enables motor eRPM telemetry on supported ESCs via [bidirectional DSHOT](rpm-measurement#bidirectional-dshot) and can be used to facilitate the *GOVERNOR* and/or *RPM_FILTER* features. If you use bidirectional DSHOT you don't have to use a frequency sensor for obtaining the eRPM of the motor(s).

### Gear Ratio Configuration

![Motor and ESC](./img/motor-3.png)

Enter the number of teeth for the main rotor gearing [Teeth on Pinion gear]/[Teeth on Main Gear]. For a direct drive Main rotor this is just set to 1 / 1.

Enter the number of teeth for the Tail rotor gearing [Teeth on Tail gear]/[Teeth on Autorotation Gear]. For a direct drive tail this is just set to 1 / 1.

::::note
Some large helicopters may use a 2 stage gearing system (e.g. Pinion-1/Main-1/Pinion-2/Main-2). This will have to be calculated and entered as: [Pinion-1 X Pinion-2] / [Main-1 x Main-2].
::::

### Motor Pole Count
Determine the number of magnetic poles for each motor. Count the number of magnets on the motors rotor. In the example below the magnets (circled) are fixed to the outer bell which in total has 14. This allows the flight controller to know how many electrical phase rotations are required to complete one physical motor revolution.

![Motor and ESC](./img/motor-4.png)

## Motor Override
Motor Override functionality is provided to test the operation of each motor directly. This functionality will make the motors spool up. Do this WITHOUT the main or tail rotors fitted!

![Motor and ESC](./img/motor-6.png)

Throttle - This is the command being sent from the flight controller to the ESC.

RPM - The measured RPM telemetry feedback. As the motor spins this should read a value related to the current speed.

Errors (only with DSHOT) - This shows the status of the RPM telemetry signal. This should be 0%.

::::note Slider
If you use the slider, make sure you release the mouse button. Nothing changes as long as you hold the mouse button down!
::::

::::note BLHeliSuite32
The Test motors function in BLHeliSuite32 doesn't work when using Rotorflight. It will give an error like 'Initialization of Motor Test Mode failed! Please check current Unknown rev 4.3.0 support for this application function!'.
::::
