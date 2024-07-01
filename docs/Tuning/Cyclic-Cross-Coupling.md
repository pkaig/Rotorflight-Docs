---
sidebar_position: 60
---

# Cyclic Cross Coupling

## What is it?

During ticktocks, one might observe that the center of the main rotor rotates during stops. Another scenario is during hover, one can shake the elevator stick and observe a tilt in the roll axis and a significant drift in the yaw axis. These are both the symptoms of uncompensated cyclic cross coupling. 

Cyclic cross coupling happens mainly due to the pitch axis inputs. When the pitch command is given, due to the high moment of inertia of the helicopter in the pitch axis, the frame would "lag" behind the rotor disks. This difference in position creates a torque on the rotor blade and thus transfer to the roll axis due to gyroscopic precession. 

The cross coupling compensation simply take a derivative on the pitch SETPOINT and add it proportionally to the roll axis. This effectively pre-load the roll axis with a input command so that when the above scenario happens, the two effects cancel each other.

## How to tune it?

Start with a low value and increase when theres no significant coupling is observed or when there is a dimishing return. You might also want to try piroflips because cross-coupling gain changes the corresponding commands at different orientations during piroflips. Try increase the gain slowly so you can get used to the feeling.

From experience, the harder the main rotor dampener is, the lower cross coupling gain is required.

## (Advanced Topic) Constant Cross Coupling

The above cross coupling only happens at the moment of pitch (could also be a little bit of roll) input. However, there could be another scenario that a constant cross-coupling might occur. If the main blade flap axis is not centered at the middle commonly due to very hard dampeners, very low headspeed, or rotorhead designs, a constant cross coupling might occur because the phase lag of the rotor blade is no longer perfectly 90deg. In this case, you might want to consider adjusting the phase angle in the Mixer page. Usually a +2 to +10 deg would be a good range to start and more testing is needed. You might also want to make sure that it is doing the right thing. For CW rotor, when pushing the elevator, the swash should tilt slightly right, and when you pull the elevator stick, the swash should tilt slightly left.



