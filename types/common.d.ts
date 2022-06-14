//===================================================
// Game Constants    
//===================================================

    // pfff
    declare const FALSE: boolean
    declare const TRUE: boolean
    declare const JASS_MAX_ARRAY_SIZE: number

    declare const PLAYER_NEUTRAL_PASSIVE: number
    declare const PLAYER_NEUTRAL_AGGRESSIVE: number

    declare const PLAYER_COLOR_RED: HPlayerColor
    declare const PLAYER_COLOR_BLUE: HPlayerColor
    declare const PLAYER_COLOR_CYAN: HPlayerColor
    declare const PLAYER_COLOR_PURPLE: HPlayerColor
    declare const PLAYER_COLOR_YELLOW: HPlayerColor
    declare const PLAYER_COLOR_ORANGE: HPlayerColor
    declare const PLAYER_COLOR_GREEN: HPlayerColor
    declare const PLAYER_COLOR_PINK: HPlayerColor
    declare const PLAYER_COLOR_LIGHT_GRAY: HPlayerColor
    declare const PLAYER_COLOR_LIGHT_BLUE: HPlayerColor
    declare const PLAYER_COLOR_AQUA: HPlayerColor
    declare const PLAYER_COLOR_BROWN: HPlayerColor

    declare const RACE_HUMAN: HRace
    declare const RACE_ORC: HRace
    declare const RACE_UNDEAD: HRace
    declare const RACE_NIGHTELF: HRace
    declare const RACE_DEMON: HRace
    declare const RACE_OTHER: HRace

    declare const PLAYER_GAME_RESULT_VICTORY: HPlayerGameResult
    declare const PLAYER_GAME_RESULT_DEFEAT: HPlayerGameResult
    declare const PLAYER_GAME_RESULT_TIE: HPlayerGameResult
    declare const PLAYER_GAME_RESULT_NEUTRAL: HPlayerGameResult

    declare const ALLIANCE_PASSIVE: HAllianceType
    declare const ALLIANCE_HELP_REQUEST: HAllianceType
    declare const ALLIANCE_HELP_RESPONSE: HAllianceType
    declare const ALLIANCE_SHARED_XP: HAllianceType
    declare const ALLIANCE_SHARED_SPELLS: HAllianceType
    declare const ALLIANCE_SHARED_VISION: HAllianceType
    declare const ALLIANCE_SHARED_CONTROL: HAllianceType
    declare const ALLIANCE_SHARED_ADVANCED_CONTROL: HAllianceType;
    declare const ALLIANCE_RESCUABLE: HAllianceType
    declare const ALLIANCE_SHARED_VISION_FORCED: HAllianceType

    declare const VERSION_REIGN_OF_CHAOS: HVersion
    declare const VERSION_FROZEN_THRONE: HVersion

    declare const ATTACK_TYPE_NORMAL: HAttackType
    declare const ATTACK_TYPE_MELEE: HAttackType
    declare const ATTACK_TYPE_PIERCE: HAttackType
    declare const ATTACK_TYPE_SIEGE: HAttackType
    declare const ATTACK_TYPE_MAGIC: HAttackType
    declare const ATTACK_TYPE_CHAOS: HAttackType
    declare const ATTACK_TYPE_HERO: HAttackType

    declare const DAMAGE_TYPE_UNKNOWN: HDamageType
    declare const DAMAGE_TYPE_NORMAL: HDamageType
    declare const DAMAGE_TYPE_ENHANCED: HDamageType
    declare const DAMAGE_TYPE_FIRE: HDamageType
    declare const DAMAGE_TYPE_COLD: HDamageType
    declare const DAMAGE_TYPE_LIGHTNING: HDamageType
    declare const DAMAGE_TYPE_POISON: HDamageType
    declare const DAMAGE_TYPE_DISEASE: HDamageType
    declare const DAMAGE_TYPE_DIVINE: HDamageType
    declare const DAMAGE_TYPE_MAGIC: HDamageType
    declare const DAMAGE_TYPE_SONIC: HDamageType
    declare const DAMAGE_TYPE_ACID: HDamageType
    declare const DAMAGE_TYPE_FORCE: HDamageType
    declare const DAMAGE_TYPE_DEATH: HDamageType
    declare const DAMAGE_TYPE_MIND: HDamageType
    declare const DAMAGE_TYPE_PLANT: HDamageType
    declare const DAMAGE_TYPE_DEFENSIVE: HDamageType
    declare const DAMAGE_TYPE_DEMOLITION: HDamageType
    declare const DAMAGE_TYPE_SLOW_POISON: HDamageType
    declare const DAMAGE_TYPE_SPIRIT_LINK: HDamageType
    declare const DAMAGE_TYPE_SHADOW_STRIKE: HDamageType
    declare const DAMAGE_TYPE_UNIVERSAL: HDamageType

    declare const WEAPON_TYPE_WHOKNOWS: HWeaponType
    declare const WEAPON_TYPE_METAL_LIGHT_CHOP: HWeaponType
    declare const WEAPON_TYPE_METAL_MEDIUM_CHOP: HWeaponType
    declare const WEAPON_TYPE_METAL_HEAVY_CHOP: HWeaponType
    declare const WEAPON_TYPE_METAL_LIGHT_SLICE: HWeaponType
    declare const WEAPON_TYPE_METAL_MEDIUM_SLICE: HWeaponType
    declare const WEAPON_TYPE_METAL_HEAVY_SLICE: HWeaponType
    declare const WEAPON_TYPE_METAL_MEDIUM_BASH: HWeaponType
    declare const WEAPON_TYPE_METAL_HEAVY_BASH: HWeaponType
    declare const WEAPON_TYPE_METAL_MEDIUM_STAB: HWeaponType
    declare const WEAPON_TYPE_METAL_HEAVY_STAB: HWeaponType
    declare const WEAPON_TYPE_WOOD_LIGHT_SLICE: HWeaponType
    declare const WEAPON_TYPE_WOOD_MEDIUM_SLICE: HWeaponType
    declare const WEAPON_TYPE_WOOD_HEAVY_SLICE: HWeaponType
    declare const WEAPON_TYPE_WOOD_LIGHT_BASH: HWeaponType
    declare const WEAPON_TYPE_WOOD_MEDIUM_BASH: HWeaponType
    declare const WEAPON_TYPE_WOOD_HEAVY_BASH: HWeaponType
    declare const WEAPON_TYPE_WOOD_LIGHT_STAB: HWeaponType
    declare const WEAPON_TYPE_WOOD_MEDIUM_STAB: HWeaponType
    declare const WEAPON_TYPE_CLAW_LIGHT_SLICE: HWeaponType
    declare const WEAPON_TYPE_CLAW_MEDIUM_SLICE: HWeaponType
    declare const WEAPON_TYPE_CLAW_HEAVY_SLICE: HWeaponType
    declare const WEAPON_TYPE_AXE_MEDIUM_CHOP: HWeaponType
    declare const WEAPON_TYPE_ROCK_HEAVY_BASH: HWeaponType

    declare const PATHING_TYPE_ANY: HPathingType
    declare const PATHING_TYPE_WALKABILITY: HPathingType
    declare const PATHING_TYPE_FLYABILITY: HPathingType
    declare const PATHING_TYPE_BUILDABILITY: HPathingType
    declare const PATHING_TYPE_PEONHARVESTPATHING: HPathingType
    declare const PATHING_TYPE_BLIGHTPATHING: HPathingType
    declare const PATHING_TYPE_FLOATABILITY: HPathingType
    declare const PATHING_TYPE_AMPHIBIOUSPATHING: HPathingType

