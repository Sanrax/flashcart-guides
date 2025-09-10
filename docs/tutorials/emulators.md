---
title: Setting Up Emulators
---

# Setting up Emulators

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
        
        1. On your SD card root, create a `ROMs` folder, and then create a `GBA` folder inside it. Place your `.gba` game ROMs inside.
        
        1. Place the SD card back into your cart, and boot into the menu.
        
        1. To play GBA games, navigate to the `Emulators` folder, launch the GBARunner2 NDS file, and select a GBA ROM in the GBARunner2 menu.
        
        !!! tip
        
            If the ARM9 DLDI version of GBARunner2 doesn't work on your cart, you can try using the [ARM7 DLDI version](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases/download/v20201019-DSL_97447fe/GBARunner2_arm7dldi_ds.nds) instead.
    
    === "GBARunner3"
        
        1. Download the [GBARunner3 zip file.](https://files.deletecat.com/GBARunner3-hicode.zip)
        
        1. Open/extract `GBARunner3-hicode.zip`, and copy *the contents* into the root of your SD card.
        
        1. Download the [GBARunner3 frontend.](https://github.com/flashcarts/gbar3-frontend/releases/download/v0.9.0-fcnet3/gbar3-frontend.nds)
       
        1. Create an `Emulators` folder on your SD card root, and place `gbar3-frontend.nds` inside.
         
        1. Obtain a GBA BIOS dump. Rename the file to `bios.bin` if it isn't named that already.
        
        1. Place the `bios.bin` file in the `_gba` folder.
        
        1. On your SD card root, create a `ROMs` folder, and then create a `GBA` folder inside it. Place your `.gba` game ROMs inside.
        
        1. Place the SD card back into your cart, and boot into the menu.
        
        1. To play GBA games, navigate to the `Emulators` folder, launch `gbar3-frontend.nds`, and select a GBA ROM in the menu.

=== "GB/C"

    1. Download the [GameYob zip file.](https://github.com/Stewmath/GameYob/releases/download/v0.5.2/gameyob.zip)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Open/extract `gameyob.zip`, and locate `gameyob.nds` inside. Copy this file to the `Emulators` folder on your SD card.
    
    1. On your SD card root, create a `ROMs` folder, and then create a `GB` folder inside it. Place your `.gb` or `.gbc` game ROMs inside.
     
    1. Obtain a GameBoy Color BIOS dump. Rename the file to `gbc_bios.bin` if it isn't named that already.
    
    1. Place the `gbc_bios.bin` file in `/ROMs/GB`.
    
        !!! note
        
            If you are unable to obtain a GBC BIOS .bin file, you may skip the two steps above. However, GameYob will not be able to run games in color without the BIOS file, so you will only be able to emulate games in grayscale.
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play GB/C games, navigate to the `Emulators` folder, launch `gameyob.nds`, and select a GB/C ROM in the GameYob menu.

=== "SNES"

    !!! warning
    
        SNEmulDS has fairly low game compatibility, so expect results to be hit or miss. Some games may run flawlessly, some may be buggy, and some may be completely unplayable. You can get an idea of what will work and what settings to use by checking the [compatibility list](https://wiki.gbatemp.net/wiki/SNEmulDS_Compatibility_List).

    1. Download the [SNEmulDS zip file.](https://dlhb.gamebrew.org/dshomebrew2/snemulds_0.6a.zip)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Open/extract `snemulds_0.6a.zip`, and locate `SNEmulDS.nds` inside. Copy this file to the `Emulators` folder on your SD card.
    
    1. Copy `snemul.cfg` to your SD card root, then open the file with Notepad. Change the `ROMPath = /SNES` line to `ROMPath = /ROMs/SNES`, and save the file.
    
    1. On your SD card root, create a `ROMs` folder, and then create a `SNES` folder inside it. Place your `.sfc` game ROMs inside.
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play SNES games, navigate to the `Emulators` folder, launch `SNEmulDS.nds`, and select a SNES ROM in the menu.

=== "NES"

    1. Download the [NesDS NDS file.](../assets/nesDS.nds)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Copy the `nesDS.nds` file to the `Emulators` folder on your SD card.
    
    1. On your SD card root, create a `ROMs` folder, and then create a `NES` folder inside it. Place your `.nes` game ROMs inside.
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play NES games, navigate to the `Emulators` folder, launch `nesDS.nds`, and select a NES ROM in the menu.

### Atari Consoles

=== "Atari 2600"

    1. Download the [StellaDS NDS file.](https://github.com/wavemotion-dave/StellaDS/releases/latest/download/StellaDS.nds)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Copy `StellaDS.nds` to the `Emulators` folder on your SD card.
    
    1. On your SD card root, create a `ROMs` folder, and then create a `2600` folder inside it. Place your Atari 2600 game ROMs inside.
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play Atari 2600 games, navigate to the `Emulators` folder, launch `StellaDS.nds`, and select a ROM in the menu.

=== "Atari 5200"

    1. Download the [A5200DS NDS file.](https://github.com/wavemotion-dave/A5200DS/releases/latest/download/A5200DS.nds)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Copy `A5200DS.nds` to the `Emulators` folder on your SD card.
    
    1. On your SD card root, create a `ROMs` folder, and then create two folders inside: `5200` and `BIOS`.
    
    1. Place your `.a52` game ROMs inside the `5200` folder.
    
    1. Obtain an Atari 5200 BIOS dump. Rename the file to `5200.rom` if it isn't named that already.
    
    1. Place the `5200.rom` file in `/ROMs/BIOS`.
    
        !!! note
        
            If you are unable to obtain an Atari 5200 BIOS file, you may skip the two steps above. A built-in open-source BIOS is provided by the emulator, but some games don't have full compatibility with the built-in BIOS.
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play Atari 5200 games, navigate to the `Emulators` folder, launch `A5200DS.nds`, and select a ROM in the menu.

=== "Atari 7800"

    1. Download the [A7800DS NDS file.](https://github.com/wavemotion-dave/A7800DS/releases/latest/download/A7800DS.nds)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Copy `A7800DS.nds` to the `Emulators` folder on your SD card.
    
    1. On your SD card root, create a `ROMs` folder, and then create two folders inside: `7800` and `BIOS`.
    
    1. Place your `.a78` or `.bin` game ROMs inside the `7800` folder.
    
        !!! note
        
            NTSC ROMs are strongly recommended by the developer. PAL ROMs have more scanlines and render more slowly, causing the sound to be wrong. All testing was also done with only NTSC ROMs.
    
    1. Obtain an Atari 7800 High Score ROM dump. Rename the file to `highscore.rom` if it isn't named that already.
    
    1. Place the `highscore.rom` file in `/ROMs/BIOS`.
    
        !!! note
        
            If you are unable to obtain an Atari 7800 highscore.rom file, you may skip the two steps above. The emulator will work without it, but your high scores won't be saved.
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play Atari 7800 games, navigate to the `Emulators` folder, launch `A7800DS.nds`, and select a ROM in the menu.

=== "Atari 800/400"

    1. Download the [A8DS NDS file.](https://github.com/wavemotion-dave/A8DS/releases/latest/download/A8DS.nds)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Copy `A8DS.nds` to the `Emulators` folder on your SD card.
    
    1. On your SD card root, create a `ROMs` folder, and then create two folders inside: `800` and `BIOS`.
    
    1. Place your 8-bit Atari game game ROMs inside the `800` folder.
    
        - The following game types are supported by A8DS:
            - `CAR` and `ROM` cartridge-based games up to 1MB in size
            - `XEX` Atari 8-bit executable images
            - `ATR` and `ATX` disk-based games
            - Atari 5200 cartridge based games (up to 128K Super Carts)
    
    1. A8DS optionally supports Atari BIOSes for more accurate emulation. An open source "Altirra" BIOS is built-in, but official Atari BIOSes will provide the best performance, if you are able to obtain them.
        
        - The following optional BIOSes are supported by A8DS:
            - `atarixl.rom` - Atari 16k XL/XE BIOS (NTSC Rev 02 - BB 01.02, 10.May.1983)
            - `atariosb.rom` - 12k Atari 800 OS-B revision BIOS (NTSC OS-B version 2) - for older games
            - `ataribas.rom` - 8k Atari BASIC cartridge (Rev C)
            - `a5200.rom` - 2k Atari 5200 BIOS ROM (Rev 1)

    1. Place all BIOS files you have obtained and want to use in `/ROMs/BIOS`.
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play Atari 8-bit games, navigate to the `Emulators` folder, launch `A8DS.nds`, and select a ROM in the menu.

### Miscellaneous Consoles

=== "Sega Genesis/MegaDrive"

    1. Download the [jEnesisDS zip file.](https://dlhb.gamebrew.org/dshomebrew2/jenesisds_0.7.4.zip)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Open/extract `jenesisds_0.7.4.zip`, and locate `jEnesisDS.nds` inside. Copy this file to the `Emulators` folder on your SD card.
    
    1. On your SD card root, create a `ROMs` folder, and then create a `Genesis` folder inside it. Place your Genesis game ROMs inside.

        !!! warning "Supported File Types"

            jEnesisDS **requires** ROMs to be in `.gen`, `.bin`, or `.smd` format to be recognized in the file browser. If you have `.md` ROMs, rename them to `.gen` or `.bin` before placing them on your SD card.
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play Sega Genesis games, navigate to the `Emulators` folder, launch `jEnesisDS.nds`, and select a ROM in the menu.

=== "ColecoVision"

    1. Download the [ColecoDS NDS file.](https://github.com/wavemotion-dave/ColecoDS/releases/latest/download/ColecoDS.nds)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Copy `ColecoDS.nds` to the `Emulators` folder on your SD card.
    
    1. On your SD card root, create a `ROMs` folder, and then create two folders inside: `Coleco` and `BIOS`.
    
    1. Place your ColecoVision game ROMs inside the `Coleco` folder.
            
    1. Obtain a ColecoVision BIOS dump. Rename the file to `coleco.rom` if it isn't named that already.
    
    1. Place the `coleco.rom` file in `/ROMs/BIOS`.
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play ColecoVision games, navigate to the `Emulators` folder, launch `ColecoDS.nds`, and select a ROM in the menu.

    !!! tip

        More consoles than just ColecoVision are supported by ColecoDS - similar architecture devices are also emulated. See the [ColecoDS README](https://github.com/wavemotion-dave/ColecoDS/blob/main/README.md) for more information, and a full list of supported BIOSes.

=== "NeoGeo"

    1. Download the [NeoDS NDS file.](https://github.com/flashcarts/AOS/raw/refs/heads/master/extras/APP/NeoDS.nds)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Copy `NeoDS.nds` to the `Emulators` folder on your SD card.
    
    1. On your SD card root, create a `ROMs` folder, and then create a `NeoGeo` folder inside.
    
    1. Also on the SD card root, create a `data` folder, and then create a `NeoDS` folder inside.

    1. Download [this `_NeoDS.ini` file](../assets/_NeoDS.ini), and place it inside `/data/NeoDS`.

    1. NeoDS requires ROMs to be converted to `.neo` format before they can be used with the emulator. Follow the documentation [found here](https://github.com/flashcarts/AOS/blob/master/extras/NeoDS-ReadMe.md) to convert your ROMs.
    
    1. Once your ROMs are converted, place them in `/ROMs/NeoGeo` on your SD card. 
    
    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play NeoGeo games, navigate to the `Emulators` folder, launch `NeoDS.nds`, and select a ROM in the menu.

=== "PC-Engine/TurboGrafx-16"

    1. Download the [NitroGrafx NDS file.](https://github.com/flashcarts/AOS/raw/refs/heads/master/extras/APP/NitroGrafx.nds)
    
    1. Create an `Emulators` folder on your SD card root.
    
    1. Copy `NitroGrafx.nds` to the `Emulators` folder on your SD card.
    
    1. On your SD card root, create a `ROMs` folder, and then create a `TurboGrafx` folder inside it.
    
    1. Place your TurboGrafx/PC-Engine game ROMs inside the `TurboGrafx` folder.

     1. On your SD card root, create a `NitroGrafx` folder. 
     
         - This folder is only used by the emulator for save files and configuration, so you don't need to place anything inside.

    1. Place the SD card back into your cart, and boot into the menu.
    
    1. To play TurboGrafx games, navigate to the `Emulators` folder, launch `NitroGrafx.nds`, and select a ROM in the menu.
