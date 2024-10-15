# Control module for Appotronics projectors for Chataigne

*Created by [Wazmethod](https://github.com/wazmethod/), 14/10/2024*

[Chataigne by Ben Kuper](https://github.com/benkuper/Chataigne)
> Based on the TCP Client Module

## Installation

Just extract the .zip file inside the `Documents/Chataigne/modules` folder.

## Usage

If Chataigne is open, reload community modules. The new installed module should be in the "Protocol" category. You'll have a variety of commands and values to communicate with Appotronics projectors.

## What this module can do ?

- [v] Turn on (Standby mode needs to be set on "Network") / off
- [v] Laser on / off
- [v] Change aspect ratio
- [v] Change installation mode
- [v] Focus +/-
- [v] Zoom +/-
- [v] Shift up/down/left/right
- [v] Vertical/horizontal center
- [v] Volume +/-
- [v] Mute/Unmute
- [v] Set volume
- [v] Change source

## Querries

- [v] Device Status
- [v] Volume Status
- [v] Device Information
- [v] Source Status
- [v] Laser Status
- [v] Installation Mode Status
- [v] Aspect ratio Status

## Infos received from the device

`AT+System`
`AT+Volume`
`AT+VolumeControl`
`AT+LightSource`
`AT+SignalChannel`
`AT+deviceInfo`
`AT+AspectRatio`
`AT+InstallationMode`
