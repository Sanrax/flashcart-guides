---
title: MAIO - Moonshell All in One
---

![MAIO](../images/MAIO.png){ align=right width="115"}
# MAIO - Moonshell All in One
## All DSTT and Demon HW carts

!!! info

    MAIO is a package containing YSMenu with a Moonshell2 frontend, allowing you to use YSMenu's game loader with a Moonshell 2 UI. When a game is launched in the Moonshell menu, inilink sets that game as autoboot in YSMenu's ini file, and then launches YSMenu to boot the game. Moonshell2, of course, retains its media playback functions as well, so you have a game loader and multimedia center in one when using MAIO.
    
    MAIO is compatible with all DSTT based carts, but it only works out of the box with carts that boot from `R4.dat` or `TTMenu.dat`. If your cart uses a different boot file, make a copy of the existing `TTMenu.dat` and rename appropriately. You can reference the [YSMenu Compatibility List](https://www.flashcarts.net/ysmenu-compat-ext.html) to check what boot files your DSTT clone needs.

    More info on MAIO can be found in [this Reddit thread.](https://old.reddit.com/r/flashcarts/comments/1blyzk8/maio_210_kernel_moonshell_210_and_xenon_ysloader/)

!!! warning

    Moonshell2 requires an SD card formatted with 32KB (32768) clusters. Even if you have a larger card like 64GB or 128GB, use 32KB clusters or else Moonshell2 will not launch.

### Setup Guide:

1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

1. Download the [MAIO package.](https://github.com/Sanrax/YSMenu-Custom-Packages/releases/download/v7.06/MAIO_v2.10_DEMON.zip)

1. Next, extract *the contents* of the downloaded kernel zip to your SD card.

1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.

1. Insert the SD back into the cart, plug the cart into the DS, and see if it boots into the menu.

!!! tip

    Because of the chainloader system being used to load YSMenu, cheats require a workaround to be used. To use cheats on a game, launch the game in Moonshell2, then immediately hold the B button on your console. This will cancel the YSMenu autoboot and launch you into the normal YSMenu UI. Here you can set the cheats you'd like to use on your game, (highlight the game and hit Y to open cheats menu) then boot the game in YSMenu.