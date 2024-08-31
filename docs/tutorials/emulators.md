---
title: Setting up Emulators
---

# Setting up Emulators

---

### Nintendo Consoles

=== "GBA"

    !!! info
        
        GBARunner 2 and 3 are both hypervisors for running GBA games on DS hardware. Setup guides for both are provided, as currently, some games run better on one than the other. GBARunner2 is the older and more stable release, while GBARunner3 is the in-development successor to GBARunner2.
    
    === "GBARunner2"

        1. Download [DSL Enhanced GBARunner2.](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases/download/v20201019-DSL_97447fe/GBARunner2_arm9dldi_ds.nds)
        
        1. Create an `Emulators` folder on your SD card root, and place `GBARunner2_arm9dldi_ds.nds` inside.
        
        1. Create a `_gba` folder on your SD card root.
         
        1. Obtain a GBA BIOS dump. Rename the file to `bios.bin` if it isn't named that already.
        
        1. Place the `bios.bin` file in the `_gba` folder.
        
            !!! note
            
                If you are unable to obtain a GBA BIOS .bin file, you may skip the two steps above. Keep in mind however, that GBARunner2 will fallback to the built in open-source BIOS, which will lead to worse game compatibility.
        
        1. Create a `GBA ROMs` folder on your SD card root, and place your `.gba` game ROMs inside. 
        
        1. Place the SD card back into your cart, and boot into the menu.
        
        1. To play GBA games, navigate to the `Emulators` folder, launch the GBARunner2 NDS file, and select a GBA ROM in the GBARunner2 menu.
        
        !!! tip
        
            If the ARM9 DLDI version of GBARunner2 doesn't work on your cart, you can try using the [ARM7 DLDI version](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases/download/v20201019-DSL_97447fe/GBARunner2_arm7dldi_ds.nds) instead.
    
    === "GBARunner3"
        
        1. Download the [GBARunner3 zip file.](https://files.deletecat.com/GBARunner3.zip)
        
        1. Open/extract the zip file, and copy *the contents* into the root of your SD card.
        
        1. Download the [GBARunner3 frontend.](https://github.com/flashcarts/gbar3-frontend/releases/download/v0.9.0-fcnet3/gbar3-frontend.nds)
       
        1. Create an `Emulators` folder on your SD card root, and place `gbar3-frontend.nds` inside.
         
        1. Obtain a GBA BIOS dump. Rename the file to `bios.bin` if it isn't named that already.
        
        1. Place the `bios.bin` file in the `_gba` folder.
        
        1. Create a `GBA ROMs` folder on your SD card root, and place your `.gba` game ROMs inside. 
        
        1. Place the SD card back into your cart, and boot into the menu.
        
        1. To play GBA games, navigate to the `Emulators` folder, launch the GBARunner3 Frontend NDS file, and select a GBA ROM in the menu.

=== "GB/C"

    1. Download [DSL Enhanced GBARunner2.](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases/download/v20201019-DSL_97447fe/GBARunner2_arm9dldi_ds.nds)
    
    1. Create an `Emulators` folder on your SD card root, and place `GBARunner2_arm9dldi_ds.nds` inside.
    
    1. Create a `_gba` folder on your SD card root.
     
    1. Obtain a GBA BIOS dump. Rename the file to `bios.bin` if it isn't named that already.
    
    1. Place the `bios.bin` file in the `_gba` folder.
    
        !!! note
        
            If you are unable to obtain a GBA BIOS .bin file, you may skip the two steps above. Keep in mind however, that GBARunner2 will fallback to the built in open-source BIOS, which will lead to worse game compatibility.
    
    1. Create a `GBA ROMs` folder on your SD card root, and place your `.gba` game ROMs inside. 
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play GBA games, navigate to the `Emulators` folder, launch the GBARunner2 NDS file, and select a GBA ROM in the GBARunner2 menu.l