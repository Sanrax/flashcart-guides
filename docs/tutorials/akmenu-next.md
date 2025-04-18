---
title: Setting Up AKMenu-Next
---

# Setting Up AKMenu-Next

!!! info
    
    AKMenu-Next is a frontend for nds-bootstrap based on a fork of akmenu4. It supports cheats along with support for Acekard themes.
    For controls such as soft-reset and quitting games, please see [nds-bootstrap controls](https://wiki.ds-homebrew.com/nds-bootstrap/controls)

### Setup Guide:

=== "Flashcarts"

    #### Installing AKMenu-Next Flashcart Edition

    1. Download the latest release of [akmenu-next Flashcart Edition.](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-flashcart.zip)

    1. Extract the downloaded `akmenu-next-flashcart.zip` file with [7-Zip](https://www.7-zip.org/).

    1. From within the akmenu-next files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `BOOT.NDS`

    1. Load `BOOT.NDS` with your flashcart's kernel, or alternatively follow the autoboot steps below.

    #### Cheats

    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)
    
    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `_nds/akmenunext/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

    #### Autobooting AKMenu-Next

    !!! note

        If you don't see your flashcart in the Autoboot folder, skip this section as you will need to use your flashcart kernel to load akmenu-next instead. In some cases you can make a copy of `BOOT.NDS` and rename it to `default.nds` to make it chainload autoboot on some flashcart kernels.

    1. Open the `Autoboot` folder within the akmenu-next files. Find the folder that corresponds to your flashcart.
    
    1. Copy the contents of the folder that corresponds with your flashcart to the root of your SD card.

    1. If your flashcart is a DSTTi clone that requires additional boot files, check the `Supplementary DSTTi Clone Files` folder. You can check the [YSMenu compatibility list](https://www.flashcarts.net/ysmenu-compat-ext) to check which one you need.

=== "Nintendo DSi"

    !!! note

        This requires a modded Nintendo DSi system. If your Nintendo DSi is not modded, please follow [dsi.cfw.guide](https://dsi.cfw.guide) to install it.

    #### Installing AKMenu-Next Nintendo DSi Edition

    1. Download the latest release of [akmenu-next DSi Edition.](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-dsi.zip)

    1. Extract the downloaded `akmenu-next-dsi.zip` file with [7-Zip](https://www.7-zip.org/).

        !!! warning

            If you are using TWiLight Menu++ and want to dual boot akmenu-next, do not copy over `BOOT.NDS` as this will overwrite the one TWiLight Menu++ uses.
            You can instead launch `akmenu-next.dsi` with TWiLight Menu++ or Unlaunch.

    1. From within the akmenu-next files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `BOOT.NDS` (Please read the warning above)
        - `akmenu-next.dsi`

    1. Load `BOOT.NDS` with your desired entrypoint method. Alternatively, use Unlaunch or TWiLight Menu++ to boot `akmenu-next.dsi`

    #### Cheats

    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)
    
    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `_nds/akmenunext/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

    #### Autobooting AKMenu-Next

    1. Turn on your DSi while holding A and B

    1. In the Unlaunch menu, go to OPTIONS

    1. Set NO BUTTON or a button of your choice to the akmenu-next that says `BOOT.NDS` (or `akmenu-next.dsi` applicable) on the bottom screen


=== "Nintendo 3DS"

    !!! note

        This requires a modded Nintendo 3DS system. If your Nintendo 3DS is not modded, please follow [3ds.hacks.guide](https://3ds.hacks.guide) to install it.

    #### Installing AKMenu-Next Nintendo 3DS Edition

    1. Download the latest release of [akmenu-next 3DS Edition.](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-3ds.zip)

    1. Extract the downloaded `akmenu-next-3ds.zip` file with [7-Zip](https://www.7-zip.org/).

    1. From within the akmenu-next files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `akmenu-next.cia`

    1. Open the FBI app, go to your SD card, and find the `akmenu-next.cia` file. Select the cia, then choose "Install and Delete CIA".

    1. Launch the `akmenu-next` application from the 3DS home screen.
    
    !!! tip
    
        If AKMenu-Next does not appear on your 3DS home screen after installing the cia, restart your 3DS.

    #### Cheats

    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)
    
    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `_nds/akmenunext/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)
