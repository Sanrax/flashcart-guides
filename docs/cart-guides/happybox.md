---
title: R4 SDHC DS Happybox
---

![R4SDHC DS Happybox](../images/happybox.png){ align=right width="115"}
# R4 SDHC DS Happybox
## r4isdhc.com

!!! note

    These instructions should apply to any r4isdhc.com cart using the 1.19B kernel, not just the one shown in the image.

!!! warning

    This cart is an R4SDHC clone, and like the R4SDHC, SD I/O implementation is wonky since its SDHC I/O code is closely based off of the original R4's I/O, meant for SD class cards rather than SDHC ones. This causes the cart to be unstable with SD cards bigger than 4GB. (It will work with larger cards, but they may cause issues. Consider yourself warned.)

### Setup Guide:

1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}

1. Download the [r4isdhc.com Original YSMenu package.](https://github.com/Sanrax/YSMenu-Custom-Packages/releases/download/v7.06/r4isdhc.com_R4SDHC_Happybox-Original_YSMenu_7.06.zip)

1. Next, extract *the contents* of the downloaded kernel zip to your SD card.

1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.

1. Insert the SD back into the cart, plug the cart into the DS, and see if it boots into the menu.