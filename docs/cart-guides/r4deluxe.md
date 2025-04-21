---
title: R4 Deluxe
---

![R4 Deluxe](../images/r4deluxe.png){ align=right width="115"}
# R4 Deluxe
## r4deluxe.com

!!! info

    This cart is a clone of the N5 (which is itself a clone of the R4SDHC). While it's R4SDHC-related, it doesn't have to load YSMenu via it's stock kernel. It can directly boot YSMenu as `_DS_MENU.DAT`, provided the cart's `_AX_MENU.DAT` file is present.

!!! warning

    Like the R4SDHC, this cart's SD I/O implementation is wonky since its SDHC I/O code is closely based off of the original R4's I/O, meant for SD class cards rather than SDHC ones. This causes the cart to be unstable with SD cards bigger than 4GB. (It will work with larger cards, but they may cause issues. Consider yourself warned.)

### Setup Guide:

1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}

1. Download the [R4 Deluxe YSMenu 7.06 package.](https://github.com/Sanrax/YSMenu-Custom-Packages/releases/download/v7.06/R4Deluxe-YSMenu-7.06.zip)

1. Next, extract *the contents* of the downloaded kernel zip to your SD card.

1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.

1. Insert the SD back into the cart, plug the cart into the DS, and see if it boots into the menu.