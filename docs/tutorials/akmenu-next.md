---
title: Setting Up AKMenu-Next
---

# Setting Up AKMenu-Next

!!! info
    
    [AKMenu-Next](https://github.com/coderkei/akmenu-next) is a frontend for nds-bootstrap based on a fork of [akmenu4](https://github.com/lifehackerhansol/akmenu4) for running Nintendo DS Software & Homebrew. It supports cheats along with support for Acekard themes.
    For controls such as soft-reset and quitting games, please see [nds-bootstrap controls](https://wiki.ds-homebrew.com/nds-bootstrap/controls)

### Setup Guide:

=== "Flashcarts"

    #### Installing AKMenu-Next Flashcart Edition

    1. Download the latest release of [AKMenu-Next Flashcart Edition.](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-flashcart.zip)

    1. Extract the downloaded `akmenu-next-flashcart.zip` file with [7-Zip](https://www.7-zip.org/).

    1. From within the akmenu-next files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `BOOT.NDS`

    1. Download the latest release of [nds-bootstrap.](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest/download/nds-bootstrap.zip)

    1. Extract the downloaded `nds-bootstrap.zip` file with [7-Zip](https://www.7-zip.org/).

    1. Copy the *contents* of the files from from the extracted `nds-bootstrap.zip` file to the `_nds` folder on your SD card.

    1. Load `BOOT.NDS` with your flashcart's kernel, or alternatively follow the autoboot steps below.

    #### Cheats

    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)
    
    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `_nds/akmenunext/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

    #### Autobooting AKMenu-Next

    !!! note

        If you don't see your flashcart in the Autoboot folder or the corresponding one in the `README.TXT` file, skip this section as you will need to use your flashcart kernel to load AKMenu-Next instead. In some cases you can make a copy of `BOOT.NDS` and rename it to `default.nds` to make it chainload autoboot on some flashcart kernels.

    1. Open the `Autoboot` folder within the AKMenu-Next files. Find the folder that corresponds to your flashcart. Check the `README.TXT` inside the folder if you are unsure.
    
    1. Copy the *contents* of the folder (do not copy the folder itself) that corresponds with your flashcart to the root of your SD card.

    1. If your flashcart is a DSTTi clone that requires additional boot files, check the `Supplementary DSTTi Clone Files` folder. You can check the [YSMenu compatibility list](https://www.flashcarts.net/ysmenu-compat-ext) to check which one you need. If the file you need is not there, you can make copies of the `TTMenu.dat` file from the `DSTT & DSTTi` folder and rename them accordingly.

=== "Nintendo DSi"

    !!! note

        This requires a modded Nintendo DSi system. If your Nintendo DSi is not modded, please follow [dsi.cfw.guide](https://dsi.cfw.guide) to install it.

    #### Installing AKMenu-Next Nintendo DSi Edition

    1. Download the latest release of [AKMenu-Next DSi Edition.](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-dsi.zip)

    1. Extract the downloaded `akmenu-next-dsi.zip` file with [7-Zip](https://www.7-zip.org/).

        !!! warning

            If you are using TWiLight Menu++ and want to dual boot AKMenu-Next, do not copy over `BOOT.NDS` as this will overwrite the one TWiLight Menu++ uses.
            You can instead launch `akmenu-next.dsi` with TWiLight Menu++ or Unlaunch. This however, will mean quitting a game using the nds-bootstrap hotkey menu will boot back into TWiLight Menu++ instead (except if you are using HiyaCFW which will always return to the HiyaCFW Homescreen).

    1. From within the AKMenu-Next files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `BOOT.NDS` (Please read the warning above)
        - `akmenu-next.dsi`

    1. Download the latest release of [nds-bootstrap.](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest/download/nds-bootstrap.zip)

    1. Extract the downloaded `nds-bootstrap.zip` file with [7-Zip](https://www.7-zip.org/).

    1. Copy the *contents* of the files from from the extracted `nds-bootstrap.zip` file to the `_nds` folder on your SD card.

    1. Load `BOOT.NDS` with your desired entrypoint method (e.g. Memory Pit, stylehax or Flipnote Lenny). Alternatively, use Unlaunch or TWiLight Menu++ to boot `akmenu-next.dsi`

    !!! tip

        If you are using HiyaCFW, you can install `akmenu-next.dsi` using [NTM](https://github.com/Epicpkmn11/NTM/releases/latest) and have it as a launchable app on your homescreen!

    #### Cheats

    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)
    
    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `_nds/akmenunext/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

    #### Autobooting AKMenu-Next

    1. Turn on your DSi while holding A and B

    1. In the Unlaunch menu, go to OPTIONS

    1. Set NO BUTTON or a button of your choice to the akmenu-next entry that says `BOOT.NDS` (or `akmenu-next.dsi` if applicable) on the bottom screen


=== "Nintendo 3DS"

    !!! note

        This requires a modded Nintendo 3DS system. If your Nintendo 3DS is not modded, please follow [3ds.hacks.guide](https://3ds.hacks.guide) to install it. This guide is also applicable to the Nintendo 2DS models but will be referenced as a 3DS in the steps below.

    #### Installing AKMenu-Next Nintendo 3DS Edition

    1. Download the latest release of [AKMenu-Next 3DS Edition.](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-3ds.zip)

    1. Extract the downloaded `akmenu-next-3ds.zip` file with [7-Zip](https://www.7-zip.org/).

        !!! warning

            If you are using TWiLight Menu++ on your Nintendo 3DS and want to also use AKMenu-Next, do not copy over `BOOT.NDS` as this will overwrite the one TWiLight Menu++ uses. This however, will mean quitting a game using the nds-bootstrap hotkey menu will boot back into TWiLight Menu++ instead.

    1. From within the AKMenu-Next files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `BOOT.NDS` (Please read the warning above)
        - `akmenu-next.cia`

    1. Download the latest release of [nds-bootstrap.](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest/download/nds-bootstrap.zip)

    1. Extract the downloaded `nds-bootstrap.zip` file with [7-Zip](https://www.7-zip.org/).

    1. Copy the *contents* of the files from from the extracted `nds-bootstrap.zip` file to the `_nds` folder on your SD card.

    1. Boot up your Nintendo 3DS. Open the FBI app, go to your SD card, and find the `akmenu-next.cia` file. Select the cia, then choose "Install CIA".

    1. Launch the `akmenu-next` application from the 3DS home screen.
    
    !!! tip
    
        If you are upgrading from an older version of AKMenu-Next, or if AKMenu-Next does not appear on your 3DS home screen after installing the cia, restart your 3DS.

    #### Cheats

    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)
    
    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `_nds/akmenunext/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

=== "Updating"

    !!! info

        AKMenu-Next and nds-bootstrap must be updated seperately of each other.
        If you wish to check for the latest version of AKMenu-Next and nds-bootstrap, you can view the latest versions & changelog from the Github releases linked here: [AKMenu-Next Releases](https://github.com/coderkei/akmenu-next/releases/latest) - [nds-bootstrap Releases](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest)

    #### Updating AKMenu-Next

    1. Go to the tab above for your applicable console/flashcart and  Download the latest release of AKMenu-Next from there.

    1. Extract the downloaded `akmenu-next-flashcart/dsi/3ds.zip` file with [7-Zip](https://www.7-zip.org/).

    1. From within the extracted AKMenu-Next files, copy the `_nds` folder to your SD card root, clicking `Replace files` if on Windows or Linux, or `Merge` if on MacOS.
    Then follow the steps below.

    **Please follow the below according to the system you are using:**

    #### If you are on a flashcart

    - Copy & replace the `BOOT.NDS` file to your SD card root.

    #### If you are on a Nintendo DSi

    - Copy & replace the `akmenu-next.dsi` file to your SD card root.
    - If you **do not** also use Twilightmenu++, copy & replace the `BOOT.NDS` file to your SD card root. If you use Twilightmenu++, skip this file.
    - If you have AKMenu-Next installed as an app on HiyaCFW, you will need to install the updated `akmenu-next.dsi` file with [NTM](https://github.com/Epicpkmn11/NTM/releases/latest).

    #### If you are on a Nintendo 3DS

    - Copy & replace the `akmenu-next.cia` file to your SD card root.
    - If you **do not** also use Twilightmenu++, copy & replace the `BOOT.NDS` file to your SD card root. If you use Twilightmenu++, skip this file.
    - Install the `akmenu-next.cia` file with FBI, you may need to restart your 3DS console afterwards to use the new version.

    #### Updating nds-bootstrap

    1. Download the latest release of [nds-bootstrap.](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest/download/nds-bootstrap.zip)

    1. Extract the downloaded `nds-bootstrap.zip` file with [7-Zip](https://www.7-zip.org/).

    1. Copy the *contents* of the files from from the extracted `nds-bootstrap.zip` file to the `_nds` folder on your SD card.