---
title: MultiMenuDS Bootstrap
---

# MultiMenuDS Bootstrap
## nds-bootstrap frontend

!!! info

    MultiMenuDS Bootstrap is a kernel that provides an AKMenu/Wood style frontend for nds-bootstrap. It supports Acekard themes & cheats and is compatible with the release versions of nds-bootstrap.
    It comes with a BOOT.NDS file that you can boot with your flashcart's existing kernel, or you can use flashcart-bootstrap to autoboot it.

### Setup Guide:

1. Format the SD card you are using by following [this guide.](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)

1. Download the [MultiMenu Bootstrap package.](https://github.com/coderkei/MultiMenuDS/releases/latest/download/Bootstrap_MultiMenu.zip)

1. Next, extract *the contents* of the downloaded kernel zip to your SD card.

1. Download the [nds-bootstrap package](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest/download/nds-bootstrap.zip) and extract it. Copy `nds-bootstrap-release.nds` to the `_nds` folder on your SD card.

1. If you'd like to be able to use cheats on your games, download a [cheat database.](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases/latest)

1. You will need the `usrcheat.7z` file. Extract it using [7-Zip](https://www.7-zip.org/), inside you will find a `usrcheat.dat` file. Copy this file to `_nds/cheats/` on your SD card. (Create the `cheats` folder if it doesn't exist)

1. Make a `Games` folder and place any `.nds` game ROMs you'd like to play into it.

1. Boot up your flashcart with it's existing kernel and load BOOT.NDS

### Autobooting MultiMenuDS Bootstrap (Optional):

1. Download the [Flashcart-bootstrap package.](https://github.com/lifehackerhansol/flashcard-bootstrap/releases/latest/download/bootstrap.zip)

1. Next, extract the zip to a location on your computer.

1. Refer to the flashcart list on the [Flashcart-Bootstrap README](https://github.com/lifehackerhansol/flashcard-bootstrap?tab=readme-ov-file#flashcard-bootstrap) and identify the correct boot file your flashcart.

1. Copy the correct boot file to your SD card. Boot up your flashcart and see if it boots. It will automatically load BOOT.NDS

!!! warning

    MultiMenuDS currently does not have support for the apfix.pack file that Twilightmenu++ or NTR Forwarder uses, therefore some games may required being AP Patched to work correctly. You can use RetroGameFan NDS Rom Tool to patch games that may need it: [Download RetroGameFan NDS ROM Tool](https://gbatemp.net/download/35735/)