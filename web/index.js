let state;

//
// Flash polyfills
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
// Config
//

class Config {
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
  static camera_lag = 1 / 16;
  static bw = 640;
  static bh = 480;
}

//
// Input
//

class Input {
  keyDown;
  keyJustPressed;

  constructor(){
    this.keyDown = {};
    this.keyJustPressed = {};
  }

  down(code){
    this.keyDown[code] = true;
    this.keyJustPressed[code] = true;
  }

  up(code){
    delete this.keyDown[code];
    delete this.keyJustPressed[code];
  }

  endTick(){
    this.keyJustPressed = {};
  }

  blur(){
    this.keyDown = {};
    this.keyJustPressed = {};
  }
}

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
  static LABEL                                   = 1000;
  static PIANO                                   = 77;
  static DRUMS                                   = 83;
  static GUITAR                                  = 1520;
  static COIN_GOLD                               = 100;
  static COIN_BLUE                               = 101;
  static KEY_RED                                 = 6;
  static KEY_GREEN                               = 7;
  static KEY_BLUE                                = 8;
  static KEY_CYAN                                = 408;
  static KEY_MAGENTA                             = 409;
  static KEY_YELLOW                              = 410;
  static SWITCH_PURPLE                           = 113;
  static RESET_PURPLE                            = 1619;
  static DOOR_PURPLE                             = 184;
  static GATE_PURPLE                             = 185;
  static DOOR_GOLD                               = 200;
  static GATE_GOLD                               = 201;
  static SPEED_LEFT                              = 114;
  static SPEED_RIGHT                             = 115;
  static SPEED_UP                                = 116;
  static SPEED_DOWN                              = 117;
  static CHAIN                                   = 118;
  static NINJA_LADDER                            = 120;
  static RESET_POINT                             = 466;
  static TIMEDOOR                                = 156;
  static TIMEGATE                                = 157;
  static COIN                                    = 100;
  static BLUECOIN                                = 101;
  static COINDOOR                                = 43;
  static COINGATE                                = 165;
  static BLUECOINDOOR                            = 213;
  static BLUECOINGATE                            = 214;
  static COLLECTEDCOIN                           = 110;
  static COLLECTEDBLUECOIN                       = 111;
  static CROWN                                   = 5;
  static CROWNDOOR                               = 1094;
  static CROWNGATE                               = 1095;
  static BRICK_COMPLETE                          = 121;
  static SILVERCROWNDOOR                         = 1152;
  static SILVERCROWNGATE                         = 1153;
  static VINE_V                                  = 98;
  static VINE_H                                  = 99;
  static ROPE                                    = 424;
  static DIAMOND                                 = 241;
  static CAKE                                    = 337;
  static HOLOGRAM                                = 397;
  static CHECKPOINT                              = 360;
  static SPAWNPOINT                              = 255;
  static SPIKE                                   = 361;
  static SPIKE_CENTER                            = 1580;
  static FIRE                                    = 368;
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
  static PORTAL                                  = 242;
  static WORLD_PORTAL                            = 374;
  static WORLD_PORTAL_SPAWN                      = 1582;
  static ZOMBIE_GATE                             = 206;
  static ZOMBIE_DOOR                             = 207;
  static GLOWYLINE_BLUE_SLOPE                    = 375;
  static GLOWY_LINE_BLUE_STRAIGHT                = 376;
  static GLOWY_LINE_YELLOW_SLOPE                 = 377;
  static GLOWY_LINE_YELLOW_STRAIGHT              = 378;
  static GLOWY_LINE_GREEN_SLOPE                  = 379;
  static GLOWY_LINE_GREEN_STRAIGHT               = 380;
  static GLOWY_LINE_RED_SLOPE                    = 438;
  static GLOWY_LINE_RED_STRAIGHT                 = 439;
  static PORTAL_INVISIBLE                        = 381;
  static TEXT_SIGN                               = 385;
  static ONEWAY_CYAN                             = 1001;
  static ONEWAY_ORANGE                           = 1002;
  static ONEWAY_YELLOW                           = 1003;
  static ONEWAY_PINK                             = 1004;
  static ONEWAY_GRAY                             = 1052;
  static ONEWAY_BLUE                             = 1053;
  static ONEWAY_RED                              = 1054;
  static ONEWAY_GREEN                            = 1055;
  static ONEWAY_BLACK                            = 1056;
  static ONEWAY_WHITE                            = 1092;
  static DEATH_DOOR                              = 1011;
  static DEATH_GATE                              = 1012;
  static WATER                                   = 119;
  static WAVE                                    = 300;
  static WATER_BG                                = 574;
  static WATER_BG_OCTOPUS                        = 575;
  static WATER_BG_FISH                           = 576;
  static WATER_BG_SEAHORSE                       = 577;
  static WATER_BG_SEAWEED                        = 578;
  static MUD                                     = 369;
  static MUD_BUBBLE                              = 370;
  static LAVA                                    = 416;
  static LAVA_SURFACE                            = 415;
  static TOXIC_WASTE                             = 1585;
  static TOXIC_WASTE_SURFACE                     = 1586;
  static TOXIC_WASTE_BG                          = 765;
  static EFFECT_JUMP                             = 417;
  static EFFECT_FLY                              = 418;
  static EFFECT_RUN                              = 419;
  static EFFECT_PROTECTION                       = 420;
  static EFFECT_CURSE                            = 421;
  static EFFECT_ZOMBIE                           = 422;
  static EFFECT_TEAM                             = 423;
  static EFFECT_LOW_GRAVITY                      = 453;
  static EFFECT_MULTIJUMP                        = 461;
  static EFFECT_GRAVITY                          = 1517;
  static EFFECT_POISON                           = 1584;
  static EFFECT_RESET                            = 1618;
  static TEAM_DOOR                               = 1027;
  static TEAM_GATE                               = 1028;
  static MEDIEVAL_SHIELD                         = 273;
  static MEDIEVAL_AXE                            = 275;
  static MEDIEVAL_BANNER                         = 327;
  static MEDIEVAL_COATOFARMS                     = 328;
  static MEDIEVAL_SWORD                          = 329;
  static MEDIEVAL_TIMBER                         = 440;
  static TOOTH_BIG                               = 338;
  static TOOTH_SMALL                             = 339;
  static TOOTH_TRIPLE                            = 340;
  static DOJO_LIGHT_LEFT                         = 276;
  static DOJO_LIGHT_RIGHT                        = 277;
  static DOJO_DARK_LEFT                          = 279;
  static DOJO_DARK_RIGHT                         = 280;
  static DOMESTIC_LIGHT_BULB                     = 447;
  static DOMESTIC_TAP                            = 448;
  static DOMESTIC_PAINTING                       = 449;
  static DOMESTIC_VASE                           = 450;
  static DOMESTIC_TV                             = 451;
  static DOMESTIC_WINDOW                         = 452;
  static HALFBLOCK_DOMESTIC_YELLOW               = 1041;
  static HALFBLOCK_DOMESTIC_BROWN                = 1042;
  static HALFBLOCK_DOMESTIC_WHITE                = 1043;
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
  static HALLOWEEN_2015_ONEWAY                   = 1050;
  static HALLOWEEN_2015_WINDOW_RECT              = 456;
  static HALLOWEEN_2015_WINDOW_CIRCLE            = 457;
  static HALLOWEEN_2015_LAMP                     = 458;
  static ONEWAY_SCIFI_YELLOW                     = 1051;
  static ONEWAY_SCIFI_MAGENTA                    = 1164;
  static ONEWAY_SCIFI_CYAN                       = 1165;
  static ICE                                     = 1064;
  static SLOW_DOT                                = 459;
  static SLOW_DOT_INVISIBLE                      = 460;
  static NEW_YEAR_2015_BALLOON                   = 464;
  static NEW_YEAR_2015_STREAMER                  = 465;
  static FAIRYTALE_FLOWERS                       = 471;
  static FAIRYTALE_LADDER                        = 472;
  static HALFBLOCK_FAIRYTALE_ORANGE              = 1075;
  static HALFBLOCK_FAIRYTALE_GREEN               = 1076;
  static HALFBLOCK_FAIRYTALE_BLUE                = 1077;
  static HALFBLOCK_FAIRYTALE_PINK                = 1078;
  static SWITCH_ORANGE                           = 467;
  static RESET_ORANGE                            = 1620;
  static DOOR_ORANGE                             = 1079;
  static GATE_ORANGE                             = 1080;
  static SPRING_DAISY                            = 475;
  static SPRING_TULIP                            = 476;
  static SPRING_DAFFODIL                         = 477;
  static SUMMER_FLAG                             = 481;
  static SUMMER_AWNING                           = 482;
  static SUMMER_ICECREAM                         = 483;
  static CAVE_TORCH                              = 498;
  static CAVE_CRYSTAL                            = 497;
  static RESTAURANT_CUP                          = 492;
  static RESTAURANT_PLATE                        = 493;
  static RESTAURANT_BOWL                         = 494;
  static HALLOWEEN_2016_ROTATABLE                = 499;
  static HALLOWEEN_2016_PUMPKIN                  = 1500;
  static HALLOWEEN_2016_EYES                     = 1502;
  static HALFBLOCK_CHRISTMAS_2016_PRESENT_RED    = 1101;
  static HALFBLOCK_CHRISTMAS_2016_PRESENT_GREEN  = 1102;
  static HALFBLOCK_CHRISTMAS_2016_PRESENT_WHITE  = 1103;
  static HALFBLOCK_CHRISTMAS_2016_PRESENT_BLUE   = 1104;
  static HALFBLOCK_CHRISTMAS_2016_PRESENT_YELLOW = 1105;
  static CHRISTMAS_2016_LIGHTS_UP                = 1506;
  static CHRISTMAS_2016_LIGHTS_DOWN              = 1507;
  static CHRISTMAS_2016_CANDLE                   = 1510;
  static GOD_BLOCK                               = 1516;
  static MAP_BLOCK                               = 1583;
  static METAL_LADDER                            = 1534;
  static INDUSTRIAL_PIPE_THIN                    = 1535;
  static INDUSTRIAL_PIPE_THICK                   = 1135;
  static INDUSTRIAL_TABLE                        = 1134;
  static DOMESTIC_PIPE_STRAIGHT                  = 1536;
  static DOMESTIC_PIPE_T                         = 1537;
  static DOMESTIC_FRAME_BORDER                   = 1538;
  static HALFBLOCK_WINTER2018_SNOW               = 1140;
  static HALFBLOCK_WINTER2018_GLACIER            = 1141;
  static GARDEN_LATTICE_VINES                    = 1146;
  static GARDEN_STALK                            = 1563;
  static GARDEN_ONEWAY_FLOWER                    = 1147;
  static GARDEN_ONEWAY_LEAF_L                    = 1148;
  static GARDEN_ONEWAY_LEAF_R                    = 1149;
  static FIREWORKS                               = 1581;
  static TOXIC_WASTE_BARREL                      = 1587;
  static SEWER_PIPE                              = 1588;
  static RUSTED_LADDER                           = 1589;
  static GUARD_RAIL                              = 1590;
  static METAL_PLATFORM                          = 1155;
  static GOLDEN_EASTER_EGG                       = 1591;
  static GREEN_SPACE                             = 1603;
  static GOLD_SACK                               = 1604;
  static GREY_DUNGEON_BRICK                      = 1156;
  static GREEN_DUNGEON_BRICK                     = 1157;
  static BLUE_DUNGEON_BRICK                      = 1158;
  static PURPLE_DUNGEON_BRICK                    = 1159;
  static GREY_DUNGEON_BG                         = 769;
  static GREEN_DUNGEON_BG                        = 770;
  static BLUE_DUNGEON_BG                         = 771;
  static PURPLE_DUNGEON_BG                       = 772;
  static DUNGEON_PILLAR_BOTTOM                   = 1592;
  static DUNGEON_PILLAR_MIDDLE                   = 1593;
  static DUNGEON_PILLAR_TOP                      = 1160;
  static DUNGEON_ARCH_LEFT                       = 1594;
  static DUNGEON_ARCH_RIGHT                      = 1595;
  static DUNGEON_TORCH                           = 1597;
  static DUNGEON_BARS                            = 1598;
  static DUNGEON_RING                            = 1599;
  static DUNGEON_HOOK                            = 1600;
  static DUNGEON_LOCK                            = 1601;
  static DUNGEON_CHAIN                           = 1602;
  static SHADOW_A                                = 1596;
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
  static NPC_BRUCE                               = 1570;
  static NPC_STARFISH                            = 1569;
  static NPC_DT                                  = 1571;
  static NPC_SKELETON                            = 1572;
  static NPC_ZOMBIE                              = 1573;
  static NPC_GHOST                               = 1574;
  static NPC_ASTRONAUT                           = 1575;
  static NPC_SANTA                               = 1576;
  static NPC_SNOWMAN                             = 1577;
  static NPC_WALRUS                              = 1578;
  static NPC_CRAB                                = 1579;
  static SMILEY_PLATINUM_SPENDER                 = 175;

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
        id != 83 && id != 77
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

  static isBackgroundRotateable(id){
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
      case ItemId.GLOWYLINE_BLUE_SLOPE:
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
      case ItemId.METAL_PLATFORM:
      case ItemId.DUNGEON_PILLAR_BOTTOM:
      case ItemId.DUNGEON_PILLAR_MIDDLE:
      case ItemId.DUNGEON_PILLAR_TOP:
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
      case 61:
      case 62:
      case 63:
      case 64:
      case 89:
      case 90:
      case 91:
      case 96:
      case 97:
      case 122:
      case 123:
      case 124:
      case 125:
      case 126:
      case 127:
      case 146:
      case 154:
      case 158:
      case 194:
      case 211:
      case 216:
      case 1069:
      case 1087:
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
      case ItemId.HALLOWEEN_2015_ONEWAY:
      case ItemId.ONEWAY_SCIFI_YELLOW:
      case ItemId.ONEWAY_SCIFI_MAGENTA:
      case ItemId.ONEWAY_SCIFI_CYAN:
      case ItemId.GARDEN_ONEWAY_FLOWER:
      case ItemId.GARDEN_ONEWAY_LEAF_L:
      case ItemId.GARDEN_ONEWAY_LEAF_R:
      case ItemId.METAL_PLATFORM:
      case ItemId.DUNGEON_PILLAR_TOP:
        return true;
    }
    return false;
  }

  static isBoost(id){
    switch (id) {
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
      case ItemId.METAL_PLATFORM:
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

class ItemBrick {
  id;
  payVauldId;
  layer;
  bmd;
  offset;
  tab;
  requiresOwnership;
  requiresAdmin;
  requiresPurchase = false;
  hasShadow = false;
  description = '';
  tags;
  selectorBG;
  miniMapColor;

  constructor(id, layer, bmd, offset, payVaultId, description, tab, requiresOwnership, requiresAdmin, requiresPurchase, shadow, miniMapColor, tags, selectorBG){
    this.id = id;
    this.layer = layer;
    this.miniMapColor = miniMapColor < 0 ? 0 : miniMapColor; // TODO: generateThumbColor
    this.bmd = bmd; // TODO: shadow
    this.offset = offset;
    this.payVauldId = payVaultId;
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
    target.copyPixels(
      this.bmd,
      {x: this.offset * 16, y: 0, w: 16, h: 16},
      {x: ox, y: oy, w: 16, h: 16}
    );
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
    this.bricks.push(new ItemBrick(
      id,
      layer,
      base,
      artOffset,
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
    ));
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
    return this.createAndAddBrick(
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
    );
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
    return this.createAndAddBrick(
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
    );
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
    return this.createAndAddBrick(
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
    );
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
    return this.createAndAddBrick(
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
    );
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
    return this.createAndAddBrick(
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
    );
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
      ["Smiley"              , ""                        ],
      ["Grin"                , ""                        ],
      ["Tongue"              , ""                        ],
      ["Happy"               , ""                        ],
      ["Annoyed"             , ""                        ],
      ["Sad"                 , ""                        ],
      ["Crying"              , "pro"                     ],
      ["Wink"                , "pro"                     ],
      ["Frustrated"          , "pro"                     ],
      ["Shades"              , "pro"                     ],
      ["Devil"               , "pro"                     ],
      ["Inquisitive"         , "pro"                     ],
      ["Ninja"               , "smileyninja"              , 0x00000000],
      ["Santa"               , "smileysanta"             ],
      ["Worker"              , ""                        ],
      ["Big Spender"         , "smileybigspender"        ],
      ["Superman"            , "smileysuper"             ],
      ["Surprise"            , "smileysupprice"          ],
      ["Indifferent"         , ""                        ],
      ["Girl"                , ""                        ],
      ["New Year 2010"       , "mixednewyear2010"        ],
      ["Coy"                 , ""                        ],
      ["Wizard"              , "smileywizard"            ],
      ["Fan Boy"             , "smileyfanboy"            ],
      ["Terminator"          , ""                        ],
      ["Extra Grin"          , "smileyxd"                ],
      ["Bully"               , "smileybully"             ],
      ["Commando"            , "smileycommando"          ],
      ["Kissing"             , "smileyvalentines2011"    ],
      ["Bird"                , "smileybird"              ],
      ["Bunny"               , "smileybunni"             ],
      ["Diamond Touch"       , "unobtainable"            ],
      ["Fire Wizard"         , "smileywizard2"           ],
      ["Extra Tongue"        , "smileyxdp"               ],
      ["Postman"             , "smileypostman"           ],
      ["Templar"             , "smileytemplar"           ],
      ["Angel"               , ""                        ],
      ["Nurse"               , "smileynurse"             ],
      ["Vampire"             , "smileyhw2011vampire"     ],
      ["Ghost"               , "smileyhw2011ghost"       ],
      ["Frankenstein"        , "smileyhw2011frankenstein"],
      ["Witch"               , "smileywitch"             ],
      ["Indian"              , "smileytg2011indian"      ],
      ["Pilgrim"             , "smileytg2011pilgrim"     ],
      ["Pumpkin"             , "smileypumpkin1"          ],
      ["Lit Pumpkin"         , "smileypumpkin2"          ],
      ["Snowman"             , "smileyxmassnowman"       ],
      ["Reindeer"            , "smileyxmasreindeer"      ],
      ["Grinch"              , "smileyxmasgrinch"        ],
      ["Maestro"             , "bricknode"               ],
      ["DJ"                  , "brickdrums"              ],
      ["Sigh"                , ""                        ],
      ["Robber"              , ""                         , 0x00000000],
      ["Police"              , ""                         , 0xff0c64f6],
      ["Purple Ghost"        , "smileypurpleghost"       ],
      ["Pirate"              , ""                        ],
      ["Viking"              , ""                        ],
      ["Karate"              , ""                        ],
      ["Cowboy"              , ""                        ],
      ["Diver"               , "smileydiver"             ],
      ["Tanned"              , "smileytanned"            ],
      ["Propeller Hat"       , ""                        ],
      ["Hard Hat"            , "smileyhardhat"           ],
      ["Gas Mask"            , "smileygasmask"           ],
      ["Robot"               , ""                        ],
      ["Peasant"             , ""                        ],
      ["Guard"               , ""                        ],
      ["Blacksmith"          , ""                        ],
      ["LOL"                 , ""                        ],
      ["Dog"                 , ""                        ],
      ["Alien"               , "smileyalien"             ],
      ["Astronaut"           , "smileyastronaut"         ],
      ["PartyOrange"         , "unobtainable"            ],
      ["PartyGreen"          , "unobtainable"            ],
      ["PartyBlue"           , "unobtainable"            ],
      ["PartyRed"            , "unobtainable"            ],
      ["Daredevil"           , ""                        ],
      ["Monster"             , "smileymonster"           ],
      ["Skeleton"            , "smileyskeleton"          ],
      ["Mad Scientist"       , "smileymadscientist"      ],
      ["Headhunter"          , "smileyheadhunter"        ],
      ["Safari"              , "smileysafari"            ],
      ["Archaeologist"       , "smileyarchaeologist"     ],
      ["New Year 2013"       , "smileynewyear2012"       ],
      ["Winter Hat"          , "smileywinter"            ],
      ["Fire demon"          , "smileyfiredeamon"        ],
      ["Bishop"              , "smileybishop"            ],
      ["Zombie"              , "unobtainable"            ],
      ["Bruce"               , "smileyzombieslayer"      ],
      ["Unit"                , "smileyunit"              ],
      ["Spartan"             , "smileyspartan"           ],
      ["Lady"                , "smileyhelen"             ],
      ["Cow"                 , "smileycow"               ],
      ["Scarecrow"           , "smileyscarecrow"         ],
      ["Dark Wizard"         , "smileydarkwizard"        ],
      ["Kung Fu Master"      , "smileykungfumaster"      ],
      ["Fox"                 , "smileyfox"               ],
      ["Night Vision"        , "smileynightvision"       ],
      ["Summer Girl"         , "smileysummergirl"        ],
      ["Fan Boy II"          , "smileyfanboy2"           ],
      ["Sci-Fi Hologram"     , "unobtainable"            ],
      ["Gingerbread"         , "smileygingerbread"       ],
      ["Caroler"             , "smileycaroler"           ],
      ["Elf"                 , "smileyelf"               ],
      ["Nutcracker"          , "smileynutcracker"        ],
      ["Blushing"            , "brickvalentines2015"     ],
      ["Artist"              , "smileyartist"            ],
      ["Princess"            , ""                        ],
      ["Chef"                , ""                        ],
      ["Clown"               , ""                        ],
      ["Red Ninja"           , "smileyninjared"          ],
      ["3D Glasses"          , "smiley3dglasses"         ],
      ["Sunburned"           , "smileysunburned"         ],
      ["Tourist"             , "smileytourist"           ],
      ["Graduate"            , "smileygraduate"          ],
      ["Sombrero"            , "smileysombrero"          ],
      ["Cat"                 , ""                        ],
      ["Scared"              , ""                        ],
      ["Ghoul"               , "smileyghoul"             ],
      ["Mummy"               , "smileymummy"             ],
      ["Bat"                 , "smileybat"               ],
      ["Eyeball"             , "smileyeyeball"           ],
      ["Light Wizard"        , "smileylightwizard"       ],
      ["Hooded"              , "smileyhooded"            ],
      ["Earmuffs"            , "smileyearmuffs"          ],
      ["Penguin"             , "smileypenguin"           ],
      ["Gold Smiley"         , "goldmember"              ],
      ["Gold Ninja"          , "goldmember"              ],
      ["Gold Robot"          , "goldmember"              ],
      ["Gold Top Hat"        , "goldmember"              ],
      ["Sick"                , ""                        ],
      ["Unsure"              , ""                        ],
      ["Goofy"               , "smileygoofy"             ],
      ["Raindrop"            , "smileyraindrop"          ],
      ["Bee"                 , "smileybee"               ],
      ["Butterfly"           , "smileybutterfly"         ],
      ["Sea Captain"         , "smileyseacaptain"        ],
      ["Soda Clerk"          , "smileysodaclerk"         ],
      ["Lifeguard"           , "smileylifeguard"         ],
      ["Aviator"             , "smileyaviator"           ],
      ["Sleepy"              , "smileysleepy"            ],
      ["Seagull"             , "smileyseagull"           ],
      ["Werewolf"            , "smileywerewolf"          ],
      ["Swamp Creature"      , "smileyswampcreature"     ],
      ["Fairy"               , "smileyfairy"             ],
      ["Firefighter"         , "smileyfirefighter"       ],
      ["Spy"                 , "smileyspy"                , 0x00000000],
      ["Devil Skull"         , "smileydevilskull"        ],
      ["Clockwork Robot"     , "smileyclockwork"         ],
      ["Teddy Bear"          , "smileyteddybear"         ],
      ["Christmas Soldier"   , "smileychristmassoldier"  ],
      ["Scrooge"             , "smileyscrooge"           ],
      ["Boy"                 , ""                        ],
      ["Pigtails"            , "smileypigtails"          ],
      ["Doctor"              , "smileydoctor"            ],
      ["Turban"              , "smileyturban"            ],
      ["Hazmat Suit"         , "smileyhazmatsuit"        ],
      ["Leprechaun"          , "smileyleprechaun"        ],
      ["Angry"               , "smileyangry"             ],
      ["Smirk"               , "smileysmirk"             ],
      ["Sweat"               , "smileysweat"             ],
      ["Country Singer"      , "brickguitar"             ],
      ["Thor"                , "smileythor"              ],
      ["Cowgirl"             , ""                        ],
      ["Raccoon"             , "smileyraccoon"           ],
      ["Lion"                , "smileylion"              ],
      ["Laika"               , "smileylaiika"            ],
      ["Fishbowl"            , "smileyfishbowl"          ],
      ["Slime"               , "smileyslime"             ],
      ["Designer"            , "smileydesigner"          ],
      ["Frozen"              , "smileyfrozen"            ],
      ["Masquerade"          , "smileymasquerade"        ],
      ["Polar Bear"          , "smileypolarbear"         ],
      ["Baseball Cap"        , "smileybaseball"          ],
      ["Golfer"              , "smileygolfer"            ],
      ["Platinum Big Spender", "smileyplatinumspender"   ],
      ["Green Dragon"        , "smileydragongreen"       ],
      ["Red Dragon"          , "smileydragonred"         ],
      ["Executioner"         , "smileyexecutioner"       ],
      ["Gargoyle"            , "smileygargoyle"          ],
      ["Banshee"             , "smileybanshee"           ],
      ["Golem"               , "smileygolem"             ],
      ["Frost Dragon"        , "smileyfrostdragon"       ],
      ["Squirrel"            , "smileysquirrel"          ],
      ["Golden Dragon"       , "smileygoldendragon"      ],
      ["Robot Mk II"         , "smileyrobot2"            ],
      ["Black Dragon"        , "smileydragonblack"       ],
      ["Silver Dragon"       , "smileydragonsilver"      ]
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
      ["White"   , ""            ],
      ["Red"     , "aurared"     ],
      ["Blue"    , "aurablue"    ],
      ["Yellow"  , "aurayellow"  ],
      ["Green"   , "auragreen"   ],
      ["Purple"  , "aurapurple"  ],
      ["Orange"  , "auraorange"  ],
      ["Cyan"    , "auracyan"    ],
      ["Gold"    , "goldmember"  ],
      ["Pink"    , "aurapink"    ],
      ["Indigo"  , "auraindigo"  ],
      ["Lime"    , "auralime"    ],
      ["Black"   , "aurablack"   ],
      ["Teal"    , "aurateal"    ],
      ["Grey"    , "auragrey"    ],
      ["Amaranth", "auraamaranth"]
    ]).forEach((row, id) => {
      const [name, payVaultId] = row;
      ItemManager.auraColors.push(new ItemAuraColor(id, name, payVaultId));
    });

    //
    // Aura Shapes
    //
    let auraImagesIndex = 0;
    ([
      ["Default"  , ItemManager.aurasBMD      , ""                   ,  1, 0.200, true ],
      ["Pinwheel" , ItemManager.aurasBMD      , "aurashapepinwheel"  ,  6, 0.200, true ],
      ["Torus"    , ItemManager.aurasBMD      , "aurashapetorus"     ,  1, 0.200, true ],
      ["Ornate"   , ItemManager.aurasBMD      , "goldmember"         ,  6, 0.200, true ],
      ["Spiral"   , ItemManager.aurasBMD      , "aurashapespiral"    ,  6, 0.150, true ],
      ["Star"     , ItemManager.aurasBMD      , "aurashapestar"      ,  1, 0.200, true ],
      ["Snowflake", ItemManager.aurasBMD      , "aurashapesnowflake" ,  1, 0.200, true ],
      ["Atom"     , ItemManager.aurasBMD      , "aurashapeatom"      ,  8, 0.175, true ],
      ["Sawblade" , ItemManager.aurasBMD      , "aurashapesawblade"  ,  6, 0.200, true ],
      ["Target"   , ItemManager.aurasBMD      , "aurashapetarget"    ,  6, 0.150, true ],
      ["Bubble"   , ItemManager.aurasBubbleBMD, "aurabubble"         ,  8, 0.100, false],
      ["Galaxy"   , ItemManager.aurasGalaxyBMD, "auragalaxy"         , 12, 0.150, false],
      ["Heart"    , ItemManager.aurasBMD      , "aurashapeheart"     , 10, 0.125, true ],
      ["Flower"   , ItemManager.aurasBMD      , "aurashapesunflower" ,  1, 0.200, true ]
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
      new ItemBrickPackage('basic', 'Basic Blocks', ['Primary', 'Simple', 'Standard', 'Default'])
        .addBasic(1088, 260,         -1, ['White', 'Light'])
        .addBasic(   9,   9, 0xff6e6e6e, ['Grey', 'Gray', 'Taupe'])
        .addBasic( 182, 156, 0xff282828, ['Black', 'Dark', 'Coal', 'Road'])
        .addBasic(  12,  12, 0xffa83554, ['Red', 'Magenta', 'Vermillion', 'Ruby'])
        .addBasic(1018, 205,         -1, ['Orange', 'Persimmon', 'Copper'])
        .addBasic(  13,  13, 0xff93a835, ['Yellow', 'Lime', 'Chartreuse', 'Light green', 'Citrine', 'Citrus'])
        .addBasic(  14,  14, 0xff42a836, ['Green', 'Kelly', 'Emerald', 'Grass'])
        .addBasic(  15,  15, 0xff359ea6, ['Blue', 'Cyan', 'Light Blue', 'Aquamarine', 'Sky Blue'])
        .addBasic(  10,  10, 0xff3552a8, ['Blue', 'Dark Blue', 'Cobalt'])
        .addBasic(  11,  11, 0xff9735a7, ['Purple', 'Pink', 'Plum', 'Violet']),
      new ItemBrickPackage('beta', 'Beta Access', ['Exclusive'])
        .addBeta(1089, 261, 0xffe5e5e5, ['White', 'Light'])
        .addBeta(  42,  42, 0xff999999, ['Grey', 'Gray', 'Taupe'])
        .addBeta(1021, 208, 0xff474747, ['Black', 'Dark', 'Onyx'])
        .addBeta(  40,  40, 0xffcf6650, ['Red', 'Ruby', 'Garnet'])
        .addBeta(1020, 207, 0xffce7e50, ['Orange', 'Copper'])
        .addBeta(  41,  41, 0xffd2a945, ['Yellow', 'Gold', 'Jasmine'])
        .addBeta(  38,  38, 0xff4ac882, ['Green', 'Emerald', 'Malachite'])
        .addBeta(1019, 206, 0xff49c2c6, ['Blue', 'Cyan', 'Light blue', 'Aquamarine', 'Turquoise'])
        .addBeta(  39,  39, 0xff4d84c6, ['Blue', 'Sapphire'])
        .addBeta(  37,  37, 0xffce62cf, ['Purple', 'Pink', 'Magenta', 'Violet', 'Amethyst']),
      new ItemBrickPackage('brick', 'Brick Blocks', ['Standard', 'Wall'])
        .addBrick(1090, 262, 0xff888888, ['White', 'Light'])
        .addBrick(1022, 209, 0xff4c4c4c, ['Gray', 'Grey', 'Concrete', 'Stone'])
        .addBrick(1024, 211,         -1, ['Black', 'Dark', 'Coal'])
        .addBrick(  20,  20, 0xff6f2429, ['Red', 'Maroon', 'Hell'])
        .addBrick(  16,  16, 0xff8b3e09, ['Brown', 'Orange', 'Soil', 'Dirt', 'Mahogany'])
        .addBrick(  21,  21, 0xff6f5d24, ['Beige', 'Tan', 'Olive', 'Brown', 'Ecru', 'Yellow'])
        .addBrick(  19,  19, 0xff438310, ['Green', 'Grass'])
        .addBrick(  17,  17, 0xff246f4d, ['Blue', 'Cyan', 'Turquoise', 'Teal', 'Skobeloff', 'Dark Green'])
        .addBrick(1023, 210,         -1, ['Blue', 'Dark', 'Zaffre'])
        .addBrick(  18,  18, 0xff4e246f, ['Purple', 'Dark', 'Violet']),
      new ItemBrickPackage('metal', 'Metal Blocks', ['Ore', 'Standard'])
        .addMetal(29, 29, 0xffa1a3a5, ['Silver', 'White', 'Iron', 'Platinum'])
        .addMetal(30, 30, 0xffdf7a41, ['Orange', 'Bronze', 'Amber'])
        .addMetal(31, 31, 0xfff0a927, ['Yellow', 'Gold', 'Jasmine']),
      // TODO: grass
      // TODO: generic
      // TODO: factory
      // TODO: secrets
      // TODO: glass
      // TODO: minerals
      // TODO: chrismas 2011
      new ItemBrickPackage('gravity', 'Gravity Modifying Arrows', ['Physics', 'Motion', 'Action', 'Standard'])
        .addGravity(   0, ItemLayer.BACKGROUND, ItemManager.blocksBMD       ,   0, 0xff000000, ['Clear', 'Empty', 'Delete', 'Nothing', 'Erase'])
        .addGravity(   1, ItemLayer.DECORATION, ItemManager.blocksBMD       ,   1, 0x00000000, ['Left', 'Arrow'])
        .addGravity(   2, ItemLayer.DECORATION, ItemManager.blocksBMD       ,   2, 0x00000000, ['Up', 'Arrow'])
        .addGravity(   3, ItemLayer.DECORATION, ItemManager.blocksBMD       ,   3, 0x00000000, ['Right', 'Arrow'])
        .addGravity(1518, ItemLayer.DECORATION, ItemManager.blocksBMD       , 285, 0x00000000, ['Down', 'Arrow'])
        .addGravity(   4, ItemLayer.DECORATION, ItemManager.blocksBMD       ,   4, 0x00000000, ['Dot'])
        .addGravity( 459, ItemLayer.DECORATION, ItemManager.blocksBMD       , 233, 0x00000000, ['Slow', 'Dot', 'Climbable', 'Physics'])
        .addGravity( 411, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 312, 0x00000000, ['Invisible', 'Left', 'Arrow'])
        .addGravity( 412, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 317, 0x00000000, ['Invisible', 'Up', 'Arrow'])
        .addGravity( 413, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 322, 0x00000000, ['Invisible', 'Right', 'Arrow'])
        .addGravity(1519, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 652, 0x00000000, ['Invisible', 'Down', 'Arrow'])
        .addGravity( 414, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 327, 0x00000000, ['Invisible', 'Dot'])
        .addGravity( 460, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 466, 0x00000000, ['Slow', 'Dot', 'Climbable', 'Physics', 'Invisible'])
      // TODO: keys
      // TODO: gates
      // TODO: doors
      // TODO: coins
      // TODO: tools
      // TODO: crown
      // TODO: boost
      // TODO: climbable
      // TODO: switches
      // TODO: death
      // TODO: zombie
      // TODO: teams
      // TODO: timed
      // TODO: music
      // TODO: hazards
      // TODO: liquids
      // TODO: portals
      // TODO: diamond
      // TODO: cake
      // TODO: hologram
      // TODO: christmas 2010
      // TODO: new year 2010
      // TODO: spring 2011
      // TODO: prizes
      // TODO: easter 2012
      // TODO: basicbg
      // TODO: betabg
      // TODO: brickbg
      // TODO: checker
      // TODO: dark
      // TODO: normal
      // TODO: pastel
      // TODO: canvas
      // TODO: carnival
      // TODO: candy
      // TODO: summer 2011
      // TODO: halloween 2011
      // TODO: christmas 2011
      // TODO: sci-fi
      // TODO: prison
      // TODO: windows
      // TODO: pirate
      // TODO: stone
      // TODO: dojo
      // TODO: wild west
      // TODO: plastic
      // TODO: water
      // TODO: sand
      // TODO: summer 2012
      // TODO: cloud
      // TODO: industrial
      // TODO: clay
      // TODO: medieval
      // TODO: pipes
      // TODO: outer space
      // TODO: desert
      // TODO: neon
      // TODO: monster
      // TODO: fog
      // TODO: halloween 2012
      // TODO: brickchecker
      // TODO: jungle
      // TODO: christmas 2012
      // TODO: lava
      // TODO: swamp
      // TODO: marble
      // TODO: admin
      // TODO: sign
      // TODO: farm
      // TODO: autumn 2014
      // TODO: christmas 2014
      // TODO: one-way
      // TODO: valentines 2015
      // TODO: magic
      // TODO: effect
      // TODO: gold
      // TODO: cave
      // TODO: summer 2015
      // TODO: environment
      // TODO: domestic
      // TODO: halloween 2015
      // TODO: arctic
      // TODO: new year 2015
      // TODO: ice
      // TODO: fairytale
      // TODO: spring 2016
      // TODO: summer 2016
      // TODO: mine
      // TODO: restaurant
      // TODO: textile
      // TODO: halloween 2016
      // TODO: construction
      // TODO: christmas 2016
      // TODO: tiles
      // TODO: St. Patricks 2017
      // TODO: half blocks
      // TODO: winter 2018
      // TODO: garden
      // TODO: fireworks
      // TODO: toxic
      // TODO: special
      // TODO: dungeon
      // TODO: shadows
      // TODO: npc
    ];

    // TODO: generated doors/gates

    function BS(sprName, bmdName, offset, frames, shadow){
      const srcBmd = ItemManager[bmdName];
      if (!srcBmd)
        throw new Error('Missing: ' + bmdName);
      if (!frames)
        frames = srcBmd.width / 16;
      const width = 16;
      const height = 16;
      ItemManager[sprName] = new BlockSprite(srcBmd, offset, width, height, frames, shadow);
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
    // TODO: BS('sprCoinDoors'                 , 'coinDoorsBMD'              ,   0, null, true );
    // TODO: BS('sprCoinGates'                 , 'coinGatesBMD'              ,   0, null, false);
    // TODO: BS('sprBlueCoinDoors'             , 'blueCoinDoorsBMD'          ,   0, null, true );
    // TODO: BS('sprBlueCoinGates'             , 'blueCoinGatesBMD'          ,   0, null, false);
    // TODO: BS('sprPurpleDoors'               , 'switchDoorsBMD'            ,   0, null, true );
    // TODO: BS('sprPurpleGates'               , 'switchGatesBMD'            ,   0, null, false);
    // TODO: BS('sprSwitchUP'                  , 'switchSwitchUpBMD'         ,   0, null, true );
    // TODO: BS('sprSwitchDOWN'                , 'switchSwitchDownBMD'       ,   0, null, true );
    // TODO: BS('sprSwitchRESET'               , 'switchSwitchResetBMD'      ,   0, null, true );
    // TODO: BS('sprDeathDoor'                 , 'deathDoorBMD'              ,   0, null, true );
    // TODO: BS('sprDeathGate'                 , 'deathGateBMD'              ,   0, null, false);
    // TODO: BS('sprOrangeDoors'               , 'switchOrangeDoorsBMD'      ,   0, null, true );
    // TODO: BS('sprOrangeGates'               , 'switchOrangeGatesBMD'      ,   0, null, false);
    // TODO: BS('sprOrangeSwitchUP'            , 'switchOrangeSwitchUpBMD'   ,   0, null, true );
    // TODO: BS('sprOrangeSwitchDOWN'          , 'switchOrangeSwitchDownBMD' ,   0, null, true );
    // TODO: BS('sprOrangeSwitchRESET'         , 'switchOrangeSwitchResetBMD',   0, null, true );
    // TODO: BS('sprMultiJumps'                , 'effectMultiJumpsBMD'       ,   0, null, true );
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
      ItemManager.bricks[i] = ItemManager.bricks[i] || ItemManager.bricks[0];
  }
}

//
// Lookup
//

class Lookup {
  width;
  height;
  lookup; // common blocks
  placerLookup; // placer info
  portalLookup;
  worldPortalLookup;
  secretsLookup; // secret blocks
  labelLookup;
  blinkLookup; // invisible arrows, halloween eyes etc
  signLookup;
  npcLookup;

  constructor(width, height){
    this.width = width;
    this.height = height;
    this.reset();
  }

  reset(){
    const size = this.width * this.height;
    this.lookup = new Array(size);
    this.placerLookup = new Array(size * 3); // one per layer
    this.portalLookup = new Array(size);
    this.worldPortalLookup = new Array(size);
    this.labelLookup = new Array(size);
    this.blinkLookup = new Array(size);
    this.signLookup = new Array(size);
    this.npcLookup = new Array(size);
    this.resetSecrets();
  }

  resetSecrets(){
    this.secretsLookup = new Array(this.width * this.height);
  }

  resetSign(x, y){
    this.signLookup[x + y * this.width] = undefined;
  }

  deleteLookup(x, y){
    const lookupId = x + y * this.width;
    this.lookup[lookupId] = undefined;
    this.portalLookup[lookupId] = undefined;
    this.worldPortalLookup[lookupId] = undefined;
    this.placerLookup[lookupId] = undefined;
    this.secretsLookup[lookupId] = undefined;
    this.blinkLookup[lookupId] = undefined;
    this.signLookup[lookupId] = undefined;
  }

  deleteBlink(x, y){
    this.blinkLookup[x + y * this.width] = undefined;
  }

  getPlacer(x, y, layer){
    const k = x + y * this.width + layer * this.width * this.height;
    return this.placerLookup[k] || '';
  }

  setPlacer(x, y, layer, placer){
    const k = x + y * this.width + layer * this.width * this.height;
    this.placerLookup[k] = placer;
  }

  getInt(x, y){
    return this.lookup[x + y * this.width] || 0;
  }

  setInt(x, y, value){
    this.lookup[x + y * this.width] = value;
  }

  getNumber(x, y){
    return this.lookup[x + y * this.width] || 0;
  }

  setNumber(x, y, value){
    this.lookup[x + y * this.width] = value;
  }

  getBoolean(x, y){
    return this.lookup[x + y * this.width] || false;
  }

  setBoolean(x, y, value){
    this.lookup[x + y * this.width] = value;
  }

  getText(x, y){
    return this.lookup[x + y * this.width] || '';
  }

  setText(x, y, value){
    this.lookup[x + y * this.width] = value;
  }

  getSignType(x, y){
    return this.signLookup[x + y * this.width].type || 0;
  }

  getTextSign(x, y){
    return this.signLookup[x + y * this.width] || {text: 'Undefined', type: -1};
  }

  setTextSign(x, y, value){
    this.signLookup[x + y * this.width] = value;
  }

  getLabel(x, y){
    return this.labelLookup[x + y * this.width] || {text: ':)', color: '#ffffff', wrapLength: 200};
  }

  setLabel(x, y, text, color, wrapLength){
    this.labelLookup[x + y * this.width] = {text, color, wrapLength};
  }

  getPortal(x, y){
    this.portalLookup[x + y * this.width] || {id: 0, target: 0, location: 0, type: ItemId.PORTAL};
  }

  setPortal(x, y, value){
    this.portalLookup[x + y * this.width] = value;
  }

  getWorldPortal(x, y){
    return this.worldPortalLookup[x + y * this.width] || {id: '', target: 0};
  }

  setWorldPortal(x, y, value){
    this.worldPortalLookup[x + y * this.width] = value;
  }

  getSecret(x, y){
    return this.secretsLookup[x + y * this.width] || false;
  }

  setSecret(x, y, value){
    this.secretsLookup[x + y * this.width] = value;
  }

  getNpc(x, y){
    // TODO: return npcLookup[getLookupId(x, y)] || new Npc("&invalid&", ["r","i","p"], new Point(x, y), null);
    return this.npcLookup[x + y * this.width];
  }

  setNpc(x, y, name, messages, item){
    // TODO: npcLookup[getLookupId(x, y)] = new Npc(name, messages, new Point(x, y), item);
  }

  getPortals(portalId){
    const portals = [];
    for (let i = 0; i < this.portalLookup.length; i++){
      const p = this.portalLookup[i];
      if (p.id === portalId){
        portals.push({
          x: (i % this.width) << 4,
          y: (Math.floor(i / this.width)) << 4
        });
      }
    }
    return portals;
  }

  getBlink(x, y){
    return this.blinkLookup[x + y * this.width] || 0;
  }

  setBlink(x, y, value){
    this.blinkLookup[x + y * this.width] = value;
  }

  isBilnk(x, y){
    return typeof this.blinkLookup[x + y * this.width] === 'number';
  }

  updateBlink(x, y, add){
    const value = (this.blinkLookup[x + y * this.width] || 0) + add;
    this.blinkLookup[x + y * this.width] = value;
    return value;
  }
}

//
// CampaignPage
//

class CampaignPage {
  defaultWorld;

  constructor(){
    this.getCampaigns();
  }

  getCampaigns(){
    const tempCamps = [];
    for (const entry of CampaignPage.CampaignZip){
      let i = 0;
      const campId = parseInt(entry.name.substr(0, entry.name.indexOf('/')), 10);
      const tierId = parseInt(entry.name.substr(entry.name.indexOf('/') + 1, entry.name.indexOf('.')), 10);
      const fileType = entry.name.substr(entry.name.indexOf('.') + 1);

      if (!tempCamps[campId]){
        tempCamps[campId] = {
          worlds: [],
          maxTier: 0,
          completedTiers: 0
        };
      }
      const tempCamp = tempCamps[campId];

      if (!tempCamp.worlds[tierId])
        tempCamp.worlds[tierId] = {};
      const tempWorld = tempCamp.worlds[tierId];

      if (entry.name.substr(entry.name.lastIndexOf('/') + 1) === 'campaign.info'){
        const campInfo = entry.data.toString().split('᎙');
        tempCamp.diff = campInfo[i++];
        tempCamp.name = campInfo[i++];
        tempCamp.desc = campInfo[i++];
      }
      else if (fileType === 'info'){
        // TODO: tempWorld.img = previews[campId][tierId];
        const tierInfo = entry.data.toString().split('᎙');
        tempWorld.diff = tierInfo[i++];
        tempWorld.creators = tierInfo[i++];
        tempWorld.targetTimes = [];
        for (let j = 0; j < 5; j++){
          if (i < tierInfo.length){
            tempWorld.targetTimes.push(parseInt(tierInfo[i++]));
            tempWorld.trialsEnabled = true;
          }
          else
            tempWorld.trialsEnabled = false;
        }
        tempCamp.maxTier++;
      }
      else if (fileType === 'eelvl'){
        tempWorld.eelvl = entry.data;
        const idata = entry.data.inflate();
        idata.readUTF();
        tempWorld.name = idata.readUTF();
      }
    }

    this.defaultWorld = tempCamps[0].worlds[0].eelvl;
  }
}

//
// EverybodyEdits
//

class EverybodyEdits {
  campaigns;

  constructor(){
    ItemManager.init();
    this.campaigns = new CampaignPage();
  }

  get defaultWorld(){
    return this.campaigns.defaultWorld;
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
  moving = false;
  hitmap;

  update(input){}
  enterFrame(){}
  exitFrame(){}

  tick(input){
    this.update(input);
  }

  draw(target, ox, oy){
    target.fillRect({x: this.x + ox, y: this.y + oy, w: 1, h: 1}, '#ffffff');
  }
}

//
// BlContainer
//

class BlContainer extends BlObject {
  content = [];
  target;

  add(o){
    this.content.push(o);
    return o;
  }

  addAt(o, index){
    this.content.splice(index, 0, o);
    return o;
  }

  addBefore(o, target){
    const a = this.content.indexOf(target);
    if (a >= 0)
      return this.addAt(o, a);
    return this.add(o);
  }

  remove(o){
    const a = this.content.indexOf(o);
    if (a >= 0)
      this.content.splice(a, 1);
    return o;
  }

  removeAll(){
    this.content = [];
  }

  children(){
    return this.content.concat();
  }

  offset(x, y){
    this.x += x;
    this.y += y;
  }

  tick(input){
    for (const o of this.content)
      o.tick(input);
    super.tick(input);
    if (this.target){
      this.x -= (this.x - ((-this.target.x) + Config.bw / 2)) * Config.camera_lag;
      this.y -= (this.y - ((-this.target.y) + Config.bh / 2)) * Config.camera_lag;
      if (Math.abs(this.x - (-this.target.x + Config.bw / 2)) < 0.5)
        this.x = -this.target.x + Config.bw / 2;
      if (Math.abs(this.y - (-this.target.y + Config.bh / 2)) < 0.5)
        this.y = -this.target.y + Config.bh / 2;
    }
  }

  exitFrame(){
    for (const o of this.content)
      o.exitFrame();
  }

  enterFrame(){
    for (const o of this.content)
      o.enterFrame();
  }

  draw(target, ox, oy){
    for (const o of this.content)
      o.draw(target, ox + this.x, oy + this.y);
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
  sprImage;
  sprImageShadow;
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
    this.drawPoint(target, {x: ox + this.x, y: oy + this.y});
  }

  drawPoint(target, point){
    if (this.shadow){
      target.copyPixelsRotated(
        this.sprImageShadow,
        this.shadowRect,
        {x: point.x, y: point.y, w: this.width + 2, h: this.height + 2},
        this.rotatedDeg
      );
    }
    else{
      target.copyPixelsRotated(
        this.sprImage,
        this.rect,
        {x: point.x, y: point.y, w: this.width, h: this.height},
        this.rotatedDeg
      );
    }
  }
}

//
// BlockSprite
//

// TODO: is this any different than BlSprite..???
class BlockSprite extends BlSprite {
  constructor(srcBmd, offset, width, height, frames, shadow){
    super(srcBmd, offset, width, height, frames, shadow)
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
}

//
// World
//

class World extends BlObject {
  lookup;
  spawnPoints = [];
  depth = 0;
  gravity;
  realMap;
  background;
  decoration;
  foreground;
  above;

  constructor(worldData){
    super();

    // CampaignPage::onFileLoaded
    const data = worldData.inflate();
    const owner = data.readUTF();
    const worldName = data.readUTF();
    const width = data.readInt();
    const height = data.readInt();
    this.gravity = data.readFloat();
    const background = data.readUnsignedInt();
    const description = data.readUTF();
    const campaign = data.readBoolean();
    const crewId = data.readUTF();
    const crewName = data.readUTF();
    const crewStatus = data.readInt();
    const minimap = data.readBoolean();
    const ownerID = data.readUTF();

    this.lookup = new Lookup(width, height);

    // World::deserializeFromMessage

    // Create empty world array.
    const layers = [];
    for (let l = 0; l < 2; l++){
      const cols = [];
      for (let a = 0; a < height; a++){
        const row = [];
        for (let b = 0; b < width; b++)
          row.push(0);
        cols.push(row);
      }
      layers.push(cols);
    }

    while (data.position < data.length){
      const type = data.readInt();
      const layer = data.readInt();
      const xs = data.readUnsignedShortArray();
      const ys = data.readUnsignedShortArray();
      let rotation = 0;
      let id = 0;
      let tar = 0;
      let text;
      let text_color;
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
        type == ItemId.SPIKE_BLUE
      ){
        rotation = data.readInt();
      }
      else if (type === ItemId.PORTAL || type === ItemId.PORTAL_INVISIBLE){
        rotation = data.readInt();
        id = data.readInt();
        tar = data.readInt();
      }
      else if (type === ItemId.TEXT_SIGN) {
        sign_text = data.readUTF();
        sign_type = data.readInt();
      }
      else if (type === ItemId.WORLD_PORTAL){
        target_world = data.readUTF();
        tar = data.readInt();
      }
      else if (type === ItemId.LABEL) {
        text = data.readUTF();
        text_color = data.readUTF();
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

        if (nx >= width || ny >= height)
          continue;

        layers[layer][ny][nx] = type;

        if (
          ItemId.isBlockRotateable(type) ||
          ItemId.isNonRotatableHalfBlock(type) ||
          ItemId.isBlockNumbered(type)
        ){
          this.lookup.setInt(nx, ny, rotation);
        }

        switch(type) {
          case 83:
          case 77:
          case 1520:
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
          case ItemId.WORLD_PORTAL:
            this.lookup.setWorldPortal(nx, ny, {id: target_world, target: tar});
            break;
          case ItemId.SPAWNPOINT:
          case ItemId.WORLD_PORTAL_SPAWN:
            if(!this.spawnPoints[rotation])
              this.spawnPoints[rotation] = [];
            this.spawnPoints[rotation].push([nx, ny]);
            break;
          case ItemId.LABEL: {
            this.lookup.setLabel(nx, ny, text, text_color, wrapLength);
            // TODO: var t:BlText = new BlText(Global.default_label_size,wrapLength,uint("0x"+text_color.substr(1,text_color.length)),"left","system",true);
            // TODO: t.text = text;
            // TODO: t.x = nx * size;
            // TODO: t.y = ny * size;
            // TODO: labelcontainer.add(t);
            // TODO: fallthrough?!?!
          }

          case ItemId.TEXT_SIGN:
            this.lookup.setTextSign(nx, ny, {text: sign_text, type: sign_type});
            break;
        }
        if (ItemId.isNPC(type)){
          this.lookup.setNpc(nx, ny, name, messages, ItemManager.getNpcById(type));
        }
      }
    }
    this.setMapArray(layers);
  }

  setMapArray(map){
    this.depth = map.length;
    this.height = map[0].length;
    this.width = map[0][0].length;

    // Reset render maps
    this.background = Array.from({length: this.height}).map(() => []);
    this.decoration = Array.from({length: this.height}).map(() => []);
    this.foreground = Array.from({length: this.height}).map(() => []);
    this.above = Array.from({length: this.height}).map(() => []);

    // Reset real map
    this.realMap = map;

    // Populate maps
    for (let l = 0; l < this.depth; l++){
      for (let y = 0; y < this.height; y++){
        for (let x = 0; x < this.width; x++){
          this.setMagicTile(l, x, y, map[l][y][x]);
        }
      }
    }
  }

  setMagicTile(layer, x, y, type){
    if (layer === ItemLayer.BACKGROUND)
      this.background[y][x] = type;
    else{
      this.decoration[y][x] = 0;
      this.foreground[y][x] = 0;
      this.above[y][x] = 0;

      const i = ItemManager.bricks[type];
      if (i){
        if (i.layer === ItemLayer.DECORATION)
          this.decoration[y][x] = type;
        else if (i.layer === ItemLayer.FOREGROUND)
          this.foreground[y][x] = type;
        else if (i.layer === ItemLayer.ABOVE)
          this.above[y][x] = type;
      }
      else
        console.error('Missing brick: ' + type);
    }
  }

  getTile(layer, x, y){
    if(layer < 0 || layer >= this.depth || x < 0 || x >= this.width || y < 0 || y >= this.height)
      return 0;
    return this.realMap[layer][y][x]
  }

  overlaps(pl){
    if (pl.x < 0 || pl.y < 0 || pl.x > this.width * 16 - 16 || pl.y > this.height * 16 - 16)
      return true;
    /*
    var pl:Player = o as Player;
    if (pl.isFlying) return 0;

    var ox:int = pl.x>>4; //player x
    var oy:int = pl.y>>4; //player y

    var oh:Number = (o.x+o.height)/size;
    var ow:Number = (o.y+o.width)/size;

    var skipa:Boolean = false;
    var skipb:Boolean = false;
    var skipc:Boolean = false;
    var skipd:Boolean = false;
    var map:Vector.<int>;
    var rect:Rectangle = new Rectangle(pl.x, pl.y, 16, 16);
    for(var cy:int=oy; cy < ow; cy++){
      map = realmap[0][cy];
      for(var cx:int=ox; cx < oh; cx++){
        if(!map) continue;
        var val:int = map[cx];
        if (!ItemId.isSolid(val)) {
          if (val == 243) {
            lookup.setSecret(cx, cy, true);
          }
          continue;
        }
        if (!rect.intersects(new Rectangle(cx*16, cy*16, 16, 16))) continue;
        var rot:int = lookup.getInt(cx, cy);
        if (ItemId.isRotatableHalfBlock(val)) {
          if (ItemId.canJumpThroughFromBelow(val)) {
            //up
            if ((pl.speedY < 0 || cy <= pl.overlapa || (pl.speedY == 0 && pl.speedX == 0 && (pl.oy + 15) > cy * 16)) && rot == 1) {
              if(cy != oy || pl.overlapa == -1) pl.overlapa = cy;
              skipa = true
              continue
            }
            //right
            if ((pl.speedX > 0 || (cx <= pl.overlapb && pl.speedX <= 0 && pl.ox < cx*16+16)) && rot == 2) {
              if(cx != ox || pl.overlapb == -1) pl.overlapb = cx;
              skipb = true
              continue
            }
            //down
            if ((pl.speedY > 0 || (cy <= pl.overlapc && pl.speedY <= 0 && pl.oy < cy*16+16)) && rot == 3) {
              if(cy != oy || pl.overlapc == -1) pl.overlapc = cy;
              skipc = true
              continue
            }
            //left
            if ((pl.speedX < 0 || cx <= pl.overlapd || (pl.speedY == 0 && pl.speedX < 0 && (pl.ox - 15) < cx * 16)) && rot == 0) {
              if(cx != ox || pl.overlapd == -1) pl.overlapd = cx;
              skipd = true
              continue
            }
          }
        }
        else if (ItemId.isHalfBlock(val)) {
          if (rot == 1) {
            if (!rect.intersects(new Rectangle(cx*16, cy*16+8, 16, 8)))
              continue;
          }
          else if (rot == 2) {
            if (!rect.intersects(new Rectangle(cx*16, cy*16, 8, 16)))
              continue;
          }
          else if (rot == 3) {
            if (!rect.intersects(new Rectangle(cx*16, cy*16, 16, 8)))
              continue;
          }
          else if (rot == 0) {
            if (!rect.intersects(new Rectangle(cx*16+8, cy*16, 8, 16)))
              continue;
          }
        }
        else {
          if (ItemId.canJumpThroughFromBelow(val)) {
            if(pl.speedY < 0 || cy <= pl.overlapa || (pl.speedY == 0 && pl.speedX == 0 && (pl.oy + 15) > cy*16)){
              if(cy != oy || pl.overlapa == -1) pl.overlapa = cy;
              skipa = true
              continue
            }
          }
        }

        switch(val){
          case 23: if (getKey("red")) continue; break;
          case 24: if (getKey("green")) continue; break;
          case 25: if (getKey("blue")) continue; break;
          case 26: if (!getKey("red")) continue; break;
          case 27: if (!getKey("green")) continue; break;
          case 28: if (!getKey("blue")) continue; break;

          case 1005: if (getKey("cyan")) continue; break;
          case 1006: if (getKey("magenta")) continue; break;
          case 1007: if (getKey("yellow")) continue; break;
          case 1008: if (!getKey("cyan")) continue; break;
          case 1009: if (!getKey("magenta")) continue; break;
          case 1010: if (!getKey("yellow")) continue; break;

          case 156: if (timedoorState) continue; break;
          case 157: if (!timedoorState) continue; break;

          case ItemId.DOOR_PURPLE: if ( pl.switches[lookup.getInt(cx, cy)]) continue; break;
          case ItemId.GATE_PURPLE: if (!pl.switches[lookup.getInt(cx, cy)]) continue; break;

          case ItemId.DOOR_ORANGE: if ( orangeSwitches[lookup.getInt(cx, cy)]) continue; break;
          case ItemId.GATE_ORANGE: if (!orangeSwitches[lookup.getInt(cx, cy)]) continue; break;

          case ItemId.DOOR_GOLD: if ( pl.wearsGoldSmiley) continue; break;
          case ItemId.GATE_GOLD: if (!pl.wearsGoldSmiley) continue; break;

          case ItemId.CROWNDOOR: if ( pl.collideWithCrownDoorGate) continue; break;
          case ItemId.CROWNGATE: if (!pl.collideWithCrownDoorGate) continue; break;

          case ItemId.SILVERCROWNDOOR: if ( pl.collideWithSilverCrownDoorGate) continue; break;
          case ItemId.SILVERCROWNGATE: if (!pl.collideWithSilverCrownDoorGate) continue; break;

          case ItemId.COINDOOR:     if (lookup.getInt(cx, cy) <= pl.coins)   continue; break;
          case ItemId.BLUECOINDOOR:   if (lookup.getInt(cx, cy) <= pl.bcoins)  continue; break;
          case ItemId.DEATH_DOOR:   if (lookup.getInt(cx, cy) <= pl.deaths) continue; break;
          case ItemId.COINGATE:     if (lookup.getInt(cx, cy) >  /*pl.coins* / (pl.isme ? showCoinGate : pl.coins))  continue; break;
          case ItemId.BLUECOINGATE:   if (lookup.getInt(cx, cy) >  /*pl.bcoins* / (pl.isme ? showBlueCoinGate : pl.bcoins)) continue; break;
          case ItemId.DEATH_GATE:   if (lookup.getInt(cx, cy) >  /*pl.deaths* / (pl.isme ? showDeathGate : pl.deaths)) continue; break;

          case ItemId.TEAM_DOOR: if (pl.team == lookup.getInt(cx, cy)) continue; break;
          case ItemId.TEAM_GATE: if (pl.team != lookup.getInt(cx, cy)) continue; break;

          case ItemId.ZOMBIE_GATE: if (!pl.zombie) continue; break;
          case ItemId.ZOMBIE_DOOR: if ( pl.zombie) continue; break;

          case 50:{
            lookup.setSecret(cx, cy, true);
            break;
          }
        }

        return val;
      }
    }
    if(!skipa) pl.overlapa = -1
    if(!skipb) pl.overlapb = -1
    if(!skipc) pl.overlapc = -1
    if(!skipd) pl.overlapd = -1
    */
    return false;
  }

  draw(target, ox, oy){
    this.onDraw(target, ox, oy, false);
  }

  onDraw(target, ox, oy, full){
    if (full) throw new Error('World.onDraw called with full set'); // TODO: is full used????
    const size = 16;
    const width_ = full ? this.width * size : Config.bw / size;
    const height_ = full ? this.height * size : Config.bh / size;

    const startx = Math.max(0, Math.floor(-ox / size - 1));
    const starty = Math.max(0, Math.floor(-oy / size - 1));
    const endx = Math.min(this.width, startx + width_ + 2);
    const endy = Math.min(this.height, starty + height_ + 2);

    // TODO: draw backgrounds
    // TODO: draw imageBlocks
    // TODO: advance ice

    for (let cy = starty; cy < endy; cy++){
      const fgrow = this.foreground[cy];
      const drow = this.decoration[cy];
      for (let cx = startx; cx < endx; cx++){
        const point = {x: (cx << 4) + ox, y: (cy << 4) + oy};
        let type = fgrow[cx];

        if (type !== 0){
          ItemManager.bricks[type].draw(target, point.x, point.y);
          continue;
        }

        type = drow[cx];
        if (type === 0)
          continue;

        // TODO: draw decoration
      }
    }

    // TODO: draw infront
  }

  postDraw(target, ox, oy, full_){
  }

  drawDialogs(target, ox, oy){
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

  _baseDragX          = Config.physics_base_drag;
  _baseDragY          = Config.physics_base_drag;
  _no_modifier_dragX  = Config.physics_no_modifier_drag;
  _no_modifier_dragY  = Config.physics_no_modifier_drag;
  _water_drag         = Config.physics_water_drag;
  _water_buoyancy     = Config.physics_water_buoyancy;
  _mud_drag           = Config.physics_mud_drag;
  _mud_buoyancy       = Config.physics_mud_buoyancy;
  _lava_drag          = Config.physics_lava_drag;
  _lava_buoyancy      = Config.physics_lava_buoyancy;
  _toxic_drag         = Config.physics_toxic_drag;
  _toxic_buoyancy     = Config.physics_toxic_buoyancy;
  _boost              = Config.physics_boost;
  _gravity            = Config.physics_gravity;

  mox = 0;
  moy = 0;
  mx = 0;
  my = 0;

  last = 0;
  offset = 0;

  mult = Config.physics_variable_multiplyer;

  constructor(){
    super();
    this.last = Date.now();
  }

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
      this.rect,
      {x: this.x + ox, y: this.y + oy, w: this.rect.w, h: this.rect.h}
    );
  }
}

//
// Player
//

class Player extends SynchronizedSprite {
  world;
  name;
  isMe;
  isDead = false;
  state;
  spriteRect; // rect2
  queue = [];
  lastJump = -Date.now();
  current;
  current_below;

  // input
  leftDown = 0;
  rightDown = 0;
  upDown = 0;
  downDown = 0;
  spaceDown = false;
  spaceJustDown = false;
  horizontal = 0;
  vertical = 0;

  // cached input for teleporting (TODO: remove..?)
  oh = 0;
  ov = 0;
  oSpaceDown = false;
  oSpaceJP = false;
  enforceMovement = false;

  worldGravityMultiplier = 1;

  // effects
  flipGravity = 0;
  slippery = 0;
  jumpCount = 0;
  maxJumps = 1;

  constructor(world, name, isMe, state){
    super(ItemManager.smileysBMD);
    this.spriteRect = {x: 0, y: 0, w: 26, h: 26};
    this.world = world;
    this.hitmap = world;
    this.name = name;
    this.isMe = isMe;
    this.state = state;
    this.x = 16;
    this.y = 16;
    this.size = 16;
    this.width = 16;
    this.height = 16;
  }

  get isControlled(){
    // TODO: check for global target
    return this.isMe;
  }

  get gravityMultiplier(){
    let gm = 1;
    // TODO: if (low_gravity) gm *= 0.15;
    gm *= this.worldGravityMultiplier;
    return gm;
  }

  get jumpMultiplier(){
    let jm = 1;
    // TODO: jump multiplier
    //if (jumpBoost == 1) jm *= 1.3;
    //if (jumpBoost == 2) jm *= 0.75;
    //if (zombie) jm *= 0.75;
    if (this.slippery > 0) jm *= .88;
    return jm;
  }

  get speedMultiplier(){
    let sm = 1;
    // TODO: speed multiplier
    //if (speedBoost == 1) sm *= 1.5;
    //if (speedBoost == 2) sm *= 0.6;
    //if (zombie) sm *= 0.6;
    return sm;
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

    /*
    if(isDead) deadoffset += .3;
    else deadoffset = 0;
    */

    /*
    if (!isDead && (cursed || zombie || isOnFire || poison)) {
      var curTime:Number = new Date().time;
      if (cursed && curseDuration && curTime - curseTimeStart > curseDuration * 1000) killPlayer();
      if (zombie && zombieDuration && curTime - zombieTimeStart > zombieDuration * 1000) killPlayer();
      if (isOnFire && fireDuration && curTime - fireTimeStart > fireDuration * 1000) killPlayer();
      if (poison && poisonDuration && curTime - poisonTimeStart > poisonDuration * 1000) killPlayer();
    }
    */

    const cx = (this.x + 8) >> 4;
    const cy = (this.y + 8) >> 4;

    let delayed = this.queue.shift();
    this.current = this.world.getTile(0, cx, cy);
    /*
    if (ItemId.isHalfBlock(current)) {
      var rot:int = world.lookup.getInt(cx, cy);
      if (!ItemId.isBlockRotateable(current) && ItemId.isNonRotatableHalfBlock(current))
        rot = 1;
      if (rot == 1) cy -=1;
      if (rot == 0) cx -=1;
      current = world.getTile(0,cx,cy);
    }
    */

    /*
    if (tx != -1) UpdateTeamDoors(tx, ty);
    */

    const getCurrentBelow = () => {
      let x = 0, y = 0;
      switch (this.current){
        case 1: case 411: x -= 1; break;
        case 2: case 412: y -= 1; break;
        case 3: case 411: x += 1; break;
        case 4: case 412: y += 1; break;
        default:
          switch (this.flipGravity){
            case 0: y += 1; break;
            case 1: x -= 1; break;
            case 2: y -= 1; break;
            default: x += 1; break;
          }
          break;
      }
      return this.world.getTile(0, cx + x, cy + y);
    };

    // Getting the block the player is standing on. Also gets the gravity arrows
    this.current_below = getCurrentBelow();

    this.queue.push(this.current);

    if (this.current == 4 || this.current == 414 || ItemId.isClimbable(this.current)){
      delayed = this.queue.shift();
      queue.push(this.current);
    }

    /*
    var queue_length:int = this.tilequeue.length;
    while(queue_length--) this.tilequeue.shift()();
    */

    this.getPlayerInput(input);

    if (this.isDead){
      this.spaceJustDown = false;
      this.spaceDown = false;
      this.horizontal = 0;
      this.vertical = 0;
    }

    let rotateGravitymo = true;
    let rotateGravitymor = true;
    const isGod = false; // TODO: this.isFlying
    this.morx = 0;
    this.mory = 0;
    this.mox = 0;
    this.moy = 0;

    if (!isGod){
      if (ItemId.isClimbable(this.current)){
        this.morx = 0;
        this.mory = 0;
      }
      else{
        // Process gravity
        switch (this.current){
          case 1:
          case 411:
            this.morx = -this._gravity;
            this.mory = 0;
            rotateGravitymor = false;
            break;
          case 2:
          case 412:
            this.morx = 0;
            this.mory = -this._gravity;
            rotateGravitymor = false;
            break;
          case 3:
          case 413:
            this.morx = this._gravity;
            this.mory = 0;
            rotateGravitymor = false;
            break;
          case 1518:
          case 1519:
            this.morx = 0;
            this.mory = this._gravity;
            rotateGravitymor = false;
            break;
          case ItemId.SPEED_LEFT:
          case ItemId.SPEED_RIGHT:
          case ItemId.SPEED_UP:
          case ItemId.SPEED_DOWN:
          case 4:
          case 414:
            this.morx = 0;
            this.mory = 0;
            break;
          case ItemId.WATER:
            this.morx = 0;
            this.mory = this._water_buoyancy;
            break;
          case ItemId.MUD:
            this.morx = 0;
            this.mory = this._mud_buoyancy;
            break;
          case ItemId.LAVA:
            this.morx = 0;
            this.mory = this._lava_buoyancy;
            break;
          case ItemId.TOXIC_WASTE: {
            this.morx = 0;
            this.mory = _toxic_buoyancy;
            // TODO: kill player in toxic
            // if (!this.isDead && !this.isInvulnerable) this.killPlayer();
            break;
          }
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
            this.mory = this._gravity;
            // TODO: kill player on spikes
            // if (!this.isDead && !this.isInvulnerable) this.killPlayer();
            break;
          default:
            this.morx = 0;
            this.mory = this._gravity;
            break;
        }
      }

      if (ItemId.isClimbable(delayed)){
        this.mox = 0;
        this.moy = 0;
      }
      else{
        switch (delayed){
          case 1:
          case 411:
            this.mox = -this._gravity;
            this.moy = 0;
            rotateGravitymo = false;
            break;
          case 2:
          case 412:
            this.mox = 0;
            this.moy = -_gravity;
            rotateGravitymo = false;
            break;
          case 3:
          case 413:
            this.mox = this._gravity;
            this.moy = 0;
            rotateGravitymo = false;
            break;
          case 1518:
          case 1519:
            this.mox = 0;
            this.moy = this._gravity;
            rotateGravitymo = false;
            break;
          case ItemId.SPEED_LEFT:
          case ItemId.SPEED_RIGHT:
          case ItemId.SPEED_UP:
          case ItemId.SPEED_DOWN:
          case 4:
          case 414:
            this.mox = 0;
            this.moy = 0;
            break;
          case ItemId.WATER:
            this.mox = 0;
            this.moy = this._water_buoyancy;
            break;
          case ItemId.MUD:
            this.mox = 0;
            this.moy = this._mud_buoyancy;
            break;
          case ItemId.LAVA:
            this.mox = 0;
            this.moy = this._lava_buoyancy;
            break;
          case ItemId.TOXIC_WASTE:
            this.mox = 0;
            this.moy = this._toxic_buoyancy;
            break;
          default:
            this.mox = 0;
            this.moy = this._gravity;
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
      ItemId.isSlippery(this.current_below) &&
      !ItemId.isClimbable(this.current) &&
      this.current != 4 &&
      this.current != 414
    )
      this.slippery = 2;
    else if (ItemId.isSolid(this.current_below))
      this.slippery = 0;
    else if (this.slippery > 0)
      this.slippery -= .2;

    if (this._speedX || this._modifierX){
      this._speedX += this._modifierX;
      if (
        (
          (
            (this.mx === 0 && this.moy !== 0) ||
            (this._speedX < 0 && this.mx > 0) ||
            (this._speedX > 0 && this.mx < 0)
          ) &&
          (this.slippery <= 0 || isGod)
        ) || (
          ItemId.isClimbable(this.current) && !isGod
        )
      ){
        this._speedX *= Config.physics_base_drag;
        this._speedX *= this._no_modifier_dragX;
      }
      else if (this.current == ItemId.WATER && !isGod){
        this._speedX *= Config.physics_base_drag;
        this._speedX *= this._water_drag;
      }
      else if (this.current == ItemId.MUD && !isGod){
        this._speedX *= Config.physics_base_drag;
        this._speedX *= this._mud_drag;
      }
      else if (this.current == ItemId.LAVA  && !isGod){
        this._speedX *= Config.physics_base_drag;
        this._speedX *= this._lava_drag;
      }
      else if (this.current == ItemId.TOXIC_WASTE && !isGod){
        this._speedX *= Config.physics_base_drag;
        this._speedX *= this._toxic_drag;
      }
      else if (this.slippery > 0 && !isGod){
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
          (this.slippery <= 0 || isGod)
        ) || (
          ItemId.isClimbable(this.current) && !isGod
        )
      ){
        this._speedY *= Config.physics_base_drag;
        this._speedY *= this._no_modifier_dragY;
      }
      else if (this.current == ItemId.WATER && !isGod){
        this._speedY *= Config.physics_base_drag;
        this._speedY *= this._water_drag;
      }
      else if (this.current == ItemId.MUD && !isGod){
        this._speedY *= Config.physics_base_drag;
        this._speedY *= this._mud_drag;
      }
      else if (this.current == ItemId.LAVA && !isGod){
        this._speedY *= Config.physics_base_drag;
        this._speedY *= this._lava_drag;
      }
      else if (this.current == ItemId.TOXIC_WASTE && !isGod){
        this._speedY *= Config.physics_base_drag;
        this._speedY *= this._toxic_drag;
      }
      else if (this.slippery > 0 && !isGod){
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

    if (!isGod){
      switch (this.current){
        case ItemId.SPEED_LEFT:
          this._speedX = -this._boost;
          break;
        case ItemId.SPEED_RIGHT:
          this._speedX = this._boost;
          break;
        case ItemId.SPEED_UP:
          this._speedY = -this._boost;
          break;
        case ItemId.SPEED_DOWN:
          this._speedY = this._boost;
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
    let osx, osy, ox, oy;

    let doneX = false; // TODO: do these need to be member variables..?
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
      if (this.hitmap){
        if (this.hitmap.overlaps(this)){
          this.x = ox;
          if (this._speedX > 0 && this.morx > 0)
            grounded = true;
          if (this._speedX < 0 && this.morx < 0)
            grounded = true;

          this._speedX = 0;
          currentSX = osx;
          doneX = true;
        }
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
      if (this.hitmap){
        if (this.hitmap.overlaps(this)){
          this.y = oy;
          if (this._speedY > 0 && this.mory > 0)
            grounded = true;
          if (this._speedY < 0 && this.mory < 0)
            grounded = true;

          this._speedY = 0;
          currentSY = osy;
          doneY = true;
        }
      }
    }

    while ((currentSX !== 0 && !doneX) || (currentSY != 0 && !doneY)){
      // TODO: this.processPortals();
      ox = this.x;
      oy = this.y;

      osx = currentSX;
      osy = currentSY;

      stepX();
      stepY();
    }

    if (!this.isDead) {
      let mod = 1;
      let inJump = false;
      if (this.spaceJustDown){
        this.lastJump = -Date.now();
        inJump = true;
        mod = -1
      }

      if (this.spaceDown /*TODO: || !this.isMe && !this.isControlled && hasLevitation*/){
        /*
        if ( hasLevitation ) {
          isThrusting = true;
          applyThrust();
        }
        else*/{
          if (this.lastJump < 0){
            if (Date.now() + this.lastJump > 750)
              inJump = true;
          }
          else{
            if (Date.now() - this.lastJump > 150)
              inJump = true;
          }
        }
      }
      /*
      else {
        isThrusting = false;
      }
      */

      if (
        (
          (
            (this.speedX === 0 && this.morx && this.mox) ||
            (this.speedY === 0 && this.mory && this.moy)
          ) && grounded
        ) ||
        this.current == ItemId.EFFECT_MULTIJUMP
      ) // On ground so reset jumps to 0
        this.jumpCount = 0;

      if (this.jumpCount === 0 && !grounded)
        this.jumpCount = 1; // Not on ground so first 'jump' removed

      if (inJump/*TODO: && !this.hasLevitation*/) {
        if (this.jumpCount < this.maxJumps && this.morx && this.mox){ // Jump in x direction
          if (this.maxJumps < 1000) // Not infinite jumps
            this.jumpCount++;
          this.speedX = -this.morx * Config.physics_jump_height * this.jumpMultiplier;
          this.lastJump = Date.now() * mod;
        }
        if (this.jumpCount < this.maxJumps && this.mory && this.moy){ // Jump in y direction
          if (this.maxJumps < 1000) // Not infinite jumps
            this.jumpCount++;
          this.speedY = -this.mory * Config.physics_jump_height * this.jumpMultiplier;
          this.lastJump = Date.now() * mod;
        }
      }

      this.touchBlock(cx, cy, isGod);
      this.sendMovement(cx, cy);
    }

    /*
    if (hasLevitation)
      updateThrust();
    */

    // Auto align to grid. (do not autocorrect in liquid)
    const imx = this._speedX << 8;
    const imy = this._speedY << 8;

    this.moving = false

    if (imx !== 0 || (ItemId.isLiquid(this.current) && !isGod))
      this.moving = true;
    else if (this._modifierX < 0.1 && this._modifierX > -0.1){
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

    if (imy !== 0 || (ItemId.isLiquid(this.current) && !isGod))
      this.moving = true;
    else if (this._modifierY < 0.1 && this._modifierY > -0.1){
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
          y += (ty - 14) / 15;
      }
    }

    this.updateTicks();

    /*
    function randomRange(minNum:Number, maxNum:Number):Number
    {
      return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }

    function processPortals():void{
//        cx = (x+8)>>4;
//        cy = (y+8)>>4;
//
      current = world.getTile(0, cx, cy);

      if (!isGod && current == ItemId.WORLD_PORTAL) {
        if (!isme) {
          resetSend = true;
          resetPlayer(false, false, wp.target);
        } else if (isme && KeyBinding.risky.isDown() && !resetSend) {
          var wp:WorldPortal = world.lookup.getWorldPortal(cx, cy);
          if (wp.id.length > 0) {
            resetSend = true;
            //if (wp.id != connection.roomId) {
              //if (connection.connected) {
                //connection.disconnect();
              //}
              //var d:NavigationEvent = new NavigationEvent(NavigationEvent.JOIN_WORLD,true,false);
              //d.world_id = wp.id;
              //d.joindata.spawnid = wp.target;
              //d.joindata.lastowner = Global.ownerID;
              //d.joindata.lastcrew = Global.currentLevelCrew;
              //Global.base.dispatchEvent(d);
            //} else {
              //connection.send("reset", cx, cy);
            //}
            var id:int = parseInt(wp.id);
            if (Global.isValidWorldIndex(id)) {
              Global.base.campaigns.joinWorld(id, wp.target);
            }
            else resetPlayer(false, false, wp.target);
          }
        }
      }

      if (isGod || (current != ItemId.PORTAL && current != ItemId.PORTAL_INVISIBLE) || (world.lookup.getPortal(cx, cy).target == world.lookup.getPortal(cx, cy).id)) {
        lastPortal = null;
        return;
      }

      if (lastPortal != null)
        return;

      lastPortal =  new Point(cx<<4, cy<<4)
      var portals:Vector.<Point> = world.lookup.getPortals(world.lookup.getPortal(cx,cy).target);

      if (portals.length <= 0) return;
      var cp:Point = portals[randomRange(0, portals.length - 1)];

      var oldRotationg:int = world.lookup.getPortal(lastPortal.x>>4, lastPortal.y>>4).rotation
      var newRotation:int = world.lookup.getPortal(cp.x>>4, cp.y>>4).rotation

      if (oldRotationg < newRotation) oldRotationg += 4;

      /*
       * 0 - down
       * 1 - left
       * 2 - up
       * 3 - right
      * /

      var osx:Number = speedX
      var osy:Number = speedY
      var omx:Number = modifierX
      var omy:Number = modifierY

      var dir:int = oldRotationg-newRotation
      var magic:Number = 1.42

      switch(dir){
        case 1:{ // 90 degrees
          speedX = osy * magic
          speedY = -osx * magic

          modifierX = omy*magic
          modifierY = -omx*magic

          remainderY = -remainderX
          currentSY = -currentSX
          break;
        }
        case 2:{ // 180 degrees
          speedX = -osx * magic
          speedY = -osy * magic

          modifierX = -omx*magic
          modifierY = -omy*magic

          remainderY = -remainderY
          currentSY = -currentSY
          remainderX = -remainderX
          currentSX = -currentSX
          break;
        }
        case 3:{ // 270 degrees
          speedX = -osy * magic
          speedY = osx * magic

          modifierX = -omy*magic
          modifierY = omx*magic

          remainderX = -remainderY
          currentSX = -currentSY
          break;
        }
      }

      if (state && state.target == that) state.offset( x-cp.x,y-cp.y )

      if (Global.base.settings.particles) {
        if (current == ItemId.PORTAL && isme) { // In
          for (var k:int = 0; k < 25; k++) {
            var speedFactor:Number = (Math.random() + 1) / 2;
            world.addParticle(new Particle(world, (Math.random()*100 < 50 ? 5 : 4), cp.x+6, cp.y+6, speedFactor, speedFactor, speedFactor/70, speedFactor/70, Math.random()*360, Math.random()*90, false));
          }
        }
      }

      x = cp.x
      y = cp.y

      lastPortal = cp;
    }
    */
  }

  draw(target, ox, oy){
    var playerX = this.x + ox - 5;
    var playerY = this.y + oy - 5;

    this.drawFace(target, {x: playerX, y: playerY}, false, 0);
  }

  drawFace(target, point, zombie, deg){
    const dest = {x: point.x, y: point.y, w: 26, h: 26};
    if (zombie){
      target.copyPixelsRotated(
        this.bmd,
        {x: 26 * 87, y: this.spriteRect.y, w: 26, h: 26},
        dest,
        deg
      );
    }
    else
      target.copyPixelsRotated(this.bmd, this.spriteRect, dest, deg);
  }

  drawGods(target, ox, oy){
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
    return this.wearsGoldSmiley.y === 26;
  }

  // overridden in Me
  getPlayerInput(input){}
  touchBlock(cx, cy, isGod){}
  sendMovement(cx, cy){}
  updateTicks(){}
}

//
// Me
//

class Me extends Player {
  getPlayerInput(input){
    if (this.isControlled){
      this.leftDown      = input.keyDown.ArrowLeft  ? -1 : 0;
      this.upDown        = input.keyDown.ArrowUp    ? -1 : 0;
      this.rightDown     = input.keyDown.ArrowRight ?  1 : 0;
      this.downDown      = input.keyDown.ArrowDown  ?  1 : 0;
      this.spaceJustDown = !!input.keyJustPressed.Space;
      this.spaceDown     = !!input.keyDown.Space;
      this.horizontal    = this.leftDown + this.rightDown;
      this.vertical      = this.upDown + this.downDown;
    }
  }

  touchBlock(cx, cy, isGod){
    // TODO: apply block effects
  }

  sendMovement(cx, cy){
    if (this.isControlled){
      if (
        this.oh !== this.horizontal ||
        this.ov !== this.vertical ||
        this.oSpaceDown !== this.spaceDown ||
        (this.oSpaceJP !== this.spaceJustDown && this.spaceJustDown) ||
        //TODO:coinCountChanged ||
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

  updateTicks(){
    // TODO
  }
}

//
// PlayState
//

class PlayState extends BlContainer {
  player;
  world;

  constructor(worldData){
    super();

    this.world = new World(worldData);
    this.add(this.world);

    this.player = new Me(this.world, 'Sean', true, this);
    this.player.worldGravityMultiplier = this.world.gravity;
    this.x = -this.player.x + Config.bw / 2;
    this.y = -this.player.y + Config.bh / 2;
    this.add(this.player);
    this.target = this.player;
  }

  tick(input){
    super.tick(input);
  }

  enterFrame(){
  }

  exitFrame(){
  }

  draw(target, ox, oy){
    const startx = -this.x - 90;
    const starty = -this.y - 90;
    const endx = startx + Config.bw + 180;
    const endy = starty + Config.bh + 180;

    super.draw(target, ox, oy);

    const ox2 = ox + this.x;
    const oy2 = oy + this.y;

    // Draws the "above" decoration layer
    this.world.postDraw(target, ox2, oy2);

    // Draws you, if flying
    this.player.drawGods(target, ox2, oy2);

    // Draws bubbles for signs, world portals, etc.
    this.world.drawDialogs(target, ox2, oy2);
  }
}

//
// Screen
//

class Screen {
  cnv;
  ctx;
  dpr;
  loading = true;

  constructor(cnv, ctx, dpr){
    this.cnv = cnv;
    this.ctx = ctx;
    this.dpr = dpr;
  }

  startDraw(){
    this.ctx.loading = false;
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
    this.ctx.save();
    const scaleW = this.cnv.width / Config.bw;
    const scaleH = this.cnv.height / Config.bh;
    if (scaleW > scaleH){
      this.ctx.translate((this.cnv.width - Config.bw * scaleH) * 0.5, 0);
      this.ctx.scale(scaleH, scaleH);
    }
    else{
      this.ctx.translate(0, (this.cnv.height - Config.bh * scaleW) * 0.5);
      this.ctx.scale(scaleW, scaleW);
    }
    this.ctx.strokeStyle = '#f00';
    this.ctx.beginPath();
    this.ctx.rect(0, 0, Config.bw, Config.bh);
    this.ctx.clip();
  }

  endDraw(){
    this.ctx.restore();
  }

  copyPixels(bmd, src, dst){
    this.ctx.drawImage(
      bmd.img,
      src.x * bmd.scale,
      src.y * bmd.scale,
      src.w * bmd.scale,
      src.h * bmd.scale,
      dst.x, dst.y, dst.w, dst.h
    );
  }

  copyPixelsRotated(bmd, src, dst, deg){
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
      this.ctx.drawImage(
        bmd.img,
        src.x * bmd.scale,
        src.y * bmd.scale,
        src.w * bmd.scale,
        src.h * bmd.scale,
        dst.x, dst.y, dst.w, dst.h
      );
    }
  }

  fillRect(dst, color){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(dst.x, dst.y, dst.w, dst.h);
  }

  drawBanner(text){
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
    this.ctx.font = (20 * this.dpr) + 'px sans-serif';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(text, this.cnv.width / 2, this.cnv.height / 2);
  }

  drawLoading(current, total){
    this.drawBanner('Loading... (' + current + '/' + total + ')');
  }

  resize(w, h){
    this.cnv.width = Math.round(w * this.dpr);
    this.cnv.height = Math.round(h * this.dpr);
    this.cnv.style.width = `${w}px`;
    this.cnv.style.height = `${h}px`;
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (this.loading)
      this.drawBanner('Loading...');
  }
}

//
// Bootstrapping
//

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
    if (scaleW !== 1) throw new Error('TODO: themes not supported yet, bad image size for: ' + src);
    return {width: logicalWidth, height: logicalHeight, img, scale: scaleW};
  });
}

function loadBlob(src){
  return fetch(src).then(response => response.blob());
}

function loadZip(src){
  return loadBlob(src).then(blob => {
    return JSZip.loadAsync(blob);
  }).then(zip => {
    const promises = [];
    zip.forEach((name, info) => {
      if (info.dir)
        return;
      promises.push(zip.file(info.name).async('uint8array').then(data => (
        {name, data: new FlashByteArray(data)}
      )));
    });
    return Promise.all(promises);
  });
}

async function load(){
  const dpr = window.devicePixelRatio || 1;
  const cnv = document.createElement('canvas');
  document.body.appendChild(cnv);
  const ctx = cnv.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const screen = new Screen(cnv, ctx, dpr);
  const input = new Input();

  window.addEventListener('keydown', e => {
    e.preventDefault();
    e.stopPropagation();
    input.down(e.code);
  });

  window.addEventListener('keyup', e => {
    e.preventDefault();
    e.stopPropagation();
    input.up(e.code);
  });

  window.addEventListener('blur', () => {
    input.blur();
  });

  new ResizeObserver(entries => {
    for (const e of entries) {
      const c = e.contentRect;
      screen.resize(Math.round(c.width), Math.round(c.height));
    }
  }).observe(document.body);

  function loadImgMedia(w, h, src){
    return loadImg(w, h, '../media/' + src);
  }

  function LI(name, w, h, src){
    return [
      ItemManager,
      name,
      loadImgMedia(w, h, src)
    ];
  }

  const loads = [
    [CampaignPage, 'CampaignZip', loadZip('../media/campaigns/campaigns.zip')],
    LI('smileysBMD'              , 4888,  52, 'smileys.png'                ),
    LI('smileyPlatinumSpenderBMD',  312,  52, 'smileys_platinumspender.png'),
    LI('aurasBMD'                , 3392, 128, 'auras.png'                  ),
    LI('aurasOrnateBMD'          ,   64,  64, 'auras_ornate.png'           ),
    LI('aurasBubbleBMD'          ,  512,  64, 'auras_bubble.png'           ),
    LI('aurasGalaxyBMD'          ,  768,  64, 'auras_galaxy.png'           ),
    LI('shopBMD'                 , 4850,  73, 'shop.png'                   ),
    LI('shopWorldsBMD'           , 2130,  68, 'shop_worlds.png'            ),
    LI('shopAurasBMD'            , 2716,  92, 'shop_auras.png'             ),
    LI('favoriteBMD'             ,   15,  15, 'favorite.png'               ),
    LI('likeBMD'                 ,   16,  16, 'like.png'                   ),
    LI('allParticles'            ,   90,   6, 'particles.png'              ),
    LI('graphicsPreviewBG'       ,   48,  48, 'graphicsPreviewBG.png'      ),
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
    LI('blocksFireworksBMD'      ,  768, 384, 'blocks_fireworks.png'       ),
    LI('blocksGoldenEasterEggBMD',   48,  48, 'blocks_goldeneasteregg.png' ),
  ];
  screen.drawLoading(0, loads.length);
  let loadLeft = loads.length;
  const loadedValues = await Promise.all(
    loads.map(a =>
      a[2].then(r => {
        loadLeft--;
        screen.drawLoading(loads.length - loadLeft, loads.length);
        return r;
      })
    )
  );
  loads.forEach((key, i) => {
    key[0][key[1]] = loadedValues[i];
  });

  let lastTick = Date.now();
  let accumulatedTime = 0;
  function tick(){
    const now = Date.now();
    const dt = Math.min(15 * Config.physics_ms_per_tick, now - lastTick);
    lastTick = now;

    if (state){
      accumulatedTime += dt;
      while (accumulatedTime >= Config.physics_ms_per_tick){
        state.tick(input);
        input.endTick();
        accumulatedTime -= Config.physics_ms_per_tick;
      }
      state.enterFrame();
      // TODO: reset "just pressed" inputs Bl.exitFrame();
      state.exitFrame();
      screen.startDraw();
      state.draw(screen, 0, 0);
      screen.endDraw();
    }

    window.requestAnimationFrame(tick);
  }

  const ee = new EverybodyEdits();
  state = new PlayState(ee.defaultWorld);
  tick();
}

load();
