---
sidebar_position: 2
---

# CLI Profile (Bank) switching

Until the **Adjustments** tab has been re-implemented in RF2, you can use the below command to switch profiles using an _Aux_ channel in your radio.

The CLI command format is:

```
adjfunc <index> <func> <enable channel> <start> <end>
        <value channel> <dec start> <dec end> <inc start> <inc end>
        <step size> <value min> <value max>
```
For a simple three profile switching using a three position Aux Channel use the below command.

`adjfunc [index] [function] [n] 900 2100 [n] 975 2025 975 2025 0 0 3`

Where:
* index: this is the adjustment index, it should be unique for each adjustment command.
* function: function number, use 1 for Rate Profile, 2 for PID Profile.
* n: Aux channel number -1, for Aux2 use 1, for Aux3 use 2.

Use the below example to switch between three PID Profiles using Aux2.

```
adjfunc 0 2 1 900 2100 1 975 2025 975 2025 0 0 3
```

Also you can use the below example to switch between three Rate Profiles using Aux2.

```
adjfunc 1 1 1 900 2100 1 975 2025 975 2025 0 0 3
```

