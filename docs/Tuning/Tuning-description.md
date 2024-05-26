---
sidebar_position: 20
---

# Tuning your Helicopter

The default tuning parameters supplied with Rotorflight are designed to be safe and flyable for all helicoptes. This means in most cases the helicopter will not be responsive and locked in on your first flight and some tuning will be required. 

These tuning parameters are located on the Profile tab in the [Configurator](../Tutorial-Setup/Profiles.md) and could also be changed via the [LUA Scripts](../Tutorial-Setup/LUA-Scripts.md) or [Adjustments](../Tutorial-Walkthroughs/Tuning-using-Adjustments.md) or Adjustments

## Tuning Profile PID:  
![Profile PID](./img/tuning-pid.png)

:::caution
Please start by confirming your filters are working correctly before you increase your tuning parameters. If you do not have filters enabled it is particularly important that you do not use Derivative. This can result in hot Motors and Servos. 
:::

:::note
What do we mean "wobble"??
When tuning parameters are too high the helicopter will wobble or shake during some movements. Each time we increase a tuning value we need to test fly and see if the new setting is too high. Test this in the following way:
* Beginner: Tap the stick and see if it shakes/shudders/wobbles
* Average: Do some flips with sudden stops, try going fast and tapping the stick, do some Tictocs
* Advanced: Do crazy high speed high rate stuff that makes the FC sweat and see if it freaks out :stuck_out_tongue_winking_eye:.

## Please also see the General Guidlines below for more specific descriptions
:::

1. Increase Derivative (D) on each axis individually, (roll, pitch, yaw) until it wobbles, then back off a bit. **(remember!! don't do this if your filters are not working)**.  

2. Increase Proportional (P) on each axis individually, until it wobbles, then back off a bit.
3. Increase Integral (I) on each axis individually, until it wobbles, then back off a bit.
 
4. Set Feedforward so that you get good response and Integral (I) remains near 0 in full stick flips and rolls (viewed using the blackbox logs). Feedforward can also be tuned by following the desctiption in [Tune Feedforward](Tune-Feedforward.md). 
 
5. If necessary, then tweak P:D ratio to tweak stick response damping to your liking.

6. Increase [HSI](./High-Speed-Integral.md) until it wobbles when jabbing elevator at full collective, back off a bit. 

![Profile HSI](./img/tuning-hsi.png)

7. Increase Boost (B) if you want sharper/faster response.

## General Guidelines

* The higher the gains are, the better the heli response to inputs, the more "locked in" heli feels.
* The pitch axis is the most difficult axis to tune. It is advised to start here.
* The roll ais is the easiest. Many different gains works on the roll axis. It is advised to tune last.
* D-gain dampens oscillations caused by P, P-gain dampens oscillations caused by I.
* I-oscillation are very slow (0.5-1Hz) while P and D oscillations are fast (5-8Hz).
* If there is I-oscillation, one could lower the I-gain or raise the P-gain.
* The best maneuver to see I-oscillation is to pirouetting long pitch pumps. If the heli does not stop clean and has a large shake, it is either I-gain being too high or P-gain being too low.
* It is possible to use the same I-gain on pitch and roll axis.
* Check tick-tock stops to see if P and D are too high by observing the fast oscillations. If oscillations are mainly slow, I-gain might be too high.
* The B-gain should be increased incrementally to fit how sharp the response you want. Usually only pitch needs a significant B-gain.
* Too high on B-gain results in unwanted oscillations at stops if low B-gain did not cause it.
* One could also experiment the I-relax to tune out the I-oscillations at stops. Lower number means stronger relax. Notice that a extremely low number might make the helicopter feel unpredictable. low number also hide gain imbalance that could show up during high-demand maneuvers or natural occuring disturbances (like a gust of wind)
