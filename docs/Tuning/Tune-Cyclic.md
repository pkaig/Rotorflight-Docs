---
sidebar_position: 30
---

# Tune Cyclic

Important: the filter has to be tuned properly before any flight tuning. A imporperly tuned filter could result in poor performance or even shorten servo lifespan.

The best way to start tuning cyclic is to find a preset that are close to your own model. If it is a aggressive tune, it is advised to lower PID gains by around 10-20% of the current value to avoid instability.

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


