---
sidebar_position: 30
---

:::info 

Rotorflight is based on Betaflight which is generally used to control drones. Unfortunately, drones do not have servos and have more motors than we need for a helicopter. In order to use servos we must remap our boards so that we have a pad to connect the servos to.

If using a commercial FC such as the ones in the Manufacturers section. This step is not required.

Disclaimer

The pin labeling on commercial flight controllers refers to what the manufacturer has assigned as a function to that pin, in reality these pins are connected to the mcu, and with the power of RF, we can reassign these pins to other functions depending on the available resources on that pin, (you can consult the mcu data sheet STM32 alternate function mapping table to view all the available resources on a particular pin).
:::

## Key concepts

Before you start remapping your drone FC to be used with Rotorflight, keep in mind the following.

    1- Although it is not necessary, but it is advised to keep your cyclic servos on the same Timer.

    2- If you wish to use a narrow band tail servo, then assign that servo to separate timer.

    3- Main motor esc output should on a separate timer.

    4- In case you are using a PWM controlled esc then Rotorflight will require an rpm signal
       for governor and RPM Filtering, RPM input should be on a 32bit separate timer (TIM2 or TIM5).

![Mixer Tab](./img/remapping-1.png)

## Custom defaults remapping spreadsheet
Spreadsheet for remapping Betaflight targets for use with Rotorflight. The spreadsheet re-allocates features for motors and servos and configures associated timers and dma.

Please 'make a copy'. 

[Rotorflight remapping spreadsheet v1.4.1](https://docs.google.com/spreadsheets/d/1m-DhCcTTKnMhXicMjBQc5EqCSAowDk0TqXpZUyZq--A/edit?usp=drivesdk)


## Rotorflight Hardware config and remapping video
<iframe width="560" height="315" src="https://www.youtube.com/embed/TNAeDaAjzfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Importing new targets ​
Some targets in the betaflight target repository have additional #define lines above board_name. Please do not chose them. In the example below copy only from board_name down. The ``Board_name`` MUST be the first line in the spreadsheet.

![Mixer Tab](./img/remapping-2.png)

## Old Versions

[Rotorflight remapping spreadsheet v1.3](https://docs.google.com/spreadsheets/d/1HzbASoWoV7RriroiCTFbnY3v021HHgxDm2WygzxCVd0/edit?usp=sharing)

[Rotorflight remapping spreadsheet v1.2](https://docs.google.com/spreadsheets/d/1sZSpKEMIQzEMfRpyB8nn1vDn9OlID3vhVT0QTgemIZE/edit?usp=sharing)

[Rotorflight remapping spreadsheet v1.1](https://docs.google.com/spreadsheets/d/1HP9OUTFpjAm42CDiJipmQrPrDtBpTfkJAM1BOtcuZyE/edit?usp=sharing)



