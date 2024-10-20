---
title: Timebomb Clones
---

![r4isdhc.com 2014+](../images/r4i-sdhc.jpg){ align=right width="115"}
# DSTTi Timebomb Clones (AKA DEMON HW carts)
## r4isdhc.com 2014+, r4i-sdhc.com, r4i-gold.eu, and others

!!! info "Compatibility Info"

    See [YSMenu Compatibility List's](https://www.flashcarts.net/ysmenu-compat-ext.html#r4i-sdhc-ysmenu-folder) `R4i-SDHC YSMenu` section for a full list of compatible carts.

### Setup Guide:

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

!!! info "Timebombs"

    Setting up YSMenu also bypasses the timebomb these carts usually have, as the timebomb is built into the stock kernel, downloaded from the cart manufacturer's official website. YSMenu doesn't have one.