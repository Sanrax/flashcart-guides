---
title: DSpico
---

![DSpico](../images/dspico.png){ align=right width="115"}
# DSpico
## lnh-team.org

---

!!! note "Your DSpico may already be flashed!"

    Most DSpico flashcarts from Aliexpress are typically pre-flashed with the required firmware and do not require flashing. Please check below to confirm if your DSpico is flashed. **It is normal for the DSpico to not be detected if a MicroSD is not inserted**, this is a built in mechanism to ensure BOOTSEL mode is always available.

### Checking if your DSpico is already flashed:

1. Insert a **FAT32 Formatted** MicroSD card into your DSpico. This step is required, the DSpico will not be detected by your console if one is not inserted. You can follow the [formatting tutorial](../tutorials/formatting.md){target="_blank"} to ensure it is formatted correctly.

1. Switch off your console and insert the DSpico, then switch it back on.

1. Check for one of the below:

    - If you are on a Nintendo DSi and your console automatically boots to a screen saying `*** WRFU Tester v0.60 ***` on the bottom screen, or gets detected as "Nintendo DS Demonstration" on a Nintendo 3DS, your DSpico has the WRFUxxed firmware which works on all stock DS & 3DS consoles.

    - If your DSpico shows up as "DSpico LNH Team" on a Nintendo DSi or Nintendo 3DS, it has the Hybrid firmware and will only work on the Original DS, DS Lite and modded DSi & 3DS consoles

    - In both cases, on an original DS or DS Lite, it will always show as "DSpico LNH Team".

1. If either of the above occur, your DSpico is already flashed and you may skip to to the "Pico-Launcher" section.

1. If your DSpico is not recognised by the console in any way, it has not been flashed and you should following the flashing guide below.

Reasons why you may wish to reflash your DSpico even if it is already flashed:(1)
{ .annotate }

1.  - Your DSpico may have shipped with an outdated firmware not containing the fixes for certain MicroSD card models.
    - Your DSpico may have WRFUxxed firmware but you want the Hybrid firmware, or vice versa.
    - Your Nintendo DSi or 3DS has CFW and you want the "DSpico LNH Team" banner instead.
    - If you have a Nintendo DSi with HiyaCFW and a large SD card in the DSi's SD card slot, your DSpico may stay on the WRFUxxed screen for longer, making the Hybrid firmware more suitable.

### Flashing the DSpico firmware:

