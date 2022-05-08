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

function rectIntersects(rect, x, y, w, h){
  return !(
    rect.x + rect.w < x ||
    x + w < rect.x ||
    rect.y + rect.h < y ||
    y + h < rect.y
  );
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
  static GLOWY_LINE_BLUE_SLOPE                   = 375;
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
  debugId;
  payVaultId;
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
    // validate types
    if (typeof id !== 'number')
      throw new Error('Invalid id');
    if (layer !== ItemLayer.FOREGROUND && layer !== ItemLayer.BACKGROUND &&
      layer !== ItemLayer.DECORATION && layer !== ItemLayer.ABOVE)
      throw new Error('Invalid layer');
    if (!bmd || !bmd.img)
      throw new Error('Invalid bmd');
    if (typeof offset !== 'number')
      throw new Error('Invalid artOffset');
    if (typeof payVaultId !== 'string')
      throw new Error('Invalid payVaultId');
    if (typeof description !== 'string')
      throw new Error('Invalid description');
    if (tab !== ItemTab.BLOCK &&
      tab !== ItemTab.ACTION &&
      tab !== ItemTab.DECORATIVE &&
      tab !== ItemTab.BACKGROUND)
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
    target.copyPixels(
      this.bmd,
      {x: this.offset * 16, y: 0, w: 16, h: 16},
      {x: ox, y: oy, w: 16, h: 16}
    );
    target.debugText(`${this.debugId}`, ox + 8, oy + 8);
  }

  drawWithNumber(target, ox, oy, num){
    target.copyPixels(
      this.bmd,
      {x: this.offset * 16, y: 0, w: 16, h: 16},
      {x: ox, y: oy, w: 16, h: 16}
    );
    if (num >= 1000){
      target.copyPixels(
        ItemManager.blockNumbersBMD,
        {x: 40, y: 0, w: 4, h: 5},
        {x: ox + 12, y: oy + 11, w: 4, h: 5}
      );
    }
    else{
      num = '' + num;
      for (let i = 0; i < num.length; i++){
        const n = num[i] - '0';
        target.copyPixels(
          ItemManager.blockNumbersBMD,
          {x: n * 4, y: 0, w: 4, h: 5},
          {x: ox + 12 - i * 5, y: oy + 11, w: 4, h: 5}
        );
      }
    }
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

  addGrass(id, layer, artOffset, miniMapColor, tags){
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

  addSecret(id, layer, base, description, shadow, artOffset, miniMapColor, tags){
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

  addMineral(id, artOffset, miniMapColor, tags){
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

  addXmas2011(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.FOREGROUND;
    const base = ItemManager.blocksBMD;
    const payVaultId = 'brickxmas2011';
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

  addKey(id, artOffset, miniMapColor, tags){
    const layer = ItemLayer.DECORATION;
    const base = ItemManager.blocksBMD;
    const payVaultId = '';
    const description = 'hit to activate key doors and gates for everyone for 6 seconds';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
    const shadow = true;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addCoin(id, layer, base, payVaultId, shadow, artOffset, miniMapColor, requiresAdmin, requiresPurchase, tags){
    const description = '';
    const tab = ItemTab.ACTION;
    const requiresOwnership = false;
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
    const miniMapColor = -1;
    const requiresOwnership = false;
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
    const miniMapColor = -1;
    const requiresOwnership = false;
    const shadow = false;
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
    const miniMapColor = -1;
    const requiresOwnership = false;
    const shadow = false;
    const requiresAdmin = false;
    const requiresPurchase = false;
    const selectorBG = 0;
    return this.createAndAddBrick(id, layer, base, payVaultId, description, tab, requiresOwnership,
      shadow, artOffset, miniMapColor, tags, requiresAdmin, requiresPurchase, selectorBG);
  }

  addScifi(id, layer, base, tab, artOffset, miniMapColor, tags){
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

  addCloud(id, layer, base, tab, artOffset, miniMapColor, tags){
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
      new ItemBrickPackage('grass', 'Grass Blocks', ['Environment', 'Nature', 'Standard', 'Soil', 'Ground', 'Dirt', 'Flora'])
        .addGrass(34, ItemLayer.DECORATION, 34, 0xff456313, ['Left', 'Soil'])
        .addGrass(35, ItemLayer.FOREGROUND, 35, 0xff456313, ['Middle', 'Soil'])
        .addGrass(36, ItemLayer.DECORATION, 36, 0xff456313, ['Right', 'Soil']),
      new ItemBrickPackage('generic', 'Generic Blocks', ['Special'])
        .addGeneric(  22,  22, 0xff895b12, ['Caution', 'Warning', 'Hazard', 'Stripes', 'Yellow', 'Black', 'Standard'])
        .addGeneric(1057, 235,         -1, ['Neutral', 'Yellow', 'Body', 'No face'])
        .addGeneric(  32,  32, 0xffcf9022, ['Face', 'Smiley', 'Yellow', 'Standard'])
        .addGeneric(1058, 236,         -1, ['Caution', 'Warning', 'Hazard', 'Stripes', 'Black', 'Yellow'])
        .addGeneric(  33,  33, 0xff000000, ['Black', 'Dark', 'Standard']),
      new ItemBrickPackage('factory', 'Factory Package')
        .addFactory(45, 45, 0xff72614b, ['X', 'Crate', 'Metal', 'Box', 'Wood'])
        .addFactory(46, 46, 0xff6e6b60, ['Concrete', 'Grey', 'Gray', 'Stone', 'Slate', 'X'])
        .addFactory(47, 47, 0xff8e734f, ['Wood', 'Tree', 'Wooden', 'House', 'Planks', 'Flooring', 'Parquet'])
        .addFactory(48, 48, 0xff7f4f2b, ['X', 'Crate', 'Wooden', 'Box', 'Wood', 'Storage'])
        .addFactory(49, 49, 0xff757575, ['Silver', 'Metal', 'Scales']),
      new ItemBrickPackage('secrets', 'Secret Bricks', ['Hidden', 'Invisible'])
        .addSecret( 44, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , 'completely black, makes minimap invisible', true ,  44, 0x01000000, ['Black', 'Pure', 'Old', 'Solid'])
        .addSecret( 50, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ''                                         , true , 139, 0x00000000, ['Appear'])
        .addSecret(243, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ''                                         , true , 140, 0x01000000, ['Blank', 'Hidden'])
        .addSecret(136, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ''                                         , false, 141, 0x00000000, ['Disappear']),
      new ItemBrickPackage('glass', 'Glass bricks', ['Bright', 'Light', 'Shine', 'Polish', 'Neon'])
        .addGlass(51, 51, 0xfff89299, ['Red', 'Light red', 'Pink', 'Ruby'])
        .addGlass(58, 58, 0xfff6ba94, ['Orange', 'Light orange', 'Topaz'])
        .addGlass(57, 57, 0xfff8da8c, ['Yellow', 'Light yellow', 'Jasmine'])
        .addGlass(56, 56, 0xff92fbaa, ['Green', 'Light green', 'Emerald'])
        .addGlass(55, 55, 0xff95dcf6, ['Cyan', 'Light blue', 'Diamond'])
        .addGlass(54, 54, 0xff7e99f6, ['Blue', 'Sapphire'])
        .addGlass(53, 53, 0xffa789f6, ['Purple', 'Violet', 'Amethyst'])
        .addGlass(52, 52, 0xffe98bf6, ['Pink', 'Magenta', 'Purple', 'Quartz']),
      new ItemBrickPackage('minerals', 'Minerals', ['Neon', 'Pure', 'Bright'])
        .addMineral(70, 70, 0xffee0000, ['Red', 'Ruby'])
        .addMineral(76, 76, 0xffee7700, ['Orange', 'Topaz'])
        .addMineral(75, 75, 0xffeeee00, ['Yellow', 'Jasmine'])
        .addMineral(74, 74, 0xff00ee00, ['Green', 'Lime', 'Emerald', 'Peridot'])
        .addMineral(73, 73, 0xff00eeee, ['Cyan', 'Light blue', 'Aquamarine', 'Turquoise'])
        .addMineral(72, 72, 0xff0000ee, ['Blue', 'Indigo', 'Sapphire', 'Lapis'])
        .addMineral(71, 71, 0xffee00ee, ['Pink', 'Magenta', 'Purple', 'Amethyst']),
      new ItemBrickPackage('christmas 2011', 'Christmas 2011 bricks', ['Holiday', 'Wrapping Paper', 'Gift', 'Present'])
        .addXmas2011(78, 78, -1, ['Yellow'])
        .addXmas2011(79, 79, -1, ['White'])
        .addXmas2011(80, 80, -1, ['Red'])
        .addXmas2011(81, 81, -1, ['Blue'])
        .addXmas2011(82, 82, -1, ['Green']),
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
        .addGravity( 460, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 466, 0x00000000, ['Slow', 'Dot', 'Climbable', 'Physics', 'Invisible']),
      new ItemBrickPackage('keys', 'Key Blocks', ['Key', 'Lock', 'Button', 'Action', 'Standard'])
        .addKey(  6,   6, 0xff2c1a1a, ['Red', 'Key', 'Magenta'])
        .addKey(  7,   7, 0xff1a2c1a, ['Green', 'Key'])
        .addKey(  8,   8, 0xff1a1a2c, ['Blue', 'Key'])
        .addKey(408, 189, 0xff0c2d3d, ['Cyan', 'Teal'])
        .addKey(409, 190, 0xff400c40, ['Pink', 'Violet', 'Purple'])
        .addKey(410, 191, 0xff2c330a, ['Yellow', 'Key']),
      // TODO: gates
      // TODO: doors
      new ItemBrickPackage('coins', 'Coin Blocks')
        .addCoin(100, ItemLayer.ABOVE     , ItemManager.specialBlocksBMD, ''      , false,   0, 0x00000000, false, false, ['Gold', 'G-Coins', 'Yellow', 'Money', 'Primary', 'Collect', 'Magic', 'Value', 'Standard'])
        .addCoin(101, ItemLayer.ABOVE     , ItemManager.specialBlocksBMD, ''      , false,  13, 0x00000000, false, false, ['Blue', 'B-Coin', 'Secondary', 'Money', 'Optional', 'Collect', 'Magic', 'Value', 'Standard'])
        .addCoin(110, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 'hidden', false,  26, 0x00000000, true , true , [])
        .addCoin(111, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, 'hidden', false,  39, 0x00000000, true , true , [])
        .addCoin(165, ItemLayer.DECORATION, ItemManager.blocksBMD       , ''      , false, 139, 0xffb88e15, false, false, ['Gate', 'Yellow', 'Gold', 'Primary', 'Lock'])
        .addCoin( 43, ItemLayer.DECORATION, ItemManager.blocksBMD       , ''      , true ,  43, 0xffb88e15, false, false, ['Door', 'Yellow', 'Gold', 'Primary', 'Lock'])
        .addCoin(214, ItemLayer.DECORATION, ItemManager.blocksBMD       , ''      , true , 186, 0xff1c60f4, false, false, ['Gate', 'Blue', 'Optional', 'Lock'])
        .addCoin(213, ItemLayer.DECORATION, ItemManager.blocksBMD       , ''      , true , 185, 0xff1c60f4, false, false, ['Door', 'Blue', 'Optional', 'Lock']),
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
      new ItemBrickPackage('dark', 'Solid Dark Backgrounds', ['Solid'])
        .addDark(719, false, 213, ['White', 'Light'])
        .addDark(520, false,  20, ['Gray', 'Grey', 'Shadow'])
        .addDark(652, true , 146, ['Black', 'Dark', 'Shadow'])
        .addDark(523, false,  23, ['Red'])
        .addDark(651, true , 145, ['Orange'])
        .addDark(524, false,  24, ['Yellow', 'Lime'])
        .addDark(525, false,  25, ['Green'])
        .addDark(526, false,  26, ['Cyan', 'Teal', 'Turquoise', 'Blue'])
        .addDark(521, false,  21, ['Blue'])
        .addDark(522, false,  22, ['Purple', 'Magenta', 'Pink', 'Violet']),
      // TODO: normal
      new ItemBrickPackage('pastel', 'Pretty Pastel Backgrounds', ['Solid', 'Bright'])
        .addPastel(532,  32, ['Pink', 'Red', 'Magenta'])
        .addPastel(676, 170, ['Orange'])
        .addPastel(527,  27, ['Yellow'])
        .addPastel(529,  29, ['Yellow', 'Green', 'Lime'])
        .addPastel(528,  28, ['Green'])
        .addPastel(530,  30, ['Cyan', 'Light Blue', 'Sky'])
        .addPastel(531,  31, ['Blue', 'Sky'])
        .addPastel(677, 171, ['Purple']),
      new ItemBrickPackage('canvas', 'Canvas Backgrounds', ['Rough', 'Textured'])
        .addCanvas(538,  38, ['Gray', 'Grey'])
        .addCanvas(671, 165, ['Red'])
        .addCanvas(533,  33, ['Orange'])
        .addCanvas(534,  34, ['Beige', 'Brown', 'Tan'])
        .addCanvas(535,  35, ['Yellow'])
        .addCanvas(536,  36, ['Green'])
        .addCanvas(537,  37, ['Cyan', 'Light Blue', 'Water'])
        .addCanvas(606, 106, ['Blue'])
        .addCanvas(672, 166, ['Purple', 'Violet']),
      // TODO: carnival
      // TODO: candy
      // TODO: summer 2011
      // TODO: halloween 2011
      // TODO: christmas 2011
      new ItemBrickPackage('sci-fi', 'Sci-Fi Package', ['Future', 'Science Fiction', 'Alien', 'UFO'])
        .addScifi(  84, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     ,  84,         -1, ['Red', 'Screen', 'Panel'])
        .addScifi(  85, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     ,  85,         -1, ['Blue', 'Screen', 'Panel'])
        .addScifi(1150, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 308,         -1, ['Green', 'Screen', 'Panel'])
        .addScifi(1151, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 309,         -1, ['Yellow', 'Screen', 'Panel'])
        .addScifi(1162, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 317,         -1, ['Magenta','Pink','Purple','Screen','Panel'])
        .addScifi(1163, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , 318,         -1, ['Cyan','Screen','Panel'])
        .addScifi(  86, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     ,  86,         -1, ['Metal', 'Gray', 'Bumpy', 'Grey'])
        .addScifi(  87, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     ,  87, 0xffffffff, ['Metal', 'White', 'Grey', 'Gray'])
        .addScifi(  88, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     ,  88,         -1, ['Brown', 'Camouflauge', 'Leopard', 'Carpet'])
        .addScifi(  89, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     ,  89,         -1, ['Platform', 'Red', 'One-way', 'One way'])
        .addScifi(  90, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     ,  90,         -1, ['Platform', 'Blue', 'One-way', 'One way'])
        .addScifi(  91, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     ,  91,         -1, ['Platform', 'Green', 'One-way', 'One way'])
        .addScifi(1051, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , 234,         -1, ['Platform', 'Yellow', 'One-way', 'One way'])
        .addScifi(1164, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , 319,         -1, ['Platform','Magenta','Pink','Purple','One-way','One way'])
        .addScifi(1165, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , 320,         -1, ['Platform','Cyan','One-way','One way'])
        .addScifi( 375, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 177, 0x00000000, ['Morphable', 'Laser', 'Neon', 'Blue', 'Flourescent', 'Corner'])
        .addScifi( 376, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 181, 0x00000000, ['Morphable', 'Laser', 'Neon', 'Blue', 'Flourescent', 'Middle'])
        .addScifi( 379, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 169, 0x00000000, ['Morphable', 'Laser', 'Neon', 'Green', 'Flourescent', 'Corner'])
        .addScifi( 380, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 173, 0x00000000, ['Morphable', 'Laser', 'Neon', 'Green', 'Flourescent', 'Middle'])
        .addScifi( 377, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 161, 0x00000000, ['Morphable', 'Laser', 'Neon', 'Yellow', 'Orange', 'Flourescent', 'Corner'])
        .addScifi( 378, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 165, 0x00000000, ['Morphable', 'Laser', 'Neon', 'Yellow', 'Orange', 'Flourescent', 'Middle'])
        .addScifi( 438, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 409, 0x00000000, ['Morphable', 'Laser', 'Neon', 'Red', 'Pink', 'Flourescent', 'Corner'])
        .addScifi( 439, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, 413, 0x00000000, ['Morphable', 'Laser', 'Neon', 'Red', 'Pink', 'Flourescent', 'Middle'])
        .addScifi( 637, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, 131, 0xff737d81, ['Gray', 'Outline', 'Grey']),
      new ItemBrickPackage('prison', 'Prison', ['Cell', 'Jail'])
        .addPrison(261, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, false, 133, 0x00000000, ['Bars', 'Metal'])
        .addPrison( 92, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , true ,  92,         -1, ['Wall', 'Brick', 'Grey', 'Gray', 'House'])
        .addPrison(550, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true ,  50,         -1, ['Wall', 'Brick', 'Background', 'Grey', 'Gray', 'House'])
        .addPrison(551, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true ,  51,         -1, ['Window', 'Light', 'Orange', 'Brick'])
        .addPrison(552, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true ,  52,         -1, ['Window', 'Light', 'Blue', 'Brick'])
        .addPrison(553, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD  , ItemTab.BACKGROUND, true ,  53,         -1, ['Window', 'Dark', 'Vent', 'Brick', 'Grey', 'Gray', 'Drain']),
      // TODO: windows
      // TODO: pirate
      // TODO: stone
      // TODO: dojo
      // TODO: wild west
      // TODO: plastic
      // TODO: water
      // TODO: sand
      // TODO: summer 2012
      new ItemBrickPackage('cloud', 'Cloud Pack', ['Sky', 'Environment'])
        .addCloud( 143, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 120,         -1, ['Center', 'Middle', 'White'])
        .addCloud( 311, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 182, 0x00000000, ['Top', 'Side', 'White'])
        .addCloud( 312, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 183, 0x00000000, ['Bottom', 'Side', 'White'])
        .addCloud( 313, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 184, 0x00000000, ['Left', 'Side', 'White'])
        .addCloud( 314, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 185, 0x00000000, ['Right', 'Side', 'White'])
        .addCloud( 315, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 186, 0x00000000, ['Top right', 'Corner', 'White'])
        .addCloud( 316, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 187, 0x00000000, ['Top left', 'Corner', 'White'])
        .addCloud( 317, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 188, 0x00000000, ['Bottom left', 'Corner', 'White'])
        .addCloud( 318, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 189, 0x00000000, ['Bottom right', 'Corner', 'White'])
        .addCloud(1126, ItemLayer.FOREGROUND, ItemManager.blocksBMD    , ItemTab.BLOCK     , 287,         -1, ['Center', 'Middle', 'Dark', 'Grey', 'Gray', 'Storm'])
        .addCloud(1523, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 323, 0x00000000, ['Top', 'Side', 'Dark', 'Grey', 'Gray', 'Storm'])
        .addCloud(1524, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 324, 0x00000000, ['Bottom', 'Side', 'Dark', 'Grey', 'Gray', 'Storm'])
        .addCloud(1525, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 325, 0x00000000, ['Left', 'Side', 'Dark', 'Grey', 'Gray', 'Storm'])
        .addCloud(1526, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 326, 0x00000000, ['Right', 'Side', 'Dark', 'Grey', 'Gray', 'Storm'])
        .addCloud(1527, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 327, 0x00000000, ['Top right', 'Corner', 'Dark', 'Grey', 'Gray', 'Storm'])
        .addCloud(1528, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 328, 0x00000000, ['Top left', 'Corner', 'Dark', 'Grey', 'Gray', 'Storm'])
        .addCloud(1529, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 329, 0x00000000, ['Bottom left', 'Corner', 'Dark', 'Grey', 'Gray', 'Storm'])
        .addCloud(1530, ItemLayer.DECORATION, ItemManager.decoBlocksBMD, ItemTab.DECORATIVE, 330, 0x00000000, ['Bottom right', 'Corner', 'Dark', 'Grey', 'Gray', 'Storm']),
      // TODO: industrial
      // TODO: clay
      new ItemBrickPackage('medieval', 'Medieval', ['Castle'])
        .addMedieval(158, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 132, 0x00000000, ['Platform', 'Stone'])
        .addMedieval(159, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 133,         -1, ['Brick', 'Stone'])
        .addMedieval(160, ItemLayer.FOREGROUND, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 134,         -1, ['Brick', 'Arrow slit', 'Stone', 'Window'])
        .addMedieval(599, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false,  99,         -1, ['Anvil', 'Blacksmith'])
        .addMedieval(325, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 196, 0x00000000, ['Brick', 'Stone', 'House'])
        .addMedieval(326, ItemLayer.ABOVE     , ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 197,         -1, ['Top', 'Display', 'Stone'])
        .addMedieval(162, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 136, 0x00000000, ['Parapet', 'Stone'])
        .addMedieval(163, ItemLayer.DECORATION, ItemManager.blocksBMD       , ItemTab.BLOCK     , true , 137, 0x00000000, ['Barrel', 'Keg'])
        .addMedieval(437, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, false, 279, 0x00000000, ['Window', 'Wood', 'House'])
        .addMedieval(600, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false, 100,         -1, ['Wood', 'Planks', 'Vertical', 'Brown', 'House'])
        .addMedieval(590, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false,  90,         -1, ['Straw', 'Hay', 'Roof', 'House'])
        .addMedieval(591, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false,  91,         -1, ['Roof', 'Shingles', 'Scales', 'Red', 'House'])
        .addMedieval(592, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false,  92,         -1, ['Roof', 'Shingles', 'Scales', 'Green', 'House'])
        .addMedieval(556, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false,  56,         -1, ['Roof', 'Shingles', 'Scales', 'Brown', 'House'])
        .addMedieval(593, ItemLayer.BACKGROUND, ItemManager.bgBlocksBMD     , ItemTab.BACKGROUND, false,  93,         -1, ['Gray', 'Dry wall', 'Stucco', 'Grey', 'House', 'Beige'])
        .addMedieval(440, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, false, 417, 0x00000000, ['Scaffolding', 'Wood', 'Morphable', 'Fence', 'House', 'Design'])
        .addMedieval(330, ItemLayer.DECORATION, ItemManager.decoBlocksBMD   , ItemTab.DECORATIVE, true , 201, 0x00000000, ['Shield', 'Warrior', 'Weapon'])
        .addMedieval(275, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 365, 0x00000000, ['Axe', 'Morphable', 'Warrior', 'Weapon'])
        .addMedieval(329, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 377, 0x00000000, ['Sword', 'Morphable', 'Warrior', 'Weapon'])
        .addMedieval(273, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 373, 0x00000000, ['Shield', 'Morphable', 'Blue', 'Green', 'Yellow', 'Red', 'Circle'])
        .addMedieval(328, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 405, 0x00000000, ['Shield', 'Morphable', 'Blue', 'Green', 'Yellow', 'Red'])
        .addMedieval(327, ItemLayer.DECORATION, ItemManager.specialBlocksBMD, ItemTab.DECORATIVE, true , 369, 0x00000000, ['Banner', 'Morphable', 'Blue', 'Green', 'Yellow', 'Red', 'Flag']),
      // TODO: pipes
      // TODO: outer space
      // TODO: desert
      // TODO: neon
      // TODO: monster
      // TODO: fog
      // TODO: halloween 2012
      new ItemBrickPackage('checker', 'Checker Blocks', ['Checkered'])
        .addChecker(1091, 263, 0xffbfbfbf, ['White', 'Light'])
        .addChecker( 186, 161, 0xff6b6b6b, ['Gray', 'Grey'])
        .addChecker(1026, 213,         -1, ['Black', 'Dark', 'Gray', 'Grey'])
        .addChecker( 189, 164, 0xffa8193f, ['Red', 'Magenta'])
        .addChecker(1025, 212,         -1, ['Orange'])
        .addChecker( 190, 165, 0xffabb333, ['Yellow', 'Lime'])
        .addChecker( 191, 166, 0xff45a337, ['Green'])
        .addChecker( 192, 167, 0xff3cb2ac, ['Cyan', 'Blue'])
        .addChecker( 187, 162, 0xff2f5391, ['Blue'])
        .addChecker( 188, 163, 0xff803d91, ['Purple', 'Magenta', 'Pink', 'Violet']),
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
      ItemManager.bricks[i] = ItemManager.bricks[i] || ItemManager.bricks[0].copy(i);
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

  enterFrame(){}
  exitFrame(){}
  tick(input){}

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

  drawPoint(target, point, frame){
    this.frame = frame || 0;
    if (this.shadow){
      throw new Error('TODO: Draw sprite shadow');
      target.copyPixelsRotated(
        this.sprImageShadow,
        this.shadowRect,
        {x: point.x, y: point.y, w: this.width + 2, h: this.height + 2},
        this.rotatedDeg
      );
    }
    else{
      target.copyPixelsRotated(
        this.bmd,
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
  player;
  lookup;
  spawnPoints = [];
  depth = 0;
  gravity;
  realMap;
  background;
  decoration;
  foreground;
  above;
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

  getCoinCount(){
    let coins = 0;
    let bcoins = 0;
    for (const layer of this.realMap){
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

  setTileComplex(layer, x, y, type, properties){
    if (layer == 0)
      this.lookup.deleteLookup(x, y);

    if (ItemId.isBlockRotateable(type) || ItemId.isNonRotatableHalfBlock(type)){
      if (properties && properties.rotation != null)
        this.lookup.setInt(x, y, properties.rotation);
    }

    // removing save-breaking symbols
    if (properties && properties.text != null)
      properties.text = properties.text.replace(/᎙/g, '');
    if (properties && properties.messages != null){
      for (let i = 0; i < properties.messages.length; i++)
        properties.messages[i] = properties.messages[i].replace(/᎙/g, '');
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
      case 83:
      case 77:
      case 1520:
        this.lookup.setInt(x, y, properties.rotation);
        this.lookup.setBlink(x, y, 30);
        break;
      case 411:
      case 412:
      case 413:
      case 414:
      case ItemId.SLOW_DOT_INVISIBLE:
      case 1519:
      case ItemId.FIREWORKS:
        this.lookup.setBlink(x, y, 0);
        break;
      case 1000:
        this.lookup.setLabel(x, y, properties.text, properties.text_color, properties.wraplength);
        /* TODO: setTileComplex label
        var t:BlText = new BlText(Global.default_label_size,lookup.getLabel(x, y).WrapLength,uint("0x"+properties.text_color.substr(1,properties.text_color.length)),"left","system",true);
        t.text = properties.text;
        t.x = x * size;
        t.y = y * size;
        labelcontainer.add( t );
        */
        break;
    }

    /*
    if (ItemId.isNPC(type) && properties.name != null && properties.messages) {
      if (player.currentNpc && lookup.getNpc(x, y).equals(player.currentNpc)) {
        lookup.setNpc(x, y, properties.name, properties.messages, ItemManager.getNpcById(type));
        player.currentNpc = lookup.getNpc(x, y);
        player.currentNpc.reset();
      } else  lookup.setNpc(x, y, properties.name, properties.messages, ItemManager.getNpcById(type));
    }
    */

    // Making sure labels get updated when a block with id 1000 is set to 0.
    /*
    if (type != 1000 && layer == 0) {
      for (var j:int=0;j<labelcontainer.children.length;j++) {
        var txt:BlText = labelcontainer.children[j] as BlText;
        if (txt.x == (x * size) && txt.y == (y * size)) {
          labelcontainer.remove(txt);
          break;
        }
      }
    }
    */

    this.setTile(layer, x, y, type);
  }

  setTile(layer, x, y, type){
    const old = this.realMap[layer][y][x];

    /* TODO: setTile for labels
    if (old === 1000){
      var ch:Vector.<BlObject> = labelcontainer.children;
      for(var a:int = 0; a < ch.length; a++) {
        var cc:BlObject = ch[a];
        if (cc.x == x * size && cc.y == y * size) {
          labelcontainer.remove(cc);
          break;
        }
      }
    }
    */

    this.setMagicTile(layer, x, y, type);

    if (this.realMap[layer] && this.realMap[layer][y])
      this.realMap[layer][y][x] = type;

    // now collected
    if (type == ItemId.COLLECTEDCOIN && old == ItemId.COIN)
      return;
    if (type == ItemId.COLLECTEDBLUECOIN && old == ItemId.BLUECOIN)
      return;
    // was collected
    if (type == ItemId.COIN && old == ItemId.COLLECTEDCOIN)
      return;
    if (type == ItemId.BLUECOIN && old == ItemId.COLLECTEDBLUECOIN)
      return;

    // TOOD: (Global.base.state as PlayState).unsavedChanges = true;
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

  getTile(layer, x, y){
    if(layer < 0 || layer >= this.depth || x < 0 || x >= this.width || y < 0 || y >= this.height)
      return 0;
    return this.realMap[layer][y][x]
  }

  tick(input){
    this.aniOffset += 0.3;
    this.overlapCells = [];
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
      const map = this.realMap[0][cy];
      for (let cx = ox; cx < ow; cx++){
        this.overlapCells.push({cx, cy});
        if (!map)
          continue;
        const val = map[cx];
        if (!ItemId.isSolid(val)) {
          if (val === 243)
            this.lookup.setSecret(cx, cy, true);
          continue;
        }
        if (!rectIntersects(rect, cx * 16, cy * 16, 16, 16))
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
              ) && rot == 2
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
              ) && rot == 3
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
            if (!rectIntersects(rect, cx * 16, cy * 16 + 8, 16, 8))
              continue;
          }
          else if (rot === 2){
            if (!rectIntersects(rect, cx * 16, cy * 16, 8, 16))
              continue;
          }
          else if (rot === 3){
            if (!rectIntersects(rect, cx * 16, cy * 16, 16, 8))
              continue;
          }
          else if (rot === 0){
            if (!rectIntersects(rect, cx * 16 + 8, cy * 16, 8, 16))
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
          case 23: if (this.getKey('red')) continue; break;
          case 24: if (this.getKey('green')) continue; break;
          case 25: if (this.getKey('blue')) continue; break;
          case 26: if (!this.getKey('red')) continue; break;
          case 27: if (!this.getKey('green')) continue; break;
          case 28: if (!this.getKey('blue')) continue; break;

          case 1005: if (this.getKey('cyan')) continue; break;
          case 1006: if (this.getKey('magenta')) continue; break;
          case 1007: if (this.getKey('yellow')) continue; break;
          case 1008: if (!this.getKey('cyan')) continue; break;
          case 1009: if (!this.getKey('magenta')) continue; break;
          case 1010: if (!this.getKey('yellow')) continue; break;

          // TODO: different interactive blocks
          /*
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
          */
          case ItemId.COINDOOR:
            if (this.lookup.getInt(cx, cy) <= pl.coins)
              continue;
            break;
          case ItemId.BLUECOINDOOR:
            if (this.lookup.getInt(cx, cy) <= pl.bcoins)
              continue;
            break;
          /*
          case ItemId.DEATH_DOOR:   if (lookup.getInt(cx, cy) <= pl.deaths) continue; break;
          case ItemId.COINGATE:     if (lookup.getInt(cx, cy) >  /*pl.coins* / (pl.isme ? showCoinGate : pl.coins))  continue; break;
          case ItemId.BLUECOINGATE:   if (lookup.getInt(cx, cy) >  /*pl.bcoins* / (pl.isme ? showBlueCoinGate : pl.bcoins)) continue; break;
          case ItemId.DEATH_GATE:   if (lookup.getInt(cx, cy) >  /*pl.deaths* / (pl.isme ? showDeathGate : pl.deaths)) continue; break;

          case ItemId.TEAM_DOOR: if (pl.team == lookup.getInt(cx, cy)) continue; break;
          case ItemId.TEAM_GATE: if (pl.team != lookup.getInt(cx, cy)) continue; break;

          case ItemId.ZOMBIE_GATE: if (!pl.zombie) continue; break;
          case ItemId.ZOMBIE_DOOR: if ( pl.zombie) continue; break;
          */
          case 50:
            this.lookup.setSecret(cx, cy, true);
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
    this.onDraw(target, ox, oy, false);
  }

  getDrawBoundary(target, ox, oy, full){
    const size = 16;
    const width_ = full ? this.width * size : target.boundary.w / size;
    const height_ = full ? this.height * size : target.boundary.h / size;

    const bx = ox - target.boundary.x;
    const by = oy - target.boundary.y;
    const startX = Math.max(0, Math.floor(-bx / size - 1));
    const startY = Math.max(0, Math.floor(-by / size - 1));
    const endX = Math.min(this.width, startX + width_ + 2);
    const endY = Math.min(this.height, startY + height_ + 2);

    return {startX, startY, endX, endY};
  }

  onDraw(target, ox, oy, full){
    const {startX, startY, endX, endY} = this.getDrawBoundary(target, ox, oy, full);
    const point = {x: 0, y: 0};

    // Seperate loop to perserve shadows
    for (let cy = startY; cy < endY; cy++){
      const bgrow = this.background[cy]
      const fgrow = this.foreground[cy]
      point.y = (cy << 4) + oy;
      for(let cx = startX; cx < endX; cx++){
        point.x = (cx << 4) + ox;

        if (fgrow[cx] !== 0)
          continue;

        /*
        TODO: customBgColor
        if(bgrow[cx] === 0 && customBgColor){
          //target.copyPixels(ItemManager.bmdBricks[614],rect16x16,point);
          target.fillRect(new Rectangle(point.x,point.y,16,16), bgColor);
        }else
        */
          ItemManager.bricks[bgrow[cx]].draw(target, point.x, point.y);
      }
    }

    // TODO: draw imageBlocks
    // TODO: advance ice

    for (let cy = startY; cy < endY; cy++){
      const fgrow = this.foreground[cy];
      const drow = this.decoration[cy];
      point.y = (cy << 4) + oy;
      for (let cx = startX; cx < endX; cx++){
        point.x = (cx << 4) + ox;
        let type = fgrow[cx];

        if (type !== 0){
          ItemManager.bricks[type].draw(target, point.x, point.y);
          continue;
        }

        type = drow[cx];
        if (type === 0)
          continue;

        /*
        // render rotateables, note spikes and portals are not in this list currently
        if (ItemId.isBlockRotateable(type) && !ItemId.isNonRotatableHalfBlock(type) && type != ItemId.HALLOWEEN_2016_EYES && type != ItemId.FIREWORKS && type != ItemId.DUNGEON_TORCH) {
          var rot:int = lookup.getInt(cx, cy);
          var rotSprite:BlSprite = ItemManager.getRotateableSprite(type);
          rotSprite.drawPoint(target, point, rot);
          continue;
        }
        */

        switch (type){
          case ItemId.CHECKPOINT:
            continue;
          /*
          //Red doors
          case 23:
          case 26: {
            if (getKey("red")) {
              ItemManager.sprDoors.drawPoint(target, point, type == 23? 0 : 3);
              continue;
            }
            break;
          }

          //Green doors
          case 24:
          case 27: {
            if (getKey("green")) {
              ItemManager.sprDoors.drawPoint(target, point, type == 24? 1 : 4);
              continue;
            }
            break;
          }

          //Blue doors
          case 25:
          case 28: {
            if (getKey("blue")) {
              ItemManager.sprDoors.drawPoint(target, point, type == 25? 2 : 5);
              continue;
            }
            break;
          }

          //Cyan doors
          case 1005:
          case 1008: {
            if (getKey("cyan")) {
              ItemManager.sprDoors.drawPoint(target, point, type == 1005? 14 : 17);
              continue;
            }
            break;
          }

          //Magenta doors
          case 1006:
          case 1009: {
            if (getKey("magenta")) {
              ItemManager.sprDoors.drawPoint(target, point, type == 1006? 15 : 18);
              continue;
            }
            break;
          }

          //Yellow doors
          case 1007:
          case 1010: {
            if (getKey("yellow")) {
              ItemManager.sprDoors.drawPoint(target, point, type == 1007? 16 : 19);
              continue;
            }
            break;
          }

          // Death doors/gates
          case ItemId.DEATH_DOOR:{
            if (lookup.getInt(cx, cy) <= player.deaths) {
              ItemManager.sprDoors.drawPoint(target, point, 20)
            } else {
              ItemManager.sprDeathDoor.drawPoint(target, point, lookup.getInt(cx, cy) - player.deaths)
            }
            continue;
          }
          case ItemId.DEATH_GATE:{
            if (lookup.getInt(cx, cy) <= player.deaths) {
              ItemManager.sprDoors.drawPoint(target, point, 21)
            } else {
              ItemManager.sprDeathGate.drawPoint(target, point, lookup.getInt(cx, cy) - player.deaths)
            }
            continue;
          }

          //Purple switch, doors and gates
          case ItemId.DOOR_PURPLE:{
            if (player.switches[lookup.getInt(cx, cy)]) {
              ItemManager.sprPurpleGates.drawPoint(target, point, lookup.getInt(cx, cy))
            } else {
              ItemManager.sprPurpleDoors.drawPoint(target, point, lookup.getInt(cx, cy))
            }
            continue;
          }
          case ItemId.GATE_PURPLE:{
            if (player.switches[lookup.getInt(cx, cy)]) {
              ItemManager.sprPurpleDoors.drawPoint(target, point, lookup.getInt(cx, cy))
            } else {
              ItemManager.sprPurpleGates.drawPoint(target, point, lookup.getInt(cx, cy))
            }
            continue;
          }

          case ItemId.DOOR_ORANGE:{
            if (orangeSwitches[lookup.getInt(cx, cy)]) {
              ItemManager.sprOrangeGates.drawPoint(target, point, lookup.getInt(cx, cy))
            } else {
              ItemManager.sprOrangeDoors.drawPoint(target, point, lookup.getInt(cx, cy))
            }
            continue;
          }
          case ItemId.GATE_ORANGE:{
            if (orangeSwitches[lookup.getInt(cx, cy)]) {
              ItemManager.sprOrangeDoors.drawPoint(target, point, lookup.getInt(cx, cy))
            } else {
              ItemManager.sprOrangeGates.drawPoint(target, point, lookup.getInt(cx, cy))
            }
            continue;
          }

          case ItemId.DOOR_GOLD:{
            if(player.wearsGoldSmiley){
              ItemManager.sprDoors.drawPoint(target, point, 10)
              continue;
            }
            break;
          }
          case ItemId.GATE_GOLD:{
            if(player.wearsGoldSmiley){
              ItemManager.sprDoors.drawPoint(target, point, 11)
              continue;
            }
            break;
          }

          case ItemId.SWITCH_PURPLE:{
            if (player.switches[lookup.getInt(cx, cy)]) {
              ItemManager.sprSwitchDOWN.drawPoint(target, point, lookup.getInt(cx, cy))
            } else {
              ItemManager.sprSwitchUP.drawPoint(target, point,lookup.getInt(cx, cy))
            }
            continue;
          }

          case ItemId.SWITCH_ORANGE:{
            if (orangeSwitches[lookup.getInt(cx, cy)]) {
              ItemManager.sprOrangeSwitchDOWN.drawPoint(target, point,lookup.getInt(cx, cy))
            } else {
              ItemManager.sprOrangeSwitchUP.drawPoint(target, point,lookup.getInt(cx, cy))
            }
            continue;
          }

          case ItemId.RESET_PURPLE:{
            ItemManager.sprSwitchRESET.drawPoint(target, point, lookup.getInt(cx, cy))
            continue;
          }

          case ItemId.RESET_ORANGE:{
            ItemManager.sprOrangeSwitchRESET.drawPoint(target, point,lookup.getInt(cx, cy))
            continue;
          }

          //Time doors
          case ItemId.TIMEDOOR:{
            ItemManager.sprDoorsTime.drawPoint(target, point, Math.min( (((offset-hideTimedoorOffset)/30)>>0) , 4) + (timedoorState? 5: 0))
            continue;
          }
          case ItemId.TIMEGATE:{
            ItemManager.sprDoorsTime.drawPoint(target, point,Math.min( (((offset-hideTimedoorOffset)/30)>>0) , 4) + (timedoorState? 0: 5))
            continue;
          }

          // Invisible arrow blink
          case 411:
          case 412:
          case 413:
          case 414: {
            if (!player.isFlying && !full) {
              if (lookup.isBlink(cx, cy)) {
                if (lookup.getBlink(cx, cy) >= 0) {
                  var id:int = type - 411;
                  if (lookup.getBlink(cx, cy) == 0) {
                    lookup.setBlink(cx, cy, id * 5);
                  }
                  var frame:int = lookup.getBlink(cx, cy);
                  ItemManager.sprInvGravityBlink.drawPoint(target, point, frame);

                  if (lookup.updateBlink(cx, cy, 1/10) >= 5 + id * 5) {
                    lookup.deleteBlink(cx, cy);
                  }
                } else {
                  lookup.updateBlink(cx, cy, 1);
                  break;
                }
                continue;
              } else {
                continue;
              }
            }
            break;
          }

          case 1519: {
            if (!player.isFlying && !full) {
              if (lookup.isBlink(cx, cy)) {
                if (lookup.getBlink(cx, cy) >= 0) {
                  ItemManager.sprInvGravityDownBlink.drawPoint(target, point, lookup.getBlink(cx, cy));
                  if (lookup.updateBlink(cx, cy, 1/10) >= 5) {
                    lookup.deleteBlink(cx, cy);
                  }
                } else {
                  lookup.updateBlink(cx, cy, 1);
                  break;
                }
                continue;
              } else {
                continue;
              }
            }
            break;
          }

          case ItemId.SLOW_DOT_INVISIBLE: {
            if (!player.isFlying && !full) {
              if (lookup.isBlink(cx, cy)) {
                if (lookup.getBlink(cx, cy) >= 0) {
                  ItemManager.sprInvDotBlink.drawPoint(target, point, lookup.getBlink(cx, cy));
                  if (lookup.updateBlink(cx, cy, 1/10) >= 5) {
                    lookup.deleteBlink(cx, cy);
                  }
                } else {
                  lookup.updateBlink(cx, cy, 1);
                  break;
                }
                continue;
              } else {
                continue;
              }
            }
            break;
          }

          case ItemId.CROWNDOOR:{
            if (player.collideWithCrownDoorGate) {
              ItemManager.sprDoors.drawPoint(target, point, 40);
              continue;
            }
            break;
          }

          case ItemId.CROWNGATE:{
            if (player.collideWithCrownDoorGate) {
              ItemManager.sprDoors.drawPoint(target, point, 41);
              continue;
            }
            break;
          }

          case ItemId.SILVERCROWNDOOR:{
            if (player.collideWithSilverCrownDoorGate) {
              ItemManager.sprDoors.drawPoint(target, point, 42);
              continue;
            }
            break;
          }

          case ItemId.SILVERCROWNGATE:{
            if (player.collideWithSilverCrownDoorGate) {
              ItemManager.sprDoors.drawPoint(target, point, 43);
              continue;
            }
            break;
          }
          */
          case ItemId.COINDOOR:
            if (this.lookup.getInt(cx, cy) <= this.player.coins) // Open
              ItemManager.sprDoors.drawPoint(target, point, 6);
            else{ // Locked
              ItemManager.bricks[ItemId.COINDOOR].drawWithNumber(
                target, point.x, point.y, this.lookup.getInt(cx, cy) - this.player.coins
              );
            }
            continue;
          case ItemId.BLUECOINDOOR:
            if (this.lookup.getInt(cx, cy) <= this.player.bcoins) // Open
              ItemManager.sprDoors.drawPoint(target, point, 36);
            else{ // Locked
              ItemManager.bricks[ItemId.BLUECOINDOOR].drawWithNumber(
                target, point.x, point.y, this.lookup.getInt(cx, cy) - this.player.bcoins
              );
            }
            continue;
          /*
          case ItemId.COINGATE:{
            // Open / Invisible
            if (lookup.getInt(cx,cy) <= player.coins) {
              ItemManager.sprDoors.drawPoint(target, point, 7)
            } else {
              // Locked
              ItemManager.sprCoinGates.drawPoint(target, point, lookup.getInt(cx, cy) - player.coins)
            }
            continue;
          }

          case ItemId.BLUECOINGATE:{
            // Open / Invisible
            if (lookup.getInt(cx, cy) <= player.bcoins) {
              ItemManager.sprDoors.drawPoint(target, point, 37)
            }else{
              // Locked
              ItemManager.sprBlueCoinGates.drawPoint(target, point, lookup.getInt(cx, cy) - player.bcoins)
            }
            continue;
          }

          case ItemId.ZOMBIE_DOOR: {
            if (player.zombie) {
              ItemManager.sprDoors.drawPoint(target, point, 12);
            }
            else {
              ItemManager.sprDoors.drawPoint(target, point, 13);
            }
            continue;
          }
          case ItemId.ZOMBIE_GATE: {
            if (player.zombie) {
              ItemManager.sprDoors.drawPoint(target, point, 13);
            }
            else {
              ItemManager.sprDoors.drawPoint(target, point, 12);
            }
            continue;
          }

          case 83:{
            if (lookup.isBlink(cx, cy)) {
              ItemManager.sprDrumsBlink.drawPoint(target, point, (lookup.getBlink(cx, cy)/6)<<0);
              if (lookup.updateBlink(cx, cy, -1) <= 0) {
                lookup.deleteBlink(cx, cy);
              }
              continue;
            }
            break;
          }
          case 77:{
            if (lookup.isBlink(cx, cy)) {
              ItemManager.sprPianoBlink.drawPoint(target, point, (lookup.getBlink(cx, cy)/6)<<0);
              if (lookup.updateBlink(cx, cy, -1) <= 0) {
                lookup.deleteBlink(cx, cy);
              }
              continue;
            }
            break;
          }

          //If user can edit, draw shadow coins
          case 110:{
            if(Bl.data.canEdit){
              ItemManager.sprCoinShadow.drawPoint(target, point, ((offset >> 0)+cx+cy)%12)
            }
            continue;
          }

          case 111:{
            if(Bl.data.canEdit){
              ItemManager.sprBonusCoinShadow.drawPoint(target, point, ((offset >> 0)+cx+cy)%12)
            }
            continue;
          }

          case ItemId.SPIKE:{
            ItemManager.sprSpikes.drawPoint(target, point, lookup.getInt(cx, cy));
            continue;
          }

          case ItemId.SPIKE_SILVER:{
            ItemManager.sprSpikesSilver.drawPoint(target, point, lookup.getInt(cx, cy));
            continue;
          }
          case ItemId.SPIKE_BLACK:{
            ItemManager.sprSpikesBlack.drawPoint(target, point, lookup.getInt(cx, cy));
            continue;
          }
          case ItemId.SPIKE_RED:{
            ItemManager.sprSpikesRed.drawPoint(target, point, lookup.getInt(cx, cy));
            continue;
          }
          case ItemId.SPIKE_GOLD:{
            ItemManager.sprSpikesGold.drawPoint(target, point, lookup.getInt(cx, cy));
            continue;
          }
          case ItemId.SPIKE_GREEN:{
            ItemManager.sprSpikesGreen.drawPoint(target, point, lookup.getInt(cx, cy));
            continue;
          }
          case ItemId.SPIKE_BLUE:{
            ItemManager.sprSpikesBlue.drawPoint(target, point, lookup.getInt(cx, cy));
            continue;
          }

          case ItemId.PORTAL:{
            var p:Portal = lookup.getPortal(cx,cy)
            ItemManager.sprPortal.drawPoint(target, point, p.rotation * 15 + (((offset/1.5 >> 0)+cx+cy)%15) + 1)// +1 because the first frame is just cy "dead portal" used by the UI
            continue;
          }

          case ItemId.PORTAL_INVISIBLE: {
            if ((Bl.data.canEdit && player.isFlying) || full) {
              var pInv:Portal = lookup.getPortal(cx,cy);
              ItemManager.sprPortalInvisible.drawPoint(target, point, pInv.rotation);
            }
            continue;
          }

          case ItemId.WORLD_PORTAL:{
            ItemManager.sprPortalWorld.drawPoint(target, point, (((offset/2 >> 0)+cx+cy)%21));

            if (Math.random()*100<18) {
              addParticle(new Particle(this, Math.random()*100<50?6:7, (cx*16)+6, (cy*16)+6, .7, .7, 0.013, 0.013, Math.random()*360, Math.random()*115, true));
            }
            continue;
          }

          case ItemId.DIAMOND:{
            ItemManager.sprDiamond.drawPoint(target, point, ((offset/5 >> 0)+cx+cy)%13)
            continue;
          }

          case ItemId.CAKE:{
            ItemManager.sprCake.drawPoint(target, point, ((offset/5 >> 0)+cx+cy)%5)
            continue;
          }

          case ItemId.HOLOGRAM:{
            ItemManager.sprHologram.drawPoint(target, point, ((offset/5 >> 0)+cx+cy)%5)
            continue;
          }

          case ItemId.EFFECT_TEAM: {
            var effectBlockTeam:int = lookup.getInt(cx, cy);
            ItemManager.sprTeamEffect.drawPoint(target, point, effectBlockTeam);

            continue;
          }

          case ItemId.TEAM_DOOR: {
            var teamDoorTeam:int = lookup.getInt(cx, cy);
            var teamDoorFrame:int = 22 + teamDoorTeam;
            if (player.team == teamDoorTeam) teamDoorFrame += 7;
            ItemManager.sprDoors.drawPoint(target, point, teamDoorFrame);
            continue;
          }
          case ItemId.TEAM_GATE: {
            var teamGateTeam:int = lookup.getInt(cx, cy);
            var teamGateFrame:int = 29 + teamGateTeam;
            if (player.team == teamGateTeam) teamGateFrame -= 7;
            ItemManager.sprDoors.drawPoint(target, point, teamGateFrame);
            continue;
          }

          case ItemId.EFFECT_CURSE: {
            ItemManager.sprEffect.drawPoint(target, point, lookup.getInt(cx, cy) != 0 ? 4 : 11);
            continue;
          }
          case ItemId.EFFECT_FLY: {
            ItemManager.sprEffect.drawPoint(target, point, lookup.getBoolean(cx, cy) ? 1 : 8);
            continue;
          }
          case ItemId.EFFECT_JUMP: {
            ItemManager.sprEffect.drawPoint(target, point, [7, 0, 22][lookup.getInt(cx, cy)]);
            continue;
          }
          case ItemId.EFFECT_PROTECTION: {
            ItemManager.sprEffect.drawPoint(target, point, lookup.getBoolean(cx, cy) ? 3 : 10);
            continue;
          }
          case ItemId.EFFECT_RUN: {
            ItemManager.sprEffect.drawPoint(target, point, [9, 2, 25][lookup.getInt(cx, cy)]);
            continue;
          }
          case ItemId.EFFECT_ZOMBIE: {
            ItemManager.sprEffect.drawPoint(target, point, lookup.getInt(cx, cy) != 0 ? 5 : 12);
            continue;
          }
          case ItemId.EFFECT_LOW_GRAVITY: {
            ItemManager.sprEffect.drawPoint(target, point, lookup.getBoolean(cx, cy) ? 13 : 14);
            continue;
          }
          case ItemId.EFFECT_MULTIJUMP: {
            if (lookup.getInt(cx, cy) == 1) {
              ItemManager.sprEffect.drawPoint(target, point, 16)
            }
            else ItemManager.sprMultiJumps.drawPoint(target, point, lookup.getInt(cx, cy))
            continue;
          }
          case ItemId.EFFECT_GRAVITY: {
            ItemManager.sprGravityEffect.drawPoint(target, point, lookup.getInt(cx, cy));
            continue;
          }
          case ItemId.EFFECT_POISON: {
            ItemManager.sprEffect.drawPoint(target, point, lookup.getInt(cx, cy) != 0 ? 23 : 24);
            continue;
          }

          //Secret passages!
          case 50:{
            if (showAllSecrets || full || lookup.getSecret(cx, cy)) {
              ItemManager.sprSecret.drawPoint(target, point, 0);
            }
            continue;
          }
          case 243:{
            if (showAllSecrets || full || lookup.getSecret(cx, cy)) {
              ItemManager.sprSecret.drawPoint(target, point, 1);
            } else {
              ItemManager.bricks[44].drawTo(target, (cx<<4)+ox, (cy<<4)+oy)
            }
            continue;
          }
          case 136:{
            var pl:Player = (Global.base.state as PlayState).player;
            if ((Bl.data.canEdit && pl.isFlying) || full){
              ItemManager.sprSecret.drawPoint(target, point, 2);
            }
            continue;
          }

          case ItemId.LABEL: {
            continue;
          }

          case ItemId.ICE: {
            if (lookup.getNumber(cx, cy) != 0) {
              lookup.setNumber(cx, cy, lookup.getNumber(cx, cy) - .25);
              if (lookup.getNumber(cx, cy) % 12 == 0) {
                lookup.setNumber(cx, cy, 0);
              }
            } else if (ice == (cx + cy) % iceTime || Math.random() < 0.0001) {
              lookup.setNumber(cx, cy, 11.75);
            }
            ItemManager.sprIce.drawPoint(target, point, 11 - (lookup.getNumber(cx, cy) >> 0) % 12);
            continue;
          }

          case ItemId.CAVE_TORCH:{
            ItemManager.sprCaveTorch.drawPoint(target, point, ((offset/2.3 >> 0)+(width-cx)+cy)%12);
            continue;
          }

          case ItemId.DUNGEON_TORCH:{
            ItemManager.sprDungeonTorch.drawPoint(target, point, lookup.getInt(cx, cy) * 12 + ((offset/2.3 >> 0)+(width-cx)+cy)%12);
            continue;
          }

          case ItemId.CHRISTMAS_2016_CANDLE:{
            ItemManager.sprChristmas2016Candle.drawPoint(target, point, ((offset/2.3 >> 0)+(width-cx)+cy)%12);
            continue;
          }

          case ItemId.HALLOWEEN_2016_EYES:{
            if (player.isFlying)
            {
              ItemManager.sprHalloweenEyes.drawPoint(target, point, (lookup.getNumber(cx, cy)*6));
              continue;
            }

            if (lookup.isBlink(cx, cy)) {
              if (cx == startX || cx == endX-1 || cy == startY || cy == endY-1)
              {
                lookup.deleteBlink(cx, cy);
                continue;
              }
              var blink:int = lookup.getBlink(cx, cy);
              if (blink >= 6)
              {
                blink -= 6;
                //blink = 5-blink;
              }
              else
              {
                blink = 5-blink;
              }
              ItemManager.sprHalloweenEyes.drawPoint(target, point, blink+(lookup.getNumber(cx, cy)*6));
              if ((lookup.getBlink(cx, cy) != 5 && Math.random()<.25) || (lookup.getBlink(cx, cy) == 5 && Math.random() <= 0.01)){
                if (lookup.updateBlink(cx, cy, -1) <= 0) {
                  lookup.deleteBlink(cx, cy);
                }
              }
            }
            else
            {
              if (Math.random() < 0.05 && MathUtil.inRange(cx*16, cy*16, player.x, player.y, 120))
                lookup.setBlink(cx,cy, 11);
            }
            continue;
          }
          case 1520:{
            if (lookup.isBlink(cx, cy)) {
              ItemManager.sprGuitarBlink.drawPoint(target, point, (lookup.getBlink(cx, cy)/6)<<0);
              if (lookup.updateBlink(cx, cy, -1) <= 0) {
                lookup.deleteBlink(cx, cy);
              }
              continue;
            }

            break;
          }
          case ItemId.FIREWORKS: {
            if (lookup.isBlink(cx, cy)) {
              var speed:Number = 1 / 3;
              var b:int = lookup.getBlink(cx, cy);
              var frames:int = ItemManager.blocksFireworksBMD.width / 64 / speed;
              if (b >= 0 && b <= frames) {
                infront.push({
                  d:ItemManager.blocksFireworksBMD,
                  r:new Rectangle(Math.floor(b * speed) * 64, lookup.getInt(cx, cy) * 64, 64, 64),
                  p:new Point(point.x - 24, point.y - 24)
                });
              }
              if (lookup.updateBlink(cx, cy, 1) >= frames + 60 * 3) {
                lookup.deleteBlink(cx, cy);
              }
            } else if (Math.random() < 0.01 && MathUtil.inRange(cx * 16, cy * 16, player.x, player.y, 12 * 16)) {
              lookup.setBlink(cx, cy, 0);
            }
            if (player.isFlying) {
              ItemManager.sprFireworks.drawPoint(target, point, lookup.getInt(cx, cy));
            }
            continue;
          }
          */
        }
        ItemManager.bricks[type].draw(target, point.x, point.y);
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

  postDraw(target, ox, oy, full){
    const {startX, startY, endX, endY} = this.getDrawBoundary(target, ox, oy, full);
    const point = {x: 0, y: 0};

    // Seperate loop to perserve shadows
    for (let cy = startY; cy < endY; cy++){
      const row = this.above[cy]
      point.y = (cy << 4) + oy;
      for(let cx = startX; cx < endX; cx++){
        const type = row[cx];
        point.x = (cx << 4) + ox;
        switch (type){
          case 100:
            ItemManager.sprCoin.drawPoint(target, point,
              ((this.aniOffset >> 0) + cx + cy) % 12);
            break;
          case 101:
            ItemManager.sprBonusCoin.drawPoint(target, point,
              ((this.aniOffset >> 0) + cx + cy) % 12);
            break;
          /*
          case ItemId.WAVE:{
            ItemManager.sprWave.drawPoint(target, point, ((offset/5 >> 0))%8);
            break;
          }
          case ItemId.MUD_BUBBLE:{
            if (lookup.getNumber(cx, cy) != 0) {
              lookup.setNumber(cx, cy, lookup.getNumber(cx, cy) + .25);
              if (lookup.getNumber(cx,cy ) % 10 == 0) {
                lookup.setNumber(cx, cy, 0);
              }
            } else {
              if (Math.random()<0.005) {
                lookup.setNumber(cx, cy, 1 + Math.round(Math.random()) * 10);
              }
            }
            ItemManager.sprMudBubble.drawPoint(target, point, (lookup.getNumber(cx, cy) >> 0) % 19);
            break;
          }
          case ItemId.FIRE:{
            ItemManager.sprFireHazard.drawPoint(target, point, ((offset / 1.2 >> 0) + (width - cx) + cy) % 12);
            break;
          }

          case ItemId.WATER:{
            if (lookup.getInt(cx, cy) != 0) {
              lookup.setInt(cx, cy, lookup.getInt(cx, cy) + 1);
              if (lookup.getInt(cx, cy) % 25 == 0) {
                lookup.setInt(cx, cy, 0);
              }
            } else {
              if (Math.random() < 0.001) {
                lookup.setInt(cx, cy, int(Math.random() * 4) * 25 + 5);
              }
            }
            ItemManager.sprWater.drawPoint(target, point, int(lookup.getNumber(cx, cy) / 5))
            break;
          }
          case ItemId.TOXIC_WASTE: {
            if (lookup.getInt(cx, cy) != 0) {
              lookup.setInt(cx, cy, lookup.getInt(cx, cy) + 1);
              if (lookup.getInt(cx, cy) % 25 == 0) {
                lookup.setInt(cx, cy, 0);
              }
            } else {
              if (Math.random() < 0.005) {
                lookup.setInt(cx, cy, int(Math.random() * 4) * 25 + 5);
              }
            }
            ItemManager.sprToxic.drawPoint(target, point, int(lookup.getNumber(cx, cy) / 5))
            break;
          }
          case ItemId.TOXIC_WASTE_SURFACE: {
            if (lookup.getNumber(cx, cy) != 0) {
              lookup.setNumber(cx, cy, lookup.getNumber(cx, cy) + .25);
              if (lookup.getNumber(cx,cy ) % 10 == 0) {
                lookup.setNumber(cx, cy, 0);
              }
            } else {
              if (Math.random()<0.01) {
                lookup.setNumber(cx, cy, 1 + Math.round(Math.random()) * 10);
              }
            }
            ItemManager.sprToxicBubble.drawPoint(target, point, (lookup.getNumber(cx, cy) >> 0) % 19);
            break;
          }
          case ItemId.TEXT_SIGN:{
            var isFloating:Boolean = !ItemId.isSolid(getTile(0, cx, cy + 1));
            ItemManager.sprSign.drawPoint(target, point, lookup.getTextSign(cx, cy).type + (isFloating? 4 : 0))
            break;
          }

          case ItemId.LAVA:{
            ItemManager.sprLava.drawPoint(target, point, ((offset/5 >> 0))%8);
            break;
          }

          case ItemId.GOLDEN_EASTER_EGG: {
            infront.push({
              d:ItemManager.blocksGoldenEasterEggBMD,
              r:new Rectangle(0, 0, 48, 48),
              p:new Point(point.x - 16, point.y - 16)
            });
            break;
          }

          default:{
            if (ItemId.isNPC(type)) {
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
            } else if (ItemId.isBlockRotateable(type) && !ItemId.isNonRotatableHalfBlock(type) && type != ItemId.HALLOWEEN_2016_EYES && type != ItemId.FIREWORKS && type != ItemId.DUNGEON_TORCH) {
              var rot:int = lookup.getInt(cx, cy);
              var rotSprite:BlSprite = ItemManager.getRotateableSprite(type);
              rotSprite.drawPoint(target, point, rot);
            } else {
              target.copyPixels(ItemManager.bmdBricks[type],rect18x18,point);
            }
            break;
          }
          */
        }

        /*
        if (decoration[cy][cx] == ItemId.CHECKPOINT) {
          ItemManager.sprCheckpoint.drawPoint(target, point, (player.checkpoint_x == cx && player.checkpoint_y == cy) ? 1 : 0);
        }

        if (Global.playState.brushSize > 1) {
          if(Global.playState.brushGridLocked) {
            if ((cx - Global.playState.gridOffsetX + Global.playState.brushSize)
              % Global.playState.brushSize == 0 &&
              (cy - Global.playState.gridOffsetY + Global.playState.brushSize)
              % Global.playState.brushSize == 0) {
              target.setPixel(point.x,   point.y,   0xff0000);
              target.setPixel(point.x-1, point.y,   0xff0000);
              target.setPixel(point.x,   point.y-1, 0xff0000);
              target.setPixel(point.x-1, point.y-1, 0xff0000);
            }
          } else {
            //Bl.stage.mouseX
            var mx:int = (Bl.mouseX - Global.playState.x) / 16 >> 0;
            var my:int = (Bl.mouseY - Global.playState.y) / 16 >> 0;
            var min:int = -Math.floor((Global.playState.brushSize-1) / 2);
            var max:int = 1+Math.ceil((Global.playState.brushSize-1) / 2);
            if (cx == mx + max && cy == my + max
            || cx == mx + min && cy == my + min
            || cx == mx + max && cy == my + min
            || cx == mx + min && cy == my + max) {
              target.setPixel(point.x,   point.y,   0xff0000);
              target.setPixel(point.x-1, point.y,   0xff0000);
              target.setPixel(point.x,   point.y-1, 0xff0000);
              target.setPixel(point.x-1, point.y-1, 0xff0000);
            }
          }
        }
        */
      }
    }

    /*
    for each (var obj:Object in infront) {
      target.copyPixels(obj.d, obj.r, obj.p);
    }

    if (!drewAnimatedNPC) isAnimatingNPC = false;

    labelcontainer.draw(target,ox,oy);
    particlecontainer.draw(target, ox, oy);
    */
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
  isFlying = false;
  state;
  spriteRect; // rect2
  queue = [];
  lastJump = -Date.now();
  current;
  current_below;

  // coins
  coins = 0;
  gx = []; // collected coin locations
  gy = [];
  bcoins = 0;
  bx = []; // collect bcoin locations
  by = [];

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

  overlapa = -1;
  overlapb = -1;
  overlapc = -1;
  overlapd = -1;

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
      this.queue.push(this.current);
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
    const isGod = this.isFlying;
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
            this.moy = -this._gravity;
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
          this.y += (ty - 14) / 15;
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
  coinCountChanged = false;

  getPlayerInput(input){
    if (this.isControlled){
      this.leftDown      = input.keyDown.ArrowLeft  || input.keyDown.KeyA ? -1 : 0;
      this.upDown        = input.keyDown.ArrowUp    || input.keyDown.KeyW ? -1 : 0;
      this.rightDown     = input.keyDown.ArrowRight || input.keyDown.KeyD ?  1 : 0;
      this.downDown      = input.keyDown.ArrowDown  || input.keyDown.KeyS ?  1 : 0;
      this.spaceJustDown = !!input.keyJustPressed.Space;
      this.spaceDown     = !!input.keyDown.Space;
      this.horizontal    = this.leftDown + this.rightDown;
      this.vertical      = this.upDown + this.downDown;
    }
  }

  touchBlock(cx, cy, isGod){
    if (this.isMe){
      // TODO: multiJumpEffectDisplay.update();
      this.coinCountChanged = false;
    }

    switch (this.current){
      case ItemId.COIN_GOLD:
      case ItemId.COIN_BLUE:
      case 110:
      case 111: {
        if (this.isMe && this.current !== 110 && this.current !== 111){
          // TODO: SoundManager.playMiscSound(SoundId.COIN);
          this.world.setTileComplex(0, cx, cy, this.current + 10, null); // 100 -> 110; 101 -> 111
          if (this.current == ItemId.COIN_GOLD) {
            this.coins++;
            this.gx.push(cx);
            this.gy.push(cy);
          }
          else {
            this.bcoins++;
            this.bx.push(cx);
            this.by.push(cy);
          }
          this.coinCountChanged = true;
          // TODO: if particles enabled:
          //for (var k:int = 0; k < 4; k++)
          // spawnCoinPatricle(cx, cy, current == ItemId.COIN_BLUE);
        }
        else if (!this.isMe){
          /*
          var found:Boolean = false;
          for (var i:int = 0; i < gx.length; i++) {
            if (gx[i] == cx && gy[i] == cy) {
              found = true;
              break;
            }
          }
          if (!found) {
            if (current == ItemId.COIN_GOLD || current == 110) {
              coins++;
              gx.push(cx)
              gy.push(cy);
            }
            else if (current == ItemId.COIN_BLUE || current == 111) {
              bcoins++;
              bx.push(cx);
              by.push(cy);
            }
          }
          */
        }
        break;
      }
    }
  }

  sendMovement(cx, cy){
    if (this.isControlled){
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
  coins = 0;
  bcoins = 0;

  constructor(worldData){
    super();

    this.world = new World(worldData);
    this.add(this.world);

    const coinCount = this.world.getCoinCount();
    this.coins = coinCount.coins;
    this.bcoins = coinCount.bcoins;

    this.player = new Me(this.world, 'Sean', true, this);
    this.player.worldGravityMultiplier = this.world.gravity;
    this.x = -this.player.x + Config.bw / 2;
    this.y = -this.player.y + Config.bh / 2;
    this.add(this.player);
    this.world.setPlayer(this.player);
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
    const startX = -this.x - 90;
    const startY = -this.y - 90;
    const endX = startX + Config.bw + 180;
    const endY = startY + Config.bh + 180;

    super.draw(target, ox, oy);

    const ox2 = ox + this.x;
    const oy2 = oy + this.y;

    // Draws the "above" decoration layer
    this.world.postDraw(target, ox2, oy2);

    // Draws you, if flying
    this.player.drawGods(target, ox2, oy2);

    // Draws bubbles for signs, world portals, etc.
    this.world.drawDialogs(target, ox2, oy2);

    let hudY = target.boundary.y + 5;
    const rightEdge = target.boundary.x + target.boundary.w - 20;
    // TODO: player deaths
    if (this.coins > 0){
      target.text(`${this.player.coins}/${this.coins}`, 'right', 'top', rightEdge - 2, hudY + 4);
      ItemManager.sprCoin.drawPoint(target, {x: rightEdge, y: hudY}, 0);
      hudY += 15;
    }
    if (this.bcoins > 0){
      target.text(`${this.player.bcoins}/${this.bcoins}`, 'right', 'top', rightEdge - 2, hudY + 4);
      ItemManager.sprBonusCoin.drawPoint(target, {x: rightEdge, y: hudY}, 0);
      hudY += 15;
    }
    /*
    if(this.coins > 0) { cointextcontainer.draw(target, 0,usedup + min); usedup += 15; }
    if(this.bcoins > 0) { bcointextcontainer.draw(target,0,usedup + min); usedup += 15; }
    */
  }
}

//
// Screen
//

class Screen {
  cnv;
  ctx;
  dpr;
  scale;
  loading = true;
  debug = false;
  fullScreen = true;
  boundary = {x: 0, y: 0, w: Config.bw, h: Config.bh};

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
    this.boundary.x = 0;
    this.boundary.y = 0;
    this.boundary.w = Config.bw;
    this.boundary.h = Config.bh;
    const scaleW = this.cnv.width / Config.bw;
    const scaleH = this.cnv.height / Config.bh;
    if (scaleW > scaleH){
      const tx = (this.cnv.width - Config.bw * scaleH) * 0.5;
      this.ctx.translate(tx, 0);
      this.ctx.scale(scaleH, scaleH);
      this.scale = scaleH;
      if (this.fullScreen){
        this.boundary.x = Math.floor(-tx / scaleH);
        this.boundary.y = 0;
        this.boundary.w = Math.floor(this.cnv.width / scaleH);
        this.boundary.h = Config.bh;
      }
    }
    else{
      const ty = (this.cnv.height - Config.bh * scaleW) * 0.5;
      this.ctx.translate(0, ty);
      this.ctx.scale(scaleW, scaleW);
      this.scale = scaleW;
      if (this.fullScreen){
        this.boundary.x = 0;
        this.boundary.y = Math.floor(-ty / scaleW);
        this.boundary.w = Config.bw;
        this.boundary.h = Math.floor(this.cnv.height / scaleW);
      }
    }
    if (!this.fullScreen){
      this.ctx.beginPath();
      this.ctx.rect(0, 0, Config.bw, Config.bh);
      this.ctx.clip();
    }
  }

  endDraw(){
    this.ctx.restore();
  }

  copyPixels(bmd, src, dst){
    this.copyPixelsRotated(bmd, src, dst, 0);
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
      if (this.scale >= 1){
        this.ctx.drawImage(
          bmd.img,
          src.x * bmd.scale,
          src.y * bmd.scale,
          src.w * bmd.scale,
          src.h * bmd.scale,
          Math.floor(dst.x),
          Math.floor(dst.y),
          Math.floor((dst.w + 1) * this.scale - 1) / this.scale,
          Math.floor((dst.h + 1) * this.scale - 1) / this.scale
        );
      }
      else{
        this.ctx.drawImage(
          bmd.img,
          src.x * bmd.scale,
          src.y * bmd.scale,
          src.w * bmd.scale,
          src.h * bmd.scale,
          Math.floor(dst.x),
          Math.floor(dst.y),
          Math.floor(dst.w) + this.scale,
          Math.floor(dst.h) + this.scale
        );
      }
    }
  }

  fillRect(dst, color){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(dst.x, dst.y, dst.w, dst.h);
  }

  text(text, align, baseline, x, y){
    this.ctx.font = '12px ee_nokiafc22';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = align;
    this.ctx.textBaseline = baseline;
    this.ctx.fillText(text, x, y);
  }

  debugText(text, x, y){
    if (!this.debug)
      return;
    this.ctx.font = '7px sans-serif';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(text, x, y);
  }

  debugRect(x, y, w, h){
    if (!this.debug)
      return;
    this.ctx.strokeStyle = '#f00';
    this.ctx.beginPath();
    this.ctx.rect(x, y, w, h);
    this.ctx.lineWidth = this.dpr;
    this.ctx.stroke();
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

  tick(input){
    if (input.keyJustPressed.F1)
      this.debug = !this.debug;
    if (input.keyJustPressed.F2)
      this.fullScreen = !this.fullScreen;
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
    [false, false, document.fonts.ready],
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
    LI('blockNumbersBMD'         ,   44,   5, 'block_numbers2.png'         ),
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
    if (key[0])
      key[0][key[1]] = loadedValues[i];
  });

  if (sessionStorage.getItem('hideControls') !== 'true')
    document.getElementById('controls').style.display = '';

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
        screen.tick(input);
        input.endTick();
        accumulatedTime -= Config.physics_ms_per_tick;
      }
      state.enterFrame();
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

function hideControls(){
  document.getElementById('controls').style.display = 'none';
  sessionStorage.setItem('hideControls', 'true');
  return false;
}

load();
