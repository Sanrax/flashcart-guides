---
title: Changing Flashcart Banners
---

![Custom Banner Cart](../images/R4_Custom_Icon.png){ align=right width="80"}
# Changing Flashcart Banners
## R4iLS, Ace3DS+/X, DEMON-HW, and DSpico carts

!!! danger "Breaks Stock DSi/3DS Compatibility"

    Changing the icon or banner text of a flashcart will cause it to be blocked by DSi and 3DS firmware, *unless* CFW (Custom Firmware) is installed on the console. NDS and DS Lite are not affected by this, as they do not do any integrity checks on the game being loaded.

    **DO NOT follow this guide if you are using your flashcart on a stock DSi or 3DS without CFW!**

### Supported Carts

!!! warning

    While this guide should work for nearly all supported carts, not all of them have been tested. If `Back up DS banner` is unavailable for your cart, or the saved banner fails validation, STOP and do not proceed any further. Open an issue in the guide's GitHub repository and provide information about your cart and setup.

    Cart-Flasher only enables DS banner operations after confirming that the cart uses a supported banner layout. Do not use `Write flash` to change a banner.

    And as always, flashing carts and modifying firmware carries a risk. We are not responsible for any damage that may occur, such as bricked carts.

<div class="compact-table" markdown>

| R4iLS & Ace3DS+/X | DSTTi DEMON-HW | DSpico |
|-------------------|----------------|--------|
| Ace3DS+ | r4isdhc.com 2014+ carts | Any DSpico cart with a USB port for flashing `.uf2` files |
| Ace3DS X | r4i-sdhc.com carts |  |
| ### in 1 combo cart | r4i-gold.eu carts |  |
| r4azure.com carts | R4i Max (r4imax.com) |  |
| r4inp.com carts | m3iupgrade.com carts |  |
| r4xmp.com carts | R4i Pocket (r4ipocket.com) |  |
| r4isdhc.com.cn carts | R4i Gold 3DS (r4i-gold.cc) |  |
| r4iwood.cn carts | R4 2016 Dual Core (r4-usas.com) |  |
| r4isdhc.hk 2020+ carts | R4i v1.4/v1.4.1 (r4i-gold.com) |  |
| r4li.com carts | R4i SDHC v1.41 (r4ixl-sdhc.com) |  |
| r4infinity.com 2 |  |  |
| r4ixds.com 2014 white version |  |  |
| woodr4isdhc.com carts |  |  |
| woodbeyond.com carts |  |  |
| ge.ndsi.in GEi HOT |  |  |
| qq3ds.com DS |  |  |  |

</div>

### Creating a Custom Icon

The first step to changing your flashcart's banner is to create a new icon for the cart to use. This can be as simple as just downloading an image you want to use, but if you would like the image to look good on NDS hardware, it's a good idea to manually edit and scale the image to match DS game icon specifications.

DS game icons have the following characteristics:

- 32 x 32px
- 16 colors max
- Color at index 0 is treated as transparent

---