=== "Hybrid Firmware"

    !!! warning "DSpico Hybrid Firmware Limitations"

        The DSpico hybrid firmware supports only the original DS, DS Lite, and modded DSi and 3DS consoles. It does not function on stock, unmodified DSi or 3DS systems, as the required security bypass components cannot be included due to copyright restrictions linked to those components.

    !!! info "Unofficial Build"
    
        This precompiled firmware ("hybrid bootloader") is built by the authors of this page and is not hosted, maintained, or officially endorsed by the LNH Team. The LNH Team only provides the open-source tools and source code, any files containing additional binaries are distributed independently by the community.

    1. Download the [DSpico Hybrid Firmware](https://github.com/coderkei/dspico-hybrid-fw/releases/latest/download/DSpico_hybrid.uf2) and extract it to a folder on your computer. The file should be called `DSpico_hybrid.uf2`.

    1. Remove any MicroSD card inserted into the DSpico if one is inserted and remove the DSpico from your console if it is inserted into one. Connect a USB cable to your DSpico and plug it into your computer.

    1. A drive called "RPI-RP2" will appear. Drag & drop the `DSpico_hybrid.uf2` file to this drive. The drive should then automatically eject and disappear from your computer, indicating the DSpico has processed and installed the firmware. This can sometimes take a few seconds. Your DSpico is now flashed and you can follow the Pico-Launcher setup guide below.

=== "WRFUxxed Firmware"

    !!! warning "DSpico WRFUxxed firmware"

        The DSpico WRFUxxed firmware supports all stock & unmodified DS, DSi & 3DS consoles. It however must be built from source with user-provided components due to the WRFUxxed firmware requiring a copy of WRFU Tester v0.60 and a DSi BIOS dump/TWL Blowfish keys. This firmware also autoboots on a Nintendo DSi due to the way WRFUxxed works (Does not apply to the 3DS or Original DS/DS lite). You may consider to use the Hybrid firmware instead if your Nintendo DSi has Unlaunch installed.

    - Follow the [LNH-Team DSpico setup guide](https://github.com/LNH-team/dspico/blob/develop/GUIDE.md) which contains all the steps needed to build the WRFUxxed firmware.

    - If you would prefer a video guide, you may follow [this youtube video](https://www.youtube.com/watch?v=o7IuaewHNTQ) to build the WRFUxxed firmware with Docker, using [this dockerfile.](https://gist.github.com/synthic/f9396062d28144823ee8606eba101b2e). This video guide should result in an up to date firmware due to building it from the latest source.

    - *Please note that r/flashcarts are unable to provide assistance with building the WRFUxxed firmware or obtaining the required components.*

### Setup Guide:

=== "Pico-Launcher"

    !!! warning "Cheats and Soft-Reset"

        Note that Pico-Launcher/Loader currently does not support using cheats, and soft-reset to the game menu is also unsupported. If these features are important to you, consider using TWiLightMenu++ or AKMenu-Next instead with nds-bootstrap. Please note that you won't benefit from some of the features offered by the DSpico if you choose to use nds-bootstrap.

    1. Format the SD card you are using by following the [formatting tutorial.](../tutorials/formatting.md){target="_blank"}

    1. Download the latest [Pico Package for DSpico.](https://picoarchive.cdn.blobfrii.com/pico_package_DSPICO.zip?picoloader={{pico_versions.loader}}&picolauncher={{pico_versions.launcher}}&fcnetrev={{pico_versions.fcnetrev}})

    1. Extract the `pico_package_DSPICO.zip` file with [7-Zip](https://www.7-zip.org/), or your native file manager app. Then, copy *the contents* into the root of your SD card.
    
    1. Create a `Games` folder in your SD card root, and place any `.nds` game ROMs you'd like to play inside.
    
    1. The files on your SD card should now look like this:
    
        - ![DSpico](../images/SD_Files/DSPico/Pico.png){ align=left width="600"}
    
    1. Insert the SD card back into your cart, plug the cart into your DS, and see if it boots into the menu.

### Troubleshooting:

#### *Games lag or randomly freeze on my DSpico, or the DSpico does not load reliably. I have confirmed my MicroSD card is a name-brand and is genuine.*

- Your DSpico may be on an older firmware before fixes for some MicroSD card models were added. Please flash the latest firmware by following the firmware flashing guide at the top of this page.

#### *I have a Nintendo DSi with HiyaCFW and it stays on the WRFU Tester screen for a long time.*

- This is a known issue when using the WRFUxxed firmware and your DSi has HiyaCFW with a large SD card inserted into the DSi's SD card slot. Considering using a smaller SD card in the DSi or switch to the DSpico hybrid firmware.

#### *The DSpico is not detected by my DS, DSi or 3DS system or hangs at the DS(i) splash screen.*

- Check that a MicroSD card is inserted and that you have flashed the firmware to the DSpico if applicable.

#### *I get "Error: Failed to mount SD card.", or a blue screen after booting the DSpico with the WRFUxxed firmware.*

- Mounting your micro SD card failed. Check if there's anything wrong with it, try reformatting it or try a different micro SD card. If all else fails, You may need to flash an updated firmware with MicroSD fixes as mentioned above.

#### *I get "ERROR: Failed to open Pico Loader file.", or a red screen after booting the DSpico with the WRFUxxed firmware.*

- The `/_pico/picoLoader9.bin` or `/_pico/picoLoader7.bin` files could not be opened. Check that you copied all necessary files to the micro SD card (see "Pico-Launcher" guide above).

