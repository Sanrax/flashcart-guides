---
title: Timebomb Clones
---

![r4isdhc.com 2014+](../images/r4i-sdhc.jpg){ align=right width="115"}
# DSTTi Timebomb Clones (AKA DEMON HW carts)
## r4isdhc.com 2014+, r4i-sdhc.com, r4i-gold.eu, and others

!!! info "Compatibility Info"

    See [YSMenu Compatibility List's](https://www.flashcarts.net/ysmenu-compat-ext.html#r4i-sdhc-ysmenu-folder) `R4i-SDHC YSMenu` section for a full list of compatible carts.

### Setup Guide:

=== "YSMenu"

    1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

    1. Download the [RetroGameFan YSMenu 7.06 kernel.](https://gbatemp.net/download/retrogamefan-multi-cart-update.35737/download)

    1. Extract the YSMenu .7z file you downloaded using [7-Zip](https://www.7-zip.org/), then go into the `R4i-SDHC YSMenu` folder.

    1. From this folder, copy the following files/folders to your SD card root:

        - `Games` folder

        - `TTMenu` folder

        - `R4.dat`

        - `TTMenu.dat`

    1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.

    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.

    !!! note

        **If after following the steps above,** you end up at a `MENU?` screen, your cart requires the [flashcard-bootstrap version `R4.dat`.](https://archive.flashcarts.net/YSMenu/DEMON_common/R4.dat)
    
        Copy the new `R4.dat` file into SD card root, and replace the existing one.
    
        ---
    
        Note that the **bootstrap requires a 4GB or larger SD card** to work. 2GB and smaller cards will cause a `FAT init fail` error.

=== "MultiMenuDS"

    !!! info

        MultiMenuDS is a kernel that provides an AKMenu/Wood style frontend while using the TTMenu game loader. It supports Acekard themes & cheats and is also able to make use of nds-bootstrap.

    1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

    1. Download the [MultiMenu R4i SDHC DEMON Package.](https://github.com/coderkei/MultiMenuDS/releases/latest/download/DEMON_MultiMenu.zip)

    1. Open/extract the zip file, and copy *the contents* into the root of your SD card.

    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)

    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `TTMenu/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

    1. Create a `Games` folder in your SD card root, and place your `.nds` game ROMs inside. You can also create additional folders to help with organizing/categorizing your ROMs.

    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.

    1. (Optional) Download the [nds-bootstrap package](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest/download/nds-bootstrap.zip) and extract it. Copy `nds-bootstrap-release.nds` to the `_nds` folder on your SD card.

    !!! tip

        This kernel uses the TTMenu game loader which some ROM Hacks are not compatible with. If you get an error code when loading a ROM Hack, Follow Step 8 above. Afterwards highlight the game and press `Y` and then press `Y` again for Game Settings. Change option under `Use ROM loader` from `default` to `nds-bootstrap`. Press `A` to save.


!!! info "Timebombs & RTS Firmware"

    Setting up these firmwares also bypasses the timebomb these carts usually have, as the timebomb is built into the stock kernel, downloaded from the cart manufacturer's official website.

    If you'd like to use RTS (Real-Time-Save), you can use the stock kernel, provided below. Do keep in mind though the RTS feature itself can be hit-or-miss and this kernel has a timebomb set to September 3rd 2024. If you use this kernel please set your console's date to an earlier date.

    - For carts with `R4I-SDHC.COM` written on them [Download the 1.85b firmware.](https://archive.flashcarts.net/r4i-sdhc.com/old/r4i-sdhc.com_DEMON_1.85b.zip)

    - For carts with `r4isdhc.com` written on them and a year of 2014 or newer, [Download the 4.0b firmware.](https://archive.flashcarts.net/r4isdhc.com/old/r4isdhc.com_2014-2023_DEMON_4.0b.zip)