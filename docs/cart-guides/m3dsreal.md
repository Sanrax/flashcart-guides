---
title: M3 DS Real
---

![M3 DS Real](../images/m3dsreal.png){ align=right width="115"}
# M3 DS Real and M3i Zero (Not GMP-Z003)
## m3adapter.com

!!! info

    The M3 DS Real is the second Slot-1 flashcart from the M3 Adapter team. The M3 team disappeared around 2011, and the Sakura kernel hasn't been updated since then. That means some games released later on in the DS lifecycle don't actually boot in the Sakura/Touchpod kernel, due to missing compatibility patches. To fix this issue, it's recommended to have either run YSMenu as replacement kernel, or Sakura with YSMenu as fallback, if you choose to keep Sakura as the primary kernel.

    While this cart does support SDHC SD cards, Sakura/TouchPod has issues with cards that are 64GB or larger. The nds loader will simply refuse to load games, or load the game but crash/freeze soon after. However, YSMenu handles 64GB and larger cards just fine on the M3 DS Real, when configured as primary kernel.

### Setup Guide:

=== "YSMenu"

    1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}
    
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
    
        Sakura is the official kernel of the M3 DS Real and M3i Zero. It's based on Moonshell 2, with a custom NDS loader. It also offers a couple unique features like RTS (Real-Time-Save), not found in YSMenu. Because it's based on Moonshell2, it also provides media playback directly in the kernel menu, which can be pretty convenient. This tab will help you setup Sakura with YSMenu, so that you can use Sakura as primary and fallback to YSMenu when necessary, for games that don't load in Sakura.
    
    1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}
    
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