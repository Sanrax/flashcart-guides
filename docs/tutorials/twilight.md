---
title: Setting Up TWiLight Menu++ On Flashcarts
---

# Setting Up TWiLight Menu++ On Flashcarts

### Setup Guide:

=== "YSMenu Carts"

    !!! info
    
        This tab applies to you if your cart is compatible with YSMenu. It will setup YSMenu as well as TWiLight, so that you can choose to use YSMenu as your game loader in TWiLight Menu++.

    1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

    1. Download the [RetroGameFan YSMenu 7.06 kernel.](https://gbatemp.net/download/retrogamefan-multi-cart-update.35737/download)

    1. Extract the YSMenu .7z file you downloaded using [7-Zip](https://www.7-zip.org/), then go into the `DSTTi-Clone YSMenu` folder.

    1. From this folder, copy the following files/folders to your SD card root:

        - `TTMenu` folder
        - `TTMenu.dat`

    1. Rename the `TTMenu.dat` file in your SD root to `YSMenu.nds`.

    1. Download the latest release of [TWiLight Menu++ Flashcart Edition.](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)

    1. Extract the downloaded `TWiLightMenu-Flashcard.7z` file with 7-Zip.

    1. From within the TWiLight files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `roms` folder
        - `BOOT.NDS`

    1. Open the `Autoboot` folder within the TWiLight files. Find the folder that corresponds to your flashcart, and copy the contents of that folder to your SD card root.

    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into TWiLight.

    1. *[Optional - Skip this to use nds-bootstrap loader]* - Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so that YSMenu is used instead of TWiLight's NDS-Bootstrap.

=== "All Other Carts"

    1. Download the latest release of [TWiLight Menu++ Flashcart Edition.](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)

    1. Extract the downloaded `TWiLightMenu-Flashcard.7z` file with 7-Zip.

    1. From within the TWiLight files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `roms` folder
        - `BOOT.NDS`

    1. Open the `Autoboot` folder within the TWiLight files. Find the folder that corresponds to your flashcart, and copy the contents of that folder to your SD card root.

    1. Next navigate to the `Flashcart Loader` folder. Inside you will find a `README.txt` file. Open this file and locate your cart. This will tell you what folder corresponds to your cart.

    !!! note
        If you are unable to find your cart in the list, it doesn't have a loader that is compatible with TWiLight. Therefore, you will only be able to use NDS-Bootstrap to load games. Skip this and the following step.

    1. After identifying the correct folder for your particular cart, open that folder and copy its contents to your SD card root.

    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into TWiLight.

    1. *[Optional - Skip this to use nds-bootstrap loader]* - Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so that your flashcart's native loader is used instead of TWiLight's NDS-Bootstrap.