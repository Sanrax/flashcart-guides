---
title: Setting Up akmenu-next
---

# Setting Up akmenu-next

!!! info
    
    akmenu-next is a frontend for nds-bootstrap based on a fork of akmenu4. It supports cheats along with support for Acekard themes.

### Setup Guide:

=== "Flashcarts"

    !!! warning
    
        The flashcart version of akmenu-next currently does not have audio when played on a Nintendo DSi & 3DS system. This is a known issue and it is currently advised to use the seperate DSi or 3DS version for those consoles.

    #### Installing akmenu-next flashcart version

    1. Download the latest release of [akmenu-next Flashcart Edition.](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-flashcart.7z)

    1. Extract the downloaded `akmenu-next-flashcart.zip` file with 7-Zip.

    1. From within the akmenu-next files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `BOOT.NDS`

    1. Load `BOOT.NDS` with your flashcart's kernel, or alternatively follow the autoboot steps.

    #### Autobooting akmenu-next

    !!! note

        If you don't see your flashcart in the Autoboot folder, skip this section as you will need to use your flashcart kernel to load akmenu-next instead. In some cases you can make a copy of `BOOT.NDS` and rename it to `default.nds` to make it chainload autoboot on some flashcart kernels.

    1. Open the `Autoboot` folder within the akmenu-next files. Find the folder that corresponds to your flashcart.
    
    1. Copy the contents of the folder that corresponds with your flashcart to the root of your SD card.

=== "Nintendo DSi"

    !!! note

        This requires a modded Nintendo DSi system. If your Nintendo DSi is not modded, please follow [dsi.cfw.guide](https://dsi.cfw.guide) to install it.

    #### Installing akmenu-next Nintendo DSi version

    1. Download the latest release of [akmenu-next DSi Edition.](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-dsi.7z)

    1. Extract the downloaded `akmenu-next-dsi.zip` file with 7-Zip.

    !!! info

        If you are using Twilightmenu++, you may want to rename the akmenu-next version of BOOT.NDS so that you do not overwrite the boot file for Twilightmenu++

    1. From within the akmenu-next files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `BOOT.NDS`

    1. Load `BOOT.NDS` with your desired entrypoint method, or use Unlaunch to boot it.

    #### Autobooting akmenu-next

    1. Turn on your DSi while holding A and B

    1. In the Unlaunch menu, go to OPTIONS

    1. Set NO BUTTON or a button of your choice to the akmenu-next that says BOOT.NDS (or what you renamed it to if applicable) on the bottom screen


=== "Nintendo 3DS"

    !!! note

        This requires a modded Nintendo 3DS system. If your Nintendo 3DS is not modded, please follow [3ds.hacks.guide](https://3ds.hacks.guide) to install it.

    #### Installing akmenu-next Nintendo 3DS version

    1. Download the latest release of [akmenu-next 3DS Edition.](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-3ds.7z)

    1. Extract the downloaded `akmenu-next-3ds.zip` file with 7-Zip.

    !!! info

        If you have Twilightmenu++ installed, you may want to rename the akmenu-next version of BOOT.NDS so that you do not overwrite the boot file for Twilightmenu++

    1. From within the akmenu-next files, copy the following files/folders to your SD card root:

        - `_nds` folder
        - `BOOT.NDS`
        - `akmenu-next.cia`

    1. Open the FBI app, go to your SD card, find and install the `akmenu-next.cia` file.

    1. Launch the `akmenu-next` application from the 3DS home screen. If it does not appear, restart your 3DS.
