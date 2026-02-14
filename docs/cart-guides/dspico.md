---
title: DSpico
---

![DSpico](../images/dspico.png){ align=right width="115"}
# DSpico
## lnh-team.org

---

### Checking For Existing Firmware

!!! note "Your DSpico may already be flashed!"

    Most DSpico flashcarts from Aliexpress are typically pre-flashed with the required firmware and do not require flashing. Please check below to confirm if your DSpico is flashed. **It is normal for the DSpico to not be detected if a MicroSD is not inserted**, this is a built in mechanism to ensure BOOTSEL mode is always available.

1. Insert a **FAT32** formatted MicroSD card into your DSpico. This step is required, the DSpico will not be detected by your console if one is not inserted. You can follow the [formatting tutorial](../tutorials/formatting.md){target="_blank"} to ensure it is formatted correctly.

1. Power off your console, insert the DSpico, then turn it back on.

1. Check for the following:

    - **Nintendo DSi/3DS Users:**
    
        - If your console automatically boots to a red screen after flashing `*** WRFU Tester v0.60 ***` on the bottom screen, or gets detected as "Nintendo DS Demonstration" on a Nintendo 3DS, your DSpico has WRFUxxed firmware flashed, which works on all stock DS, DSi, and 3DS consoles.
    
        - If your DSpico shows up as "DSpico LNH Team" on a Nintendo DSi or Nintendo 3DS, it has Hybrid firmware flashed and will only work on the original DS, DS Lite and modded DSi/3DS consoles.
    
    - **Nintendo DS and DS Lite users:**

        - Both WRFUxxed and Hybrid FW will show up as "DSpico LNH Team" on these consoles. If you see the cart in the menu, it is flashed with WRFUxxed OR Hybrid FW, but there's no way to check which one.

1. If your DSpico is not recognised by the console in any way, it does not have a firmware flashed. In this case, follow the [flashing firmware section](#flashing-dspico-firmware) below.

1. **[Optional]** If your DSPico is pre-flashed, you may want to reflash it anyway. **Possible reasons include:**

    - Your DSpico may have shipped with an outdated firmware not containing the fixes for certain MicroSD card models.
    - Your DSpico may have WRFUxxed firmware but you want the Hybrid firmware, or vice versa.
    - Your Nintendo DSi or 3DS has CFW and you want the "DSpico LNH Team" banner instead of "Nintendo DS Demonstration"
    - If you have a Nintendo DSi with HiyaCFW and a high-capacity SD card in the DSi's SD slot, WRFUxxed FW will take a longer time to boot, making Hybrid FW a better choice.

1. If you are happy with the existing firmware on your DSPico, you may [skip to the main setup guide.](#setup-guide)

### Flashing DSpico Firmware:

=== "Hybrid Firmware"

    !!! warning "DSpico Hybrid Firmware Limitations"

         The DSpico hybrid firmware only supports the original DS, DS Lite, and modded DSi/3DS consoles. It does not function on stock, unmodified DSi or 3DS systems - firmware with the WRFUxxed exploit enabled is required for these consoles.

    !!! info "Unofficial Build"
    
        This precompiled firmware ("hybrid bootloader") is built by the authors of this page and is not hosted, maintained, or officially endorsed by the LNH Team. The LNH Team only provides the open-source tools and source code, any files containing additional binaries are distributed independently by the community.

    1. Download the [DSpico Hybrid Firmware](https://github.com/coderkei/dspico-hybrid-fw/releases/latest/download/DSpico_hybrid.uf2) UF2 file.

    1. Remove the DSpico from your console, and remove any MicroSD card in the cart. Next, connect a USB cable to your DSpico and plug it into your computer.

    1. A drive called `RPI-RP2` will appear. Drag & drop the `DSpico_hybrid.uf2` file to this drive. The drive should then automatically eject and disappear from your computer, indicating the DSpico has processed and installed the firmware. This can sometimes take a few seconds. Your DSpico is now flashed and you can follow the Pico-Launcher setup guide below.

=== "WRFUxxed Firmware"

    !!! warning "DSpico WRFUxxed firmware"

         The WRFUxxed firmware supports all DS, DSi & 3DS consoles, on any version. However, it must be built from source with user-provided components due to the WRFUxxed exploit requiring a copy of WRFU Tester v0.60 and NTR/TWL blowfish keys. This firmware also autoboots on a Nintendo DSi due to the way WRFUxxed works (Does not apply to the 3DS or NDS/DS Lite). You might want to consider using the Hybrid firmware instead if your DSi or 3DS console has CFW installed.

    - Follow the [LNH-Team DSpico setup guide](https://github.com/LNH-team/dspico/blob/develop/GUIDE.md) which contains all the steps needed to build the WRFUxxed firmware.

    - If you would prefer a video guide, you may follow [this YouTube video](https://www.youtube.com/watch?v=o7IuaewHNTQ) to build the WRFUxxed firmware with Docker, using [this dockerfile.](https://gist.github.com/synthic/f9396062d28144823ee8606eba101b2e). This video guide should result in an up to date firmware due to building it from the latest source.

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

- Your DSpico may be on an older firmware before fixes for some microSD card models were added. Please flash the latest firmware by following the [firmware flashing guide.](#flashing-dspico-firmware)

#### *I have a Nintendo DSi with HiyaCFW and it stays on the WRFU Tester screen for a long time.*

- When using a DSi with HiyaCFW on a large SD card, the WRFUxxed exploit slows down due to a quirk of the base WRFU Tester ROM. Switch the DSi console SD to a smaller one, or [install Hybrid FW](#flashing-dspico-firmware) to avoid WRFU Tester.

#### *The DSpico is not detected by my DS, DSi or 3DS system or hangs at the DS(i) splash screen.*

- Check that a MicroSD card is inserted and that you have flashed the firmware to the DSpico if applicable. If it still does not show up, try using some compressed air to blow out your console's cartridge slot.

#### *I get "Error: Failed to mount SD card.", or a blue screen after booting the DSpico with the WRFUxxed firmware.*

- Mounting your microSD card failed. Try reformatting it or try a different micro SD card. Also confirm that it is a genuine. If all else fails, You may need to flash an updated firmware with MicroSD fixes as mentioned above.

#### *I get "ERROR: Failed to open Pico Loader file.", or a red screen after booting the DSpico with the WRFUxxed firmware.*

- The `/_pico/picoLoader9.bin` or `/_pico/picoLoader7.bin` files could not be opened. Check that you copied all necessary files to the micro SD card, see [setup guide](#setup-guide) above.