//===================================================
// Map Setup Constants    
//===================================================

    declare const RACE_PREF_HUMAN: HRacePreference
    declare const RACE_PREF_ORC: HRacePreference
    declare const RACE_PREF_NIGHTELF: HRacePreference
    declare const RACE_PREF_UNDEAD: HRacePreference
    declare const RACE_PREF_DEMON: HRacePreference
    declare const RACE_PREF_RANDOM: HRacePreference
    declare const RACE_PREF_USER_SELECTABLE: HRacePreference

    declare const MAP_CONTROL_USER: HMapControl
    declare const MAP_CONTROL_COMPUTER: HMapControl
    declare const MAP_CONTROL_RESCUABLE: HMapControl
    declare const MAP_CONTROL_NEUTRAL: HMapControl
    declare const MAP_CONTROL_CREEP: HMapControl
    declare const MAP_CONTROL_NONE: HMapControl

    declare const GAME_TYPE_MELEE: HGameType
    declare const GAME_TYPE_FFA: HGameType
    declare const GAME_TYPE_USE_MAP_SETTINGS: HGameType
    declare const GAME_TYPE_BLIZ: HGameType
    declare const GAME_TYPE_ONE_ON_ONE: HGameType
    declare const GAME_TYPE_TWO_TEAM_PLAY: HGameType
    declare const GAME_TYPE_THREE_TEAM_PLAY: HGameType
    declare const GAME_TYPE_FOUR_TEAM_PLAY: HGameType

    declare const MAP_FOG_HIDE_TERRAIN: HMapFlag
    declare const MAP_FOG_MAP_EXPLORED: HMapFlag
    declare const MAP_FOG_ALWAYS_VISIBLE: HMapFlag

    declare const MAP_USE_HANDICAPS: HMapFlag
    declare const MAP_OBSERVERS: HMapFlag
    declare const MAP_OBSERVERS_ON_DEATH: HMapFlag

    declare const MAP_FIXED_COLORS: HMapFlag
    
    declare const MAP_LOCK_RESOURCE_TRADING: HMapFlag
    declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: HMapFlag

    declare const MAP_LOCK_ALLIANCE_CHANGES: HMapFlag
    declare const MAP_ALLIANCE_CHANGES_HIDDEN: HMapFlag

    declare const MAP_CHEATS: HMapFlag
    declare const MAP_CHEATS_HIDDEN: HMapFlag

    declare const MAP_LOCK_SPEED: HMapFlag
    declare const MAP_LOCK_RANDOM_SEED: HMapFlag
    declare const MAP_SHARED_ADVANCED_CONTROL: HMapFlag
    declare const MAP_RANDOM_HERO: HMapFlag
    declare const MAP_RANDOM_RACES: HMapFlag
    declare const MAP_RELOADED: HMapFlag

    declare const MAP_PLACEMENT_RANDOM: HPlacement
    declare const MAP_PLACEMENT_FIXED: HPlacement
    declare const MAP_PLACEMENT_USE_MAP_SETTINGS: HPlacement
    declare const MAP_PLACEMENT_TEAMS_TOGETHER: HPlacement

    declare const MAP_LOC_PRIO_LOW: HStartLocPrio
    declare const MAP_LOC_PRIO_HIGH: HStartLocPrio
    declare const MAP_LOC_PRIO_NOT: HStartLocPrio

    declare const MAP_DENSITY_NONE: HMapDensity
    declare const MAP_DENSITY_LIGHT: HMapDensity
    declare const MAP_DENSITY_MEDIUM: HMapDensity
    declare const MAP_DENSITY_HEAVY: HMapDensity

    declare const MAP_DIFFICULTY_EASY: HGameDifficulty
    declare const MAP_DIFFICULTY_NORMAL: HGameDifficulty
    declare const MAP_DIFFICULTY_HARD: HGameDifficulty
    declare const MAP_DIFFICULTY_INSANE: HGameDifficulty

    declare const MAP_SPEED_SLOWEST: HGameSpeed
    declare const MAP_SPEED_SLOW: HGameSpeed
    declare const MAP_SPEED_NORMAL: HGameSpeed
    declare const MAP_SPEED_FAST: HGameSpeed
    declare const MAP_SPEED_FASTEST: HGameSpeed

    declare const PLAYER_SLOT_STATE_EMPTY: HPlayerSlotState
    declare const PLAYER_SLOT_STATE_PLAYING: HPlayerSlotState
    declare const PLAYER_SLOT_STATE_LEFT: HPlayerSlotState

