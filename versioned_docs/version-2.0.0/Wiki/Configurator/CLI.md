---
sidebar_position: 230
---

# Command Line Interface (CLI)
Rotorflight has a command line interface (CLI) that can be used to change settings and configure the FC.

## Accessing the CLI.
The CLI can be accessed via the configurator CLI tab.

## CLI Usage
To save your settings type in `save`, saving will reboot the flight controller.

To exit the CLI without saving power off the flight controller or type in `exit`.

To see a list of other commands type in `help` and press return.

To dump your configuration (including the current profile), use the `dump` command.

## Diff Backup Using CLI
This method shows all user-modified settings but avoids saving values left as default or values that are part of the board targets

Note that `diff` only shows the current Rate and PID profiles, whereas diff all will show all profiles that have been changed

```
diff all
```

This data should be sufficient to replicate the heli configuration on a new or erased flight controller board. Use the save to file function to create a backup.

### Dump Using CLI
Note that the dump command will output every setting and their current values. Many of these will be firmware defaults and are not needed to backup heli configuration changes.

```
rateprofile 0
profile 0
dump
```

### Dump Profiles Using CLI if You Use Them
```
profile 1
dump profile
profile 2
dump profile
```

### Dump Rate Profiles Using CLI if You Use Them
```
rateprofile 1
dump rates
rateprofile 2
dump rates
```

copy screen output to a file and save it.

### Backup/Restore via CLI

Go to [Backup and Restore](./Backup-and-restore)