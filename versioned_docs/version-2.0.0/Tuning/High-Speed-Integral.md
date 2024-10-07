---
sidebar_position: 40
---

# High Speed Integral

TL;DR
The high speed integral fixes bobbling problems during fast-moving maneuvers. Higher O-gain resulting in fast reaction to high airspeed. Too high might result in bobble during stops since it behaves like integral gain at constant collective position.

## What is it?
This is one of the core features of most advanced FBL systems (Vbar, CGY760R, Spirit .etc) The problem it is solving is mainly due to the difference in lift from high airspeed in the x and y directions. For example, as the helicopter is moving forward while having a constant positive collective pitch, the helicopter tends to pull up. If the collective pitch is negative, the imbalance of lift is reversed, and the heli would tend to push down. This is usually not a problem if the collective stays constant because the integral gain will compensate this constant "trim". However, when changing collective while moving at a high speed (for example, fast moving side tick tocks) the heli would not move axially. It would behave in a snake shape because the I term is constantly charging and discharging in the opposite direction.

The High Speed Integral (HSI) resembles another integral term. However, its output is proportional to the collective input, which reverses when the collective is negative. This is the "arching" effect you might see on FBLs like a vbar, where if one tilt the helicopter at high collective, and move the collective up and down, the swash plate would resemble one side of a seesaw. 

## How to tune it?

To properly tune the HSI, one has to be able to fly maneuvers comfortably at a relatively high speed. The best maneuver is the fast moving ticktocks. It is advised to start low (about 30) and see if theres snaking at the first few tick tocks. The higher O-gain you use, the faster it reacts to high speed, meaning the amount of time ticktock becomes axial is lowered. Ideally, the O-gain should be just high enough to have no snaking. Too high might result in bobbling during stationary tick tocks because it is essentially an I gain at constant collective.

## (Advanced Topic) Tick tock Optimization

The problem of naively implementing the HSI is repeated maneuvers like tick tocks. The HSI works the best when the heli needs reversed "trim" when collective is reversed. However, there is another scenario that this could happen: during ticktocks. Assume there's some error that reverses at each stops of the ticktocks, then the HSI would tend to charge up little by little at each end, resulting unwanted bobbling right after each collective change. 

Currently, there seems to be three ways to solve this problem. The simplest way is to not deal with the problem at all and use a very fast I-term decay on the normal integral gain to "soothe" the effect. However, the fast I-term decay creates significant drifting problem in other scenarios, making the heli less predictable.

A much more sophisticated way to deal with this issue. From behavior of the pilots, we know that when the cyclic inputs are high, theres a very low chance that the heli would keep the same airspeed at the input direction. Therefore, the HSI would be added to the normal I term (in the input direction) at some cyclic threshold. This preserves the HSI in the orthogonal direction but "deletes" them in the parallel direction.

RF2 follows the previous logic. However, instead of "deleting" the HSI, it "decays" HSI in a set speed (dictated by the offset_bleed_rate_curve and offset_bleed_limit_curve parameter) into the normal-I. Therefore, a extremely fast impulse on the stick would not result in a complete deletion of the HSI.

## (Advanced Topic) HSI Charging Rate

Another problem with HSI is that it behaves like integral gain at constant collective with higher collective having a higher "equivalent I-gain." This problem could affect the PID balance greatly especially at high collectives. One way to solve this problem is to lower the HSI charging rate at high collective (offset_charge_curve). It erectly lowers the equivalent I-gain at high collective which helps maintain the PID balance. However, the adverse effect is that this assumes no significant airspeed change when collective is high, which in some extreme cases might not be true. Also, snaking might occur if one prefer to use high collective during fast moving ticktocks. Therefore, it is advised to have the charge rate as high as possible at high collective to minimize the effect.



