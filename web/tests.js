function loadTests(it, expect){

function tiles(m){
  const mappings = {
    ' ': {},
    '#': {tile: 1088}, // block
    '^': {tile:    2}, // gravity up
    '>': {tile:    3}, // gravity right
    '<': {tile:    1}, // gravity left
    '.': {tile:    4}, // dot
    '[': {tile: 1116, prop: {rotation: 2}}, // half slab left
    ']': {tile: 1116, prop: {rotation: 0}}, // half slab right
    '{': {tile: 1092, prop: {rotation: 0}}, // one way left
    '}': {tile: 1092, prop: {rotation: 2}}, // one way right
    'X': {tile:  222, goal: true},
    'p': {spawn: true}
  };
  if (m){
    for (const [k, v] of Object.entries(m))
      mappings[k] = v;
  }
  return mappings;
}

// TODO: test for EFFECT_CURSE       = 421;
// TODO: test for EFFECT_ZOMBIE      = 422;
// TODO: test for EFFECT_TEAM        = 423;
// TODO: test for EFFECT_LOW_GRAVITY = 453;
// TODO: test for EFFECT_MULTIJUMP   = 461;
// TODO: test for EFFECT_GRAVITY     = 1517;
// TODO: test for EFFECT_POISON      = 1584;

it('player gold works', () => {
  const sim = new Simulator(`
    #############
    #p   g      #
    #ddd###ddd###
    #ddd# dddd###
    #ggg#g#ggg###
    #####X#######
    #############
  `, tiles({
    'd': {tile: 200}, // gold smiley door
    'g': {tile: 201}  // gold smiley gate
  }))
  .right()
  .wait(1000)
  .playerWearsGold(true)
  .left()
  .wait(1000)
  .playerWearsGold(false)
  .wait(500);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('gold and silver crowns work', () => {
  const sim = new Simulator(`
    ######################
    #p    gG wW      dD X#
    #ddDD#######ggGG######
    ######################
  `, tiles({
    'w': {tile:  121}, // silver crown
    'd': {tile: 1152}, // silver crown door
    'g': {tile: 1153}, // silver crown gate
    'W': {tile:    5}, // gold crown
    'D': {tile: 1094}, // gold crown door
    'G': {tile: 1095}  // gold crown gate
  }))
  .right()
  .wait(2000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('silver crowns work', () => {
  const sim = new Simulator(`
    #############
    #p   g     w#
    #ddd###ddd###
    #ddd#Xdddd###
    #ggg#ggggg###
    #############
  `, tiles({
    'w': {tile:  121}, // silver crown
    'd': {tile: 1152}, // silver crown door
    'g': {tile: 1153}  // silver crown gate
  }))
  .right()
  .wait(1000)
  .left()
  .wait(1000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('gold crowns work', () => {
  const sim = new Simulator(`
    #############
    #p   g     w#
    #ddd###ddd###
    #ddd#Xdddd###
    #ggg#ggggg###
    #############
  `, tiles({
    'w': {tile:    5}, // gold crown
    'd': {tile: 1094}, // gold crown door
    'g': {tile: 1095}  // gold crown gate
  }))
  .right()
  .wait(1000)
  .left()
  .wait(1000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('reset effect works', () => {
  const sim = new Simulator(`
    ###########
    #########w#
    #########c#
    ######### #
    ######### #
    ######### #
    #p PJ Q v #
    #DD########
    #  1X######
    ###########
  `, tiles({
    'P': {tile:  420, prop: {rotation: 1}}, // protection effect
    'J': {tile:  417, prop: {rotation: 1}}, // big jump
    'Q': {tile: 1618, prop: {rotation: 0}}, // clear all effects
    '1': {tile:   43, prop: {rotation: 1}}, // gold coin door 1
    'D': {tile: 1011, prop: {rotation: 1}}, // death door
    'v': {tile:  416}, // lava
    'w': {tile:  119}, // water
    'c': {tile:  100}  // coin
  }))
  .right()
  .jump()
  .wait(4000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('protection effect works against lava', () => {
  const sim = new Simulator(`
    ###############################################
    #pPvv::::::::::::::::::::::::::::::::::::::Qcv#
    #DD############################################
    #  1X##########################################
    ###############################################
  `, tiles({
    'P': {tile:  420, prop: {rotation: 1}}, // protection effect
    'Q': {tile:  420, prop: {rotation: 0}}, // clear protection effect
    '1': {tile:   43, prop: {rotation: 1}}, // gold coin door 1
    'D': {tile: 1011, prop: {rotation: 1}}, // death door
    ':': {tile:  459}, // slow dot
    'v': {tile:  416}, // lava
    'c': {tile:  100}  // coin
  }))
  .right()
  .wait(11000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('run effect works', () => {
  const sim = new Simulator(`
    ##################################################################
    #pk:::::::::::::::::::::::::::R    d  d  d  d  d  d  d  d Xd  d  #
    ##################################################################
  `, tiles({
    'R': {tile: 419, prop: {rotation: 1}}, // run effect
    ':': {tile: 459}, // slow dot
    'k': {tile:   6}, // red key
    'd': {tile:  23}, // red door
  }))
  .right()
  .wait(7000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('fly effect works', () => {
  const sim = new Simulator(`
    #################################
    # #                             #
    # #                             #
    #d#                             #
    #X#                             #
    # #                             #
    #d#                             #
    # #                             #
    # #                             #
    #d#                             #
    # #                             #
    # #                             #
    #d#                             #
    # #                             #
    # #                             #
    #d#                             #
    #F#                             #
    # #                             #
    # ::::::::::::::::::::::::::::kp#
    #################################
  `, tiles({
    'F': {tile: 418, prop: {rotation: 1}}, // fly effect
    ':': {tile: 459}, // slow dot
    'k': {tile:   6}, // red key
    'd': {tile:  23}, // red door
  }))
  .left()
  .wait(1000)
  .jump()
  .wait(6000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('lava burns for 2.4 seconds', () => {
  const sim = new Simulator(`
    #############################################
    #pv:::::::::::: :w c v::::::::::::........w #
    #DD##########################################
    #  1X########################################
    #############################################
  `, tiles({
    '1': {tile:  43, prop: {rotation: 1}}, // gold coin door 1
    'D': {tile: 1011, prop: {rotation: 1}}, // death door
    ':': {tile: 459}, // slow dot
    'v': {tile: 416}, // lava
    'w': {tile: 119}, // water
    'c': {tile: 100}  // coin
  }))
  .right()
  .wait(7000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('jump effect works', () => {
  const sim = new Simulator(`
    #############
    #>>>>>>>>>> #
    #^^^^^^^^^> #
    #^1c2^3^4## #
    #^1 2^3^4## #
    #c1 2^3c4## #
    # 1 2^3 4## #
    # 1 2c3 4## #
    # 1 2 3 4## #
    #p1J2j3z4X#.#
    #############
  `, tiles({
    '1': {tile:  43, prop: {rotation: 1}}, // gold coin door 1
    '2': {tile:  43, prop: {rotation: 2}}, // gold coin door 2
    '3': {tile:  43, prop: {rotation: 3}}, // gold coin door 3
    '4': {tile:  43, prop: {rotation: 4}}, // gold coin door 4
    'J': {tile: 417, prop: {rotation: 1}}, // big jump
    'j': {tile: 417, prop: {rotation: 2}}, // small jump
    'z': {tile: 417, prop: {rotation: 0}}, // normal jump
    'c': {tile: 100},
  }))
  .jump()
  .wait(100)
  .noJump()
  .wait(900)
  .right()
  .wait(200)
  .noDir()
  .wait(500)
  .jump()
  .wait(100)
  .noJump()
  .wait(500)
  .right()
  .wait(170)
  .noDir()
  .wait(500)
  .jump()
  .wait(100)
  .noJump()
  .wait(500)
  .right()
  .wait(500)
  .noDir()
  .jump()
  .wait(100)
  .noJump()
  .wait(500)
  .right()
  .wait(500);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('gold coin doors and gates work', () => {
  const sim = new Simulator(`
    ###########
    #p    G  c#
    #2211111###
    #cHH3322###
    #2###   ###
    #c3     3X#
    #HHHGGGHHH#
    ###########
  `, tiles({
    '1': {tile:  43, prop: {rotation: 1}}, // gold coin door 1
    '2': {tile:  43, prop: {rotation: 2}}, // gold coin door 2
    '3': {tile:  43, prop: {rotation: 2}}, // gold coin door 3
    'G': {tile: 165, prop: {rotation: 1}}, // gold coin gate 1
    'H': {tile: 165, prop: {rotation: 3}}, // gold coin gate 3
    'c': {tile: 100}  // gold coin
  }))
  .right()
  .wait(750)
  .left()
  .wait(1100)
  .right()
  .wait(1000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('blue coin doors and gates work', () => {
  const sim = new Simulator(`
    ###########
    #p    G  c#
    #2211111###
    #cHH3322###
    #2###   ###
    #c3     3X#
    #HHHGGGHHH#
    ###########
  `, tiles({
    '1': {tile: 213, prop: {rotation: 1}}, // blue coin door 1
    '2': {tile: 213, prop: {rotation: 2}}, // blue coin door 2
    '3': {tile: 213, prop: {rotation: 2}}, // blue coin door 3
    'G': {tile: 214, prop: {rotation: 1}}, // blue coin gate 1
    'H': {tile: 214, prop: {rotation: 3}}, // blue coin gate 3
    'c': {tile: 101}  // blue coin
  }))
  .right()
  .wait(750)
  .left()
  .wait(1100)
  .right()
  .wait(1000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('death gates and checkpoints work', () => {
  const sim = new Simulator(`
    #############
    # p  C  D  X#
    ###D###G#####
    #######x#####
    #############
  `, tiles({
    'G': {tile: 1012, prop: {rotation: 1}}, // death gate
    'D': {tile: 1011, prop: {rotation: 1}}, // death door
    'C': {tile:  360}, // checkpoint
    'x': {tile:  361, prop: {rotation: 0}}  // spike
  }))
  .right()
  .wait(3000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('time gates hold player', () => {
  const sim = new Simulator(`
    ####
    #p #
    ## #
    ## #
    ## #
    ##G#
    ## #
    ## #
    ## #
    ## #
    ##X#
    ## #
    ####
  `, tiles({
    'G': {tile: 157} // time gate
  }))
  .wait(4600)
  .right()
  .wait(5660);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('time doors hold player', () => {
  const sim = new Simulator(`
    ####
    #p #
    ## #
    ## #
    ## #
    ##T#
    ## #
    ## #
    ## #
    ## #
    ##X#
    ## #
    ####
  `, tiles({
    'T': {tile: 156} // time door
  }))
  .wait(9600)
  .right()
  .wait(5660);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('time doors and gates work', () => {
  const sim = new Simulator(`
    ###############
    #UUUUUUUUUUUUU#
    #   T   G     #
    # p U T U G X #
    ###############
  `, tiles({
    'U': {tile: 116}, // boost up
    'T': {tile: 156}, // time door
    'G': {tile: 157}  // time gate
  }))
  .right()
  .wait(10300);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('orange switch ids work', () => {
  const sim = new Simulator(`
    #######################
    # p  P  E  P   G  H GX#
    ####HHH####EE#EEE###HH#
    #######################
  `, tiles({
    'P': {tile:  467, prop: {rotation: 1}}, // orange switch
    'Q': {tile: 1620, prop: {rotation: 1}}, // orange reset
    'E': {tile: 1079, prop: {rotation: 1}}, // orange door
    'F': {tile: 1080, prop: {rotation: 1}}, // orange gate
    'G': {tile:  467, prop: {rotation: 2}}, // orange switch 2
    'H': {tile: 1079, prop: {rotation: 2}}  // orange door 2
  }))
  .right()
  .wait(2000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('orange switches work on doors and gates', () => {
  const sim = new Simulator(`
    #######################
    #      >     E QE #   #
    #      ^FFFFFFFF# #   #
    # p F P^F #    P###   #
    #EEE##### #      P F X#
    #######################
  `, tiles({
    'P': {tile:  467, prop: {rotation: 1}}, // orange switch
    'Q': {tile: 1620, prop: {rotation: 1}}, // orange reset
    'E': {tile: 1079, prop: {rotation: 1}}, // orange door
    'F': {tile: 1080, prop: {rotation: 1}}  // orange gate
  }))
  .right()
  .wait(2000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('purple switch ids work', () => {
  const sim = new Simulator(`
    #######################
    # p  P  E  P   G  H GX#
    ####HHH####EE#EEE###HH#
    #######################
  `, tiles({
    'P': {tile:  113, prop: {rotation: 1}}, // purple switch
    'Q': {tile: 1619, prop: {rotation: 1}}, // purple reset
    'E': {tile:  184, prop: {rotation: 1}}, // purple door
    'F': {tile:  185, prop: {rotation: 1}}, // purple gate
    'G': {tile:  113, prop: {rotation: 2}}, // purple switch 2
    'H': {tile:  184, prop: {rotation: 2}}  // purple door 2
  }))
  .right()
  .wait(2000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('purple switches work on doors and gates', () => {
  const sim = new Simulator(`
    #######################
    #      >     E QE #   #
    #      ^FFFFFFFF# #   #
    # p F P^F #    P###   #
    #EEE##### #      P F X#
    #######################
  `, tiles({
    'P': {tile:  113, prop: {rotation: 1}}, // purple switch
    'Q': {tile: 1619, prop: {rotation: 1}}, // purple reset
    'E': {tile:  184, prop: {rotation: 1}}, // purple door
    'F': {tile:  185, prop: {rotation: 1}}  // purple gate
  }))
  .right()
  .wait(2000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('key doors open after 5 seconds', () => {
  const sim = new Simulator(`
    #########
    #pkd d  #
    ####### #
    #  d d L#
    # #######
    #  d d  #
    ####### #
    #  d d L#
    # #######
    #  d d  #
    ####### #
    #  d d L#
    # #######
    #  d d  #
    ####### #
    #  d d L#
    # #######
    #  d d  #
    ####### #
    #  d d L#
    # #######
    #  d d  #
    ####### #
    #  d d L#
    #d#######
    # #     #
    #X#     #
    #d      #
    #########
  `, tiles({
    'L': {tile: 114},  // boost left
    'k': {tile:   6}, // red key
    'd': {tile:  23}, // red door
    'g': {tile:  26}  // red gate
  }))
  .right()
  .wait(6000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});


it('keys and doors work', () => {
  const sim = new Simulator(`
    #########
    #p k d X#
    #########
  `, tiles({
    'k': {tile:  6}, // red key
    'd': {tile: 23}, // red door
    'g': {tile: 26}  // red gate
  }))
  .right()
  .wait(700);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('keys and gates work', () => {
  const sim = new Simulator(`
    #########
    #p k.g  #
    ####X## #
    #########
  `, tiles({
    'k': {tile:  6}, // red key
    'd': {tile: 23}, // red door
    'g': {tile: 26}  // red gate
  }))
  .right()
  .wait(2000)
  .down()
  .wait(500);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('doors stay open if covered', () => {
  const sim = new Simulator(`
    ########
    #    >X#
    #     ##
    #     ##
    #     ##
    #     ##
    #p k d##
    ########
  `, tiles({
    'k': {tile:  6}, // red key
    'd': {tile: 23}, // red door
    'g': {tile: 26}  // red gate
  }))
  .right()
  .wait(290)
  .noDir()
  .wait(6000)
  .left()
  .wait(50)
  .noDir()
  .wait(100)
  .jump()
  .wait(2000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('gates stay open if covered', () => {
  const sim = new Simulator(`
    #######
    #Xpgk #
    #g#####
    #######
  `, tiles({
    'k': {tile:  6}, // red key
    'd': {tile: 23}, // red door
    'g': {tile: 26}  // red gate
  }))
  .right()
  .wait(200)
  .left()
  .wait(1000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('can back out of one ways', () => {
  const sim = new Simulator(`
    ##########
    #X  p  } #
    ##########
  `, tiles())
  .right()
  .wait(250)
  .left()
  .wait(1000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('one ways work', () => {
  const sim = new Simulator(`
    ########
    # p}.{ #
    # ## # #
    # ##X# #
    ########
  `, tiles())
  .right()
  .wait(500)
  .left()
  .wait(500)
  .down()
  .wait(500);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

//
// Physics tests
//
// Adapted from:
// https://github.com/SirJosh3917/smiley-face-game/blob/8dfb247006e60e7ec4e71e59391d355e113c0feb/packages/api/__tests__/physics.ts

it('players can climb onto ledges with dots', () => {
  const sim = new Simulator(`
    ######
    #   X#
    #p .##
    ######
  `, tiles())
  .upRight()
  .wait(1000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('single arrow is not strong', () => {
  const sim = new Simulator(`
    ####
    #  #
    #  #
    #p^#
    ##X#
    ####
  `, tiles())
  .right()
  .wait(560);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('double arrow is not strong', () => {
  const sim = new Simulator(`
    ###
    # #
    # #
    # #
    #p#
    #^#
    #^#
    #X#
    ###
  `, tiles())
  .wait(2000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('players can perform 1x1s', () => {
  const sim = new Simulator(`
    ####
    #  #
    # X#
    # ##
    # p#
    # ##
    # ##
    ####
  `, tiles())
  .left()
  .wait(150) // ee hookjump performable in a one-tick window of 15 ticks
  .jump()
  .wait(50)
  .noJump()
  .right()
  .wait(500);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('players can perform hold space 1x1s', () => {
  const sim = new Simulator(`
    ####
    #  #
    #  #
    # X#
    # ##
    # <#
    # ##
    #p##
    ####
  `, tiles())
  .right()
  .jump()
  .wait(2000)
  .noDir()
  .noJump()
  .wait(500);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('players can perform false hooks', () => {
  const sim = new Simulator(`
    #######
    ###UU##
    #p   X#
    ###DD##
    #######
  `, tiles({
    'U': {tile: 116}, // boost up
    'R': {tile: 115}, // boost right
    'D': {tile: 117}, // boost down
    'L': {tile: 114}  // boost left
  }))
  .right()
  .wait(220)
  .jump()
  .wait(500);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('players can perform arrow hover', () => {
  const sim = new Simulator(`
    ###
    # #
    #^#
    # #
    #.#
    # #
    # #
    # #
    #p#
    ###
  `, tiles())
  .jump()
  .up()
  .wait(1000);
  // we expect the player to be hovering on the arrow
  const y = 2.5 * 16;
  const smallDelta = 0.1;
  expect(sim.player.y).toBeGreaterThanOrEqual(y - smallDelta);
  expect(sim.player.y).toBeLessThanOrEqual(y + smallDelta);
});

it('players drop down the right amount of dots', () => {
  const sim = new Simulator(`
    ###
    #p#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    ###
  `, tiles())
  .wait(10000);
  expect(sim.player.y).toBeCloseTo(128, 4);
});

it('players go right the right amount of spaces on dots', () => {
  const sim = new Simulator(`
    #################
    #p              #
    #...............#
    #################
  `, tiles())
  .right()
  .wait(250)
  .noDir()
  .wait(2000);
  expect(sim.player.x).toBeCloseTo(176, 4);
});

it('players go right the right amount of spaces', () => {
  const sim = new Simulator(`
    ##############
    #p           #
    ##############
  `, tiles())
  .right()
  .wait(250)
  .noDir()
  .wait(2000);
  expect(sim.player.x).toBeCloseTo(71.58909969359451, 4);
});

it('players jump up the right amount of dots', () => {
  const sim = new Simulator(`
    ###
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #.#
    #p#
    ###
  `, tiles())
  .jump()
  .wait(10000);
  expect(sim.player.y).toBeCloseTo(48, 4);
});

it('players go right the right amount of dots', () => {
  const sim = new Simulator(`
    #################
    #p              #
    #...............#
    #################
  `, tiles())
  .right()
  .wait(250)
  .noDir()
  .wait(2000);
  expect(sim.player.x).toBeCloseTo(176, 4);
});

it('players go left the right amount of dots', () => {
  const sim = new Simulator(`
    ###############
    #            p#
    #.............#
    ###############
  `, tiles())
  .left()
  .wait(250)
  .noDir()
  .wait(2000);
  expect(sim.player.x).toBeCloseTo(48, 4);
});

it('players go right the right amount of spaces', () => {
  const sim = new Simulator(`
    #########
    #p      #
    #########
  `, tiles())
  .right()
  .wait(250)
  .noDir()
  .wait(2000);
  expect(sim.player.x).toBeCloseTo(71.58909969359451, 4);
});

it('players go left the right amount of spaces', () => {
  const sim = new Simulator(`
    #########
    #      p#
    #########
  `, tiles())
  .left()
  .wait(250)
  .noDir()
  .wait(2000);
  expect(sim.player.x).toBeCloseTo(56.350995961845303, 4);
});

it('does not modify on 0.2 away from right', () => {
  const pos = Config.blockSize + Config.physics.autoalign_range;
  const sim = new Simulator(`
    ####
    # p#
    ####
  `, tiles())
  .playerX(pos)
  .wait(1000);
  expect(sim.player.x).toEqual(pos);
});

it('does not modify on 0.2 away from left', () => {
  const pos = 2 * Config.blockSize - Config.physics.autoalign_range;
  const sim = new Simulator(`
    ####
    #p #
    ####
  `, tiles())
  .playerX(pos)
  .wait(1000);
  expect(sim.player.x).toEqual(pos);
});

it('slowly drags the player left', () => {
  const pos = 2 * Config.blockSize + Config.physics.autoalign_range - 0.0001;
  const sim = new Simulator(`
    #####
    # p #
    #####
  `, tiles())
  .playerX(pos);
  const inchingSteps = [
    17.866573333333335, 17.742135111111114, 17.625992770370374, 17.517593252345684,
    17.41642036885597, 17.32199234426557, 17.233859521314532, 17.15160221989356,
    17.074828738567323, 17.0031734893295, 16.936295256707535, 16.873875572927034,
    16.815617201398563, 16.761242721305326, 16.710493206551636, 16.663126992781528,
    16.618918526596094, 16.577657291489686, 16.539146805390374, 16.503203685031014,
    16.469656772695615, 16.438346321182575, 16.409123233103738, 16.38184835089682,
    16.356391794170367, 16.332632341225676, 16.31045685181063, 16.28975972835659,
    16.270442413132816, 16.252412918923962, 16.2355853909957, 16.219879698262652,
    16.20522105171181, 16.191539648264357, 16,
  ];
  for (const inch of inchingSteps) {
    sim.wait(10);
    expect(sim.player.x).toBeCloseTo(16 + inch, 4);
  }
  expect(sim.player.x).toEqual(32);
});

it('slowly drags the player right', () => {
  const pos = 2 * Config.blockSize - Config.physics.autoalign_range + 0.001;
  const sim = new Simulator(`
    #####
    # p #
    #####
  `, tiles())
  .playerX(pos);
  const inchingSteps = [
    14.001066666666667, 14.001137777777778, 14.00121362962963, 14.001294538271605,
    14.001380840823044, 14.001472896877914, 14.001571090003107, 14.001675829336648,
    14.001787551292425, 14.001906721378587, 14.00203383613716, 14.002169425212971,
    14.002314053560502, 14.002468323797869, 14.002632878717726, 14.002808403965576,
    14.002995630896613, 14.003195339623055, 14.003408362264592, 14.003635586415564,
    14.003877958843269, 14.00413648943282, 14.004412255395009, 14.004706405754677,
    14.005020166138321, 14.005354843880875, 14.005711833472933, 14.00609262237113,
    14.00649879719587, 14.006932050342263, 14.007394187031746, 14.007887132833863,
    14.008412941689453, 14.00897380446875, 14.0095720581, 14.010210195306666, 14.010890874993777,
    14.011616933326696, 14.012391395548475, 14.01321748858504, 14.01409865449071,
    14.01503856479009, 14.016041135776097, 14.017110544827837, 14.018251247816359,
    14.019467997670782, 14.020765864182168, 14.022150255127647, 14.023626938802824,
    14.025202068056347, 14.02688220592677, 14.028674352988554, 14.030585976521126,
    14.032625041622534, 14.03480004439737, 14.037120047357195, 14.039594717181009,
    14.042234364993076, 14.045049989325948, 14.048053321947679, 14.05125687674419,
    14.05467400186047, 14.058318935317834, 14.062206864339023, 14.066353988628292,
    14.070777587870177, 14.075496093728189, 14.080529166643402, 14.085897777752962,
    14.091624296269826, 14.097732582687815, 14.104248088200336, 14.111197960747026,
    14.118611158130161, 14.126518568672171, 14.134953139916982, 14.143950015911448,
    14.153546683638877, 14.163783129214803, 14.17470200449579, 14.186348804795509,
    14.198772058448544, 14.21202352901178, 14.2261584309459, 14.241235659675626,
    14.257318036987334, 14.27447257278649, 14.292770744305589, 14.312288793925962,
    14.33310804685436, 14.355315249977984, 14.37900293330985, 14.404269795530507,
    14.43122111523254, 14.459969189581377, 14.490633802220136, 14.523342722368145,
    14.558232237192689, 14.595447719672201, 14.635144234317014, 14.677487183271483,
    14.72265299548958, 14.770829861855553, 14.82221851931259, 14.877033087266764,
    14.935501959751214, 14.99786875706796, 15.064393340872492, 15.135352896930659,
    15.21104309005937, 15.291779296063329, 15.377897915800883, 15.469757776854275,
    15.56774162864456, 15.672257737220864, 15.783741586368922, 15.90265769212685, 16,
  ];
  for (const inch of inchingSteps) {
    sim.wait(10);
    expect(sim.player.x).toBeCloseTo(16 + inch, 4);
  }
  expect(sim.player.x).toEqual(32);
});

it('when holding right for 1 tick', () => {
  const sim = new Simulator(`
    ####
    #p #
    ####
  `, tiles());
  const xValues = [
    0, 0.12658920639726146, 0.2230234173493919, 0.30124411111087135, 0.36378974702858446,
    0.41288075149150816, 0.45045744095484347, 0.4782135378534885, 0.49762578434408566,
    0.5099801014275027, 0.5163946901079982, 0.5178404261091154, 0.5151588596396868,
    0.5090780962095434, 0.5002268030219144, 0.489146557564033, 0.47630273027625797,
    0.4620940712456011, 0.44686115142476185, 0.4308937916411734, 0.4144375973825024,
    0.3976997038039767, 0.38085382340231827, 0.3640446781665703, 0.3473918885930436,
    0.33099338360274877, 0.3149283880032941, 0.2992600375853314, 0.2840376661404397,
    0.2692988035478861, 0.25507091952663086, 0.24137294361941553, 0.22821658840850306,
    0.21560749980505203, 0.20354625545958352, 0.19202922986818638, 0,
  ];
  let holdRight = 1;
  for (const xValue of xValues){
    if (holdRight > 0)
      sim.right();
    else
      sim.noDir();
    holdRight--;
    expect(sim.player.x).toBeCloseTo(16 + xValue, 4);
    sim.wait(10);
  }
});

it('when holding right for 2 ticks', () => {
  const sim = new Simulator(`
    ####
    #p #
    ####
  `, tiles());
  const xValues = [
    0, 0.12658920639726146, 0.37740287306511106, 0.5600305779645416, 0.7071341042758241,
    0.8237054431609473, 0.9141089613993861, 0.9821563723145391, 1.031172985919211,
    1.0640562379852063, 1.0833273840887705, 1.0911771438892475, 1.089505991512107,
    1.0799597086420447, 1.0639607466448004, 1.042735881714035, 1.0173405917826,
    0.9886805349477716, 0.9575304657293762, 0.9245508869799283, 0.8903027011394873,
    0.8552600942803263, 0.8198218595789176, 0.784321343095859, 0.7490351736928523,
    0.7141909202632882, 0.6799738029276153, 0.6465325702053516, 0.6139846412084593,
    0.5824206004161442, 0.5519081224206706, 0.5224953950282597, 0.4942141011261773,
    0.4670820126693214, 0.44110524389286526, 0.4162802053294654, 0.39259529531832943,
    0.3700323613664505, 0.34856795989517936, 0.32817443952094233, 0.3088208700267259,
    0.2904738365360707, 0.27309811606398865, 0.25665725155418573, 0.24111403668799522,
    0.22643092313982305, 0.21257036053212922, 0.19949507808828532, 0.18716831587478797, 0,
  ];
  let holdRight = 2;
  for (const xValue of xValues){
    if (holdRight > 0)
      sim.right();
    else
      sim.noDir();
    holdRight--;
    expect(sim.player.x).toBeCloseTo(16 + xValue, 4);
    sim.wait(10);
  }
});

it('when holding right for 3 ticks', () => {
  const sim = new Simulator(`
    ####
    #p #
    ####
  `, tiles());
  const xValues = [
    0, 0.12658920639726146, 0.37740287306511106, 0.7501204284507018, 1.008892211719957,
    1.2157151450243495, 1.3779514102955714, 1.5020342574996706, 1.5935791646916553,
    1.6574820553137026, 1.6980060572245093, 1.7188581191285128, 1.7232566503588145,
    1.7139912172010456, 1.6934752112143414, 1.6637923006126984, 1.626737383209251,
    1.5838526773610553, 1.5364595145970976, 1.4856863331153776, 1.4324933141625908,
    1.3776940526339934, 1.3219746083166297, 1.265910244394401, 1.209980124560046,
    1.1545802088239634, 1.1000345604177155, 1.0466052516572768, 0.9945010348994229,
    0.9438849254763908, 0.8948808264472576, 0.8475793099094074, 0.8020426562482899,
    0.758309240871775, 0.7163973475023925, 0.676308477831958, 0.6380302191413912,
    0.6015387242322991, 0.5668008515983205, 0.5337760080876683, 0.5024177312890241,
    0.4726750444357625, 0.44449361270181165, 0.41781672629722294, 0.39258613271039605,
    0.3687427377404903, 0.34622719257673934, 0.3249803820747434, 0.3049438275210587,
    0.2860600155379424, 0.2682726633345995, 0.25152692923728165, 0.23576957630822196,
    0.22094909587505218, 0.20701579692245442, 0.19392186653254292, 0,
  ];
  let holdRight = 3;
  for (const xValue of xValues){
    if (holdRight > 0)
      sim.right();
    else
      sim.noDir();
    holdRight--;
    expect(sim.player.x).toBeCloseTo(16 + xValue, 4);
    sim.wait(10);
  }
});

it('player can jump up', () => {
  const sim = new Simulator(`
    ####
    #RX#
    #p##
    ####
  `, tiles({
    'U': {tile: 116}, // boost up
    'R': {tile: 115}, // boost right
    'D': {tile: 117}, // boost down
    'L': {tile: 114}, // boost left
  }))
  .jump()
  .wait(1000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('player can jump right', () => {
  const sim = new Simulator(`
    ######
    #<   #
    #< pX#
    #^<<##
    ######
  `, tiles())
  .jump()
  .wait(800)
  .noJump()
  .wait(200);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('boosts propel the player the right amount of blocks in half slabs', () => {
  const sim = new Simulator(`
    ################
    #p             #
    #> ]#          #
    ##[]#          #
    ## R         X #
    ################
  `, tiles({
    'U': {tile: 116}, // boost up
    'R': {tile: 115}, // boost right
    'D': {tile: 117}, // boost down
    'L': {tile: 114}, // boost left
  }))
  .wait(1000);
  expect(sim.player.x).toBeCloseTo(208.80422973297345, 4);
});

it('boosts propel the player the right amount of blocks', () => {
  const sim = new Simulator(`
    ################
    #p             #
    #> #           #
    ## #           #
    # R            #
    ################
  `, tiles({
    'U': {tile: 116}, // boost up
    'R': {tile: 115}, // boost right
    'D': {tile: 117}, // boost down
    'L': {tile: 114}, // boost left
  }))
  .wait(1500);
  expect(sim.player.x).toBeCloseTo(201.62408749771458, 4);
});

it('afk minigame rotates player around', () => {
  const sim = new Simulator('>Xp\n>#<\n^^<', tiles()).wait(3050);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

it('can\'t jump off ceiling in water', () => {
  const sim = new Simulator(`
    ####
    #wX#
    # ##
    #p #
    ####
  `, tiles({
    'w': {tile:  119}, // water
  }))
  .jump()
  .wait(50)
  .noJump()
  .wait(500)
  .jump()
  .wait(50)
  .noJump()
  .right()
  .wait(1000);
  expect(sim.player.worldPosition).toEqual(sim.goal);
});

} // loadTests
