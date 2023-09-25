---
sidebar_position: 150
---

# Profiles
:::info
The purpose of profiles are to store in flight tuning parameters. The aim is usually to have several 'profiles' that you can switch between during flight to change flight performance. Things like different headspeeds, tuning, rescue settings etc can be 'tuned' for the individual flight mode. Please see the [profile switching example](./)
:::

## Main Tuning Parameters
![Profiles](./img/profiles-1.png)

#### Proportional
The gain factor that is proportional to the rate error. High proportional gain increase response speed of the helicopter. Low proportional gain results in overall slow system response. Too high results in fast oscillation (~20hz). It also helps reduce the slow oscillation due to high Integral gain.

#### Integral
The gain factor that is proportional to the accumulated error. Low integral gain results in drift when hovering, and uneven roll or flip rate during continuous roll / flips. It also results in the helicopter not "wanting" to finish maneuvers. Integral too high results in slow oscillation (1-3hz) during cyclic input stops and/or during high disturbance scenarios such as stops of (piro) pitch pumps and tick-tock stops.

#### Derivative
The gain factor proportional to the change of error. It is responsible for "dampening" the overshoot caused by proportional gain. The Derivative gain is particularly sensitive to noise. Ideally, high derivative gain dampens the system too much results in slow response. However, in practice, noise-induced fast oscillation would occur first. Too low results in fast oscillation during stops due to high proportional gain. 

#### Feedforward
The gain factor proportional to the input. In practice, feedforward gain is used to eliminate I-term windup, which occurs after continuous flips and rolls. If the helicopter does not stop immediately and continue moving in the rolling / flipping direction, feedforward gain needs to be increased. If FF gain is set to be too high, the helicopter may overshoot during such maneuver. Thus it is advised to start tuning from low.

#### Boost 
The setpoint boost - or B-term will increase the stick reaction speed. In case the heli is not reacting fast enough, the reaction can be boosted with this new B-gain on each axis separately. This seems to be in the range of 20..50

This provides a rapid short term increase in your command. This parameter is used in conjunction with the time [B-Cuttoff](./Profiles#b-term-cutt-off).

## Advanced Settings
![Profiles](./img/profiles-2.png)

#### Error Rotation
If turned on, the I-term can transfer between pitch and roll axis during pirouetting. Increase the performance of overall piro related maneuvers. This is sometimes refered to as Piro compensation.  

#### Error Decay
A safety feature. This is to prevent the helicopter from tilting during takeoff.

#### Error Limits
The limit of how much I-term can be charged. During normal flights, it would not reach this limit. (More info needed)

#### I-term Relax Type
The axis that I-term relax is applied to. Generally this is Roll, Pitch and Yaw (RPY)

#### I-term Relax Cutoff Point
The I-term relax corresponds to the speed of control input for a given axis. When the control input exceed a certain speed, I-term would stop charging. This partially solved the slow overshoot at cyclic input stops due to I-gain charging at fast stick input. The cutoff value corresponds to the input FREQUENCY. A lower value gives more I-term relax, and a higher value provides less I-term relax. It is advised to start high and decrease until bounce back disappears.

#### Error Limits 
This is a hard limit for the Error to limit I-term. 

#### Offset Gains
The offset gains are used for the [High Speed Integral](../Tuning/High%20Speed%20Integral) feature.
Offset gain or O-Gain is still being tested. It is currently only available if PID mode is set to 3 from the CLI

`set pid_mode = 3`

#### Offset Limits
This is a hard limit for the O-gain. 

## Yaw Settings
![Profiles](./img/profiles-4.png)

#### CW/CCW Stop Gain
The increase of yaw (what) gain during stops. Higher gain results in crisper stops. Too high may cause fast oscillations.

#### Cyclic Feedforward Gain
Since cyclic input creates more torque on the main rotor, this gain aims to pre-compensate the tail motion due to cyclic inputs. a high cyclic value results CW motion on tail when starting pitching/rolling, a low value results CCW motion. (for CW main rotor)

#### Collective Feedforward Gain
The pre-compensation due to the increase of collective pitch. It is advised to tune it based on the immediate response after a the beginning of a climb up. Higher gain results in CW response, lower gain results in CCW response. It is advised to use a lower value since it may affect tail performance during other maneuvers.

#### Collective Impulse Feedforward Gain
The pre-compensation due to the sudden change of collective. Ideally it is designed to clean up any tail movement in small pitch pumps, however, the compensation is generally overcompensating. Thus it is suggested to turn it off for now.

## Pitch Settings
![Profiles](./img/profiles-5.png)

#### Collective Feedforward Gain
The pre-compensation for pitch axis when collective is high. Since there is drag-induced pitching motion (there is more drag on the tail thus the helicopter would want to have nose-up tendency when climbing), increasing this gain would compensate that. High gain push the nose down during climb ups. However, it is also advised to select a relatively low value to be conservative.

## PID Controller Bandwidth
![Profiles](./img/profiles-3.png)

#### Row/Pitch/Yaw Bandwidth
An extra low pass filter for each axis. It is specifically designed to preserve a weaker filter on the yaw axis to increase tail performance. High value corresponding to weaker filter. Too high may cause wobbles. Too low may cause delay and even instability in the control loop.

#### Row/Pitch/Yaw D-term cutoff
An extra first order low pass filter just for the D-gain to further reduce the sensitivity to noise. A high value decreases the effectiveness but may potentially increase the D-gain performance. A low value increase the filter effect but may hinder D-term effectiveness. It is advised to keep it around 20Hz to prevent oscillation.

#### B-Term Cutt-off
This is controlling how "quick" or "twitchy" the boost is. This works exactly the same as D-cutoff, but on setpoint.
It is safe to start with the same cutoffs as used with D. Usually in the range of 10..20. This is used in conjunction with [Boost](./Profiles#boost) or [B-gain](./Profiles#boost)