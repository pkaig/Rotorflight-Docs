---
sidebar_position: 20
---

# [OUTDATED] Tuning Guide for 0602 version controller (Gyro D)
ATTN--THIS ONLY APPLY TO A VERY EARLY VERSION OF RF2. IT IS FOR SOME INSIGHTS ONLY.--ATTN  
This guide assumes no super low frequency (< 60Hz) global LPF

## How should I start tuning?
* The default value of the PIDF control loop is very conservative. You may notice that the helicopter is difficult to fly because the controller is not doing much.  
* After confirming that the filters have cleaned up the gyro readout, the first step is simply increase the P and I gain on all three axis until they hold their position relatively well. The P value usually range from 20 to 60 and the I value usually range from 120 to 300.  

## Roll tuning
* Tune the roll axis first. Increase the P gain until roll feels solid at stops.  
* Increase I gain until the helicopter stop significant drifting during long pitch pumps. You would find that the drift may never go away. Therefore, the I gain should be around when diminishing return begins.
* Finally, tune the Feed Forward (FF) gain using continuous rolls. Lower the FF gain until there I windup occurs when stopping after a few continuous flips at max rate, then dial the FF gain back to when it just disappear.
* Usually the roll axis does not require a lot of D-gain because the relatively low inertia. Add D gain if the helicopter oscillates at aileron hard stops.

## Pitch tuning
* The pitch axis is usually more difficult to tune due to the inherently high inertia and underdamping. This results I-term oscillation during stops and high disturbance (rainbow / tick-tock stops). The main solution to this problem is the D-gain. However, D-gain is very sensitive to noise, therefore it is advised to find the upper limit of D gain first before adjusting other parameters. 
* Increase D-gain until the helicopter just start to fast oscillate like a dog shaking water which usually happens around 600-700 with good filters. Then dial-back by around 30%. This D gain would be the limiter of other gains on pitch axis.  
* Next, Increase P gain until a relatively good response time. Increase I gain until the helicopter stops significant drifting during long pitch pumps.  
* It is very likely that after this procedure, you will see large but slow oscillations at hard stops. If the oscillation is fast, tune down the P gain. 
To fix the slow oscillation, it is time to use a new parameter: I-relax. DECREASE I-relax on pitch until there is little oscillation during stops.
* Finally, Tune the FF gain by watching the stop after continuous flips. Tune to a value that the I-windup just disappears.

## Yaw tuning
* The yaw tuning is relatively simple. First try to find the maximum P gain on the tail by increasing until fast oscillation and dial back by roughly 20%. Then increase I gain so that it holds position well when hovering, and maintains a good constant rotation speed. D-gain and FF-gain are usually set to zero on tail.  
* Next, tune the CW and CCW stop gains. Too high may results oscillation during stops, too low may result wandering or slow bounce back during stops.  
* Then, tune the collective feedforward gain by watching the tail during climb up and fast pitch pumps. The helicopter should not rotate CW (tail goes left) right after pitch pump, and it should maintain a relatively good position during climb ups (there might be a little CCW after it starts climbing and slow bounce back at the end, this is normal)  
* Finally, decrease the cyclic feedforward if CW initial motion is observed when applying cyclic stick inputs, and increase if CCW initial motion is observed.

## Rates smoothness
* During piroflips, one may feel that the cyclic has slight wobbles. Increasing ```rates_smoothness``` in CLI would help with that given the PID loop is tuned well.

## Other notes
* The best tuning one could achieve in this version should be stable on the cyclic during stationary flips with a little tail wag. The cyclic should give confidence as it will very accurately follow the command, making flying very low easier. It could have some wobbles at stops of pirouetting pitch pumps. It also could have large wobbles during tick-tock stops.  
* If you feel that the helicopter is "flighting you" or "doesn't want to move" on the cyclic input during tail-down tick-tocks, increase I gain on pitch.
