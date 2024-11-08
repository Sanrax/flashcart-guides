---
title: M3 DS Real
---

![M3 DS Real](../images/m3dsreal.png){ align=right width="115"}
# M3 DS Real and M3i Zero (Not GMP-Z003)
## m3adapter.com

!!! info "Sakura Kernel"

    If you'd like to dual boot YSMenu and the cart's stock kernel (Sakura), then follow this guide. To use YSMenu as primary kernel, follow the guide below.

### Setup Guide:

=== "YSMenu"

    1.Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
    
    1. Download the [RetroGameFan YSMenu 7.06 kernel.](https://gbatemp.net/download/retrogamefan-multi-cart-update.35737/download)
    
    1. Extract the YSMenu .7z file you downloaded using [7-Zip](https://www.7-zip.org/), then go into the `M3Real_M3iZero YSMenu` folder.
    
    1. From this folder, copy the following files/folders to your SD card root:
    
        - `Games` folder
    
        - `System` folder
    
        - `TTMenu` folder
    
        - `SRESET.DAT`
    
        - `YSMenu.nds`
    
    1. Place any .nds game ROMs you'd like to play into the `Games` folder.
    
    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.

=== "Sakura + YSMenu"

    !!! info "Sakura Kernel"
    
        Sakura is the official kernel of the M3 DS Real and M3i Zero. It's based on Moonshell 2, with a custom NDS loader. It also offers a couple unique features like RTS (Real-Time-Save), not found in YSMenu.
        
        The M3 team disappeared around 2011, and the Sakura kernel hasn't been updated since then. That means some games released later on in the DS lifecycle don't actually boot in the Sakura/Touchpod kernel, due to missing compatibility patches. To fix this issue, it's recommended to have YSMenu alongside Sakura, if you choose to keep Sakura as primary kernel.
    
    1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
    
    1. Download the [Sakura 1.49a kernel.](https://archive.flashcarts.net/m3adapter.com/m3adapter.com_GMP-Z003_Sakura_1.49a.zip)
    
    1. Extract *the contents* of the Sakura zip to your SD card's root. (It should just be a single `SYSTEM` folder)
    
    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)
    
    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Rename this file to `cheat_EN.db`. Copy the `cheat_EN.db` file into the `SYSTEM` folder on your SD card.
    
    1. Next, we'll be adding YSMenu 7.06 to the setup.
    
    1. Download the [RetroGameFan YSMenu 7.06 kernel.](https://gbatemp.net/download/retrogamefan-multi-cart-update.35737/download)
    
    1. Extract the YSMenu .7z file you downloaded using [7-Zip](https://www.7-zip.org/), then go into the `M3Real_M3iZero YSMenu` folder.
    
    1. From this folder, copy the following files/folders to your SD card root:
    
        - `Games` folder
    
        - `TTMenu` folder
    
        - `SRESET.DAT`
    
        - `YSMenu.nds`
    
    1. Place any .nds game ROMs you'd like to play into the `Games` folder.
    
    1. Place the SD card back into the cartridge, and boot it up. You'll be asked to select between TouchPod or Sakura, choose whichever you prefer. You can change this later. When you want to use YSMenu, simply launch YSMenu.nds in Sakura/Touchpod.

=== "MultiMenuDS"

    !!! info

        MultiMenuDS is a kernel that provides an AKMenu/Wood style frontend while using the TTMenu game loader. It supports Acekard themes & cheats and is also able to make use of nds-bootstrap.

    1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

    1. Download the [MultiMenu M3 DS Real M3i Zero Package.](https://github.com/coderkei/MultiMenuDS/releases/latest/download/M3Real-M3iZero_MultiMenu.zip)

    1. Open/extract the zip file, and copy *the contents* into the root of your SD card.

    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)

    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `TTMenu/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

    1. Create a `Games` folder in your SD card root, and place your `.nds` game ROMs inside. You can also create additional folders to help with organizing/categorizing your ROMs.

    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.

    1. (Optional) Download the [nds-bootstrap package](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest/download/nds-bootstrap.zip) and extract it. Copy `nds-bootstrap-release.nds` to the `_nds` folder on your SD card.

    !!! tip

        This kernel uses the TTMenu game loader which some ROM Hacks are not compatible with. If you get an error code when loading a ROM Hack, Follow Step 8 above. Afterwards highlight the game and press `Y` and then press `Y` again for Game Settings. Change option under `Use ROM loader` from `default` to `nds-bootstrap`. Press `A` to save.