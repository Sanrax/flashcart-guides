---
title: EX4DS
---

![EX4DS](../images/ex4ds.png){ align=right width="115"}
# EX4DS
## ex4ds.com

!!! info
    
    The EX4DS is a cart based on R4iLS hardware, marketed as a SuperCard DSTWO competitor. Like the DSTWO, it contains extra hardware for running cart-specific plugins that can be launched from its menu. Currently, these included accelerated movie and music playback, and a GBA emulator. This cart's kernel is also the source of AceOS - the Ace3DS team used the EX4DS' start-up launch menu for the AOS launch menu.

### Setup Guide:

1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

1. Download [EX4DS AceOS 2.13.](https://archive.flashcarts.net/Gateway_Blue/Gateway_Blue_Wood_R4_1.62.zip)

1. Open/extract the zip file, and copy *the contents* into the root of your SD card.

1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)

1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `__rpg/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

1. Create a `Games` folder in your SD card root, and place your `.nds` game ROMs inside. You can also create additional folders to help with organizing/categorizing your ROMs.

1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.

!!! warning "Missing Anti-Piracy Patches"

    Gateway Blue WoodR4 1.62 is known to have issues with anti-piracy checks in a few newer games, notably with clean roms of Pokemon Black & White 2, where EXP gain gets disabled by AP detection.
    
    To fix this issue, tap the Y button in the WoodR4 menu with the game highlighted, open the cheats menu, and enable the `Bypass Anti-Piracy` cheat before starting the game.