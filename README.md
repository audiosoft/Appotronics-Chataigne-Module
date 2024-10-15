# Control module for Appotronics projectors for Chataigne

*Created by [Wazmethod](https://github.com/wazmethod/), 14/10/2024*

[Chataigne by Ben Kuper](https://github.com/benkuper/Chataigne)
> Based on the TCP Client Module

## Installation

Just extract the .zip file inside the `Documents/Chataigne/modules` folder.

## Usage

If Chataigne is open, reload community modules. The new installed module should be in the "Protocol" category. You'll have a variety of commands and values to communicate with Appotronics projectors.

## What this module can do ?

- [x] Turn on (Standby mode needs to be set on "Network") / off
- [x] Laser on / off
- [x] Change aspect ratio
- [x] Change installation mode
- [x] Focus +/-
- [x] Zoom +/-
- [x] Shift up/down/left/right
- [x] Vertical/horizontal center
- [x] Volume +/-
- [x] Mute/Unmute
- [x] Set volume
- [x] Change source

## Querries

- [x] Device Status
- [x] Volume Status
- [x] Device Information
- [x] Source Status
- [x] Laser Status
- [x] Installation Mode Status
- [x] Aspect ratio Status
- [ ] 
## Infos received from the device

- `AT+System`
- `AT+Volume`
- `AT+VolumeControl`
- `AT+LightSource`
- `AT+SignalChannel`
- `AT+deviceInfo`
- `AT+AspectRatio`
- `AT+InstallationMode`
