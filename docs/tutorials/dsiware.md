---
title: Running DSiWare On Flashcarts
---

![DSiWare](../images/dsiware.png){ align=right width="115"}
# Running DSiWare on Flashcarts

!!! warning "DSiWare Compatibility"

    Runnning DSiWare on NDS hardware is not a stable experience. As DSiWare is meant to run in DSi mode with larger RAM and higher clock speeds than NDS, you will sometimes run into slowdown or outright game crashes. A Memory Expansion Pak may also be required to run some DSiWare in NDS mode. For example, *Zelda: Four Swords* will not launch on a DS unless the pak is inserted.

    A list of DS-mode compatible DSiWare can be found in the [TWiLight Menu++ GitHub Repository](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/universal/include/compatibleDSiWareMap.h).

### Setup Guide:

1. TWiLight Menu++ and NDS-Bootstrap is required to run DSiWare. As such, first setup TWiLight as either [primary](twilight.md) or [secondary](twilight-dualboot.md) kernel on your flashcart.

1. After setting up TWiLight Menu++, you will need to place your DSiWare (with `.nds` extension) in `/roms/dsiware` on your SD card.

    !!! note

        If your DSiWare dump is a file with no file extension, you can change the filename and add `.nds` to the end to get TWiLight Menu++ to pick it up in the menu.

        For example, if you have a DSiWare dump of *Zelda: Four Swords* with the filename `00000000`, you can rename the file to `Zelda Four Swords.nds`, before placing it inside `/roms/dsiware`

1. You will now need to find a DS game built with SDK 5.x to use as a donor ROM for DSiWare. Place the donor ROM in `/roms/nds`.

    !!! tip
        ![SDK5](../images/donor_info.png){align=left width="115"}

        DSi-Enhanced games, such as *Pokemon - Black Version* are usually built with SDK5.x, which makes them a good candidate for usage as a donor ROM. You can check the SDK version of any game by highlighting it in TWiLight and pressing `Y`.

1. Highlight the donor game in TWiLight, and press `Y` to open the ROM info menu. Scroll down to the bottom, and select `Set as Donor ROM`.

1. You are now ready to play DSiWare! Head to `/roms/dsiware` in TWiLight and choose a game to launch.

1. **[Optional]** - To improve compatibility, insert a Slot-2 Memory Expansion Pak if you are using a DS Lite or NDS.