---
title: Galaxy Eagle
---

![Galaxy Eagle](../images/gei.jpg){ align=right width="115"}
# Galaxy Eagle
## ge.ndsi.in

!!! info

    The Galaxy Eagle is a clone of the Acekard 2i. Unfortunately, it's not a very good clone, and neither AKAIO nor BL2CK work properly on it. While BL2CK boots, it will freeze on a white screen when attempting to load any commercial ROM file. Therefore, AKMenu-Next is the recommended primary kernel for it, so that nds-bootstrap can be used to load games. As an alternative option, the stock kernel is also provided, but it will likely be able to run less games than AKMenu-Next.

### Setup Guide:

=== "AKMenu-Next"

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
    
    1. Copy the *contents* of the `Galaxy Eagle` folder (do not copy the folder itself) to the root of your SD card.

    1. Create a `Games` folder in your SD card root, and place your `.nds` game ROMs inside. You can also create additional folders to help with organizing/categorizing your ROMs.
    
    1. The files on your SD card should now look like this:
    
        - ![GEi AKMenu-Next](../images/SD_Files/Galaxy_Eagle/GEi_AKMenu_Next.png){ align=left width="600"}
    
    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.

    !!! tip "Themes"

        Looking to change the default theme? Check out the themes repository at [themes.flashcarts.net](https://themes.flashcarts.net)!

=== "Stock GEi v4.2 Kernel"

    !!! warning "Kernel Info"

        Keep in mind that this kernel is outdated. Some newer games will refuse to boot, but this is useable alternative if AKMenu-Next's nds-bootstrap loader fails to load something.
    
    1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}
    
    1. Download the [GEi 4.2 kernel.](https://archive.flashcarts.net/ge.ndsi.in/ge.ndsi.in_GEi_Kernel_4.2.zip)
    
    1. Open/extract the zip file, and copy *the contents* into the root of your SD card.
    
    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)
    
    1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. 
    
    1. Rename the `usrcheat.dat` file to `cheat.dat`.
    
    1. Copy `cheat.dat` into the `_system_` folder.
    
    1. Create a `Games` folder in your SD card root, and place your `.nds` game ROMs inside. You can also create additional folders to help with organizing/categorizing your ROMs.
    
    1. The files on your SD card should now look like this:
    
        - ![GEi 4.2](../images/SD_Files/Galaxy_Eagle/GEi.png){ align=left width="600"}
    
    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.