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

Use the below example to switch between three PID Profiles using Aux2 as a three position channel.

```
adjfunc 0 2 1 900 2100 1 975 2025 975 2025 0 0 3
```

The third and sixth numbers corresponds to the Aux channel number - 1, so for Aux2 those two numbers will be 1.

Also you can use the below example to switch between three Rate Profiles using Aux2 as a three position channel.

```
adjfunc 1 1 1 900 2100 1 975 2025 975 2025 0 0 3
```

# Rotorflight 2 CLI Changes

For more info regarding the changes that have been made to RF2 CLI Commands, please visit [Rotorflight 2 CLI Changes](https://github.com/rotorflight/rotorflight/wiki/Rotorflight-2-CLI-Changes)
