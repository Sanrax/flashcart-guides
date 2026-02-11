---
title: R4 Ultra/R4i Ultra
---

![R4 Ultra](../images/r4ultra.jpg){ align=right width="115"}
# R4 Ultra/R4i Ultra
## r4ultra.com

!!! info

    This cart is an Acekard 2i clone that has an AKAIO build available. The DSi compatible variant of this cart (R4i Ultra) is a direct Acekard 2i clone and can even be flashed with the AK2i HW81 flashrom, using ntrboot-flasher.

### Setup Guide:

=== "AKAIO 1.8.6a"

    !!! info "Kernel Info"

        AKAIO 1.8.6a is a few versions behind the last release of AKAIO for official AK2i carts, 1.9.0. Therefore, a few of the very last DS games are not fully compatible with this build of AKAIO. Games such as Pokemon Black 2 and White 2 may require AP patching before they can be used. Alternatively, you may opt to use Pico-Launcher instead.

    1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}
    
    1. Download the [R4 Ultra AKAIO 1.8.6a kernel.](https://archive.flashcarts.net/r4ultra.com/R4_Ultra_AKAIO_1.8.6a.zip)
    
    1. Open/extract the zip file, and copy *the contents* into the root of your SD card.
    
    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://gbatemp.net/threads/deadskullzjrs-nds-i-cheat-databases.488711)
        
    1. You will need the `usrcheat.dat` file from the download link in the post. Copy this file to `__aio/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)
    
    1. Create a `Games` folder in your SD card root, and place your `.nds` game ROMs inside. You can also create additional folders to help with organizing/categorizing your ROMs.
    
    1. The files on your SD card should now look like this:
    
        - ![R4 Ultra](../images/SD_Files/R4_Ultra/AKAIO.png){ align=left width="600"}
    
    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.
    
    !!! tip "Themes"
    
        Looking to change the default theme? Check out the themes repository at [themes.flashcarts.net](https://themes.flashcarts.net)!

=== "Pico-Launcher"

    !!! info "Kernel Info"

        Pico-Launcher is the game menu for the DS-Pico (an open source DS flashcart by the LNH team) and other supported carts. Combined with Pico-Loader, it can be used as a full kernel, and supports almost all retail DS games. It features a material-inspired user interface, and an extremely fast loader.

    !!! warning "Cheats and Soft-Reset"

        Note that Pico-Launcher/Loader currently does not support using cheats, and soft-reset to the game menu is also unsupported. If these features are important to you, consider using AKAIO.

    1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}

    1. Download the latest [Pico Package for AK2.](https://picoarchive.cdn.blobfrii.com/pico_package_AK2.zip?picoloader={{pico_versions.loader}}&picolauncher={{pico_versions.launcher}}&fcnetrev={{pico_versions.fcnetrev}})

    1. Extract the `pico_package_AK2.zip` file with [7-Zip](https://www.7-zip.org/), or your native file manager app.

    1. From within the extracted files, copy the following files/folders to your SD card root:

        - `_pico` folder

        - `_picoboot.nds`

        - `_ds_menu.dat`
    
    1. Create a `Games` folder in your SD card root, and place any `.nds` game ROMs you'd like to play inside.
    
    1. The files on your SD card should now look like this:
    
        - ![R4 Ultra Pico](../images/SD_Files/R4_Ultra/Pico.png){ align=left width="600"}
    
    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.