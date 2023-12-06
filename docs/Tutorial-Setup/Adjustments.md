---
sidebar_position: 155
---

# Adjustments

There are total 32 adjustment slots, each assigning an AUX channel to a configuration parameter or a special function. An adjustment slot consist of an enabling condition, an adjustment function, and parameter limits.

The enabling condition is an AUX channel, which must be within the configured range for the slot to be active. Once active, a control AUX channel will cause a parameter value adjustment, based on the selected adjustment function.

Any changes are taking effect immediately, and are saved in the configuration.

![Adjustments](./img/adjustments-main.png)


## Example - Select a Profile In-Flight

Being able to switch between profiles in-flight allows you to use different headspeeds with differently tuned PIDs. It can also help with PID tuning, since it makes A/B testing possible with the flick of a switch.

### Simple example

Here we use only one channel -AUX4- for *PID* and *Rates* Profiles Selection. Assign AUX4 to a 3-position switch on the TX, so that the switch outputs 1000/1500/2000us. [Profile Switching Example](../Tutorial-Walkthroughs/Profile-switching-example.md).

## Adjustment Types

There are two ways the how the control AUX channel is affecting the configuration parameter.

### Step Adjustment

The control AUX channel can be a three position switch or a trim switch on the transmitter. While in up position, it will cause the adjustment to increase by step size, and vice versa. The min and max limits are adhered.

Step adjustment is enabled by setting the step size to non-zero value.

### Continuous Adjustment

The control AUX channel is a full resolution RC channel, and is controlling the configuration parameter directly. The RC channel range 1000us..2000us is stretched to cover the parameter range min..max.

Continuous adjustment is enabled by setting the step size to zero.

## Adjustment Functions

The adjustment function assigns the control AUX channel to a configuration parameter or a special function. The supported functions are listed below.

    // Profile change
    ADJUSTMENT_RATE_PROFILE             = 1,
    ADJUSTMENT_PID_PROFILE              = 2,
    ADJUSTMENT_LED_PROFILE              = 3,
    ADJUSTMENT_OSD_PROFILE              = 4,

    // Rates
    ADJUSTMENT_PITCH_RATE               = 5,
    ADJUSTMENT_ROLL_RATE                = 6,
    ADJUSTMENT_YAW_RATE                 = 7,
    ADJUSTMENT_PITCH_RC_RATE            = 8,
    ADJUSTMENT_ROLL_RC_RATE             = 9,
    ADJUSTMENT_YAW_RC_RATE              = 10,
    ADJUSTMENT_PITCH_RC_EXPO            = 11,
    ADJUSTMENT_ROLL_RC_EXPO             = 12,
    ADJUSTMENT_YAW_RC_EXPO              = 13,

    // PID
    ADJUSTMENT_PITCH_P_GAIN             = 14,
    ADJUSTMENT_PITCH_I_GAIN             = 15,
    ADJUSTMENT_PITCH_D_GAIN             = 16,
    ADJUSTMENT_PITCH_F_GAIN             = 17,
    ADJUSTMENT_ROLL_P_GAIN              = 18,
    ADJUSTMENT_ROLL_I_GAIN              = 19,
    ADJUSTMENT_ROLL_D_GAIN              = 20,
    ADJUSTMENT_ROLL_F_GAIN              = 21,
    ADJUSTMENT_YAW_P_GAIN               = 22,
    ADJUSTMENT_YAW_I_GAIN               = 23,
    ADJUSTMENT_YAW_D_GAIN               = 24,
    ADJUSTMENT_YAW_F_GAIN               = 25,

    ADJUSTMENT_YAW_CW_GAIN              = 26,
    ADJUSTMENT_YAW_CCW_GAIN             = 27,
    ADJUSTMENT_YAW_CYCLIC_FF            = 28,
    ADJUSTMENT_YAW_COLLECTIVE_FF        = 29,
    ADJUSTMENT_YAW_COLLECTIVE_DYN       = 30,
    ADJUSTMENT_YAW_COLLECTIVE_DECAY     = 31,
    ADJUSTMENT_PITCH_COLLECTIVE_FF      = 32,

    // Gyro cutoffs
    ADJUSTMENT_PITCH_GYRO_CUTOFF        = 33,
    ADJUSTMENT_ROLL_GYRO_CUTOFF         = 34,
    ADJUSTMENT_YAW_GYRO_CUTOFF          = 35,

    // Dterm cutoffs
    ADJUSTMENT_PITCH_DTERM_CUTOFF       = 36,
    ADJUSTMENT_ROLL_DTERM_CUTOFF        = 37,
    ADJUSTMENT_YAW_DTERM_CUTOFF         = 38,

    // Rescue
    ADJUSTMENT_RESCUE_CLIMB_COLLECTIVE  = 39,
    ADJUSTMENT_RESCUE_HOVER_COLLECTIVE  = 40,
    ADJUSTMENT_RESCUE_HOVER_ALTITUDE    = 41,
    ADJUSTMENT_RESCUE_ALT_P_GAIN        = 42,
    ADJUSTMENT_RESCUE_ALT_I_GAIN        = 43,
    ADJUSTMENT_RESCUE_ALT_D_GAIN        = 44,

    // Leveling
    ADJUSTMENT_ANGLE_LEVEL_GAIN         = 45,
    ADJUSTMENT_HORIZON_LEVEL_GAIN       = 46,
    ADJUSTMENT_ACRO_TRAINER_GAIN        = 47,

    // Governor
    ADJUSTMENT_GOV_GAIN                 = 48,
    ADJUSTMENT_GOV_P_GAIN               = 49,
    ADJUSTMENT_GOV_I_GAIN               = 50,
    ADJUSTMENT_GOV_D_GAIN               = 51,
    ADJUSTMENT_GOV_F_GAIN               = 52,
    ADJUSTMENT_GOV_TTA_GAIN             = 53,
    ADJUSTMENT_GOV_CYCLIC_FF            = 54,
    ADJUSTMENT_GOV_COLLECTIVE_FF        = 55,

    // Boost gains
    ADJUSTMENT_PITCH_B_GAIN             = 56,
    ADJUSTMENT_ROLL_B_GAIN              = 57,
    ADJUSTMENT_YAW_B_GAIN               = 58,

    // Offset gains
    ADJUSTMENT_PITCH_O_GAIN             = 59,
    ADJUSTMENT_ROLL_O_GAIN              = 60,

    // Cross-coupling
    ADJUSTMENT_CROSS_COUPLING_GAIN      = 61,
    ADJUSTMENT_CROSS_COUPLING_RATIO     = 62,
    ADJUSTMENT_CROSS_COUPLING_CUTOFF    = 63,


### Parameter Change Functions

The parameter change functions are adjusting the associated configuration parameters, taking effect immediately. This allows changing the fundamental tuning parameter inflight.

Each parameter has a min and max limit that the user can set to safeguard against unreasonable or unsafe values. In addition, the system has absolute limits for each parameter.

### Profile Change Functions

The special functions to change configuration profiles works exactly the same as the parameter functions, except that the possible values are limited to the number of profiles. Both step and continuous adjustments can be used.

For example, there are six Rate Profiles available, thus the parameter limits should be min = 0 and max = 5. Narrower range is also possible, if so desired.