//===================================================
// Sound Constants
//===================================================
    declare const SOUND_VOLUMEGROUP_UNITMOVEMENT: HVolumeGroup
    declare const SOUND_VOLUMEGROUP_UNITSOUNDS: HVolumeGroup
    declare const SOUND_VOLUMEGROUP_COMBAT: HVolumeGroup
    declare const SOUND_VOLUMEGROUP_SPELLS: HVolumeGroup
    declare const SOUND_VOLUMEGROUP_UI: HVolumeGroup
    declare const SOUND_VOLUMEGROUP_MUSIC: HVolumeGroup
    declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: HVolumeGroup
    declare const SOUND_VOLUMEGROUP_FIRE: HVolumeGroup


//===================================================
// Game, Player, and Unit States
//
// For use with TriggerRegister<X>StateEvent
//
//===================================================

    declare const GAME_STATE_DIVINE_INTERVENTION: HIGameState
    declare const GAME_STATE_DISCONNECTED: HIGameState
    declare const GAME_STATE_TIME_OF_DAY: HFGameState

    declare const PLAYER_STATE_GAME_RESULT: HPlayerState

    // current resource levels
    //
    declare const PLAYER_STATE_RESOURCE_GOLD: HPlayerState
    declare const PLAYER_STATE_RESOURCE_LUMBER: HPlayerState
    declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: HPlayerState
    declare const PLAYER_STATE_RESOURCE_FOOD_CAP: HPlayerState
    declare const PLAYER_STATE_RESOURCE_FOOD_USED: HPlayerState
    declare const PLAYER_STATE_FOOD_CAP_CEILING: HPlayerState

    declare const PLAYER_STATE_GIVES_BOUNTY: HPlayerState
    declare const PLAYER_STATE_ALLIED_VICTORY: HPlayerState
    declare const PLAYER_STATE_PLACED: HPlayerState
    declare const PLAYER_STATE_OBSERVER_ON_DEATH: HPlayerState
    declare const PLAYER_STATE_OBSERVER: HPlayerState
    declare const PLAYER_STATE_UNFOLLOWABLE: HPlayerState

    // taxation rate for each resource
    //
    declare const PLAYER_STATE_GOLD_UPKEEP_RATE: HPlayerState
    declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: HPlayerState

    // cumulative resources collected by the player during the mission
    //
    declare const PLAYER_STATE_GOLD_GATHERED: HPlayerState
    declare const PLAYER_STATE_LUMBER_GATHERED: HPlayerState

    declare const PLAYER_STATE_NO_CREEP_SLEEP: HPlayerState

    declare const UNIT_STATE_LIFE: HUnitState
    declare const UNIT_STATE_MAX_LIFE: HUnitState
    declare const UNIT_STATE_MANA: HUnitState
    declare const UNIT_STATE_MAX_MANA: HUnitState

    declare const AI_DIFFICULTY_NEWBIE: HAIDifficulty
    declare const AI_DIFFICULTY_NORMAL: HAIDifficulty
    declare const AI_DIFFICULTY_INSANE: HAIDifficulty

    // player score values
    declare const PLAYER_SCORE_UNITS_TRAINED: HPlayerScore
    declare const PLAYER_SCORE_UNITS_KILLED: HPlayerScore
    declare const PLAYER_SCORE_STRUCT_BUILT: HPlayerScore
    declare const PLAYER_SCORE_STRUCT_RAZED: HPlayerScore
    declare const PLAYER_SCORE_TECH_PERCENT: HPlayerScore
    declare const PLAYER_SCORE_FOOD_MAXPROD: HPlayerScore
    declare const PLAYER_SCORE_FOOD_MAXUSED: HPlayerScore
    declare const PLAYER_SCORE_HEROES_KILLED: HPlayerScore
    declare const PLAYER_SCORE_ITEMS_GAINED: HPlayerScore
    declare const PLAYER_SCORE_MERCS_HIRED: HPlayerScore
    declare const PLAYER_SCORE_GOLD_MINED_TOTAL: HPlayerScore
    declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: HPlayerScore
    declare const PLAYER_SCORE_GOLD_LOST_UPKEEP: HPlayerScore
    declare const PLAYER_SCORE_GOLD_LOST_TAX: HPlayerScore
    declare const PLAYER_SCORE_GOLD_GIVEN: HPlayerScore
    declare const PLAYER_SCORE_GOLD_RECEIVED: HPlayerScore
    declare const PLAYER_SCORE_LUMBER_TOTAL: HPlayerScore
    declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: HPlayerScore
    declare const PLAYER_SCORE_LUMBER_LOST_TAX: HPlayerScore
    declare const PLAYER_SCORE_LUMBER_GIVEN: HPlayerScore
    declare const PLAYER_SCORE_LUMBER_RECEIVED: HPlayerScore
    declare const PLAYER_SCORE_UNIT_TOTAL: HPlayerScore
    declare const PLAYER_SCORE_HERO_TOTAL: HPlayerScore
    declare const PLAYER_SCORE_RESOURCE_TOTAL: HPlayerScore
    declare const PLAYER_SCORE_TOTAL: HPlayerScore
        
