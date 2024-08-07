---
title: R4 DS Pro
---

# R4 DS Pro
## r4dspro.com

!!! warning "Known Issues"

    While this cart can reliably play games for the most part, it has a few problems due to its flawed hardware:
    
    1. The SD access on this cart is fairly slow due to being limited to single-block writes. (If a multi-block DLDI is used, the SD card filesystem gets corrupted)
    
    1. Like the EZ-Flash Parallel, sleep mode on this cart is broken. Closing the DS lid causes the screen to turn off, but the game continues to run.

    1. BL2CK on this cart also has a few minor issues with some games, that don't occur on other BL2CK-supported carts. For example in New Super Mario Bros, the minigames do not work.

    1. Attempting to use the WFC settings panel (Found in games that support online multiplayer), can cause the console to crash.

### Setup Guide:


1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

1. Download the [R4DSPro BL2CK 1.31.0 kernel.](https://flashcard-archive.ds-homebrew.com/BL2CK/BL2CK_1.31.0_r4dspro.com.zip)

1. Open/extract the zip file, and copy *the contents* into the root of your SD card.

1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)

1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `__rpg/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

1. Create a `Games` folder in your SD card root, and place your `.nds` game ROMs inside. You can also create additional folders to help with organizing/categorizing your ROMs.

1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.