[GIMP](https://www.gimp.org/downloads/){target="_blank"} is a free image editor that can be used to create an icon that meets these requirements. While any editor can be used if you have more experience with alternative options, the following steps will be using GIMP.

1. Download and install GIMP, launch it, and open your image.

1. Crop your image to a 1:1 aspect ratio. Select the crop tool, and check `Fixed Aspect ratio`, setting it to `1:1`.

1. Select `Image` -> `Scale Image`, and type in a Width/Height of 32px. Hit `Scale`.

1. You should now have a square, 32px size image. Now, we can change the image to 16-color indexed mode. Select `Image` -> `Mode` -> `Indexed`. Select `Generate optimum palette`, and set maximum colors to 16.

1. After changing the image to indexed color, you can check the generated colormap by opening the colormap dialog. Select `Windows` -> `Dockable Dialogs` -> `Colormap`. This will show the 16 colors available in the image.

1. Check the color at index 0 (first in the colormap). It will be treated as transparent by the DS. If you don't want the color at index 0 to be transparent, re-arrange the colormap so a different color is at index 0. Right-click on the color boxes in the colormap window, and select `Rearrange Colormap...`.

1. Once you are happy with the colors and how the image looks, select `File` -> `Export As...`. Export the file as `.png`, keeping the default values.

### Creating a Banner File

Next, we need to convert the custom icon into a full NDS game banner with text that the console can read in the menu. There are multiple tools available to do this, and we will go over them below. NDS Banner Editor is a native program and a more advanced editor, while Banner Maker is a cross-platform webapp.

=== "NDS Banner Editor"

    1. Download [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases/latest){target="_blank"} for your OS.
    
    1. Launch NDS Banner Editor, then select `File` -> `New`.
    
    1. Change the `Version` in the bottom right to `0x0001 - Regular DS`.
        
        ??? note "Animated Icons"

            While it is technically possible to write an animated DSi banner into a DS-mode ROM, it will likely overwrite non-banner addresses of the ROM that contain actual data due to an animated banner being much larger in size than a DS-mode static banner. For a flashcart, this data may or may not be used before the cart's exploit launches, so it's possible that overwriting these data areas of the ROM can stop the cart from booting. However, the cart should still be recoverable in this case by running cart-flasher from a DSi or 3DS system on the console's SD.

            Note that even if you are successful in applying an animated banner, the icon will only appear animated in the DSi menu. Due to a quirk of the DSi menu, it will always attempt to load animated banner data if it exists, regardless of whether or not the title is DSi-enhanced. The 3DS menu properly checks this, and will not load animated banners for DS-mode games.
    
    1. Click `Import Image`, and select the icon you created earlier.

    1. Next, edit the game title and subtitle text in the text box on the right side of the window. After you are done editing, click `Set All` to set the custom text for all regions. (Unless you want different text for different DS languages)

        ??? tip "Text Layouts"

            You can have up to three lines of text in the banner. Both three and two-line layouts are commonly used in retail games.
            
            For example, the following three-line text is used by *Castlevania - Order of Ecclesia*:
            ```
            Castlevania
            Order of Ecclesia
            Konami Digital Entertainment
            ```
    
            *Advance Wars: Dual Strike* uses a two-line layout:
            ```
            Advance Wars: Dual Strike
            Nintendo
            ```

    1. Select `File` -> `Save As...`, give the file a name, then save the `.bin` to your PC. This is your NDS banner data.

=== "Banner Maker"

    1. Open [Banner Maker](https://tasken.github.io/banner-maker/){target="_blank"} in your PC's web browser.

    1. Upload your 32px, 16-colors game icon to the website.
        - If you didn't manually convert your image to meet these specifications, the website will automatically do so.

    1. Fill out the game title/subtitle boxes.

        ??? tip "Text Layouts"

            You can have up to three lines of text in the banner. Both three and two-line layouts are commonly used in retail games.
            
            For example, the following three-line text is used by *Castlevania - Order of Ecclesia*:
            ```
            Castlevania
            Order of Ecclesia
            Konami Digital Entertainment
            ```
    
            *Advance Wars: Dual Strike* uses a two-line layout:
            ```
            Advance Wars: Dual Strike
            Nintendo
            ```

    1. Underneath the preview, click the `Download banner.bin` button to download the resulting banner after you are done editing.

    1. Save the `banner.bin` to a folder on your PC. This is your NDS banner data.

#### Pre-made Banner Files

Below are a couple pre-made banner `.bin` files you can download and edit, or use as-is, if you'd like to skip making your own banner.

<div class="grid cards" markdown>

- [<span style="display: flex; align-items: center; gap: 1rem; color: var(--md-default-fg-color);">![R4iLS Red](../assets/Banner_Change/R4iLS%20Icon%20Red.png){ style="flex-shrink: 0" }<span style="flex: 1; text-align: center;"><strong>R4 i.L.S</strong><br>Revolution for DS</span></span>](../assets/Banner_Change/R4iLS_Banner_Red.bin)
- [<span style="display: flex; align-items: center; gap: 1rem; color: var(--md-default-fg-color);">![R4iLS](../assets/Banner_Change/R4iLS.png){ style="flex-shrink: 0" }<span style="flex: 1; text-align: center;"><strong>R4 Revolution for i.L.S</strong><br>www.r4li.com</span></span>](../assets/Banner_Change/R4iLS_Banner.bin)
- [<span style="display: flex; align-items: center; gap: 1rem; color: var(--md-default-fg-color);">![R4 Gold](../assets/Banner_Change/R4%20Gold.png){ style="flex-shrink: 0" }<span style="flex: 1; text-align: center;"><strong>R4 SDHC Dual Core</strong><br>www.r4isdhc.com.cn</span></span>](../assets/Banner_Change/R4_Gold_Banner.bin)
- [<span style="display: flex; align-items: center; gap: 1rem; color: var(--md-default-fg-color);">![R4 Silver](../assets/Banner_Change/R4%20Silver.png){ style="flex-shrink: 0" }<span style="flex: 1; text-align: center;"><strong>R4 SDHC Dual Core</strong><br>www.r4isdhc.com.cn</span></span>](../assets/Banner_Change/R4_Silver_Banner.bin)

</div>

### Flashing the Custom Banner

The custom banner can be written directly to supported carts with Cart-Flasher. The program can back up the current banner, checks the new banner before writing, and only changes the banner area of the flashrom. Choose a tab below depending on your cart hardware.

!!! note "Banner Operation Unavailable"

    `Back up DS banner` and `Write DS banner` only appear after Cart-Flasher confirms that the cart uses a supported banner layout. If they are unavailable, do not use `Write flash` to change the banner.

=== "Ace3DS+ & R4iLS"

    1. Download the latest release of [Cart-Flasher](https://github.com/tasken/Cart-Flasher/releases/latest/download/cart_flasher.nds) and place it on your flashcart's SD card.

    1. Create a `cart-backups/banners` folder on the SD card if it does not already exist, then place the custom banner `.bin` file you made earlier in that folder.

    1. Boot into your flashcart menu, and launch Cart-Flasher.

    1. Accept the warning by pressing `A`.

    1. Select `Ace3DS+` in the cart list, then select `Back up DS banner`.

    1. Press `A` to save a copy of the current banner.
        - Cart-Flasher saves it in `cart-backups/banners`. Keep this original banner file in a safe location so you can restore it later.

    1. Select `Ace3DS+` again in the cart list, then select `Write DS banner`.

    1. Select your custom banner `.bin` file, then input the key combo to proceed.

    1. Wait until the progress bar finishes, then press `A` to return to the cart list.

    1. You should now see your new custom banner displayed in the console's menu!

=== "DEMON-HW"

    1. Download the latest release of [Cart-Flasher](https://github.com/tasken/Cart-Flasher/releases/latest/download/cart_flasher.nds) and place it on your flashcart's SD card.

    1. Create a `cart-backups/banners` folder on the SD card if it does not already exist, then place the custom banner `.bin` file you made earlier in that folder.

    1. Boot into your flashcart menu, and launch Cart-Flasher.

    1. Accept the warning by pressing `A`.

    1. Select `R4iSDHC` in the cart list, then select `Back up DS banner`.

    1. Press `A` to save a copy of the current banner.
        - Cart-Flasher saves it in `cart-backups/banners`. Keep this original banner file in a safe location so you can restore it later.

    1. Select `R4iSDHC` again in the cart list, then select `Write DS banner`.

    1. Select your custom banner `.bin` file, then input the key combo to proceed.

    1. Wait until the progress bar finishes, then press `A` to return to the cart list.

    1. You should now see your new custom banner displayed in the console's menu!

=== "DSpico"

    1. Open [DSpico Firmware Patcher](https://mighty-jun.github.io/DSpico-firmware-patcher/){target="_blank"} in your PC's web browser.

    1. Select `Extract banner from ROM (.nds) or use custom banner (.bin)`.

    1. Click `Browse...`

    1. Select your customized `.bin` banner file.

    1. After processing, you will be able to download `DSpico_custom.uf2`. Save it to your PC.

    1. Get your DSpico, and remove any MicroSD card in the cart.
        
    1. Connect a USB cable to your DSpico and plug it into your computer, then open your file manager.
    
    1. A drive called `RPI-RP2` will appear. Drag & drop the `DSpico_custom.uf2` file into this drive. The drive should then automatically eject and disappear from your computer, indicating the DSpico has processed and installed the firmware. This can sometimes take a few seconds.

    1. Insert the DSpico into your console, and boot it up. You should now see your new custom banner displayed in the console's menu!

### Reverting Changes

If you would like to restore your original banner and make the cart function on stock systems again, use the DS banner backup you created with Cart-Flasher. This restores only the banner area.

If your cart was already bricked by a previous full flashrom write, restore a known-good flashrom backup instead.

You will need a modded DSi or 3DS console to restore a bricked cart that does not boot anymore. If your cart boots but you want to revert the banner, any console will work.

=== "Restore a Working Cart"

    === "Ace3DS+ & R4iLS"
    
        1. Download the latest release of [Cart-Flasher](https://github.com/tasken/Cart-Flasher/releases/latest/download/cart_flasher.nds) and place it on your flashcart's SD card.

        1. Place the original DS banner backup in `cart-backups/banners` on your SD.

        1. Boot into your flashcart menu, and launch Cart-Flasher.
        
        1. Accept the warning by pressing `A`.

        1. Select `Ace3DS+` in the cart list, then select `Write DS banner`.
        
        1. Select the original banner backup, then input the key combo to proceed.
        
        1. Wait until the progress bar finishes, then press `A` to return to the cart list.
        
        1. Your cart should now display its original banner again!
    
    === "DEMON-HW"
    
        1. Download the latest release of [Cart-Flasher](https://github.com/tasken/Cart-Flasher/releases/latest/download/cart_flasher.nds) and place it on your flashcart's SD card.

        1. Place the original DS banner backup in `cart-backups/banners` on your SD.

        1. Boot into your flashcart menu, and launch Cart-Flasher.
        
        1. Accept the warning by pressing `A`.

        1. Select `R4iSDHC` in the cart list, then select `Write DS banner`.
        
        1. Select the original banner backup, then input the key combo to proceed.
        
        1. Wait until the progress bar finishes, then press `A` to return to the cart list.
        
        1. Your cart should now display its original banner again!
    
    === "DSpico"
    
        Reverting the DSpico banner to stock is as simple as reflashing the regular `.uf2` firmware.

        Follow the [DSPico setup guide](../cart-guides/dspico.md) to get a fresh copy of the firmware.

=== "Restore a Bricked Cart"

    === "Ace3DS+ & R4iLS"
    
        1. Ensure that you have [TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/) installed on a modded DSi or 3DS console.
            - DSi CFW guide can be found [here](https://dsi.cfw.guide). 3DS CFW guide is [here](https://3ds.hacks.guide).

        1. Download the latest release of [Cart-Flasher](https://github.com/tasken/Cart-Flasher/releases/latest/download/cart_flasher.nds) and place it on your console's SD card.
        
        1. Create a `cart-backups` folder on your SD root if one does not exist already.

        1. Place your unmodified `Ace3DSPlus-backup.bin` file in `cart-backups` on your console's SD.

        1. Insert your cart into the console.

        1. Boot into TWiLight Menu++, and launch Cart-Flasher.
        
        1. Accept the warning by pressing `A`.

        1. Select `Ace3DS+` in the cart list, then select `Write flash`.
        
        1. Select the `Ace3DSPlus-backup.bin` file to write, then input the key combo to proceed.
        
        1. Wait until the progress bar finishes, then press `A` to exit and reboot your console.
        
        1. Your cart should now be reverted to the factory flashrom!
    
    === "DEMON-HW"
    
        1. Ensure that you have [TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/) installed on a modded DSi or 3DS console.
            - DSi CFW guide can be found [here](https://dsi.cfw.guide). 3DS CFW guide is [here](https://3ds.hacks.guide).

        1. Download the latest release of [Cart-Flasher](https://github.com/tasken/Cart-Flasher/releases/latest/download/cart_flasher.nds) and place it on your console's SD card.
        
        1. Create a `cart-backups` folder on your SD root if one does not exist already.

        1. Place your unmodified `r4isdhc-backup.bin` file in `cart-backups` on your console's SD.

        1. Insert your cart into the console.

        1. Boot into TWiLight Menu++, and launch Cart-Flasher.
        
        1. Accept the warning by pressing `A`.

        1. Select `R4iSDHC` in the cart list, then select `Write flash`.
        
        1. Select the `r4isdhc-backup.bin` file to write, then input the key combo to proceed.
        
        1. Wait until the progress bar finishes, then press `A` to exit and reboot your console.
        
        1. Your cart should now be reverted to the factory flashrom!
    
    === "DSpico"
    
        Reverting the DSpico banner to stock is as simple as reflashing the regular `.uf2` firmware.

        Follow the [DSPico setup guide](../cart-guides/dspico.md) to get a fresh copy of the firmware.