//===================================================
// Game, Player and Unit Events
//
//  When an event causes a trigger to fire these
//  values allow the action code to determine which
//  event was dispatched and therefore which set of
//  native functions should be used to get information
//  about the event.
//
// Do NOT change the order or value of these constants
// without insuring that the JASS_GAME_EVENTS_WAR3 enum
// is changed to match.
//
//===================================================

    //===================================================
    // For use declare const TriggerRegisterGameEvent: with

    declare const EVENT_GAME_VICTORY: HGameEvent
    declare const EVENT_GAME_END_LEVEL: HGameEvent

    declare const EVENT_GAME_VARIABLE_LIMIT: HGameEvent
    declare const EVENT_GAME_STATE_LIMIT: HGameEvent

    declare const EVENT_GAME_TIMER_EXPIRED: HGameEvent

    declare const EVENT_GAME_ENTER_REGION: HGameEvent
    declare const EVENT_GAME_LEAVE_REGION: HGameEvent

    declare const EVENT_GAME_TRACKABLE_HIT: HGameEvent
    declare const EVENT_GAME_TRACKABLE_TRACK: HGameEvent

    declare const EVENT_GAME_SHOW_SKILL: HGameEvent
    declare const EVENT_GAME_BUILD_SUBMENU: HGameEvent

    //===================================================
    // For use with TriggerRegisterPlayerEvent
    //===================================================
    declare const EVENT_PLAYER_STATE_LIMIT: HPlayerEvent
    declare const EVENT_PLAYER_ALLIANCE_CHANGED: HPlayerEvent

    declare const EVENT_PLAYER_DEFEAT: HPlayerEvent
    declare const EVENT_PLAYER_VICTORY: HPlayerEvent
    declare const EVENT_PLAYER_LEAVE: HPlayerEvent
    declare const EVENT_PLAYER_CHAT: HPlayerEvent
    declare const EVENT_PLAYER_END_CINEMATIC: HPlayerEvent

    //===================================================
    // For use with TriggerRegisterPlayerUnitEvent
    //===================================================

    declare const EVENT_PLAYER_UNIT_ATTACKED: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_RESCUED: HPlayerunitEvent

    declare const EVENT_PLAYER_UNIT_DEATH: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_DECAY: HPlayerunitEvent

    declare const EVENT_PLAYER_UNIT_DETECTED: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_HIDDEN: HPlayerunitEvent

    declare const EVENT_PLAYER_UNIT_SELECTED: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_DESELECTED: HPlayerunitEvent

    declare const EVENT_PLAYER_UNIT_CONSTRUCT_START: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: HPlayerunitEvent

    declare const EVENT_PLAYER_UNIT_UPGRADE_START: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: HPlayerunitEvent

    declare const EVENT_PLAYER_UNIT_TRAIN_START: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: HPlayerunitEvent

    declare const EVENT_PLAYER_UNIT_RESEARCH_START: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_ISSUED_ORDER: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: HPlayerunitEvent

    declare const EVENT_PLAYER_HERO_LEVEL: HPlayerunitEvent
    declare const EVENT_PLAYER_HERO_SKILL: HPlayerunitEvent

    declare const EVENT_PLAYER_HERO_REVIVABLE: HPlayerunitEvent

    declare const EVENT_PLAYER_HERO_REVIVE_START: HPlayerunitEvent
    declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: HPlayerunitEvent
    declare const EVENT_PLAYER_HERO_REVIVE_FINISH: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_SUMMON: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_DROP_ITEM: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_PICKUP_ITEM: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_USE_ITEM: HPlayerunitEvent

    declare const EVENT_PLAYER_UNIT_LOADED: HPlayerunitEvent
    
    //===================================================
    // For use with TriggerRegisterUnitEvent
    //===================================================

    declare const EVENT_UNIT_DAMAGED: HUnitEvent
    declare const EVENT_UNIT_DEATH: HUnitEvent
    declare const EVENT_UNIT_DECAY: HUnitEvent
    declare const EVENT_UNIT_DETECTED: HUnitEvent
    declare const EVENT_UNIT_HIDDEN: HUnitEvent
    declare const EVENT_UNIT_SELECTED: HUnitEvent
    declare const EVENT_UNIT_DESELECTED: HUnitEvent
                                                                        
    declare const EVENT_UNIT_STATE_LIMIT: HUnitEvent

    // Events which may have a filter for the "other unit"              
    //                                                                  
    declare const EVENT_UNIT_ACQUIRED_TARGET: HUnitEvent
    declare const EVENT_UNIT_TARGET_IN_RANGE: HUnitEvent
    declare const EVENT_UNIT_ATTACKED: HUnitEvent
    declare const EVENT_UNIT_RESCUED: HUnitEvent
                                                                        
    declare const EVENT_UNIT_CONSTRUCT_CANCEL: HUnitEvent
    declare const EVENT_UNIT_CONSTRUCT_FINISH: HUnitEvent
                                                                        
    declare const EVENT_UNIT_UPGRADE_START: HUnitEvent
    declare const EVENT_UNIT_UPGRADE_CANCEL: HUnitEvent
    declare const EVENT_UNIT_UPGRADE_FINISH: HUnitEvent
                                                                        
    // Events which involve the specified unit performing               
    // training of other units                                          
    //                                                                  
    declare const EVENT_UNIT_TRAIN_START: HUnitEvent
    declare const EVENT_UNIT_TRAIN_CANCEL: HUnitEvent
    declare const EVENT_UNIT_TRAIN_FINISH: HUnitEvent
                                                                        
    declare const EVENT_UNIT_RESEARCH_START: HUnitEvent
    declare const EVENT_UNIT_RESEARCH_CANCEL: HUnitEvent
    declare const EVENT_UNIT_RESEARCH_FINISH: HUnitEvent
                                                                        
    declare const EVENT_UNIT_ISSUED_ORDER: HUnitEvent
    declare const EVENT_UNIT_ISSUED_POINT_ORDER: HUnitEvent
    declare const EVENT_UNIT_ISSUED_TARGET_ORDER: HUnitEvent
                                                                       
    declare const EVENT_UNIT_HERO_LEVEL: HUnitEvent
    declare const EVENT_UNIT_HERO_SKILL: HUnitEvent
                                                                        
    declare const EVENT_UNIT_HERO_REVIVABLE: HUnitEvent
    declare const EVENT_UNIT_HERO_REVIVE_START: HUnitEvent
    declare const EVENT_UNIT_HERO_REVIVE_CANCEL: HUnitEvent
    declare const EVENT_UNIT_HERO_REVIVE_FINISH: HUnitEvent
                                                                        
    declare const EVENT_UNIT_SUMMON: HUnitEvent
                                                                        
    declare const EVENT_UNIT_DROP_ITEM: HUnitEvent
    declare const EVENT_UNIT_PICKUP_ITEM: HUnitEvent
    declare const EVENT_UNIT_USE_ITEM: HUnitEvent

    declare const EVENT_UNIT_LOADED: HUnitEvent

    declare const EVENT_WIDGET_DEATH: HwidgEtevent

    declare const EVENT_DIALOG_BUTTON_CLICK: HDialogEvent
    declare const EVENT_DIALOG_CLICK: HDialogEvent

    //===================================================
    // Frozen Throne Expansion Events
    // Need to be added here to preserve compat
    //===================================================

    //===================================================
    // For use declare const TriggerRegisterGameEvent: with

    declare const EVENT_GAME_LOADED: HGameEvent
    declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: HGameEvent
    declare const EVENT_GAME_TOURNAMENT_FINISH_NOW: HGameEvent
    declare const EVENT_GAME_SAVE: HGameEvent

    //===================================================
    // For use with TriggerRegisterPlayerEvent
    //===================================================

    declare const EVENT_PLAYER_ARROW_LEFT_DOWN: HPlayerEvent
    declare const EVENT_PLAYER_ARROW_LEFT_UP: HPlayerEvent
    declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: HPlayerEvent
    declare const EVENT_PLAYER_ARROW_RIGHT_UP: HPlayerEvent
    declare const EVENT_PLAYER_ARROW_DOWN_DOWN: HPlayerEvent
    declare const EVENT_PLAYER_ARROW_DOWN_UP: HPlayerEvent
    declare const EVENT_PLAYER_ARROW_UP_DOWN: HPlayerEvent
    declare const EVENT_PLAYER_ARROW_UP_UP: HPlayerEvent

    //===================================================
    // For use with TriggerRegisterPlayerUnitEvent
    //===================================================

    declare const EVENT_PLAYER_UNIT_SELL: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_CHANGE_OWNER: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_SELL_ITEM: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_SPELL_CAST: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_SPELL_EFFECT: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_SPELL_FINISH: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: HPlayerunitEvent
    declare const EVENT_PLAYER_UNIT_PAWN_ITEM: HPlayerunitEvent

    //===================================================
    // For use with TriggerRegisterUnitEvent
    //===================================================

    declare const EVENT_UNIT_SELL: HUnitEvent
    declare const EVENT_UNIT_CHANGE_OWNER: HUnitEvent
    declare const EVENT_UNIT_SELL_ITEM: HUnitEvent
    declare const EVENT_UNIT_SPELL_CHANNEL: HUnitEvent
    declare const EVENT_UNIT_SPELL_CAST: HUnitEvent
    declare const EVENT_UNIT_SPELL_EFFECT: HUnitEvent
    declare const EVENT_UNIT_SPELL_FINISH: HUnitEvent
    declare const EVENT_UNIT_SPELL_ENDCAST: HUnitEvent
    declare const EVENT_UNIT_PAWN_ITEM: HUnitEvent

    //===================================================
    // Limit Event API constants    
    // variable, player state, game state, and unit state events
    // ( do NOT change the order of these... )
    //===================================================
    declare const LESS_THAN: HLimitop
    declare const LESS_THAN_OR_EQUAL: HLimitop
    declare const EQUAL: HLimitop
    declare const GREATER_THAN_OR_EQUAL: HLimitop
    declare const GREATER_THAN: HLimitop
    declare const NOT_EQUAL: HLimitop

