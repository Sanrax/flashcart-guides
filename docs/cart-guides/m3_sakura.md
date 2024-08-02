---
title: Sakura + YSMenu Dual-Boot
---

# Sakura + YSMenu Dual-Boot
## M3 DS Real and M3i Zero (Not GMP-Z003)

!!! info "Sakura Kernel"

    Sakura is the official kernel of the M3 DS Real and M3i Zero. It's based on Moonshell 2, with a custom NDS loader. It also offers a couple unique features like RTS (Real-Time-Save), not found in YSMenu.
    
    The M3 team disappeared around 2011, and the Sakura kernel hasn't been updated since then. That means some games released later on in the DS lifecycle don't actually boot in the Sakura/Touchpod kernel, due to missing compatibility patches. To fix this issue, it's recommended to have YSMenu alongside Sakura, if you choose to keep Sakura as primary kernel.

### Setup Guide:

1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

1. Download the [Sakura 1.49a kernel.](https://flashcard-archive.ds-homebrew.com/m3adapter.com/m3adapter.com_GMP-Z003_Sakura_1.49a.zip)

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