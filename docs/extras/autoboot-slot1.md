---
title: Autobooting Slot-1 on DSi
---

![Slot-1](../images/Slot-1-Icon.png){ align=right width="115"}
# Autobooting Slot-1 on DSi
## Modded DSi Consoles

The aim of this page is simple - it helps you setup your DSi in such a way that it will always boot into Slot-1 when you turn it on, and nothing else. This is a fairly common use case for flashcart users on DSi, since the DSi menu usually just serves as an annoyance when trying to boot into the flashcart's kernel to play a game.

You may ask, why not use the built-in Unlaunch slot-1 loader? Unfortunately, Unlaunch's slot-1 launcher implementation is quite bad and often causes bugs or issues when using it, and many flashcarts straight up do not load when using it. Therefore, we will setup Lorenzooone's Simple-DS-Slot-1-Launcher homebrew as the default boot target, which will then load Slot-1 for us properly.

### Setup Guide

1. Ensure that your DSi is modded and has Unlaunch installed. Follow the [DSi CFW guide](https://dsi.cfw.guide) if it's not yet modded.

1. Download the [latest release of Slot-1-Launcher](https://github.com/Lorenzooone/Simple-DS-Slot-1-Launcher/releases/latest/download/slot1launch.zip).

1. Open/extract the zip file, then copy `slot1launch.dsi` into the root of your DSi's SD card.

1. Hold `A` and `B`, then power on the console. You should be greeted with the Unlaunch main menu.

1. Select `Options` in the menu, then select `No Button`.

1. Select `Slot-1 Launcher` in the list, then select `Save & Exit`.

1. Reboot your DSi. You should see it automatically boot into the slot-1 cartridge!