//===================================================
// Unit Type Constants for use with IsUnitType()
//===================================================

    declare const UNIT_TYPE_HERO: HUnitType
    declare const UNIT_TYPE_DEAD: HUnitType
    declare const UNIT_TYPE_STRUCTURE: HUnitType

    declare const UNIT_TYPE_FLYING: HUnitType
    declare const UNIT_TYPE_GROUND: HUnitType

    declare const UNIT_TYPE_ATTACKS_FLYING: HUnitType
    declare const UNIT_TYPE_ATTACKS_GROUND: HUnitType

    declare const UNIT_TYPE_MELEE_ATTACKER: HUnitType
    declare const UNIT_TYPE_RANGED_ATTACKER: HUnitType

    declare const UNIT_TYPE_GIANT: HUnitType
    declare const UNIT_TYPE_SUMMONED: HUnitType
    declare const UNIT_TYPE_STUNNED: HUnitType
    declare const UNIT_TYPE_PLAGUED: HUnitType
    declare const UNIT_TYPE_SNARED: HUnitType

    declare const UNIT_TYPE_UNDEAD: HUnitType
    declare const UNIT_TYPE_MECHANICAL: HUnitType
    declare const UNIT_TYPE_PEON: HUnitType
    declare const UNIT_TYPE_SAPPER: HUnitType
    declare const UNIT_TYPE_TOWNHALL: HUnitType
    declare const UNIT_TYPE_ANCIENT: HUnitType
    
    declare const UNIT_TYPE_TAUREN: HUnitType
    declare const UNIT_TYPE_POISONED: HUnitType
    declare const UNIT_TYPE_POLYMORPHED: HUnitType
    declare const UNIT_TYPE_SLEEPING: HUnitType
    declare const UNIT_TYPE_RESISTANT: HUnitType
    declare const UNIT_TYPE_ETHEREAL: HUnitType
    declare const UNIT_TYPE_MAGIC_IMMUNE: HUnitType

