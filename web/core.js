//
// ItemLayer
//

class ItemLayer {
  static FOREGROUND = 0;
  static BACKGROUND = 1;
  static DECORATION = 2;
  static ABOVE      = 3;
}

//
// ItemId
//

class ItemId {
  static EMPTY                                   = 0;
  static GRAVITY_LEFT                            = 1;
  static GRAVITY_UP                              = 2;
  static GRAVITY_RIGHT                           = 3;
  static DOT                                     = 4;
  static CROWN                                   = 5;
  static KEY_RED                                 = 6;
  static KEY_GREEN                               = 7;
  static KEY_BLUE                                = 8;

  static COINDOOR                                = 43;
  static ONEWAY_CANDY_PINK                       = 61;
  static ONEWAY_CANDY_RED                        = 62;
  static ONEWAY_CANDY_CYAN                       = 63;
  static ONEWAY_CANDY_GREEN                      = 64;
  static PIANO                                   = 77;
  static DRUMS                                   = 83;
  static ONEWAY_SCIFI_RED                        = 89;
  static ONEWAY_SCIFI_BLUE                       = 90;
  static ONEWAY_SCIFI_GREEN                      = 91;
  static ONEWAY_DOJO_WHITE                       = 96;
  static ONEWAY_DOJO_GRAY                        = 97;
  static VINE_V                                  = 98;
  static VINE_H                                  = 99;

  static COIN_GOLD                               = 100;
  static COIN_BLUE                               = 101;
  static COLLECTEDCOIN                           = 110;
  static COLLECTEDBLUECOIN                       = 111;
  static SWITCH_PURPLE                           = 113;
  static SPEED_LEFT                              = 114;
  static SPEED_RIGHT                             = 115;
  static SPEED_UP                                = 116;
  static SPEED_DOWN                              = 117;
  static CHAIN                                   = 118;
  static WATER                                   = 119;
  static NINJA_LADDER                            = 120;
  static BRICK_COMPLETE                          = 121;
  static ONEWAY_WILDWEST_BROWN                   = 122;
  static ONEWAY_WILDWEST_RED                     = 123;
  static ONEWAY_WILDWEST_BLUE                    = 124;
  static ONEWAY_WILDWEST_DARK_BROWN              = 125;
  static ONEWAY_WILDWEST_DARK_RED                = 126;
  static ONEWAY_WILDWEST_DARK_BLUE               = 127;
  static ONEWAY_INDUSTRIAL                       = 146;
  static ONEWAY_PIRATE                           = 154;
  static TIMEDOOR                                = 156;
  static TIMEGATE                                = 157;
  static ONEWAY_MEDIEVAL                         = 158;
  static COINGATE                                = 165;
  static SMILEY_PLATINUM_SPENDER                 = 175;
  static DOOR_PURPLE                             = 184;
  static GATE_PURPLE                             = 185;
  static ONEWAY_JUNGLE                           = 194;

  static DOOR_GOLD                               = 200;
  static GATE_GOLD                               = 201;
  static ZOMBIE_GATE                             = 206;
  static ZOMBIE_DOOR                             = 207;
  static ONEWAY_MARBLE                           = 211;
  static BLUECOINDOOR                            = 213;
  static BLUECOINGATE                            = 214;
  static ONEWAY_XMAS2014                         = 216;
  static DIAMOND                                 = 241;
  static PORTAL                                  = 242;
  static SPAWNPOINT                              = 255;
  static MEDIEVAL_SHIELD                         = 273;
  static MEDIEVAL_AXE                            = 275;
  static DOJO_LIGHT_LEFT                         = 276;
  static DOJO_LIGHT_RIGHT                        = 277;
  static DOJO_DARK_LEFT                          = 279;
  static DOJO_DARK_RIGHT                         = 280;

  static WAVE                                    = 300;
  static MEDIEVAL_BANNER                         = 327;
  static MEDIEVAL_COATOFARMS                     = 328;
  static MEDIEVAL_SWORD                          = 329;
  static CAKE                                    = 337;
  static TOOTH_BIG                               = 338;
  static TOOTH_SMALL                             = 339;
  static TOOTH_TRIPLE                            = 340;
  static CHECKPOINT                              = 360;
  static SPIKE                                   = 361;
  static FIRE                                    = 368;
  static MUD                                     = 369;
  static MUD_BUBBLE                              = 370;
  static WORLD_PORTAL                            = 374;
  static GLOWY_LINE_BLUE_SLOPE                   = 375;
  static GLOWY_LINE_BLUE_STRAIGHT                = 376;
  static GLOWY_LINE_YELLOW_SLOPE                 = 377;
  static GLOWY_LINE_YELLOW_STRAIGHT              = 378;
  static GLOWY_LINE_GREEN_SLOPE                  = 379;
  static GLOWY_LINE_GREEN_STRAIGHT               = 380;
  static PORTAL_INVISIBLE                        = 381;
  static TEXT_SIGN                               = 385;
  static HOLOGRAM                                = 397;

  static KEY_CYAN                                = 408;
  static KEY_MAGENTA                             = 409;
  static KEY_YELLOW                              = 410;
  static GRAVITY_LEFT_INVISIBLE                  = 411;
  static GRAVITY_UP_INVISIBLE                    = 412;
  static GRAVITY_RIGHT_INVISIBLE                 = 413;
  static DOT_INVISIBLE                           = 414;
  static LAVA_SURFACE                            = 415;
  static LAVA                                    = 416;
  static EFFECT_JUMP                             = 417;
  static EFFECT_FLY                              = 418;
  static EFFECT_RUN                              = 419;
  static EFFECT_PROTECTION                       = 420;
  static EFFECT_CURSE                            = 421;
  static EFFECT_ZOMBIE                           = 422;
  static EFFECT_TEAM                             = 423;
  static ROPE                                    = 424;
  static GLOWY_LINE_RED_SLOPE                    = 438;
  static GLOWY_LINE_RED_STRAIGHT                 = 439;
  static MEDIEVAL_TIMBER                         = 440;
  static DOMESTIC_LIGHT_BULB                     = 447;
  static DOMESTIC_TAP                            = 448;
  static DOMESTIC_PAINTING                       = 449;
  static DOMESTIC_VASE                           = 450;
  static DOMESTIC_TV                             = 451;
  static DOMESTIC_WINDOW                         = 452;
  static EFFECT_LOW_GRAVITY                      = 453;
  static HALLOWEEN_2015_WINDOW_RECT              = 456;
  static HALLOWEEN_2015_WINDOW_CIRCLE            = 457;
  static HALLOWEEN_2015_LAMP                     = 458;
  static SLOW_DOT                                = 459;
  static SLOW_DOT_INVISIBLE                      = 460;
  static EFFECT_MULTIJUMP                        = 461;
  static NEW_YEAR_2015_BALLOON                   = 464;
  static NEW_YEAR_2015_STREAMER                  = 465;
  static RESET_POINT                             = 466;
  static SWITCH_ORANGE                           = 467;
  static FAIRYTALE_FLOWERS                       = 471;
  static FAIRYTALE_LADDER                        = 472;
  static SPRING_DAISY                            = 475;
  static SPRING_TULIP                            = 476;
  static SPRING_DAFFODIL                         = 477;
  static SUMMER_FLAG                             = 481;
  static SUMMER_AWNING                           = 482;
  static SUMMER_ICECREAM                         = 483;
  static RESTAURANT_CUP                          = 492;
  static RESTAURANT_PLATE                        = 493;
  static RESTAURANT_BOWL                         = 494;
  static CAVE_CRYSTAL                            = 497;
  static CAVE_TORCH                              = 498;
  static HALLOWEEN_2016_ROTATABLE                = 499;

  static WATER_BG                                = 574;
  static WATER_BG_OCTOPUS                        = 575;
  static WATER_BG_FISH                           = 576;
  static WATER_BG_SEAHORSE                       = 577;
  static WATER_BG_SEAWEED                        = 578;

  static TOXIC_WASTE_BG                          = 765;
  static GREY_DUNGEON_BG                         = 769;
  static GREEN_DUNGEON_BG                        = 770;
  static BLUE_DUNGEON_BG                         = 771;
  static PURPLE_DUNGEON_BG                       = 772;

  static LABEL                                   = 1000;
  static ONEWAY_CYAN                             = 1001;
  static ONEWAY_ORANGE                           = 1002;
  static ONEWAY_YELLOW                           = 1003;
  static ONEWAY_PINK                             = 1004;
  static DEATH_DOOR                              = 1011;
  static DEATH_GATE                              = 1012;
  static TEAM_DOOR                               = 1027;
  static TEAM_GATE                               = 1028;
  static HALFBLOCK_DOMESTIC_YELLOW               = 1041;
  static HALFBLOCK_DOMESTIC_BROWN                = 1042;
  static HALFBLOCK_DOMESTIC_WHITE                = 1043;
  static ONEWAY_HALLOWEEN2015                    = 1050;
  static ONEWAY_SCIFI_YELLOW                     = 1051;
  static ONEWAY_GRAY                             = 1052;
  static ONEWAY_BLUE                             = 1053;
  static ONEWAY_RED                              = 1054;
  static ONEWAY_GREEN                            = 1055;
  static ONEWAY_BLACK                            = 1056;
  static ICE                                     = 1064;
  static ONEWAY_GOLD                             = 1069;
  static HALFBLOCK_FAIRYTALE_ORANGE              = 1075;
  static HALFBLOCK_FAIRYTALE_GREEN               = 1076;
  static HALFBLOCK_FAIRYTALE_BLUE                = 1077;
  static HALFBLOCK_FAIRYTALE_PINK                = 1078;
  static DOOR_ORANGE                             = 1079;
  static GATE_ORANGE                             = 1080;
  static ONEWAY_SUMMER2016                       = 1087;
  static ONEWAY_WHITE                            = 1092;
  static CROWNDOOR                               = 1094;
  static CROWNGATE                               = 1095;

  static HALFBLOCK_CHRISTMAS_2016_PRESENT_RED    = 1101;
  static HALFBLOCK_CHRISTMAS_2016_PRESENT_GREEN  = 1102;
  static HALFBLOCK_CHRISTMAS_2016_PRESENT_WHITE  = 1103;
  static HALFBLOCK_CHRISTMAS_2016_PRESENT_BLUE   = 1104;
  static HALFBLOCK_CHRISTMAS_2016_PRESENT_YELLOW = 1105;
  static HALFBLOCK_WHITE                         = 1116;
  static HALFBLOCK_GRAY                          = 1117;
  static HALFBLOCK_BLACK                         = 1118;
  static HALFBLOCK_RED                           = 1119;
  static HALFBLOCK_ORANGE                        = 1120;
  static HALFBLOCK_YELLOW                        = 1121;
  static HALFBLOCK_GREEN                         = 1122;
  static HALFBLOCK_CYAN                          = 1123;
  static HALFBLOCK_BLUE                          = 1124;
  static HALFBLOCK_PURPLE                        = 1125;
  static INDUSTRIAL_PIPE_THICK                   = 1135;
  static INDUSTRIAL_TABLE                        = 1134;
  static HALFBLOCK_WINTER2018_SNOW               = 1140;
  static HALFBLOCK_WINTER2018_GLACIER            = 1141;
  static GARDEN_LATTICE_VINES                    = 1146;
  static ONEWAY_GARDEN_FLOWER                    = 1147;
  static ONEWAY_GARDEN_LEAF_L                    = 1148;
  static ONEWAY_GARDEN_LEAF_R                    = 1149;
  static SILVERCROWNDOOR                         = 1152;
  static SILVERCROWNGATE                         = 1153;
  static ONEWAY_TOXIC                            = 1155;
  static GREY_DUNGEON_BRICK                      = 1156;
  static GREEN_DUNGEON_BRICK                     = 1157;
  static BLUE_DUNGEON_BRICK                      = 1158;
  static PURPLE_DUNGEON_BRICK                    = 1159;
  static ONEWAY_DUNGEON                          = 1160;
  static ONEWAY_SCIFI_MAGENTA                    = 1164;
  static ONEWAY_SCIFI_CYAN                       = 1165;

  static HALLOWEEN_2016_PUMPKIN                  = 1500;
  static HALLOWEEN_2016_EYES                     = 1502;
  static CHRISTMAS_2016_LIGHTS_UP                = 1506;
  static CHRISTMAS_2016_LIGHTS_DOWN              = 1507;
  static CHRISTMAS_2016_CANDLE                   = 1510;
  static GOD_BLOCK                               = 1516;
  static EFFECT_GRAVITY                          = 1517;
  static GRAVITY_DOWN                            = 1518;
  static GRAVITY_DOWN_INVISIBLE                  = 1519;
  static GUITAR                                  = 1520;
  static METAL_LADDER                            = 1534;
  static INDUSTRIAL_PIPE_THIN                    = 1535;
  static DOMESTIC_PIPE_STRAIGHT                  = 1536;
  static DOMESTIC_PIPE_T                         = 1537;
  static DOMESTIC_FRAME_BORDER                   = 1538;
  static NPC_SMILE                               = 1550;
  static NPC_SAD                                 = 1551;
  static NPC_OLD                                 = 1552;
  static NPC_ANGRY                               = 1553;
  static NPC_SLIME                               = 1554;
  static NPC_ROBOT                               = 1555;
  static NPC_KNIGHT                              = 1556;
  static NPC_MEH                                 = 1557;
  static NPC_COW                                 = 1558;
  static NPC_FROG                                = 1559;
  static GARDEN_STALK                            = 1563;
  static NPC_STARFISH                            = 1569;
  static NPC_BRUCE                               = 1570;
  static NPC_DT                                  = 1571;
  static NPC_SKELETON                            = 1572;
  static NPC_ZOMBIE                              = 1573;
  static NPC_GHOST                               = 1574;
  static NPC_ASTRONAUT                           = 1575;
  static NPC_SANTA                               = 1576;
  static NPC_SNOWMAN                             = 1577;
  static NPC_WALRUS                              = 1578;
  static NPC_CRAB                                = 1579;
  static SPIKE_CENTER                            = 1580;
  static FIREWORKS                               = 1581;
  static WORLD_PORTAL_SPAWN                      = 1582;
  static MAP_BLOCK                               = 1583;
  static EFFECT_POISON                           = 1584;
  static TOXIC_WASTE                             = 1585;
  static TOXIC_WASTE_SURFACE                     = 1586;
  static TOXIC_WASTE_BARREL                      = 1587;
  static SEWER_PIPE                              = 1588;
  static RUSTED_LADDER                           = 1589;
  static GUARD_RAIL                              = 1590;
  static GOLDEN_EASTER_EGG                       = 1591;
  static DUNGEON_PILLAR_BOTTOM                   = 1592;
  static DUNGEON_PILLAR_MIDDLE                   = 1593;
  static DUNGEON_ARCH_LEFT                       = 1594;
  static DUNGEON_ARCH_RIGHT                      = 1595;
  static SHADOW_A                                = 1596;
  static DUNGEON_TORCH                           = 1597;
  static DUNGEON_BARS                            = 1598;
  static DUNGEON_RING                            = 1599;

  static DUNGEON_HOOK                            = 1600;
  static DUNGEON_LOCK                            = 1601;
  static DUNGEON_CHAIN                           = 1602;
  static GREEN_SPACE                             = 1603;
  static GOLD_SACK                               = 1604;
  static SHADOW_B                                = 1605;
  static SHADOW_C                                = 1606;
  static SHADOW_D                                = 1607;
  static SHADOW_E                                = 1608;
  static SHADOW_F                                = 1609;
  static SHADOW_G                                = 1610;
  static SHADOW_H                                = 1611;
  static SHADOW_I                                = 1612;
  static SHADOW_J                                = 1613;
  static SHADOW_K                                = 1614;
  static SHADOW_L                                = 1615;
  static SHADOW_M                                = 1616;
  static SHADOW_N                                = 1617;
  static EFFECT_RESET                            = 1618;
  static RESET_PURPLE                            = 1619;
  static RESET_ORANGE                            = 1620;
  static SPIKE_SILVER                            = 1625;
  static SPIKE_SILVER_CENTER                     = 1626;
  static SPIKE_BLACK                             = 1627;
  static SPIKE_BLACK_CENTER                      = 1628;
  static SPIKE_RED                               = 1629;
  static SPIKE_RED_CENTER                        = 1630;
  static SPIKE_GOLD                              = 1631;
  static SPIKE_GOLD_CENTER                       = 1632;
  static SPIKE_GREEN                             = 1633;
  static SPIKE_GREEN_CENTER                      = 1634;
  static SPIKE_BLUE                              = 1635;
  static SPIKE_BLUE_CENTER                       = 1636;

  static NpcArray = [
    ItemId.NPC_SMILE,
    ItemId.NPC_SAD,
    ItemId.NPC_OLD,
    ItemId.NPC_ANGRY,
    ItemId.NPC_SLIME,
    ItemId.NPC_ROBOT,
    ItemId.NPC_KNIGHT,
    ItemId.NPC_MEH,
    ItemId.NPC_COW,
    ItemId.NPC_FROG,
    ItemId.NPC_BRUCE,
    ItemId.NPC_STARFISH,
    ItemId.NPC_DT,
    ItemId.NPC_SKELETON,
    ItemId.NPC_ZOMBIE,
    ItemId.NPC_GHOST,
    ItemId.NPC_ASTRONAUT,
    ItemId.NPC_SANTA,
    ItemId.NPC_SNOWMAN,
    ItemId.NPC_WALRUS,
    ItemId.NPC_CRAB
  ];

  static isSolid(id){
    return !ItemId.isClimbable(id) && (
        (
          (9 <= id && id <= 97) ||
          (122 <= id && id <= 217) ||
          (id >= 1001 && id <= 1499)
        ) &&
        id !== ItemId.DRUMS && id !== ItemId.PIANO
      );
  }

  static isClimbable(id){
    switch (id){
      case ItemId.NINJA_LADDER:
      case ItemId.CHAIN:
      case ItemId.VINE_V:
      case ItemId.VINE_H:
      case ItemId.ROPE:
      case ItemId.SLOW_DOT:
      case ItemId.SLOW_DOT_INVISIBLE:
      case ItemId.FAIRYTALE_LADDER:
      case ItemId.METAL_LADDER:
      case ItemId.GARDEN_LATTICE_VINES:
      case ItemId.GARDEN_STALK:
      case ItemId.DUNGEON_CHAIN:
        return true;
    }
    return false;
  }

  static isBlockNumbered(id){
    switch (id){
      case ItemId.COINDOOR:
      case ItemId.BLUECOINDOOR:
      case ItemId.COINGATE:
      case ItemId.BLUECOINGATE:
      case ItemId.SWITCH_PURPLE:
      case ItemId.SWITCH_ORANGE:
      case ItemId.DOOR_PURPLE:
      case ItemId.GATE_PURPLE:
      case ItemId.RESET_PURPLE:
      case ItemId.DOOR_ORANGE:
      case ItemId.GATE_ORANGE:
      case ItemId.RESET_ORANGE:
      case ItemId.DEATH_DOOR:
      case ItemId.DEATH_GATE:
      case ItemId.TEAM_DOOR:
      case ItemId.TEAM_GATE:
      case ItemId.EFFECT_TEAM:
      case ItemId.EFFECT_CURSE:
      case ItemId.EFFECT_FLY:
      case ItemId.EFFECT_GRAVITY:
      case ItemId.EFFECT_JUMP:
      case ItemId.EFFECT_LOW_GRAVITY:
      case ItemId.EFFECT_MULTIJUMP:
      case ItemId.EFFECT_POISON:
      case ItemId.EFFECT_PROTECTION:
      case ItemId.EFFECT_RUN:
      case ItemId.EFFECT_ZOMBIE:
      case ItemId.WORLD_PORTAL_SPAWN:
        return true;
    }
    return false;
  }

  static isBlockRotateable(id){
    switch (id){
      case ItemId.GLOWY_LINE_BLUE_STRAIGHT:
      case ItemId.GLOWY_LINE_BLUE_SLOPE:
      case ItemId.GLOWY_LINE_GREEN_SLOPE:
      case ItemId.GLOWY_LINE_GREEN_STRAIGHT:
      case ItemId.GLOWY_LINE_YELLOW_SLOPE:
      case ItemId.GLOWY_LINE_YELLOW_STRAIGHT:
      case ItemId.GLOWY_LINE_RED_SLOPE:
      case ItemId.GLOWY_LINE_RED_STRAIGHT:
      case ItemId.ONEWAY_CYAN:
      case ItemId.ONEWAY_ORANGE:
      case ItemId.ONEWAY_YELLOW:
      case ItemId.ONEWAY_PINK:
      case ItemId.ONEWAY_GRAY:
      case ItemId.ONEWAY_BLUE:
      case ItemId.ONEWAY_RED:
      case ItemId.ONEWAY_GREEN:
      case ItemId.ONEWAY_BLACK:
      case ItemId.ONEWAY_WHITE:
      case ItemId.MEDIEVAL_AXE:
      case ItemId.MEDIEVAL_BANNER:
      case ItemId.MEDIEVAL_COATOFARMS:
      case ItemId.MEDIEVAL_SHIELD:
      case ItemId.MEDIEVAL_SWORD:
      case ItemId.MEDIEVAL_TIMBER:
      case ItemId.TOOTH_BIG:
      case ItemId.TOOTH_SMALL:
      case ItemId.TOOTH_TRIPLE:
      case ItemId.DOJO_LIGHT_LEFT:
      case ItemId.DOJO_LIGHT_RIGHT:
      case ItemId.DOJO_DARK_LEFT:
      case ItemId.DOJO_DARK_RIGHT:
      case ItemId.DOMESTIC_LIGHT_BULB:
      case ItemId.DOMESTIC_TAP:
      case ItemId.DOMESTIC_PAINTING:
      case ItemId.DOMESTIC_VASE:
      case ItemId.DOMESTIC_TV:
      case ItemId.DOMESTIC_WINDOW:
      case ItemId.HALFBLOCK_DOMESTIC_BROWN:
      case ItemId.HALFBLOCK_DOMESTIC_WHITE:
      case ItemId.HALFBLOCK_DOMESTIC_YELLOW:
      case ItemId.HALLOWEEN_2015_WINDOW_RECT:
      case ItemId.HALLOWEEN_2015_WINDOW_CIRCLE:
      case ItemId.HALLOWEEN_2015_LAMP:
      case ItemId.NEW_YEAR_2015_BALLOON:
      case ItemId.NEW_YEAR_2015_STREAMER:
      case ItemId.HALFBLOCK_FAIRYTALE_ORANGE:
      case ItemId.HALFBLOCK_FAIRYTALE_GREEN:
      case ItemId.HALFBLOCK_FAIRYTALE_BLUE:
      case ItemId.HALFBLOCK_FAIRYTALE_PINK:
      case ItemId.FAIRYTALE_FLOWERS:
      case ItemId.SPRING_DAFFODIL:
      case ItemId.SPRING_DAISY:
      case ItemId.SPRING_TULIP:
      case ItemId.SUMMER_FLAG:
      case ItemId.SUMMER_AWNING:
      case ItemId.SUMMER_ICECREAM:
      case ItemId.CAVE_CRYSTAL:
      case ItemId.RESTAURANT_CUP:
      case ItemId.RESTAURANT_PLATE:
      case ItemId.RESTAURANT_BOWL:
      case ItemId.HALLOWEEN_2016_ROTATABLE:
      case ItemId.HALLOWEEN_2016_EYES:
      case ItemId.HALLOWEEN_2016_PUMPKIN:
      case ItemId.CHRISTMAS_2016_LIGHTS_DOWN:
      case ItemId.CHRISTMAS_2016_LIGHTS_UP:
      case ItemId.HALFBLOCK_WHITE:
      case ItemId.HALFBLOCK_GRAY:
      case ItemId.HALFBLOCK_BLACK:
      case ItemId.HALFBLOCK_RED:
      case ItemId.HALFBLOCK_ORANGE:
      case ItemId.HALFBLOCK_YELLOW:
      case ItemId.HALFBLOCK_GREEN:
      case ItemId.HALFBLOCK_CYAN:
      case ItemId.HALFBLOCK_BLUE:
      case ItemId.HALFBLOCK_PURPLE:
      case ItemId.INDUSTRIAL_PIPE_THIN:
      case ItemId.INDUSTRIAL_PIPE_THICK:
      case ItemId.INDUSTRIAL_TABLE:
      case ItemId.DOMESTIC_PIPE_STRAIGHT:
      case ItemId.DOMESTIC_PIPE_T:
      case ItemId.DOMESTIC_FRAME_BORDER:
      case ItemId.HALFBLOCK_WINTER2018_SNOW:
      case ItemId.HALFBLOCK_WINTER2018_GLACIER:
      case ItemId.FIREWORKS:
      case ItemId.TOXIC_WASTE_BARREL:
      case ItemId.SEWER_PIPE:
      case ItemId.ONEWAY_TOXIC:
      case ItemId.DUNGEON_PILLAR_BOTTOM:
      case ItemId.DUNGEON_PILLAR_MIDDLE:
      case ItemId.ONEWAY_DUNGEON:
      case ItemId.DUNGEON_ARCH_LEFT:
      case ItemId.DUNGEON_ARCH_RIGHT:
      case ItemId.SHADOW_A:
      case ItemId.SHADOW_B:
      case ItemId.SHADOW_C:
      case ItemId.SHADOW_D:
      case ItemId.SHADOW_F:
      case ItemId.SHADOW_G:
      case ItemId.SHADOW_H:
      case ItemId.SHADOW_I:
      case ItemId.SHADOW_K:
      case ItemId.SHADOW_L:
      case ItemId.SHADOW_M:
      case ItemId.SHADOW_N:
      case ItemId.DUNGEON_TORCH:
        return true;
    }
    return false;
  }

  static isNonRotatableHalfBlock(id){
    switch (id){
      case ItemId.HALFBLOCK_CHRISTMAS_2016_PRESENT_RED:
      case ItemId.HALFBLOCK_CHRISTMAS_2016_PRESENT_GREEN:
      case ItemId.HALFBLOCK_CHRISTMAS_2016_PRESENT_WHITE:
      case ItemId.HALFBLOCK_CHRISTMAS_2016_PRESENT_BLUE:
      case ItemId.HALFBLOCK_CHRISTMAS_2016_PRESENT_YELLOW:
        return true;
    }
    return false;
  }

  static canJumpThroughFromBelow(id){
    switch (id){
      case ItemId.ONEWAY_CANDY_PINK:
      case ItemId.ONEWAY_CANDY_RED:
      case ItemId.ONEWAY_CANDY_CYAN:
      case ItemId.ONEWAY_CANDY_GREEN:
      case ItemId.ONEWAY_SCIFI_RED:
      case ItemId.ONEWAY_SCIFI_BLUE:
      case ItemId.ONEWAY_SCIFI_GREEN:
      case ItemId.ONEWAY_DOJO_WHITE:
      case ItemId.ONEWAY_DOJO_GRAY:
      case ItemId.ONEWAY_WILDWEST_BROWN:
      case ItemId.ONEWAY_WILDWEST_RED:
      case ItemId.ONEWAY_WILDWEST_BLUE:
      case ItemId.ONEWAY_WILDWEST_DARK_BROWN:
      case ItemId.ONEWAY_WILDWEST_DARK_RED:
      case ItemId.ONEWAY_WILDWEST_DARK_BLUE:
      case ItemId.ONEWAY_INDUSTRIAL:
      case ItemId.ONEWAY_PIRATE:
      case ItemId.ONEWAY_MEDIEVAL:
      case ItemId.ONEWAY_JUNGLE:
      case ItemId.ONEWAY_MARBLE:
      case ItemId.ONEWAY_XMAS2014:
      case ItemId.ONEWAY_GOLD:
      case ItemId.ONEWAY_SUMMER2016:
      case ItemId.ONEWAY_CYAN:
      case ItemId.ONEWAY_ORANGE:
      case ItemId.ONEWAY_YELLOW:
      case ItemId.ONEWAY_PINK:
      case ItemId.ONEWAY_GRAY:
      case ItemId.ONEWAY_BLUE:
      case ItemId.ONEWAY_RED:
      case ItemId.ONEWAY_GREEN:
      case ItemId.ONEWAY_BLACK:
      case ItemId.ONEWAY_WHITE:
      case ItemId.ONEWAY_HALLOWEEN2015:
      case ItemId.ONEWAY_SCIFI_YELLOW:
      case ItemId.ONEWAY_SCIFI_MAGENTA:
      case ItemId.ONEWAY_SCIFI_CYAN:
      case ItemId.ONEWAY_GARDEN_FLOWER:
      case ItemId.ONEWAY_GARDEN_LEAF_L:
      case ItemId.ONEWAY_GARDEN_LEAF_R:
      case ItemId.ONEWAY_TOXIC:
      case ItemId.ONEWAY_DUNGEON:
        return true;
    }
    return false;
  }

  static isBoost(id){
    switch (id){
      case ItemId.SPEED_LEFT:
      case ItemId.SPEED_RIGHT:
      case ItemId.SPEED_UP:
      case ItemId.SPEED_DOWN:
        return true;
    }
    return false;
  }

  static isHalfBlock(id){
    switch (id){
      case ItemId.HALFBLOCK_DOMESTIC_YELLOW:
      case ItemId.HALFBLOCK_DOMESTIC_BROWN:
      case ItemId.HALFBLOCK_DOMESTIC_WHITE:
      case ItemId.HALFBLOCK_FAIRYTALE_ORANGE:
      case ItemId.HALFBLOCK_FAIRYTALE_GREEN:
      case ItemId.HALFBLOCK_FAIRYTALE_BLUE:
      case ItemId.HALFBLOCK_FAIRYTALE_PINK:
      case ItemId.HALFBLOCK_CHRISTMAS_2016_PRESENT_RED:
      case ItemId.HALFBLOCK_CHRISTMAS_2016_PRESENT_GREEN:
      case ItemId.HALFBLOCK_CHRISTMAS_2016_PRESENT_WHITE:
      case ItemId.HALFBLOCK_CHRISTMAS_2016_PRESENT_BLUE:
      case ItemId.HALFBLOCK_CHRISTMAS_2016_PRESENT_YELLOW:
      case ItemId.HALFBLOCK_WHITE:
      case ItemId.HALFBLOCK_GRAY:
      case ItemId.HALFBLOCK_BLACK:
      case ItemId.HALFBLOCK_RED:
      case ItemId.HALFBLOCK_ORANGE:
      case ItemId.HALFBLOCK_YELLOW:
      case ItemId.HALFBLOCK_GREEN:
      case ItemId.HALFBLOCK_CYAN:
      case ItemId.HALFBLOCK_BLUE:
      case ItemId.HALFBLOCK_PURPLE:
      case ItemId.HALFBLOCK_WINTER2018_SNOW:
      case ItemId.HALFBLOCK_WINTER2018_GLACIER:
        return true;
    }
    return false
  }

  static isRotatableHalfBlock(id){
    switch(id) {
      case ItemId.ONEWAY_CYAN:
      case ItemId.ONEWAY_ORANGE:
      case ItemId.ONEWAY_YELLOW:
      case ItemId.ONEWAY_PINK:
      case ItemId.ONEWAY_GRAY:
      case ItemId.ONEWAY_BLUE:
      case ItemId.ONEWAY_RED:
      case ItemId.ONEWAY_GREEN:
      case ItemId.ONEWAY_BLACK:
      case ItemId.ONEWAY_WHITE:
      case ItemId.ONEWAY_TOXIC:
        return true;
    }
    return false;
  }

  static isNPC(id){
    return ItemId.NpcArray.indexOf(id) >= 0;
  }

  static isSlippery(id){
    return id === ItemId.ICE;
  }

  static isLiquid(id){
    switch (id){
      case ItemId.LAVA:
      case ItemId.MUD:
      case ItemId.WATER:
      case ItemId.TOXIC_WASTE:
        return true;
    }
    return false;
  }
}

//
// FlashByteArray
//
// https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/utils/ByteArray.html

class FlashByteArray {
  data;
  view;
  position = 0;

  constructor(data){
    this.data = data;
    this.view = new DataView(data.buffer);
  }

  get length(){
    return this.data.length;
  }

  toString(){
    return new TextDecoder().decode(this.data);
  }

  readUTF(){
    return this.readUTFBytes(this.readShort());
  }

  readUTFBytes(size){
    const result = new TextDecoder().decode(this.data.slice(this.position, this.position + size));
    this.position += size;
    return result;
  }

  readShort(){
    const result = this.view.getInt16(this.position, false);
    this.position += 2;
    return result;
  }

  readUnsignedShort(){
    const result = this.view.getUint16(this.position, false);
    this.position += 2;
    return result;
  }

  readUnsignedShortLE(){
    const result = this.view.getUint16(this.position, true);
    this.position += 2;
    return result;
  }

  readUnsignedShortArray(){
    const result = [];
    const size = this.readUnsignedInt() / 2;
    for (let i = 0; i < size; i++)
      result.push(this.readUnsignedShort());
    return result;
  }

  readInt(){
    const result = this.view.getInt32(this.position, false);
    this.position += 4;
    return result;
  }

  readUnsignedInt(){
    const result = this.view.getUint32(this.position, false);
    this.position += 4;
    return result;
  }

  readBoolean(){
    const result = this.data[this.position++];
    return result !== 0;
  }

  readFloat(){
    const result = this.view.getFloat32(this.position, false);
    this.position += 4;
    return result;
  }

  inflate(){
    const inf = new pako.Inflate({raw: true});
    inf.push(this.data, true);
    if (inf.err)
      throw new Error(inf.msg);
    return new FlashByteArray(inf.result);
  }
}

//
// Util
//

class Util {
  static rectIntersects(rect, x, y, w, h){
    return !(
      rect.x + rect.w <= x ||
      x + w <= rect.x ||
      rect.y + rect.h <= y ||
      y + h <= rect.y
    );
  }

  static randomRange(minNum, maxNum){
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  static emptyArray(length, value){
    return Array.from({length: length}).map(typeof value === 'function' ? value : () => value);
  }
}

//
// Config
//

class Config {
  static stringSeparator             = '᎙';
  static globalPing                  = 0.2;
  static maxThrust                   = 0.2;
  static thrustBurnOff               = 0.01;
  static bw                          = 640;
  static bh                          = 480;
  // Physics
  static physics_ms_per_tick         = 10;
  static physics_variable_multiplyer = 7.752;
  static physics_base_drag           = Math.pow(.9981, Config.physics_ms_per_tick) * 1.00016093;
  static physics_ice_no_mod_drag     = Math.pow(.9993, Config.physics_ms_per_tick) * 1.00016093;
  static physics_ice_drag            = Math.pow(.9998, Config.physics_ms_per_tick) * 1.00016093;
  static physics_no_modifier_drag    = Math.pow(.9900, Config.physics_ms_per_tick) * 1.00016093;
  static physics_water_drag          = Math.pow(.9950, Config.physics_ms_per_tick) * 1.00016093;
  static physics_water_buoyancy      = -0.5;
  static physics_mud_drag            = Math.pow(.9750, Config.physics_ms_per_tick) * 1.00016093;
  static physics_mud_buoyancy        = 0.4;
  static physics_lava_drag           = Math.pow(.9800, Config.physics_ms_per_tick) * 1.00016093;
  static physics_lava_buoyancy       = 0.2;
  static physics_toxic_drag          = Math.pow(.9900, Config.physics_ms_per_tick) * 1.00016093;
  static physics_toxic_buoyancy      = -0.4;
  static physics_jump_height         = 26;
  static physics_boost               = 16;
  static physics_gravity             = 2;
  static physics_queue_length        = 2;
  static camera_lag = 1 / 16;
  // Effects
  static effectReset                 = -1;
  static effectJump                  = 0;
  static effectFly                   = 1;
  static effectRun                   = 2;
  static effectProtection            = 3;
  static effectCurse                 = 4;
  static effectZombie                = 5;
  static effectTeam                  = 6;
  static effectLowGravity            = 7;
  static effectFire                  = 8;
  static effectMultijump             = 9;
  static effectGravity               = 10;
  static effectPoison                = 11;
}

//
// Controller
//

class Controller {
  setOptions(){}
  getOptions(){ return {}; }
  attach(){}
  detach(){}
  nextInput(){}
  nextPaused(){}
}

class KeyboardController extends Controller {
  element;
  input;
  onToggleGod;
  onToggleCP;
  onTogglePause;
  onToggleEdit;
  jumpKey  = 'Space';
  upKey    = 'ArrowUp, KeyW';
  rightKey = 'ArrowRight, KeyD';
  downKey  = 'ArrowDown, KeyS';
  leftKey  = 'ArrowLeft, KeyA';
  riskyKey = 'KeyY';
  retryKey = 'Shift+KeyR';
  pauseKey = 'Escape';
  godKey   = 'KeyG';
  cpKey    = 'KeyH';
  editKey  = 'Enter';

  constructor(element, onToggleGod, onToggleCP, onTogglePause, onToggleEdit){
    super();
    this.element = element;
    this.input = 0;
    this.onToggleGod = onToggleGod;
    this.onToggleCP = onToggleCP;
    this.onTogglePause = onTogglePause;
    this.onToggleEdit = onToggleEdit;
  }

  setOptions(options){
    if ('jumpKey' in options)
      this.jumpKey = options.jumpKey;
    if ('upKey' in options)
      this.upKey = options.upKey;
    if ('rightKey' in options)
      this.rightKey = options.rightKey;
    if ('downKey' in options)
      this.downKey = options.downKey;
    if ('leftKey' in options)
      this.leftKey = options.leftKey;
    if ('riskyKey' in options)
      this.riskyKey = options.riskyKey;
    if ('retryKey' in options)
      this.retryKey = options.retryKey;
    if ('pauseKey' in options)
      this.pauseKey = options.pauseKey;
    if ('godKey' in options)
      this.godKey = options.godKey;
    if ('cpKey' in options)
      this.cpKey = options.cpKey;
    if ('editKey' in options)
      this.editKey = options.editKey;
  }

  getOptions(){
    return {
      jumpKey: this.jumpKey,
      upKey: this.upKey,
      rightKey: this.rightKey,
      downKey: this.downKey,
      leftKey: this.leftKey,
      riskyKey: this.riskyKey,
      retryKey: this.retryKey,
      pauseKey: this.pauseKey,
      godKey: this.godKey,
      cpKey: this.cpKey,
      editKey: this.editKey
    };
  }

  attach(){
    this.element.addEventListener('keydown', this.keyDown);
    this.element.addEventListener('keyup', this.keyUp);
    this.element.addEventListener('blur', this.blur);
  }

  detach(){
    this.element.removeEventListener('keydown', this.keyDown);
    this.element.removeEventListener('keyup', this.keyUp);
    this.element.removeEventListener('blur', this.blur);
  }

  keyToBit(codeMix, isDown, shiftKey, ctrlKey, altKey, metaKey){
    const code = codeMix.toLowerCase();
    const check = opts => {
      for (const opt of opts.toLowerCase().replace(/\s/g, '').split(',')){
        let pass = true;
        for (const m of opt.split('+')){
          if      (m === 'shift') pass = !isDown || shiftKey;
          else if (m === 'ctrl' ) pass = !isDown || ctrlKey;
          else if (m === 'alt'  ) pass = !isDown || altKey;
          else if (m === 'meta' ) pass = !isDown || metaKey;
          else                    pass = m === code;
          if (!pass)
            break;
        }
        if (pass)
          return true;
      }
      return false;
    };
    if (check(this.jumpKey )) return Input.JUMP;
    if (check(this.upKey   )) return Input.UP;
    if (check(this.rightKey)) return Input.RIGHT;
    if (check(this.downKey )) return Input.DOWN;
    if (check(this.leftKey )) return Input.LEFT;
    if (check(this.riskyKey)) return Input.RISKY;
    if (check(this.retryKey)) return Input.RETRY;
    if (isDown && check(this.pauseKey)) this.onTogglePause();
    if (isDown && check(this.godKey  )) this.onToggleGod();
    if (isDown && check(this.cpKey   )) this.onToggleCP();
    if (isDown && check(this.editKey )) this.onToggleEdit();
    return -1;
  }

  keyDown = e => {
    const b = this.keyToBit(e.code, true, e.shiftKey, e.ctrlKey, e.altKey, e.metaKey);
    if (b > 0)
      this.input |= b;
  };

  keyUp = e => {
    const b = this.keyToBit(e.code, false, e.shiftKey, e.ctrlKey, e.altKey, e.metaKey);
    if (b >= 0)
      this.input &= 0xffff ^ b;
  };

  blur = () => {
    this.input = 0;
  };

  nextInput(){
    return this.input;
  }
}

class GamepadController extends Controller {
  blockGod = 0;
  blockPause = 0;
  jumpButton = 0;
  upButton = 12;
  rightButton = 15;
  downButton = 13;
  leftButton = 14;
  riskyButton = 1;
  retryButton = 8;
  pauseButton = 9;
  godButton = 3;
  cpButton = 5;
  directionAxis = true;
  onToggleGod;
  onToggleCP;
  onTogglePause;

  constructor(onToggleGod, onToggleCP, onTogglePause){
    super();
    this.onToggleGod = onToggleGod;
    this.onToggleCP = onToggleCP;
    this.onTogglePause = onTogglePause;
  }

  setOptions(options){
    if ('pauseButton' in options)
      this.pauseButton = options.pauseButton;
    if ('jumpButton' in options)
      this.jumpButton = options.jumpButton;
    if ('riskyButton' in options)
      this.riskyButton = options.riskyButton;
    if ('retryButton' in options)
      this.retryButton = options.retryButton;
    if ('godButton' in options)
      this.godButton = options.godButton;
    if ('cpButton' in options)
      this.cpButton = options.cpButton;
    if ('upButton' in options)
      this.upButton = options.upButton;
    if ('rightButton' in options)
      this.rightButton = options.rightButton;
    if ('downButton' in options)
      this.downButton = options.downButton;
    if ('leftButton' in options)
      this.leftButton = options.leftButton;
    if ('directionAxis' in options)
      this.directionAxis = options.directionAxis;
  }

  getOptions(){
    return {
      pauseButton: this.pauseButton,
      jumpButton: this.jumpButton,
      riskyButton: this.riskyButton,
      retryButton: this.retryButton,
      godButton: this.godButton,
      cpButton: this.cpButton,
      upButton: this.upButton,
      rightButton: this.rightButton,
      downButton: this.downButton,
      leftButton: this.leftButton,
      directionAxis: this.directionAxis
    };
  }

  btn(gp, i){
    return gp && gp.buttons && gp.buttons.length > i && gp.buttons[i].pressed;
  }

  attach(){}
  detach(){}
  checkPaused(gp){
    if (this.btn(gp, this.pauseButton)){
      const now = Date.now();
      if (now > this.blockPause){
        this.onTogglePause();
        this.blockPause = now + 500;
      }
    }
  }
  nextPaused(){
    for (const gp of navigator.getGamepads())
      this.checkPaused(gp);
  }
  nextInput(){
    let input = 0;
    for (const gp of navigator.getGamepads()){
      this.checkPaused(gp);
      if (this.btn(gp, this.jumpButton  )) input |= Input.JUMP;
      if (this.btn(gp, this.upButton    )) input |= Input.UP;
      if (this.btn(gp, this.rightButton )) input |= Input.RIGHT;
      if (this.btn(gp, this.downButton  )) input |= Input.DOWN;
      if (this.btn(gp, this.leftButton  )) input |= Input.LEFT;
      if (this.btn(gp, this.riskyButton )) input |= Input.RISKY;
      if (this.btn(gp, this.retryButton )) input |= Input.RETRY;
      if (this.btn(gp, this.cpButton    )) this.onToggleCP();
      if (this.btn(gp, this.godButton)){
        const now = Date.now();
        if (now > this.blockGod){
          this.onToggleGod();
          this.blockGod = now + 500;
        }
      }
      if (this.directionAxis && gp && gp.axes && gp.axes.length >= 2){
        if (gp.axes[0] < -0.5)
          input |= Input.LEFT;
        else if (gp.axes[0] > 0.5)
          input |= Input.RIGHT;
        if (gp.axes[1] < -0.5)
          input |= Input.UP;
        else if (gp.axes[1] > 0.5)
          input |= Input.DOWN;
      }
    }
    return input;
  }
}

//
// Input
//

class Input {
  static JUMP  = 1;
  static LEFT  = 2;
  static RIGHT = 4;
  static UP    = 8;
  static DOWN  = 16;
  static RISKY = 32;
  static RETRY = 64;

  tasJumping = false;
  lastFrame = 0;
  thisFrame = 0;
  controllers = [];

  setOptions(options){
    for (const controller of this.controllers)
      controller.setOptions(options);
  }

  getOptions(){
    const options = {};
    for (const controller of this.controllers)
      Object.assign(options, controller.getOptions());
    return options;
  }

  attachController(controller){
    controller.attach();
    this.controllers.push(controller);
  }

  detachController(controller){
    const i = this.controllers.indexOf(controller);
    if (i >= 0)
      this.controllers.splice(i, 1)[0].detach();
  }

  nextPaused(){
    for (const controller of this.controllers)
      controller.nextPaused();
  }

  startTick(){
    this.lastFrame = this.thisFrame;
    this.thisFrame = 0;
    for (const controller of this.controllers)
      this.thisFrame |= controller.nextInput();
  }

  destroy(){
    for (const controller of this.controllers)
      controller.detach();
    this.controllers.splice(0, this.controllers.length);
  }

  get horizontal(){
    const h = this.thisFrame & (Input.LEFT | Input.RIGHT);
    return h === Input.LEFT ? -1 : h === Input.RIGHT ? 1 : 0;
  }

  get vertical(){
    const h = this.thisFrame & (Input.UP | Input.DOWN);
    return h === Input.UP ? -1 : h === Input.DOWN ? 1 : 0;
  }

  get jump(){
    return !!(this.thisFrame & Input.JUMP);
  }

  get jumpJustPressed(){
    if (this.tasJumping)
      return !!(this.thisFrame & Input.JUMP);
    return (this.thisFrame & Input.JUMP) && !(this.lastFrame & Input.JUMP);
  }

  get risky(){
    return (this.thisFrame & Input.RISKY) && !(this.lastFrame & Input.RISKY);
  }

  get retry(){
    return (this.thisFrame & Input.RETRY) && !(this.lastFrame & Input.RETRY);
  }
}

//
// ItemSmiley
//

class ItemSmiley {
  id;
  name;
  payVaultId;
  miniMapColor;
  rect;
  rectGold;

  constructor(id, name, payVaultId, miniMapColor, rect, rectGold){
    this.id = id;
    this.name = name;
    this.payVaultId = payVaultId;
    this.miniMapColor = miniMapColor;
    this.rect = rect;
    this.rectGold = rectGold;
  }
}

//
// ItemAuraColor
//

class ItemAuraColor {
  id;
  name;
  payVaultId;

  constructor(id, name, payVaultId){
    this.id = id;
    this.name = name;
    this.payVaultId = payVaultId;
  }
}

//
// ItemAuraShape
//

class ItemAuraShape {
  id;
  name;
  base;
  payVaultId;
  frames;
  speed;
  rotate;
  rect;
  generated;

  constructor(id, name, base, payVaultId, frames, speed, rotate, rect, generated){
    this.id = id;
    this.name = name;
    this.base = base;
    this.payVaultId = payVaultId;
    this.frames = frames;
    this.speed = speed;
    this.rotate = rotate;
    this.rect = rect;
    this.generated = generated;
  }
}

//
// ItemTab
//

class ItemTab {
  static BLOCK      = 0;
  static ACTION     = 1;
  static DECORATIVE = 2;
  static BACKGROUND = 3;

  static toNamesArray(id){
    switch (id){
      case ItemTab.BLOCK:
        return ['foreground', 'block', 'fg'];
      case ItemTab.ACTION:
        return ['action'];
      case ItemTab.DECORATIVE:
        return ['decoration', 'decorative'];
      case ItemTab.BACKGROUND:
        return ['background', 'bg'];
      default:
        return [];
    }
  }
}

//
// ItemBrick
//

function drawNumber(target, ox, oy, num, white){
  const srcBmd = white ? ItemManager.blockNumbersBMD : ItemManager.blockNumbers2BMD;
  if (num >= 1000)
    target.copyPixels(srcBmd, 40, 0, 4, 5, ox + 12, oy + 11, 4, 5);
  else{
    num = '' + num;
    for (let i = 0; i < num.length; i++){
      const n = num[num.length - i - 1] - '0';
      target.copyPixels(srcBmd, n * 4, 0, 4, 5, ox + 12 - i * 5, oy + 11, 4, 5);
    }
  }
}

function drawBrickWithNumber(target, ox, oy, num, white, bmd, offset){
  target.copyPixels(bmd, offset * 16, 0, 16, 16, ox, oy, 16, 16);
  drawNumber(target, ox, oy, num, white);
}

class ItemBrick {
  id;
  debugId;
  payVaultId;
  layer;
  bmd;
  offset;
  tab;
  requiresOwnership;
  requiresAdmin;
  requiresPurchase;
  hasShadow;
  description;
  tags;
  selectorBG;
  miniMapColor;

  constructor(
    id,
    layer,
    bmd,
    offset,
    payVaultId,
    description,
    tab,
    requiresOwnership,
    requiresAdmin,
    requiresPurchase,
    shadow,
    miniMapColor,
    tags,
    selectorBG
  ){
    // validate types
    if (typeof id !== 'number')
      throw new Error('Invalid id');
    if (
      layer !== ItemLayer.FOREGROUND &&
      layer !== ItemLayer.BACKGROUND &&
      layer !== ItemLayer.DECORATION &&
      layer !== ItemLayer.ABOVE
    )
      throw new Error('Invalid layer');
    if (!bmd || !bmd.img)
      throw new Error('Invalid bmd');
    if (typeof offset !== 'number')
      throw new Error('Invalid artOffset');
    if (typeof payVaultId !== 'string')
      throw new Error('Invalid payVaultId');
    if (typeof description !== 'string')
      throw new Error('Invalid description');
    if (
      tab !== ItemTab.BLOCK &&
      tab !== ItemTab.ACTION &&
      tab !== ItemTab.DECORATIVE &&
      tab !== ItemTab.BACKGROUND
    )
      throw new Error('Invalid tab');
    if (typeof requiresOwnership !== 'boolean')
      throw new Error('Invalid requiresOwnership');
    if (typeof requiresAdmin !== 'boolean')
      throw new Error('Invalid requiresAdmin');
    if (typeof requiresPurchase !== 'boolean')
      throw new Error('Invalid requiresPurchase');
    if (typeof shadow !== 'boolean')
      throw new Error('Invalid shadow');
    if (typeof miniMapColor !== 'number')
      throw new Error('Invalid miniMapColor');
    if (typeof selectorBG !== 'number')
      throw new Error('Invalid selectorBG');

    this.id = id;
    this.debugId = id;
    this.layer = layer;
    this.miniMapColor = miniMapColor < 0 ? 0 : miniMapColor; // TODO: generateThumbColor
    this.bmd = bmd; // TODO: shadow
    this.offset = offset;
    this.payVaultId = payVaultId;
    this.description = description;
    this.tab = tab;
    this.requiresOwnership = requiresOwnership;
    this.requiresAdmin = requiresAdmin;
    this.requiresPurchase = requiresPurchase;
    this.hasShadow = shadow;
    this.tags = tags || [];
    this.selectorBG = selectorBG;
  }

  draw(target, ox, oy){
    target.copyPixels(this.bmd, this.offset * 16, 0, 16, 16, ox, oy, 16, 16);
    target.debugText(`${this.debugId}`, ox + 8, oy + 8);
  }

  drawWithNumber(target, ox, oy, num, white, bmd, offset){
    drawBrickWithNumber(target, ox, oy, num, white, this.bmd, this.offset);
  }

  copy(debugId){
    const brick = new ItemBrick(
      this.id,
      this.layer,
      this.bmd,
      this.offset,
      this.payVaultId,
      this.description,
      this.tab,
      this.requiresOwnership,
      this.requiresAdmin,
      this.requiresPurchase,
      this.hasShadow,
      this.miniMapColor,
      this.tags,
      this.selectorBG
    );
    brick.debugId = debugId;
    return brick;
  }
}

//
// ItemBrickPackage
//

class ItemBrickPackage {
  name;
  description;
  tags;
  bricks = [];

  constructor(name, description, tags){
    this.name = name;
    this.description = description;
    this.tags = tags || [];
  }

  createAndAddBrick(
    id,
    layer,
    base,
    payVaultId,
    description,
    tab,
    requiresOwnership,
    shadow,
    artOffset,
    miniMapColor,
    tags,
    requiresAdmin,
    requiresPurchase,
    selectorBG
  ){
    this.bricks.push(new ItemBrick(id, layer, base, artOffset, payVaultId, description, tab,
      requiresOwnership, requiresAdmin, requiresPurchase, shadow, miniMapColor, tags, selectorBG));
    return this;
  }

  addBasic(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addBeta(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const payVaultId = 'pro';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addBrick(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addMetal(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addGrass(id, layer, artOffset, tags){
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = 0xff456313;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addGeneric(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addFactory(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSecrets(id, layer, base, description, shadow, artOffset, miniMapColor, tags){
    const payVaultId = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addGlass(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addMinerals(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const payVaultId = 'brickminiral';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addXmas2011(id, artOffset, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const payVaultId = 'brickxmas2011';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addGravity(id, layer, base, artOffset, miniMapColor, tags){
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addKeys(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = 'hit to activate key doors and gates for everyone for 6 seconds';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addGates(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addDoors(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addCoins(id, layer, base, payVaultId, shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase){
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addTools(id, layer, base, payVaultId, description, requiresOwnership, artOffset, tags){
    const tab = ItemTab.ACTION;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addCrown(id, layer, base, payVaultId, description, shadow, artOffset, miniMapColor, tags){
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addBoost(id, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.blocksBMD;
    const payVaultId = 'brickboost';
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addClimbable(id, base, payVaultId, shadow, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSwitches(id, base, payVaultId, shadow, artOffset, miniMapColor, tags){
    const layer = ItemLayer.DECORATION;
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addDeath(id, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.blocksBMD;
    const payVaultId = 'brickdeathdoor';
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0xffa9a9a9;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addZombie(id, base, description, artOffset, miniMapColor, tags){
    const layer = ItemLayer.DECORATION;
    const payVaultId = 'brickeffectzombie';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addTeams(id, base, description, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const payVaultId = 'brickeffectteam';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addTimed(id, shadow, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.specialBlocksBMD;
    const payVaultId = 'bricktimeddoor';
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addMusic(id, payVaultId, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.blocksBMD;
    const description = 'plays a sound when touched';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addHazards(id, layer, payVaultId, artOffset, tags){
    const base = ItemManager.specialBlocksBMD;
    const description = 'kills the player';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addLiquids(id, base, payVaultId, description, artOffset, tags){
    const layer = ItemLayer.ABOVE;
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addPortals(id, payVaultId, description, requiresOwnership, artOffset, miniMapColor, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.specialBlocksBMD;
    const tab = ItemTab.ACTION;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addDiamond(){
    const id = 241;
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'brickdiamond';
    const description = 'changes the player\'s smiley to diamond';
    const tab = ItemTab.ACTION;
    const requiresOwnership = true;
    const shadow = true;
    const artOffset = 113;
    const miniMapColor = -1;
    const tags = ['Luxury','Smiley','Expensive','Gray','Animated','Shiny','Grey'];
    const requiresAdmin = false;
    const requiresPurchase = true;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addCake(){
    const id = 337;
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.specialBlocksBMD;
    const payVaultId = 'brickcake';
    const description = 'changes the player\'s smiley to party hat';
    const tab = ItemTab.ACTION;
    const requiresOwnership = true;
    const shadow = true;
    const artOffset = 298;
    const miniMapColor = 0x00000000;
    const tags = ['Party','Birthday','Smiley','Hat','Animated','Food'];
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addHologram(){
    const id = 397;
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.specialBlocksBMD;
    const payVaultId = 'brickhologram';
    const description = 'changes the player\'s smiley to hologram';
    const tab = ItemTab.ACTION;
    const requiresOwnership = true;
    const shadow = true;
    const artOffset = 279;
    const miniMapColor = 0x6666ffff;
    const tags = ['Sci-fi','Blue','Transparent','Smiley','Future','Animated'];
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addXmas2010(id, artOffset, tags){
    const layer = ItemLayer.ABOVE;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'brickchristmas2010';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addNewYear2010(id, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'mixednewyear2010';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSpring2011(id, artOffset, tags){
    const layer = ItemLayer.ABOVE;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'brickspring2011';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addPrizes(id, payVaultId, description, artOffset, tags){
    const layer = ItemLayer.ABOVE;
    const base = ItemManager.decoBlocksBMD;
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = true;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addEaster2012(id, artOffset, tags){
    const layer = ItemLayer.ABOVE;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'brickeaster2012';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addBasicBg(id, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addBetaBg(id, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = 'pro';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addBrickBg(id, shadow, artOffset, miniMapColor, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addCheckerBg(id, shadow, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addDark(id, shadow, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addNormal(id, shadow, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addPastel(id, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addCanvas(id, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = 'brickbgcanvas';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addCarnival(id, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = 'brickbgcarnival';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addCandy(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickcandy';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSummer2011(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'bricksummer2011';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addHalloween2011(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickhw2011';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addXmas2011Deco(id, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'brickxmas2011';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSciFi(id, layer, base, tab, artOffset, miniMapColor, tags){
    const payVaultId = 'brickscifi';
    const description = '';
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addPrison(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickprison';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addWindows(id, artOffset, tags){
    const layer = ItemLayer.ABOVE;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addPirate(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickpirate';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addStone(id, layer, base, tab, shadow, artOffset, tags){
    const payVaultId = 'brickstone';
    const description = '';
    const requiresOwnership = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addDojo(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickninja';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addWildWest(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickcowboy';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addPlastic(id, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.blocksBMD;
    const payVaultId = 'brickplastic';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addWater(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = '';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSand(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'bricksand';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSummer2012(id, artOffset, tags){
    const layer = ItemLayer.ABOVE;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'bricksummer2012';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addCloud(id, layer, base, tab, artOffset, miniMapColor, tags){
    const payVaultId = '';
    const description = '';
    const requiresOwnership = false;
    const shadow = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addIndustrial(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickindustrial';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addClay(id, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addMedieval(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickmedieval';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addPipes(id, artOffset, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addOuterSpace(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = '';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addDesert(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = '';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addNeon(id, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = 'brickneon';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addMonster(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickmonster';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addFog(id, artOffset, tags){
    const layer = ItemLayer.ABOVE;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'brickfog';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addHalloween2012(id, layer, shadow, artOffset, tags){
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'brickhw2012';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addChecker(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addJungle(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = '';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addXmas2012(id, layer, base, tab, artOffset, miniMapColor, tags){
    const payVaultId = 'brickxmas2012';
    const description = '';
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addLava(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'bricklava';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSwamp(id, layer, base, tab, artOffset, miniMapColor, tags){
    const payVaultId = 'brickswamp';
    const description = '';
    const requiresOwnership = false;
    const shadow = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addMarble(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'bricksparta';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addLabel(){
    const id = 1000;
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = true;
    const artOffset = 265;
    const miniMapColor = 0x00000000;
    const tags = ['Text','Words','ModText'];
    const requiresAdmin = true;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSign(){
    const id = 385;
    const layer = ItemLayer.ABOVE;
    const base = ItemManager.specialBlocksBMD;
    const payVaultId = 'bricksign';
    const description = 'players will see a custom message when they touch this block';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = true;
    const artOffset = 513;
    const miniMapColor = 0x00000000;
    const tags = ['Morphable','Write','Text','Wood','Info'];
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addFarm(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickfarm';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addAutumn2014(id, layer, base, tab, shadow, artOffset, tags){
    const payVaultId = 'brickautumn2014';
    const description = '';
    const requiresOwnership = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addXmas2014(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickchristmas2014';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addOneWay(id, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.specialBlocksBMD;
    const payVaultId = 'brickoneway';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addValentines2015(id, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'brickvalentines2015';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addMagic(id, payVaultId, description, artOffset, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addEffect(id, base, payVaultId, description, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addGold(id, layer, base, description, tab, shadow, artOffset, miniMapColor){
    const payVaultId = 'goldmember';
    const requiresOwnership = true;
    const tags = [];
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addCave(id, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = 'brickcave';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSummer2015(id, layer, shadow, artOffset, tags){
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'bricksummer2015';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addEnvironment(id, layer, base, tab, shadow, artOffset, tags){
    const payVaultId = '';
    const description = '';
    const requiresOwnership = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addDomestic(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickdomestic';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addHalloween2015(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickhalloween2015';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addArctic(id, layer, base, tab, shadow, artOffset, tags){
    const payVaultId = '';
    const description = '';
    const requiresOwnership = false;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addNewYear2015(id, base, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const payVaultId = 'bricknewyear2015';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addIce(){
    const id = 1064;
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.specialBlocksBMD;
    const payVaultId = 'brickice2';
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = true;
    const artOffset = 501;
    const miniMapColor = -1;
    const tags = ['Slippery','Physics','Slide'];
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addFairytale(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickfairytale';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSpring2016(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickspring2016';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSummer2016(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'bricksummer2016';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addMine(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickmine';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addRestaurant(id, base, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const payVaultId = 'brickrestaurant';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addTextile(id, artOffset, tags){
    const layer = ItemLayer.BACKGROUND;
    const base = ItemManager.bgBlocksBMD;
    const payVaultId = 'bricktextile';
    const description = '';
    const tab = ItemTab.BACKGROUND;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addHalloween2016(id, layer, base, tab, artOffset, miniMapColor, tags){
    const payVaultId = 'brickhalloween2016';
    const description = '';
    const requiresOwnership = false;
    const shadow = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addConstruction(id, layer, base, tab, artOffset, miniMapColor, tags){
    const payVaultId = '';
    const description = '';
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addXmas2016(id, base, tab, artOffset, miniMapColor, tags){
    const layer = ItemLayer.DECORATION;
    const payVaultId = 'brickchristmas2016';
    const description = '';
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addTiles(id, layer, base, tab, artOffset, tags){
    const payVaultId = 'bricktiles';
    const description = '';
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addStPatricks2017(id, layer, artOffset, tags){
    const base = ItemManager.decoBlocksBMD;
    const payVaultId = 'brickstpatricks2017';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addHalfBlocks(id, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.specialBlocksBMD;
    const payVaultId = 'brickhalfblocks';
    const description = '';
    const tab = ItemTab.BLOCK;
    const requiresOwnership = false;
    const shadow = true;
    const miniMapColor = -1;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addWinter2018(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickwinter2018';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addGarden(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickgarden';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addFireworks(){
    const id = 1581;
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.specialBlocksBMD;
    const payVaultId = 'brickfirework';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = false;
    const artOffset = 741;
    const miniMapColor = 0x00000000;
    const tags = ['Fireworks','Purple','White','Red','Blue','Green','Yellow','Magenta','Gold','Morphable','Seasonal','Holiday'];
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addToxic(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'bricktoxic';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addSpecial(id, layer, payVaultId, requiresOwnership, shadow, artOffset){
    const base = ItemManager.decoBlocksBMD;
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const miniMapColor = -1;
    const tags = [];
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addDungeon(id, layer, base, tab, shadow, artOffset, miniMapColor, tags){
    const payVaultId = 'brickdungeon';
    const description = '';
    const requiresOwnership = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addShadows(id, artOffset, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.shadowBlocksBMD;
    const payVaultId = '';
    const description = '';
    const tab = ItemTab.DECORATIVE;
    const requiresOwnership = false;
    const shadow = false;
    const miniMapColor = 0x00000000;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 610;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }
}

//
// ItemManager
//

class ItemManager {
  static smilies = [];
  static auraColors = [];
  static auraShapes = [];
  static brickPackages;
  static bricks = new Array(4001);

  static init(){
    //
    // Smileys
    //
    ([
      ['Smiley'              , ''                        ],
      ['Grin'                , ''                        ],
      ['Tongue'              , ''                        ],
      ['Happy'               , ''                        ],
      ['Annoyed'             , ''                        ],
      ['Sad'                 , ''                        ],
      ['Crying'              , 'pro'                     ],
      ['Wink'                , 'pro'                     ],
      ['Frustrated'          , 'pro'                     ],
      ['Shades'              , 'pro'                     ],
      ['Devil'               , 'pro'                     ],
      ['Inquisitive'         , 'pro'                     ],
      ['Ninja'               , 'smileyninja'              , 0x00000000],
      ['Santa'               , 'smileysanta'             ],
      ['Worker'              , ''                        ],
      ['Big Spender'         , 'smileybigspender'        ],
      ['Superman'            , 'smileysuper'             ],
      ['Surprise'            , 'smileysupprice'          ],
      ['Indifferent'         , ''                        ],
      ['Girl'                , ''                        ],
      ['New Year 2010'       , 'mixednewyear2010'        ],
      ['Coy'                 , ''                        ],
      ['Wizard'              , 'smileywizard'            ],
      ['Fan Boy'             , 'smileyfanboy'            ],
      ['Terminator'          , ''                        ],
      ['Extra Grin'          , 'smileyxd'                ],
      ['Bully'               , 'smileybully'             ],
      ['Commando'            , 'smileycommando'          ],
      ['Kissing'             , 'smileyvalentines2011'    ],
      ['Bird'                , 'smileybird'              ],
      ['Bunny'               , 'smileybunni'             ],
      ['Diamond Touch'       , 'unobtainable'            ],
      ['Fire Wizard'         , 'smileywizard2'           ],
      ['Extra Tongue'        , 'smileyxdp'               ],
      ['Postman'             , 'smileypostman'           ],
      ['Templar'             , 'smileytemplar'           ],
      ['Angel'               , ''                        ],
      ['Nurse'               , 'smileynurse'             ],
      ['Vampire'             , 'smileyhw2011vampire'     ],
      ['Ghost'               , 'smileyhw2011ghost'       ],
      ['Frankenstein'        , 'smileyhw2011frankenstein'],
      ['Witch'               , 'smileywitch'             ],
      ['Indian'              , 'smileytg2011indian'      ],
      ['Pilgrim'             , 'smileytg2011pilgrim'     ],
      ['Pumpkin'             , 'smileypumpkin1'          ],
      ['Lit Pumpkin'         , 'smileypumpkin2'          ],
      ['Snowman'             , 'smileyxmassnowman'       ],
      ['Reindeer'            , 'smileyxmasreindeer'      ],
      ['Grinch'              , 'smileyxmasgrinch'        ],
      ['Maestro'             , 'bricknode'               ],
      ['DJ'                  , 'brickdrums'              ],
      ['Sigh'                , ''                        ],
      ['Robber'              , ''                         , 0x00000000],
      ['Police'              , ''                         , 0xff0c64f6],
      ['Purple Ghost'        , 'smileypurpleghost'       ],
      ['Pirate'              , ''                        ],
      ['Viking'              , ''                        ],
      ['Karate'              , ''                        ],
      ['Cowboy'              , ''                        ],
      ['Diver'               , 'smileydiver'             ],
      ['Tanned'              , 'smileytanned'            ],
      ['Propeller Hat'       , ''                        ],
      ['Hard Hat'            , 'smileyhardhat'           ],
      ['Gas Mask'            , 'smileygasmask'           ],
      ['Robot'               , ''                        ],
      ['Peasant'             , ''                        ],
      ['Guard'               , ''                        ],
      ['Blacksmith'          , ''                        ],
      ['LOL'                 , ''                        ],
      ['Dog'                 , ''                        ],
      ['Alien'               , 'smileyalien'             ],
      ['Astronaut'           , 'smileyastronaut'         ],
      ['PartyOrange'         , 'unobtainable'            ],
      ['PartyGreen'          , 'unobtainable'            ],
      ['PartyBlue'           , 'unobtainable'            ],
      ['PartyRed'            , 'unobtainable'            ],
      ['Daredevil'           , ''                        ],
      ['Monster'             , 'smileymonster'           ],
      ['Skeleton'            , 'smileyskeleton'          ],
      ['Mad Scientist'       , 'smileymadscientist'      ],
      ['Headhunter'          , 'smileyheadhunter'        ],
      ['Safari'              , 'smileysafari'            ],
      ['Archaeologist'       , 'smileyarchaeologist'     ],
      ['New Year 2013'       , 'smileynewyear2012'       ],
      ['Winter Hat'          , 'smileywinter'            ],
      ['Fire demon'          , 'smileyfiredeamon'        ],
      ['Bishop'              , 'smileybishop'            ],
      ['Zombie'              , 'unobtainable'            ],
      ['Bruce'               , 'smileyzombieslayer'      ],
      ['Unit'                , 'smileyunit'              ],
      ['Spartan'             , 'smileyspartan'           ],
      ['Lady'                , 'smileyhelen'             ],
      ['Cow'                 , 'smileycow'               ],
      ['Scarecrow'           , 'smileyscarecrow'         ],
      ['Dark Wizard'         , 'smileydarkwizard'        ],
      ['Kung Fu Master'      , 'smileykungfumaster'      ],
      ['Fox'                 , 'smileyfox'               ],
      ['Night Vision'        , 'smileynightvision'       ],
      ['Summer Girl'         , 'smileysummergirl'        ],
      ['Fan Boy II'          , 'smileyfanboy2'           ],
      ['Sci-Fi Hologram'     , 'unobtainable'            ],
      ['Gingerbread'         , 'smileygingerbread'       ],
      ['Caroler'             , 'smileycaroler'           ],
      ['Elf'                 , 'smileyelf'               ],
      ['Nutcracker'          , 'smileynutcracker'        ],
      ['Blushing'            , 'brickvalentines2015'     ],
      ['Artist'              , 'smileyartist'            ],
      ['Princess'            , ''                        ],
      ['Chef'                , ''                        ],
      ['Clown'               , ''                        ],
      ['Red Ninja'           , 'smileyninjared'          ],
      ['3D Glasses'          , 'smiley3dglasses'         ],
      ['Sunburned'           , 'smileysunburned'         ],
      ['Tourist'             , 'smileytourist'           ],
      ['Graduate'            , 'smileygraduate'          ],
      ['Sombrero'            , 'smileysombrero'          ],
      ['Cat'                 , ''                        ],
      ['Scared'              , ''                        ],
      ['Ghoul'               , 'smileyghoul'             ],
      ['Mummy'               , 'smileymummy'             ],
      ['Bat'                 , 'smileybat'               ],
      ['Eyeball'             , 'smileyeyeball'           ],
      ['Light Wizard'        , 'smileylightwizard'       ],
      ['Hooded'              , 'smileyhooded'            ],
      ['Earmuffs'            , 'smileyearmuffs'          ],
      ['Penguin'             , 'smileypenguin'           ],
      ['Gold Smiley'         , 'goldmember'              ],
      ['Gold Ninja'          , 'goldmember'              ],
      ['Gold Robot'          , 'goldmember'              ],
      ['Gold Top Hat'        , 'goldmember'              ],
      ['Sick'                , ''                        ],
      ['Unsure'              , ''                        ],
      ['Goofy'               , 'smileygoofy'             ],
      ['Raindrop'            , 'smileyraindrop'          ],
      ['Bee'                 , 'smileybee'               ],
      ['Butterfly'           , 'smileybutterfly'         ],
      ['Sea Captain'         , 'smileyseacaptain'        ],
      ['Soda Clerk'          , 'smileysodaclerk'         ],
      ['Lifeguard'           , 'smileylifeguard'         ],
      ['Aviator'             , 'smileyaviator'           ],
      ['Sleepy'              , 'smileysleepy'            ],
      ['Seagull'             , 'smileyseagull'           ],
      ['Werewolf'            , 'smileywerewolf'          ],
      ['Swamp Creature'      , 'smileyswampcreature'     ],
      ['Fairy'               , 'smileyfairy'             ],
      ['Firefighter'         , 'smileyfirefighter'       ],
      ['Spy'                 , 'smileyspy'                , 0x00000000],
      ['Devil Skull'         , 'smileydevilskull'        ],
      ['Clockwork Robot'     , 'smileyclockwork'         ],
      ['Teddy Bear'          , 'smileyteddybear'         ],
      ['Christmas Soldier'   , 'smileychristmassoldier'  ],
      ['Scrooge'             , 'smileyscrooge'           ],
      ['Boy'                 , ''                        ],
      ['Pigtails'            , 'smileypigtails'          ],
      ['Doctor'              , 'smileydoctor'            ],
      ['Turban'              , 'smileyturban'            ],
      ['Hazmat Suit'         , 'smileyhazmatsuit'        ],
      ['Leprechaun'          , 'smileyleprechaun'        ],
      ['Angry'               , 'smileyangry'             ],
      ['Smirk'               , 'smileysmirk'             ],
      ['Sweat'               , 'smileysweat'             ],
      ['Country Singer'      , 'brickguitar'             ],
      ['Thor'                , 'smileythor'              ],
      ['Cowgirl'             , ''                        ],
      ['Raccoon'             , 'smileyraccoon'           ],
      ['Lion'                , 'smileylion'              ],
      ['Laika'               , 'smileylaiika'            ],
      ['Fishbowl'            , 'smileyfishbowl'          ],
      ['Slime'               , 'smileyslime'             ],
      ['Designer'            , 'smileydesigner'          ],
      ['Frozen'              , 'smileyfrozen'            ],
      ['Masquerade'          , 'smileymasquerade'        ],
      ['Polar Bear'          , 'smileypolarbear'         ],
      ['Baseball Cap'        , 'smileybaseball'          ],
      ['Golfer'              , 'smileygolfer'            ],
      ['Platinum Big Spender', 'smileyplatinumspender'   ],
      ['Green Dragon'        , 'smileydragongreen'       ],
      ['Red Dragon'          , 'smileydragonred'         ],
      ['Executioner'         , 'smileyexecutioner'       ],
      ['Gargoyle'            , 'smileygargoyle'          ],
      ['Banshee'             , 'smileybanshee'           ],
      ['Golem'               , 'smileygolem'             ],
      ['Frost Dragon'        , 'smileyfrostdragon'       ],
      ['Squirrel'            , 'smileysquirrel'          ],
      ['Golden Dragon'       , 'smileygoldendragon'      ],
      ['Robot Mk II'         , 'smileyrobot2'            ],
      ['Black Dragon'        , 'smileydragonblack'       ],
      ['Silver Dragon'       , 'smileydragonsilver'      ]
    ]).forEach((row, id) => {
      const [name, payVaultId, miniMapColor] = row;
      ItemManager.smilies.push(new ItemSmiley(
        id,
        name,
        payVaultId,
        typeof miniMapColor === 'undefined' ? 0xffffffff : miniMapColor,
        {x: 26 * id, y: 0, w: 26, h: 26},
        {x: 26 * id, y: 26, w: 26, h: 26}
      ));
    });

    //
    // Auras
    //
    ([
      ['White'   , ''            ],
      ['Red'     , 'aurared'     ],
      ['Blue'    , 'aurablue'    ],
      ['Yellow'  , 'aurayellow'  ],
      ['Green'   , 'auragreen'   ],
      ['Purple'  , 'aurapurple'  ],
      ['Orange'  , 'auraorange'  ],
      ['Cyan'    , 'auracyan'    ],
      ['Gold'    , 'goldmember'  ],
      ['Pink'    , 'aurapink'    ],
      ['Indigo'  , 'auraindigo'  ],
      ['Lime'    , 'auralime'    ],
      ['Black'   , 'aurablack'   ],
      ['Teal'    , 'aurateal'    ],
      ['Grey'    , 'auragrey'    ],
      ['Amaranth', 'auraamaranth']
    ]).forEach((row, id) => {
      const [name, payVaultId] = row;
      ItemManager.auraColors.push(new ItemAuraColor(id, name, payVaultId));
    });

    //
    // Aura Shapes
    //
    let auraImagesIndex = 0;
    ([
      ['Default'  , ItemManager.aurasBMD      , ''                   ,  1, 0.200, true ],
      ['Pinwheel' , ItemManager.aurasBMD      , 'aurashapepinwheel'  ,  6, 0.200, true ],
      ['Torus'    , ItemManager.aurasBMD      , 'aurashapetorus'     ,  1, 0.200, true ],
      ['Ornate'   , ItemManager.aurasBMD      , 'goldmember'         ,  6, 0.200, true ],
      ['Spiral'   , ItemManager.aurasBMD      , 'aurashapespiral'    ,  6, 0.150, true ],
      ['Star'     , ItemManager.aurasBMD      , 'aurashapestar'      ,  1, 0.200, true ],
      ['Snowflake', ItemManager.aurasBMD      , 'aurashapesnowflake' ,  1, 0.200, true ],
      ['Atom'     , ItemManager.aurasBMD      , 'aurashapeatom'      ,  8, 0.175, true ],
      ['Sawblade' , ItemManager.aurasBMD      , 'aurashapesawblade'  ,  6, 0.200, true ],
      ['Target'   , ItemManager.aurasBMD      , 'aurashapetarget'    ,  6, 0.150, true ],
      ['Bubble'   , ItemManager.aurasBubbleBMD, 'aurabubble'         ,  8, 0.100, false],
      ['Galaxy'   , ItemManager.aurasGalaxyBMD, 'auragalaxy'         , 12, 0.150, false],
      ['Heart'    , ItemManager.aurasBMD      , 'aurashapeheart'     , 10, 0.125, true ],
      ['Flower'   , ItemManager.aurasBMD      , 'aurashapesunflower' ,  1, 0.200, true ]
    ]).forEach((row, id) => {
      const [name, base, payVaultId, frames, speed, rotate, generate] = row;
      if (generate){
        ItemManager.auraShapes.push(new ItemAuraShape(
          id,
          name,
          base,
          payVaultId,
          frames,
          speed,
          rotate,
          {x: 64 * auraImagesIndex, y: 0, w: 64 * frames, h: 128},
          true
        ));
        auraImagesIndex += frames;
      }
      else{
        ItemManager.auraShapes.push(new ItemAuraShape(
          id,
          name,
          base,
          payVaultId,
          frames,
          speed,
          rotate,
          {x: 0, y: 0, w: base.width, h: base.height},
          false
        ));
      }
    });

    //
    // NPCs
    //
    // TODO: this

    //
    // Brick Packages
    //
    ItemManager.brickPackages = [
      new ItemBrickPackage('basic', 'Basic Blocks', ['Primary','Simple','Standard','Default'])
        .addBasic(1088, 260, -1        , ['White','Light']                                              )
        .addBasic(9   , 9  , 0xff6e6e6e, ['Grey','Gray','Taupe']                                        )
        .addBasic(182 , 156, 0xff282828, ['Black','Dark','Coal','Road']                                 )
        .addBasic(12  , 12 , 0xffa83554, ['Red','Magenta','Vermillion','Ruby']                          )
        .addBasic(1018, 205, -1        , ['Orange','Persimmon','Copper']                                )
        .addBasic(13  , 13 , 0xff93a835, ['Yellow','Lime','Chartreuse','Light green','Citrine','Citrus'])
        .addBasic(14  , 14 , 0xff42a836, ['Green','Kelly','Emerald','Grass']                            )
        .addBasic(15  , 15 , 0xff359ea6, ['Blue','Cyan','Light Blue','Aquamarine','Sky Blue']           )
        .addBasic(10  , 10 , 0xff3552a8, ['Blue','Dark Blue','Cobalt']                                  )
        .addBasic(11  , 11 , 0xff9735a7, ['Purple','Pink','Plum','Violet']                              ),
      new ItemBrickPackage('beta', 'Beta Access', ['Exclusive'])
        .addBeta(1089, 261, 0xffe5e5e5, ['White','Light']                                    )
        .addBeta(42  , 42 , 0xff999999, ['Grey','Gray','Taupe']                              )
        .addBeta(1021, 208, 0xff474747, ['Black','Dark','Onyx']                              )
        .addBeta(40  , 40 , 0xffcf6650, ['Red','Ruby','Garnet']                              )
        .addBeta(1020, 207, 0xffce7e50, ['Orange','Copper']                                  )
        .addBeta(41  , 41 , 0xffd2a945, ['Yellow','Gold','Jasmine']                          )
        .addBeta(38  , 38 , 0xff4ac882, ['Green','Emerald','Malachite']                      )
        .addBeta(1019, 206, 0xff49c2c6, ['Blue','Cyan','Light blue','Aquamarine','Turquoise'])
        .addBeta(39  , 39 , 0xff4d84c6, ['Blue','Sapphire']                                  )
        .addBeta(37  , 37 , 0xffce62cf, ['Purple','Pink','Magenta','Violet','Amethyst']      ),
      new ItemBrickPackage('brick', 'Brick Blocks', ['Standard','Wall'])
        .addBrick(1090, 262, 0xff888888, ['White','Light']                                          )
        .addBrick(1022, 209, 0xff4c4c4c, ['Gray','Grey','Concrete','Stone']                         )
        .addBrick(1024, 211, -1        , ['Black','Dark','Coal']                                    )
        .addBrick(20  , 20 , 0xff6f2429, ['Red','Maroon','Hell']                                    )
        .addBrick(16  , 16 , 0xff8b3e09, ['Brown','Orange','Soil','Dirt','Mahogany']                )
        .addBrick(21  , 21 , 0xff6f5d24, ['Beige','Tan','Olive','Brown','Ecru','Yellow']            )
        .addBrick(19  , 19 , 0xff438310, ['Green','Grass']                                          )
        .addBrick(17  , 17 , 0xff246f4d, ['Blue','Cyan','Turquoise','Teal','Skobeloff','Dark Green'])
        .addBrick(1023, 210, -1        , ['Blue','Dark','Zaffre']                                   )
        .addBrick(18  , 18 , 0xff4e246f, ['Purple','Dark','Violet']                                 ),
      new ItemBrickPackage('metal', 'Metal Blocks', ['Ore','Standard'])
        .addMetal(29, 29, 0xffa1a3a5, ['Silver','White','Iron','Platinum'])
        .addMetal(30, 30, 0xffdf7a41, ['Orange','Bronze','Amber']         )
        .addMetal(31, 31, 0xfff0a927, ['Yellow','Gold','Jasmine']         ),
      new ItemBrickPackage('grass', 'Grass Blocks', ['Environment','Nature','Standard','Soil','Ground','Dirt','Flora'])
        .addGrass(34, ItemLayer.DECORATION, 34, ['Left','Soil']  )
        .addGrass(35, ItemLayer.FOREGROUND, 35, ['Middle','Soil'])
        .addGrass(36, ItemLayer.DECORATION, 36, ['Right','Soil'] ),
      new ItemBrickPackage('generic', 'Generic Blocks', ['Special'])
        .addGeneric(22  , 22 , 0xff895b12, ['Caution','Warning','Hazard','Stripes','Yellow','Black','Standard'])
        .addGeneric(1057, 235, -1        , ['Neutral','Yellow','Body','No face']                               )
        .addGeneric(32  , 32 , 0xffcf9022, ['Face','Smiley','Yellow','Standard']                               )
        .addGeneric(1058, 236, -1        , ['Caution','Warning','Hazard','Stripes','Black','Yellow']           )
        .addGeneric(33  , 33 , 0xff000000, ['Black','Dark','Standard']                                         ),
      new ItemBrickPackage('factory', 'Factory Package', [])
        .addFactory(45, 45, 0xff72614b, ['X','Crate','Metal','Box','Wood']                            )
        .addFactory(46, 46, 0xff6e6b60, ['Concrete','Grey','Gray','Stone','Slate','X']                )
        .addFactory(47, 47, 0xff8e734f, ['Wood','Tree','Wooden','House','Planks','Flooring','Parquet'])
        .addFactory(48, 48, 0xff7f4f2b, ['X','Crate','Wooden','Box','Wood','Storage']                 )
        .addFactory(49, 49, 0xff757575, ['Silver','Metal','Scales']                                   ),
      new ItemBrickPackage('secrets', 'Secret Bricks', ['Hidden','Invisible'])
        .addSecrets(44 , ItemLayer.FOREGROUND, ItemManager.blocksBMD       , 'completely black, makes minimap invisible', true , 44 , 0x01000000, ['Black','Pure','Old','Solid'])
        .addSecrets(50 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ''                                         , true , 139, 0x00000000, ['Appear']                    )
        .addSecrets(243, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ''                                         , true , 140, 0x01000000, ['Blank','Hidden']            )
        .addSecrets(136, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ''                                         , false, 141, 0x00000000, ['Disappear']                 ),
      new ItemBrickPackage('glass', 'Glass bricks', ['Bright','Light','Shine','Polish','Neon'])
        .addGlass(51, 51, 0xfff89299, ['Red','Light red','Pink','Ruby']   )
        .addGlass(58, 58, 0xfff6ba94, ['Orange','Light orange','Topaz']   )
        .addGlass(57, 57, 0xfff8da8c, ['Yellow','Light yellow','Jasmine'] )
        .addGlass(56, 56, 0xff92fbaa, ['Green','Light green','Emerald']   )
        .addGlass(55, 55, 0xff95dcf6, ['Cyan','Light blue','Diamond']     )
        .addGlass(54, 54, 0xff7e99f6, ['Blue','Sapphire']                 )
        .addGlass(53, 53, 0xffa789f6, ['Purple','Violet','Amethyst']      )
        .addGlass(52, 52, 0xffe98bf6, ['Pink','Magenta','Purple','Quartz']),
      new ItemBrickPackage('minerals', 'Minerals', ['Neon','Pure','Bright'])
        .addMinerals(70, 70, 0xffee0000, ['Red','Ruby']                                )
        .addMinerals(76, 76, 0xffee7700, ['Orange','Topaz']                            )
        .addMinerals(75, 75, 0xffeeee00, ['Yellow','Jasmine']                          )
        .addMinerals(74, 74, 0xff00ee00, ['Green','Lime','Emerald','Peridot']          )
        .addMinerals(73, 73, 0xff00eeee, ['Cyan','Light blue','Aquamarine','Turquoise'])
        .addMinerals(72, 72, 0xff0000ee, ['Blue','Indigo','Sapphire','Lapis']          )
        .addMinerals(71, 71, 0xffee00ee, ['Pink','Magenta','Purple','Amethyst']        ),
      new ItemBrickPackage('christmas 2011', 'Christmas 2011 bricks', ['Holiday','Wrapping Paper','Gift','Present'])
        .addXmas2011(78, 78, ['Yellow'])
        .addXmas2011(79, 79, ['White'] )
        .addXmas2011(80, 80, ['Red']   )
        .addXmas2011(81, 81, ['Blue']  )
        .addXmas2011(82, 82, ['Green'] ),
      new ItemBrickPackage('gravity', 'Gravity Modifying Arrows', ['Physics','Motion','Action','Standard'])
        .addGravity(0   , ItemLayer.BACKGROUND, ItemManager.blocksBMD       , 0  , 0xff000000, ['Clear','Empty','Delete','Nothing','Erase']    )
        .addGravity(1   , ItemLayer.DECORATION, ItemManager.blocksBMD       , 1  , 0x00000000, ['Left','Arrow']                                )
        .addGravity(2   , ItemLayer.DECORATION, ItemManager.blocksBMD       , 2  , 0x00000000, ['Up','Arrow']                                  )
        .addGravity(3   , ItemLayer.DECORATION, ItemManager.blocksBMD       , 3  , 0x00000000, ['Right','Arrow']                               )
        .addGravity(1518, ItemLayer.DECORATION, ItemManager.blocksBMD       , 285, 0x00000000, ['Down','Arrow']                                )
        .addGravity(4   , ItemLayer.DECORATION, ItemManager.blocksBMD       , 4  , 0x00000000, ['Dot']                                         )
        .addGravity(459 , ItemLayer.DECORATION, ItemManager.blocksBMD       , 233, 0x00000000, ['Slow','Dot','Climbable','Physics']            )
        .addGravity(411 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 312, 0x00000000, ['Invisible','Left','Arrow']                    )
        .addGravity(412 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 317, 0x00000000, ['Invisible','Up','Arrow']                      )
        .addGravity(413 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 322, 0x00000000, ['Invisible','Right','Arrow']                   )
        .addGravity(1519, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 652, 0x00000000, ['Invisible','Down','Arrow']                    )
        .addGravity(414 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 327, 0x00000000, ['Invisible','Dot']                             )
        .addGravity(460 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 466, 0x00000000, ['Slow','Dot','Climbable','Physics','Invisible']),
      new ItemBrickPackage('keys', 'Key Blocks', ['Key','Lock','Button','Action','Standard'])
        .addKeys(6  , 6  , 0xff2c1a1a, ['Red','Key','Magenta']   )
        .addKeys(7  , 7  , 0xff1a2c1a, ['Green','Key']           )
        .addKeys(8  , 8  , 0xff1a1a2c, ['Blue','Key']            )
        .addKeys(408, 189, 0xff0c2d3d, ['Cyan','Teal']           )
        .addKeys(409, 190, 0xff400c40, ['Pink','Violet','Purple'])
        .addKeys(410, 191, 0xff2c330a, ['Yellow','Key']          ),
      new ItemBrickPackage('gates', 'Gate Blocks', ['Key','Lock','Action','Standard'])
        .addGates(26  , 26 , 0xff9c2d46, ['Red','Magenta']         )
        .addGates(27  , 27 , 0xff379c30, ['Green']                 )
        .addGates(28  , 28 , 0xff2d449c, ['Blue']                  )
        .addGates(1008, 195, 0xff2d8d99, ['Cyan','Teal']           )
        .addGates(1009, 196, 0xff912d99, ['Pink','Purple','Violet'])
        .addGates(1010, 197, 0xff97922d, ['Yellow']                ),
      new ItemBrickPackage('doors', 'Door Blocks', ['Key','Lock','Action','Standard'])
        .addDoors(23  , 23 , 0xff9c2d46, ['Red','Magenta']         )
        .addDoors(24  , 24 , 0xff379c30, ['Green']                 )
        .addDoors(25  , 25 , 0xff2d449c, ['Blue']                  )
        .addDoors(1005, 192, 0xff2d8d99, ['Cyan','Teal']           )
        .addDoors(1006, 193, 0xff912d99, ['Pink','Purple','Violet'])
        .addDoors(1007, 194, 0xff97922d, ['Yellow']                ),
      new ItemBrickPackage('coins', 'Coin Blocks', [])
        .addCoins(100, ItemLayer.ABOVE     , ItemManager.specialBlocksBMD, ''      , false, 0  , 0x00000000, ['Gold','G-Coins','Yellow','Money','Primary','Collect','Magic','Value','Standard']   , false, false)
        .addCoins(101, ItemLayer.ABOVE     , ItemManager.specialBlocksBMD, ''      , false, 13 , 0x00000000, ['Blue','B-Coin','Secondary','Money','Optional','Collect','Magic','Value','Standard'], false, false)
        .addCoins(110, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 'hidden', false, 26 , 0x00000000, []                                                                                   , true , true )
        .addCoins(111, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 'hidden', false, 39 , 0x00000000, []                                                                                   , true , true )
        .addCoins(165, ItemLayer.DECORATION, ItemManager.blocksBMD       , ''      , false, 139, 0xffb88e15, ['Gate','Yellow','Gold','Primary','Lock']                                            , false, false)
        .addCoins(43 , ItemLayer.DECORATION, ItemManager.blocksBMD       , ''      , true , 43 , 0xffb88e15, ['Door','Yellow','Gold','Primary','Lock']                                            , false, false)
        .addCoins(214, ItemLayer.DECORATION, ItemManager.blocksBMD       , ''      , true , 186, 0xff1c60f4, ['Gate','Blue','Optional','Lock']                                                    , false, false)
        .addCoins(213, ItemLayer.DECORATION, ItemManager.blocksBMD       , ''      , true , 185, 0xff1c60f4, ['Door','Blue','Optional','Lock']                                                    , false, false),
      new ItemBrickPackage('tools', 'Tool Blocks', [])
        .addTools(255 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ''                , 'players spawn here'                                , false, 127, ['Spawn','Start','Beginning','Enter']              )
        .addTools(1582, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , 'brickworldportal', 'a spawn point targetable by world portals'         , true , 354, ['Spawn','Start','Beginning','Enter','World','Red'])
        .addTools(360 , ItemLayer.ABOVE     , ItemManager.specialBlocksBMD, ''                , 'players respawn here when they die'                , false, 154, ['Checkpoint','Respawn','Safe','Enter','Save']     )
        .addTools(466 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ''                , 'resets the player\'s progress'                     , false, 288, ['Reset','Restart','Retry']                        )
        .addTools(1516, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , 'brickgodblock'   , 'gives the player god mode privileges'              , true , 320, ['God']                                            )
        .addTools(1583, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , 'brickmapblock'   , 'allows the player to use the minimap when disabled', true , 355, ['Map','Minimap']                                  ),
      new ItemBrickPackage('crown', 'Crown', [])
        .addCrown(5   , ItemLayer.DECORATION, ItemManager.blocksBMD        , ''              , 'awards the player a golden crown'                       , true , 5 , 0xff43391f, ['Crown','King','Gold','Action','Prize','Reward']          )
        .addCrown(1095, ItemLayer.DECORATION, ItemManager.doorBlocksBMD    , 'brickcrowndoor', ''                                                       , true , 40, 0x00000000, ['Crown','Gate','Gold','Yellow','Lock']                    )
        .addCrown(1094, ItemLayer.DECORATION, ItemManager.doorBlocksBMD    , 'brickcrowndoor', ''                                                       , true , 41, 0x00000000, ['Crown','Door','Gold','Yellow','Lock']                    )
        .addCrown(121 , ItemLayer.ABOVE     , ItemManager.completeBlocksBMD, ''              , 'gives the player a silver crown, displays a win message', false, 0 , 0x00000000, ['Crown','Trophy','Win','Complete','Finish','End','Reward'])
        .addCrown(1153, ItemLayer.DECORATION, ItemManager.doorBlocksBMD    , 'brickcrowndoor', ''                                                       , true , 42, 0x00000000, ['Crown','Gate','Silver','Lock']                           )
        .addCrown(1152, ItemLayer.DECORATION, ItemManager.doorBlocksBMD    , 'brickcrowndoor', ''                                                       , true , 43, 0x00000000, ['Crown','Door','Silver','Lock']                           ),
      new ItemBrickPackage('boost', 'Boost Arrows', ['Speed','Fast','Friction','Arrow','Motion','Action','Physics'])
        .addBoost(114, 157, ['Left']        )
        .addBoost(116, 159, ['Up','Above']  )
        .addBoost(115, 158, ['Right']       )
        .addBoost(117, 160, ['Down','Below']),
      new ItemBrickPackage('climbable', 'Climbable Blocks', ['Transportation','No','Gravity','Slow'])
        .addClimbable(118 , ItemManager.blocksBMD    , 'brickmedieval'  , true , 135, ['Chain','Vertical','Ninja']                                                         )
        .addClimbable(1534, ItemManager.decoBlocksBMD, 'brickindustrial', true , 331, ['Ladder','Vertical','Metal','Industrial']                                           )
        .addClimbable(120 , ItemManager.blocksBMD    , 'brickninja'     , true , 98 , ['Ladder','Vertical','Ninja']                                                        )
        .addClimbable(98  , ItemManager.blocksBMD    , ''               , true , 174, ['Vine','Vertical','Jungle','Environment']                                           )
        .addClimbable(99  , ItemManager.blocksBMD    , ''               , true , 175, ['Vine','Horizontal','Jungle','Environment']                                         )
        .addClimbable(424 , ItemManager.decoBlocksBMD, 'brickcowboy'    , true , 266, ['Rope','Vertical','Medieval','Ninja']                                               )
        .addClimbable(472 , ItemManager.blocksBMD    , 'brickfairytale' , false, 252, ['Ladder','Vine','Fairytale']                                                        )
        .addClimbable(1146, ItemManager.blocksBMD    , 'brickgarden'    , true , 303, ['Ladder','Vine','Lattice','Fence','Brown','Leaf','Leaves','Lattice','Wood','Garden'])
        .addClimbable(1563, ItemManager.blocksBMD    , 'brickgarden'    , true , 307, ['Ladder','Stalk','Vine','Vertical','Green','Bean','Garden']                         )
        .addClimbable(1602, ItemManager.blocksBMD    , 'brickdungeon'   , true , 315, ['Halloween','Dungeon','Chain']                                                      ),
      new ItemBrickPackage('switches', 'Switches', ['Lock','Action'])
        .addSwitches(113 , ItemManager.specialBlocksBMD, 'brickswitchpurple', true , 310, 0x00000000, ['Switch','Lever','Button','Purple','Violet']              )
        .addSwitches(1619, ItemManager.specialBlocksBMD, 'brickswitchpurple', true , 866, 0x00000000, ['Reset','Off','Switch','Lever','Button','Purple','Violet'])
        .addSwitches(185 , ItemManager.doorBlocksBMD   , 'brickswitchpurple', false, 8  , 0xff64419a, ['Switch','Gate','Purple','Violet']                        )
        .addSwitches(184 , ItemManager.doorBlocksBMD   , 'brickswitchpurple', false, 9  , 0xff64419a, ['Switch','Door','Purple','Violet']                        )
        .addSwitches(467 , ItemManager.specialBlocksBMD, 'brickswitchorange', true , 422, 0x00000000, ['Switch','Lever','Button','Orange']                       )
        .addSwitches(1620, ItemManager.specialBlocksBMD, 'brickswitchorange', true , 867, 0x00000000, ['Reset','Off','Switch','Lever','Button','Orange']         )
        .addSwitches(1080, ItemManager.doorBlocksBMD   , 'brickswitchorange', false, 38 , 0xffd7642f, ['Switch','Gate','Orange']                                 )
        .addSwitches(1079, ItemManager.doorBlocksBMD   , 'brickswitchorange', false, 39 , 0xffd7642f, ['Switch','Door','Orange']                                 ),
      new ItemBrickPackage('death', 'Death Doors/Gates (+10)', ['Lock','Die','Skull','Curse'])
        .addDeath(1012, 198, ['Gate','Off'])
        .addDeath(1011, 199, ['Door','On'] ),
      new ItemBrickPackage('zombie', 'Zombie Blocks', ['Blue','Grey','Gray'])
        .addZombie(422, ItemManager.effectBlocksBMD, 'infects the player with a horrible disease', 5 , 0x00000000, ['Effect','Death','Slow'])
        .addZombie(206, ItemManager.doorBlocksBMD  , ''                                          , 12, 0xff62747f, ['Gate']                 )
        .addZombie(207, ItemManager.doorBlocksBMD  , ''                                          , 13, 0xff62747f, ['Door']                 ),
      new ItemBrickPackage('teams', 'Team effect (+10)', ['Team','Grey','Gray'])
        .addTeams(423 , ItemManager.effectBlocksBMD, 'sets the player\'s team to the specified color', 6 , ['Effect','Separation'])
        .addTeams(1028, ItemManager.doorBlocksBMD  , ''                                              , 29, ['Gate','Lock','Off']  )
        .addTeams(1027, ItemManager.doorBlocksBMD  , ''                                              , 22, ['Door','Lock','On']   ),
      new ItemBrickPackage('timed', 'Timed Doors (+10)', ['Lock','Wait','Door','Gate','Grey','Gray'])
        .addTimed(157, false, 337, ['Off'])
        .addTimed(156, true , 332, ['On'] ),
      new ItemBrickPackage('music', 'Music Blocks', ['Sound','Entertainment','Note','Melody','Instrument'])
        .addMusic(77  , 'bricknode'  , 77 , ['Piano','Maestro'])
        .addMusic(83  , 'brickdrums' , 83 , ['Drums']          )
        .addMusic(1520, 'brickguitar', 286, ['Guitar']         ),
      new ItemBrickPackage('hazards', 'Hazard Blocks', ['Kill','Die','Respawn','Death','Trap','Fatal','Deadly'])
        .addHazards(361 , ItemLayer.DECORATION, 'brickspike'      , 157, ['Spikes','Morphable']                                                                                 )
        .addHazards(1580, ItemLayer.DECORATION, 'brickspike'      , 739, ['Spikes','Floating','Centre','Center','Central','Mine','Hover']                                       )
        .addHazards(1625, ItemLayer.DECORATION, 'brickspikesilver', 869, ['Spikes','Morphable']                                                                                 )
        .addHazards(1626, ItemLayer.DECORATION, 'brickspikesilver', 872, ['Spikes','Floating','Centre','Center','Central','Mine','Hover']                                       )
        .addHazards(1627, ItemLayer.DECORATION, 'brickspikeblack' , 874, ['Spikes','Morphable','Silver','Light','White','Gray','Grey']                                          )
        .addHazards(1628, ItemLayer.DECORATION, 'brickspikeblack' , 877, ['Spikes','Floating','Centre','Center','Central','Mine','Hover','Silver','Light','White','Gray','Grey'])
        .addHazards(1629, ItemLayer.DECORATION, 'brickspikered'   , 879, ['Spikes','Morphable','Black','Dark','Gray','Grey']                                                    )
        .addHazards(1630, ItemLayer.DECORATION, 'brickspikered'   , 882, ['Spikes','Floating','Centre','Center','Central','Mine','Hover','Black','Dark','Gray','Grey']          )
        .addHazards(1631, ItemLayer.DECORATION, 'brickspikegold'  , 884, ['Spikes','Morphable','Yellow','Gold']                                                                 )
        .addHazards(1632, ItemLayer.DECORATION, 'brickspikegold'  , 887, ['Spikes','Floating','Centre','Center','Central','Mine','Hover','Yellow','Gold']                       )
        .addHazards(1633, ItemLayer.DECORATION, 'brickspikegreen' , 889, ['Spikes','Morphable','Green']                                                                         )
        .addHazards(1634, ItemLayer.DECORATION, 'brickspikegreen' , 892, ['Spikes','Floating','Centre','Center','Central','Mine','Hover','Green']                               )
        .addHazards(1635, ItemLayer.DECORATION, 'brickspikeblue'  , 894, ['Spikes','Morphable','Blue']                                                                          )
        .addHazards(1636, ItemLayer.DECORATION, 'brickspikeblue'  , 897, ['Spikes','Floating','Centre','Center','Central','Mine','Hover','Blue']                                )
        .addHazards(368 , ItemLayer.ABOVE     , 'brickfire'       , 188, ['Fire','Burn','Flames','Animated','Hell']                                                             ),
      new ItemBrickPackage('liquids', 'Liquid Blocks', ['Transportation','Swim','Fluid','Action','Environment'])
        .addLiquids(119 , ItemManager.specialBlocksBMD, ''          , ''                                   , 196, ['Water','Blue','Up','Float']                                )
        .addLiquids(416 , ItemManager.specialBlocksBMD, 'bricklava' , 'sets the player on fire and kills'  , 218, ['Lava','Hazard','Die','Orange','Death','Burn','Sink','Hell'])
        .addLiquids(369 , ItemManager.mudBlocksBMD    , 'brickswamp', 'slows the player down'              , 0  , ['Mud','Swamp','Bog','Slow','Brown','Sink']                  )
        .addLiquids(1585, ItemManager.specialBlocksBMD, 'bricktoxic', 'kills the player instantly on touch', 746, ['Toxic','Waste','Slow','Green']                             ),
      new ItemBrickPackage('portals', 'Portal Blocks', ['Teleport'])
        .addPortals(381, 'brickinvisibleportal', 'teleports the player to another portal', false, 138, 0x00000000, ['Invisible','Secrets','Hidden'])
        .addPortals(242, 'brickportal'         , 'teleports the player to another portal', false, 52 , -1        , ['Visible','Blue']              )
        .addPortals(374, 'brickworldportal'    , 'teleports the player to another world' , true , 113, -1        , ['World','Red']                 ),
      new ItemBrickPackage('diamond', 'Diamond (+1)', ['Exclusive'])
        .addDiamond(),
      new ItemBrickPackage('cake', 'Cake', [])
        .addCake(),
      new ItemBrickPackage('hologram', 'Hologram', [])
        .addHologram(),
      new ItemBrickPackage('christmas 2010', 'Christmas 2010 Blocks', ['Holiday','Xmas','Winter'])
        .addXmas2010(249, 121, ['Snow','Left','Corner','Snowdrift','Environment']              )
        .addXmas2010(250, 122, ['Snow','Right','Corner','Snowdrift','Environment']             )
        .addXmas2010(251, 123, ['Tree','Plant','Nature','Spruce','Environment']                )
        .addXmas2010(252, 124, ['Tree','Snow','Plant','Lights','Spruce','Nature','Environment'])
        .addXmas2010(253, 125, ['Fence','Snow','Wood']                                         )
        .addXmas2010(254, 126, ['Fence','Wood']                                                ),
      new ItemBrickPackage('new year 2010', 'New Year 2010', ['Holiday','Baubles','Ornament','Light','Bulb'])
        .addNewYear2010(244, 116, ['Pink','Violet','Purple'])
        .addNewYear2010(245, 117, ['Yellow']                )
        .addNewYear2010(246, 118, ['Blue']                  )
        .addNewYear2010(247, 119, ['Red']                   )
        .addNewYear2010(248, 120, ['Green']                 ),
      new ItemBrickPackage('spring 2011', 'Spring package 2011', ['Season','Nature','Plant','Environment'])
        .addSpring2011(233, 105, ['Grass','Left','Grass','Short']                    )
        .addSpring2011(234, 106, ['Grass','Middle','Short']                          )
        .addSpring2011(235, 107, ['Grass','Right','Short']                           )
        .addSpring2011(236, 108, ['Grass','Hedge','Left','Big','Tall Grass','Bush']  )
        .addSpring2011(237, 109, ['Grass','Hedge','Middle','Big','Tall Grass','Bush'])
        .addSpring2011(238, 110, ['Grass','Hedge','Right','Big','Tall Grass','Bush'] )
        .addSpring2011(239, 111, ['Flower','Sun','Yellow','Flora']                   )
        .addSpring2011(240, 112, ['Bush','Plant','Shrub','Flora']                    ),
      new ItemBrickPackage('Prizes', 'Your Prizes', ['Prize'])
        .addPrizes(223 , 'brickhwtrophy'          , 'trophy for the Halloween 2011 contest winners'             , 95 , ['Cup','Trophy','Halloween','Gold','Thanel'])
        .addPrizes(478 , 'brickspringtrophybronze', 'prize for winning third place in the Spring 2016 contest'  , 298, ['Trophy','Bronze','Spring','Flower']       )
        .addPrizes(479 , 'brickspringtrophysilver', 'prize for winning second place in the Spring 2016 contest ', 297, ['Trophy','Silver','Spring','Flower']       )
        .addPrizes(480 , 'brickspringtrophygold'  , 'prize for winning first place in the Spring 2016 contest'  , 296, ['Trophy','Gold','Spring','Flower']         )
        .addPrizes(484 , 'bricksummertrophybronze', 'prize for winning third place in the Summer 2016 contest'  , 301, ['Trophy','Bronze','Summer','Sun']          )
        .addPrizes(485 , 'bricksummertrophysilver', 'prize for winning second place in the Summer 2016 contest ', 300, ['Trophy','Silver','Summer','Sun']          )
        .addPrizes(486 , 'bricksummertrophygold'  , 'prize for winning first place in the Summer 2016 contest'  , 299, ['Trophy','Gold','Summer','Sun']            )
        .addPrizes(1540, 'brickdesigntrophybronze', 'prize for winning third place in the Design contest'       , 338, ['Trophy','Bronze','Design']                )
        .addPrizes(1541, 'brickdesigntrophysilver', 'prize for winning second place in the Design contest'      , 337, ['Trophy','Silver','Design']                )
        .addPrizes(1542, 'brickdesigntrophygold'  , 'prize for winning first place in the Design contest'       , 336, ['Trophy','Gold','Design']                  ),
      new ItemBrickPackage('easter 2012', 'Easter  decorations 2012', ['Holiday','Decor','Egg'])
        .addEaster2012(256, 128, ['Cyan','Teal','Wavy']   )
        .addEaster2012(257, 129, ['Pink','Wavy']          )
        .addEaster2012(258, 130, ['Green','Line','Yellow'])
        .addEaster2012(259, 131, ['Pink','Stripes']       )
        .addEaster2012(260, 132, ['Green','Dots']         ),
      new ItemBrickPackage('basic', 'Basic Background Blocks', [])
        .addBasicBg(715, 209, ['White','Light']                   )
        .addBasicBg(500, 0  , ['Gray','Grey']                     )
        .addBasicBg(645, 139, ['Black','Dark','Shadow']           )
        .addBasicBg(503, 3  , ['Red']                             )
        .addBasicBg(644, 138, ['Orange']                          )
        .addBasicBg(504, 4  , ['Yellow','Lime','Green']           )
        .addBasicBg(505, 5  , ['Green','Backdrop']                )
        .addBasicBg(506, 6  , ['Cyan','Teal','Turquoise','Blue']  )
        .addBasicBg(501, 1  , ['Blue']                            )
        .addBasicBg(502, 2  , ['Purple','Magenta','Pink','Violet']),
      new ItemBrickPackage('beta', 'Beta Access', ['Exclusive'])
        .addBetaBg(743, 237, ['White','Light']                                    )
        .addBetaBg(744, 238, ['Grey','Gray','Taupe']                              )
        .addBetaBg(745, 239, ['Black','Dark','Onyx']                              )
        .addBetaBg(746, 240, ['Red','Ruby','Garnet']                              )
        .addBetaBg(747, 241, ['Orange','Copper']                                  )
        .addBetaBg(748, 242, ['Yellow','Gold','Jasmine']                          )
        .addBetaBg(749, 243, ['Green','Emerald','Malachite']                      )
        .addBetaBg(750, 244, ['Blue','Cyan','Light blue','Aquamarine','Turquoise'])
        .addBetaBg(751, 245, ['Blue','Sapphire']                                  )
        .addBetaBg(752, 246, ['Purple','Pink','Magenta','Violet','Amethyst']      ),
      new ItemBrickPackage('brick', 'Brick Background Blocks', [])
        .addBrickBg(716, false, 210, 0xff5b5b5b, ['White','Light']                 )
        .addBrickBg(646, true , 140, 0xff282828, ['Gray','Grey']                   )
        .addBrickBg(648, true , 142, 0xff0f0f0f, ['Black','Dark','Shadow']         )
        .addBrickBg(511, false, 11 , -1        , ['Red']                           )
        .addBrickBg(507, false, 7  , -1        , ['Orange','Brown','Dirt','Soil']  )
        .addBrickBg(512, false, 12 , -1        , ['Yellow','Soil','Brown']         )
        .addBrickBg(510, false, 10 , -1        , ['Green','Lime']                  )
        .addBrickBg(508, false, 8  , -1        , ['Cyan','Teal','Turquoise','Blue'])
        .addBrickBg(647, true , 141, -1        , ['Blue']                          )
        .addBrickBg(509, false, 9  , -1        , ['Magenta','Purple','Violet']     ),
      new ItemBrickPackage('checker', 'Checker Backgrounds', ['Checkered'])
        .addCheckerBg(718, false, 212, ['White','Light']                   )
        .addCheckerBg(513, false, 13 , ['Gray','Grey','Shadow']            )
        .addCheckerBg(650, true , 144, ['Black','Dark','Shadow']           )
        .addCheckerBg(516, false, 16 , ['Red','Pink']                      )
        .addCheckerBg(649, true , 143, ['Orange']                          )
        .addCheckerBg(517, false, 17 , ['Yellow','Lime']                   )
        .addCheckerBg(518, false, 18 , ['Green']                           )
        .addCheckerBg(519, false, 19 , ['Cyan','Teal','Turquoise','Blue']  )
        .addCheckerBg(514, false, 14 , ['Blue']                            )
        .addCheckerBg(515, false, 15 , ['Purple','Magenta','Pink','Violet']),
      new ItemBrickPackage('dark', 'Solid Dark Backgrounds', ['Solid'])
        .addDark(719, false, 213, ['White','Light']                   )
        .addDark(520, false, 20 , ['Gray','Grey','Shadow']            )
        .addDark(652, true , 146, ['Black','Dark','Shadow']           )
        .addDark(523, false, 23 , ['Red']                             )
        .addDark(651, true , 145, ['Orange']                          )
        .addDark(524, false, 24 , ['Yellow','Lime']                   )
        .addDark(525, false, 25 , ['Green']                           )
        .addDark(526, false, 26 , ['Cyan','Teal','Turquoise','Blue']  )
        .addDark(521, false, 21 , ['Blue']                            )
        .addDark(522, false, 22 , ['Purple','Magenta','Pink','Violet']),
      new ItemBrickPackage('normal', 'Solid backrounds', ['Solid'])
        .addNormal(717, false, 211, ['White','Light']                   )
        .addNormal(610, true , 110, ['Gray','Grey','Shadow']            )
        .addNormal(654, true , 148, ['Black','Dark','Shadow']           )
        .addNormal(613, true , 113, ['Red']                             )
        .addNormal(653, true , 147, ['Orange']                          )
        .addNormal(614, true , 114, ['Yellow','Lime']                   )
        .addNormal(615, true , 115, ['Green']                           )
        .addNormal(616, true , 116, ['Cyan','Teal','Turquoise','Blue']  )
        .addNormal(611, true , 111, ['Blue']                            )
        .addNormal(612, true , 112, ['Purple','Magenta','Pink','Violet']),
      new ItemBrickPackage('pastel', 'Pretty Pastel Backgrounds', ['Solid','Bright'])
        .addPastel(532, 32 , ['Pink','Red','Magenta']   )
        .addPastel(676, 170, ['Orange']                 )
        .addPastel(527, 27 , ['Yellow']                 )
        .addPastel(529, 29 , ['Yellow','Green','Lime']  )
        .addPastel(528, 28 , ['Green']                  )
        .addPastel(530, 30 , ['Cyan','Light Blue','Sky'])
        .addPastel(531, 31 , ['Blue','Sky']             )
        .addPastel(677, 171, ['Purple']                 ),
      new ItemBrickPackage('canvas', 'Canvas Backgrounds', ['Rough','Textured'])
        .addCanvas(538, 38 , ['Gray','Grey']              )
        .addCanvas(671, 165, ['Red']                      )
        .addCanvas(533, 33 , ['Orange']                   )
        .addCanvas(534, 34 , ['Beige','Brown','Tan']      )
        .addCanvas(535, 35 , ['Yellow']                   )
        .addCanvas(536, 36 , ['Green']                    )
        .addCanvas(537, 37 , ['Cyan','Light Blue','Water'])
        .addCanvas(606, 106, ['Blue']                     )
        .addCanvas(672, 166, ['Purple','Violet']          ),
      new ItemBrickPackage('carnival', 'Carnival backgrounds', [])
        .addCarnival(545, 45 , ['Stripes','Red','Yellow','McDonald\'s'])
        .addCarnival(546, 46 , ['Stripes','Purple','Violet','Dark']    )
        .addCarnival(547, 47 , ['Magenta','Pink']                      )
        .addCarnival(548, 48 , ['Checker','Black','White','Double']    )
        .addCarnival(549, 49 , ['Green']                               )
        .addCarnival(558, 58 , ['Yellow']                              )
        .addCarnival(563, 63 , ['Poland','Stripes','Red','White']      )
        .addCarnival(607, 107, ['Blue','Solid']                        ),
      new ItemBrickPackage('candy', 'CandyLand', ['Sweet','Sugar','Food'])
        .addCandy(60  , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 60 , -1        , ['Pink','Cotton Candy','Fairy Floss','Stripes','Pastel'])
        .addCandy(1154, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 310, -1        , ['Blue','Cotton Candy','Fairy Floss','Stripes','Pastel'])
        .addCandy(61  , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 61 , -1        , ['Platform','Magenta','Pink','One-Way']                 )
        .addCandy(62  , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 62 , -1        , ['Platform','Red','One-Way','One way']                  )
        .addCandy(63  , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 63 , -1        , ['Platform','Cyan','One-Way','One way']                 )
        .addCandy(64  , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 64 , -1        , ['Platform','Green','One-Way','One way']                )
        .addCandy(65  , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 65 , -1        , ['Candy','Cane','Red','White','Stripes']                )
        .addCandy(66  , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 66 , -1        , ['Cake','Licorice','Hamburger','Sandwich','Stripes']    )
        .addCandy(67  , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 67 , -1        , ['Gingerbread','Chocolate','Brown','Cake','Dirt']       )
        .addCandy(227 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 99 , 0x00000000, ['Cream','Small','Creme','Whipped Topping','White']     )
        .addCandy(431 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 273, 0x00000000, ['Cream','Big','Creme','Whipped Topping','White']       )
        .addCandy(432 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 274, 0x00000000, ['Gumdrop','Red']                                       )
        .addCandy(433 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 275, 0x00000000, ['Gumdrop','Green']                                     )
        .addCandy(434 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 276, 0x00000000, ['Gumdrop','Pink']                                      )
        .addCandy(539 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 39 , -1        , ['Stripes','Pink','Pastel']                             )
        .addCandy(540 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 40 , -1        , ['Stripes','Blue','Pastel']                             ),
      new ItemBrickPackage('summer 2011', 'Summer package 2011', ['Season','Hot','Beach'])
        .addSummer2011(59 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 59 , -1        , ['Sand','Environment']                                              )
        .addSummer2011(228, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 100, 0x00000000, ['Umbrella','Parasol','Beach','Sun']                                )
        .addSummer2011(229, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 101, 0x00000000, ['Left','Sand','Corner','Dune','Environment']                       )
        .addSummer2011(230, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 102, 0x00000000, ['Right','Sand','Corner','Dune','Environment']                      )
        .addSummer2011(231, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 103, 0x00000000, ['Rock','Stone','Environment']                                      )
        .addSummer2011(232, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 104, 0x00000000, ['Bush','Nature','Plant','Yellow','Dead','Tumbleweed','Environment']),
      new ItemBrickPackage('halloween 2011', 'Halloween pack', ['Scary','Holiday','Creepy'])
        .addHalloween2011(68 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 68, -1        , ['Brick','Gray','Grey','Bloody','Wall','House']     )
        .addHalloween2011(69 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 69, -1        , ['Basic','Gray','Grey']                             )
        .addHalloween2011(224, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 96, 0x00000000, ['Grave','Tombstone','Headstone','Marker','Dead']   )
        .addHalloween2011(225, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 97, 0x00000000, ['Cobweb','Spider Web','Right','Corner']            )
        .addHalloween2011(226, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 98, 0x00000000, ['Cobweb','Spider Web','Left','Corner']             )
        .addHalloween2011(541, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 41, -1        , ['Stone','Gray','Grey']                             )
        .addHalloween2011(542, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 42, -1        , ['Brick','Gray','Grey','House']                     )
        .addHalloween2011(543, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 43, -1        , ['Brick','Damaged','Right','Ruins','Corner','House'])
        .addHalloween2011(544, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 44, -1        , ['Brick','Damaged','Left','Ruins','Corner','House'] ),
      new ItemBrickPackage('christmas 2011', 'XMAS  decorations', ['2011','Xmas','Bauble','Ornament','Holiday'])
        .addXmas2011Deco(218, 90, ['Red','Bulb','Round','Holiday','Circle']      )
        .addXmas2011Deco(219, 91, ['Green','Bulb','Round','Holiday','Circle']    )
        .addXmas2011Deco(220, 92, ['Blue','Bulb','Round','Holiday','Circle']     )
        .addXmas2011Deco(221, 93, ['Circle','Wreath','Garland','Holiday','Green'])
        .addXmas2011Deco(222, 94, ['Star','Yellow','Night','Sky']                ),
      new ItemBrickPackage('sci-fi', 'Sci-Fi Package', ['Future','Science Fiction','Alien','UFO'])
        .addSciFi(84  , ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 84 , -1        , ['Red','Screen','Panel']                                             )
        .addSciFi(85  , ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 85 , -1        , ['Blue','Screen','Panel']                                            )
        .addSciFi(1150, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 308, -1        , ['Green','Screen','Panel']                                           )
        .addSciFi(1151, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 309, -1        , ['Yellow','Screen','Panel']                                          )
        .addSciFi(1162, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 317, -1        , ['Magenta','Pink','Purple','Screen','Panel']                         )
        .addSciFi(1163, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 318, -1        , ['Cyan','Screen','Panel']                                            )
        .addSciFi(86  , ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 86 , -1        , ['Metal','Gray','Bumpy','Grey']                                      )
        .addSciFi(87  , ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 87 , 0xffffffff, ['Metal','White','Grey','Gray']                                      )
        .addSciFi(88  , ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 88 , -1        , ['Brown','Camouflauge','Leopard','Carpet']                           )
        .addSciFi(89  , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , 89 , -1        , ['Platform','Red','One-way','One way']                               )
        .addSciFi(90  , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , 90 , -1        , ['Platform','Blue','One-way','One way']                              )
        .addSciFi(91  , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , 91 , -1        , ['Platform','Green','One-way','One way']                             )
        .addSciFi(1051, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , 234, -1        , ['Platform','Yellow','One-way','One way']                            )
        .addSciFi(1164, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , 319, -1        , ['Platform','Magenta','Pink','Purple','One-way','One way']           )
        .addSciFi(1165, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , 320, -1        , ['Platform','Cyan','One-way','One way']                              )
        .addSciFi(375 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 177, 0x00000000, ['Morphable','Laser','Neon','Blue','Flourescent','Corner']           )
        .addSciFi(376 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 181, 0x00000000, ['Morphable','Laser','Neon','Blue','Flourescent','Middle']           )
        .addSciFi(379 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 169, 0x00000000, ['Morphable','Laser','Neon','Green','Flourescent','Corner']          )
        .addSciFi(380 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 173, 0x00000000, ['Morphable','Laser','Neon','Green','Flourescent','Middle']          )
        .addSciFi(377 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 161, 0x00000000, ['Morphable','Laser','Neon','Yellow','Orange','Flourescent','Corner'])
        .addSciFi(378 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 165, 0x00000000, ['Morphable','Laser','Neon','Yellow','Orange','Flourescent','Middle'])
        .addSciFi(438 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 409, 0x00000000, ['Morphable','Laser','Neon','Red','Pink','Flourescent','Corner']     )
        .addSciFi(439 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 413, 0x00000000, ['Morphable','Laser','Neon','Red','Pink','Flourescent','Middle']     )
        .addSciFi(637 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, 131, 0xff737d81, ['Gray','Outline','Grey']                                            ),
      new ItemBrickPackage('prison', 'Prison', ['Cell','Jail'])
        .addPrison(261, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 133, 0x00000000, ['Bars','Metal']                                      )
        .addPrison(92 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 92 , -1        , ['Wall','Brick','Grey','Gray','House']                )
        .addPrison(550, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 50 , -1        , ['Wall','Brick','Background','Grey','Gray','House']   )
        .addPrison(551, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 51 , -1        , ['Window','Light','Orange','Brick']                   )
        .addPrison(552, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 52 , -1        , ['Window','Light','Blue','Brick']                     )
        .addPrison(553, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 53 , -1        , ['Window','Dark','Vent','Brick','Grey','Gray','Drain']),
      new ItemBrickPackage('windows', 'Colored Windows', ['Glass'])
        .addWindows(262, 134, ['Transparent','Clear','Black','Dark']                  )
        .addWindows(268, 140, ['Transparent','Red','Pink']                            )
        .addWindows(269, 141, ['Transparent','Orange']                                )
        .addWindows(270, 142, ['Transparent','Yellow']                                )
        .addWindows(263, 135, ['Transparent','Green']                                 )
        .addWindows(264, 136, ['Transparent','Turquoise','Cyan','Teal','Blue','Green'])
        .addWindows(265, 137, ['Transparent','Blue']                                  )
        .addWindows(266, 138, ['Transparent','Purple','Violet','Indigo']              )
        .addWindows(267, 139, ['Transparent','Pink','Magenta']                        ),
      new ItemBrickPackage('pirate', 'Pirate Pack', [])
        .addPirate(93 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 93 , -1        , ['Wood','Planks','Board','Siding','Navy','House']               )
        .addPirate(94 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 94 , -1        , ['Chest','Treasure','Loot','Booty','Navy']                      )
        .addPirate(154, ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 131, 0x00000000, ['Platform','Wood','Ship','Navy','One Way','One-Way']           )
        .addPirate(271, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 143, 0x00000000, ['Wood','Decoration','Navy']                                    )
        .addPirate(272, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 144, 0x00000000, ['Skull','Head','Skeleton','Creepy','Death']                    )
        .addPirate(435, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 277, 0x00000000, ['Cannon','Sea war','Gun','Ship','Navy']                        )
        .addPirate(436, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 278, 0x00000000, ['Port Window','Porthole','Ship','Navy']                        )
        .addPirate(554, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 54 , -1        , ['Wood','Dark','Planks','Board','Ship','House','Siding','Navy'] )
        .addPirate(555, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 55 , -1        , ['Wood','Light','Planks','Board','Ship','House','Siding','Navy'])
        .addPirate(559, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 59 , -1        , ['Wood','Dark','Planks','Board','Ship','House','Siding','Navy'] )
        .addPirate(560, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 60 , -1        , ['Flag','Jolly Roger','Skull','Ship','Navy']                    ),
      new ItemBrickPackage('stone', 'Stone Pack', ['Cave','Rocks','Environment','House'])
        .addStone(95  , ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 95 , ['Gray','Grey']              )
        .addStone(1044, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 226, ['Green','Limestone']        )
        .addStone(1045, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 227, ['Brown','Dirt']             )
        .addStone(1046, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 228, ['Blue']                     )
        .addStone(561 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 61 , ['Dark','Gray','Grey']       )
        .addStone(562 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 62 , ['Half','Dark','Gray','Grey'])
        .addStone(688 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 182, ['Green','Limestone']        )
        .addStone(689 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 183, ['Half','Limestone']         )
        .addStone(690 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 184, ['Brown']                    )
        .addStone(691 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 185, ['Half','Brown']             )
        .addStone(692 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 186, ['Blue']                     )
        .addStone(693 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 187, ['Half']                     ),
      new ItemBrickPackage('dojo', 'Dojo Pack', ['Ninja','Asian','Japanese','Kung Fu'])
        .addDojo(96 , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 96 , 0x00000000, ['Platform','White','One-way','One way']                        )
        .addDojo(97 , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 97 , 0x00000000, ['Platform','Gray','Grey','One-way','One way']                  )
        .addDojo(564, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 64 , -1        , ['White']                                                       )
        .addDojo(565, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 65 , -1        , ['Grey','Gray']                                                 )
        .addDojo(566, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 66 , -1        , ['Roof','Blue','Tile','Shingles','House']                       )
        .addDojo(567, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 67 , -1        , ['Roof','Blue','Dark','Tile','Shingles','House']                )
        .addDojo(667, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 161, -1        , ['Roof','Red','Tile','Shingles','House']                        )
        .addDojo(668, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 162, -1        , ['Roof','Red','Dark','Tile','Shingles','House']                 )
        .addDojo(669, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 163, -1        , ['Roof','Green','Tile','Shingles','House']                      )
        .addDojo(670, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 164, -1        , ['Roof','Green','Dark','Tile','Shingles','House']               )
        .addDojo(276, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 389, 0x00000000, ['Morphable','Fin','Left','Blue','Green','Red','Corner']        )
        .addDojo(277, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 392, 0x00000000, ['Morphable','Fin','Right','Blue','Green','Red','Corner']       )
        .addDojo(278, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 150, 0x00000000, ['Window','Open','House']                                       )
        .addDojo(279, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 395, 0x00000000, ['Morphable','Fin','Left','Dark','Blue','Green','Red','Corner'] )
        .addDojo(280, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 398, 0x00000000, ['Morphable','Fin','Right','Dark','Blue','Green','Red','Corner'])
        .addDojo(281, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 153, 0x00000000, ['Window','Dark','Open','House']                                )
        .addDojo(282, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 154, 0x00000000, ['Character','Chinese']                                         )
        .addDojo(283, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 155, 0x00000000, ['Character','Chinese']                                         )
        .addDojo(284, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 156, 0x00000000, ['Yin Yang','Chinese','White','Black white']                    ),
      new ItemBrickPackage('wild west', 'Wild West Pack', ['Cowboy','Western','House'])
        .addWildWest(122 , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 99 , 0x00000000, ['Brown','Wood','Platform','One way','One-Way']       )
        .addWildWest(123 , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 100, 0x00000000, ['Red','Wood','Platform','One way','One-Way']         )
        .addWildWest(124 , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 101, 0x00000000, ['Blue','Wood','Platform','One way','One-Way']        )
        .addWildWest(125 , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 102, 0x00000000, ['Dark','Brown','Wood','Platform','One way','One-Way'])
        .addWildWest(126 , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 103, 0x00000000, ['Dark','Red','Wood','Platform','One way','One-Way']  )
        .addWildWest(127 , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 104, 0x00000000, ['Dark','Blue','Wood','Platform','One way','One-Way'] )
        .addWildWest(568 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 68 , -1        , ['Siding','Wood','Brown','Planks','Ship','Board']     )
        .addWildWest(569 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 69 , -1        , ['Siding','Wood','Dark Brown','Planks','Ship','Board'])
        .addWildWest(570 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 70 , -1        , ['Siding','Wood','Red','Planks','Board','Board']      )
        .addWildWest(571 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 71 , -1        , ['Siding','Wood','Dark Red','Planks','Board']         )
        .addWildWest(572 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 72 , -1        , ['Siding','Wood','Blue','Planks','Board']             )
        .addWildWest(573 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 73 , -1        , ['Siding','Wood','Dark Blue','Planks','Board']        )
        .addWildWest(285 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 157, 0x00000000, ['Pole','White']                                      )
        .addWildWest(286 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 158, 0x00000000, ['Pole','Gray','Dark','Grey']                         )
        .addWildWest(1521, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 321, 0x00000000, ['Pole','White']                                      )
        .addWildWest(1522, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 322, 0x00000000, ['Pole','Gray','Dark','Grey']                         )
        .addWildWest(287 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 159, 0x00000000, ['Door','Wood','Brown','Left']                        )
        .addWildWest(288 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 160, 0x00000000, ['Door','Wood','Brown','Right']                       )
        .addWildWest(289 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 161, 0x00000000, ['Door','Wood','Red','Left']                          )
        .addWildWest(290 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 162, 0x00000000, ['Door','Wood','Red','Right']                         )
        .addWildWest(291 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 163, 0x00000000, ['Door','Wood','Blue','Left']                         )
        .addWildWest(292 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 164, 0x00000000, ['Door','Wood','Blue','Right']                        )
        .addWildWest(293 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 165, 0x00000000, ['Window','Curtains']                                 )
        .addWildWest(294 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 166, 0x00000000, ['Fence','Wood','Brown']                              )
        .addWildWest(295 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 167, 0x00000000, ['Fence','Wood','Brown']                              )
        .addWildWest(296 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 168, 0x00000000, ['Fence','Wood','Red']                                )
        .addWildWest(297 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 169, 0x00000000, ['Fence','Wood','Red']                                )
        .addWildWest(298 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 170, 0x00000000, ['Fence','Wood','Blue']                               )
        .addWildWest(299 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 171, 0x00000000, ['Fence','Wood','Blue']                               ),
      new ItemBrickPackage('plastic', 'Plastic Pack', ['Neon','Bright'])
        .addPlastic(129, 106, ['Red']                       )
        .addPlastic(135, 112, ['Orange']                    )
        .addPlastic(130, 107, ['Yellow']                    )
        .addPlastic(128, 105, ['Green','Light Green','Lime'])
        .addPlastic(134, 111, ['Green']                     )
        .addPlastic(131, 108, ['Light Blue','Cyan']         )
        .addPlastic(132, 109, ['Blue','Indigo']             )
        .addPlastic(133, 110, ['Purple','Magenta','Pink']   ),
      new ItemBrickPackage('water', 'Water pack', ['Sea','Ocean','Nature','Environment'])
        .addWater(300, ItemLayer.ABOVE     , ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 234, 0x00000000, ['Waves','Animated']       )
        .addWater(574, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 74 , 0xff75dae7, []                         )
        .addWater(575, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 75 , 0xff75dae7, ['Octopus','Squid']        )
        .addWater(576, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 76 , 0xff75dae7, ['Fish']                   )
        .addWater(577, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 77 , 0xff75dae7, ['Seahorse']               )
        .addWater(578, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 78 , 0xff75dae7, ['Seaweed','Plant','Algae']),
      new ItemBrickPackage('sand', 'Sand Pack', ['Desert','Beach','Environment','Soil'])
        .addSand(137, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 114, -1        , ['White','Beige']      )
        .addSand(138, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 115, -1        , ['Grey','Gray']        )
        .addSand(139, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 116, -1        , ['Yellow']             )
        .addSand(140, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 117, -1        , ['Yellow','Orange']    )
        .addSand(141, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 118, -1        , ['Brown','Light']      )
        .addSand(142, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 119, -1        , ['Brown','Dark','Dirt'])
        .addSand(579, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 79 , -1        , ['Off-white']          )
        .addSand(580, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 80 , -1        , ['Gray','Grey']        )
        .addSand(581, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 81 , -1        , ['Yellow']             )
        .addSand(582, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 82 , -1        , ['Orange','Yellow']    )
        .addSand(583, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 83 , -1        , ['Brown','Light']      )
        .addSand(584, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 84 , -1        , ['Brown','Dark']       )
        .addSand(301, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 172, 0x00000000, ['White']              )
        .addSand(302, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 173, 0x00000000, ['Gray','Grey']        )
        .addSand(303, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 174, 0x00000000, ['Yellow']             )
        .addSand(304, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 175, 0x00000000, ['Yellow','Orange']    )
        .addSand(305, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 176, 0x00000000, ['Brown','Light']      )
        .addSand(306, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 177, 0x00000000, ['Brown','Dark']       ),
      new ItemBrickPackage('summer 2012', 'Summer pack 2012', ['Season','Beach'])
        .addSummer2012(307, 178, ['Beach','Ball','Toy','Ball']                            )
        .addSummer2012(308, 179, ['Pail','Bucket','Toy','Sand']                           )
        .addSummer2012(309, 180, ['Shovel','Dig','Toy','Sand']                            )
        .addSummer2012(310, 181, ['Drink','Margarita','Umbrella','Cocktail','Glass','Cup']),
      new ItemBrickPackage('cloud', 'Cloud Pack', ['Sky','Environment'])
        .addCloud(143 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 120, -1        , ['Center','Middle','White']                           )
        .addCloud(311 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 182, 0x00000000, ['Top','Side','White']                                )
        .addCloud(312 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 183, 0x00000000, ['Bottom','Side','White']                             )
        .addCloud(313 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 184, 0x00000000, ['Left','Side','White']                               )
        .addCloud(314 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 185, 0x00000000, ['Right','Side','White']                              )
        .addCloud(315 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 186, 0x00000000, ['Top right','Corner','White']                        )
        .addCloud(316 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 187, 0x00000000, ['Top left','Corner','White']                         )
        .addCloud(317 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 188, 0x00000000, ['Bottom left','Corner','White']                      )
        .addCloud(318 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 189, 0x00000000, ['Bottom right','Corner','White']                     )
        .addCloud(1126, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 287, -1        , ['Center','Middle','Dark','Grey','Gray','Storm']      )
        .addCloud(1523, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 323, 0x00000000, ['Top','Side','Dark','Grey','Gray','Storm']           )
        .addCloud(1524, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 324, 0x00000000, ['Bottom','Side','Dark','Grey','Gray','Storm']        )
        .addCloud(1525, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 325, 0x00000000, ['Left','Side','Dark','Grey','Gray','Storm']          )
        .addCloud(1526, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 326, 0x00000000, ['Right','Side','Dark','Grey','Gray','Storm']         )
        .addCloud(1527, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 327, 0x00000000, ['Top right','Corner','Dark','Grey','Gray','Storm']   )
        .addCloud(1528, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 328, 0x00000000, ['Top left','Corner','Dark','Grey','Gray','Storm']    )
        .addCloud(1529, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 329, 0x00000000, ['Bottom left','Corner','Dark','Grey','Gray','Storm'] )
        .addCloud(1530, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 330, 0x00000000, ['Bottom right','Corner','Dark','Grey','Gray','Storm']),
      new ItemBrickPackage('industrial', 'Industrial Package', ['Factory'])
        .addIndustrial(144 , ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 121, -1        , ['Diamond plating','Plate','Metal']                                 )
        .addIndustrial(145 , ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 122, -1        , ['Wiring','Wires','Metal']                                          )
        .addIndustrial(585 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 85 , -1        , ['Plate','Metal']                                                   )
        .addIndustrial(586 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 86 , -1        , ['Gray','Steel','Plate','Metal']                                    )
        .addIndustrial(587 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 87 , -1        , ['Blue','Cyan','Plate','Metal']                                     )
        .addIndustrial(588 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 88 , -1        , ['Green','Plate','Metal']                                           )
        .addIndustrial(589 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 89 , -1        , ['Yellow','Orange','Plate','Metal']                                 )
        .addIndustrial(146 , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 123, 0x00000000, ['Platform','One-Way','One Way','Metal']                            )
        .addIndustrial(147 , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 124, 0x00000000, ['Scissor','Scaffolding','X','Metal']                               )
        .addIndustrial(1133, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 294, 0x00000000, ['Scissor','Scaffolding','X','Metal']                               )
        .addIndustrial(148 , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 125, 0x00000000, ['Lift','Table','Piston','Metal']                                   )
        .addIndustrial(1134, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , true , 712, 0x00000000, ['Lift','Table','Piston','Metal','Morphable']                       )
        .addIndustrial(149 , ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 126, -1        , ['Tube','Plate','Piston','Metal']                                   )
        .addIndustrial(1127, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 288, -1        , ['Tube','Plate','Piston','Metal']                                   )
        .addIndustrial(1135, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , true , 710, 0x00000000, ['Thick','Pipe','Metal','Morphable']                                )
        .addIndustrial(150 , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 127, -1        , ['Conveyor belt','Left','Metal']                                    )
        .addIndustrial(151 , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 128, -1        , ['Conveyor belt','Middle','Metal']                                  )
        .addIndustrial(152 , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 129, -1        , ['Conveyor belt','Middle','Metal']                                  )
        .addIndustrial(153 , ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 130, -1        , ['Conveyor belt','Right','Metal']                                   )
        .addIndustrial(319 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 190, 0x00000000, ['Caution','Warning','Fire','Flame','Sign','Alert']                 )
        .addIndustrial(320 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 191, 0x00000000, ['Caution','Warning','Death','Toxin','Poison','Sign','Alert']       )
        .addIndustrial(321 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 192, 0x00000000, ['Caution','Warning','Electricity','Lightning','Sign','Alert']      )
        .addIndustrial(322 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 193, 0x00000000, ['Caution','Warning','No','Do not enter','X','Sign','Alert']        )
        .addIndustrial(323 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 194, 0x00000000, ['Caution','Warning','Horizontal','Stripes','Hazard','Pole','Alert'])
        .addIndustrial(324 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 195, 0x00000000, ['Caution','Warning','Vertical','Stripes','Hazard','Pole','Alert']  )
        .addIndustrial(1535, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 708, 0x00000000, ['Thin','Pipe','Metal','Morphable']                                 ),
      new ItemBrickPackage('clay', 'Clay Backgrounds', ['House'])
        .addClay(594, 94, ['White','Tile','Bathroom']             )
        .addClay(595, 95, ['Brick','Tile','Bathroom']             )
        .addClay(596, 96, ['Diamond','Chisel','Tile','Bathroom']  )
        .addClay(597, 97, ['X','Cross','Chisel','Bathroom','Tile'])
        .addClay(598, 98, ['Rough','Natural']                     ),
      new ItemBrickPackage('medieval', 'Medieval', ['Castle'])
        .addMedieval(158, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 132, 0x00000000, ['Platform','Stone','One Way','One-Way']                     )
        .addMedieval(159, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 133, -1        , ['Brick','Stone']                                            )
        .addMedieval(160, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 134, -1        , ['Brick','Arrow slit','Stone','Window']                      )
        .addMedieval(599, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 99 , -1        , ['Anvil','Blacksmith']                                       )
        .addMedieval(325, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 196, 0x00000000, ['Brick','Stone','House']                                    )
        .addMedieval(326, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 197, -1        , ['Top','Display','Stone']                                    )
        .addMedieval(162, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 136, 0x00000000, ['Parapet','Stone']                                          )
        .addMedieval(163, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 137, 0x00000000, ['Barrel','Keg']                                             )
        .addMedieval(437, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 279, 0x00000000, ['Window','Wood','House']                                    )
        .addMedieval(600, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 100, -1        , ['Wood','Planks','Vertical','Brown','House']                 )
        .addMedieval(590, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 90 , -1        , ['Straw','Hay','Roof','House']                               )
        .addMedieval(591, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 91 , -1        , ['Roof','Shingles','Scales','Red','House']                   )
        .addMedieval(592, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 92 , -1        , ['Roof','Shingles','Scales','Green','House']                 )
        .addMedieval(556, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 56 , -1        , ['Roof','Shingles','Scales','Brown','House']                 )
        .addMedieval(593, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 93 , -1        , ['Gray','Dry wall','Stucco','Grey','House','Beige']          )
        .addMedieval(440, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 417, 0x00000000, ['Scaffolding','Wood','Morphable','Fence','House','Design']  )
        .addMedieval(330, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 201, 0x00000000, ['Shield','Warrior','Weapon']                                )
        .addMedieval(275, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 365, 0x00000000, ['Axe','Morphable','Warrior','Weapon']                       )
        .addMedieval(329, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 377, 0x00000000, ['Sword','Morphable','Warrior','Weapon']                     )
        .addMedieval(273, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 373, 0x00000000, ['Shield','Morphable','Blue','Green','Yellow','Red','Circle'])
        .addMedieval(328, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 405, 0x00000000, ['Shield','Morphable','Blue','Green','Yellow','Red']         )
        .addMedieval(327, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 369, 0x00000000, ['Banner','Morphable','Blue','Green','Yellow','Red','Flag']  ),
      new ItemBrickPackage('pipes', 'Pipes', ['Orange'])
        .addPipes(166, 140, ['Left']      )
        .addPipes(167, 141, ['Horizontal'])
        .addPipes(168, 142, ['Right']     )
        .addPipes(169, 143, ['Up']        )
        .addPipes(170, 144, ['Vertical']  )
        .addPipes(171, 145, ['Down']      ),
      new ItemBrickPackage('outer space', 'Outer Space', ['Ship','Aliens','UFO','Sci-Fi','Science Fiction','Void'])
        .addOuterSpace(172 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 146, -1        , ['White','Metal','Plate']                                               )
        .addOuterSpace(173 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 147, -1        , ['Blue','Metal','Plate']                                                )
        .addOuterSpace(174 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 148, -1        , ['Green','Metal','Plate']                                               )
        .addOuterSpace(175 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 149, -1        , ['Red','Magenta','Metal','Plate','Pink']                                )
        .addOuterSpace(176 , ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 150, 0xffffab44, ['Sand','Mars','Orange']                                                )
        .addOuterSpace(1029, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 214, -1        , ['Moon','Rock','Stone','Metal','Grey','Gray']                           )
        .addOuterSpace(601 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 101, -1        , ['White','Grey','Gray','Metal']                                         )
        .addOuterSpace(602 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 102, -1        , ['Blue','Metal']                                                        )
        .addOuterSpace(603 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 103, -1        , ['Green','Metal']                                                       )
        .addOuterSpace(604 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 104, -1        , ['Red','Metal']                                                         )
        .addOuterSpace(332 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 203, 0x00000000, ['Sign','Panel','Computer','Green']                                     )
        .addOuterSpace(333 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 204, 0x00000000, ['Red','Dot','Light','Lamp','Circle']                                   )
        .addOuterSpace(334 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 205, 0x00000000, ['Blue','Dot','Light','Lamp','Circle']                                  )
        .addOuterSpace(1567, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 352, 0x00000000, ['Green','Dot','Light','Lamp','Circle']                                 )
        .addOuterSpace(1568, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 353, 0x00000000, ['Yellow','Dot','Light','Lamp','Circle']                                )
        .addOuterSpace(1623, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 366, 0x00000000, ['Magenta','Pink','Purple','Dot','Light','Lamp','Circle','Orb','Button'])
        .addOuterSpace(1624, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 367, 0x00000000, ['Cyan','Dot','Light','Lamp','Circle','Orb','Button']                   )
        .addOuterSpace(335 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 206, 0x00000000, ['Computer','Control panel','System']                                   )
        .addOuterSpace(428 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 270, 0x00000000, ['Star','Shiny','Red','Light','Night','Sky','Big']                      )
        .addOuterSpace(429 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 271, 0x00000000, ['Star','Shiny','Blue','Light','Night','Sky','Medium']                  )
        .addOuterSpace(430 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 272, 0x00000000, ['Star','Shiny','Yellow','Light','Night','Sky','Small']                 )
        .addOuterSpace(331 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 202, 0x00000000, ['Rock','Hard','Gray','Grey','Boulder','Stone','Environment']           ),
      new ItemBrickPackage('desert', 'Desert Pack', ['Environment'])
        .addDesert(177, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 151, 0xffdd943b, ['Mars','Orange','Sandstone','Ground','Soil','Dirt','Rocky','Space'])
        .addDesert(178, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 152, 0xffc68534, ['Mars','Orange','Sandstone','Ground','Soil','Dirt','Rocky','Space'])
        .addDesert(179, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 153, 0xff916127, ['Mars','Orange','Sandstone','Ground','Soil','Dirt','Rocky','Space'])
        .addDesert(180, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 154, -1        , ['Mars','Orange','Sandstone','Ground','Soil','Dirt','Rocky','Space'])
        .addDesert(181, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 155, -1        , ['Mars','Orange','Sandstone','Ground','Soil','Dirt','Rocky','Space'])
        .addDesert(336, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 207, 0x00000000, ['Rock','Orange','Sandstone','Boulder','Space']                     )
        .addDesert(425, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 267, 0x00000000, ['Cactus','Nature','Plant','Western']                               )
        .addDesert(426, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 268, 0x00000000, ['Bush','Cactus','Nature','Plant','Western']                        )
        .addDesert(427, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 269, 0x00000000, ['Tree','Nature','Plant','Bush','Western','Bonsai']                 )
        .addDesert(699, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 193, -1        , ['Brown','Dirt','Soil','Sandstone']                                 )
        .addDesert(700, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 194, -1        , ['Brown','Dirt','Soil','Sandstone']                                 )
        .addDesert(701, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 195, -1        , ['Brown','Dirt','Soil','Sandstone']                                 ),
      new ItemBrickPackage('neon', 'Neon Backgrounds', ['Solid'])
        .addNeon(675, 169, ['Magenta','Pink','Red']     )
        .addNeon(673, 167, ['Orange','Fire']            )
        .addNeon(697, 191, ['Yellow']                   )
        .addNeon(674, 168, ['Green','Jungle']           )
        .addNeon(698, 192, ['Cyan']                     )
        .addNeon(605, 105, ['Blue','Night','Sky','Dark']),
      new ItemBrickPackage('monster', 'Monster', ['Creature'])
        .addMonster(608, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 108, 0xffa0a061, ['Green','Grass']                                )
        .addMonster(609, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 109, 0xff707044, ['Green','Dark','Grass']                         )
        .addMonster(663, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 157, -1        , ['Red','Pink','Scales']                          )
        .addMonster(664, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 158, -1        , ['Red','Pink','Dark','Scales']                   )
        .addMonster(665, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 159, -1        , ['Purple','Scales','Violet']                     )
        .addMonster(666, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 160, -1        , ['Purple','Scales','Dark','Violet']              )
        .addMonster(338, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 385, 0x00000000, ['Teeth','Tooth','Creepy','Morphable','Scary']   )
        .addMonster(339, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 381, 0x00000000, ['Teeth','Tooth','Creepy','Morphable','Scary']   )
        .addMonster(340, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 401, 0x00000000, ['Teeth','Tooth','Creepy','Morphable','Scary']   )
        .addMonster(274, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 146, 0x00000000, ['Eye','Purple','Circle','Creepy','Ball','Scary'])
        .addMonster(341, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 211, 0x00000000, ['Eye','Yellow','Circle','Creepy','Ball','Scary'])
        .addMonster(342, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 212, 0x00000000, ['Eye','Blue','Circle','Creepy','Ball','Scary']  ),
      new ItemBrickPackage('fog', 'Fog', ['Mist','Transparent','Damp','Environment'])
        .addFog(343, 213, ['Center','Middle']      )
        .addFog(344, 214, ['Bottom','Side']        )
        .addFog(345, 215, ['Top','Side']           )
        .addFog(346, 216, ['Left','Side']          )
        .addFog(347, 217, ['Right','Side']         )
        .addFog(348, 218, ['Top Right','Corner']   )
        .addFog(349, 219, ['Top Left','Corner']    )
        .addFog(350, 220, ['Bottom Left','Corner'] )
        .addFog(351, 221, ['Bottom Right','Corner']),
      new ItemBrickPackage('halloween 2012', 'Halloween 2012', ['Holiday','Spooky'])
        .addHalloween2012(352, ItemLayer.ABOVE     , true , 222, ['Head','Transfer','Lamp','Top']                                 )
        .addHalloween2012(353, ItemLayer.DECORATION, false, 223, ['Antenna','Tesla coil','Middle']                                )
        .addHalloween2012(354, ItemLayer.DECORATION, true , 224, ['Wire','Blue','Red','Electricity','Wiring','Power','Vertical']  )
        .addHalloween2012(355, ItemLayer.DECORATION, true , 225, ['Wire','Blue','Red','Electricity','Wiring','Power','Horizontal'])
        .addHalloween2012(356, ItemLayer.ABOVE     , false, 226, ['Lightning','Storm','Electricity','Environment']                ),
      new ItemBrickPackage('checker', 'Checker Blocks', ['Checkered'])
        .addChecker(1091, 263, 0xffbfbfbf, ['White','Light']                   )
        .addChecker(186 , 161, 0xff6b6b6b, ['Gray','Grey']                     )
        .addChecker(1026, 213, -1        , ['Black','Dark','Gray','Grey']      )
        .addChecker(189 , 164, 0xffa8193f, ['Red','Magenta']                   )
        .addChecker(1025, 212, -1        , ['Orange']                          )
        .addChecker(190 , 165, 0xffabb333, ['Yellow','Lime']                   )
        .addChecker(191 , 166, 0xff45a337, ['Green']                           )
        .addChecker(192 , 167, 0xff3cb2ac, ['Cyan','Blue']                     )
        .addChecker(187 , 162, 0xff2f5391, ['Blue']                            )
        .addChecker(188 , 163, 0xff803d91, ['Purple','Magenta','Pink','Violet']),
      new ItemBrickPackage('jungle', 'Jungle', [])
        .addJungle(193, ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 168, 0x00000000, ['Idol','Face','Brick','No show','Statue','Totem','Ruins']              )
        .addJungle(194, ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 169, 0x00000000, ['Platform','Old','Mossy','Ruins','Stone','One Way','One-Way']          )
        .addJungle(195, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 170, 0xff99997a, ['Brick','Grey','Gray','Ruins','Stone']                                 )
        .addJungle(196, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 171, 0xffac7061, ['Brick','Red','Pink','Ruins','Stone']                                  )
        .addJungle(197, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 172, 0xff62889a, ['Brick','Blue','Ruins','Stone']                                        )
        .addJungle(198, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 173, 0xff878441, ['Brick','Yellow','Olive','Ruins','Stone','Green']                      )
        .addJungle(617, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 117, 0xff666651, ['Brick','Grey','Gray','Ruins','Stone']                                 )
        .addJungle(618, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 118, 0xff774e44, ['Brick','Red','Pink','Ruins','Stone']                                  )
        .addJungle(619, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 119, 0xff415a66, ['Brick','Blue','Ruins','Stone']                                        )
        .addJungle(620, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 120, 0xff6b6834, ['Brick','Yellow','Olive','Ruins','Stone','Green']                      )
        .addJungle(199, ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 176, 0x00000000, ['Pot','Jar','Clay','Ruins','Urn']                                      )
        .addJungle(621, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 121, 0xff688403, ['Leaves','Green','Grass','Environment','Nature']                       )
        .addJungle(622, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 122, 0xff587003, ['Leaves','Green','Grass','Environment','Nature']                       )
        .addJungle(623, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 123, 0xff425402, ['Leaves','Green','Grass','Environment','Nature']                       )
        .addJungle(357, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 227, 0x00000000, ['Bush','Plant','Nature','Environment']                                 )
        .addJungle(358, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 228, 0x00000000, ['Rock','Pot','Jar','Basket','Ruins','Clay']                            )
        .addJungle(359, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 229, 0x00000000, ['Idol','Statue','Gold','Trophy','Artifact','Artefact','Yellow','Ruins']),
      new ItemBrickPackage('christmas 2012', 'Christmas 2012', ['Xmas','Holiday'])
        .addXmas2012(624, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 124, 0xffd88a19, ['Wrapping paper','Yellow','Stripes']               )
        .addXmas2012(625, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 125, 0xff54840d, ['Wrapping paper','Green','Stripes']                )
        .addXmas2012(626, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 126, 0xff1f39d8, ['Wrapping paper','Blue','Purple','Dots','Spots']   )
        .addXmas2012(362, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 230, 0x00000000, ['Ribbon','Blue','Vertical']                        )
        .addXmas2012(363, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 231, 0x00000000, ['Ribbon','Blue','Horizontal']                      )
        .addXmas2012(364, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 232, 0x00000000, ['Ribbon','Blue','Cross','Middle']                  )
        .addXmas2012(365, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 233, 0x00000000, ['Ribbon','Purple','Vertical','Magenta','Red']      )
        .addXmas2012(366, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 234, 0x00000000, ['Ribbon','Purple','Horizontal','Magenta','Red']    )
        .addXmas2012(367, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 235, 0x00000000, ['Ribbon','Purple','Cross','Middle','Magenta','Red']),
      new ItemBrickPackage('lava', 'Lava', ['Hell','Hot','Environment','Heat'])
        .addLava(202, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 177, 0xffffce3e, ['Yellow']              )
        .addLava(203, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 178, 0xfffa970e, ['Orange']              )
        .addLava(204, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 179, 0xffff5f00, ['Orange','Red']        )
        .addLava(627, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 127, 0xffcca333, ['Yellow']              )
        .addLava(628, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 128, 0xffc6750b, ['Orange']              )
        .addLava(629, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 129, 0xffb73a00, ['Red','Orange']        )
        .addLava(415, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 264, 0x00000000, ['Fire','Glow','Orange']),
      new ItemBrickPackage('swamp', 'Swamp', [])
        .addSwamp(370, ItemLayer.ABOVE     , ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 249, 0x00000000, ['Mud','Bubbles','Gas','Nature','Environment','Animated'])
        .addSwamp(371, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, 236, 0x00000000, ['Grass','Thick','Nature','Plant','Environment']         )
        .addSwamp(372, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, 237, 0x00000000, ['Wood','Nature','Log','Environment']                    )
        .addSwamp(373, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, 238, 0x00000000, ['Danger','Sign','Caution','Radioactive','Nuclear']      )
        .addSwamp(557, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, 57 , -1        , ['Mud','Quicksand','Environment','Soil']                 )
        .addSwamp(630, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, 130, 0xff605a24, ['Green','Grass','Environment','Soil']                   ),
      new ItemBrickPackage('marble', 'Sparta', ['Rome','Sparta','House','Greece','Roman'])
        .addMarble(382, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 239, 0x00000000, ['Column','Top','Ancient']                               )
        .addMarble(383, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 240, 0x00000000, ['Column','Middle','Ancient']                            )
        .addMarble(384, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 241, 0x00000000, ['Column','Bottom','Ancient']                            )
        .addMarble(208, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 180, 0xffcdd1d3, ['Brick','White','Ancient','Grey','Gray']                )
        .addMarble(209, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 181, 0xffc1dcb9, ['Brick','Green','Ancient']                              )
        .addMarble(210, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 182, 0xffe5c6cf, ['Brick','Red','Pink','Ancient']                         )
        .addMarble(211, ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 183, 0x00000000, ['Column','Platform','Top','Ancient','One-Way','One Way'])
        .addMarble(638, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 132, 0xff777b7d, ['Brick','White','Ancient','Grey','Gray']                )
        .addMarble(639, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 133, 0xff70816f, ['Brick','Green','Ancient']                              )
        .addMarble(640, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, false, 134, 0xff83767b, ['Brick','Red','Pink','Ancient']                         ),
      new ItemBrickPackage('Label', 'Admin Blocks', [])
        .addLabel(),
      new ItemBrickPackage('sign', 'Signs (+1)', [])
        .addSign(),
      new ItemBrickPackage('farm', 'Farm', [])
        .addFarm(386 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 243, -1        , ['Wheat','Nature','Plant','Environment'])
        .addFarm(387 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 244, -1        , ['Corn','Nature','Plant','Environment'] )
        .addFarm(388 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 245, -1        , ['Fence','Wood','Left']                 )
        .addFarm(1531, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 332, -1        , ['Fence','Wood','Center','Middle']      )
        .addFarm(389 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 246, -1        , ['Fence','Wood','Right']                )
        .addFarm(212 , ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 184, 0xffccbe75, ['Hay','Yellow','Haybale','Straw']      ),
      new ItemBrickPackage('autumn 2014', 'Autumn 2014', ['Nature','Environment','Season','Fall'])
        .addAutumn2014(390, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 247, ['Leaves','Left','Orange']             )
        .addAutumn2014(391, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 248, ['Leaves','Right','Orange']            )
        .addAutumn2014(392, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 249, ['Grass','Left']                       )
        .addAutumn2014(393, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 250, ['Grass','Middle']                     )
        .addAutumn2014(394, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 251, ['Grass','Right']                      )
        .addAutumn2014(395, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 252, ['Acorn','Nut','Brown']                )
        .addAutumn2014(396, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 253, ['Pumpkin','Halloween','Food','Orange'])
        .addAutumn2014(641, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 135, ['Leaves','Yellow']                    )
        .addAutumn2014(642, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 136, ['Leaves','Orange']                    )
        .addAutumn2014(643, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 137, ['Leaves','Red']                       ),
      new ItemBrickPackage('christmas 2014', 'Christmas 2014', ['Xmas','Holiday'])
        .addXmas2014(215, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 187, -1        , ['Snow','Environment']                                                    )
        .addXmas2014(216, ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 188, -1        , ['Ice','Snow','Platform','Icicle','Top','Environment','One-Way','One Way'])
        .addXmas2014(398, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 254, -1        , ['Snow','Fluff','Left','Snowdrift','Environment']                         )
        .addXmas2014(399, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 255, -1        , ['Snow','Fluff','Middle','Snowdrift','Environment']                       )
        .addXmas2014(400, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 256, -1        , ['Snow','Fluff','Right','Snowdrift','Environment']                        )
        .addXmas2014(401, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 257, 0x00000000, ['Candy cane','Stripes']                                                  )
        .addXmas2014(402, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 258, 0x00000000, ['Tinsel','Nature','Garland','Top']                                       )
        .addXmas2014(403, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 259, 0x00000000, ['Stocking','Sock','Red','Holiday']                                       )
        .addXmas2014(404, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, true , 260, 0x00000000, ['Bow','Ribbon','Red']                                                    ),
      new ItemBrickPackage('one-way', 'One-way Blocks', ['Platform'])
        .addOneWay(1092, 566, ['One way','White','Light','Morphable','One-way'])
        .addOneWay(1052, 472, ['One way','Gray','Grey','Morphable','One-way']  )
        .addOneWay(1056, 488, ['One way','Black','Dark','Morphable','One-way'] )
        .addOneWay(1054, 480, ['One way','Red','Morphable','One-way']          )
        .addOneWay(1002, 272, ['One way','Orange','Morphable','One-way']       )
        .addOneWay(1003, 268, ['One way','Yellow','Morphable','One-way']       )
        .addOneWay(1055, 484, ['One way','Green','Morphable','One-way']        )
        .addOneWay(1001, 264, ['One way','Cyan','Blue','Morphable','One-way']  )
        .addOneWay(1053, 476, ['One way','Blue','Dark','Morphable','One-way']  )
        .addOneWay(1004, 276, ['One way','Purple','Pink','Morphable','One-way']),
      new ItemBrickPackage('valentines 2015', 'Valentines 2015', ['Kiss','Holiday','Love','Heart','<3'])
        .addValentines2015(405, 261, ['Red']          )
        .addValentines2015(406, 262, ['Purple','Pink'])
        .addValentines2015(407, 263, ['Pink']         ),
      new ItemBrickPackage('magic', 'Magic Blocks', ['Rare'])
        .addMagic(1013, 'brickmagic' , 'the first magic block'  , 200, ['Green','Emerald','Peridot']      )
        .addMagic(1014, 'brickmagic2', 'the second magic block' , 201, ['Purple','Violet','Amethyst']     )
        .addMagic(1015, 'brickmagic3', 'the third magic block'  , 202, ['Yellow','Orange','Amber','Topaz'])
        .addMagic(1016, 'brickmagic4', 'the fourth magic block' , 203, ['Blue','Sapphire']                )
        .addMagic(1017, 'brickmagic5', 'the fifth magic block'  , 204, ['Red','Ruby','Garnet']            )
        .addMagic(1132, 'brickmagic6', 'the sixth magic block'  , 293, ['Cyan','Aquamarine','Turquoise']  )
        .addMagic(1142, 'brickmagic7', 'the seventh magic block', 299, ['White','Opal','Pearl']           )
        .addMagic(1161, 'brickmagic8', 'the eighth magic block' , 316, ['Black','Onyx']                   ),
      new ItemBrickPackage('effect', 'Effect Blocks', ['Powers','Action','Physics'])
        .addEffect(417 , ItemManager.effectBlocksBMD , 'brickeffectjump'      , 'jump effect: players jump twice or half as high'                               , 0  , ['Jump','Boost','High','Low']                               )
        .addEffect(418 , ItemManager.effectBlocksBMD , 'brickeffectfly'       , 'fly effect: players can levitate by holding space'                             , 1  , ['Fly','Hover','Levitate']                                  )
        .addEffect(419 , ItemManager.effectBlocksBMD , 'brickeffectspeed'     , 'speed effect: players move 50% faster or slower'                               , 2  , ['Speed','Fast','Run','Slow']                               )
        .addEffect(453 , ItemManager.effectBlocksBMD , 'brickeffectlowgravity', 'low gravity effect: player gravity is reduced'                                 , 13 , ['Gravity','Moon','Low gravity','Space','Slow fall','Float'])
        .addEffect(420 , ItemManager.effectBlocksBMD , 'brickeffectprotection', 'protection effect: players are safe from hazards and cured from curses/zombies', 3  , ['Invincible','Health','Plus','Immortal','Protection']      )
        .addEffect(421 , ItemManager.effectBlocksBMD , 'brickeffectcurse'     , 'players die after X seconds, spreads on contact, maximum of 3 curses at a time', 4  , ['Curse','Skull','Skeleton','Timed','Death','Die','Kill']   )
        .addEffect(461 , ItemManager.effectBlocksBMD , 'brickeffectmultijump' , 'multijump effect: players can jump X times'                                    , 15 , ['Double','Jump','Twice','Powers','Action','Physics']       )
        .addEffect(1517, ItemManager.specialBlocksBMD, 'brickeffectgravity'   , 'gravity effect: player gravity is rotated'                                     , 657, ['Gravity','Reverse','Action','Physics']                    )
        .addEffect(1584, ItemManager.effectBlocksBMD , 'brickeffectpoison'    , 'poison effect: players die after X seconds, does not spread'                   , 23 , ['Poison','Toxic','Action','Timed','Death','Die','Kill']    )
        .addEffect(1618, ItemManager.effectBlocksBMD , 'brickeffectreset'     , 'reset effect: resets all non-timed effects'                                    , 26 , ['Reset','Action','Physics']                                ),
      new ItemBrickPackage('gold', 'Gold Membership Blocks', ['Shiny','Yellow'])
        .addGold(1065, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ''                                   , ItemTab.BLOCK     , true , 242, -1        )
        .addGold(1066, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ''                                   , ItemTab.BLOCK     , true , 243, -1        )
        .addGold(1067, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ''                                   , ItemTab.BLOCK     , true , 244, -1        )
        .addGold(1068, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ''                                   , ItemTab.BLOCK     , true , 245, -1        )
        .addGold(1069, ItemLayer.DECORATION, ItemManager.blocksBMD    , ''                                   , ItemTab.BLOCK     , true , 246, 0x00000000)
        .addGold(709 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ''                                   , ItemTab.BACKGROUND, false, 198, -1        )
        .addGold(710 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ''                                   , ItemTab.BACKGROUND, false, 199, -1        )
        .addGold(711 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ''                                   , ItemTab.BACKGROUND, false, 200, -1        )
        .addGold(201 , ItemLayer.DECORATION, ItemManager.doorBlocksBMD, 'allows white-border smilies to pass', ItemTab.ACTION    , false, 10 , -1        )
        .addGold(200 , ItemLayer.DECORATION, ItemManager.doorBlocksBMD, 'allows gold-border smilies to pass' , ItemTab.ACTION    , false, 11 , -1        ),
      new ItemBrickPackage('cave', 'Cave Backgrounds', ['Environment'])
        .addCave(766, 259, ['Dark','Grey','Gray']            )
        .addCave(767, 260, ['Dark','Grey','Gray']            )
        .addCave(768, 261, ['Dark','Grey','Gray','Black']    )
        .addCave(662, 156, ['Dark','Red']                    )
        .addCave(660, 154, ['Dark','Orange','Brown']         )
        .addCave(661, 155, ['Dark','Yellow','Olive']         )
        .addCave(659, 153, ['Dark','Green']                  )
        .addCave(656, 150, ['Dark','Cyan']                   )
        .addCave(657, 151, ['Dark','Blue','Night','Sky']     )
        .addCave(655, 149, ['Dark','Purple']                 )
        .addCave(658, 152, ['Dark','Pink','Magenta','Violet']),
      new ItemBrickPackage('summer 2015', 'Summer 2015', ['Season'])
        .addSummer2015(441, ItemLayer.ABOVE     , true , 280, ['Life preserver','Life saver','Circle','Life buoy','Ring'])
        .addSummer2015(442, ItemLayer.DECORATION, true , 281, ['Anchor','Metal','Ship','Water']                          )
        .addSummer2015(443, ItemLayer.ABOVE     , false, 282, ['Rope','Left','Dock']                                     )
        .addSummer2015(444, ItemLayer.ABOVE     , false, 283, ['Rope','Right','Dock']                                    )
        .addSummer2015(445, ItemLayer.ABOVE     , false, 284, ['Tree','Nature','Palm','Plant','Environment']             ),
      new ItemBrickPackage('environment', 'Environment', ['Nature'])
        .addEnvironment(1030, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 215, ['Wood','Tree','Brown']                )
        .addEnvironment(1031, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 216, ['Leaves','Grass','Green','Plant']     )
        .addEnvironment(1032, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 217, ['Bamboo','Wood','Yellow']             )
        .addEnvironment(1033, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 218, ['Obsidian','Rock','Ice','Grey','Gray'])
        .addEnvironment(1034, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 219, ['Fire','Lava','Hot']                  )
        .addEnvironment(678 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 172, ['Wood','Tree','Brown']                )
        .addEnvironment(679 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 173, ['Leaves','Grass','Green']             )
        .addEnvironment(680 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 174, ['Bamboo','Wood']                      )
        .addEnvironment(681 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 175, ['Obsidian','Rock','Ice','Grey','Gray'])
        .addEnvironment(682 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 176, ['Fire','Lava','Hot','Molten']         ),
      new ItemBrickPackage('domestic', 'Domestic', ['House'])
        .addDomestic(1035, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 220, -1        , ['Tile','Double','Floor','Parquet','Checkered']                        )
        .addDomestic(1036, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 221, -1        , ['Wood','Brown','Floor']                                               )
        .addDomestic(1037, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 222, -1        , ['Red','Carpet']                                                       )
        .addDomestic(1038, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 223, -1        , ['Blue','Carpet']                                                      )
        .addDomestic(1039, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 224, -1        , ['Green','Carpet','Grass']                                             )
        .addDomestic(1040, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 225, -1        , ['White','Marble','Box','Square']                                      )
        .addDomestic(683 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 177, -1        , ['Wallpaper','Yellow','Dark yellow','Brown']                           )
        .addDomestic(684 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 178, -1        , ['Wallpaper','Brown','Dark brown']                                     )
        .addDomestic(685 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 179, -1        , ['Wallpaper','Red','Dark red']                                         )
        .addDomestic(686 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 180, -1        , ['Wallpaper','Blue','Dark blue']                                       )
        .addDomestic(687 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 181, -1        , ['Wallpaper','Green','Dark green','Stripes']                           )
        .addDomestic(446 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 285, 0x00000000, ['Light','Lampshade']                                                  )
        .addDomestic(447 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 425, 0x00000000, ['Light','Bulb','Morphable']                                           )
        .addDomestic(448 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 429, 0x00000000, ['Pipe','Tube','Mario','Corner','Morphable']                           )
        .addDomestic(1536, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 715, 0x00000000, ['Pipe','Tube','Mario','Morphable']                                    )
        .addDomestic(1537, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 717, 0x00000000, ['Pipe','Tube','Mario','Corner','Morphable']                           )
        .addDomestic(1539, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 335, 0x00000000, ['Pipe','Tube','Mario','Corner']                                       )
        .addDomestic(449 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 433, 0x00000000, ['Picture','Painting','Frame','Morphable']                             )
        .addDomestic(450 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 437, 0x00000000, ['Flower','Nature','Plant','Vase']                                     )
        .addDomestic(451 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 441, 0x00000000, ['Television','TV','Morphable','Screen','CRT','Box','LCD','Electronic'])
        .addDomestic(452 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 445, 0x00000000, ['Window','Morphable']                                                 )
        .addDomestic(1041, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , false, 449, -1        , ['Half block','Yellow','Morphable','Gold']                             )
        .addDomestic(1042, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , false, 453, -1        , ['Half block','Brown','Morphable','Wood']                              )
        .addDomestic(1043, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , false, 457, -1        , ['Half block','White','Morphable','Marble']                            )
        .addDomestic(1538, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 720, 0x00000000, ['Picture','Painting','Frame','Morphable']                             ),
      new ItemBrickPackage('halloween 2015', 'Halloween 2015', ['Holiday','House','Scary','Creepy'])
        .addHalloween2015(1047, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 229, -1        , ['Mossy','Green','Brick','Old','Sewer','Ghost']                 )
        .addHalloween2015(1048, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 230, -1        , ['Siding','Light gray']                                         )
        .addHalloween2015(1049, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 231, -1        , ['Mossy','Gray','Green','Grey','Roof','Catacomb','Brick','Tomb'])
        .addHalloween2015(1050, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 232, 0x00000000, ['Platform','Gray','Grey','Stone','Corner','One Way','One-Way'] )
        .addHalloween2015(454 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 286, 0x00000000, ['Bush','Nature','Plant','Dead','Shrub','Environment']          )
        .addHalloween2015(455 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 287, 0x00000000, ['Fence','Spikes']                                              )
        .addHalloween2015(456 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 461, 0x00000000, ['Window','Morphable','Wood','Arched']                          )
        .addHalloween2015(457 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 463, 0x00000000, ['Window','Morphable','Round','Circle','Wood']                  )
        .addHalloween2015(458 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 465, 0x00000000, ['Light','Morphable','Lamp','Lantern']                          )
        .addHalloween2015(694 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 188, -1        , ['Mossy','Green','Brick','Stone','Sewer']                       )
        .addHalloween2015(695 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 189, -1        , ['Sliding','Gray','Grey','Slabs','Sewer']                       )
        .addHalloween2015(696 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 190, -1        , ['Mossy','Gray','Grey','Roof','Catacomb','Tomb']                ),
      new ItemBrickPackage('arctic', 'Arctic', ['Snow','Cold','Blue','Frozen','Freeze'])
        .addArctic(1059, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 237, ['Ice']   )
        .addArctic(1060, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 238, []        )
        .addArctic(1061, ItemLayer.DECORATION, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 239, ['Left']  )
        .addArctic(1062, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 240, ['Middle'])
        .addArctic(1063, ItemLayer.DECORATION, ItemManager.blocksBMD  , ItemTab.BLOCK     , true , 241, ['Right'] )
        .addArctic(702 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 196, []        )
        .addArctic(703 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, false, 197, []        ),
      new ItemBrickPackage('new year 2015', 'New Year 2015', ['Holiday'])
        .addNewYear2015(462, ItemManager.decoBlocksBMD   , 289, ['Glass','Wine','Drink']         )
        .addNewYear2015(463, ItemManager.decoBlocksBMD   , 290, ['Bottle','Champagne','Drink']   )
        .addNewYear2015(464, ItemManager.specialBlocksBMD, 492, ['Balloon','Morphable']          )
        .addNewYear2015(465, ItemManager.specialBlocksBMD, 497, ['String','Morphable','Streamer']),
      new ItemBrickPackage('ice', 'Ice', [])
        .addIce(),
      new ItemBrickPackage('fairytale', 'Fairytale', ['Mythical','Fiction'])
        .addFairytale(1070, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 247, -1        , ['Cobblestone','Pebbles']                                    )
        .addFairytale(1071, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 248, -1        , ['Orange','Tree']                                            )
        .addFairytale(1072, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 249, -1        , ['Green','Moss']                                             )
        .addFairytale(1073, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 250, -1        , ['Blue','Cloud']                                             )
        .addFairytale(1074, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 251, -1        , ['Red','Mushroom','Spotted']                                 )
        .addFairytale(468 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 291, 0x00000000, ['Green','Plant','Vine']                                     )
        .addFairytale(469 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 292, 0x00000000, ['Mushroom','Orange']                                        )
        .addFairytale(1622, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 365, 0x00000000, ['Mushroom','Red','Spotted']                                 )
        .addFairytale(470 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 293, 0x00000000, ['Dew Drop','Transparent','Water']                           )
        .addFairytale(704 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 201, -1        , ['Orange','Mist','Fog','Swirl']                              )
        .addFairytale(705 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 202, -1        , ['Green','Mist','Fog','Swirl']                               )
        .addFairytale(706 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 203, -1        , ['Blue','Mist','Fog','Swirl']                                )
        .addFairytale(707 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 204, -1        , ['Pink','Mist','Fog','Swirl']                                )
        .addFairytale(1075, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , false, 522, -1        , ['Half block','Gemstone','Crystal','Orange']                 )
        .addFairytale(1076, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , false, 526, -1        , ['Half block','Gemstone','Crystal','Green']                  )
        .addFairytale(1077, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , false, 530, -1        , ['Half block','Gemstone','Crystal','Blue']                   )
        .addFairytale(1078, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , false, 534, -1        , ['Half block','Gemstone','Crystal','Pink']                   )
        .addFairytale(471 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 538, 0x00000000, ['Morphable','Green','Blue','Orange','Pink','Plant','Flower']),
      new ItemBrickPackage('spring 2016', 'Spring 2016', [])
        .addSpring2016(1081, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 253, -1        , ['Dirt','Brown','Soil','Nature']                                )
        .addSpring2016(1082, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 254, -1        , ['Hedge','Green','Leaf','Nature','Plant']                       )
        .addSpring2016(473 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 294, 0x00000000, ['Dirt','Brown','Soil','Slope','Left']                          )
        .addSpring2016(474 , ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 295, 0x00000000, ['Dirt','Brown','Soil','Slope','Right']                         )
        .addSpring2016(475 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 541, 0x00000000, ['Daisy','Flower','Plant','Nature','White','Blue','Pink']       )
        .addSpring2016(476 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 544, 0x00000000, ['Tulip','Flower','Plant','Nature','Red','Yellow','Pink']       )
        .addSpring2016(477 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 547, 0x00000000, ['Daffodil','Flower','Plant','Nature','Yellow','White','Orange']),
      new ItemBrickPackage('summer 2016', 'Summer 2016', [])
        .addSummer2016(1083, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 255, -1        , ['Thatched','Straw','Seasonal','Beige','Tan']                                                )
        .addSummer2016(1084, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 256, -1        , ['Planks','Wood','Seasonal','Purple']                                                        )
        .addSummer2016(1085, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 257, -1        , ['Planks','Wood','Seasonal','Yellow']                                                        )
        .addSummer2016(1086, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 258, -1        , ['Planks','Wood','Seasonal','Teal']                                                          )
        .addSummer2016(1087, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 259, 0x00000000, ['Platform','Dock','Wood','Seasonal','One Way','One-Way','Brown']                            )
        .addSummer2016(708 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 205, -1        , ['Thatched','Straw','Seasonal','Beige','Tan']                                                )
        .addSummer2016(712 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 206, -1        , ['Planks','Wood','Seasonal','Purple']                                                        )
        .addSummer2016(713 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 207, -1        , ['Planks','Wood','Seasonal','Yellow']                                                        )
        .addSummer2016(714 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 208, -1        , ['Planks','Wood','Seasonal','Teal']                                                          )
        .addSummer2016(481 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 550, 0x00000000, ['Flag','Seasonal','Red','Yellow','Green','Cyan','Blue','Purple']                            )
        .addSummer2016(482 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 556, 0x00000000, ['Awning','Striped','Seasonal','White','Red','Yellow','Green','Cyan','Blue','Purple']        )
        .addSummer2016(483 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 562, 0x00000000, ['Ice Cream','Food','Vanilla','Chocolate','Strawberry','Mint','Beige','Brown','Pink','Green']),
      new ItemBrickPackage('mine', 'Mine', [])
        .addMine(1093, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 264, -1        , ['Stone','Brown','Tan','Rock']                                      )
        .addMine(720 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 219, -1        , ['Stone','Brown','Tan','Rock','Dark']                               )
        .addMine(495 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 307, 0x00000000, ['Stalagmite','Stone','Brown','Tan','Rock']                         )
        .addMine(496 , ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 308, 0x00000000, ['Stalagtite','Stone','Brown','Tan','Rock']                         )
        .addMine(497 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 570, 0x00000000, ['Crystal','Gemstone','Red','Yellow','Green','Cyan','Blue','Purple'])
        .addMine(498 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 576, 0x00000000, ['Torch','Fire','Animated']                                         ),
      new ItemBrickPackage('restaurant', 'Restaurant', [])
        .addRestaurant(487, ItemManager.decoBlocksBMD   , 302, ['Hamburger','Sandwich','Food']                                 )
        .addRestaurant(488, ItemManager.decoBlocksBMD   , 303, ['Hot Dog','Sausage','Food']                                    )
        .addRestaurant(489, ItemManager.decoBlocksBMD   , 304, ['Sub','Sandwich','Ham','Food']                                 )
        .addRestaurant(490, ItemManager.decoBlocksBMD   , 305, ['Soda','Drink','Beverage','Red']                               )
        .addRestaurant(491, ItemManager.decoBlocksBMD   , 306, ['French Fries','Chips','Food','Red','Yellow']                  )
        .addRestaurant(492, ItemManager.specialBlocksBMD, 588, ['Glass','Cup','Drink','Water','Milk','Orange Juice','Beverage'])
        .addRestaurant(493, ItemManager.specialBlocksBMD, 592, ['Plate','Chicken','Ham','Fish','Food']                         )
        .addRestaurant(494, ItemManager.specialBlocksBMD, 597, ['Bowl','Salad','Spaghetti','Pasta','Ice Cream','Food']         ),
      new ItemBrickPackage('textile', 'Textile', [])
        .addTextile(721, 214, ['Cloth','Fabric','Pattern','White','Green','Plaid','Checker']      )
        .addTextile(722, 215, ['Cloth','Fabric','Pattern','White','Blue','Chevron','Zigzag']      )
        .addTextile(723, 216, ['Cloth','Fabric','Pattern','White','Pink','Polka Dots','Spots']    )
        .addTextile(724, 217, ['Cloth','Fabric','Pattern','White','Yellow','Stripes','Horizontal'])
        .addTextile(725, 218, ['Cloth','Fabric','Pattern','White','Red','Plaid','Diamond']        ),
      new ItemBrickPackage('halloween 2016', 'Halloween 2016', [])
        .addHalloween2016(499 , ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 601, 0x00000000, ['Branch','Root','Wood','Slope','Black','Rotatable','Morphable','Seasonal','Holiday'])
        .addHalloween2016(1500, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 605, 0x00000000, ['Pumpkin','Jack o Lantern','Orange','Morphable','Seasonal','Holiday']               )
        .addHalloween2016(1501, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, 309, 0x00000000, ['Grass','Plant','Purple','Seasonal','Holiday']                                      )
        .addHalloween2016(1502, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 612, 0x00000000, ['Eyes','Orange','Purple','Green','Yellow','Morphable','Seasonal','Holiday']         )
        .addHalloween2016(726 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, 220, -1        , ['Tree','Wood','Black','Seasonal','Holiday']                                         )
        .addHalloween2016(727 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, 221, -1        , ['Leaves','Plant','Purple','Seasonal','Holiday']                                     ),
      new ItemBrickPackage('construction', 'Construction', [])
        .addConstruction(1096, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 265, -1        , ['Plywood','Wood','Brown','Tan']                                     )
        .addConstruction(1097, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 266, -1        , ['Gravel','Stone','Gray','Grey']                                     )
        .addConstruction(1098, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 267, -1        , ['Cement','Stone','Beige']                                           )
        .addConstruction(1099, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 268, -1        , ['Beam','Metal','Red','Horizontal']                                  )
        .addConstruction(1130, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 291, -1        , ['Beam','Metal','Red','Horizontal']                                  )
        .addConstruction(1128, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 289, -1        , ['Beam','Metal','Red','Horizontal']                                  )
        .addConstruction(1129, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 290, -1        , ['Beam','Metal','Red','Vertical']                                    )
        .addConstruction(1131, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 292, -1        , ['Beam','Metal','Red','Vertical']                                    )
        .addConstruction(1100, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 269, -1        , ['Beam','Metal','Red','Vertical']                                    )
        .addConstruction(1503, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 310, 0x00000000, ['Sawhorse','Orange','White','Caution','Sign','Stripes','Horizontal'])
        .addConstruction(1504, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 311, 0x00000000, ['Cone','Orange','White']                                            )
        .addConstruction(1505, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 312, 0x00000000, ['Sign','Orange','Caution','Warning']                                )
        .addConstruction(1532, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 333, 0x00000000, ['Sign','Red','Caution','Warning','Stop']                            )
        .addConstruction(1533, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 334, 0x00000000, ['Red','Fire','Hydrant']                                             )
        .addConstruction(728 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 222, -1        , ['Plywood','Wood','Brown','Tan']                                     )
        .addConstruction(729 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 223, -1        , ['Gravel','Stone','Gray','Grey']                                     )
        .addConstruction(730 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 224, -1        , ['Cement','Stone','Beige']                                           )
        .addConstruction(731 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 225, -1        , ['Beam','Metal','Red','Horizontal']                                  )
        .addConstruction(755 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 249, -1        , ['Beam','Metal','Red','Horizontal']                                  )
        .addConstruction(753 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 247, -1        , ['Beam','Metal','Red','Horizontal']                                  )
        .addConstruction(754 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 248, -1        , ['Beam','Metal','Red','Vertical']                                    )
        .addConstruction(756 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 250, -1        , ['Beam','Metal','Red','Vertical']                                    )
        .addConstruction(732 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, 226, -1        , ['Beam','Metal','Red','Vertical']                                    ),
      new ItemBrickPackage('christmas 2016', 'Christmas 2016', [])
        .addXmas2016(1101, ItemManager.blocksBMD       , ItemTab.BLOCK     , 270, -1        , ['Half block','Present','Gift','Holiday','Wrapping paper','Ribbon','Bow','Red']              )
        .addXmas2016(1102, ItemManager.blocksBMD       , ItemTab.BLOCK     , 271, -1        , ['Half block','Present','Gift','Holiday','Wrapping paper','Ribbon','Bow','Green']            )
        .addXmas2016(1103, ItemManager.blocksBMD       , ItemTab.BLOCK     , 272, -1        , ['Half block','Present','Gift','Holiday','Wrapping paper','Ribbon','Bow','White']            )
        .addXmas2016(1104, ItemManager.blocksBMD       , ItemTab.BLOCK     , 273, -1        , ['Half block','Present','Gift','Holiday','Wrapping paper','Ribbon','Bow','Blue']             )
        .addXmas2016(1105, ItemManager.blocksBMD       , ItemTab.BLOCK     , 274, -1        , ['Half block','Present','Gift','Holiday','Wrapping paper','Ribbon','Bow','Yellow']           )
        .addXmas2016(1507, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 631, 0x00000000, ['Light','String','Wire','Bulb','Holiday','Morphable','Red','Green','Yellow','Blue','Purple'])
        .addXmas2016(1506, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 636, 0x00000000, ['Light','String','Wire','Bulb','Holiday','Morphable','Red','Green','Yellow','Blue','Purple'])
        .addXmas2016(1508, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, 313, 0x00000000, ['Bell','Bow','Holiday','Yellow','Gold']                                                     )
        .addXmas2016(1509, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, 314, 0x00000000, ['Holly Berries','Holiday','Nature','Plant','Red','Green']                                   )
        .addXmas2016(1510, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 640, 0x00000000, ['Candle','Fire','Flame','Holiday','Animated','Red']                                         ),
      new ItemBrickPackage('tiles', 'Tiles', ['Tile'])
        .addTiles(1106, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , 275, ['White']              )
        .addTiles(1107, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , 276, ['Gray','Grey']        )
        .addTiles(1108, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , 277, ['Black','Gray','Grey'])
        .addTiles(1109, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , 278, ['Red']                )
        .addTiles(1110, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , 279, ['Orange']             )
        .addTiles(1111, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , 280, ['Yellow']             )
        .addTiles(1112, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , 281, ['Green']              )
        .addTiles(1113, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , 282, ['Cyan']               )
        .addTiles(1114, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , 283, ['Blue']               )
        .addTiles(1115, ItemLayer.FOREGROUND, ItemManager.blocksBMD  , ItemTab.BLOCK     , 284, ['Purple']             )
        .addTiles(733 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, 227, ['White']              )
        .addTiles(734 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, 228, ['Gray','Grey']        )
        .addTiles(735 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, 229, ['Black','Gray','Grey'])
        .addTiles(736 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, 230, ['Red']                )
        .addTiles(737 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, 231, ['Orange']             )
        .addTiles(738 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, 232, ['Yellow']             )
        .addTiles(739 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, 233, ['Green']              )
        .addTiles(740 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, 234, ['Cyan']               )
        .addTiles(741 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, 235, ['Blue']               )
        .addTiles(742 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD, ItemTab.BACKGROUND, 236, ['Purple']             ),
      new ItemBrickPackage('St. Patricks 2017', 'St. Patricks 2017', [])
        .addStPatricks2017(1511, ItemLayer.ABOVE     , 315, ['Shamrock','Clover','Green','Plant','Nature'])
        .addStPatricks2017(1512, ItemLayer.ABOVE     , 316, ['Pot of Gold']                               )
        .addStPatricks2017(1513, ItemLayer.DECORATION, 317, ['Horseshoe','Gold']                          )
        .addStPatricks2017(1514, ItemLayer.DECORATION, 318, ['Rainbow','Left']                            )
        .addStPatricks2017(1515, ItemLayer.DECORATION, 319, ['Rainbow','Right']                           ),
      new ItemBrickPackage('Half Blocks', 'Half Blocks', [])
        .addHalfBlocks(1116, 668, ['White']              )
        .addHalfBlocks(1117, 672, ['Gray','Grey']        )
        .addHalfBlocks(1118, 676, ['Black','Gray','Grey'])
        .addHalfBlocks(1119, 680, ['Red']                )
        .addHalfBlocks(1120, 684, ['Orange']             )
        .addHalfBlocks(1121, 688, ['Yellow']             )
        .addHalfBlocks(1122, 692, ['Green']              )
        .addHalfBlocks(1123, 696, ['Cyan']               )
        .addHalfBlocks(1124, 700, ['Blue']               )
        .addHalfBlocks(1125, 704, ['Purple']             ),
      new ItemBrickPackage('Winter 2018', 'Winter 2018', ['Winter'])
        .addWinter2018(1136, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 295, -1        , ['Ice','Brick','Cyan','Snow']                                  )
        .addWinter2018(1137, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 296, -1        , ['Snow','Pile','Grey','Gray','White']                          )
        .addWinter2018(1138, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 297, -1        , ['Glacier','Snow','Ice','Cyan','Blue']                         )
        .addWinter2018(1139, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 298, -1        , ['Slate','Grey','Gray']                                        )
        .addWinter2018(1140, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , true , 732, -1        , ['Half Block','Morphable','Snow','Pile','Grey','Gray','White'] )
        .addWinter2018(1141, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , true , 736, -1        , ['Half Block','Morphable','Glacier','Snow','Ice','Cyan','Blue'])
        .addWinter2018(1543, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 339, 0x00000000, ['Snow','Pile','Small','White','Grey','Gray']                  )
        .addWinter2018(1544, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 340, 0x00000000, ['Snow','Pile','Left','White','Grey','Gray']                   )
        .addWinter2018(1545, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 341, 0x00000000, ['Snow','Pile','Right','White','Grey','Gray']                  )
        .addWinter2018(1546, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 342, 0x00000000, ['Snowman','Hat','Carrot','Scarf','White','Grey','Gray']       )
        .addWinter2018(1547, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 343, 0x00000000, ['Tree','Wood','Snow','Brown','White']                         )
        .addWinter2018(1548, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 344, 0x00000000, ['Snowflake','Large','Sky']                                    )
        .addWinter2018(1549, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 345, 0x00000000, ['Snowflake','Small','Sky']                                    )
        .addWinter2018(757 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 251, -1        , ['Ice','Brick','Cyan','Snow']                                  )
        .addWinter2018(758 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 252, -1        , ['Snow','Pile','Grey','Gray','White']                          )
        .addWinter2018(759 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 253, -1        , ['Glacier','Snow','Ice','Cyan','Blue']                         )
        .addWinter2018(760 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, true , 254, -1        , ['Slate','Grey','Gray','Winter']                               ),
      new ItemBrickPackage('Garden', 'Garden', ['Garden'])
        .addGarden(1143, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 300, -1        , ['Rock','Environment','Brown','Soil','Dark','Dirt']        )
        .addGarden(1144, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 301, -1        , ['Grass','Moss','Environment','Brown','Soil','Dark','Dirt'])
        .addGarden(1145, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 302, -1        , ['Leaves','Green','Leaf','Nature','Plant']                 )
        .addGarden(1560, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 346, 0x00000000, ['Grass','Green','Nature','Plant','Short']                 )
        .addGarden(1561, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 347, 0x00000000, ['Fence','White','Short','Post']                           )
        .addGarden(1562, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 348, 0x00000000, ['Fence','Brown','Lattice','Wood']                         )
        .addGarden(1147, ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 304, 0x00000000, ['Flower','Green','Pink','Vine','Bean','Stalk']            )
        .addGarden(1148, ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 305, 0x00000000, ['Leaf','Green','Bean','Stalk','Left']                     )
        .addGarden(1149, ItemLayer.DECORATION, ItemManager.blocksBMD    , ItemTab.BLOCK     , true , 306, 0x00000000, ['Leaf','Green','Bean','Stalk','Right']                    )
        .addGarden(1564, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 349, 0x00000000, ['Snail','Shell']                                          )
        .addGarden(1565, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 350, 0x00000000, ['Butterfly']                                              )
        .addGarden(761 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 255, -1        , ['Rock','Environment','Brown','Soil','Dark','Dirt','Rock'] )
        .addGarden(762 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 256, -1        , ['Grass','Moss','Environment','Brown','Soil','Dark','Dirt'])
        .addGarden(763 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true , 257, -1        , ['Leaves','Green','Leaf','Nature','Plant']                 )
        .addGarden(1566, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 351, 0x00000000, ['Wood','Frame','Window','Brown','Peep','Hole']            ),
      new ItemBrickPackage('Fireworks', 'Fireworks', [])
        .addFireworks(),
      new ItemBrickPackage('Toxic', 'Toxic', ['Toxic'])
        .addToxic(1586, ItemLayer.ABOVE     , ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 774, 0x00000000, ['Toxic','Waste','Green','Glow']                                                                                       )
        .addToxic(1587, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 788, 0x00000000, ['Toxic','Waste','Barrel','Leaking','Green','Glow','Morphable']                                                        )
        .addToxic(1588, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 789, 0x00000000, ['Sewer','Pipe','Drain','Water','Blue','Lava','Orange','Mud','Swamp','Bog','Brown','Toxic','Waste','Green','Morphable'])
        .addToxic(765 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 258, -1        , ['Toxic','Waste','Green']                                                                                              )
        .addToxic(1589, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 356, 0x00000000, ['Rusty','Rusted','Broken','Metal','Ladder','Vertical','Industrial']                                                   )
        .addToxic(1590, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 357, 0x00000000, ['Rusty','Rusted','Metal','Guard','Rail']                                                                              )
        .addToxic(1155, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , true , 795, -1        , ['Rusty','Rusted','One way','One-way','Metal','Platform','Morphable']                                                  ),
      new ItemBrickPackage('Special', 'Special', [])
        .addSpecial(1591, ItemLayer.ABOVE     , 'blockgoldenegg' , true , false, 358)
        .addSpecial(1603, ItemLayer.DECORATION, 'brickgreenspace', false, true , 363)
        .addSpecial(1604, ItemLayer.DECORATION, 'brickgoldsack'  , false, true , 364),
      new ItemBrickPackage('Dungeon', 'Dungeon', ['Halloween','Dungeon'])
        .addDungeon(1156, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 311, -1        , ['Grey','Gray','Dungeon','Brick']                                 )
        .addDungeon(1157, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 312, -1        , ['Green','Dungeon','Brick']                                       )
        .addDungeon(1158, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 313, -1        , ['Blue','Dungeon','Brick']                                        )
        .addDungeon(1159, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 314, -1        , ['Purple','Dungeon','Brick']                                      )
        .addDungeon(769 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 262, -1        , ['Grey','Gray','Dungeon','Brick']                                 )
        .addDungeon(770 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 263, -1        , ['Green','Dungeon','Brick']                                       )
        .addDungeon(771 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 264, -1        , ['Blue','Dungeon','Brick']                                        )
        .addDungeon(772 , ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 265, -1        , ['Purple','Dungeon','Brick']                                      )
        .addDungeon(1592, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 799, 0x00000000, ['Dungeon','Brick','Pillar','Bottom','Morphable']                 )
        .addDungeon(1593, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 803, 0x00000000, ['Dungeon','Brick','Pillar','Middle','Morphable']                 )
        .addDungeon(1160, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.BLOCK     , true , 807, 0x00000000, ['Dungeon','Brick','Pillar','Top','Morphable','One Way','One-Way'])
        .addDungeon(1594, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 811, 0x00000000, ['Dungeon','Brick','Arch','Left','Morphable']                     )
        .addDungeon(1595, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 815, 0x00000000, ['Dungeon','Brick','Arch','Right','Morphable']                    )
        .addDungeon(1597, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 830, 0x00000000, ['Dungeon','Torch','Fire','Morphable']                            )
        .addDungeon(1598, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 359, 0x00000000, ['Dungeon','Bars','Window']                                       )
        .addDungeon(1599, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 360, 0x00000000, ['Dungeon','Chain','Ring']                                        )
        .addDungeon(1600, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 361, 0x00000000, ['Dungeon','Chain','Hook']                                        )
        .addDungeon(1601, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 362, 0x00000000, ['Dungeon','Lock','Padlock']                                      ),
      new ItemBrickPackage('Shadows', 'Shadows', ['Shadows','Dark','Glow'])
        .addShadows(1596, 1 , ['Morphable'])
        .addShadows(1605, 5 , ['Morphable'])
        .addShadows(1606, 9 , ['Morphable'])
        .addShadows(1607, 11, ['Morphable'])
        .addShadows(1608, 14, []           )
        .addShadows(1609, 16, ['Morphable'])
        .addShadows(1610, 20, ['Morphable'])
        .addShadows(1611, 24, ['Morphable'])
        .addShadows(1612, 26, ['Morphable'])
        .addShadows(1613, 29, []           )
        .addShadows(1614, 31, ['Morphable'])
        .addShadows(1615, 35, ['Morphable'])
        .addShadows(1616, 39, ['Morphable'])
        .addShadows(1617, 43, ['Morphable'])
      // TODO: npc
    ];

    function BS(sprName, bmdName, offset, frames, shadow){
      const srcBmd = ItemManager[bmdName];
      if (!srcBmd)
        throw new Error('Missing: ' + bmdName);
      if (!frames)
        frames = srcBmd.width / 16;
      const width = 16;
      const height = 16;
      ItemManager[sprName] = new BlSprite(srcBmd, offset, width, height, frames, shadow);
    }

    BS('sprCheckpoint'                , 'specialBlocksBMD'          , 154,    2, false);
    BS('sprSpikes'                    , 'specialBlocksBMD'          , 156,    4, false);
    BS('sprSpikesSilver'              , 'specialBlocksBMD'          , 868,    4, false);
    BS('sprSpikesBlack'               , 'specialBlocksBMD'          , 873,    4, false);
    BS('sprSpikesRed'                 , 'specialBlocksBMD'          , 878,    4, false);
    BS('sprSpikesGold'                , 'specialBlocksBMD'          , 883,    4, false);
    BS('sprSpikesGreen'               , 'specialBlocksBMD'          , 888,    4, false);
    BS('sprSpikesBlue'                , 'specialBlocksBMD'          , 893,    4, false);
    BS('sprDoors'                     , 'doorBlocksBMD'             ,   0, null, false);
    BS('sprDoorsTime'                 , 'specialBlocksBMD'          , 332,   10, true );
    BS('sprSecret'                    , 'specialBlocksBMD'          , 139,    3, false);
    BS('sprPortal'                    , 'specialBlocksBMD'          ,  52,   61, false);
    BS('sprPortalWorld'               , 'specialBlocksBMD'          , 113,   21, false);
    BS('sprCoin'                      , 'specialBlocksBMD'          ,   0,   12, false);
    BS('sprCoinShadow'                , 'specialBlocksBMD'          ,  26,   12, false);
    BS('sprBonusCoin'                 , 'specialBlocksBMD'          ,  13,   12, false);
    BS('sprBonusCoinShadow'           , 'specialBlocksBMD'          ,  39,   12, false);
    BS('sprWater'                     , 'specialBlocksBMD'          , 196,   22, false);
    BS('sprToxic'                     , 'specialBlocksBMD'          , 746,   22, false);
    BS('sprToxicBubble'               , 'specialBlocksBMD'          , 768,   22, false);
    BS('sprWave'                      , 'specialBlocksBMD'          , 234,    8, false);
    BS('sprMud'                       , 'mudBlocksBMD'              ,   0, null, false);
    BS('sprMudBubble'                 , 'specialBlocksBMD'          , 244,   19, false);
    BS('sprFavoriteStar'              , 'favoriteBMD'               ,   0, null, false);
    BS('sprLikeHeart'                 , 'likeBMD'                   ,   0, null, false);
    BS('sprDiamond'                   , 'specialBlocksBMD'          , 284,   14, true );
    BS('sprCake'                      , 'specialBlocksBMD'          , 298,   12, true );
    BS('sprPianoBlink'                , 'specialBlocksBMD'          , 148,    6, false);
    BS('sprDrumsBlink'                , 'specialBlocksBMD'          , 142,    6, false);
    BS('sprInvGravityBlink'           , 'specialBlocksBMD'          , 312,   20, false);
    BS('sprInvDotBlink'               , 'specialBlocksBMD'          , 466,    5, false);
    BS('sprFireHazard'                , 'specialBlocksBMD'          , 184,   12, false);
    BS('sprHologram'                  , 'specialBlocksBMD'          , 279,    5, true );
    BS('sprLava'                      , 'specialBlocksBMD'          , 218,   16, false);
    BS('sprGravityEffect'             , 'effectBlocksBMD'           ,  17,    5, true );
    BS('sprTeamEffect'                , 'teamBlocksBMD'             ,   0, null, true );
    BS('sprEffect'                    , 'effectBlocksBMD'           ,   0, null, true );
    BS('sprSign'                      , 'specialBlocksBMD'          , 513,    8, false);
    BS('sprOnewayCyan'                , 'specialBlocksBMD'          , 263,    4, true );
    BS('sprOnewayOrange'              , 'specialBlocksBMD'          , 271,    4, true );
    BS('sprOnewayYellow'              , 'specialBlocksBMD'          , 267,    4, true );
    BS('sprOnewayPink'                , 'specialBlocksBMD'          , 275,    4, true );
    BS('sprOnewayGray'                , 'specialBlocksBMD'          , 471,    4, true );
    BS('sprOnewayBlue'                , 'specialBlocksBMD'          , 475,    4, true );
    BS('sprOnewayRed'                 , 'specialBlocksBMD'          , 479,    4, true );
    BS('sprOnewayGreen'               , 'specialBlocksBMD'          , 483,    4, true );
    BS('sprOnewayBlack'               , 'specialBlocksBMD'          , 487,    4, true );
    BS('sprOnewayWhite'               , 'specialBlocksBMD'          , 565,    4, true );
    BS('sprGlowylineBlueSlope'        , 'specialBlocksBMD'          , 176,    4, false);
    BS('sprGlowylineBlueStraight'     , 'specialBlocksBMD'          , 180,    4, false);
    BS('sprGlowylineGreenSlope'       , 'specialBlocksBMD'          , 168,    4, false);
    BS('sprGlowylineGreenStraight'    , 'specialBlocksBMD'          , 172,    4, false);
    BS('sprGlowylineYellowSlope'      , 'specialBlocksBMD'          , 160,    4, false);
    BS('sprGlowylineYellowStraight'   , 'specialBlocksBMD'          , 164,    4, false);
    BS('sprGlowylineRedSlope'         , 'specialBlocksBMD'          , 408,    4, false);
    BS('sprGlowylineRedStraight'      , 'specialBlocksBMD'          , 412,    4, false);
    BS('sprMedievalAxe'               , 'specialBlocksBMD'          , 364,    4, false);
    BS('sprMedievalBanner'            , 'specialBlocksBMD'          , 368,    4, false);
    BS('sprMedievalShield'            , 'specialBlocksBMD'          , 372,    4, false);
    BS('sprMedievalSword'             , 'specialBlocksBMD'          , 376,    4, false);
    BS('sprMedievalCoatOfArms'        , 'specialBlocksBMD'          , 404,    4, false);
    BS('sprMedievalTimber'            , 'specialBlocksBMD'          , 416,    6, false);
    BS('sprToothSmall'                , 'specialBlocksBMD'          , 380,    4, false);
    BS('sprToothBig'                  , 'specialBlocksBMD'          , 384,    4, false);
    BS('sprToothTriple'               , 'specialBlocksBMD'          , 400,    4, false);
    BS('sprDojoLightLeft'             , 'specialBlocksBMD'          , 388,    3, false);
    BS('sprDojoLightRight'            , 'specialBlocksBMD'          , 391,    3, false);
    BS('sprDojoDarkLeft'              , 'specialBlocksBMD'          , 394,    3, false);
    BS('sprDojoDarkRight'             , 'specialBlocksBMD'          , 397,    3, false);
    BS('sprDomesticLightBulb'         , 'specialBlocksBMD'          , 424,    4, false);
    BS('sprDomesticTap'               , 'specialBlocksBMD'          , 428,    4, true );
    BS('sprDomesticPainting'          , 'specialBlocksBMD'          , 432,    4, false);
    BS('sprDomesticVase'              , 'specialBlocksBMD'          , 436,    4, false);
    BS('sprDomesticTV'                , 'specialBlocksBMD'          , 440,    4, false);
    BS('sprDomesticWindow'            , 'specialBlocksBMD'          , 444,    4, false);
    BS('sprHalfBlockDomesticYellow'   , 'specialBlocksBMD'          , 448,    4, true );
    BS('sprHalfBlockDomesticBrown'    , 'specialBlocksBMD'          , 452,    4, true );
    BS('sprHalfBlockDomesticWhite'    , 'specialBlocksBMD'          , 456,    4, true );
    BS('sprHalfBlockWhite'            , 'specialBlocksBMD'          , 667,    4, true );
    BS('sprHalfBlockGray'             , 'specialBlocksBMD'          , 671,    4, true );
    BS('sprHalfBlockBlack'            , 'specialBlocksBMD'          , 675,    4, true );
    BS('sprHalfBlockRed'              , 'specialBlocksBMD'          , 679,    4, true );
    BS('sprHalfBlockOrange'           , 'specialBlocksBMD'          , 683,    4, true );
    BS('sprHalfBlockYellow'           , 'specialBlocksBMD'          , 687,    4, true );
    BS('sprHalfBlockGreen'            , 'specialBlocksBMD'          , 691,    4, true );
    BS('sprHalfBlockCyan'             , 'specialBlocksBMD'          , 695,    4, true );
    BS('sprHalfBlockBlue'             , 'specialBlocksBMD'          , 699,    4, true );
    BS('sprHalfBlockPurple'           , 'specialBlocksBMD'          , 703,    4, true );
    BS('sprHalloween2015WindowRect'   , 'specialBlocksBMD'          , 460,    2, false);
    BS('sprHalloween2015WindowCircle' , 'specialBlocksBMD'          , 462,    2, false);
    BS('sprHalloween2015Lamp'         , 'specialBlocksBMD'          , 464,    2, false);
    BS('sprNewYear2015Balloon'        , 'specialBlocksBMD'          , 491,    5, false);
    BS('sprNewYear2015Streamer'       , 'specialBlocksBMD'          , 496,    5, false);
    BS('sprPortalInvisible'           , 'specialBlocksBMD'          , 134,    5, false);
    BS('sprIce'                       , 'specialBlocksBMD'          , 501,   12, true );
    BS('sprHalfBlockFairytaleRed'     , 'specialBlocksBMD'          , 521,    4, true );
    BS('sprHalfBlockFairytaleGreen'   , 'specialBlocksBMD'          , 525,    4, true );
    BS('sprHalfBlockFairytaleBlue'    , 'specialBlocksBMD'          , 529,    4, true );
    BS('sprHalfBlockFairytalePink'    , 'specialBlocksBMD'          , 533,    4, true );
    BS('sprFairytaleFlowers'          , 'specialBlocksBMD'          , 537,    3, true );
    BS('sprSpringDaisy'               , 'specialBlocksBMD'          , 540,    3, true );
    BS('sprSpringTulip'               , 'specialBlocksBMD'          , 543,    3, true );
    BS('sprSpringDaffodil'            , 'specialBlocksBMD'          , 546,    3, true );
    BS('sprSummerFlag'                , 'specialBlocksBMD'          , 549,    6, true );
    BS('sprSummerAwning'              , 'specialBlocksBMD'          , 555,    6, true );
    BS('sprSummerIceCream'            , 'specialBlocksBMD'          , 561,    4, true );
    BS('sprCaveCrystal'               , 'specialBlocksBMD'          , 569,    6, true );
    BS('sprCaveTorch'                 , 'specialBlocksBMD'          , 575,   12, false);
    BS('sprRestaurantCup'             , 'specialBlocksBMD'          , 587,    4, true );
    BS('sprRestaurantPlate'           , 'specialBlocksBMD'          , 591,    5, true );
    BS('sprRestaurantBowl'            , 'specialBlocksBMD'          , 596,    4, true );
    BS('sprHalloweenEyes'             , 'specialBlocksBMD'          , 606,   24, false);
    BS('sprHalloweenPumpkin'          , 'specialBlocksBMD'          , 604,    2, true );
    BS('sprHalloweenRot'              , 'specialBlocksBMD'          , 600,    4, false);
    BS('sprChristmas2016LightsDown'   , 'specialBlocksBMD'          , 630,    5, false);
    BS('sprChristmas2016LightsUp'     , 'specialBlocksBMD'          , 635,    5, false);
    BS('sprChristmas2016Candle'       , 'specialBlocksBMD'          , 640,   12, false);
    BS('sprGuitarBlink'               , 'specialBlocksBMD'          , 661,    6, false);
    BS('sprInvGravityDownBlink'       , 'specialBlocksBMD'          , 652,    5, false);
    BS('sprIndustrialPipeThin'        , 'specialBlocksBMD'          , 707,    2, true );
    BS('sprIndustrialPipeThick'       , 'specialBlocksBMD'          , 709,    2, true );
    BS('sprIndustrialTable'           , 'specialBlocksBMD'          , 711,    3, true );
    BS('sprDomesticPipeStraight'      , 'specialBlocksBMD'          , 714,    2, true );
    BS('sprDomesticPipeT'             , 'specialBlocksBMD'          , 716,    4, true );
    BS('sprDomesticFrameBorder'       , 'specialBlocksBMD'          , 720,   11, true );
    BS('sprHalfBlockWinter2018Snow'   , 'specialBlocksBMD'          , 731,    4, true );
    BS('sprHalfBlockWinter2018Glacier', 'specialBlocksBMD'          , 735,    4, true );
    BS('sprToxicWasteBarrel'          , 'specialBlocksBMD'          , 787,    2, true );
    BS('sprSewerPipe'                 , 'specialBlocksBMD'          , 789,    5, false);
    BS('sprMetalPlatform'             , 'specialBlocksBMD'          , 794,    4, true );
    BS('sprFireworks'                 , 'specialBlocksBMD'          , 740,    3, false);
    BS('sprDungeonPillarBottom'       , 'specialBlocksBMD'          , 798,    4, true );
    BS('sprDungeonPillarMiddle'       , 'specialBlocksBMD'          , 802,    4, true );
    BS('sprDungeonPillarTop'          , 'specialBlocksBMD'          , 806,    4, true );
    BS('sprDungeonArchLeft'           , 'specialBlocksBMD'          , 810,    4, true );
    BS('sprDungeonArchRight'          , 'specialBlocksBMD'          , 814,    4, true );
    BS('sprDungeonTorch'              , 'specialBlocksBMD'          , 818,   48, false);
    BS('sprShadowA'                   , 'shadowBlocksBMD'           ,   0,    4, false);
    BS('sprShadowB'                   , 'shadowBlocksBMD'           ,   4,    4, false);
    BS('sprShadowC'                   , 'shadowBlocksBMD'           ,   8,    2, false);
    BS('sprShadowD'                   , 'shadowBlocksBMD'           ,  10,    4, false);
    BS('sprShadowF'                   , 'shadowBlocksBMD'           ,  15,    4, false);
    BS('sprShadowG'                   , 'shadowBlocksBMD'           ,  19,    4, false);
    BS('sprShadowH'                   , 'shadowBlocksBMD'           ,  23,    2, false);
    BS('sprShadowI'                   , 'shadowBlocksBMD'           ,  25,    4, false);
    BS('sprShadowK'                   , 'shadowBlocksBMD'           ,  30,    4, false);
    BS('sprShadowL'                   , 'shadowBlocksBMD'           ,  34,    4, false);
    BS('sprShadowM'                   , 'shadowBlocksBMD'           ,  38,    4, false);
    BS('sprShadowN'                   , 'shadowBlocksBMD'           ,  42,    4, false);

    // TODO:
    //ItemManager.sprParticles:BlSprite          = new BlSprite(allParticles, 0, 0, 5, 5, allParticles.width/5);

    // cache brick by id
    for (const bp of ItemManager.brickPackages){
      for (const brick of bp.bricks)
        ItemManager.bricks[brick.id] = brick;
    }

    // fill in missing bricks
    for (let i = 0; i < ItemManager.bricks.length; i++)
      ItemManager.bricks[i] = ItemManager.bricks[i] || ItemManager.bricks[0].copy(i);
  }

  static getRotateableSprite(type){
    switch (type){
      case ItemId.GLOWY_LINE_BLUE_SLOPE:        return ItemManager.sprGlowylineBlueSlope;
      case ItemId.GLOWY_LINE_BLUE_STRAIGHT:     return ItemManager.sprGlowylineBlueStraight;
      case ItemId.GLOWY_LINE_GREEN_SLOPE:       return ItemManager.sprGlowylineGreenSlope;
      case ItemId.GLOWY_LINE_GREEN_STRAIGHT:    return ItemManager.sprGlowylineGreenStraight;
      case ItemId.GLOWY_LINE_YELLOW_SLOPE:      return ItemManager.sprGlowylineYellowSlope;
      case ItemId.GLOWY_LINE_YELLOW_STRAIGHT:   return ItemManager.sprGlowylineYellowStraight;
      case ItemId.GLOWY_LINE_RED_SLOPE:         return ItemManager.sprGlowylineRedSlope;
      case ItemId.GLOWY_LINE_RED_STRAIGHT:      return ItemManager.sprGlowylineRedStraight;
      case ItemId.ONEWAY_CYAN:                  return ItemManager.sprOnewayCyan;
      case ItemId.ONEWAY_YELLOW:                return ItemManager.sprOnewayYellow;
      case ItemId.ONEWAY_ORANGE:                return ItemManager.sprOnewayOrange;
      case ItemId.ONEWAY_PINK:                  return ItemManager.sprOnewayPink;
      case ItemId.ONEWAY_GRAY:                  return ItemManager.sprOnewayGray;
      case ItemId.ONEWAY_BLUE:                  return ItemManager.sprOnewayBlue;
      case ItemId.ONEWAY_RED:                   return ItemManager.sprOnewayRed;
      case ItemId.ONEWAY_GREEN:                 return ItemManager.sprOnewayGreen;
      case ItemId.ONEWAY_BLACK:                 return ItemManager.sprOnewayBlack;
      case ItemId.ONEWAY_WHITE:                 return ItemManager.sprOnewayWhite;
      case ItemId.MEDIEVAL_AXE:                 return ItemManager.sprMedievalAxe;
      case ItemId.MEDIEVAL_BANNER:              return ItemManager.sprMedievalBanner;
      case ItemId.MEDIEVAL_COATOFARMS:          return ItemManager.sprMedievalCoatOfArms;
      case ItemId.MEDIEVAL_SHIELD:              return ItemManager.sprMedievalShield;
      case ItemId.MEDIEVAL_SWORD:               return ItemManager.sprMedievalSword;
      case ItemId.MEDIEVAL_TIMBER:              return ItemManager.sprMedievalTimber;
      case ItemId.TOOTH_BIG:                    return ItemManager.sprToothBig;
      case ItemId.TOOTH_SMALL:                  return ItemManager.sprToothSmall;
      case ItemId.TOOTH_TRIPLE:                 return ItemManager.sprToothTriple;
      case ItemId.DOJO_LIGHT_LEFT:              return ItemManager.sprDojoLightLeft;
      case ItemId.DOJO_LIGHT_RIGHT:             return ItemManager.sprDojoLightRight;
      case ItemId.DOJO_DARK_LEFT:               return ItemManager.sprDojoDarkLeft;
      case ItemId.DOJO_DARK_RIGHT:              return ItemManager.sprDojoDarkRight;
      case ItemId.DOMESTIC_LIGHT_BULB:          return ItemManager.sprDomesticLightBulb;
      case ItemId.DOMESTIC_TAP:                 return ItemManager.sprDomesticTap;
      case ItemId.DOMESTIC_PAINTING:            return ItemManager.sprDomesticPainting;
      case ItemId.DOMESTIC_VASE:                return ItemManager.sprDomesticVase;
      case ItemId.DOMESTIC_TV:                  return ItemManager.sprDomesticTV
      case ItemId.DOMESTIC_WINDOW:              return ItemManager.sprDomesticWindow;
      case ItemId.HALFBLOCK_DOMESTIC_BROWN:     return ItemManager.sprHalfBlockDomesticBrown;
      case ItemId.HALFBLOCK_DOMESTIC_WHITE:     return ItemManager.sprHalfBlockDomesticWhite;
      case ItemId.HALFBLOCK_DOMESTIC_YELLOW:    return ItemManager.sprHalfBlockDomesticYellow;
      case ItemId.HALLOWEEN_2015_WINDOW_RECT:   return ItemManager.sprHalloween2015WindowRect;
      case ItemId.HALLOWEEN_2015_WINDOW_CIRCLE: return ItemManager.sprHalloween2015WindowCircle;
      case ItemId.HALLOWEEN_2015_LAMP:          return ItemManager.sprHalloween2015Lamp;
      case ItemId.NEW_YEAR_2015_BALLOON:        return ItemManager.sprNewYear2015Balloon;
      case ItemId.NEW_YEAR_2015_STREAMER:       return ItemManager.sprNewYear2015Streamer;
      case ItemId.HALFBLOCK_FAIRYTALE_ORANGE:   return ItemManager.sprHalfBlockFairytaleRed;
      case ItemId.HALFBLOCK_FAIRYTALE_GREEN:    return ItemManager.sprHalfBlockFairytaleGreen;
      case ItemId.HALFBLOCK_FAIRYTALE_BLUE:     return ItemManager.sprHalfBlockFairytaleBlue;
      case ItemId.HALFBLOCK_FAIRYTALE_PINK:     return ItemManager.sprHalfBlockFairytalePink;
      case ItemId.FAIRYTALE_FLOWERS:            return ItemManager.sprFairytaleFlowers;
      case ItemId.SPRING_TULIP:                 return ItemManager.sprSpringTulip;
      case ItemId.SPRING_DAISY:                 return ItemManager.sprSpringDaisy;
      case ItemId.SPRING_DAFFODIL:              return ItemManager.sprSpringDaffodil;
      case ItemId.SUMMER_FLAG:                  return ItemManager.sprSummerFlag;
      case ItemId.SUMMER_AWNING:                return ItemManager.sprSummerAwning;
      case ItemId.SUMMER_ICECREAM:              return ItemManager.sprSummerIceCream;
      case ItemId.CAVE_TORCH:                   return ItemManager.sprCaveTorch;
      case ItemId.CAVE_CRYSTAL:                 return ItemManager.sprCaveCrystal;
      case ItemId.RESTAURANT_CUP:               return ItemManager.sprRestaurantCup;
      case ItemId.RESTAURANT_PLATE:             return ItemManager.sprRestaurantPlate;
      case ItemId.RESTAURANT_BOWL:              return ItemManager.sprRestaurantBowl;
      case ItemId.HALLOWEEN_2016_ROTATABLE:     return ItemManager.sprHalloweenRot;
      case ItemId.HALLOWEEN_2016_EYES:          return ItemManager.sprHalloweenEyes;
      case ItemId.HALLOWEEN_2016_PUMPKIN:       return ItemManager.sprHalloweenPumpkin;
      case ItemId.CHRISTMAS_2016_LIGHTS_DOWN:   return ItemManager.sprChristmas2016LightsDown;
      case ItemId.CHRISTMAS_2016_LIGHTS_UP:     return ItemManager.sprChristmas2016LightsUp;
      case ItemId.HALFBLOCK_WHITE:              return ItemManager.sprHalfBlockWhite;
      case ItemId.HALFBLOCK_GRAY:               return ItemManager.sprHalfBlockGray;
      case ItemId.HALFBLOCK_BLACK:              return ItemManager.sprHalfBlockBlack;
      case ItemId.HALFBLOCK_RED:                return ItemManager.sprHalfBlockRed;
      case ItemId.HALFBLOCK_ORANGE:             return ItemManager.sprHalfBlockOrange;
      case ItemId.HALFBLOCK_YELLOW:             return ItemManager.sprHalfBlockYellow;
      case ItemId.HALFBLOCK_GREEN:              return ItemManager.sprHalfBlockGreen;
      case ItemId.HALFBLOCK_CYAN:               return ItemManager.sprHalfBlockCyan;
      case ItemId.HALFBLOCK_BLUE:               return ItemManager.sprHalfBlockBlue;
      case ItemId.HALFBLOCK_PURPLE:             return ItemManager.sprHalfBlockPurple;
      case ItemId.INDUSTRIAL_PIPE_THIN:         return ItemManager.sprIndustrialPipeThin;
      case ItemId.INDUSTRIAL_PIPE_THICK:        return ItemManager.sprIndustrialPipeThick;
      case ItemId.INDUSTRIAL_TABLE:             return ItemManager.sprIndustrialTable;
      case ItemId.DOMESTIC_PIPE_STRAIGHT:       return ItemManager.sprDomesticPipeStraight;
      case ItemId.DOMESTIC_PIPE_T:              return ItemManager.sprDomesticPipeT;
      case ItemId.DOMESTIC_FRAME_BORDER:        return ItemManager.sprDomesticFrameBorder;
      case ItemId.HALFBLOCK_WINTER2018_SNOW:    return ItemManager.sprHalfBlockWinter2018Snow;
      case ItemId.HALFBLOCK_WINTER2018_GLACIER: return ItemManager.sprHalfBlockWinter2018Glacier;
      case ItemId.FIREWORKS:                    return ItemManager.sprFireworks;
      case ItemId.TOXIC_WASTE_BARREL:           return ItemManager.sprToxicWasteBarrel;
      case ItemId.SEWER_PIPE:                   return ItemManager.sprSewerPipe;
      case ItemId.ONEWAY_TOXIC:                 return ItemManager.sprMetalPlatform;
      case ItemId.DUNGEON_PILLAR_BOTTOM:        return ItemManager.sprDungeonPillarBottom;
      case ItemId.DUNGEON_PILLAR_MIDDLE:        return ItemManager.sprDungeonPillarMiddle;
      case ItemId.ONEWAY_DUNGEON:               return ItemManager.sprDungeonPillarTop;
      case ItemId.DUNGEON_ARCH_LEFT:            return ItemManager.sprDungeonArchLeft;
      case ItemId.DUNGEON_ARCH_RIGHT:           return ItemManager.sprDungeonArchRight;
      case ItemId.SHADOW_A:                     return ItemManager.sprShadowA;
      case ItemId.SHADOW_B:                     return ItemManager.sprShadowB;
      case ItemId.SHADOW_C:                     return ItemManager.sprShadowC;
      case ItemId.SHADOW_D:                     return ItemManager.sprShadowD;
      case ItemId.SHADOW_F:                     return ItemManager.sprShadowF;
      case ItemId.SHADOW_G:                     return ItemManager.sprShadowG;
      case ItemId.SHADOW_H:                     return ItemManager.sprShadowH;
      case ItemId.SHADOW_I:                     return ItemManager.sprShadowI;
      case ItemId.SHADOW_K:                     return ItemManager.sprShadowK;
      case ItemId.SHADOW_L:                     return ItemManager.sprShadowL;
      case ItemId.SHADOW_M:                     return ItemManager.sprShadowM;
      case ItemId.SHADOW_N:                     return ItemManager.sprShadowN;
      default:
        return null;
    }
  }
}

//
// StaticLookup
//

class StaticLookupItem {
  static defaultPortal      = {id: -1, target: -1, rotation: 0, type: ItemId.PORTAL};
  static defaultWorldPortal = {id: '', name: '', target: 0};
  static defaultLabel       = {text: ':)', color: '#ffffff', wrapLength: 200};
  static defaultSign        = {text: 'Undefined', type: -1};

  num         = 0;
  portal      = StaticLookupItem.defaultPortal;
  worldPortal = StaticLookupItem.defaultWorldPortal;
  label       = StaticLookupItem.defaultLabel;
  sign        = StaticLookupItem.defaultSign;
  npc         = null;
}

class StaticLookup {
  frozen = false;
  width;
  height;
  lookup;

  constructor(width, height){
    this.width = width;
    this.height = height;
    const size = this.width * this.height;
    this.lookup = [];
    for (let i = 0; i < size; i++)
      this.lookup.push(new StaticLookupItem());
  }

  freeze(){
    this.frozen = true;
  }

  checkUnfrozen(){
    if (this.frozen)
      throw new Error('Can\'t edit lookup anymore');
  }

  deleteLookup(x, y){
    this.checkUnfrozen();
    this.lookup[x + y * this.width] = new StaticLookupItem();
  }

  getInt(x, y){
    return this.lookup[x + y * this.width].num | 0;
  }

  setInt(x, y, value){
    this.checkUnfrozen();
    this.lookup[x + y * this.width].num = value | 0;
  }

  getBoolean(x, y){
    return this.lookup[x + y * this.width].num !== 0;
  }

  getTextSign(x, y){
    return this.lookup[x + y * this.width].sign;
  }

  setTextSign(x, y, value){
    this.checkUnfrozen();
    this.lookup[x + y * this.width].sign = value;
  }

  getLabel(x, y){
    return this.lookup[x + y * this.width].label;
  }

  setLabel(x, y, text, color, wrapLength){
    this.checkUnfrozen();
    this.lookup[x + y * this.width].label = {text, color, wrapLength};
  }

  getPortal(x, y){
    return this.lookup[x + y * this.width].portal;
  }

  setPortal(x, y, value){
    this.checkUnfrozen();
    this.lookup[x + y * this.width].portal = value;
  }

  getWorldPortal(x, y){
    return this.lookup[x + y * this.width].worldPortal;
  }

  setWorldPortal(x, y, value){
    this.checkUnfrozen();
    this.lookup[x + y * this.width].worldPortal = value;
  }

  setWorldPortalName(x, y, name){
    const wp = this.lookup[x + y * this.width].worldPortal;
    if (wp.name === name)
      return;
    // allow '' => 'something' despite being frozen
    if (wp.name !== '')
      this.checkUnfrozen();
    wp.name = name;
  }

  getPortals(portalId){
    const size = this.width * this.height;
    const portals = [];
    for (let i = 0; i < size; i++){
      const p = this.lookup[i].portal;
      if (p.id === portalId){
        portals.push({
          x: (i % this.width) << 4,
          y: (Math.floor(i / this.width)) << 4
        });
      }
    }
    return portals;
  }
}

//
// SoundManager
//

class SoundManager {
  static play(id){
    const snd = SoundManager[id];
    if (snd)
      snd.play();
    else
      console.warn('Missing sound:', id);
  }
}

//
// EverybodyEdits
//

class EverybodyEdits {
  screen;
  input;
  state;
  world;
  running = false;
  accumulatedTime = 0;
  paused = false;
  capFPS = true;
  gamepads = false;
  simSpeed = 1;

  static async init(progressCallback){
    function loadImg(logicalWidth, logicalHeight, src){
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        if (img.complete)
          resolve(img);
        else{
          img.addEventListener('load', () => resolve(img));
          img.addEventListener('error', reject);
        }
      }).then(img => {
        const scaleW = img.width / logicalWidth;
        const scaleH = img.height / logicalHeight;
        if (scaleW !== scaleH || Math.floor(scaleW) !== scaleW || scaleW < 1){
          console.warn('Image seems scaled incorrectly. Expecting integer multiple of ' +
            logicalWidth + 'x' + logicalHeight + ', but image is ' +
            img.width + 'x' + img.height + ':', src);
        }
        return {width: logicalWidth, height: logicalHeight, img, scale: scaleW};
      });
    }

    function loadSnd(src){
      return new Promise((resolve, reject) => {
        resolve(new Howl({src: [src]}));
      });
    }

    function LI(name, w, h, src){
      return [
        res => { ItemManager[name] = res; },
        loadImg(w, h, `../media/${src}`)
      ];
    }

    function LS(name, src){
      return [
        res => { SoundManager[name] = res; },
        loadSnd(`../media/sounds/${src}`)
      ];
    }

    const loads = [
      LI('smileysBMD'              , 4888,  52, 'smileys.png'                ),
      LI('smileyPlatinumSpenderBMD',  312,  52, 'smileys_platinumspender.png'),
      LI('goldCrownBMD'            ,   26,  26, 'crown.png'                  ),
      LI('silverCrownBMD'          ,   26,  26, 'crown_silver.png'           ),
      LI('aurasBMD'                , 3392, 128, 'auras.png'                  ),
      LI('aurasOrnateBMD'          ,   64,  64, 'auras_ornate.png'           ),
      LI('aurasBubbleBMD'          ,  512,  64, 'auras_bubble.png'           ),
      LI('aurasGalaxyBMD'          ,  768,  64, 'auras_galaxy.png'           ),
      LI('auraFireBMD'             ,  156,  26, 'fireaura.png'               ),
      LI('shopBMD'                 , 4850,  73, 'shop.png'                   ),
      LI('shopWorldsBMD'           , 2130,  68, 'shop_worlds.png'            ),
      LI('shopAurasBMD'            , 2716,  92, 'shop_auras.png'             ),
      LI('favoriteBMD'             ,   15,  15, 'favorite.png'               ),
      LI('likeBMD'                 ,   16,  16, 'like.png'                   ),
      LI('allParticles'            ,   90,   6, 'particles.png'              ),
      LI('graphicsPreviewBG'       ,   48,  48, 'graphicsPreviewBG.png'      ),
      LI('deathIconBMD'            ,   13,  16, 'death_count_icon.png'       ),
      // Blocks
      LI('blocksBMD'               , 5136,  16, 'blocks.png'                 ),
      LI('decoBlocksBMD'           , 5888,  16, 'blocks_deco.png'            ),
      LI('bgBlocksBMD'             , 4256,  16, 'blocks_bg.png'              ),
      LI('specialBlocksBMD'        ,14368,  16, 'blocks_special.png'         ),
      LI('shadowBlocksBMD'         ,  736,  16, 'blocks_shadow.png'          ),
      LI('mudBlocksBMD'            ,   32,  16, 'blocks_mud.png'             ),
      LI('npcBlocksBMD'            , 1136,  32, 'blocks_npc.png'             ),
      LI('doorBlocksBMD'           ,  704,  16, 'blocks_door.png'            ),
      LI('effectBlocksBMD'         ,  432,  16, 'blocks_effect.png'          ),
      LI('teamBlocksBMD'           ,  112,  16, 'blocks_team.png'            ),
      LI('completeBlocksBMD'       ,   16,  16, 'blocks_complete.png'        ),
      LI('blockNumbersBMD'         ,   44,   5, 'block_numbers.png'          ),
      LI('blockNumbers2BMD'        ,   44,   5, 'block_numbers2.png'         ),
      LI('blocksFireworksBMD'      ,  768, 384, 'blocks_fireworks.png'       ),
      LI('blocksGoldenEasterEggBMD',   48,  48, 'blocks_goldeneasteregg.png' ),
      // Sounds
      LS('coin', 'coin.mp3'),
      LS('piano1' , 'Piano/1.mp3' ),
      LS('piano2' , 'Piano/2.mp3' ),
      LS('piano3' , 'Piano/3.mp3' ),
      LS('piano4' , 'Piano/4.mp3' ),
      LS('piano5' , 'Piano/5.mp3' ),
      LS('piano6' , 'Piano/6.mp3' ),
      LS('piano7' , 'Piano/7.mp3' ),
      LS('piano8' , 'Piano/8.mp3' ),
      LS('piano9' , 'Piano/9.mp3' ),
      LS('piano10', 'Piano/10.mp3'),
      LS('piano11', 'Piano/11.mp3'),
      LS('piano12', 'Piano/12.mp3'),
      LS('piano13', 'Piano/13.mp3'),
      LS('piano14', 'Piano/14.mp3'),
      LS('piano15', 'Piano/15.mp3'),
      LS('piano16', 'Piano/16.mp3'),
      LS('piano17', 'Piano/17.mp3'),
      LS('piano18', 'Piano/18.mp3'),
      LS('piano19', 'Piano/19.mp3'),
      LS('piano20', 'Piano/20.mp3'),
      LS('piano21', 'Piano/21.mp3'),
      LS('piano22', 'Piano/22.mp3'),
      LS('piano23', 'Piano/23.mp3'),
      LS('piano24', 'Piano/24.mp3'),
      LS('piano25', 'Piano/25.mp3'),
      LS('piano26', 'Piano/26.mp3'),
      LS('piano27', 'Piano/27.mp3'),
      LS('piano28', 'Piano/28.mp3'),
      LS('piano29', 'Piano/29.mp3'),
      LS('piano30', 'Piano/30.mp3'),
      LS('piano31', 'Piano/31.mp3'),
      LS('piano32', 'Piano/32.mp3'),
      LS('piano33', 'Piano/33.mp3'),
      LS('piano34', 'Piano/34.mp3'),
      LS('piano35', 'Piano/35.mp3'),
      LS('piano36', 'Piano/36.mp3'),
      LS('piano37', 'Piano/37.mp3'),
      LS('piano38', 'Piano/38.mp3'),
      LS('piano39', 'Piano/39.mp3'),
      LS('piano40', 'Piano/40.mp3'),
      LS('piano41', 'Piano/41.mp3'),
      LS('piano42', 'Piano/42.mp3'),
      LS('piano43', 'Piano/43.mp3'),
      LS('piano44', 'Piano/44.mp3'),
      LS('piano45', 'Piano/45.mp3'),
      LS('piano46', 'Piano/46.mp3'),
      LS('piano47', 'Piano/47.mp3'),
      LS('piano48', 'Piano/48.mp3'),
      LS('piano49', 'Piano/49.mp3'),
      LS('piano50', 'Piano/50.mp3'),
      LS('piano51', 'Piano/51.mp3'),
      LS('piano52', 'Piano/52.mp3'),
      LS('piano53', 'Piano/53.mp3'),
      LS('piano54', 'Piano/54.mp3'),
      LS('piano55', 'Piano/55.mp3'),
      LS('piano56', 'Piano/56.mp3'),
      LS('piano57', 'Piano/57.mp3'),
      LS('piano58', 'Piano/58.mp3'),
      LS('piano59', 'Piano/59.mp3'),
      LS('piano60', 'Piano/60.mp3'),
      LS('piano61', 'Piano/61.mp3'),
      LS('piano62', 'Piano/62.mp3'),
      LS('piano63', 'Piano/63.mp3'),
      LS('piano64', 'Piano/64.mp3'),
      LS('piano65', 'Piano/65.mp3'),
      LS('piano66', 'Piano/66.mp3'),
      LS('piano67', 'Piano/67.mp3'),
      LS('piano68', 'Piano/68.mp3'),
      LS('piano69', 'Piano/69.mp3'),
      LS('piano70', 'Piano/70.mp3'),
      LS('piano71', 'Piano/71.mp3'),
      LS('piano72', 'Piano/72.mp3'),
      LS('piano73', 'Piano/73.mp3'),
      LS('piano74', 'Piano/74.mp3'),
      LS('piano75', 'Piano/75.mp3'),
      LS('piano76', 'Piano/76.mp3'),
      LS('piano77', 'Piano/77.mp3'),
      LS('piano78', 'Piano/78.mp3'),
      LS('piano79', 'Piano/79.mp3'),
      LS('piano80', 'Piano/80.mp3'),
      LS('piano81', 'Piano/81.mp3'),
      LS('piano82', 'Piano/82.mp3'),
      LS('piano83', 'Piano/83.mp3'),
      LS('piano84', 'Piano/84.mp3'),
      LS('piano85', 'Piano/85.mp3'),
      LS('piano86', 'Piano/86.mp3'),
      LS('piano87', 'Piano/87.mp3'),
      LS('piano88', 'Piano/88.mp3'),
      LS('drums1' , 'Drums/kick.mp3'          ),
      LS('drums2' , 'Drums/kick_hihat.mp3'    ),
      LS('drums3' , 'Drums/snare.mp3'         ),
      LS('drums4' , 'Drums/snare2.mp3'        ),
      LS('drums5' , 'Drums/hihat1.mp3'        ),
      LS('drums6' , 'Drums/hihat2.mp3'        ),
      LS('drums7' , 'Drums/hihat3.mp3'        ),
      LS('drums8' , 'Drums/clap.mp3'          ),
      LS('drums9' , 'Drums/crash1.mp3'        ),
      LS('drums10', 'Drums/shacker.mp3'       ),
      LS('drums11', 'Drums/tom1.mp3'          ),
      LS('drums12', 'Drums/tom2.mp3'          ),
      LS('drums13', 'Drums/tom3.mp3'          ),
      LS('drums14', 'Drums/tom4.mp3'          ),
      LS('drums15', 'Drums/hihat4.mp3'        ),
      LS('drums16', 'Drums/hihatopenclose.mp3'),
      LS('drums17', 'Drums/crash2.mp3'        ),
      LS('drums18', 'Drums/ride.mp3'          ),
      LS('drums19', 'Drums/ridebell.mp3'      ),
      LS('drums20', 'Drums/cowbell.mp3'       ),
      LS('guitar1' , 'Guitar/1.mp3' ),
      LS('guitar2' , 'Guitar/2.mp3' ),
      LS('guitar3' , 'Guitar/3.mp3' ),
      LS('guitar4' , 'Guitar/4.mp3' ),
      LS('guitar5' , 'Guitar/5.mp3' ),
      LS('guitar6' , 'Guitar/6.mp3' ),
      LS('guitar7' , 'Guitar/7.mp3' ),
      LS('guitar8' , 'Guitar/8.mp3' ),
      LS('guitar9' , 'Guitar/9.mp3' ),
      LS('guitar10', 'Guitar/10.mp3'),
      LS('guitar11', 'Guitar/11.mp3'),
      LS('guitar12', 'Guitar/12.mp3'),
      LS('guitar13', 'Guitar/13.mp3'),
      LS('guitar14', 'Guitar/14.mp3'),
      LS('guitar15', 'Guitar/15.mp3'),
      LS('guitar16', 'Guitar/16.mp3'),
      LS('guitar17', 'Guitar/17.mp3'),
      LS('guitar18', 'Guitar/18.mp3'),
      LS('guitar19', 'Guitar/19.mp3'),
      LS('guitar20', 'Guitar/20.mp3'),
      LS('guitar21', 'Guitar/21.mp3'),
      LS('guitar22', 'Guitar/22.mp3'),
      LS('guitar23', 'Guitar/23.mp3'),
      LS('guitar24', 'Guitar/24.mp3'),
      LS('guitar25', 'Guitar/25.mp3'),
      LS('guitar26', 'Guitar/26.mp3'),
      LS('guitar27', 'Guitar/27.mp3'),
      LS('guitar28', 'Guitar/28.mp3'),
      LS('guitar29', 'Guitar/29.mp3'),
      LS('guitar30', 'Guitar/30.mp3'),
      LS('guitar31', 'Guitar/31.mp3'),
      LS('guitar32', 'Guitar/32.mp3'),
      LS('guitar33', 'Guitar/33.mp3'),
      LS('guitar34', 'Guitar/34.mp3'),
      LS('guitar35', 'Guitar/35.mp3'),
      LS('guitar36', 'Guitar/36.mp3'),
      LS('guitar37', 'Guitar/37.mp3'),
      LS('guitar38', 'Guitar/38.mp3'),
      LS('guitar39', 'Guitar/39.mp3'),
      LS('guitar40', 'Guitar/40.mp3'),
      LS('guitar41', 'Guitar/41.mp3'),
      LS('guitar42', 'Guitar/42.mp3'),
      LS('guitar43', 'Guitar/43.mp3'),
      LS('guitar44', 'Guitar/44.mp3'),
      LS('guitar45', 'Guitar/45.mp3'),
      LS('guitar46', 'Guitar/46.mp3'),
      LS('guitar47', 'Guitar/47.mp3'),
      LS('guitar48', 'Guitar/48.mp3'),
      LS('guitar49', 'Guitar/49.mp3'),
    ];
    progressCallback(0, loads.length);
    let loadLeft = loads.length;
    const loadedValues = await Promise.all(
      loads.map(a =>
        a[1].then(r => {
          loadLeft--;
          progressCallback(loads.length - loadLeft, loads.length);
          return r;
        })
      )
    );
    for (let i = 0; i < loads.length; i++)
      loads[i][0](loadedValues[i]);

    ItemManager.init();
  }

  constructor(screen, world, worldResolver, spawnTarget){
    this.screen = screen;
    this.input = new Input();
    this.world = world;
    this.state = new PlayState(world, worldResolver, spawnTarget);
  }

  attachController(controller){
    this.input.attachController(controller);
  }

  detachController(controller){
    this.input.detachController(controller);
  }

  setScreen(screen){
    this.screen = screen;
  }

  get mode(){
    return this.state.mode;
  }

  setMode(mode){
    this.state.mode = mode;
    if (mode === 'edit' && !this.state.player.completeTime)
      this.state.player.validRun = false;
  }

  dragWorld(dx, dy){
    if (this.mode !== 'edit')
      return;
    this.state.dragWorld(dx, dy);
  }

  startSelection(worldX, worldY){
    if (this.mode !== 'edit')
      return;
    this.state.startSelection(worldX, worldY);
  }

  dragSelection(worldX, worldY){
    if (this.mode !== 'edit')
      return;
    this.state.dragSelection(worldX, worldY);
  }

  placeTiles(worldX, worldY){
    if (this.mode !== 'edit')
      return;
    this.state.placeTiles(worldX, worldY);
  }

  run(){
    this.running = true;

    let lastTick = Date.now();
    const tick = () => {
      if (!this.running)
        return;
      const now = Date.now();
      const dt = Math.min(15 * Config.physics_ms_per_tick, now - lastTick);
      lastTick = now;
      this.advanceTime(dt);
      this.draw();
      if (this.capFPS)
        window.requestAnimationFrame(tick);
      else
        setTimeout(tick, 0);
    };

    tick();
  }

  advanceTime(dt){
    if (this.paused){
      this.input.nextPaused();
      return;
    }
    if (this.simSpeed !== 1)
      this.state.player.validRun = false;
    this.accumulatedTime += dt * this.simSpeed;
    while (this.accumulatedTime >= Config.physics_ms_per_tick){
      this.input.startTick();
      this.state.tick(this.input);
      this.accumulatedTime -= Config.physics_ms_per_tick;
    }
  }

  setPause(v){
    this.paused = v;
  }

  draw(){
    this.screen.drawState(this.state, this.paused);
  }

  stop(){
    this.running = false;
  }

  destroy(){
    this.stop();
    this.input.destroy();
  }

  setOptions(options){
    if ('instantDeath' in options)
      this.state.instantDeath = options.instantDeath;
    if ('playSound' in options)
      this.state.playSound = options.playSound;
    if ('tasJumping' in options)
      this.input.tasJumping = options.tasJumping;
    if ('iceBugs' in options)
      this.state.player.iceBugs = options.iceBugs;
    if ('screenDebug' in options)
      this.screen.debug = options.screenDebug;
    if ('screenFull' in options)
      this.screen.fullScreen = options.screenFull;
    if ('showFPS' in options)
      this.screen.showFPS = options.showFPS;
    if ('zoom' in options)
      this.screen.setZoom(options.zoom);
    if ('screenResolution' in options)
      this.screen.setResolution(options.screenResolution);
    if ('capFPS' in options)
      this.capFPS = options.capFPS;
    if ('worldBackground' in options)
      this.world.showBackground = options.worldBackground;
    if ('gamepads' in options)
      this.gamepads = options.gamepads;
    if ('simSpeed' in options)
      this.simSpeed = options.simSpeed;
    this.input.setOptions(options);
  }

  getOptions(){
    return Object.assign({
      instantDeath: this.state.instantDeath,
      playSound: this.state.playSound,
      tasJumping: this.input.tasJumping,
      iceBugs: this.state.player.iceBugs,
      screenDebug: this.screen.debug,
      screenFull: this.screen.fullScreen,
      showFPS: this.screen.showFPS,
      zoom: this.screen.zoom,
      screenResolution: this.screen.resolution,
      capFPS: this.capFPS,
      worldBackground: this.world.showBackground,
      gamepads: this.gamepads,
      simSpeed: this.simSpeed
    }, this.input.getOptions());
  }

  playerToggleGod(){
    if (this.mode !== 'play')
      return;
    this.state.player.isGod = !this.state.player.isGod;
    this.state.player.resetDeath();
    this.state.player.isOnFire = false;
    if (!this.state.player.completeTime)
      this.state.player.validRun = false;
  }

  playerSetCheckpoint(){
    if (this.mode !== 'play')
      return;
    this.state.player.checkpoint_x = (this.state.player.x + 8) >> 4;
    this.state.player.checkpoint_y = (this.state.player.y + 8) >> 4;
    if (!this.state.player.completeTime)
      this.state.player.validRun = false;
  }
}

//
// BlObject
//

class BlObject {
  x = 0;
  y = 0;
  width = 1;
  height = 1;

  tick(input){}
  draw(target, ox, oy){}

  offset(x, y){
    this.x += x;
    this.y += y;
  }
}

//
// BlSprite
//

class BlSprite extends BlObject {
  rect;
  bmd;
  shadowRect;
  shadowBmd;
  frames;
  offset;
  bmdAlpha;
  shadow;
  rotateDeg = 0;

  constructor(srcBmd, offset, width, height, frames, shadow){
    super();
    this.bmd = srcBmd;
    this.rect = {x: 0, y: 0, w: width, h: height};
    this.shadowRect = {x: 0, y: 0, w: width + 2, h: height + 2};
    this.frames = frames;
    this.offset = offset;
    this.shadow = shadow;
    this.width = width;
    this.height = height;

    // TODO: if (shadow) shadowBmd = this.drawWithShadow(this.bmd);
    this.shadowBmd = this.bmd; // TODO: remove

    this.frame = 0;
  }

  static createFromBitmapData(bmd){
    return new BlSprite(bmd, 0, 0, bmd.width, bmd.height, 1);
  }

  get frame(){
    return (this.rect.x / this.width) - this.offset;
  }

  set frame(f){
    if (f !== this.frame){
      this.rect.x = (f + this.offset) * this.width;
      this.shadowRect.x = f * (this.width + 2);
    }
  }

  get totalFrames(){
    return this.frames;
  }

  hitTest(ox, oy){
    return ox >= this.x && oy >= this.y && ox <= this.x + this.width && oy <= this.y + this.height;
  }

  /*
  private function drawWithShadow(bmd:BitmapData):BitmapData {
    var newBmd:BitmapData = new BitmapData(frames * (width + 2), (height + 2), true, 0x0);
    for (var i:int = 0; i < frames; i++) {
      var blockBmd:BitmapData = drawWithShadowSingle(bmd, i);
      newBmd.copyPixels(blockBmd, blockBmd.rect, new Point(i * (width + 2), 0));
    }
    return newBmd;
  }

  private function drawWithShadowSingle(bmd:BitmapData, blockOffset:int):BitmapData {
    // Get single block from source
    var copyBmd:BitmapData = new BitmapData(width, height, true, 0x0);
    copyBmd.copyPixels(bmd, new Rectangle((offset + blockOffset) * width, 0, width, height), new Point(0, 0));

    // Matrix that moves the shadow 2 pixels to the right and down
    var m:Matrix = new Matrix();
    m.translate(2,2);

    var newBmd:BitmapData = new BitmapData(width + 2, height + 2, true, 0x0);

    // Draw shadow
    newBmd.draw(copyBmd, m, new ColorTransform(0,0,0,.30,0,0,0,0));
    // Draw original bitmap
    newBmd.draw(copyBmd);

    return newBmd;
  }
  */

  draw(target, ox, oy){
    this.drawPoint(target, ox + this.x, oy + this.y);
  }

  drawPoint(target, pointX, pointY, frame){
    this.frame = frame || 0;
    /*TODO: draw sprite shadow
    if (this.shadow){
      target.copyPixelsRotated(
        this.sprImageShadow,
        this.shadowRect.x,
        this.shadowRect.y,
        this.shadowRect.w,
        this.shadowRect.h,
        pointX,
        pointY,
        this.width + 2,
        this.height + 2,
        this.rotatedDeg
      );
    }
    else*/{
      target.copyPixelsRotated(
        this.bmd,
        this.rect.x,
        this.rect.y,
        this.rect.w,
        this.rect.h,
        pointX,
        pointY,
        this.width,
        this.height,
        this.rotateDeg
      );
    }
  }
}

//
// StaticWorld
//

class StaticWorld {
  width;
  height;
  name;
  gravity;
  bgColor;
  map;
  lookup;
  labels = [];
  spawnPoints = [];
  worldPortals = [];

  constructor(
    width = 1,
    height = 1,
    name = 'Unknown World',
    gravity = 1,
    bgColor = '',
    data = null
  ) {
    this.width = width;
    this.height = height;
    this.name = name;
    this.gravity = gravity;
    this.bgColor = bgColor;
    this.map = Util.emptyArray(2, () => Util.emptyArray(height, () => Util.emptyArray(width, 0)));
    this.lookup = new StaticLookup(width, height);
    if (!data)
      return;

    // load data into world
    while (data.position < data.length){
      const type = data.readInt();
      const layer = data.readInt();
      const xs = data.readUnsignedShortArray();
      const ys = data.readUnsignedShortArray();
      let rotation = 0;
      let id = 0;
      let tar = 0;
      let text;
      let textColor;
      let wrapLength;
      let target_world;
      let sign_text;
      let sign_type;
      let onStatus;
      let name;
      const messages = [];

      // check if rotateable block (note spikes and portals are not included in the decorations)
      if (
        ItemId.isBlockRotateable(type) ||
        ItemId.isNonRotatableHalfBlock(type) ||
        ItemId.isBlockNumbered(type) ||
        type === ItemId.GUITAR ||
        type === ItemId.DRUMS ||
        type === ItemId.PIANO ||
        type === ItemId.SPIKE ||
        type === ItemId.SPIKE_SILVER ||
        type === ItemId.SPIKE_BLACK ||
        type === ItemId.SPIKE_RED ||
        type === ItemId.SPIKE_GOLD ||
        type === ItemId.SPIKE_GREEN ||
        type === ItemId.SPIKE_BLUE
      ){
        rotation = data.readInt();
      }
      else if (type === ItemId.PORTAL || type === ItemId.PORTAL_INVISIBLE){
        rotation = data.readInt();
        id = data.readInt();
        tar = data.readInt();
      }
      else if (type === ItemId.TEXT_SIGN){
        sign_text = data.readUTF();
        sign_type = data.readInt();
      }
      else if (type === ItemId.WORLD_PORTAL){
        target_world = data.readUTF();
        tar = data.readInt();
      }
      else if (type === ItemId.LABEL) {
        text = data.readUTF();
        textColor = data.readUTF();
        wrapLength = data.readInt();
      }
      else if (ItemId.isNPC(type)) {
        name = data.readUTF();
        messages[0] = data.readUTF();
        messages[1] = data.readUTF();
        messages[2] = data.readUTF();
      }

      for (let o = 0; o < xs.length; o++){
        const nx = xs[o];
        const ny = ys[o];

        if (nx >= this.width || ny >= this.height)
          continue;

        this.map[layer][ny][nx] = type;

        if (
          ItemId.isBlockRotateable(type) ||
          ItemId.isNonRotatableHalfBlock(type) ||
          ItemId.isBlockNumbered(type)
        ){
          this.lookup.setInt(nx, ny, rotation);
        }

        switch (type){
          case ItemId.DRUMS:
          case ItemId.PIANO:
          case ItemId.GUITAR:
            this.lookup.setInt(nx, ny, rotation);
            break;
          case ItemId.SPIKE:
          case ItemId.SPIKE_SILVER:
          case ItemId.SPIKE_BLACK:
          case ItemId.SPIKE_RED:
          case ItemId.SPIKE_GOLD:
          case ItemId.SPIKE_GREEN:
          case ItemId.SPIKE_BLUE:
            this.lookup.setInt(nx, ny, rotation);
            break;
          case ItemId.PORTAL_INVISIBLE:
          case ItemId.PORTAL:
            this.lookup.setPortal(nx, ny, {id, target: tar, rotation, type});
            break
          case ItemId.WORLD_PORTAL:{
            const wp = {id: target_world, name: '', target: tar};
            this.lookup.setWorldPortal(nx, ny, wp);
            this.worldPortals.push({nx, ny, wp});
            break;
          }
          case ItemId.SPAWNPOINT:
          case ItemId.WORLD_PORTAL_SPAWN:
            if(!this.spawnPoints[rotation])
              this.spawnPoints[rotation] = [];
            this.spawnPoints[rotation].push([nx, ny]);
            break;
          case ItemId.LABEL:
            this.lookup.setLabel(nx, ny, text, textColor, wrapLength);
            this.labels.push({x: nx, y: ny, text, color: textColor, wrapLength});
            break;
          case ItemId.TEXT_SIGN:
            this.lookup.setTextSign(nx, ny, {text: sign_text, type: sign_type});
            break;
        }
        if (ItemId.isNPC(type)){
          //TODO: this.lookup.setNpc(nx, ny, name, messages, ItemManager.getNpcById(type));
        }
      }
    }
    this.lookup.freeze();
  }
}

//
// World
//

class World extends BlObject {
  // static
  lookup;
  spawnPoints = [];
  gravity;
  bgColor;
  name = 'Unknown World';
  map;
  //width; // (from BlObject)
  //height; // (from BlObject)

  showBackground = true;
  player;
  state;
  blink;
  secret;
  nextSpawnPos = [];
  aniOffset = 0;
  keys = {
    red: false,
    green: false,
    blue: false,
    cyan: false,
    magenta: false,
    yellow: false
  };
  keysTimer = {
    red: 0,
    green: 0,
    blue: 0,
    cyan: 0,
    magenta: 0,
    yellow: 0
  };
  overlapCells = [];
  showDeathGate = 0;
  showCoinGate = 0;
  showBlueCoinGate = 0;
  orangeSwitches = Util.emptyArray(1000, false);
  timedoorState = false;
  hideTimedoorOffset = 0;
  labels = [];
  unresolvedWorlds = [];
  ice = 0;
  iceTime = 240;

  static defaultBlink = -999;

  getSecret(x, y){
    return this.secret[x + y * this.width];
  }

  setSecret(x, y, value){
    this.secret[x + y * this.width] = value;
  }

  resetSecrets(){
    const size = this.width * this.height;
    for (let i = 0; i < size; i++)
      this.secret[i] = false;
  }

  deleteBlink(x, y){
    this.blink[x + y * this.width] = World.defaultBlink;
  }

  getBlink(x, y){
    const v = this.blink[x + y * this.width];
    return v === World.defaultBlink ? 0 : v;
  }

  setBlink(x, y, value){
    this.blink[x + y * this.width] = value;
  }

  isBlink(x, y){
    return this.blink[x + y * this.width] !== World.defaultBlink;
  }

  updateBlink(x, y, add){
    const k = x + y * this.width;
    const v1 = this.blink[k];
    const v2 = (v1 === World.defaultBlink ? 0 : v1) + add;
    this.blink[k] = v2;
    return v2;
  }

  clearWorld(width, height, gravity = 1, bgColor = ''){
    this.lookup = new StaticLookup(width, height);
    this.width = width;
    this.height = height;
    this.gravity = gravity;
    this.bgColor = bgColor;
    this.unresolvedWorlds = [];
    this.map = Util.emptyArray(2, () => Util.emptyArray(height, () => Util.emptyArray(width, 0)));
    this.blink = Util.emptyArray(width * height, World.defaultBlink);
    this.secret = Util.emptyArray(width * height, false);
  }

  loadLayerData(data){
    // test StaticWorld to see if it works
    const dataPositionStart = data.position;
    new StaticWorld(this.width, this.height, this.name, this.gravity, this.bgColor, data);
    data.position = dataPositionStart;

    while (data.position < data.length){
      const type = data.readInt();
      const layer = data.readInt();
      const xs = data.readUnsignedShortArray();
      const ys = data.readUnsignedShortArray();
      let rotation = 0;
      let id = 0;
      let tar = 0;
      let text;
      let textColor;
      let wrapLength;
      let target_world;
      let sign_text;
      let sign_type;
      let onStatus;
      let name;
      const messages = [];

      // check if rotateable block (note spikes and portals are not included in the decorations)
      if (
        ItemId.isBlockRotateable(type) ||
        ItemId.isNonRotatableHalfBlock(type) ||
        ItemId.isBlockNumbered(type) ||
        type === ItemId.GUITAR ||
        type === ItemId.DRUMS ||
        type === ItemId.PIANO ||
        type === ItemId.SPIKE ||
        type === ItemId.SPIKE_SILVER ||
        type === ItemId.SPIKE_BLACK ||
        type === ItemId.SPIKE_RED ||
        type === ItemId.SPIKE_GOLD ||
        type === ItemId.SPIKE_GREEN ||
        type === ItemId.SPIKE_BLUE
      ){
        rotation = data.readInt();
      }
      else if (type === ItemId.PORTAL || type === ItemId.PORTAL_INVISIBLE){
        rotation = data.readInt();
        id = data.readInt();
        tar = data.readInt();
      }
      else if (type === ItemId.TEXT_SIGN){
        sign_text = data.readUTF();
        sign_type = data.readInt();
      }
      else if (type === ItemId.WORLD_PORTAL){
        target_world = data.readUTF();
        tar = data.readInt();
      }
      else if (type === ItemId.LABEL) {
        text = data.readUTF();
        textColor = data.readUTF();
        wrapLength = data.readInt();
      }
      else if (ItemId.isNPC(type)) {
        name = data.readUTF();
        messages[0] = data.readUTF();
        messages[1] = data.readUTF();
        messages[2] = data.readUTF();
      }

      for (let o = 0; o < xs.length; o++){
        const nx = xs[o];
        const ny = ys[o];

        if (nx >= this.width || ny >= this.height)
          continue;

        this.map[layer][ny][nx] = type;

        if (
          ItemId.isBlockRotateable(type) ||
          ItemId.isNonRotatableHalfBlock(type) ||
          ItemId.isBlockNumbered(type)
        ){
          this.lookup.setInt(nx, ny, rotation);
        }

        switch (type){
          case ItemId.DRUMS:
          case ItemId.PIANO:
          case ItemId.GUITAR:
            this.lookup.setInt(nx, ny, rotation);
            break;
          case ItemId.SPIKE:
          case ItemId.SPIKE_SILVER:
          case ItemId.SPIKE_BLACK:
          case ItemId.SPIKE_RED:
          case ItemId.SPIKE_GOLD:
          case ItemId.SPIKE_GREEN:
          case ItemId.SPIKE_BLUE:
            this.lookup.setInt(nx, ny, rotation);
            break;
          case ItemId.PORTAL_INVISIBLE:
          case ItemId.PORTAL:
            this.lookup.setPortal(nx, ny, {id, target: tar, rotation, type});
            break
          case ItemId.WORLD_PORTAL:{
            const wp = {id: target_world, name: '', target: tar};
            this.lookup.setWorldPortal(nx, ny, wp);
            this.unresolvedWorlds.push({nx, ny, wp});
            break;
          }
          case ItemId.SPAWNPOINT:
          case ItemId.WORLD_PORTAL_SPAWN:
            if(!this.spawnPoints[rotation])
              this.spawnPoints[rotation] = [];
            this.spawnPoints[rotation].push([nx, ny]);
            break;
          case ItemId.LABEL:
            this.lookup.setLabel(nx, ny, text, textColor, wrapLength);
            this.labels.push({x: nx, y: ny, text, color: textColor, wrapLength});
            break;
          case ItemId.TEXT_SIGN:
            this.lookup.setTextSign(nx, ny, {text: sign_text, type: sign_type});
            break;
        }
        if (ItemId.isNPC(type)){
          //TODO: this.lookup.setNpc(nx, ny, name, messages, ItemManager.getNpcById(type));
        }
      }
    }
    this.lookup.freeze();
  }

  getCoinCount(){
    let coins = 0;
    let bcoins = 0;
    for (const layer of this.map){
      for (const row of layer){
        for (const cell of row){
          if (cell === 100)
            coins++;
          else if (cell === 101)
            bcoins++;
        }
      }
    }
    return {coins, bcoins};
  }

  setPlayer(p){
    this.player = p;
  }

  async setPlayState(state){
    this.state = state;
    while (this.unresolvedWorlds.length > 0){
      const {nx, ny, wp} = this.unresolvedWorlds.shift();
      const name = await state.worldResolver.findName(wp.id);
      if (name)
        this.lookup.setWorldPortalName(nx, ny, name);
    }
  }

  setTileComplex(layer, x, y, type, properties){
    if (layer === 0){
      this.lookup.deleteLookup(x, y);
      this.blink[x + y * this.width] = World.defaultBlink;
      this.secret[x + y * this.width] = false;
    }

    if (ItemId.isBlockRotateable(type) || ItemId.isNonRotatableHalfBlock(type)){
      if (properties && properties.rotation != null)
        this.lookup.setInt(x, y, properties.rotation);
    }

    // removing save-breaking symbols
    const stripSeparator = new RegExp(Config.stringSeparator, 'g');
    if (properties && properties.text != null)
      properties.text = properties.text.replace(stripSeparator, '');
    if (properties && properties.messages != null){
      for (let i = 0; i < properties.messages.length; i++)
        properties.messages[i] = properties.messages[i].replace(stripSeparator, '');
    }

    switch (type){
      case ItemId.COINDOOR:
      case ItemId.BLUECOINDOOR:
      case ItemId.BLUECOINGATE:
      case ItemId.COINGATE:
      case ItemId.SWITCH_PURPLE:
      case ItemId.RESET_PURPLE:
      case ItemId.DOOR_PURPLE:
      case ItemId.GATE_PURPLE:
      case ItemId.DEATH_DOOR:
      case ItemId.DEATH_GATE:
      case ItemId.EFFECT_TEAM:
      case ItemId.TEAM_DOOR:
      case ItemId.TEAM_GATE:
      case ItemId.EFFECT_CURSE:
      case ItemId.EFFECT_ZOMBIE:
      case ItemId.EFFECT_FLY:
      case ItemId.EFFECT_JUMP:
      case ItemId.EFFECT_PROTECTION:
      case ItemId.EFFECT_RUN:
      case ItemId.EFFECT_LOW_GRAVITY:
      case ItemId.EFFECT_MULTIJUMP:
      case ItemId.EFFECT_POISON:
      case ItemId.SWITCH_ORANGE:
      case ItemId.RESET_ORANGE:
      case ItemId.DOOR_ORANGE:
      case ItemId.GATE_ORANGE:
      case ItemId.WORLD_PORTAL_SPAWN:
        this.lookup.setInt(x, y, properties.rotation);
        break;
      case ItemId.EFFECT_GRAVITY:
      case ItemId.SPIKE:
      case ItemId.SPIKE_SILVER:
      case ItemId.SPIKE_BLACK:
      case ItemId.SPIKE_RED:
      case ItemId.SPIKE_GOLD:
      case ItemId.SPIKE_GREEN:
      case ItemId.SPIKE_BLUE:
        if (properties.rotation != null)
          this.lookup.setInt(x, y, properties.rotation);
        break;
      /* TODO: setTileComplex for portals
      case ItemId.PORTAL_INVISIBLE:
      case ItemId.PORTAL:
        if (properties.rotation != null && properties.id != null && properties.target != null)
          this.lookup.setPortal(x, y, new Portal(properties.id, properties.target, properties.rotation, type));
        break;
      case ItemId.WORLD_PORTAL:
        if (properties.target != null && properties.spawnid != null)
          this.lookup.setWorldPortal(x, y, new WorldPortal(properties.target, properties.spawnid));
        break;
      */
      case ItemId.TEXT_SIGN:
        if (properties.text != null && properties.signtype != null)
          this.lookup.setTextSign(x, y, {text: properties.text, type: properties.signtype});
        break;
      case ItemId.DRUMS:
      case ItemId.PIANO:
      case ItemId.GUITAR:
        this.lookup.setInt(x, y, properties.rotation);
        this.setBlink(x, y, 30);
        break;
      case ItemId.GRAVITY_LEFT_INVISIBLE:
      case ItemId.GRAVITY_UP_INVISIBLE:
      case ItemId.GRAVITY_RIGHT_INVISIBLE:
      case ItemId.DOT_INVISIBLE:
      case ItemId.SLOW_DOT_INVISIBLE:
      case ItemId.GRAVITY_DOWN_INVISIBLE:
      case ItemId.FIREWORKS:
        this.setBlink(x, y, 0);
        break;
      case ItemId.LABEL:
        this.lookup.setLabel(x, y, properties.text, properties.text_color, properties.wraplength);
        this.labels.push({
          x,
          y,
          text: properties.text,
          color: properties.text_color,
          wrapLength: properties.wrapLength
        });
        break;
    }

    if (this.map[layer] && this.map[layer][y])
      this.map[layer][y][x] = type;
  }

  removeLabels(x, y){
    for (let i = 0; i < this.labels.length; i++){
      const label = this.labels[i];
      if (label.x === x && label.y === y){
        this.labels.splice(i, 1);
        i--;
      }
    }
  }

  getKey(color){
    return this.keys[color];
  }

  setKey(color, state, fromQueue){
    if (fromQueue && ((this.aniOffset - this.keysTimer[color]) / 30) >= 5)
      return;
    this.keys[color] = state;
    if (state && !fromQueue)
      this.keysTimer[color] = this.aniOffset;
  }

  setTimedoor(state){
    this.hideTimedoorOffset = this.aniOffset;
    this.timedoorState = state;
  }

  getTile(layer, x, y){
    if (
      layer < 0 || layer >= this.map.length ||
      x < 0 || x >= this.width ||
      y < 0 || y >= this.height
    )
      return 0;
    return this.map[layer][y][x]
  }

  tick(input){
    this.overlapCells.length = 0;
    this.aniOffset += 0.3;

    for (const color of Object.keys(this.keys)){
      if (this.keys[color] && ((this.aniOffset - this.keysTimer[color]) / 30) >= 5)
        this.state.switchKey(color, false, false);
    }

    if (((this.aniOffset - this.hideTimedoorOffset) / 30) >= 5)
      this.setTimedoor(!this.timedoorState);

    this.ice++;
    if (this.ice > this.iceTime){
      this.ice = 0;
      this.iceTime = (Math.floor(Math.random() * (80 + 1)) + 40) * 4;
    }

    // update blinks
    for (let cy = 0; cy < this.height; cy++){
      const row = this.map[ItemLayer.FOREGROUND][cy];
      for (let cx = 0; cx < this.width; cx++){
        switch (row[cx]){
          case ItemId.GRAVITY_LEFT_INVISIBLE:
          case ItemId.GRAVITY_UP_INVISIBLE:
          case ItemId.GRAVITY_RIGHT_INVISIBLE:
          case ItemId.DOT_INVISIBLE:
          case ItemId.SLOW_DOT_INVISIBLE:
          case ItemId.GRAVITY_DOWN_INVISIBLE:
            if (!this.player.isFlying && this.isBlink(cx, cy)){
              if (this.getBlink(cx, cy) >= 0){
                if (this.updateBlink(cx, cy, 0.1) >= 5)
                  this.deleteBlink(cx, cy);
              }
              else
                this.updateBlink(cx, cy, 1);
            }
            break;
          case ItemId.DRUMS:
          case ItemId.PIANO:
          case ItemId.GUITAR:
            if (this.isBlink(cx, cy) && this.updateBlink(cx, cy, -1) <= 0)
              this.deleteBlink(cx, cy);
            break;
          case ItemId.ICE:
            if (this.isBlink(cx, cy)){
              this.updateBlink(cx, cy, -0.125);
              if (this.getBlink(cx, cy) % 12 === 0)
                this.deleteBlink(cx, cy);
            }
            else if (this.ice === ((cx + cy) * 4) % this.iceTime || Math.random() < 0.0001)
              this.setBlink(cx, cy, 11.75);
            break;
          case ItemId.MUD_BUBBLE:
            if (this.isBlink(cx, cy)){
              this.updateBlink(cx, cy, 0.125);
              if (this.getBlink(cx, cy) % 10 === 0)
                this.deleteBlink(cx, cy);
            }
            else if (Math.random() < 0.0025)
              this.setBlink(cx, cy, 1 + Math.round(Math.random()) * 10);
            break;
          case ItemId.WATER:
            if (this.isBlink(cx, cy)){
              this.updateBlink(cx, cy, 0.5);
              if (this.getBlink(cx, cy) % 25 === 0)
                this.deleteBlink(cx, cy);
            }
            else if (Math.random() < 0.0005)
              this.setBlink(cx, cy, Math.floor(Math.random() * 4) * 25 + 5);
            break;
          case ItemId.TOXIC_WASTE:
            if (this.isBlink(cx, cy)) {
              this.updateBlink(cx, cy, 0.5);
              if (this.getBlink(cx, cy) % 25 === 0)
                this.deleteBlink(cx, cy);
            }
            else if (Math.random() < 0.0025)
              this.setBlink(cx, cy, Math.floor(Math.random() * 4) * 25 + 5);
            break;
          case ItemId.TOXIC_WASTE_SURFACE:
            if (this.isBlink(cx, cy)){
              this.updateBlink(cx, cy, 0.125);
              if (this.getBlink(cx, cy) % 10 === 0)
                this.deleteBlink(cx, cy);
            }
            else if (Math.random() < 0.005)
              this.setBlink(cx, cy, 1 + Math.round(Math.random()) * 10);
            break;
        }
      }
    }
  }

  overlaps(pl){
    if (pl.x < 0 || pl.y < 0 || pl.x > this.width * 16 - 16 || pl.y > this.height * 16 - 16)
      return 1;
    if (pl.isFlying)
      return 0;

    const ox = pl.x >> 4;
    const oy = pl.y >> 4;

    const ow = (pl.x + pl.width) / 16;
    const oh = (pl.y + pl.height) / 16;

    let skipa = false;
    let skipb = false;
    let skipc = false;
    let skipd = false;
    const rect = {x: pl.x, y: pl.y, w: 16, h: 16};
    for (let cy = oy; cy < oh; cy++){
      const map = this.map[0][cy];
      for (let cx = ox; cx < ow; cx++){
        this.overlapCells.push({cx, cy});
        if (!map)
          continue;
        const val = map[cx];
        if (!ItemId.isSolid(val)) {
          if (val === 243)
            this.setSecret(cx, cy, true);
          continue;
        }
        if (!Util.rectIntersects(rect, cx * 16, cy * 16, 16, 16))
          continue;
        const rot = this.lookup.getInt(cx, cy);
        if (ItemId.isRotatableHalfBlock(val)){
          if (ItemId.canJumpThroughFromBelow(val)){
            // up
            if (
              (
                pl.speedY < 0 ||
                cy <= pl.overlapa ||
                (pl.speedY === 0 && pl.speedX === 0 && pl.oy + 15 > cy * 16)
              ) && rot === 1
            ){
              if (cy !== oy || pl.overlapa === -1)
                pl.overlapa = cy;
              skipa = true;
              continue;
            }
            // right
            if (
              (
                pl.speedX > 0 ||
                (cx <= pl.overlapb && pl.speedX <= 0 && pl.ox < cx * 16 + 16)
              ) && rot === 2
            ){
              if (cx !== ox || pl.overlapb === -1)
                pl.overlapb = cx;
              skipb = true;
              continue;
            }
            // down
            if (
              (
                pl.speedY > 0 ||
                (cy <= pl.overlapc && pl.speedY <= 0 && pl.oy < cy * 16 + 16)
              ) && rot === 3
            ){
              if (cy !== oy || pl.overlapc === -1)
                pl.overlapc = cy;
              skipc = true;
              continue;
            }
            // left
            if (
              (
                pl.speedX < 0 ||
                cx <= pl.overlapd ||
                (pl.speedY === 0 && pl.speedX < 0 && (pl.ox - 15) < cx * 16)
              ) && rot === 0
            ){
              if (cx !== ox || pl.overlapd === -1)
                pl.overlapd = cx;
              skipd = true;
              continue;
            }
          }
        }
        else if (ItemId.isHalfBlock(val)){
          if (rot === 1){
            if (!Util.rectIntersects(rect, cx * 16, cy * 16 + 8, 16, 8))
              continue;
          }
          else if (rot === 2){
            if (!Util.rectIntersects(rect, cx * 16, cy * 16, 8, 16))
              continue;
          }
          else if (rot === 3){
            if (!Util.rectIntersects(rect, cx * 16, cy * 16, 16, 8))
              continue;
          }
          else if (rot === 0){
            if (!Util.rectIntersects(rect, cx * 16 + 8, cy * 16, 8, 16))
              continue;
          }
        }
        else if (ItemId.canJumpThroughFromBelow(val)){
          if (
            pl.speedY < 0 ||
            cy <= pl.overlapa ||
            (pl.speedY === 0 && pl.speedX === 0 && pl.oy + 15 > cy * 16)
          ){
            if (cy !== oy || pl.overlapa === -1)
              pl.overlapa = cy;
            skipa = true;
            continue;
          }
        }

        switch (val){
          case   23: if ( this.getKey('red'    )) continue; break;
          case   24: if ( this.getKey('green'  )) continue; break;
          case   25: if ( this.getKey('blue'   )) continue; break;
          case   26: if (!this.getKey('red'    )) continue; break;
          case   27: if (!this.getKey('green'  )) continue; break;
          case   28: if (!this.getKey('blue'   )) continue; break;

          case 1005: if ( this.getKey('cyan'   )) continue; break;
          case 1006: if ( this.getKey('magenta')) continue; break;
          case 1007: if ( this.getKey('yellow' )) continue; break;
          case 1008: if (!this.getKey('cyan'   )) continue; break;
          case 1009: if (!this.getKey('magenta')) continue; break;
          case 1010: if (!this.getKey('yellow' )) continue; break;

          case ItemId.TIMEDOOR:
            if (this.timedoorState)
              continue;
            break;
          case ItemId.TIMEGATE:
            if (!this.timedoorState)
              continue;
            break;
          case ItemId.DOOR_PURPLE:
            if (pl.switches[this.lookup.getInt(cx, cy)])
              continue;
            break;
          case ItemId.GATE_PURPLE:
            if (!pl.switches[this.lookup.getInt(cx, cy)])
              continue;
            break;
          case ItemId.DOOR_ORANGE:
            if (this.orangeSwitches[this.lookup.getInt(cx, cy)])
              continue;
            break;
          case ItemId.GATE_ORANGE:
            if (!this.orangeSwitches[this.lookup.getInt(cx, cy)])
              continue;
            break;
          case ItemId.DOOR_GOLD:
            if (pl.wearsGoldSmiley)
              continue;
            break;
          case ItemId.GATE_GOLD:
            if (!pl.wearsGoldSmiley)
              continue;
            break;
          case ItemId.CROWNDOOR:
            if (pl.collideWithGoldCrownDoorGate)
              continue;
            break;
          case ItemId.CROWNGATE:
            if (!pl.collideWithGoldCrownDoorGate)
              continue;
            break;
          case ItemId.SILVERCROWNDOOR:
            if (pl.collideWithSilverCrownDoorGate)
              continue;
            break;
          case ItemId.SILVERCROWNGATE:
            if (!pl.collideWithSilverCrownDoorGate)
              continue;
            break;
          case ItemId.COINDOOR:
            if (this.lookup.getInt(cx, cy) <= pl.coins)
              continue;
            break;
          case ItemId.BLUECOINDOOR:
            if (this.lookup.getInt(cx, cy) <= pl.bcoins)
              continue;
            break;
          case ItemId.DEATH_DOOR:
            if (this.lookup.getInt(cx, cy) <= pl.deaths)
              continue;
            break;
          case ItemId.DEATH_GATE:
            if (this.lookup.getInt(cx, cy) > this.showDeathGate)
              continue;
            break;
          case ItemId.COINGATE:
            if (this.lookup.getInt(cx, cy) > this.showCoinGate)
              continue;
            break;
          case ItemId.BLUECOINGATE:
            if (this.lookup.getInt(cx, cy) > this.showBlueCoinGate)
              continue;
            break;
          case ItemId.TEAM_DOOR:
            if (pl.team === this.lookup.getInt(cx, cy))
              continue;
            break;
          case ItemId.TEAM_GATE:
            if (pl.team !== this.lookup.getInt(cx, cy))
              continue;
            break;
          case ItemId.ZOMBIE_GATE:
            if (!pl.zombie)
              continue;
            break;
          case ItemId.ZOMBIE_DOOR:
            if (pl.zombie)
              continue;
            break;
          case 50:
            this.setSecret(cx, cy, true);
            break;
        }

        this.overlapCells[this.overlapCells.length - 1].result = val;
        return val;
      }
    }
    if (!skipa) pl.overlapa = -1;
    if (!skipb) pl.overlapb = -1;
    if (!skipc) pl.overlapc = -1;
    if (!skipd) pl.overlapd = -1;
    return 0;
  }

  draw(target, ox, oy){
    const {startX, startY, endX, endY} = this.getDrawBoundary(target, ox, oy, false);
    this.drawRange(target, ox, oy, startX, startY, endX, endY);
  }

  getDrawBoundary(target, ox, oy, full){
    const size = 16;
    const width = full ? this.width * size : target.boundary.w / size;
    const height = full ? this.height * size : target.boundary.h / size;

    const bx = ox - target.boundary.x;
    const by = oy - target.boundary.y;
    const startX = Math.max(0, Math.floor(-bx / size - 1));
    const startY = Math.max(0, Math.floor(-by / size - 1));
    const endX = Math.min(this.width, startX + width + 2);
    const endY = Math.min(this.height, startY + height + 2);

    return {startX, startY, endX, endY};
  }

  drawArrowBlink(target, x, y, cx, cy, sprite, startFrame){
    if (this.player.isFlying)
      return false;
    if (this.isBlink(cx, cy)){
      const frame = this.getBlink(cx, cy) >> 0;
      if (frame >= 0)
        sprite.drawPoint(target, x, y, startFrame + frame);
      else
        return false;
    }
    return true;
  }

  drawRange(target, ox, oy, startX, startY, endX, endY){
    let x = 0, y = 0;

    // Seperate loop to perserve shadows
    for (let cy = startY; cy < endY; cy++){
      const bgrow = this.map[ItemLayer.BACKGROUND][cy];
      const fgrow = this.map[ItemLayer.FOREGROUND][cy];
      y = (cy << 4) + oy;
      for (let cx = startX; cx < endX; cx++){
        x = (cx << 4) + ox;

        if (fgrow[cx] !== 0 && ItemManager.bricks[fgrow[cx]].layer === ItemLayer.FOREGROUND)
          continue;

        if (bgrow[cx] === 0 && this.bgColor)
          target.fillRect(x, y, 16, 16, this.bgColor);
        else
          ItemManager.bricks[this.showBackground ? bgrow[cx] : 0].draw(target, x, y);
      }
    }

    for (let cy = startY; cy < endY; cy++){
      const row = this.map[ItemLayer.FOREGROUND][cy];
      y = (cy << 4) + oy;
      for (let cx = startX; cx < endX; cx++){
        x = (cx << 4) + ox;
        const type = row[cx];
        if (type === 0)
          continue;

        const brick = ItemManager.bricks[type];
        if (brick.layer === ItemLayer.FOREGROUND){
          brick.draw(target, x, y);
          continue;
        }
        else if (brick.layer === ItemLayer.ABOVE)
          continue;

        // render rotateables, note spikes and portals are not in this list currently
        if (ItemId.isBlockRotateable(type) && !ItemId.isNonRotatableHalfBlock(type) &&
          type !== ItemId.HALLOWEEN_2016_EYES && type !== ItemId.FIREWORKS &&
          type !== ItemId.DUNGEON_TORCH){
          const rot = this.lookup.getInt(cx, cy);
          const rotSprite = ItemManager.getRotateableSprite(type);
          rotSprite.drawPoint(target, x, y, rot);
          continue;
        }

        switch (type){
          // Red doors
          case 23:
          case 26:
            if (this.getKey('red')){
              ItemManager.sprDoors.drawPoint(target, x, y, type === 23 ? 0 : 3);
              continue;
            }
            break;
          // Green doors
          case 24:
          case 27:
            if (this.getKey('green')){
              ItemManager.sprDoors.drawPoint(target, x, y, type === 24 ? 1 : 4);
              continue;
            }
            break;
          // Blue doors
          case 25:
          case 28:
            if (this.getKey('blue')){
              ItemManager.sprDoors.drawPoint(target, x, y, type === 25 ? 2 : 5);
              continue;
            }
            break;
          // Cyan doors
          case 1005:
          case 1008:
            if (this.getKey('cyan')){
              ItemManager.sprDoors.drawPoint(target, x, y, type === 1005 ? 14 : 17);
              continue;
            }
            break;
          // Magenta doors
          case 1006:
          case 1009:
            if (this.getKey('magenta')){
              ItemManager.sprDoors.drawPoint(target, x, y, type === 1006 ? 15 : 18);
              continue;
            }
            break;
          // Yellow doors
          case 1007:
          case 1010:
            if (this.getKey('yellow')){
              ItemManager.sprDoors.drawPoint(target, x, y, type === 1007 ? 16 : 19);
              continue;
            }
            break;
          // Death doors/gates
          case ItemId.DEATH_DOOR:
            if (this.lookup.getInt(cx, cy) <= this.player.deaths)
              ItemManager.sprDoors.drawPoint(target, x, y, 20);
            else{
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy) - this.player.deaths, false
              );
            }
            continue;
          case ItemId.DEATH_GATE:
            if (this.lookup.getInt(cx, cy) <= this.player.deaths)
              ItemManager.sprDoors.drawPoint(target, x, y, 21);
            else{
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy) - this.player.deaths, true
              );
            }
            continue;
          // Purple switch, doors and gates
          case ItemId.SWITCH_PURPLE:
            if (this.player.switches[this.lookup.getInt(cx, cy)]) {
              drawBrickWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true,
                ItemManager.specialBlocksBMD, 311
              );
            } else {
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            continue;
          case ItemId.RESET_PURPLE:
            brick.drawWithNumber(
              target, x, y, this.lookup.getInt(cx, cy), true
            );
            continue;
          case ItemId.DOOR_PURPLE:
            if (this.player.switches[this.lookup.getInt(cx, cy)]){
              ItemManager.bricks[ItemId.GATE_PURPLE].drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            else{
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            continue;
          case ItemId.GATE_PURPLE:
            if (this.player.switches[this.lookup.getInt(cx, cy)]){
              ItemManager.bricks[ItemId.DOOR_PURPLE].drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            else{
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            continue;
          // Orange switch, doors and gates
          case ItemId.SWITCH_ORANGE:
            if (this.orangeSwitches[this.lookup.getInt(cx, cy)]){
              drawBrickWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true,
                ItemManager.specialBlocksBMD, 423
              );
            } else {
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            continue;
          case ItemId.RESET_ORANGE:
            brick.drawWithNumber(
              target, x, y, this.lookup.getInt(cx, cy), true
            );
            continue;
          case ItemId.DOOR_ORANGE:
            if (this.orangeSwitches[this.lookup.getInt(cx, cy)]){
              ItemManager.bricks[ItemId.GATE_ORANGE].drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            else{
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            continue;
          case ItemId.GATE_ORANGE:
            if (!this.orangeSwitches[this.lookup.getInt(cx, cy)]){
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            else{
              ItemManager.bricks[ItemId.DOOR_ORANGE].drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            continue;
          // Time doors
          case ItemId.TIMEDOOR:
            ItemManager.sprDoorsTime.drawPoint(
              target, x, y,
              Math.min((((this.aniOffset - this.hideTimedoorOffset) / 30) >> 0), 4) +
                (this.timedoorState ? 5 : 0)
              )
            continue;
          case ItemId.TIMEGATE:
            ItemManager.sprDoorsTime.drawPoint(
              target, x, y,
              Math.min((((this.aniOffset - this.hideTimedoorOffset) / 30) >> 0), 4) +
                (this.timedoorState ? 0 : 5)
            );
            continue;
          case ItemId.DOOR_GOLD:
            if (this.player.wearsGoldSmiley){
              ItemManager.sprDoors.drawPoint(target, x, y, 10);
              continue;
            }
            break;
          case ItemId.GATE_GOLD:
            if (this.player.wearsGoldSmiley){
              ItemManager.sprDoors.drawPoint(target, x, y, 11);
              continue;
            }
            break;
          // Invisible arrow blink
          case ItemId.GRAVITY_LEFT_INVISIBLE:
            if (this.drawArrowBlink(target, x, y, cx, cy, ItemManager.sprInvGravityBlink, 0))
              continue;
            break;
          case ItemId.GRAVITY_UP_INVISIBLE:
            if (this.drawArrowBlink(target, x, y, cx, cy, ItemManager.sprInvGravityBlink, 5))
              continue;
            break;
          case ItemId.GRAVITY_RIGHT_INVISIBLE:
            if (this.drawArrowBlink(target, x, y, cx, cy, ItemManager.sprInvGravityBlink, 10))
              continue;
            break;
          case ItemId.DOT_INVISIBLE:
            if (this.drawArrowBlink(target, x, y, cx, cy, ItemManager.sprInvGravityBlink, 15))
              continue;
            break;
          case ItemId.GRAVITY_DOWN_INVISIBLE:
            if (this.drawArrowBlink(target, x, y, cx, cy, ItemManager.sprInvGravityDownBlink, 0))
              continue;
            break;
          case ItemId.SLOW_DOT_INVISIBLE:
            if (this.drawArrowBlink(target, x, y, cx, cy, ItemManager.sprInvDotBlink, 0))
              continue;
            break;
          case ItemId.CROWNDOOR:
            if (this.player.collideWithGoldCrownDoorGate){
              ItemManager.sprDoors.drawPoint(target, x, y, 40);
              continue;
            }
            break;
          case ItemId.CROWNGATE:
            if (this.player.collideWithGoldCrownDoorGate){
              ItemManager.sprDoors.drawPoint(target, x, y, 41);
              continue;
            }
            break;
          case ItemId.SILVERCROWNDOOR:
            if (this.player.collideWithSilverCrownDoorGate){
              ItemManager.sprDoors.drawPoint(target, x, y, 42);
              continue;
            }
            break;
          case ItemId.SILVERCROWNGATE:
            if (this.player.collideWithSilverCrownDoorGate){
              ItemManager.sprDoors.drawPoint(target, x, y, 43);
              continue;
            }
            break;
          case ItemId.COINDOOR:
            if (this.lookup.getInt(cx, cy) <= this.player.coins) // Open
              ItemManager.sprDoors.drawPoint(target, x, y, 6);
            else{ // Locked
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy) - this.player.coins, false
              );
            }
            continue;
          case ItemId.COINGATE:
            if (this.lookup.getInt(cx, cy) <= this.player.coins) // Locked
              ItemManager.sprDoors.drawPoint(target, x, y, 7);
            else{ // Open
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy) - this.player.coins, true
              );
            }
            continue;
          case ItemId.BLUECOINDOOR:
            if (this.lookup.getInt(cx, cy) <= this.player.bcoins) // Open
              ItemManager.sprDoors.drawPoint(target, x, y, 36);
            else{ // Locked
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy) - this.player.bcoins, true
              );
            }
            continue;
          case ItemId.BLUECOINGATE:
            if (this.lookup.getInt(cx, cy) <= this.player.bcoins) // Locked
              ItemManager.sprDoors.drawPoint(target, x, y, 37);
            else{ // Open
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy) - this.player.bcoins, true
              );
            }
            continue;
          case ItemId.ZOMBIE_DOOR:
            ItemManager.sprDoors.drawPoint(target, x, y, this.player.zombie ? 12 : 13);
            continue;
          case ItemId.ZOMBIE_GATE:
            ItemManager.sprDoors.drawPoint(target, x, y, this.player.zombie ? 13 : 12);
            continue;
          case ItemId.DRUMS:
            if (this.isBlink(cx, cy)){
              ItemManager.sprDrumsBlink.drawPoint(target, x, y,
                (this.getBlink(cx, cy) / 6) << 0);
              continue;
            }
            break;
          case ItemId.PIANO:
            if (this.isBlink(cx, cy)){
              ItemManager.sprPianoBlink.drawPoint(target, x, y,
                (this.getBlink(cx, cy) / 6) << 0);
              continue;
            }
            break;
          case ItemId.GUITAR:
            if (this.isBlink(cx, cy)){
              ItemManager.sprGuitarBlink.drawPoint(target, x, y,
                (this.getBlink(cx, cy) / 6) << 0);
              continue;
            }
            break;
          // If user can edit, draw shadow coins
          case ItemId.COLLECTEDCOIN:
            // TODO: if(Bl.data.canEdit)
            //  ItemManager.sprCoinShadow.drawPoint(target, point, ((offset >> 0)+cx+cy)%12)
            continue;
          case ItemId.COLLECTEDBLUECOIN:
            // TODO: if(Bl.data.canEdit)
            //  ItemManager.sprBonusCoinShadow.drawPoint(target, point, ((offset >> 0)+cx+cy)%12)
            continue;
          case ItemId.SPIKE:
            ItemManager.sprSpikes.drawPoint(target, x, y, this.lookup.getInt(cx, cy));
            continue;
          case ItemId.SPIKE_SILVER:
            ItemManager.sprSpikesSilver.drawPoint(target, x, y, this.lookup.getInt(cx, cy));
            continue;
          case ItemId.SPIKE_BLACK:
            ItemManager.sprSpikesBlack.drawPoint(target, x, y, this.lookup.getInt(cx, cy));
            continue;
          case ItemId.SPIKE_RED:
            ItemManager.sprSpikesRed.drawPoint(target, x, y, this.lookup.getInt(cx, cy));
            continue;
          case ItemId.SPIKE_GOLD:
            ItemManager.sprSpikesGold.drawPoint(target, x, y, this.lookup.getInt(cx, cy));
            continue;
          case ItemId.SPIKE_GREEN:
            ItemManager.sprSpikesGreen.drawPoint(target, x, y, this.lookup.getInt(cx, cy));
            continue;
          case ItemId.SPIKE_BLUE:
            ItemManager.sprSpikesBlue.drawPoint(target, x, y, this.lookup.getInt(cx, cy));
            continue;
          case ItemId.PORTAL:{
            const p = this.lookup.getPortal(cx, cy);
            ItemManager.sprPortal.drawPoint(target, x, y,
              p.rotation * 15 + (((this.aniOffset / 1.5 >> 0) + cx + cy) % 15) + 1);
            continue;
          }
          case ItemId.PORTAL_INVISIBLE:
            if (this.player.isFlying){
              const pInv = this.lookup.getPortal(cx, cy);
              ItemManager.sprPortalInvisible.drawPoint(target, x, y, pInv.rotation);
            }
            continue;
          case ItemId.WORLD_PORTAL:
            ItemManager.sprPortalWorld.drawPoint(target, x, y,
              (((this.aniOffset / 2 >> 0) + cx + cy) % 21));
            // TODO: particles
            //if (Math.random() < 0.18)
            //  addParticle(new Particle(this, Math.random()*100<50?6:7, (cx*16)+6, (cy*16)+6, .7, .7, 0.013, 0.013, Math.random()*360, Math.random()*115, true));
            continue;
          case ItemId.DIAMOND:
            ItemManager.sprDiamond.drawPoint(target, x, y,
              ((this.aniOffset / 5 >> 0) + cx + cy) % 13);
            continue;
          case ItemId.CAKE:
            ItemManager.sprCake.drawPoint(target, x, y,
              ((this.aniOffset / 5 >> 0) + cx + cy) % 5);
            continue;
          case ItemId.HOLOGRAM:
            ItemManager.sprHologram.drawPoint(target, x, y,
              ((this.aniOffset / 5 >> 0) + cx + cy) % 5);
            continue;
          case ItemId.EFFECT_TEAM:
            ItemManager.sprTeamEffect.drawPoint(target, x, y, this.lookup.getInt(cx, cy));
            continue;
          case ItemId.TEAM_DOOR:{
            const teamDoorTeam = this.lookup.getInt(cx, cy);
            let teamDoorFrame = 22 + teamDoorTeam;
            if (this.player.team === teamDoorTeam)
              teamDoorFrame += 7;
            ItemManager.sprDoors.drawPoint(target, x, y, teamDoorFrame);
            continue;
          }
          case ItemId.TEAM_GATE:{
            const teamGateTeam = this.lookup.getInt(cx, cy);
            let teamGateFrame = 29 + teamGateTeam;
            if (this.player.team === teamGateTeam)
              teamGateFrame -= 7;
            ItemManager.sprDoors.drawPoint(target, x, y, teamGateFrame);
            continue;
          }
          case ItemId.EFFECT_CURSE:
            ItemManager.sprEffect.drawPoint(target, x, y,
              this.lookup.getInt(cx, cy) !== 0 ? 4 : 11);
            if (this.lookup.getInt(cx, cy) !== 0)
              drawNumber(target, x, y, this.lookup.getInt(cx, cy), true);
            continue;
          case ItemId.EFFECT_FLY:
            ItemManager.sprEffect.drawPoint(target, x, y, this.lookup.getBoolean(cx, cy) ? 1 : 8);
            continue;
          case ItemId.EFFECT_JUMP:
            ItemManager.sprEffect.drawPoint(target, x, y, ([7, 0, 22])[this.lookup.getInt(cx, cy)]);
            continue;
          case ItemId.EFFECT_PROTECTION:
            ItemManager.sprEffect.drawPoint(target, x, y, this.lookup.getBoolean(cx, cy) ? 3 : 10);
            continue;
          case ItemId.EFFECT_RUN:
            ItemManager.sprEffect.drawPoint(target, x, y, ([9, 2, 25])[this.lookup.getInt(cx, cy)]);
            continue;
          case ItemId.EFFECT_ZOMBIE:
            ItemManager.sprEffect.drawPoint(target, x, y,
              this.lookup.getInt(cx, cy) !== 0 ? 5 : 12);
            if (this.lookup.getInt(cx, cy) !== 0)
              drawNumber(target, x, y, this.lookup.getInt(cx, cy), true);
            continue;
          case ItemId.EFFECT_LOW_GRAVITY:
            ItemManager.sprEffect.drawPoint(target, x, y, this.lookup.getBoolean(cx, cy) ? 13 : 14);
            continue;
          case ItemId.EFFECT_MULTIJUMP:
            if (this.lookup.getInt(cx, cy) === 1)
              ItemManager.sprEffect.drawPoint(target, x, y, 16);
            else{
              brick.drawWithNumber(
                target, x, y, this.lookup.getInt(cx, cy), true
              );
            }
            continue;
          case ItemId.EFFECT_GRAVITY:
            ItemManager.sprGravityEffect.drawPoint(target, x, y, this.lookup.getInt(cx, cy));
            continue;
          case ItemId.EFFECT_POISON:
            ItemManager.sprEffect.drawPoint(target, x, y,
              this.lookup.getInt(cx, cy) !== 0 ? 23 : 24);
            if (this.lookup.getInt(cx, cy) !== 0)
              drawNumber(target, x, y, this.lookup.getInt(cx, cy), true);
            continue;

          // Secret passages!
          case 50:
            if (this.player.isFlying || this.getSecret(cx, cy))
              ItemManager.sprSecret.drawPoint(target, x, y, 0);
            continue;
          case 243:
            if (this.player.isFlying || this.getSecret(cx, cy))
              ItemManager.sprSecret.drawPoint(target, x, y, 1);
            else
              ItemManager.bricks[44].draw(target, x, y);
            continue;
          case 136:
            if (this.player.isFlying)
              ItemManager.sprSecret.drawPoint(target, x, y, 2);
            continue;
          case ItemId.LABEL:
            continue;
          case ItemId.ICE:
            ItemManager.sprIce.drawPoint(target, x, y,
              11 - (this.getBlink(cx, cy) >> 0) % 12);
            continue;
          case ItemId.CAVE_TORCH:
            ItemManager.sprCaveTorch.drawPoint(target, x, y,
              ((this.aniOffset / 2.3 >> 0) + (this.width - cx) + cy) % 12);
            continue;
          case ItemId.DUNGEON_TORCH:
            ItemManager.sprDungeonTorch.drawPoint(
              target, x, y,
              this.lookup.getInt(cx, cy) * 12 +
                ((this.aniOffset / 2.3 >> 0) + (this.width - cx) + cy) % 12
            );
            continue;
          case ItemId.CHRISTMAS_2016_CANDLE:
            ItemManager.sprChristmas2016Candle.drawPoint(target, x, y,
              ((this.aniOffset / 2.3 >> 0) + (this.width - cx) + cy) % 12);
            continue;
          /*
          case ItemId.HALLOWEEN_2016_EYES:{
            if (player.isFlying)
            {
              ItemManager.sprHalloweenEyes.drawPoint(target, point, (lookup.getInt(cx, cy)*6));
              continue;
            }

            if (this.isBlink(cx, cy)) {
              if (cx == startX || cx == endX-1 || cy == startY || cy == endY-1)
              {
                this.deleteBlink(cx, cy);
                continue;
              }
              var blink:int = this.getBlink(cx, cy);
              if (blink >= 6)
              {
                blink -= 6;
                //blink = 5-blink;
              }
              else
              {
                blink = 5-blink;
              }
              ItemManager.sprHalloweenEyes.drawPoint(target, point, blink+(lookup.getInt(cx, cy)*6));
              if ((this.getBlink(cx, cy) != 5 && Math.random()<.25) || (this.getBlink(cx, cy) == 5 && Math.random() <= 0.01)){
                if (this.updateBlink(cx, cy, -1) <= 0) {
                  this.deleteBlink(cx, cy);
                }
              }
            }
            else
            {
              if (Math.random() < 0.05 && MathUtil.inRange(cx*16, cy*16, player.x, player.y, 120))
                this.setBlink(cx,cy, 11);
            }
            continue;
          }
          case ItemId.FIREWORKS: {
            if (this.isBlink(cx, cy)) {
              var speed:Number = 1 / 3;
              var b:int = this.getBlink(cx, cy);
              var frames:int = ItemManager.blocksFireworksBMD.width / 64 / speed;
              if (b >= 0 && b <= frames) {
                infront.push({
                  d:ItemManager.blocksFireworksBMD,
                  r:new Rectangle(Math.floor(b * speed) * 64, lookup.getInt(cx, cy) * 64, 64, 64),
                  p:new Point(x - 24, y - 24)
                });
              }
              if (this.updateBlink(cx, cy, 1) >= frames + 60 * 3) {
                this.deleteBlink(cx, cy);
              }
            } else if (Math.random() < 0.01 && MathUtil.inRange(cx * 16, cy * 16, player.x, player.y, 12 * 16)) {
              this.setBlink(cx, cy, 0);
            }
            if (player.isFlying) {
              ItemManager.sprFireworks.drawPoint(target, point, lookup.getInt(cx, cy));
            }
            continue;
          }
          */
        }
        brick.draw(target, x, y);
      }
    }

    // TODO: draw infront

    for (const k of this.overlapCells){
      const {cx, cy, result} = k;
      target.debugRect((cx << 4) + ox, (cy << 4) + oy, 16, 16);
      target.debugText(
        typeof result === 'undefined' ? 'no' : result,
        (cx << 4) + ox + 4,
        (cy << 4) + oy + 4
      );
    }
  }

  postDraw(pl, target, ox, oy){
    const {startX, startY, endX, endY} = this.getDrawBoundary(target, ox, oy, false);
    this.postDrawRange(pl, target, ox, oy, startX, startY, endX, endY);
  }

  postDrawRange(pl, target, ox, oy, startX, startY, endX, endY){
    for (let cy = startY; cy < endY; cy++){
      const row = this.map[ItemLayer.FOREGROUND][cy];
      const y = (cy << 4) + oy;
      for (let cx = startX; cx < endX; cx++){
        const type = row[cx];
        const brick = ItemManager.bricks[type];
        if (brick.layer !== ItemLayer.ABOVE)
          continue;
        const x = (cx << 4) + ox;
        switch (type){
          case ItemId.CHECKPOINT:
            ItemManager.sprCheckpoint.drawPoint(target, x, y,
              (this.player.checkpoint_x === cx && this.player.checkpoint_y === cy) ? 1 : 0);
            break;
          case ItemId.COIN_GOLD:
            if (pl && pl.didCollectCoin(cx, cy))
              break;
            ItemManager.sprCoin.drawPoint(target, x, y, ((this.aniOffset >> 0) + cx + cy) % 12);
            break;
          case ItemId.COIN_BLUE:
            if (pl && pl.didCollectCoin(cx, cy))
              break;
            ItemManager.sprBonusCoin.drawPoint(target, x, y,
              ((this.aniOffset >> 0) + cx + cy) % 12);
            break;
          case ItemId.WAVE:
            ItemManager.sprWave.drawPoint(target, x, y, ((this.aniOffset / 5 >> 0)) % 8);
            break;
          case ItemId.MUD_BUBBLE:
            ItemManager.sprMudBubble.drawPoint(target, x, y, (this.getBlink(cx, cy) >> 0) % 19);
            break;
          case ItemId.FIRE:
            ItemManager.sprFireHazard.drawPoint(target, x, y,
              ((this.aniOffset / 1.2 >> 0) + (this.width - cx) + cy) % 12);
            break;
          case ItemId.WATER:
            ItemManager.sprWater.drawPoint(target, x, y, Math.floor(this.getBlink(cx, cy) / 5));
            break;
          case ItemId.TOXIC_WASTE:
            ItemManager.sprToxic.drawPoint(target, x, y, Math.floor(this.getBlink(cx, cy) / 5));
            break;
          case ItemId.TOXIC_WASTE_SURFACE:
            ItemManager.sprToxicBubble.drawPoint(target, x, y, (this.getBlink(cx, cy) >> 0) % 19);
            break;
          case ItemId.TEXT_SIGN:
            ItemManager.sprSign.drawPoint(target, x, y,
              this.lookup.getTextSign(cx, cy).type +
                (ItemId.isSolid(this.getTile(0, cx, cy + 1)) ? 0 : 4))
            break;
          case ItemId.LAVA:
            ItemManager.sprLava.drawPoint(target, x, y, ((this.aniOffset / 5 >> 0)) % 8);
            break;
          /*
          case ItemId.GOLDEN_EASTER_EGG: {
            infront.push({
              d:ItemManager.blocksGoldenEasterEggBMD,
              r:new Rectangle(0, 0, 48, 48),
              p:new Point(x - 16, y - 16)
            });
            break;
          }
          */

          default:
            if (ItemId.isNPC(type)){
              /* TODO: NPC
              var npclookup:Npc = lookup.getNpc(cx, cy);
              var npc:ItemNpc = ItemManager.getNpcById(type);
              if (player.currentNpc != null && player.currentNpc.equals(npclookup) && player.currentNpc.isTalking) {
                if (!isAnimatingNPC) {
                  isAnimatingNPC = true;
                  offsetNPC = offset;
                  // Basically just makes NPCs always start animations at frame 0
                }
                npc.drawTo(target, point, ((offset - offsetNPC) / npc.rate >> 0) % npc.frames);
                drewAnimatedNPC = true;
              } else npc.drawTo(target, point, 0);
              */
            }
            else if (
              ItemId.isBlockRotateable(type) && !ItemId.isNonRotatableHalfBlock(type) &&
              type !== ItemId.HALLOWEEN_2016_EYES && type !== ItemId.FIREWORKS &&
              type !== ItemId.DUNGEON_TORCH
            ){
              const rot = this.lookup.getInt(cx, cy);
              const rotSprite = ItemManager.getRotateableSprite(type);
              rotSprite.drawPoint(target, x, y, rot);
            }
            else
              brick.draw(target, x, y);
            break;
        }
      }
    }

    if (
      this.player.checkpoint_x >= startX &&
      this.player.checkpoint_x < endX &&
      this.player.checkpoint_y >= startY &&
      this.player.checkpoint_y < endY
    ){
      const x = (this.player.checkpoint_x << 4) + ox;
      const y = (this.player.checkpoint_y << 4) + oy;
      ItemManager.sprCheckpoint.drawPoint(target, x, y, 1);
    }

    /*
    for each (var obj:Object in infront) {
      target.copyPixels(obj.d, obj.r, obj.p);
    }

    if (!drewAnimatedNPC) isAnimatingNPC = false;
    */

    /*
    particlecontainer.draw(target, ox, oy);
    */
  }

  labelsDraw(target, ox, oy){
    this.labelsDrawRange(target, ox, oy, 0, 0, this.width, this.height);
  }

  labelsDrawRange(target, ox, oy, startX, startY, endX, endY){
    for (const label of this.labels){
      if (label.x < startX || label.x >= endX || label.y < startY || label.y >= endY)
        continue;
      target.textWrap(
        label.text,
        ox + label.x * 16,
        oy + label.y * 16,
        12,
        label.color,
        label.wrapLength
      );
    }
  }

  drawDialogs(target, ox, oy){
    const startX = Math.max(0, Math.min(this.width - 1, (this.player.x - 1) >> 4));
    const startY = Math.max(0, Math.min(this.height - 1, (this.player.y - 1) >> 4));
    const endX = Math.max(0, Math.min(this.width - 1, (this.player.x + 16) >> 4));
    const endY = Math.max(0, Math.min(this.height - 1, (this.player.y + 16) >> 4));

    let textSign = false;

    for (let cy = startY; cy <= endY; cy++){
      let y = (cy << 4) + oy;
      for (let cx = startX; cx <= endX; cx++){
        let x = (cx << 4) + ox;
        const dist = Math.abs((cx << 4) - this.player.x) + Math.abs((cy << 4) - this.player.y);
        const closerSign = !textSign || dist < textSign.dist;
        const isTouching = cx === ((this.player.x + 8) >> 4) && cy === ((this.player.y + 8) >> 4);
        switch (this.map[ItemLayer.FOREGROUND][cy][cx]){
          case ItemId.WORLD_PORTAL:
            if (closerSign && isTouching){
              const wp = this.lookup.getWorldPortal(cx, cy);
              if (wp.name){
                const text = `${wp.name}\nPress Y to enter`;
                const color = '#ffffff';
                textSign = {dist, text, color, x, y};
              }
            }
            break;
          case ItemId.PORTAL:
          case ItemId.PORTAL_INVISIBLE:
            if (closerSign && this.player.isFlying){
              const portal = this.lookup.getPortal(cx, cy);
              const text = `ID: ${portal.id}\nTARGET: ${portal.target}`;
              const color = '#ffffff';
              textSign = {dist, text, color, x, y};
            }
            break;
          case ItemId.BRICK_COMPLETE:
            if (this.player.completeTime && closerSign){
              const text = `${(this.player.completeTime / 1000).toFixed(2)} seconds`;
              const color = this.player.validRun ? '#ffd11a' : '#6699ff';
              textSign = {dist, text, color, x, y};
            }
            break;
          case ItemId.TEXT_SIGN:
            if (closerSign){
              const {text, type} = this.lookup.getTextSign(cx, cy);
              const color = (['#ffffff', '#6699ff', '#ff5050', '#ffd11a'])[type];
              textSign = {dist, text, color, x, y};
            }
            break;
          case ItemId.RESET_POINT:
            if (closerSign && isTouching && !this.player.isFlying){
              const text = 'Press Y to restart world';
              const color = '#ffffff';
              textSign = {dist, text, color, x, y};
            }
            break;
        }
      }
    }

    // only draw one text sign
    if (textSign){
      target.textSign(
        textSign.text
          .replace(/%coins%/g, this.player.coins)
          .replace(/%bcoins%/g, this.player.bcoins)
          .replace(/%deaths%/g, this.player.deaths)
          .replace(/%levelname%/g, this.name)
          .replace(/%username%/g, this.player.name)
          .replace(/%Username%/g,
              this.player.name.substr(0, 1).toUpperCase() + this.player.name.substr(1))
          .replace(/%USERNAME%/g, this.player.name.toUpperCase())
          .replace(/\\n/g, '\n'),
        textSign.x,
        textSign.y,
        textSign.color
      );
    }
  }
}

//
// SynchronizedObject
//

class SynchronizedObject extends BlObject {
  _speedX = 0;
  _speedY = 0;
  _modifierX = 0;
  _modifierY = 0;
  mox = 0;
  moy = 0;
  mx = 0;
  my = 0;
  offset = 0;
  mult = Config.physics_variable_multiplyer;

  get speedX(){
    if (isNaN(this._speedX))
      return 0;
    return this._speedX * this.mult;
  }

  set speedX(value){
    this._speedX = value / this.mult;
  }

  get speedY(){
    if (isNaN(this._speedY))
      return 0;
    return this._speedY * this.mult;
  }

  set speedY(value){
    this._speedY = value / this.mult;
  }

  get modifierX(){
    if (isNaN(this._modifierX))
      return 0;
    return this._modifierX * this.mult;
  }

  set modifierX(value){
    this._modifierX = value / this.mult;
  }

  get modifierY(){
    if (isNaN(this._modifierY))
      return 0;
    return this._modifierY * this.mult;
  }

  set modifierY(value){
    this._modifierY = value / this.mult;
  }
}

//
// SynchronizedSprite
//

class SynchronizedSprite extends SynchronizedObject {
  rect;
  bmd;
  size;
  frames;

  constructor(bmd, w){
    super();
    this.bmd = bmd;
    if (!w)
      w = bmd.height;
    this.rect = {x: 0, y: 0, w: w, h: bmd.height};
    this.size = w;
    this.width = w;
    this.height = w;
    this.frames = bmd.width / this.size;
  }

  set frame(f){
    this.rect.x = f * this.size;
  }

  get frame(){
    return this.rect.x / this.size;
  }

  setRectY(oy){
    this.rect.y = oy;
  }

  hitTest(ox, oy){
    return ox >= this.x && oy >= this.y && ox <= this.x + this.size && oy <= this.y + this.size;
  }

  draw(target, ox, oy){
    target.copyPixels(
      this.bmd,
      this.rect.x,
      this.rect.y,
      this.rect.w,
      this.rect.h,
      this.x + ox,
      this.y + oy,
      this.rect.w,
      this.rect.h
    );
  }
}

//
// Player
//

class Player extends SynchronizedSprite {
  world;
  name = 'player';
  state;
  isGod = false;
  spriteRect;
  queue = Util.emptyArray(Config.physics_queue_length, 0);
  lastJump;
  lastPortal;
  current;
  iceBugs = false;

  // death
  isDead = false;
  deadOffset = 0;
  deaths = 0;
  checkpoint_x = -1;
  checkpoint_y = -1;
  worldSpawn = 0;

  // coins
  collectedCoin;
  coins = 0;
  gx = []; // collected coin locations
  gy = [];
  bcoins = 0;
  bx = []; // collect bcoin locations
  by = [];

  switches = Util.emptyArray(1000, false);
  switchQueue = [];

  // input
  spaceDown = false;
  spaceJustDown = false;
  horizontal = 0;
  vertical = 0;

  // cached input for teleporting (TODO: remove..?)
  oh = 0;
  ov = 0;
  ox = 0;
  oy = 0;
  oSpaceDown = false;
  oSpaceJP = false;
  enforceMovement = false;

  worldGravityMultiplier = 1;

  overlapa = -1;
  overlapb = -1;
  overlapc = -1;
  overlapd = -1;

  // effects
  flipGravity = 0;
  slippery = 0;
  jumpCount = 0;
  maxJumps = 1;
  isInvulnerable = false;
  jumpBoost = 0;
  speedBoost = 0;
  hasLevitation = false;
  isThrusting = false;
  currentThrust = 0;
  cursed = false;
  curseTimeStart = 0;
  curseDuration = 0;
  zombie = false;
  zombieTimeStart = 0;
  zombieDuration = 0;
  lowGravity = false;
  isOnFire = false;
  fireTimeStart = 0;
  fireDuration = 0;
  poison = false;
  poisonTimeStart = 0;
  poisonDuration = 0;
  team = 0;
  teamQueue = [];

  // crowns/gold
  completeTime = false;
  validRun = true;
  hasGoldCrown = false;
  hasSilverCrown = false;
  collideWithGoldCrownDoorGate = false;
  collideWithSilverCrownDoorGate = false;

  static staticEffects = [
    Config.effectJump,
    Config.effectFly,
    Config.effectRun,
    Config.effectProtection,
    Config.effectLowGravity,
    Config.effectMultijump,
    Config.effectGravity
  ];

  static timedEffects = [
    Config.effectCurse,
    Config.effectZombie,
    Config.effectFire,
    Config.effectPoison
  ];

  constructor(world, name, state){
    super(ItemManager.smileysBMD);
    this.spriteRect = {x: 0, y: 0, w: 26, h: 26};
    this.world = world;
    this.collectedCoin = Util.emptyArray(this.world.width * this.world.height, false);
    this.name = name;
    this.state = state;
    this.x = 16;
    this.y = 16;
    this.size = 16;
    this.width = 16;
    this.height = 16;
    this.lastJump = -this.state.now();
  }

  didCollectCoin(x, y){
    return this.collectedCoin[x + y * this.width];
  }

  setCollectedCoin(x, y){
    this.collectedCoin[x + y * this.width] = true;
  }

  resetCollectedCoin(){
    for (let i = 0; i < this.collectedCoin.length; i++)
      this.collectedCoin[i] = false;
  }

  get isFlying(){
    return this.state.mode === 'edit' || (this.state.mode === 'play' && this.isGod);
  }

  killPlayer(){
    if (!this.isFlying && !this.isDead){
      this.isDead = true;
      if (this.state.instantDeath){
        this.deadOffset = 16.3;
        this.validRun = false;
      }
      // TODO: deadAnim = AnimationManager.animRandomDeath();
    }
  }

  get gravityMultiplier(){
    let gm = 1;
    if (this.lowGravity) gm *= 0.15;
    gm *= this.worldGravityMultiplier;
    return gm;
  }

  get jumpMultiplier(){
    let jm = 1;
    if (this.jumpBoost === 1) jm *= 1.3;
    else if (this.jumpBoost === 2) jm *= 0.75;
    if (this.zombie) jm *= 0.75;
    if (this.slippery > 0) jm *= 0.88;
    return jm;
  }

  get speedMultiplier(){
    let sm = 1;
    if (this.speedBoost == 1) sm *= 1.5;
    if (this.speedBoost == 2) sm *= 0.6;
    if (this.zombie) sm *= 0.6;
    return sm;
  }

  resetDeath(){
    this.isDead = false;
  }

  resetCheckpoint(){
    this.checkpoint_x = -1;
    this.checkpoint_y = -1;
  }

  resetEffects(resetTimed = true){
    for (const s of Player.staticEffects)
      this.setEffect(s, false);
    if (resetTimed){
      for (const t of Player.timedEffects)
        this.setEffect(t, false);
    }
  }

  respawn(){
    this._modifierX = 0;
    this._modifierY = 0;
    this.modifierX = 0;
    this.modifierY = 0;
    this._speedX = 0;
    this._speedY = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.isDead = false;
    this.isOnFire = false;
    // TODO: this.last_respawn = this.state.now();
    this.resetQueues();

    this.placeAtSpawn(true);

    this.setEffect(Config.effectCurse, false);
    this.setEffect(Config.effectZombie, false);
    this.setEffect(Config.effectFire, false);
    this.setEffect(Config.effectPoison, false);
  }

  resetQueues(){
    this.switchQueue = [];
    this.teamQueue = [];
    this.state.resetQueues();
  }

  placeAtSpawn(checkpoint){
    let nx = 1;
    let ny = 1;

    if (checkpoint && this.checkpoint_x !== -1){
      nx = this.checkpoint_x;
      ny = this.checkpoint_y;
    }
    else if (this.world.spawnPoints.length > 0){
      if (!this.world.spawnPoints[this.worldSpawn])
        this.world.spawnPoints[this.worldSpawn] = [];
      const spawnID = this.world.spawnPoints[this.worldSpawn].length > 0 ? this.worldSpawn : 0;
      if (
        !this.world.nextSpawnPos[spawnID] ||
        this.world.nextSpawnPos[spawnID] >= this.world.spawnPoints[spawnID].length
      )
        this.world.nextSpawnPos[spawnID] = 0;
      if (this.world.spawnPoints[spawnID].length > 0){
        nx = this.world.spawnPoints[spawnID][this.world.nextSpawnPos[spawnID]][0];
        ny = this.world.spawnPoints[spawnID][this.world.nextSpawnPos[spawnID]][1];
        this.world.nextSpawnPos[spawnID]++;
      }
    }
    nx *= 16;
    ny *= 16;
    this.state.offset(this.x - nx, this.y - ny);
    this.x = nx;
    this.y = ny;
  }

  resetPlayer(load = false, clear = false, worldSpawnID = -1){
    if (this.isFlying && !load && !clear)
      return;
    if (worldSpawnID >= 0)
      this.worldSpawn = worldSpawnID;
    else{
      this.state.tickCount = 0;
      this.validRun = true;
    }
    this.completeTime = false;
    this.hasGoldCrown = false;
    this.hasSilverCrown = false;
    this.state.checkGoldCrown(false);
    this.state.checkSilverCrown(false);
    this.collideWithGoldCrownDoorGate = false;
    this.collideWithSilverCrownDoorGate = false;
    this.deaths = 0;
    this.coins = 0;
    this.bcoins = 0;
    this.resetDeath();
    this.resetEffects();
    this.resetCheckpoint();
    this.resetCollectedCoin();
    this.switches = Util.emptyArray(1000, false);
    this.team = 0;
    this.gx = [];
    this.gy = [];
    this.bx = [];
    this.by = [];
    this.world.resetSecrets();
    if(!this.isFlying && !clear)
      this.respawn();
  }

  pressPurpleSwitch(switchId, enabled){
    if (switchId === 1000){
      for (let i = 0; i < 1000; i++)
        this.pressPurpleSwitch(i, enabled);
    }

    this.switches[switchId] = enabled;
    if (this.world.overlaps(this)){
      this.switches[switchId] = !enabled;
      this.switchQueue.push({switchId, enabled});
    }
  }

  setTeam(team){
    const oldTeam = this.team;
    this.team = team;
    if (this.world.overlaps(this)){
      this.team = oldTeam;
      this.teamQueue.push(team);
    }
  }

  setEffect(effectId, active, arg = 0, duration = 0){
    if (duration > 0){
      arg += 2 * Config.globalPing;
      duration += 2 * Config.globalPing;
    }
    switch (effectId){
      case Config.effectReset:
        this.resetEffects(false);
        break;
      case Config.effectJump:
        this.jumpBoost = active ? arg : 0;
        break;
      case Config.effectFly:
        this.hasLevitation = active;
        break;
      case Config.effectRun:
        this.speedBoost = active ? arg : 0;
        break;
      case Config.effectProtection:
        this.isInvulnerable = active;
        break;
      case Config.effectCurse:
        this.cursed = active;
        if (active){
          this.curseTimeStart = this.state.now() - (duration - arg) * 1000;
          this.curseDuration = duration * 1000;
        }
        break;
      case Config.effectZombie:
        this.zombie = active;
        if (active){
          this.zombieTimeStart = this.state.now() - (duration - arg) * 1000;
          this.zombieDuration = duration * 1000;
        }
        break;
      case Config.effectLowGravity:
        this.lowGravity = active;
        break;
      case Config.effectFire:
        this.isOnFire = active;
        if (active){
          this.fireTimeStart = this.state.now() - (duration - arg) * 1000;
          this.fireDuration = duration * 1000;
        }
        break;
      case Config.effectMultijump:
        this.maxJumps = active ? arg : 1;
        break;
      case Config.effectGravity:
        this.flipGravity = arg;
        break;
      case Config.effectPoison:
        this.poison = active;
        if (active){
          this.poisonTimeStart = this.state.now() - (duration - arg) * 1000;
          this.poisonDuration = duration * 1000;
        }
        break;
    }
  }

  tick(input){
    /*
    animoffset += .2; //animations
    if(isInModMode && !isInGodMode){
      modoffset += .2;
      if (modoffset >= 12)
        modoffset = 6;
    }else modoffset = 0;
    */

    /*
    auraAnimOffset += itemAura.speed;
    if (auraAnimOffset >= itemAura.frames) auraAnimOffset = 0;
    */

    if (this.isDead)
      this.deadOffset += 0.3;
    else
      this.deadOffset = 0;

    if (!this.isDead && (this.cursed || this.zombie || this.isOnFire || this.poison)){
      const now = this.state.now();
      if (this.cursed && this.curseDuration && now - this.curseTimeStart > this.curseDuration)
        this.killPlayer();
      if (this.zombie && this.zombieDuration && now - this.zombieTimeStart > this.zombieDuration)
        this.killPlayer();
      if (this.isOnFire && this.fireDuration && now - this.fireTimeStart > this.fireDuration)
        this.killPlayer();
      if (this.poison && this.poisonDuration && now - this.poisonTimeStart > this.poisonDuration)
        this.killPlayer();
    }

    let cx = (this.x + 8) >> 4;
    let cy = (this.y + 8) >> 4;

    let delayed = this.queue.shift();
    this.current = this.world.getTile(0, cx, cy);

    if (ItemId.isHalfBlock(this.current)){
      let rot = this.world.lookup.getInt(cx, cy);
      if (!ItemId.isBlockRotateable(this.current) && ItemId.isNonRotatableHalfBlock(this.current))
        rot = 1;
      if (rot === 1) cy -= 1;
      if (rot === 0) cx -= 1;
      this.current = this.world.getTile(0, cx, cy);
    }

    {
      const teamQueueLength = this.teamQueue.length;
      for (let i = 0; i < teamQueueLength; i++)
        this.setTeam(this.teamQueue.shift());
    }

    const getCurrentBelow = () => {
      let x = 0, y = 0;
      if (this.iceBugs){
        // original version has buggy logic
        switch (this.current){
          case ItemId.GRAVITY_LEFT : case ItemId.GRAVITY_LEFT_INVISIBLE: x -= 1; break;
          case ItemId.GRAVITY_UP   : case ItemId.GRAVITY_UP_INVISIBLE  : y -= 1; break;
          case ItemId.GRAVITY_RIGHT: x += 1; break;
          case ItemId.DOT          : y += 1; break;
          default:
            switch (this.flipGravity){
              case 0: y += 1; break;
              case 1: x -= 1; break;
              case 2: y -= 1; break;
              default: x += 1; break;
            }
            break;
        }
      }
      else{
        switch (this.current){
          case ItemId.GRAVITY_LEFT : case ItemId.GRAVITY_LEFT_INVISIBLE : x -= 1; break;
          case ItemId.GRAVITY_UP   : case ItemId.GRAVITY_UP_INVISIBLE   : y -= 1; break;
          case ItemId.GRAVITY_RIGHT: case ItemId.GRAVITY_RIGHT_INVISIBLE: x += 1; break;
          case ItemId.GRAVITY_DOWN : case ItemId.GRAVITY_DOWN_INVISIBLE : y += 1; break;
          case ItemId.DOT          : case ItemId.DOT_INVISIBLE          : y += 1; break;
          default:
            switch (this.flipGravity){
              case 0: y += 1; break;
              case 1: x -= 1; break;
              case 2: y -= 1; break;
              default: x += 1; break;
            }
            break;
        }
      }
      return this.world.getTile(0, cx + x, cy + y);
    };

    // Getting the block the player is standing on. Also gets the gravity arrows
    let currentBelow = getCurrentBelow();

    this.queue.push(this.current);

    if (this.current == 4 || this.current == 414 || ItemId.isClimbable(this.current)){
      delayed = this.queue.shift();
      this.queue.push(this.current);
    }

    {
      const switchQueueLength = this.switchQueue.length;
      for (let i = 0; i < switchQueueLength; i++){
        const {switchId, enabled} = this.switchQueue.shift();
        this.pressPurpleSwitch(switchId, enabled);
      }
    }

    this.getPlayerInput(input);

    if (this.isDead){
      this.spaceJustDown = false;
      this.spaceDown = false;
      this.horizontal = 0;
      this.vertical = 0;
    }

    let rotateGravitymo = true;
    let rotateGravitymor = true;
    this.morx = 0;
    this.mory = 0;
    this.mox = 0;
    this.moy = 0;

    if (!this.isFlying){
      if (ItemId.isClimbable(this.current)){
        this.morx = 0;
        this.mory = 0;
      }
      else{
        // Process gravity
        switch (this.current){
          case ItemId.GRAVITY_LEFT:
          case ItemId.GRAVITY_LEFT_INVISIBLE:
            this.morx = -Config.physics_gravity;
            this.mory = 0;
            rotateGravitymor = false;
            break;
          case ItemId.GRAVITY_UP:
          case ItemId.GRAVITY_UP_INVISIBLE:
            this.morx = 0;
            this.mory = -Config.physics_gravity;
            rotateGravitymor = false;
            break;
          case ItemId.GRAVITY_RIGHT:
          case ItemId.GRAVITY_RIGHT_INVISIBLE:
            this.morx = Config.physics_gravity;
            this.mory = 0;
            rotateGravitymor = false;
            break;
          case ItemId.GRAVITY_DOWN:
          case ItemId.GRAVITY_DOWN_INVISIBLE:
            this.morx = 0;
            this.mory = Config.physics_gravity;
            rotateGravitymor = false;
            break;
          case ItemId.SPEED_LEFT:
          case ItemId.SPEED_RIGHT:
          case ItemId.SPEED_UP:
          case ItemId.SPEED_DOWN:
          case ItemId.DOT:
          case ItemId.DOT_INVISIBLE:
            this.morx = 0;
            this.mory = 0;
            break;
          case ItemId.WATER:
            this.morx = 0;
            this.mory = Config.physics_water_buoyancy;
            break;
          case ItemId.MUD:
            this.morx = 0;
            this.mory = Config.physics_mud_buoyancy;
            break;
          case ItemId.LAVA:
            this.morx = 0;
            this.mory = Config.physics_lava_buoyancy;
            break;
          case ItemId.TOXIC_WASTE:
            this.morx = 0;
            this.mory = Config.physics_toxic_buoyancy;
            if (!this.isDead && !this.isInvulnerable) this.killPlayer();
            break;
          case ItemId.FIRE:
          case ItemId.SPIKE:
          case ItemId.SPIKE_CENTER:
          case ItemId.SPIKE_SILVER:
          case ItemId.SPIKE_SILVER_CENTER:
          case ItemId.SPIKE_BLACK:
          case ItemId.SPIKE_BLACK_CENTER:
          case ItemId.SPIKE_RED:
          case ItemId.SPIKE_RED_CENTER:
          case ItemId.SPIKE_GOLD:
          case ItemId.SPIKE_GOLD_CENTER:
          case ItemId.SPIKE_GREEN:
          case ItemId.SPIKE_GREEN_CENTER:
          case ItemId.SPIKE_BLUE:
          case ItemId.SPIKE_BLUE_CENTER:
            this.morx = 0;
            this.mory = Config.physics_gravity;
            if (!this.isDead && !this.isInvulnerable) this.killPlayer();
            break;
          default:
            this.morx = 0;
            this.mory = Config.physics_gravity;
            break;
        }
      }

      if (ItemId.isClimbable(delayed)){
        this.mox = 0;
        this.moy = 0;
      }
      else{
        switch (delayed){
          case ItemId.GRAVITY_LEFT:
          case ItemId.GRAVITY_LEFT_INVISIBLE:
            this.mox = -Config.physics_gravity;
            this.moy = 0;
            rotateGravitymo = false;
            break;
          case ItemId.GRAVITY_UP:
          case ItemId.GRAVITY_UP_INVISIBLE:
            this.mox = 0;
            this.moy = -Config.physics_gravity;
            rotateGravitymo = false;
            break;
          case ItemId.GRAVITY_RIGHT:
          case ItemId.GRAVITY_RIGHT_INVISIBLE:
            this.mox = Config.physics_gravity;
            this.moy = 0;
            rotateGravitymo = false;
            break;
          case ItemId.GRAVITY_DOWN:
          case ItemId.GRAVITY_DOWN_INVISIBLE:
            this.mox = 0;
            this.moy = Config.physics_gravity;
            rotateGravitymo = false;
            break;
          case ItemId.SPEED_LEFT:
          case ItemId.SPEED_RIGHT:
          case ItemId.SPEED_UP:
          case ItemId.SPEED_DOWN:
          case ItemId.DOT:
          case ItemId.DOT_INVISIBLE:
            this.mox = 0;
            this.moy = 0;
            break;
          case ItemId.WATER:
            this.mox = 0;
            this.moy = Config.physics_water_buoyancy;
            break;
          case ItemId.MUD:
            this.mox = 0;
            this.moy = Config.physics_mud_buoyancy;
            break;
          case ItemId.LAVA:
            this.mox = 0;
            this.moy = Config.physics_lava_buoyancy;
            break;
          case ItemId.TOXIC_WASTE:
            this.mox = 0;
            this.moy = Config.physics_toxic_buoyancy;
            break;
          default:
            this.mox = 0;
            this.moy = Config.physics_gravity;
            break;
        }
      }
    }

    switch (this.flipGravity){
      case 1:
        if (rotateGravitymo){
          const temp = this.mox;
          this.mox = -this.moy;
          this.moy = temp;
        }
        if (rotateGravitymor){
          const temp = this.morx;
          this.morx = -this.mory;
          this.mory = temp;
        }
        break;
      case 2:
        if (rotateGravitymo){
          this.mox = -this.mox;
          this.moy = -this.moy;
        }
        if (rotateGravitymor){
          this.morx = -this.morx;
          this.mory = -this.mory;
        }
        break;
      case 3:
        if (rotateGravitymo){
          const temp = this.mox;
          this.mox = this.moy;
          this.moy = -temp;
        }
        if (rotateGravitymor){
          const temp = this.morx;
          this.morx = this.mory;
          this.mory = -temp;
        }
        break;
      case 4:
        if (rotateGravitymo){
          this.mox = 0;
          this.moy = 0;
        }
        if (rotateGravitymor){
          this.morx = 0;
          this.mory = 0;
        }
        break;
    }

    if (ItemId.isLiquid(delayed)){
      this.mx = this.horizontal;
      this.my = this.vertical;
    }
    else if (this.moy){
      this.mx = this.horizontal;
      this.my = 0;
    }
    else if (this.mox){
      this.mx = 0;
      this.my = this.vertical;
    }
    else{
      this.mx = this.horizontal;
      this.my = this.vertical;
    }

    this.mx *= this.speedMultiplier;
    this.my *= this.speedMultiplier;
    this.mox *= this.gravityMultiplier;
    this.moy *= this.gravityMultiplier;

    this.modifierX = this.mox + this.mx;
    this.modifierY = this.moy + this.my;

    if (
      ItemId.isSlippery(currentBelow) &&
      !ItemId.isClimbable(this.current) &&
      this.current !== ItemId.DOT &&
      this.current !== ItemId.DOT_INVISIBLE
    )
      this.slippery = 2;
    else if (ItemId.isSolid(currentBelow))
      this.slippery = 0;
    else if (this.slippery > 0)
      this.slippery -= 0.2;

    if (this._speedX || this._modifierX){
      this._speedX += this._modifierX;
      if (
        (
          (
            (this.mx === 0 && this.moy !== 0) ||
            (this._speedX < 0 && this.mx > 0) ||
            (this._speedX > 0 && this.mx < 0)
          ) &&
          (this.slippery <= 0 || this.isFlying)
        ) || (
          ItemId.isClimbable(this.current) && !this.isFlying
        )
      ){
        this._speedX *= Config.physics_base_drag;
        this._speedX *= Config.physics_no_modifier_drag;
      }
      else if (this.current == ItemId.WATER && !this.isFlying){
        this._speedX *= Config.physics_base_drag;
        this._speedX *= Config.physics_water_drag;
      }
      else if (this.current == ItemId.MUD && !this.isFlying){
        this._speedX *= Config.physics_base_drag;
        this._speedX *= Config.physics_mud_drag;
      }
      else if (this.current == ItemId.LAVA && !this.isFlying){
        this._speedX *= Config.physics_base_drag;
        this._speedX *= Config.physics_lava_drag;
      }
      else if (this.current == ItemId.TOXIC_WASTE && !this.isFlying){
        this._speedX *= Config.physics_base_drag;
        this._speedX *= Config.physics_toxic_drag;
      }
      else if (this.slippery > 0 && !this.isFlying){
        if (this.mx != 0 && !(
          (this._speedX < 0 && this.mx > 0) ||
          (this._speedX > 0 && this.mx < 0)
        ))
          this._speedX *= Config.physics_base_drag;
        else
          this._speedX *= Config.physics_ice_no_mod_drag;
        if ((this._speedX < 0 && this.mx > 0) || (this._speedX > 0 && this.mx < 0))
          this._speedX *= Config.physics_ice_drag;
      }
      else
        this._speedX *= Config.physics_base_drag;

      if (this._speedX > 16)
        this._speedX = 16;
      else if (this._speedX < -16)
        this._speedX = -16;
      else if (this._speedX < 0.0001 && this._speedX > -0.0001)
        this._speedX = 0;
    }

    if (this._speedY || this._modifierY){
      this._speedY += this._modifierY;
      if (
        (
          (
            (this.my == 0 && this.mox != 0) ||
            (this._speedY < 0 && this.my > 0) ||
            (this._speedY > 0 && this.my < 0)
          ) &&
          (this.slippery <= 0 || this.isFlying)
        ) || (
          ItemId.isClimbable(this.current) && !this.isFlying
        )
      ){
        this._speedY *= Config.physics_base_drag;
        this._speedY *= Config.physics_no_modifier_drag;
      }
      else if (this.current == ItemId.WATER && !this.isFlying){
        this._speedY *= Config.physics_base_drag;
        this._speedY *= Config.physics_water_drag;
      }
      else if (this.current == ItemId.MUD && !this.isFlying){
        this._speedY *= Config.physics_base_drag;
        this._speedY *= Config.physics_mud_drag;
      }
      else if (this.current == ItemId.LAVA && !this.isFlying){
        this._speedY *= Config.physics_base_drag;
        this._speedY *= Config.physics_lava_drag;
      }
      else if (this.current == ItemId.TOXIC_WASTE && !this.isFlying){
        this._speedY *= Config.physics_base_drag;
        this._speedY *= Config.physics_toxic_drag;
      }
      else if (this.slippery > 0 && !this.isFlying){
        if (this.my != 0 && !(
          (this._speedY < 0 && this.my > 0) ||
          (this._speedY > 0 && this.my < 0)
        ))
          this._speedY *= Config.physics_base_drag;
        else
          this._speedY *= Config.physics_ice_no_mod_drag;
        if ((this._speedY < 0 && this.my > 0) || (this._speedY > 0 && this.my <0))
          this._speedY *= Config.physics_ice_drag;
      }
      else
        this._speedY *= Config.physics_base_drag;

      if (this._speedY > 16)
        this._speedY = 16;
      else if (this._speedY < -16)
        this._speedY = -16;
      else if (this._speedY < 0.0001 && this._speedY > -0.0001)
        this._speedY = 0;
    }

    if (!this.isFlying){
      switch (this.current){
        case ItemId.SPEED_LEFT:
          this._speedX = -Config.physics_boost;
          break;
        case ItemId.SPEED_RIGHT:
          this._speedX = Config.physics_boost;
          break;
        case ItemId.SPEED_UP:
          this._speedY = -Config.physics_boost;
          break;
        case ItemId.SPEED_DOWN:
          this._speedY = Config.physics_boost;
          break;
      }

      if (this.isDead){
        this._speedX = 0;
        this._speedY = 0;
      }
    }

    let remainderX = this.x % 1;
    let currentSX = this._speedX;
    let remainderY = this.y % 1;
    let currentSY = this._speedY;
    let osx, osy;

    let doneX = false;
    let doneY = false;
    let grounded = false;

    const stepX = () => {
      if (currentSX > 0){
        if (currentSX + remainderX >= 1){
          this.x += (1 - remainderX);
          this.x >>= 0;
          currentSX -= (1 - remainderX);
          remainderX = 0;
        }
        else{
          this.x += currentSX;
          currentSX = 0;
        }
      }
      else if (currentSX < 0){
        if (remainderX + currentSX < 0 && (remainderX != 0 || ItemId.isBoost(this.current))){
          currentSX += remainderX;
          this.x -= remainderX;
          this.x >>= 0;
          remainderX = 1;
        }
        else{
          this.x += currentSX;
          currentSX = 0;
        }
      }
      if (this.world.overlaps(this)){
        this.x = this.ox;
        if (this._speedX > 0 && this.morx > 0)
          grounded = true;
        if (this._speedX < 0 && this.morx < 0)
          grounded = true;

        this._speedX = 0;
        currentSX = osx;
        doneX = true;
      }
    };

    const stepY = () => {
      if (currentSY > 0){
        if (currentSY + remainderY >= 1){
          this.y += 1 - remainderY;
          this.y >>= 0;
          currentSY -= 1 - remainderY;
          remainderY = 0;
        }
        else{
          this.y += currentSY;
          currentSY = 0;
        }
      }
      else if (currentSY < 0){
        if (remainderY + currentSY < 0 && (remainderY != 0 || ItemId.isBoost(this.current))){
          this.y -= remainderY;
          this.y >>= 0;
          currentSY += remainderY;
          remainderY = 1;
        }
        else{
          this.y += currentSY;
          currentSY = 0;
        }
      }
      if (this.world.overlaps(this)){
        this.y = this.oy;
        if (this._speedY > 0 && this.mory > 0)
          grounded = true;
        if (this._speedY < 0 && this.mory < 0)
          grounded = true;

        this._speedY = 0;
        currentSY = osy;
        doneY = true;
      }
    }

    const processPortals = () => {
      this.current = this.world.getTile(0, cx, cy);

      if (!this.isFlying && this.current === ItemId.WORLD_PORTAL){
        if (input.risky){
          const wp = this.world.lookup.getWorldPortal(cx, cy);
          if (wp.name){
            this.state.worldResolver.loadWorld(wp.id, wp.target);
            return true;
          }
          else
            console.warn('Failed to resolve:', wp);
        }
      }

      if (this.isFlying ||
        (this.current !== ItemId.PORTAL && this.current != ItemId.PORTAL_INVISIBLE) ||
        (this.world.lookup.getPortal(cx, cy).target === this.world.lookup.getPortal(cx, cy).id)){
        this.lastPortal = null;
        return;
      }

      if (this.lastPortal != null)
        return;

      this.lastPortal = {x: cx << 4, y: cy << 4};
      const portals = this.world.lookup.getPortals(this.world.lookup.getPortal(cx, cy).target);
      if (portals.length <= 0)
        return;
      const cp = portals[Util.randomRange(0, portals.length - 1)];
      let oldRotation =
        this.world.lookup.getPortal(this.lastPortal.x >> 4, this.lastPortal.y >> 4).rotation;
      const newRotation = this.world.lookup.getPortal(cp.x >> 4, cp.y >> 4).rotation;
      if (oldRotation < newRotation)
        oldRotation += 4;

      const osx = this.speedX;
      const osy = this.speedY;
      const omx = this.modifierX;
      const omy = this.modifierY;

      const dir = oldRotation - newRotation;
      const magic = 1.42;

      switch (dir){
        case 1: // 90 degrees
          this.speedX = osy * magic;
          this.speedY = -osx * magic;

          this.modifierX = omy * magic;
          this.modifierY = -omx * magic;

          remainderY = -remainderX;
          currentSY = -currentSX;
          break;
        case 2: // 180 degrees
          this.speedX = -osx * magic;
          this.speedY = -osy * magic;

          this.modifierX = -omx * magic;
          this.modifierY = -omy * magic;

          remainderY = -remainderY;
          currentSY = -currentSY;
          remainderX = -remainderX;
          currentSX = -currentSX;
          break;
        case 3: // 270 degrees
          this.speedX = -osy * magic;
          this.speedY = osx * magic;

          this.modifierX = -omy * magic;
          this.modifierY = omx * magic;

          remainderX = -remainderY;
          currentSX = -currentSY;
          break;
      }

      if (this.state && this.state.player === this)
        this.state.offset(this.x - cp.x, this.y - cp.y);

      /* TODO: portal particles
      if (Global.base.settings.particles) {
        if (current == ItemId.PORTAL && isme) { // In
          for (var k:int = 0; k < 25; k++) {
            var speedFactor:Number = (Math.random() + 1) / 2;
            world.addParticle(new Particle(world, (Math.random()*100 < 50 ? 5 : 4), cp.x+6, cp.y+6, speedFactor, speedFactor, speedFactor/70, speedFactor/70, Math.random()*360, Math.random()*90, false));
          }
        }
      }
      */

      this.x = cp.x
      this.y = cp.y

      this.lastPortal = cp;
    };

    while ((currentSX !== 0 && !doneX) || (currentSY !== 0 && !doneY)){
      if (processPortals())
        return;
      this.ox = this.x;
      this.oy = this.y;

      osx = currentSX;
      osy = currentSY;

      stepX();
      stepY();
    }

    if (!this.isDead){
      let mod = 1;
      let inJump = false;
      if (this.spaceJustDown){
        this.lastJump = -this.state.now();
        inJump = true;
        mod = -1;
      }

      if (this.spaceDown){
        if (this.hasLevitation){
          this.isThrusting = true;
          this.currentThrust = Config.maxThrust;
        }
        else{
          if (this.lastJump < 0){
            if (this.state.now() + this.lastJump > 750)
              inJump = true;
          }
          else{
            if (this.state.now() - this.lastJump > 150)
              inJump = true;
          }
        }
      }
      else
        this.isThrusting = false;

      if (
        (
          (
            (this.speedX === 0 && this.morx && this.mox) ||
            (this.speedY === 0 && this.mory && this.moy)
          ) && grounded
        ) ||
        this.current === ItemId.EFFECT_MULTIJUMP
      ) // On ground so reset jumps to 0
        this.jumpCount = 0;

      if (this.jumpCount === 0 && !grounded)
        this.jumpCount = 1; // Not on ground so first 'jump' removed

      if (inJump && !this.hasLevitation) {
        if (this.jumpCount < this.maxJumps && this.morx && this.mox){ // Jump in x direction
          if (this.maxJumps < 1000) // Not infinite jumps
            this.jumpCount++;
          this.speedX = -this.morx * Config.physics_jump_height * this.jumpMultiplier;
          this.lastJump = this.state.now() * mod;
        }
        if (this.jumpCount < this.maxJumps && this.mory && this.moy){ // Jump in y direction
          if (this.maxJumps < 1000) // Not infinite jumps
            this.jumpCount++;
          this.speedY = -this.mory * Config.physics_jump_height * this.jumpMultiplier;
          this.lastJump = this.state.now() * mod;
        }
      }

      this.touchBlock(cx, cy, input);
      this.sendMovement(cx, cy);
    }

    if (this.hasLevitation){
      if (this.mory !== 0)
        this.speedY -= this.currentThrust * (Config.physics_jump_height / 2) * this.mory * 0.5;
      if (this.morx !== 0)
        this.speedX -= this.currentThrust * (Config.physics_jump_height / 2) * this.morx * 0.5;
      if (!this.isThrusting){
        if (this.currentThrust > 0)
          this.currentThrust -= Config.thrustBurnOff;
        else
          this.currentThrust = 0;
      }
    }

    // Auto align to grid. (do not autocorrect in liquid)
    const imx = this._speedX << 8;
    const imy = this._speedY << 8;

    if (
      !(imx !== 0 || (ItemId.isLiquid(this.current) && !this.isFlying)) &&
      this._modifierX < 0.1 && this._modifierX > -0.1
    ){
      const tx = this.x % 16;
      if (tx < 2){
        if (tx < 0.2)
          this.x >>= 0;
        else
          this.x -= tx / 15;
      }
      else if (tx > 14){
        if (tx > 15.8){
          this.x >>= 0;
          this.x++;
        }
        else
          this.x += (tx - 14) / 15;
      }
    }

    if (
      !(imy !== 0 || (ItemId.isLiquid(this.current) && !this.isFlying)) &&
      this._modifierY < 0.1 && this._modifierY > -0.1
    ){
      const ty = this.y % 16;
      if (ty < 2){
        if (ty < 0.2)
          this.y >>= 0;
        else
          this.y -= ty / 15;
      }
      else if (ty > 14){
        if (ty > 15.8){
          this.y >>= 0;
          this.y++;
        }
        else
          this.y += (ty - 14) / 15;
      }
    }

    if (this.isDead && this.deadOffset > 16){
      this.respawn();
      this.deaths++;
    }
  }

  draw(target, ox, oy){
    const playerX = this.x + ox - 5;
    const playerY = this.y + oy - 5;
    if (this.state.mode === 'edit')
      this.drawFace(target, playerX, playerY, false, 0);
    else{
      if (this.isDead){
        this.drawFace(target, playerX, playerY, true, 0);
        return;
      }

      this.drawFace(target, playerX, playerY, this.zombie, 0);

      if (this.hasGoldCrown)
        target.copyPixels(ItemManager.goldCrownBMD, 0, 0, 26, 26, playerX, playerY, 26, 26);
      else if (this.hasSilverCrown)
        target.copyPixels(ItemManager.silverCrownBMD, 0, 0, 26, 26, playerX, playerY, 26, 26);

      // TODO: animate fire
      if (this.isOnFire)
        target.copyPixels(ItemManager.auraFireBMD, 0, 0, 26, 26, playerX + 1, playerY, 26, 26);

      if (this.hasLevitation && this.isThrusting){
        // TODO: playLevitationAnimation(target, ox, oy);
      }
    }
  }

  drawFace(target, pointX, pointY, zombie, deg){
    if (this.state.mode === 'play' && zombie){
      target.copyPixelsRotated(
        this.bmd,
        26 * 87,
        this.spriteRect.y,
        26,
        26,
        pointX,
        pointY,
        26,
        26,
        deg
      );
    }
    else{
      target.copyPixelsRotated(
        this.bmd,
        this.state.mode === 'edit'
          ? 106 * 26
          : this.state.mode === 'tas'
          ? 9 * 26
          : this.isGod
          ? 36 * 26
          : this.hasLevitation && this.isThrusting
          ? 61 * 26
          : this.spriteRect.x,
        this.spriteRect.y,
        this.spriteRect.w,
        this.spriteRect.h,
        pointX,
        pointY,
        26,
        26,
        deg
      );
    }
  }

  set frame(f){
    this.spriteRect.x = f * 26;
  }

  get frame(){
    return this.spriteRect.x / 26;
  }

  set wearsGoldSmiley(value){
    this.spriteRect.y = value ? 26 : 0;
  }

  get wearsGoldSmiley(){
    return this.spriteRect.y === 26;
  }

  // overridden in Me
  getPlayerInput(input){}
  touchBlock(cx, cy, input){}
  sendMovement(cx, cy){}
}

//
// Me
//

class Me extends Player {
  coinCountChanged = false;
  pastX;
  pastY;
  keyToColor = {
    '6': 'red',
    '7': 'green',
    '8': 'blue',
    '408': 'cyan',
    '409': 'magenta',
    '410': 'yellow'
  };

  getPlayerInput(input){
    this.horizontal = input.horizontal;
    this.vertical = input.vertical;
    this.spaceJustDown = input.jumpJustPressed;
    this.spaceDown = input.jump;
  }

  touchBlock(cx, cy, input){
    this.coinCountChanged = false;

    if (this.state.mode === 'edit')
      return;

    switch (this.current){
      case ItemId.COIN_GOLD:
      case ItemId.COIN_BLUE:
        if (this.didCollectCoin(cx, cy))
          break;
        this.state.playCollectCoinSound();
        this.setCollectedCoin(cx, cy);
        if (this.current == ItemId.COIN_GOLD) {
          this.coins++;
          this.gx.push(cx);
          this.gy.push(cy);
        }
        else{
          this.bcoins++;
          this.bx.push(cx);
          this.by.push(cy);
        }
        this.coinCountChanged = true;
        // TODO: if particles enabled:
        //for (var k:int = 0; k < 4; k++)
        // spawnCoinPatricle(cx, cy, current == ItemId.COIN_BLUE);
        break;
      case ItemId.RESET_POINT:
        if (!this.isFlying && input.risky)
          this.resetPlayer();
        break;
    }

    if (this.pastX !== cx || this.pastY !== cy){ // only just-entered blocks
      switch (this.current){ // blocks that don't care about godmode
        case ItemId.PIANO:
          this.state.playPianoSound(this.world.lookup.getInt(cx, cy));
          this.world.setBlink(cx, cy, 30);
          break;
        case ItemId.DRUMS:
          this.state.playDrumSound(this.world.lookup.getInt(cx, cy));
          this.world.setBlink(cx, cy, 30);
          break;
        case ItemId.GUITAR:
          this.state.playGuitarSound(this.world.lookup.getInt(cx, cy));
          this.world.setBlink(cx, cy, 30);
          break;
      }

      if (!this.isFlying){
        switch (this.current){
          case ItemId.CROWN:
            if (!this.hasGoldCrown){
              this.hasGoldCrown = true;
              this.state.checkGoldCrown(true);
            }
            break;
          case ItemId.SWITCH_PURPLE:{
            const sid = this.world.lookup.getInt(cx, cy);
            this.pressPurpleSwitch(sid, !this.switches[sid]);
            break;
          }
          case ItemId.SWITCH_ORANGE:{
            const sid = this.world.lookup.getInt(cx, cy);
            this.state.pressOrangeSwitch(sid, !this.world.orangeSwitches[sid]);
            break;
          }
          case ItemId.RESET_PURPLE:{
            const sid = this.world.lookup.getInt(cx, cy);
            if (sid == 1000 || this.switches[sid])
              this.pressPurpleSwitch(sid, false);
            break;
          }
          case ItemId.RESET_ORANGE:{
            const sid = this.world.lookup.getInt(cx, cy);
            if (sid == 1000 || this.world.orangeSwitches[sid])
              this.state.pressOrangeSwitch(sid, false);
            break;
          }
          case ItemId.GRAVITY_LEFT_INVISIBLE:
          case ItemId.GRAVITY_UP_INVISIBLE:
          case ItemId.GRAVITY_RIGHT_INVISIBLE:
          case ItemId.DOT_INVISIBLE:
          case ItemId.SLOW_DOT_INVISIBLE:
          case ItemId.GRAVITY_DOWN_INVISIBLE:
            this.world.setBlink(cx, cy, -100);
            break;
          case ItemId.DIAMOND:
            this.frame = 31;
            break;
          case ItemId.CAKE:
            this.frame = 72 + Math.floor(Math.random() * 4);
            break;
          case ItemId.HOLOGRAM:
            this.frame = 100;
            break;
          case ItemId.CHECKPOINT:
            this.checkpoint_x = cx;
            this.checkpoint_y = cy;
            break;
          case ItemId.BRICK_COMPLETE:
            if (!this.hasSilverCrown){ // TODO: && !resetSend
              this.hasSilverCrown = true;
              this.completeTime = this.state.tickCount * Config.physics_ms_per_tick;
              this.state.checkSilverCrown(true);
            }
            break;
          case ItemId.KEY_RED:
          case ItemId.KEY_GREEN:
          case ItemId.KEY_BLUE:
          case ItemId.KEY_CYAN:
          case ItemId.KEY_MAGENTA:
          case ItemId.KEY_YELLOW:
            this.state.switchKey(this.keyToColor[this.current], true, false);
            break;
          // Effects
          case ItemId.EFFECT_JUMP:{
            const newJumpBoost = this.world.lookup.getInt(cx, cy);
            if (this.jumpBoost === newJumpBoost)
              break;
            this.jumpBoost = newJumpBoost;
            this.setEffect(Config.effectJump, this.jumpBoost !== 0, this.jumpBoost);
            break;
          }
          case ItemId.EFFECT_FLY:{
            const newLevitation = this.world.lookup.getBoolean(cx, cy);
            if (this.hasLevitation === newLevitation)
              break;
            this.hasLevitation = newLevitation;
            this.setEffect(Config.effectFly, this.hasLevitation);
            break;
          }
          case ItemId.EFFECT_RUN:{
            const newSpeed = this.world.lookup.getInt(cx, cy);
            if (this.speedBoost === newSpeed)
              break;
            this.speedBoost = newSpeed;
            this.setEffect(Config.effectRun, this.speedBoost !== 0, this.speedBoost);
            break;
          }
          case ItemId.EFFECT_LOW_GRAVITY:{
            const newLowGravity = this.world.lookup.getBoolean(cx, cy);
            if (this.lowGravity === newLowGravity)
              break;
            this.lowGravity = newLowGravity;
            this.setEffect(Config.effectLowGravity, this.lowGravity);
            break;
          }
          case ItemId.EFFECT_CURSE:{
            const newCurse = this.world.lookup.getInt(cx, cy) > 0;
            if (this.cursed === newCurse || this.isInvulnerable)
              break;
            this.cursed = newCurse;
            this.setEffect(Config.effectCurse, this.cursed,
              this.world.lookup.getInt(cx, cy), this.world.lookup.getInt(cx, cy));
            break;
          }
          case ItemId.EFFECT_ZOMBIE:{
            const newZombie = this.world.lookup.getInt(cx, cy) > 0;
            if (this.zombie === newZombie || this.isInvulnerable)
              break;
            this.zombie = newZombie;
            this.setEffect(Config.effectZombie, this.zombie,
              this.world.lookup.getInt(cx, cy), this.world.lookup.getInt(cx, cy));
            break;
          }
          case ItemId.EFFECT_POISON:{
            const newPoison = this.world.lookup.getInt(cx, cy) > 0;
            if (this.poison === newPoison || this.isInvulnerable)
              break;
            this.poison = newPoison;
            this.setEffect(Config.effectPoison, this.poison,
              this.world.lookup.getInt(cx, cy), this.world.lookup.getInt(cx, cy));
            break;
          }
          case ItemId.NPC_ZOMBIE:
            if (this.zombie || this.isInvulnerable)
              break;
            this.zombie = true;
            this.setEffect(Config.effectZombie, true);
            break;
          case ItemId.EFFECT_PROTECTION:{
            const newInv = this.world.lookup.getBoolean(cx, cy);
            if (this.isInvulnerable === newInv)
              break;
            this.isInvulnerable = newInv;
            if (this.isInvulnerable){
              this.cursed = false;
              this.zombie = false;
              this.poison = false;
              this.isOnFire = false;
              this.setEffect(Config.effectCurse, false);
              this.setEffect(Config.effectPoison, false);
              this.setEffect(Config.effectZombie, false);
              this.setEffect(Config.effectFire, false);
            }
            this.setEffect(Config.effectProtection, this.isInvulnerable);
            break;
          }
          case ItemId.EFFECT_RESET:
            this.resetEffects(false);
            break;
          case ItemId.EFFECT_TEAM:
            this.setTeam(this.world.lookup.getInt(cx, cy));
            break;
          case ItemId.LAVA:
            if (this.isOnFire || this.isInvulnerable)
              break;
            this.isOnFire = true;
            this.setEffect(Config.effectFire, this.isOnFire, 2, 2);
            break;
          case ItemId.WATER:
          case ItemId.MUD:
          case ItemId.TOXIC_WASTE:
            if (!this.isOnFire)
              break;
            this.isOnFire = false;
            this.setEffect(Config.effectFire, false);
            break;
          case ItemId.EFFECT_MULTIJUMP:{
            const jps = this.world.lookup.getInt(cx, cy);
            if (jps === this.maxJumps)
              break;
            this.maxJumps = jps;
            this.setEffect(Config.effectMultijump, this.maxJumps !== 1, this.maxJumps);
            break;
          }
          case ItemId.EFFECT_GRAVITY:{
            const newflipGravity = this.world.lookup.getInt(cx, cy);
            if (this.flipGravity === newflipGravity)
              break;
            this.flipGravity = newflipGravity;
            this.setEffect(Config.effectGravity, this.flipGravity !== 0, this.flipGravity);
            break;
          }
        }
      }

      this.pastX = cx;
      this.pastY = cy;
    }
  }

  sendMovement(cx, cy){
    if (
      this.oh !== this.horizontal ||
      this.ov !== this.vertical ||
      this.oSpaceDown !== this.spaceDown ||
      (this.oSpaceJP !== this.spaceJustDown && this.spaceJustDown) ||
      this.coinCountChanged ||
      this.enforceMovement
    ){
      this.oh = this.horizontal;
      this.ov = this.vertical;
      this.oSpaceDown = this.spaceDown;
      this.oSpaceJP = this.spaceJustDown;
      this.spaceJustDown = false;
    }
    this.enforceMovement = false;
  }
}

//
// PlayState
//

class PlayState extends BlObject {
  mode = 'play';
  player;
  world;
  worldResolver;
  coins = 0;
  bcoins = 0;
  keysQueue = [];
  goldCrownQueue = [];
  silverCrownQueue = [];
  orangeSwitchQueue = [];
  tickCount = 0;
  effectIcons = [];
  _mouseOver = false;
  selection = false;
  playSound = true;
  instantDeath = false;

  constructor(world, worldResolver, spawnTarget){
    super();

    this.world = world;
    this.worldResolver = worldResolver;

    const coinCount = this.world.getCoinCount();
    this.coins = coinCount.coins;
    this.bcoins = coinCount.bcoins;

    this.player = new Me(this.world, 'player', this);
    if (typeof spawnTarget === 'number')
      this.player.worldSpawn = spawnTarget;
    this.player.placeAtSpawn(false);
    this.player.worldGravityMultiplier = this.world.gravity;
    this.x = -this.player.x + Config.bw / 2;
    this.y = -this.player.y + Config.bh / 2;
    this.world.setPlayer(this.player);
    this.world.setPlayState(this);
  }

  now(){
    return (this.tickCount + 1000) * Config.physics_ms_per_tick;
  }

  playCollectCoinSound(){
    if (this.playSound)
      SoundManager.play('coin');
  }

  playPianoSound(note){
    if (this.playSound)
      SoundManager.play(`piano${note + 28}`);
  }

  playDrumSound(note){
    if (this.playSound)
      SoundManager.play(`drums${note + 1}`);
  }

  playGuitarSound(note){
    if (this.playSound)
      SoundManager.play(`guitar${note + 1}`);
  }

  resetQueues(){
    this.keysQueue = [];
    this.goldCrownQueue = [];
    this.silverCrownQueue = [];
    this.orangeSwitchQueue = [];
  }

  checkGoldCrown(collide){
    this.player.collideWithGoldCrownDoorGate = collide;
    if (this.world.overlaps(this.player)){
      this.player.collideWithGoldCrownDoorGate = !collide;
      this.goldCrownQueue.push(collide);
    }
  }

  checkSilverCrown(collide){
    this.player.collideWithSilverCrownDoorGate = collide;
    if (this.world.overlaps(this.player)){
      this.player.collideWithSilverCrownDoorGate = !collide;
      this.silverCrownQueue.push(collide);
    }
  }

  pressOrangeSwitch(switchId, enabled){
    if (switchId === 1000){
      for (let i = 0; i < 1000; i++)
        this.pressOrangeSwitch(i, enabled);
    }

    this.world.orangeSwitches[switchId] = enabled;
    if (this.world.overlaps(this.player)){
      this.world.orangeSwitches[switchId] = !enabled;
      this.orangeSwitchQueue.push({switchId, enabled});
    }
  }

  mouseOver(worldX, worldY){
    this._mouseOver = [worldX, worldY];
  }

  mouseOut(){
    this._mouseOver = false;
  }

  startSelection(worldX, worldY){
    this._mouseOver = false;
    const cx = (worldX - this.x) >> 4;
    const cy = (worldY - this.y) >> 4;
    this.selection = [cx, cy, cx, cy];
  }

  dragSelection(worldX, worldY){
    this._mouseOver = false;
    if (this.selection){
      this.selection[2] = (worldX - this.x) >> 4;
      this.selection[3] = (worldY - this.y) >> 4;
    }
  }

  clearSelection(){
    this.selection = false;
  }

  dragWorld(dx, dy){
    this.x += dx;
    this.y += dy;
    this.player._speedX = 0;
    this.player._speedY = 0;
    this.player.x = Config.bw / 2 - this.x;
    this.player.y = Config.bh / 2 - this.y;
    if (this.player.x < 0){
      this.player.x = 0;
      this.x = Config.bw / 2;
    }
    else if (this.player.x > (this.world.width - 1) * 16){
      this.player.x = (this.world.width - 1) * 16;
      this.x = -this.player.x + Config.bw / 2;
    }
    if (this.player.y < 0){
      this.player.y = 0;
      this.y = Config.bh / 2;
    }
    else if (this.player.y > (this.world.height - 1) * 16){
      this.player.y = (this.world.height - 1) * 16;
      this.y = -this.player.y + Config.bh / 2;
    }
  }

  placeTiles(worldX, worldY){
    this._mouseOver = [worldX, worldY];
    if (this.selection){
      const {targetX, targetY, startX, startY, endX, endY} = this.selectionToTiles();

      const copyTile = (tx, ty, sx, sy) => {
      };

      if (targetX > startX){
        // left to right
        if (targetY > startY){
          // top to bottom
          for (let sy = startY; sy < endY; sy++){
            for (let sx = startX; sx < endX; sx++)
              copyTile(targetX + sx - startX, targetY + sy - startY, sx, sy);
          }
        }
        else{
          // bottom to top
          for (let sy = endY - 1; sy >= startY; sy--){
            for (let sx = startX; sx < endX; sx++)
              copyTile(targetX + sx - startX, targetY + sy - startY, sx, sy);
          }
        }
      }
      else{
        // right to left
        if (targetY > startY){
          // top to bottom
          for (let sy = startY; sy < endY; sy++){
            for (let sx = endX - 1; sx >= startX; sx--)
              copyTile(targetX + sx - startX, targetY + sy - startY, sx, sy);
          }
        }
        else{
          // bottom to top
          for (let sy = endY - 1; sy >= startY; sy--){
            for (let sx = endX - 1; sx >= startX; sx--)
              copyTile(targetX + sx - startX, targetY + sy - startY, sx, sy);
          }
        }
      }
    }
    else{
      // TODO: single block?
    }
  }

  tick(input){
    if (input.retry){
      this.player.resetPlayer();
      return;
    }

    this.world.tick(input);
    this.player.tick(input);

    // camera movement
    this.x -= (this.x - ((-this.player.x) + Config.bw / 2)) * Config.camera_lag;
    this.y -= (this.y - ((-this.player.y) + Config.bh / 2)) * Config.camera_lag;
    if (Math.abs(this.x - (-this.player.x + Config.bw / 2)) < 0.5)
      this.x = -this.player.x + Config.bw / 2;
    if (Math.abs(this.y - (-this.player.y + Config.bh / 2)) < 0.5)
      this.y = -this.player.y + Config.bh / 2;

    const goldCrownLength = this.goldCrownQueue.length;
    for (let i= 0; i < goldCrownLength; i++){
      const collide = this.goldCrownQueue.shift();
      this.checkGoldCrown(collide);
    }

    const silverCrownLength = this.silverCrownQueue.length;
    for (let i= 0; i < silverCrownLength; i++){
      const collide = this.silverCrownQueue.shift();
      this.checkSilverCrown(collide);
    }

    const keysLength = this.keysQueue.length;
    for (let i = 0; i < keysLength; i++){
      const {color, state} = this.keysQueue.shift();
      this.switchKey(color, state, true);
    }

    const orangeSwitchLength = this.orangeSwitchQueue.length;
    for (let i = 0; i < orangeSwitchLength; i++){
      const {switchId, enabled} = this.orangeSwitchQueue.shift();
      this.pressOrangeSwitch(switchId, enabled);
    }

    this.tickCount++;

    {
      const old = this.world.showDeathGate;
      this.world.showDeathGate = this.player.deaths;
      if (this.world.overlaps(this.player))
        this.world.showDeathGate = old;
    }

    {
      const old = this.world.showCoinGate;
      this.world.showCoinGate = this.player.coins;
      if (this.world.overlaps(this.player))
        this.world.showCoinGate = old;
    }

    {
      const old = this.world.showBlueCoinGate;
      this.world.showBlueCoinGate = this.player.bcoins;
      if (this.world.overlaps(this.player))
        this.world.showBlueCoinGate = old;
    }
  }

  switchKey(color, state, fromQueue){
    this.world.setKey(color, state, fromQueue);
    if (this.world.overlaps(this.player)){
      this.world.setKey(color, !state);
      this.keysQueue.push({color, state});
    }
  }

  drawCounts(target){
    let hudY = target.boundary.y + 5;
    const rightEdge = target.boundary.x + target.boundary.w - 20;
    if (this.player.deaths > 0){
      target.text(`${this.player.deaths}x`, 'right', 'top', rightEdge - 2, hudY + 4);
      target.copyPixels(
        ItemManager.deathIconBMD,
        0,
        0,
        13,
        16,
        rightEdge + 2,
        hudY,
        13,
        16
      );
      hudY += 15;
    }
    if (this.coins > 0){
      target.text(`${this.player.coins}/${this.coins}`, 'right', 'top', rightEdge - 2, hudY + 4);
      ItemManager.sprCoin.drawPoint(target, rightEdge, hudY, 0);
      hudY += 15;
    }
    if (this.bcoins > 0){
      target.text(`${this.player.bcoins}/${this.bcoins}`, 'right', 'top', rightEdge - 2, hudY + 4);
      ItemManager.sprBonusCoin.drawPoint(target, rightEdge, hudY, 0);
      hudY += 15;
    }
  }

  drawEffects(target){
    const now = this.now();
    const effects = [];
    if (this.player.jumpBoost !== 0){
      effects.push({
        draw: (x, y) => {
          ItemManager.sprEffect.drawPoint(target, x, y, ([7, 0, 22])[this.player.jumpBoost]);
        },
        sort: -1
      });
    }
    if (this.player.hasLevitation){
      effects.push({
        draw: (x, y) => {
          ItemManager.sprEffect.drawPoint(target, x, y, 1);
        },
        sort: -2
      });
    }
    if (this.player.speedBoost !== 0){
      effects.push({
        draw: (x, y) => {
          ItemManager.sprEffect.drawPoint(target, x, y, ([9, 2, 25])[this.player.speedBoost]);
        },
        sort: -3
      });
    }
    if (this.player.isInvulnerable){
      effects.push({
        draw: (x, y) => {
          ItemManager.sprEffect.drawPoint(target, x, y, 3);
        },
        sort: -4
      });
    }
    if (this.player.cursed){
      const left = this.player.curseDuration - now + this.player.curseTimeStart;
      effects.push({
        draw: (x, y) => {
          ItemManager.sprEffect.drawPoint(target, x, y, 4);
          drawNumber(target, x, y, Math.ceil(left / 1000), true);
        },
        sort: left
      });
    }
    if (this.player.zombie){
      const left = this.player.zombieDuration - now + this.player.zombieTimeStart;
      effects.push({
        draw: (x, y) => {
          ItemManager.sprEffect.drawPoint(target, x, y, 5);
          drawNumber(target, x, y, Math.ceil(left / 1000), true);
        },
        sort: left
      });
    }
    if (this.player.lowGravity){
      effects.push({
        draw: (x, y) => {
          ItemManager.sprEffect.drawPoint(target, x, y, 13);
        },
        sort: -5
      });
    }
    if (this.player.maxJumps !== 1){
      effects.push({
        draw: (x, y) => {
          ItemManager.bricks[ItemId.EFFECT_MULTIJUMP].drawWithNumber(target, x, y,
            this.player.maxJumps <= 0 ? 0 : this.player.maxJumps - this.player.jumpCount, true
          );
        },
        sort: -6
      });
    }
    if (this.player.flipGravity){
      effects.push({
        draw: (x, y) => {
          ItemManager.sprGravityEffect.drawPoint(target, x, y, this.player.flipGravity);
        },
        sort: -7
      });
    }
    if (this.player.poison){
      const left = this.player.poisonDuration - now + this.player.poisonTimeStart;
      effects.push({
        draw: (x, y) => {
          ItemManager.sprEffect.drawPoint(target, x, y, 23);
          drawNumber(target, x, y, Math.ceil(left / 1000), true);
        },
        sort: left
      });
    }
    if (this.player.team !== 0){
      effects.push({
        draw: (x, y) => {
          ItemManager.sprTeamEffect.drawPoint(target, x, y, this.player.team);
        },
        sort: -8
      });
    }

    effects.sort((a, b) => {
      if (a.sort >= 0 && b.sort < 0)
        return -1;
      if (b.sort >= 0 && a.sort < 0)
        return 1;
      return a.sort - b.sort;
    });

    let y = target.boundary.y + 7;
    for (const effect of effects){
      target.fillRect(target.boundary.x + 4, y - 3, 22, 22, '#444', '#aaa');
      effect.draw(target.boundary.x + 7, y);
      y += 25;
    }
  }

  draw(target){
    this.world.draw(target, this.x, this.y);
    if (!this.player.isFlying)
      this.player.draw(target, this.x, this.y);

    // Draws the 'above' decoration layer
    this.world.postDraw(this.player, target, this.x, this.y);

    this.world.labelsDraw(target, this.x, this.y);

    if (this.player.isFlying)
      this.player.draw(target, this.x, this.y);

    // Draws editor mouse
    if (this.mode === 'edit'){
      target.setAlpha(0.25);
      this.selectionDraw(target);
      this.mouseDraw(target);
      target.setAlpha(1);
    }

    // Draws bubbles for signs, world portals, etc.
    this.world.drawDialogs(target, this.x, this.y);

    this.drawCounts(target);
    this.drawEffects(target);
  }

  selectionDraw(target){
    if (!this.selection)
      return;
    const x1 = (this.selection[0] << 4) + this.x;
    const y1 = (this.selection[1] << 4) + this.y;
    const x2 = (this.selection[2] << 4) + this.x;
    const y2 = (this.selection[3] << 4) + this.y;
    target.fillRect(
      Math.min(x1, x2),
      Math.min(y1, y2),
      Math.abs(x2 - x1) + 16,
      Math.abs(y2 - y1) + 16,
      '#fff',
      '#000'
    );
  }

  selectionToTiles(){
    let startX = Math.min(this.selection[0], this.selection[2]);
    let startY = Math.min(this.selection[1], this.selection[3]);
    let endX = Math.max(this.selection[0], this.selection[2]) + 1;
    let endY = Math.max(this.selection[1], this.selection[3]) + 1;
    const halfWidth = (endX - startX - 1) << 3;
    const halfHeight = (endY - startY - 1) << 3;
    let cx = (this._mouseOver[0] - this.x - halfWidth) >> 4;
    let cy = (this._mouseOver[1] - this.y - halfHeight) >> 4;
    if (cx < 0){
      startX -= cx;
      cx = 0;
    }
    if (cy < 0){
      startY -= cy;
      cy = 0;
    }
    if (endX > startX && cx + endX - startX > this.world.width)
      endX = this.world.width + startX - cx;
    if (endY > startY && cy + endY - startY > this.world.height)
      endY = this.world.height + startY - cy;
    const ox = ((cx - startX) << 4) + this.x;
    const oy = ((cy - startY) << 4) + this.y;
    return {startX, startY, endX, endY, cx, cy, ox, oy};
  }

  mouseDraw(target){
    if (!this._mouseOver)
      return;
    if (this.selection){
      const {ox, oy, startX, startY, endX, endY} = this.selectionToTiles();
      this.world.drawRange(target, ox, oy, startX, startY, endX, endY);
      this.world.postDrawRange(null, target, ox, oy, startX, startY, endX, endY);
      this.world.labelsDrawRange(target, ox, oy, startX, startY, endX, endY);
    }
    else{
      // TODO: single block?
    }
  }
}

//
// Screen
//

class Screen {
  static resolutions = ['8', '12', '16', '24', '32', 'max'];
  cnv;
  ctx;
  dpr;
  transX;
  transY;
  scale;
  lastBanner = false;
  lastStatus = false;
  lastState = false;
  lastPaused = false;
  debug = false;
  fullScreen = true;
  showFPS = false;
  fpsText = '?';
  zoom = 1;
  boundary = {x: 0, y: 0, w: Config.bw, h: Config.bh};
  resolution = 'max';
  lastResize;
  frameCount = 0;
  lastFPS = 0;

  constructor(cnv, dpr){
    this.cnv = cnv;
    this.ctx = cnv.getContext('2d');
    this.dpr = dpr;
  }

  clear(){
    this.lastBanner = false;
    this.lastStatus = false;
    this.lastState = false;
    this.lastPaused = false;
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
  }

  setAlpha(v){
    this.ctx.globalAlpha = v;
  }

  drawState(state, paused){
    this.clear();
    this.lastState = state;
    this.lastPaused = paused;
    this.ctx.save();
    this.boundary.x = 0;
    this.boundary.y = 0;
    this.boundary.w = Config.bw;
    this.boundary.h = Config.bh;
    const scale = Math.min(
      this.cnv.width * this.zoom / Config.bw,
      this.cnv.height * this.zoom / Config.bh
    );
    this.transX = Math.round((this.cnv.width - Config.bw * scale) * 0.5);
    this.transY = Math.round((this.cnv.height - Config.bh * scale) * 0.5);
    this.scale = scale;
    if (this.fullScreen){
      this.boundary.x = Math.round(-this.transX / scale);
      this.boundary.y = Math.round(-this.transY / scale);
      this.boundary.w = Math.round(this.cnv.width / scale);
      this.boundary.h = Math.round(this.cnv.height / scale);
    }
    else{
      this.ctx.beginPath();
      const x1 = this.worldToScreenX(0);
      const y1 = this.worldToScreenY(0);
      const x2 = this.worldToScreenX(Config.bw);
      const y2 = this.worldToScreenY(Config.bh);
      this.ctx.rect(x1, y1, x2 - x1, y2 - y1);
      this.ctx.clip();
    }

    //
    // draw the state
    state.draw(this);
    //
    //

    this.ctx.restore();
    this.frameCount++;
    const now = Date.now();
    if (this.lastFPS + 1000 <= now){
      this.fpsText = `${this.frameCount} FPS`;
      this.lastFPS = now;
      this.frameCount = 0;
    }

    if (this.showFPS){
      const x = this.worldToScreenX(Math.round(this.boundary.x + this.boundary.w / 2));
      const y = this.worldToScreenY(this.boundary.y + 5);
      this.ctx.font = `${15 * this.scale}px monospace`;
      this.ctx.fillStyle = '#fff';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'top';
      this.ctx.strokeStyle = '#000';
      this.ctx.lineWidth = 2 * this.scale;
      this.ctx.strokeText(this.fpsText, x, y);
      this.ctx.fillText(this.fpsText, x, y);
    }

    if (paused){
      this.ctx.fillStyle = '#00000044';
      this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
      const x = this.worldToScreenX(Math.round(this.boundary.x + this.boundary.w / 2));
      const y = this.worldToScreenY(Math.round(this.boundary.y + this.boundary.h / 2));
      this.ctx.font = `${30 * this.scale}px ee_nokiafc22`;
      this.ctx.fillStyle = '#fff';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText('Paused', x, y);
    }
  }

  worldToScreenX(x){
    return Math.round(x * this.scale + this.transX);
  }

  worldToScreenY(y){
    return Math.round(y * this.scale + this.transY);
  }

  screenToWorldX(x){
    return Math.round((x - this.transX) / this.scale);
  }

  screenToWorldY(y){
    return Math.round((y - this.transY) / this.scale);
  }

  copyPixels(bmd, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH){
    this.copyPixelsRotated(bmd, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH, 0);
  }

  copyPixelsRotated(bmd, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH, deg){
    deg = ((deg % 360) + 360) % 360;
    if (deg === 90){
      // TODO: this
    }
    else if (deg === 180){
      // TODO: this
    }
    else if (deg === 270){
      // TODO: this
    }
    else{
      const x1 = this.worldToScreenX(dstX);
      const y1 = this.worldToScreenY(dstY);
      const x2 = this.worldToScreenX(dstX + dstW);
      const y2 = this.worldToScreenY(dstY + dstH);
      this.ctx.drawImage(
        bmd.img,
        srcX * bmd.scale,
        srcY * bmd.scale,
        srcW * bmd.scale,
        srcH * bmd.scale,
        x1,
        y1,
        x2 - x1,
        y2 - y1
      );
    }
  }

  fillRect(x, y, w, h, color, borderColor){
    const x1 = this.worldToScreenX(x);
    const y1 = this.worldToScreenY(y);
    const x2 = this.worldToScreenX(x + w);
    const y2 = this.worldToScreenY(y + h);
    if (borderColor){
      this.ctx.beginPath();
      this.ctx.rect(x1, y1, x2 - x1, y2 - y1);
      this.ctx.lineWidth = this.worldToScreenX(1) - this.worldToScreenX(0);
      this.ctx.fillStyle = color;
      this.ctx.fill();
      this.ctx.strokeStyle = borderColor;
      this.ctx.stroke();
    }
    else{
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
    }
  }

  text(text, align, baseline, x, y, fontSize, color){
    this.ctx.font = `${(fontSize || 12) * this.scale}px ee_nokiafc22`;
    this.ctx.fillStyle = color || '#fff';
    this.ctx.textAlign = align;
    this.ctx.textBaseline = baseline;
    this.ctx.fillText(text, this.worldToScreenX(x), this.worldToScreenY(y));
  }

  textWrap(text, x, y, fontSize, color, wrapLength){
    const fsize = (fontSize || 12) * this.scale;
    this.ctx.font = `${fsize}px ee_nokiafc22`;
    this.ctx.fillStyle = color || '#fff';
    this.ctx.textAlign = 'left';
    this.ctx.textBaseline = 'top';
    const spaceWidth = this.ctx.measureText(' ').width;
    const boxWidth = this.worldToScreenX(wrapLength) - this.worldToScreenX(0);
    const lineHeight = fsize * 16 / 12;
    const words = text.split(' ');
    const sx = this.worldToScreenX(x + 2);
    let px = sx;
    let py = this.worldToScreenY(y + 3);
    for (const word of words){
      const w = this.ctx.measureText(word).width;
      if (px > sx && px + w > sx + boxWidth){
        px = sx;
        py += lineHeight;
      }
      this.ctx.fillText(word, px, py);
      px += w + spaceWidth;
    }
  }

  textSign(text, x, y, color){
    this.ctx.font = `${11 * this.scale}px sans-serif`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'bottom';
    const hardLines = text.split('\n');
    const lines = [];
    for (const line of hardLines){
      const words = line.split(' ');
      if (words.length <= 0)
        lines.push('');
      else{
        while (words.length > 0){
          lines.push(words.shift());
          while (words.length > 0 && lines[lines.length - 1].length + words[0].length + 1 < 30)
            lines[lines.length - 1] += ' ' + words.shift();
        }
      }
    }
    const width = lines.map(line => this.ctx.measureText(line).width)
      .reduce((a, b) => Math.max(a, b), 0);
    const height = lines.length * 16;
    const rx = this.worldToScreenX(x + 2) - width / 2;
    const ry = this.worldToScreenY(y - 4 - height);
    const rw = this.worldToScreenX(12) - this.worldToScreenX(0) + width;
    const rh = this.worldToScreenY(height) - this.worldToScreenY(0);
    const rad = 5 * this.scale;
    this.ctx.beginPath();
    this.ctx.moveTo(rx + rad, ry);
    this.ctx.lineTo(rx + rw - rad, ry);
    this.ctx.quadraticCurveTo(rx + rw, ry, rx + rw, ry + rad);
    this.ctx.lineTo(rx + rw, ry + rh - rad);
    this.ctx.quadraticCurveTo(rx + rw, ry + rh, rx + rw - rad, ry + rh);
    this.ctx.lineTo(rx + rw / 2 + 6 * this.scale, ry + rh);
    this.ctx.lineTo(rx + rw / 2, ry + rh + 4 * this.scale);
    this.ctx.lineTo(rx + rw / 2, ry + rh);
    this.ctx.lineTo(rx + rad, ry + rh);
    this.ctx.quadraticCurveTo(rx, ry + rh, rx, ry + rh - rad);
    this.ctx.lineTo(rx, ry + rad);
    this.ctx.quadraticCurveTo(rx, ry, rx + rad, ry);
    this.ctx.closePath();
    this.ctx.fillStyle = '#000';
    this.ctx.save();
    this.ctx.globalAlpha = 0.5;
    this.ctx.fill();
    this.ctx.restore();
    this.ctx.strokeStyle = '#777';
    this.ctx.lineWidth = this.scale;
    this.ctx.stroke();
    this.ctx.fillStyle = color || '#fff';
    for (let i = 0; i < lines.length; i++){
      this.ctx.fillText(
        lines[i],
        this.worldToScreenX(x + 8),
        this.worldToScreenY(y - 5.5 + (i - lines.length + 1) * 16)
      );
    }
  }

  debugText(text, x, y){
    if (!this.debug)
      return;
    this.ctx.font = `${7 * this.scale}px sans-serif`;
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(text, this.worldToScreenX(x), this.worldToScreenY(y));
  }

  debugRect(x, y, w, h){
    if (!this.debug)
      return;
    const x1 = this.worldToScreenX(x);
    const y1 = this.worldToScreenY(y);
    const x2 = this.worldToScreenX(x + w);
    const y2 = this.worldToScreenY(y + h);
    this.ctx.strokeStyle = '#f00';
    this.ctx.beginPath();
    this.ctx.rect(x1, y1, x2 - x1, y2 - y1);
    this.ctx.lineWidth = 2 * this.dpr;
    this.ctx.stroke();
  }

  drawBanner(text){
    this.clear();
    this.lastBanner = text;
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
    this.ctx.font = (20 * this.dpr) + 'px sans-serif';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(text, this.cnv.width / 2, this.cnv.height / 2);
  }

  drawStatus(text){
    this.lastStatus = text;
    this.ctx.font = (20 * this.dpr) + 'px sans-serif';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(text, this.cnv.width / 2, 30 * this.dpr);
  }

  drawLoading(current, total){
    this.drawBanner('Loading... (' + current + '/' + total + ')');
  }

  resize(w, h){
    this.lastResize = {w, h};
    const maxWidth = Math.round(w * this.dpr);
    const maxHeight = Math.round(h * this.dpr);
    if (this.resolution === 'max'){
      this.cnv.width = maxWidth;
      this.cnv.height = maxHeight;
    }
    else{
      const res = parseFloat(this.resolution);
      const bw = Math.round(Config.bw * res / (16 * this.zoom));
      const bh = Math.round(Config.bh * res / (16 * this.zoom));
      let newWidth = Math.round(w * bh / h);
      let newHeight = bh;
      if (w * bh <= h * bw){
        newWidth = bw;
        newHeight = Math.round(h * bw / w);
      }
      if (newWidth >= maxWidth || newHeight >= maxHeight){
        newWidth = maxWidth;
        newHeight = maxHeight;
      }
      this.cnv.width = newWidth;
      this.cnv.height = newHeight;
    }
    this.cnv.style.width = `${w}px`;
    this.cnv.style.height = `${h}px`;
    this.ctx.imageSmoothingEnabled = false;
    const {lastBanner, lastState, lastPaused, lastStatus} = this;
    if (lastBanner)
      this.drawBanner(lastBanner);
    if (lastState)
      this.drawState(lastState, lastPaused);
    if (lastStatus)
      this.drawStatus(lastStatus);
  }

  clampZoom(z){
    return z > 0.95 ? 1 : z;
  }

  setZoom(z){
    this.zoom = this.clampZoom(z);
    this.resize(this.lastResize.w, this.lastResize.h);
  }

  multiplyZoom(m){
    this.setZoom(this.zoom * m);
  }

  setResolution(resolution){
    this.resolution = resolution;
    this.resize(this.lastResize.w, this.lastResize.h);
  }
}

//
// File Loading
//

class WorldResolver {
  async findName(id){ throw new Error('Not implemented'); }
  async loadWorld(id, spawnTarget){ throw new Error('Not implemented'); }
}

class EmptyWorldResolver extends WorldResolver {
  async findName(){ return false; }
  async loadWorld(){ return false; }
}

class FSFolder {
  static pageSize = 50;
  kind = 'folder';
  name;
  desc;
  isPublicIdResolver = false;

  constructor(name, desc){
    this.name = name;
    this.desc = desc;
  }

  markPublic(){
    this.isPublicIdResolver = true;
  }

  async list(){ throw new Error('Not implemented'); }
  async findWorld(){ return false; }
}

class FSWorld {
  kind = 'world';
  id;
  name;
  desc;
  ownerId;
  owner;
  width;
  height;
  gravity;
  bgColor;

  constructor(id, name, desc, ownerId, owner, width, height, gravity, bgColor){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.ownerId = ownerId;
    this.owner = owner;
    this.width = width;
    this.height = height;
    this.gravity = gravity;
    this.bgColor = bgColor;
  }

  async load(){ throw new Error('Not implemented'); }
}

class LayerDataWorld extends FSWorld {
  startPosition;
  data;
  metadata;

  constructor(id, name, desc, ownerId, owner, width, height, gravity, bgColor, data, metadata){
    super(id, name, desc, ownerId, owner, width, height, gravity, bgColor);
    this.startPosition = data.position;
    this.data = data;
    this.metadata = metadata;
  }

  async load(){
    const world = new World();
    world.name = this.name;
    world.clearWorld(this.width, this.height, this.gravity, this.bgColor);
    this.data.position = this.startPosition;
    world.loadLayerData(this.data);
    return world;
  }
}

function bgColorFromInt(background){
  return (background & 0x00ffffff) === 0
    ? ''
    : `#${`00000${(background & 0x00ffffff).toString(16)}`.substr(-6)}`;
}

class EelvlWorld extends LayerDataWorld {
  constructor(id, eelvl, prefix){
    const data = eelvl.inflate();
    const owner = data.readUTF();
    const name = data.readUTF();
    const width = data.readInt();
    const height = data.readInt();
    const gravity = data.readFloat();
    const background = data.readUnsignedInt();
    const desc = data.readUTF();
    const campaign = data.readBoolean();
    const crewId = data.readUTF();
    const crewName = data.readUTF();
    const crewStatus = data.readInt();
    const minimap = data.readBoolean();
    const ownerID = data.readUTF();
    const bgColor = bgColorFromInt(background);
    super(id, prefix + name, desc, false, owner, width, height, gravity, bgColor, data, {
      campaign,
      crewId,
      crewName,
      crewStatus,
      minimap,
      ownerID
    });
  }
}

class GenericFolder extends FSFolder {
  listing = [];

  async list(){
    return {more: false, listing: this.listing.filter(a => !!a)};
  }

  add(item){
    this.listing.push(item);
  }

  addEelvl(basename, data){
    // attempt to extract a public ID from the basename
    let id = '?';
    const m = basename.match(/_-_(P[a-zA-Z0-9]+)$/);
    if (m && m[1]){
      id = m[1];
      this.markPublic();
    }
    this.add(new EelvlWorld(id, data, ''));
  }

  async findWorld(id){
    for (const it of this.listing){
      if (!it)
        continue;
      if (it.kind === 'world'){
        if (it.id === id)
          return it;
      }
      else if (it.kind === 'folder'){
        const w = await it.findWorld(id);
        if (w)
          return w;
      }
    }
    return false;
  }
}

class CampaignFolder extends GenericFolder {
  static idMap = {
    // Tutorials
    '0.0': 'PWL17t1R6bbUI',
    '0.1': 'PWwYocqKOGbUI',
    '0.2': 'PWZxZVtyWma0I',
    '0.3': 'PWNDdLqe0GbEI',
    // Ancient Ruins
    '1.0': 'PWGLfVn_oob0I',
    '1.1': 'PW9plKxGpDbUI',
    '1.2': 'PWsBNdyfvhbkI',
    '1.3': 'PWzvK4_8KVb0I',
    // Spring
    '2.0': 'PW5m6ANVwRcEI',
    '2.1': 'PW4ua-CWcRcEI',
    '2.2': 'PWBIi0ZYXFb0I',
    '2.3': 'PWE8LaNkYRcEI',
    '2.4': 'PWPy8n38CZbUI',
    '2.5': 'PWZLUPeLFza0I',
    // Animal Antics
    '3.0': 'PWX_m7vwmHb0I',
    '3.1': 'PWcVwXDmnDb0I',
    '3.2': 'PWbIBJSWA3cUI',
    '3.3': 'PWxQcz6ccwbUI',
    '3.4': 'PWoYMVVWUacEI',
    // Nostalgia
    '4.0': 'PWAJyyrgZta0I',
    '4.1': 'PWzT9zHuFDcEI',
    '4.2': 'PWAEAk9rmia0I',
    '4.3': 'PWZmirlWLwbkI',
    // Journey
    '5.0': 'PWY5u2PpVycEI',
    '5.1': 'PWMRo6EZ2tcEI',
    '5.2': 'PW6cHyrN_Vb0I',
    '5.3': 'PWlz012mS0cEI',
    '5.4': 'PW_3jU6Riyb0I',
    // Altered Reality
    '6.0': 'PW87xHNGimbEI',
    '6.1': 'PW-NmWMhuobUI',
    '6.2': 'PWmKZcYpfWbEI',
    '6.3': 'PWmTcai7lobEI',
    '6.4': 'PWO4rC6ZGibEI',
    // Adventure League
    '7.0': 'PWa7N4Mju-a0I',
    '7.1': 'PW76IY0MXia0I',
    '7.2': 'PWTzwAF6dla0I',
    '7.3': 'PWte50lfdObEI',
    // Video Game 1
    '8.0': 'PWqSFP6ewubUI',
    '8.1': 'PW14vzcgokcEI',
    '8.2': 'PWkc8chNTybUI',
    '8.3': 'PWZfovhaMUbUI',
    '8.4': 'PWmnlTK7nkbkI',
    // Video Game 2
    '9.0': 'PWTzx8K4a4b0I',
    '9.1': 'PWk_0jrbwMbEI',
    '9.2': 'PWTZCVK6KBbEI',
    '9.3': 'PW5WNPqd3ia0I',
    '9.4': 'PWJOGeKJUCb0I',
    // Christmas
    '10.0': 'PW5tMMIEpXcEI',
    '10.1': 'PW3surELxUcEI',
    '10.2': 'PW4Q8WQXphcEI',
    '10.3': 'PWdA2jl1BecEI',
    '10.4': 'PWw4g4itMFbkI',
    '10.5': 'PWbc7Vf5QubEI',
    // Technology
    '11.0': 'PWANzs-YCDa0I',
    '11.1': 'PWoCKSzuwYbEI',
    '11.2': 'PWZpFcbX6lbEI',
    '11.3': 'PW8puZ4EH4bEI',
    // Story Time
    '12.0': 'PW_50PNCBxb0I',
    '12.1': 'PWgxmS-oCNbUI',
    '12.2': 'PW85ftBsBNbUI',
    '12.3': 'PWGd9IWQ7XbkI',
    // Speedrun
    '13.0': 'PWriHvcgm2b0I',
    '13.1': 'PWCH0cFHHhb0I',
    '13.2': 'PWE_KQFaM-b0I',
    '13.3': 'PWp7HvfpAbb0I',
    // Summer
    '14.0': 'PWlnFPQFIlcEI',
    '14.1': 'PWAA8zrKovcEI',
    '14.2': 'PW31mT_sUcb0I',
    '14.3': 'PW9xXWcpK3a0I',
    '14.4': 'PWFcNS_lcucEI',
    '14.5': 'PWkBzWwP62cEI',
    '14.6': 'PWuxgct7TYb0I',
    // Bouncy
    '15.0': 'PWfNrz_tB7bkI',
    '15.1': 'PWcHdv7pmib0I',
    '15.2': 'PWADTqKBJta0I',
    '15.3': 'PW1xmiJhEacEI',
    // Tunnel Rats
    '16.0': 'PW4dt06vvya0I',
    '16.1': 'PWAdYbyoQJbkI',
    '16.2': 'PWsylONd9nbkI',
    '16.3': 'PW2BFPxWfbbUI',
    // Monochrome
    '17.0': 'PW8QSzG6sMb0I',
    '17.1': 'PWi673e6f0cEI',
    '17.2': 'PWUK7KoGiObkI',
    '17.3': 'PW-Z8FiO6CcUI',
    // Halloween 1
    '18.0': 'PWgAWBX29_a0I',
    '18.1': 'PWRysEhScKbEI',
    '18.2': 'PWjwXetUUSbEI',
    '18.3': 'PWeTI0z4m3a0I',
    // Halloween 2
    '19.0': 'PWtxfwDE2dcEI',
    '19.1': 'PWSS_93c1XcEI',
    '19.2': 'PWArWJDbd5b0I',
    '19.3': 'PWTZxwX9MRbEI',
    // Halloween 3
    '20.0': 'PWDW59Z6U-cUI',
    '20.1': 'PW8YSz6jhnbkI',
    '20.2': 'PWtys4KcLCb0I',
    '20.3': 'PWbtT77xK2b0I',
    // Non-Stop
    '21.0': 'PWEa8JYAMjcUI',
    '21.1': 'PWZD60ChO2bkI',
    '21.2': 'PWNxcCaxnncEI',
    '21.3': 'PWRuYku989bkI',
    // Colourful
    '22.0': 'PWAGSVmRePa0I',
    '22.1': 'PWs8y8WQmDbEI',
    '22.2': 'PWPeWZw4y7a0I',
    '22.3': 'PWnwS8Rypgb0I',
    // Puzzle Pack 1
    '23.1': 'PWT5CTj2ymbEI',
    '23.0': 'PWvawbBYxEbEI',
    '23.2': 'PW7daUKhdSbEI',
    '23.3': 'PWczAToIbAa0I',
    // Puzzle Pack 2
    '24.0': 'PWKk0U4ASucEI',
    '24.1': 'PWGMIryN4BcEI',
    '24.2': 'PWrbs5tjjCb0I',
    '24.3': 'PW_NvguMLob0I',
    '24.4': 'PWt8s2OMT4bkI',
    // Relativity
    '25.0': 'PWe-bF5HaicEI',
    '25.1': 'PW98HyI6aQcEI',
    '25.2': 'PWpGzzMZ9scEI',
    '25.3': 'PWm6MdTHEIcEI',
    '25.4': 'PWRwiZ5QOfcEI',
    // Advent Calendar
    '26.0': 'PWxigUsIQDcEI',
    '26.1': 'PWAJxPmkCva0I',
    '26.2': 'PWssMzVQrTcEI',
    '26.3': 'PWI5gpNV7CcEI',
    '26.4': 'PWZfMmd9sabUI',
    // Wintery Wonders
    '27.0': 'PWAIxKAlqia0I',
    '27.1': 'PW8NgXSsIrbUI',
    '27.2': 'PWqUws4rsPbUI',
    '27.3': 'PWMBPWuQoxbEI',
    '27.4': 'PWeUTEF4-ZcEI',
    '27.5': 'PWKrIf05ClbkI',
    // High Score
    '28.0': 'PW26XYwxQTcEI',
    '28.1': 'PWZy1ITyisbEI',
    '28.2': 'PWW9ghHhEacEI',
    '28.3': 'PWaCH3atA1cEI',
    // Looks Can Deceive
    '29.0': 'PWkwAAAA',
    '29.1': 'PWLpmNPxDCa0I',
    '29.2': 'PWgW35mkRLbEI',
    '29.3': 'PW1Cy-zQpzbUI',
    // Endurance
    '30.0': 'PWg7bAoYIgbEI',
    '30.1': 'PWiude_hH-bkI',
    '30.2': 'PWnp8Dff3Pa0I',
    '30.3': 'PWAJwkxnxta0I',
    // Bittersweet
    '31.0': 'PW8LOUFtN8bUI',
    '31.1': 'PW8H7HNTCab0I',
    '31.2': 'PW8CdbR1nmb0I',
    '31.3': 'PWktTt9PcHcEI',
    '31.4': 'PWxOUb2l5qcEI',
    // Perpetual Frustration
    '32.0': 'PWeOM7vic8bEI',
    '32.1': 'PW4OueyYELbEI',
    '32.2': 'PWABBzi-KNa0I',
    '32.3': 'PW2hy-hS3Lb0I',
    '32.4': 'PWK4vMtLA4cEI',
    '32.5': 'PW_B5037pccEI',
    // Trial & Terror
    '33.0': 'PWAMABPuCza0I',
    '33.1': 'PWgRNYXk92cEI',
    '33.2': 'PWp1ks2X7dbkI',
    '33.4': 'PWXRKJq64RcUI',
    '33.3': 'PWq8iZ6MBJbUI',
    '33.5': 'PW2GIc2MBvcEI',
    // Fractured Fingers
    '34.0': 'PWGjnrH_3ZbEI',
    '34.1': 'PWUmV_Pi2IbEI',
    '34.2': 'PWVQEdv5HBbUI',
    '34.3': 'PW3s4sdloGbEI',
    '34.4': 'PWrAEJNqJja0I',
    // Best of EE
    '35.0': 'PWsQAAAA',
    '35.1': 'PWev8LKPlda0I',
    '35.2': 'PWP7D66Ld4a0I',
    '35.3': 'PW87AG7vc4bEI',
    '35.4': 'PWbNLA2_00bkI',
    '35.5': 'PW92lNQMR4bkI',
    '35.6': 'PWjLR-B6Lrb0I',
    '35.7': 'PWFq4xyNAEcUI',
    '35.8': 'PWstKyB-p7cEI',
    '35.9': 'PWfTLL3gckcEI',
    // Elemental - Fire
    '36.0': 'PWXnxH4yZ6cEI',
    '36.1': 'PWaf_JSCRHcEI',
    '36.2': 'PW4jIb5Jmib0I',
    '36.3': 'PWcT2Sfee4a0I',
    '36.4': 'PW2TQCXlUkbUI',
    // Elemental - Earth
    '37.0': 'PWCAwKIWaecEI',
    '37.1': 'PWkCGWQlQLcUI',
    '37.2': 'PWLs2QMWUccEI',
    '37.3': 'PWC95EK3mjcEI',
    '37.4': 'PW6WtPOBKDbkI',
    // Elemental - Wind
    '38.0': 'PWuWhemKAccEI',
    '38.1': 'PWulMWA1pNbEI',
    '38.2': 'PWImrW4axua0I',
    '38.3': 'PWkE1F8dAycUI',
    '38.4': 'PWWwSGp3kocEI',
    // Elemental - Water
    '39.0': 'PWED-5sqb7cEI',
    '39.1': 'PWHxJQUPwzcUI',
    '39.2': 'PWZ00-LhsTbkI',
    '39.3': 'PWzrFyl7QvcEI',
    '39.4': 'PWcqnnMZzBcEI',
    // Elemental - Space
    '40.0': 'PWzp3nrUhbb0I',
    '40.1': 'PWF_ENQuz5bkI',
    '40.2': 'PWGfMjgaLAa0I',
    '40.3': 'PWgT832KmlbkI',
    '40.4': 'PW9zZUV3Z2b0I',
    // Worst
    '41.0': 'PWnsRoOK0_cEI',
    '41.1': 'PW0B5RcvBbb0I',
    '41.2': 'PWp8s4xhwHcUI',
    '41.3': 'PWE7zf-vf9cEI',
    '41.4': 'PWwIUGWdaJcEI'
  };
  // extras???
  //   Nostalgia 2  0  PWHAEAAA
  //   Nostalgia 2  1  PWAHTpVViSa0I
  //   Nostalgia 2  2  PWNewYear10
  //   Nostalgia 2  3  PWpgEAAA
  //   Nostalgia 2  4  PWwOSVUPOLbEI
  //   Best of Everybody Edits  0  PWTe3JvOPwcEI
  //   Elemental  0  PWZsXY5zABcUI
  //   Scavenger Hunt  0  PWahKy9wI2cUI

  static getId(c, d){
    return CampaignFolder.idMap[`${c}.${d}`];
  }

  constructor(zipObj){
    super('Campaigns', 'Campaigns included in Everybody Edits: Offline.');
    for (const entry of zipObj){
      const campId = parseInt(entry.name.substr(0, entry.name.indexOf('/')), 10);
      if (!this.listing[campId])
        this.listing[campId] = new GenericFolder();
      const camp = this.listing[campId];
      if (entry.name.substr(entry.name.lastIndexOf('/')) === '/campaign.info'){
        const campInfo = entry.data.toString().split(Config.stringSeparator);
        let s = `${campId + 1}`;
        while (s.length <= 1)
          s = `0${s}`;
        camp.name = `${s}. ${campInfo[1]}`;
        camp.desc = campInfo[2];
      }
      else if (entry.name.substr(entry.name.indexOf('.')) === '.eelvl'){
        const tierId = parseInt(entry.name.substr(entry.name.indexOf('/') + 1), 10);
        camp.listing[tierId] = new EelvlWorld(
          CampaignFolder.getId(campId, tierId),
          entry.data,
          `${tierId + 1 < 10 ? '0' : ''}${tierId + 1}. `
        );
      }
    }
  }
}

function SQLitePrefixToWhere(column, prefix){
  if (prefix === false){
    const where = [];
    for (let i = 0; i < 10; i++)
      where.push(`${column} LIKE '${i}%'`);
    for (let i = 0; i < 26; i++)
      where.push(`${column} LIKE '${String.fromCharCode(65 + i)}%'`);
    return `(NOT (${where.join(' OR ')}))`;
  }
  else if (prefix.length === 1)
    return `(${column} LIKE '${prefix[0]}%')`;
  const where = [];
  for (let i = prefix[0].charCodeAt(0); i <= prefix[1].charCodeAt(0); i++)
    where.push(`${column} LIKE '${String.fromCharCode(i)}%'`);
  return `(${where.join(' OR ')})`;
}

function decompressSqliteLevelData(data){
  const decoder = new LZMA.Decoder();
  const header = decoder.decodeHeader(new LZMA.iStream(
    [93, 0, 0, 16, 0, 255, 255, 255, 255]));
  const output = new LZMA.oStream();
  decoder.setProperties(header);
  if (decoder.decodeBody(new LZMA.iStream(data), output, header.uncompressedSize))
    return new FlashByteArray(output.toUint8Array());
  return false;
}

class SqliteGenericSelectFolder extends FSFolder {
  isSorted = true;
  select;
  innerJoin;
  where;
  orderBy;
  params;
  sqlExec;

  constructor(name, sqlExec, options){
    super(name, options.desc || '');
    this.select = [
      'world.id',
      'world.name',
      'world.description',
      'world.owner',
      'player.name',
      'world.width',
      'world.height',
      'world.gravity',
      'world.background_color',
      'world.data'
    ];
    if (options.select)
      this.select = this.select.concat(options.select);
    this.innerJoin = options.innerJoin || '';
    this.where = options.where || '';
    this.orderBy = options.orderBy || '';
    this.params = options.params || {};
    this.sqlExec = sqlExec;
  }

  async list(page){
    const sql = `
      SELECT ${this.select.join(',')}
      FROM world
      INNER JOIN player ON world.owner = player.rowid
      ${this.innerJoin}
      ${this.where ? `WHERE ${this.where}` : ''}
      ${this.orderBy ? `ORDER BY ${this.orderBy}` : ''}
      LIMIT ${(page || 0) * FSFolder.pageSize},${FSFolder.pageSize + 1};
    `;
    const {results, error} = await this.sqlExec(sql, this.params);
    if (error)
      console.error(error, '\n', sql);
    if (!results || results.length <= 0 || results[0].values.length <= 0)
      return {more: false, listing: []};
    const values = results[0].values;
    const listing = [];
    for (let i = 0; i < Math.min(FSFolder.pageSize, values.length); i++){
      const [id, name, desc, ownerId, owner, width, height, gravity, background, data] = values[i];
      const decomp = decompressSqliteLevelData(data);
      if (decomp){
        listing.push(new LayerDataWorld(
          id, name, desc, ownerId, owner, width, height, gravity,
          bgColorFromInt(background || 0), decomp, {}
        ));
      }
    }
    return {more: values.length > FSFolder.pageSize, listing};
  }
}

class SqliteByLikesFolder extends SqliteGenericSelectFolder {
  constructor(sqlExec){
    super('By Likes', sqlExec, {
      orderBy: `
        (SELECT COUNT(*) FROM player_like WHERE player_like.world = world.rowid) DESC,
        LOWER(world.name),
        world.id
      `
    });
  }
}

class SqliteByFavoritesFolder extends SqliteGenericSelectFolder {
  constructor(sqlExec){
    super('By Favorites', sqlExec, {
      orderBy: `
        (SELECT COUNT(*) FROM player_favorite WHERE player_favorite.world = world.rowid) DESC,
        LOWER(world.name),
        world.id
      `
    });
  }
}

class SqliteByWorldFolder extends SqliteGenericSelectFolder {
  constructor(prefix, sqlExec){
    super(prefix === false ? 'Misc' : prefix.join('-'), sqlExec, {
      where: SQLitePrefixToWhere('world.name', prefix),
      orderBy: 'LOWER(world.name), world.id'
    });
  }
}

class SqliteByRandomFolder extends SqliteGenericSelectFolder {
  constructor(sqlExec){
    super('By Random', sqlExec, {
      select: [`SIN(world.rowid * ${Math.random() * 1000}) AS r`],
      orderBy: 'r'
    });
  }
}

class SqliteByOneCampaignFolder extends SqliteGenericSelectFolder {
  constructor(id, name, desc, sqlExec){
    super(name, sqlExec, {
      desc,
      innerJoin: `
        INNER JOIN campaign_world ON world.rowid = campaign_world.world
        INNER JOIN campaign ON campaign.rowid = campaign_world.campaign
      `,
      where: 'campaign.rowid = $c',
      orderBy: 'campaign_world.stage',
      params: {'$c': id}
    });
  }
}

class SqliteByCampaignFolder extends FSFolder {
  isSorted = true;
  sqlExec;

  constructor(sqlExec){
    super('By Campaign');
    this.sqlExec = sqlExec;
  }

  async list(){
    const sql = `
      SELECT rowid, name, description
      FROM campaign
      ORDER BY LOWER(name)
    `;
    const {results, error} = await this.sqlExec(sql);
    if (error)
      console.error(error, '\n', sql);
    if (!results || results.length <= 0 || results[0].values.length <= 0)
      return {more: false, listing: []};
    const values = results[0].values;
    const listing = [];
    for (let i = 0; i < values.length; i++){
      const [id, name, desc] = values[i];
      listing.push(new SqliteByOneCampaignFolder(id, name, desc, this.sqlExec));
    }
    return {more: false, listing};
  }
}

class SqliteByOneCrewFolder extends SqliteGenericSelectFolder {
  constructor(id, crew, sqlExec){
    super(crew, sqlExec, {
      where: 'world.crew = $c',
      orderBy: 'LOWER(world.name), world.id',
      params: {'$c': id}
    });
  }
}

class SqliteByCrewFolder extends FSFolder {
  isSorted = true;
  prefix;
  sqlExec;

  constructor(prefix, sqlExec){
    super(prefix === false ? 'Misc' : prefix.join('-'));
    this.prefix = prefix;
    this.sqlExec = sqlExec;
  }

  async list(){
    const sql = `
      SELECT
        rowid,
        name,
        (SELECT COUNT(*) FROM world WHERE world.crew = crew.rowid) AS count
      FROM crew
      WHERE ${SQLitePrefixToWhere('name', this.prefix)} AND count > 0
      ORDER BY LOWER(name)
    `;
    const {results, error} = await this.sqlExec(sql);
    if (error)
      console.error(error, '\n', sql);
    if (!results || results.length <= 0 || results[0].values.length <= 0)
      return {more: false, listing: []};
    const values = results[0].values;
    const listing = [];
    for (let i = 0; i < values.length; i++){
      const [id, crew, count] = values[i];
      listing.push(new SqliteByOneCrewFolder(id, `${crew} (${count})`, this.sqlExec));
    }
    return {more: false, listing};
  }
}

class SqliteByOneOwnerFolder extends SqliteGenericSelectFolder {
  constructor(id, name, sqlExec){
    super(name, sqlExec, {
      where: 'world.owner = $c',
      orderBy: 'LOWER(world.name), world.id',
      params: {'$c': id}
    });
  }
}

class SqliteSearchFolder extends SqliteGenericSelectFolder {
  constructor(term, sqlExec){
    super(term, sqlExec, {
      where: ([
        'world.name LIKE $c',
        'world.id LIKE $c',
        'world.description LIKE $c',
        'player.name LIKE $c'
      ]).join(' OR '),
      orderBy: `
        (SELECT COUNT(*) FROM player_like WHERE player_like.world = world.rowid) DESC,
        LOWER(world.name),
        world.id
      `,
      params: {'$c': `%${term.trim().replace(/ /g, '%')}%`}
    });
  }
}

class SqliteByOwnerFolder extends FSFolder {
  isSorted = true;
  prefix;
  sqlExec;

  constructor(prefix, sqlExec){
    super(prefix === false ? 'Misc' : prefix.join('-'));
    this.prefix = prefix;
    this.sqlExec = sqlExec;
  }

  async list(){
    const sql = `
      SELECT
        rowid,
        name,
        (SELECT COUNT(*) FROM world WHERE world.owner = player.rowid) AS count
      FROM player
      WHERE ${SQLitePrefixToWhere('name', this.prefix)} AND count > 0
      ORDER BY LOWER(name)
    `;
    const {results, error} = await this.sqlExec(sql);
    if (error)
      console.error(error, '\n', sql);
    if (!results || results.length <= 0 || results[0].values.length <= 0)
      return {more: false, listing: []};
    const values = results[0].values;
    const listing = [];
    for (let i = 0; i < values.length; i++){
      const [id, name, count] = values[i];
      listing.push(new SqliteByOneOwnerFolder(id, `${name} (${count})`, this.sqlExec));
    }
    return {more: false, listing};
  }
}

class LetterFolder extends FSFolder {
  isSorted = true;
  createFunc;

  constructor(name, createFunc){
    super(name);
    this.createFunc = createFunc;
  }

  async list(){
    const listing = [this.createFunc(['0', '9'])];
    for (let i = 0; i < 26; i++)
      listing.push(this.createFunc([String.fromCharCode(65 + i)]));
    listing.push(this.createFunc(false));
    return {more: false, listing};
  }
}

class SqliteFolder extends FSFolder {
  sqlWorker = new Worker('worker.sql-wasm.js');
  pendingExec = [];
  waitingOnExec = false;
  ready;

  constructor(name, buffer){
    super(name);
    let readyResolve, readyReject;
    this.ready = new Promise((resolve, reject) => {
      readyResolve = resolve;
      readyReject = reject;
    });
    this.sqlWorker.onerror = e => {
      console.error(e);
    };
    this.sqlWorker.onmessage = m => {
      if (m && m.data && m.data.ready)
        readyResolve();
      else
        readyReject();
    };
    try {
      this.sqlWorker.postMessage({ action: 'open', buffer }, [buffer]);
    } catch (e) {
      console.error(e);
      this.sqlWorker.postMessage({ action: 'open', buffer });
    }
  }

  sqlExec = async (sql, params) => {
    return new Promise((resolve, reject) => {
      this.pendingExec.push({sql, params, resolve, reject});
      this.nextPendingExec();
    });
  };

  nextPendingExec(){
    if (this.waitingOnExec || this.pendingExec.length <= 0)
      return;
    this.waitingOnExec = true;
    const {sql, params, resolve, reject} = this.pendingExec.shift();
    this.sqlWorker.onerror = e => {
      console.error(e);
      reject(e);
      this.waitingOnExec = false;
      this.nextPendingExec();
    };
    this.sqlWorker.onmessage = m => {
      resolve(m.data);
      this.waitingOnExec = false;
      this.nextPendingExec();
    };
    this.sqlWorker.postMessage({action: 'exec', sql, params});
  }

  async list(){
    await this.ready;
    return {
      more: false,
      listing: [
        new SqliteByLikesFolder(this.sqlExec),
        new SqliteByFavoritesFolder(this.sqlExec),
        new SqliteByCampaignFolder(this.sqlExec),
        new LetterFolder('By World', prefix => new SqliteByWorldFolder(prefix, this.sqlExec)),
        new SqliteByRandomFolder(this.sqlExec),
        new LetterFolder('By Crew', prefix => new SqliteByCrewFolder(prefix, this.sqlExec)),
        new LetterFolder('By Owner', prefix => new SqliteByOwnerFolder(prefix, this.sqlExec))
      ]
    };
  }

  async findWorld(findId){
    const sql = `
      SELECT
        world.id,
        world.name,
        world.description,
        world.owner,
        player.name,
        world.width,
        world.height,
        world.gravity,
        world.background_color,
        world.data
      FROM world
      INNER JOIN player ON world.owner = player.rowid
      WHERE world.id = $id
      LIMIT 0,1
    `;
    const {results, error} = await this.sqlExec(sql, {'$id': findId});
    if (error)
      console.error(error, '\n', sql);
    if (!results || results.length <= 0 || results[0].values.length <= 0)
      return false;
    const values = results[0].values;
    const [id, name, desc, ownerId, owner, width, height, gravity, background, data] = values[0];
    const decomp = decompressSqliteLevelData(data);
    if (!decomp)
      return false;
    return new LayerDataWorld(
      id, name, desc, ownerId, owner, width, height, gravity,
      bgColorFromInt(background || 0), decomp, {}
    );
  }

  findByOwner(id){
    return new SqliteByOneOwnerFolder(id, '', this.sqlExec)
  }

  search(term){
    return new SqliteSearchFolder(term, this.sqlExec);
  }
}

class EelvlsFolder extends GenericFolder {
  constructor(name, zip){
    super(name);
    for (const file of zip){
      if (!file.name.toLowerCase().endsWith('.eelvl'))
        continue;
      const hyphen = file.name.indexOf(' - ');
      this.add(new EelvlWorld(hyphen < 0 ? '?' : file.name.substr(0, hyphen), file.data, ''));
    }
  }
}

class ZipFolder extends GenericFolder {
  constructor(name, zip){
    super(name);
    for (const file of zip){
      if (!file.name.toLowerCase().endsWith('.eelvl'))
        continue;
      const path = file.name.split('/').filter(p => !!p);
      if (path.length <= 0)
        continue;
      let here = this;
      for (let i = 0; i < path.length - 1; i++){
        const sub = path[i];
        const next = here.listing.find(it => it instanceof GenericFolder && it.name === sub);
        if (next)
          here = next;
        else{
          const newNext = new GenericFolder(sub);
          here.add(newNext);
          here = newNext;
        }
      }
      here.addEelvl(path[path.length - 1], file.data);
    }

    // unwrap first folder if that's all there is
    if (this.listing.length === 1 && this.listing[0] instanceof GenericFolder){
      this.name = this.listing[0].name;
      this.listing = this.listing[0].listing;
    }
  }
}
