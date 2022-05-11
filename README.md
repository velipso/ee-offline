## About
Everybody Edits: Offline (EEO) is a recreation of Everybody Edits (EE), adapted by Seb135 and LuciferX for singleplayer due to Adobe ending support for Flash. The source code has been uploaded here, to possibly allow for a new age of modders to tear apart and change the game.

This fork was created by velipso in order to port the game to HTML5.  It's not done, but you can play what is available so far by clicking here:

[Play Demo](https://cdn.githubraw.com/velipso/ee-offline/480c664e3236919fe268141a48f3d8b75afea61e/web/index.html)

You can run the test suite here (inspired by [SirJosh](https://github.com/SirJosh3917/smiley-face-game)):

[Run Tests](https://cdn.githubraw.com/velipso/ee-offline/480c664e3236919fe268141a48f3d8b75afea61e/web/test.html)

## Version differences
Some features of EE were tricky or unnecessary to preserve, and thus there are several differences between EE and EEO. Those include:
* Smaller window size (640x500 vs 850x500), with the chat sidebar removed.
* There is only one lobby screen - the Campaign selection screen. Buttons have been added to allow opening and creating worlds.
* Fewer restrictions - commands such as /edit, /save, /clear, etc, are available in all non-Campaign worlds. Worlds can also be created with any size between 3x3 to 636x460.
* All Campaigns and tiers, and their time trials, are available immediately. Additionally, Campaign progress saves indefinitely.
* You can use all smilies, blocks, and auras, as well as gold borders.
* Gold doors and gates can be toggled by enabling/disabling the gold border on your smiley.
* Some staff-only tools are available. Keybinds can be found ingame, in Options > Game Settings > Edit Key Bindings.
* Several online-oriented game and world options have been removed.
* There are three new buttons in the in-game Options menu:
  * Fake Players (FPs) to allow for Orange Switches, and a World Manager to allow for World Portals, to retain their functionality.
  * Edit Tools to allow users to place more blocks at once.
  * FPs will prefer to spawn at a World Portal Spawnpoint that corresponds to their ID, visible on the left in the FP menu.
* Corresponding commands have been added:
  * /summon to bring up the FP menu, /summon <n> to create n FPs instantly, /summon <x> <y> to spawn a FP at a given coordinate.
  * /world to bring up the World menu, /world <id> to travel to that world ID without the use of the menu or a World Portal.
* New level format: .eelvls, a zip full of .eelvl files. The purpose of this is to allow you to easily save, load, and share collections of worlds that use World Portals. If you use the World Manager to add any sub-worlds to your world, using /save will save an .eelvls instead of an .eelvl.

## Modifying the game
The code for the HTML5 port is located in the `web/` directory.  Edit the files, and launch in a browser.  Enjoy!

## Community
If you need any help with modding, want to share your creations, or just want to talk about the game, you can join the [EEO Discord](https://discord.gg/V5maATbSgc)
