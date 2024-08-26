---
title: Setting Up TWiLight Menu++ As Secondary Kernel
---

# Setting Up TWiLight Menu++ As Secondary Kernel

!!! info
    
    A dual-boot setup is useful if your cart's regular kernel works fine overall, but has issues with a few specific games such as romhacks. This guide will allow you to continue using your cart's stock kernel as primary, while being able to launch into TWiLight Menu++ to use nds-bootstrap when you want to play a problematic game.

### Setup Guide:

1. Download the latest release of [TWiLight Menu++ Flashcart Edition.](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)

1. Extract the downloaded `TWiLightMenu-Flashcard.7z` file with 7-Zip.

1. From within the TWiLight files, copy the following files/folders to your SD card root:

    - `_nds` folder
    - `roms` folder
    - `BOOT.NDS`

1. Place roms you'd like to run with TWiLight Menu++ into `/roms/nds` on your SD card.

1. Insert the SD card back into your cart, plug the cart into your DS, and boot into your kernel.

1. In your cart's menu, navigate to and select `BOOT.NDS` to launch TWiLight Menu++.

1. In TWiLight, navigate to the `roms` folder, and then the `nds` folder where you placed your NDS rom file. Launch it to boot the game using nds-bootstrap.