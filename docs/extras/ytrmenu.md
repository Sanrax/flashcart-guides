---
title: YTRMenu - TY's YSMenu Fork v2.2
---

# YTRMenu - TY's YSMenu Fork v2.2
## All DSTT and Demon-HW carts

!!! info "Kernel Info"

    YTRMenu is a fork of RGF's YSMenu by R-YaTian that adds extended support for Chinese translation patches/romhacks, which fail to load on regular YSMenu. (Usually with `errcode=-4`)
    
    **YTRMenu-Specific Quirks/Notes:**

    - YTRMenu uses both extinfo.dat and extinfo.dll for game loading, unlike regular builds of YSMenu or TTMenu which only use extinfo.dat. Do not delete extinfo.dll from the TTMenu folder.
    - Theme colors are configured in the Color.bin file, which is a regular editable text file.
    - Start menu contains a shutdown application, and a skin changer in this repack. If you would like to re-add some emulators like the original YTRMenu release, simply add them back into the YSMenu.ini config.
    - YTRMenu is only shipped in Chinese. If you want to swap to English, you can copy over the `YSMenu.ini` file found inside `English INI` into the `TTMenu` folder on your SD card, and replace the existing file.

!!! note "Repack Info"

    The YTRMenu repack linked in the setup guide is a stripped down version of R-YaTian's release. The original release packages YTRMenu together with R4iMenu v4.0b and TTMenu, as well as Moonshell and an assortment of emulators.
    
    To keep the repack bloat-free, I've focused on shipping YTRMenu alone without extra additions. It contains only the included themes and theme selector, the included shutdown shortcut, and YTRMenu itself.

    If you would like to access the original download, it has been mirrored for archival [here.](https://archive.org/download/ytrmenu-v-2.2-r-ya-tian/YTRMenu_v2.2_R-YaTian.rar)

### Setup Guide:

1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md)

1. Download the [YTRMenu package.](https://github.com/Sanrax/YSMenu-Custom-Packages/releases/download/v7.06/R-YaTian_YTRMenu_v2.2.zip)

1. Next, extract the downloaded kernel zip to a folder on your PC.

1. If you are using a Demon-HW cart (r4isdhc.com 2014+ or r4i-sdhc.com), navigate into the `R4i-SDHC YTRMenu` folder and copy everything inside to your SD root.

1. If you are using a DSTT/i or clone cart, navigate into the `DSTTi-Clone YTRMenu` folder and copy everything inside to your SD root.
    - Note that many DSTT-based clones will load from a boot file other than `TTMenu.dat`. Reference the [YSMenu Compatibility List](https://www.flashcarts.net/ysmenu-compat-ext){target="_blank"} and make copies of `TTMenu.dat` appropriately if your cart requires extra boot files.

1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.

1. Insert the SD back into the cart, plug the cart into the DS, and see if it boots into the menu.