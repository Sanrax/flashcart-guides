---
title: DSTT/i & Clones
---

![DSTT](../images/dstt.jpg){ align=right width="115"}
# DSTT/i & Clones
## ndstt.com (and many clones)

---

### Setup Guide:

!!! info "Compatibility Info"

    See [YSMenu Compatibility List's](https://www.flashcarts.net/ysmenu-compat-ext) `DSTTi-Clone YSMenu` section for a full list of compatible carts.

1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}

1. Download the [RetroGameFan YSMenu 7.06 kernel.](https://gbatemp.net/download/retrogamefan-multi-cart-update.35737/download)

1. Extract the YSMenu .7z file you downloaded using [7-Zip](https://www.7-zip.org/), then go into the `DSTTi-Clone YSMenu` folder.

1. From this folder, copy the following files/folders to your SD card root:

    - `Games` folder

    - `TTMenu` folder

    - `TTMenu.dat`

1. Some DSTTi clones load from a boot file other than `TTMenu.dat`. Find your flashcart in the [YSMenu compatibility list](https://www.flashcarts.net/ysmenu-compat-ext){target="_blank"} by searching the page (`CTRL`+`F`) for the URL listed on your cart's label.

    - If your cart is listed as needing an extra boot file, make copies of the `TTMenu.dat` file on your SD card root, then rename the copy appropriately.

    - Note that in all cases, `TTMenu.dat` still needs to be on your SD for soft-reset to function. Do not remove it.

1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.

1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.