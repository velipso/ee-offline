About
=====

Everybody Edits: Offline (EEO) is a recreation of Everybody Edits (EE), adapted by Seb135 and
LuciferX for singleplayer due to Adobe ending support for Flash.

I created this fork in order to port the game to HTML5.  It's not done, but you can play what is
available so far by clicking here:

[Play Game](https://cdn.githubraw.com/velipso/ee-offline/3eb7c629101c101f10fb75a3da7dfc7e595aae42/web/index.html)

There is also a TAS frontend, but it's pretty basic at this point:

[TAS Frontend](https://cdn.githubraw.com/velipso/ee-offline/3eb7c629101c101f10fb75a3da7dfc7e595aae42/web/tas.html)

You can run the test suite here (inspired by [SirJosh](https://github.com/SirJosh3917/smiley-face-game)):

[Test Suite](https://cdn.githubraw.com/velipso/ee-offline/3eb7c629101c101f10fb75a3da7dfc7e595aae42/web/test.html)

HTML5 Port
----------

The code for the HTML5 port is located in the `web/` directory.  The only other changes made outside
that directory is adding extra images in the `media/` directory to help with rendering.

I started by getting the resources loaded and copying over the classes from the ActionScript files.
Over time, I've tried to simplify and clean up the code a bit more.  The test suite is important so
I can confirm my refactoring doesn't break the game.

Community
---------

If you need any help with modding, want to share your creations, or just want to talk about the
game, you can join the [EEO Discord](https://discord.gg/V5maATbSgc).

You can find me there under the username velipso#1789.