//===================================================
// Unit Type Constants for use with ChooseRandomItemEx()
//===================================================

    declare const ITEM_TYPE_PERMANENT: HItemType
    declare const ITEM_TYPE_CHARGED: HItemType
    declare const ITEM_TYPE_POWERUP: HItemType
    declare const ITEM_TYPE_ARTIFACT: HItemType
    declare const ITEM_TYPE_PURCHASABLE: HItemType
    declare const ITEM_TYPE_CAMPAIGN: HItemType
    declare const ITEM_TYPE_MISCELLANEOUS: HItemType
    declare const ITEM_TYPE_UNKNOWN: HItemType
    declare const ITEM_TYPE_ANY: HItemType

    // Deprecated, should use ITEM_TYPE_POWERUP
    declare const ITEM_TYPE_TOME: HItemType

//===================================================
// Animatable Camera Fields
//===================================================

    declare const CAMERA_FIELD_TARGET_DISTANCE: HCameraField
    declare const CAMERA_FIELD_FARZ: HCameraField
    declare const CAMERA_FIELD_ANGLE_OF_ATTACK: HCameraField
    declare const CAMERA_FIELD_FIELD_OF_VIEW: HCameraField
    declare const CAMERA_FIELD_ROLL: HCameraField
    declare const CAMERA_FIELD_ROTATION: HCameraField
    declare const CAMERA_FIELD_ZOFFSET: HCameraField

    declare const BLEND_MODE_NONE: HBlendMode
    declare const BLEND_MODE_DONT_CARE: HBlendMode
    declare const BLEND_MODE_KEYALPHA: HBlendMode
    declare const BLEND_MODE_BLEND: HBlendMode
    declare const BLEND_MODE_ADDITIVE: HBlendMode
    declare const BLEND_MODE_MODULATE: HBlendMode
    declare const BLEND_MODE_MODULATE_2X: HBlendMode
    
    declare const RARITY_FREQUENT: HRarityControl
    declare const RARITY_RARE: HRarityControl

    declare const TEXMAP_FLAG_NONE: HTexMapFlags
    declare const TEXMAP_FLAG_WRAP_U: HTexMapFlags
    declare const TEXMAP_FLAG_WRAP_V: HTexMapFlags
    declare const TEXMAP_FLAG_WRAP_UV: HTexMapFlags

    declare const FOG_OF_WAR_MASKED: HFogState
    declare const FOG_OF_WAR_FOGGED: HFogState
    declare const FOG_OF_WAR_VISIBLE: HFogState

//===================================================
// Camera Margin constants for use with GetCameraMargin
//===================================================

    declare const CAMERA_MARGIN_LEFT: number
    declare const CAMERA_MARGIN_RIGHT: number
    declare const CAMERA_MARGIN_TOP: number
    declare const CAMERA_MARGIN_BOTTOM: number

//===================================================
// Effect API constants
//===================================================

    declare const EFFECT_TYPE_EFFECT: HEffectType
    declare const EFFECT_TYPE_TARGET: HEffectType
    declare const EFFECT_TYPE_CASTER: HEffectType
    declare const EFFECT_TYPE_SPECIAL: HEffectType
    declare const EFFECT_TYPE_AREA_EFFECT: HEffectType
    declare const EFFECT_TYPE_MISSILE: HEffectType
    declare const EFFECT_TYPE_LIGHTNING: HEffectType

    declare const SOUND_TYPE_EFFECT: HSoundType
    declare const SOUND_TYPE_EFFECT_LOOPED: HSoundType
