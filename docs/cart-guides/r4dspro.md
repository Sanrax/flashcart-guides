---
title: R4DS Pro
---

![R4DS Pro](../images/r4dspro.jpg){ align=right width="115"}
# R4DS Pro
## r4dspro.com

!!! warning "Known Issues"

    While this cart can reliably play games for the most part, it has a few problems due to its flawed hardware:
    
    1. The SD access on this cart is fairly slow due to being limited to single-block writes. (If a multi-block DLDI is used, the SD card filesystem gets corrupted)
    
    2. Like the EZ-Flash Parallel, sleep mode on this cart is broken. Closing the DS lid causes the screen to turn off, but the game continues to run.

    3. BL2CK on this cart also has a few minor issues with some games, that don't occur on other BL2CK-supported carts. For example in New Super Mario Bros, the minigames do not work.

    4. Attempting to use the WFC settings panel (Found in games that support online multiplayer), can cause the console to crash.

    Issues 1 & 2 apply to both Pico-Launcher and BL2CK. Issues 3 and 4 only apply to the BL2CK build for this cart.

!!! danger "Warning"

    Never attempt to use YSMenu on the R4DS Pro! You will **brick** the cart!

### Setup Guide:

=== "R4DS Pro BL2CK"

    1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}
    
    1. Download the [R4DSPro BL2CK 1.31.0 kernel.](https://archive.flashcarts.net/BL2CK/BL2CK_1.31.0_r4dspro.com.zip)
    
    1. Open/extract the zip file, and copy *the contents* into the root of your SD card.
    
    1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://gbatemp.net/threads/deadskullzjrs-nds-i-cheat-databases.488711)
        
    1. You will need the `usrcheat.dat` file from the download link in the post. Copy this file to `__rpg/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)
    
    1. Create a `Games` folder in your SD card root, and place your `.nds` game ROMs inside. You can also create additional folders to help with organizing/categorizing your ROMs.
    
    1. The files on your SD card should now look like this:
    
        - ![BL2CK](../images/SD_Files/BL2CK/BL2CK.png){ align=left width="600"}
    
    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.
    
    !!! tip "Themes"
    
        Looking to change the default theme? Check out the themes repository at [themes.flashcarts.net](https://themes.flashcarts.net)!

=== "Pico-Launcher"

    !!! info "Kernel Info"

        Pico-Launcher is the game menu for the DS-Pico (an open source DS flashcart by the LNH team) and other supported carts. Combined with Pico-Loader, it can be used as a full kernel, and supports almost all retail DS games. It features a material-inspired user interface, and an extremely fast loader.

    !!! warning "Cheats and Soft-Reset"

        Note that Pico-Launcher/Loader currently does not support using cheats, and soft-reset to the game menu is also unsupported. If these features are important to you, consider using BL2CK.

    1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}

    1. Download the latest [Pico Package for R4DS Pro.](https://picoarchive.cdn.blobfrii.com/pico_package_R4DSPRO.zip)

    1. Extract the `pico_package_R4DSPRO.zip` file with [7-Zip](https://www.7-zip.org/), or your native file manager app. Then, copy *the contents* into the root of your SD card.
    
    1. Create a `Games` folder in your SD card root, and place any `.nds` game ROMs you'd like to play inside.
    
    1. The files on your SD card should now look like this:
    
        - ![BL2CK](../images/SD_Files/BL2CK/Pico.png){ align=left width="600"}
    
    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.