---
title: DSTTi DEMON-HW Carts
---

![r4isdhc.com 2014+](../images/r4i-sdhc.jpg){ align=right width="115"}
# DSTTi DEMON-HW Carts (AKA Timebomb Carts)
## r4isdhc.com 2014+, r4i-sdhc.com, r4i-gold.eu, and others

=== "R4iMenu"

    !!! info "Kernel Info"

        R4iMenu is compatible with **r4i-sdhc.com** and **r4isdhc.com (2014+)** carts. ***All other DEMON-HW based carts can use YSMenu instead.***

        Since the timebomb previously found in R4iMenu has been removed, it has become a good option for users that own supported carts, as it has better game compatibility than YSMenu, and supports Real-Time-Save. R4iMenu is also a decent kernel for playing romhacks and translation-patched games, as YSMenu can struggle to run those.

        YSMenu runs on all DEMON-HW carts. If you prefer the look and feel of YSMenu, you can choose to use it over R4iMenu, even if you have an R4iMenu-supported cart.

    ### Setup Guide:

    1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}

    1. Download the appropriate kernel for your cart below:

        - [**r4isdhc.com** v4.3b kernel](https://github.com/Sanrax/YSMenu-Custom-Packages/releases/download/v7.06/r4isdhc.com_DEMON_4.3b.zip)

        - [**r4i-sdhc.com** v1.87b kernel](https://github.com/Sanrax/YSMenu-Custom-Packages/releases/download/v7.06/r4i-sdhc.com_DEMON_1.87b.zip)

    1. Next, extract *the contents* of the downloaded kernel zip to your SD card.

    1. Create a `Games` folder in your SD card root, and place any `.nds` game ROMs you'd like to play inside.

    1. The files on your SD card should now look like this:
    
         - ![R4i-SDHC](../images/SD_Files/DEMON_R4iMenu/R4iMenu.png){ align=left width="600"}

    1. Insert the SD back into the cart, plug the cart into the DS, and see if it boots into the menu.

=== "YSMenu"

    !!! info "Kernel Info"

        See [YSMenu Compatibility List's](https://www.flashcarts.net/ysmenu-compat-ext#demon-dstti-clones) `DEMON DSTTi Clones` section for a full list of compatible carts.

        YSMenu is a simple, fast, and stable kernel, featuring a menu UI resembling the original R4. It's a great choice for most DSTT-based flashcart users. However, it does lack RTS (Real Time Save), so check out the R4iMenu tab if that is something you're interested in.

    ### Setup Guide:

    1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}

    1. Download the [RetroGameFan YSMenu 7.06 kernel.](https://gbatemp.net/download/retrogamefan-multi-cart-update.35737/download)

    1. Extract the YSMenu .7z file you downloaded using [7-Zip](https://www.7-zip.org/), then go into the `DSTTi-Clone YSMenu` folder.

    1. From this folder, copy the following files/folders to your SD card root:

        - `Games` folder

        - `TTMenu` folder

        - `TTMenu.dat`

    1. Download [this `R4.dat`](https://archive.flashcarts.net/YSMenu/DEMON_common/R4.dat), and place it in SD card root as well.

    1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.

    1. The files on your SD card should now look like this:
    
         - ![R4i-SDHC](../images/SD_Files/DEMON_YSMenu/Demon_YS.png){ align=left width="600"}

    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.

=== "AKMenu-Next"

    !!! info "Kernel Info"

        AKMenu-Next is an alternative kernel based on akmenu4 (used in Wood R4 and AKAIO) and uses nds-bootstrap to load games. This is an option if you have games, ROM hacks or fan translations that do not work on YSMenu or R4iMenu, and is also an option if you want a Wood R4 style interface.

    1. Download the latest release of [AKMenu-Next Flashcart Edition.](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-flashcart.zip)

    1. Extract the downloaded `akmenu-next-flashcart.zip` file with [7-Zip](https://www.7-zip.org/).

    1. From within the akmenu-next files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `BOOT.NDS`

    1. Download the latest release of [nds-bootstrap.](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest/download/nds-bootstrap.zip)

    1. Extract the downloaded `nds-bootstrap.zip` file with [7-Zip](https://www.7-zip.org/).

    1. Copy the *contents* of the files from the extracted `nds-bootstrap.zip` file to the `_nds` folder on your SD card.

    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)
    
    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `_nds/akmenunext/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

    1. Open the `Autoboot` folder within the AKMenu-Next files.
    
    1. Copy the *contents* of the `R4i-SDHC` folder (do not copy the folder itself) to the root of your SD card.

    1. Create a `Games` folder in your SD card root, and place your `.nds` game ROMs inside. You can also create additional folders to help with organizing/categorizing your ROMs.
    
    1. The files on your SD card should now look like this:
    
        - ![R4i-SDHC AKMenu-Next](../images/SD_Files/DEMON_AKMenu/AKMenu.png){ align=left width="600"}
    
    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.

    !!! tip "Themes"

        Looking to change the default theme? Check out the themes repository at [themes.flashcarts.net](https://themes.flashcarts.net)!

!!! info "Timebombs"

    While some old versions of the stock kernel have timebombs (error that triggers past a certain date), neither YSMenu nor the versions of R4iMenu provided in this guide have one.

    If you'd like to learn more about flashcart timebombs and what they do, check out the [Timebomb Misconceptions](https://www.flashcarts.net/ds-timebomb) page on Flashcarts.net!