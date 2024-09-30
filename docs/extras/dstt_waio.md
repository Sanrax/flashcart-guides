---
title: WAIO - Wood All in One
---

![r4isdhc.com 2014+](../images/r4i-sdhc.jpg){ align=right width="115"}
# WAIO - Wood All in One
## All DSTT and Demon HW carts

!!! info

    WAIO is a package containing YSMenu with a WoodR4 frontend, allowing you to use YSMenu's game loader with a Wood/AKMenu UI. When a game is launched in the Wood menu, rpglink sets that game as autoboot in YSMenu's ini file, and then launches YSMenu to boot the game.
    
    WAIO is compatible with all DSTT based carts, but it only works out of the box with carts that boot from `R4.dat` or `TTMenu.dat`. If your cart uses a different boot file, make a copy of the existing `TTMenu.dat` and rename appropriately. You can reference the [YSMenu Compatibility List](https://www.flashcarts.net/ysmenu-compat-ext.html) to check what boot files your DSTT clone needs.

### Setup Guide:

1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

1. Download the [DSTT WAIO package.](https://github.com/Sanrax/YSMenu-Custom-Packages/releases/download/v7.06/WAIO_DSTT_DEMON_COMMON.zip)

1. Next, extract *the contents* of the downloaded kernel zip to your SD card.

1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.

1. Insert the SD back into the cart, plug the cart into the DS, and see if it boots into the menu.

!!! tip

    Because of the chainloader system being used to load YSMenu, cheats cannot be set via WoodR4. To use cheats on a game, launch the game in WoodR4, then immediately hold the B button on your console. This will cancel the YSMenu autoboot and launch you into the normal YSMenu UI. Here you can set the cheats you'd like to use on your game, (highlight the game and hit Y to open cheats menu) then boot the game in YSMenu.