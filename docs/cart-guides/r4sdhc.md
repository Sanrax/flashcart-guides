---
title: Original R4SDHC
---

# Original R4SDHC
## r4sdhc.com

!!! warning

    This cart's SD I/O implementation is wonky since its SDHC I/O code is closely based off of the original R4's I/O, meant for SD class cards rather than SDHC ones. This causes the cart to be unstable with SD cards bigger than 4GB. (It will work with larger cards, but they will likely cause issues. Consider yourself warned.)

### Setup Guide:

1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

1. Download the [YSMenu 7.06 for R4SDHC carts autoboot package.](https://github.com/Sanrax/R4SDHC-YSMenu/releases/download/v7.06/R4SDHC-YSMenu-7.06_R3.zip)

1. Next, extract *the contents* of the downloaded kernel zip to your SD card.

1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.

1. Insert the SD back into the cart, plug the cart into the DS, and see if it boots into the menu.

---

!!! info "Extra Information About the R4SDHC"

    On R4SDHC carts, you would normally get stuck after "Creating TTMenu.sys" with a white screen when booting into YSMenu because there's a configuration error in the R4-SDHC YSMenu kernel shipped in RGF's 7.06 7z. RGF set up YSMenu to auto-chainload from the stock R4SDHC kernel, by naming it `default.nds`. this is all well and good, but YSMenu *also* autoboots any file named `default.nds`, just like the stock r4sdhc kernel.

    What happens is after the stock kernel chainloads YSMenu by booting `default.nds`, YSMenu then proceeds to autoboot itself in a loop infinitely, and crashes to a white screen.

    The fix is to edit the YSMenu.ini and change the autoboot file's name to something other than default.nds. In the download I provided above, I edited it to `noboot.nds`.

    The package also contains Hansol's fixed DLDI SD driver for R4SDHC's. Previously, R4SDHC-YSMenu was using a DLDI that couldn't load any homebrew at all, and the stock kernel has a half-broken DLDI that causes most homebrew to break.
    
    A few other enhancements include nicer themes for the stock kernel and YSMenu, as well as a fixed ttreset.dat, which fixes the soft-reset feature in YSMenu on these carts.