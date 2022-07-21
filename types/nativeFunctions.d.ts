/** @noSelfInFile **/

declare function ConvertRace(i: number): HRace;
declare function ConvertAllianceType(i: number): HAllianceType;
declare function ConvertRacePref(i: number): HRacePreference;
declare function ConvertIGameState(i: number): HIGameState;
declare function ConvertFGameState(i: number): HFGameState;
declare function ConvertPlayerState(i: number): HPlayerState;
declare function ConvertPlayerScore(i: number): HPlayerScore;
declare function ConvertPlayerGameResult(i: number): HPlayerGameResult;
declare function ConvertUnitState(i: number): HUnitState;
declare function ConvertAIDifficulty(i: number): HAIDifficulty;
declare function ConvertGameEvent(i: number): HGameEvent;
declare function ConvertPlayerEvent(i: number): HPlayerEvent;
declare function ConvertPlayerUnitEvent(i: number): HPlayerunitEvent;
declare function ConvertWidgetEvent(i: number): HwidgEtevent;
declare function ConvertDialogEvent(i: number): HDialogEvent;
declare function ConvertUnitEvent(i: number): HUnitEvent;
declare function ConvertLimitOp(i: number): HLimitop;
declare function ConvertUnitType(i: number): HUnitType;
declare function ConvertGameSpeed(i: number): HGameSpeed;
declare function ConvertPlacement(i: number): HPlacement;
declare function ConvertStartLocPrio(i: number): HStartLocPrio;
declare function ConvertGameDifficulty(i: number): HGameDifficulty;
declare function ConvertGameType(i: number): HGameType;
declare function ConvertMapFlag(i: number): HMapFlag;
declare function ConvertMapVisibility(i: number): HMapVisibility;
declare function ConvertMapSetting(i: number): HMapSetting;
declare function ConvertMapDensity(i: number): HMapDensity;
declare function ConvertMapControl(i: number): HMapControl;
declare function ConvertPlayerColor(i: number): HPlayerColor;
declare function ConvertPlayerSlotState(i: number): HPlayerSlotState;
declare function ConvertVolumeGroup(i: number): HVolumeGroup;
declare function ConvertCameraField(i: number): HCameraField;
declare function ConvertBlendMode(i: number): HBlendMode;
declare function ConvertRarityControl(i: number): HRarityControl;
declare function ConvertTexMapFlags(i: number): HTexMapFlags;
declare function ConvertFogState(i: number): HFogState;
declare function ConvertEffectType(i: number): HEffectType;
declare function ConvertVersion(i: number): HVersion;
declare function ConvertItemType(i: number): HItemType;
declare function ConvertAttackType(i: number): HAttackType;
declare function ConvertDamageType(i: number): HDamageType;
declare function ConvertWeaponType(i: number): HWeaponType;
declare function ConvertSoundType(i: number): HSoundType;
declare function ConvertPathingType(i: number): HPathingType;
declare function ConvertAnimType(i: number): HAnimType;
declare function ConvertSubAnimType(i: number): HSubAnimType;
declare function ConvertOriginFrameType(i: number): HOriginFrameType;
declare function ConvertFramePointType(i: number): HFramePointType;
declare function ConvertTextAlignType(i: number): HTextAlignType;
declare function ConvertFrameEventType(i: number): HFrameEventType;
declare function ConvertOsKeyType(i: number): HOsKeyType;
declare function ConvertAbilityIntegerField(i: number): HAbilityIntegerField;
declare function ConvertAbilityRealField(i: number): HAbilityRealField;
declare function ConvertAbilityBooleanField(i: number): HAbilityBooleanField;
declare function ConvertAbilityStringField(i: number): HAbilityStringField;
declare function ConvertAbilityIntegerLevelField(
  i: number
): HAbilityIntegerLevelField;
declare function ConvertAbilityRealLevelField(
  i: number
): HAbilityRealLevelField;
declare function ConvertAbilityBooleanLevelField(
  i: number
): HAbilityBooleanLevelField;
declare function ConvertAbilityStringLevelField(
  i: number
): HAbilityStringLevelField;
declare function ConvertAbilityIntegerLevelArrayField(
  i: number
): HAbilityIntegerLevelArrayField;
declare function ConvertAbilityRealLevelArrayField(
  i: number
): HAbilityRealLevelArrayField;
declare function ConvertAbilityBooleanLevelArrayField(
  i: number
): HAbilityBooleanLevelArrayField;
declare function ConvertAbilityStringLevelArrayField(
  i: number
): HAbilityStringLevelArrayField;
declare function ConvertUnitIntegerField(i: number): HUnitIntegerField;
declare function ConvertUnitRealField(i: number): HUnitRealField;
declare function ConvertUnitBooleanField(i: number): HUnitBooleanField;
declare function ConvertUnitStringField(i: number): HUnitStringField;
declare function ConvertUnitWeaponIntegerField(
  i: number
): HUnitWeaponIntegerField;
declare function ConvertUnitWeaponRealField(i: number): HUnitWeaponRealField;
declare function ConvertUnitWeaponBooleanField(
  i: number
): HUnitWeaponBooleanField;
declare function ConvertUnitWeaponStringField(
  i: number
): HUnitWeaponStringField;
declare function ConvertItemIntegerField(i: number): HItemIntegerField;
declare function ConvertItemRealField(i: number): HItemRealField;
declare function ConvertItemBooleanField(i: number): HItemBooleanField;
declare function ConvertItemStringField(i: number): HItemStringField;
declare function ConvertMoveType(i: number): HMoveType;
declare function ConvertTargetFlag(i: number): HTargetFlag;
declare function ConvertArmorType(i: number): HArmorType;
declare function ConvertHeroAttribute(i: number): HHeroAttribute;
declare function ConvertDefenseType(i: number): HDefenseType;
declare function ConvertRegenType(i: number): HRegenType;
declare function ConvertUnitCategory(i: number): HUnitCategory;
declare function ConvertPathingFlag(i: number): HPathingFlag;
declare function IntegerToHandle(i: number): HHandle;
declare function AddressToHandle(i: number): HHandle;
declare function HandleToAddress(h: HHandle): number;
declare function HandleToAgent(h: HHandle): HAgent;
declare function HandleToEvent(h: HHandle): HEvent;
declare function HandleToWidget(h: HHandle): HWidget;
declare function HandleToUnit(h: HHandle): HUnit;
declare function HandleToDestructable(h: HHandle): HDestructable;
declare function HandleToItem(h: HHandle): HItem;
declare function HandleToAbility(h: HHandle): HAbility;
declare function HandleToBuff(h: HHandle): HBuff;
declare function HandleToForce(h: HHandle): HForce;
declare function HandleToGroup(h: HHandle): HGroup;
declare function HandleToTrigger(h: HHandle): HTrigger;
declare function HandleToTriggercondition(h: HHandle): HTriggerCondition;
declare function HandleToTriggeraction(h: HHandle): HTriggerAction;
declare function HandleToTimer(h: HHandle): HTimer;
declare function HandleToLocation(h: HHandle): HLocation;
declare function HandleToRegion(h: HHandle): HRegion;
declare function HandleToRect(h: HHandle): HRect;
declare function HandleToBoolexpr(h: HHandle): HBoolExpr;
declare function HandleToSound(h: HHandle): HSound;
declare function HandleToConditionfunc(h: HHandle): HConditionFunc;
declare function HandleToFilterfunc(h: HHandle): HFilterFunc;
declare function HandleToUnitpool(h: HHandle): HUnitPool;
declare function HandleToItempool(h: HHandle): HItemPool;
declare function HandleToRace(h: HHandle): HRace;
declare function HandleToAlliancetype(h: HHandle): HAllianceType;
declare function HandleToRacepreference(h: HHandle): HRacePreference;
declare function HandleToGamestate(h: HHandle): HGameState;
declare function HandleToIGamestate(h: HHandle): HIGameState;
declare function HandleToFGamestate(h: HHandle): HFGameState;
declare function HandleToPlayerstate(h: HHandle): HPlayerState;
declare function HandleToPlayerscore(h: HHandle): HPlayerScore;
declare function HandleToPlayergameresult(h: HHandle): HPlayerGameResult;
declare function HandleToUnitstate(h: HHandle): HUnitState;
declare function HandleToAIDifficulty(h: HHandle): HAIDifficulty;
declare function HandleToEventid(h: HHandle): HEventId;
declare function HandleToGameevent(h: HHandle): HGameEvent;
declare function HandleToPlayerevent(h: HHandle): HPlayerEvent;
declare function HandleToPlayerunitevent(h: HHandle): HPlayerunitEvent;
declare function HandleToUnitevent(h: HHandle): HUnitEvent;
declare function HandleToLimitop(h: HHandle): HLimitop;
declare function HandleToWidgetevent(h: HHandle): HwidgEtevent;
declare function HandleToDialogevent(h: HHandle): HDialogEvent;
declare function HandleToUnittype(h: HHandle): HUnitType;
declare function HandleToGamespeed(h: HHandle): HGameSpeed;
declare function HandleToGamedifficulty(h: HHandle): HGameDifficulty;
declare function HandleToGametype(h: HHandle): HGameType;
declare function HandleToMapflag(h: HHandle): HMapFlag;
declare function HandleToMapvisibility(h: HHandle): HMapVisibility;
declare function HandleToMapsetting(h: HHandle): HMapSetting;
declare function HandleToMapdensity(h: HHandle): HMapDensity;
declare function HandleToMapcontrol(h: HHandle): HMapControl;
declare function HandleToPlayerslotstate(h: HHandle): HPlayerSlotState;
declare function HandleToVolumegroup(h: HHandle): HVolumeGroup;
declare function HandleToCamerafield(h: HHandle): HCameraField;
declare function HandleToCamerasetup(h: HHandle): HCameraSetup;
declare function HandleToPlayercolor(h: HHandle): HPlayerColor;
declare function HandleToPlacement(h: HHandle): HPlacement;
declare function HandleToStartlocprio(h: HHandle): HStartLocPrio;
declare function HandleToRaritycontrol(h: HHandle): HRarityControl;
declare function HandleToBlendmode(h: HHandle): HBlendMode;
declare function HandleToTexmapflags(h: HHandle): HTexMapFlags;
declare function HandleToEffect(h: HHandle): HEffect;
declare function HandleToEffecttype(h: HHandle): HEffectType;
declare function HandleToWeathereffect(h: HHandle): HWeatherEffect;
declare function HandleToTerraindeformation(h: HHandle): HTerrainDeformation;
declare function HandleToFogstate(h: HHandle): HFogState;
declare function HandleToFogmodifier(h: HHandle): HFogModifier;
declare function HandleToDialog(h: HHandle): HDialog;
declare function HandleToButton(h: HHandle): HButton;
declare function HandleToQuest(h: HHandle): HQuest;
declare function HandleToQuestitem(h: HHandle): HQuestItem;
declare function HandleToDefeatcondition(h: HHandle): HDefeatCondition;
declare function HandleToTimerdialog(h: HHandle): HTimerDialog;
declare function HandleToLeaderboard(h: HHandle): HLeaderBoard;
declare function HandleToMultiboard(h: HHandle): HMultiBoard;
declare function HandleToMultiboarditem(h: HHandle): HMultiBoardItem;
declare function HandleToTrackable(h: HHandle): HTrackable;
declare function HandleToGamecache(h: HHandle): HGameCache;
declare function HandleToVersion(h: HHandle): HVersion;
declare function HandleToItemtype(h: HHandle): HItemType;
declare function HandleToTexttag(h: HHandle): HTextTag;
declare function HandleToAttacktype(h: HHandle): HAttackType;
declare function HandleToDamagetype(h: HHandle): HDamageType;
declare function HandleToWeapontype(h: HHandle): HWeaponType;
declare function HandleToSoundtype(h: HHandle): HSoundType;
declare function HandleToLightning(h: HHandle): HLightning;
declare function HandleToPathingtype(h: HHandle): HPathingType;
declare function HandleToImage(h: HHandle): HImage;
declare function HandleToUbersplat(h: HHandle): HUberSplat;
declare function HandleToHashtable(h: HHandle): HHashTable;
declare function HandleToAnimType(h: HHandle): HAnimType;
declare function HandleToSubAnimType(h: HHandle): HSubAnimType;
declare function OrderId(orderIdString: string): number;
declare function OrderId2String(orderId: number): string;
declare function UnitId(unitIdString: string): number;
declare function UnitId2String(unitId: number): string;
declare function AbilityId(abilityIdString: string): number;
declare function AbilityId2String(abilityId: number): string;
declare function GetObjectName(objectId: number): string;
declare function Deg2Rad(degrees: number): number;
declare function Rad2Deg(radians: number): number;
declare function Sin(radians: number): number;
declare function Cos(radians: number): number;
declare function Tan(radians: number): number;
declare function Asin(y: number): number;
declare function Acos(x: number): number;
declare function Atan(x: number): number;
declare function Atan2(y: number, x: number): number;
declare function SquareRoot(x: number): number;
declare function Pow(x: number, power: number): number;
declare function I2R(i: number): number;
declare function R2I(r: number): number;
declare function I2S(i: number): string;
declare function R2S(r: number): string;
declare function R2SW(r: number, width: number, precision: number): string;
declare function S2I(s: string): number;
declare function S2R(s: string): number;
declare function GetHandleId(h: HHandle): number;
declare function SubString(source: string, start: number, end: number): string;
declare function StringLength(s: string): number;
declare function StringCase(source: string, upper: boolean): string;
declare function StringHash(s: string): number;
declare function GetLocalizedString(source: string): string;
declare function GetLocalizedHotkey(source: string): number;
declare function SetMapName(name: string): void;
declare function SetMapDescription(description: string): void;
declare function SetTeams(teamcount: number): void;
declare function SetPlayers(playercount: number): void;
declare function DefineStartLocation(
  whichStartLoc: number,
  x: number,
  y: number
): void;
declare function DefineStartLocationLoc(
  whichStartLoc: number,
  whichLocation: HLocation
): void;
declare function SetStartLocPrioCount(
  whichStartLoc: number,
  prioSlotCount: number
): void;
declare function SetStartLocPrio(
  whichStartLoc: number,
  prioSlotIndex: number,
  otherStartLocIndex: number,
  priority: HStartLocPrio
): void;
declare function GetStartLocPrioSlot(
  whichStartLoc: number,
  prioSlotIndex: number
): number;
declare function GetStartLocPrio(
  whichStartLoc: number,
  prioSlotIndex: number
): HStartLocPrio;
declare function SetGameTypeSupported(
  whichGameType: HGameType,
  value: boolean
): void;
declare function SetMapFlag(whichMapFlag: HMapFlag, value: boolean): void;
declare function SetGamePlacement(whichPlacementType: HPlacement): void;
declare function SetGameSpeed(whichspeed: HGameSpeed): void;
declare function SetGameDifficulty(whichdifficulty: HGameDifficulty): void;
declare function SetResourceDensity(whichdensity: HMapDensity): void;
declare function SetCreatureDensity(whichdensity: HMapDensity): void;
declare function GetTeams(): number;
declare function GetPlayers(): number;
declare function IsGameTypeSupported(whichGameType: HGameType): boolean;
declare function GetGameTypeSelected(): HGameType;
declare function IsMapFlagSet(whichMapFlag: HMapFlag): boolean;
declare function GetGamePlacement(): HPlacement;
declare function GetGameSpeed(): HGameSpeed;
declare function GetGameDifficulty(): HGameDifficulty;
declare function GetResourceDensity(): HMapDensity;
declare function GetCreatureDensity(): HMapDensity;
declare function GetStartLocationX(whichStartLocation: number): number;
declare function GetStartLocationY(whichStartLocation: number): number;
declare function GetStartLocationLoc(whichStartLocation: number): HLocation;
declare function SetPlayerTeam(whichPlayer: HPlayer, whichTeam: number): void;
declare function SetPlayerStartLocation(
  whichPlayer: HPlayer,
  startLocIndex: number
): void;
declare function ForcePlayerStartLocation(
  whichPlayer: HPlayer,
  startLocIndex: number
): void;
declare function SetPlayerColor(
  whichPlayer: HPlayer,
  color: HPlayerColor
): void;
declare function SetPlayerAlliance(
  sourcePlayer: HPlayer,
  otherPlayer: HPlayer,
  whichAllianceSetting: HAllianceType,
  value: boolean
): void;
declare function SetPlayerTaxRate(
  sourcePlayer: HPlayer,
  otherPlayer: HPlayer,
  whichResource: HPlayerState,
  rate: number
): void;
declare function SetPlayerRacePreference(
  whichPlayer: HPlayer,
  whichRacePreference: HRacePreference
): void;
declare function SetPlayerRaceSelectable(
  whichPlayer: HPlayer,
  value: boolean
): void;
declare function SetPlayerController(
  whichPlayer: HPlayer,
  controlType: HMapControl
): void;
declare function SetPlayerName(whichPlayer: HPlayer, name: string): void;
declare function SetPlayerOnScoreScreen(
  whichPlayer: HPlayer,
  flag: boolean
): void;
declare function GetPlayerTeam(whichPlayer: HPlayer): number;
declare function GetPlayerStartLocation(whichPlayer: HPlayer): number;
declare function GetPlayerColor(whichPlayer: HPlayer): HPlayerColor;
declare function GetPlayerSelectable(whichPlayer: HPlayer): boolean;
declare function GetPlayerController(whichPlayer: HPlayer): HMapControl;
declare function GetPlayerSlotState(whichPlayer: HPlayer): HPlayerSlotState;
declare function GetPlayerTaxRate(
  sourcePlayer: HPlayer,
  otherPlayer: HPlayer,
  whichResource: HPlayerState
): number;
declare function IsPlayerRacePrefSet(
  whichPlayer: HPlayer,
  pref: HRacePreference
): boolean;
declare function GetPlayerName(whichPlayer: HPlayer): string;
declare function CreateTimer(): HTimer;
declare function DestroyTimer(whichTimer: HTimer): void;
declare function TimerStart(
  whichTimer: HTimer,
  timeout: number,
  periodic: boolean,
  handlerFunc: TCode
): void;
declare function TimerGetElapsed(whichTimer: HTimer): number;
declare function TimerGetRemaining(whichTimer: HTimer): number;
declare function TimerGetTimeout(whichTimer: HTimer): number;
declare function PauseTimer(whichTimer: HTimer): void;
declare function ResumeTimer(whichTimer: HTimer): void;
declare function GetExpiredTimer(): HTimer;
declare function CreateGroup(): HGroup;
declare function DestroyGroup(whichGroup: HGroup): void;
declare function GroupAddUnit(whichGroup: HGroup, whichUnit: HUnit): void;
declare function GroupRemoveUnit(whichGroup: HGroup, whichUnit: HUnit): void;
declare function GroupClear(whichGroup: HGroup): void;
declare function GroupEnumUnitsOfType(
  whichGroup: HGroup,
  unitname: string,
  filter: HBoolExpr
): void;
declare function GroupEnumUnitsOfPlayer(
  whichGroup: HGroup,
  whichPlayer: HPlayer,
  filter: HBoolExpr
): void;
declare function GroupEnumUnitsOfTypeCounted(
  whichGroup: HGroup,
  unitname: string,
  filter: HBoolExpr,
  countLimit: number
): void;
declare function GroupEnumUnitsInRect(
  whichGroup: HGroup,
  r: HRect,
  filter: HBoolExpr
): void;
declare function GroupEnumUnitsInRectCounted(
  whichGroup: HGroup,
  r: HRect,
  filter: HBoolExpr,
  countLimit: number
): void;
declare function GroupEnumUnitsInRange(
  whichGroup: HGroup,
  x: number,
  y: number,
  radius: number,
  filter: HBoolExpr
): void;
declare function GroupEnumUnitsInRangeOfLoc(
  whichGroup: HGroup,
  whichLocation: HLocation,
  radius: number,
  filter: HBoolExpr
): void;
declare function GroupEnumUnitsInRangeCounted(
  whichGroup: HGroup,
  x: number,
  y: number,
  radius: number,
  filter: HBoolExpr,
  countLimit: number
): void;
declare function GroupEnumUnitsInRangeOfLocCounted(
  whichGroup: HGroup,
  whichLocation: HLocation,
  radius: number,
  filter: HBoolExpr,
  countLimit: number
): void;
declare function GroupEnumUnitsSelected(
  whichGroup: HGroup,
  whichPlayer: HPlayer,
  filter: HBoolExpr
): void;
declare function GroupImmediateOrder(
  whichGroup: HGroup,
  order: string
): boolean;
declare function GroupImmediateOrderById(
  whichGroup: HGroup,
  order: number
): boolean;
declare function GroupPointOrder(
  whichGroup: HGroup,
  order: string,
  x: number,
  y: number
): boolean;
declare function GroupPointOrderLoc(
  whichGroup: HGroup,
  order: string,
  whichLocation: HLocation
): boolean;
declare function GroupPointOrderById(
  whichGroup: HGroup,
  order: number,
  x: number,
  y: number
): boolean;
declare function GroupPointOrderByIdLoc(
  whichGroup: HGroup,
  order: number,
  whichLocation: HLocation
): boolean;
declare function GroupTargetOrder(
  whichGroup: HGroup,
  order: string,
  targetWidget: HWidget
): boolean;
declare function GroupTargetOrderById(
  whichGroup: HGroup,
  order: number,
  targetWidget: HWidget
): boolean;
declare function ForGroup(whichGroup: HGroup, callback: TCode): void;
declare function FirstOfGroup(whichGroup: HGroup): HUnit;
declare function CreateForce(): HForce;
declare function DestroyForce(whichForce: HForce): void;
declare function ForceAddPlayer(whichForce: HForce, whichPlayer: HPlayer): void;
declare function ForceRemovePlayer(
  whichForce: HForce,
  whichPlayer: HPlayer
): void;
declare function ForceClear(whichForce: HForce): void;
declare function ForceEnumPlayers(whichForce: HForce, filter: HBoolExpr): void;
declare function ForceEnumPlayersCounted(
  whichForce: HForce,
  filter: HBoolExpr,
  countLimit: number
): void;
declare function ForceEnumAllies(
  whichForce: HForce,
  whichPlayer: HPlayer,
  filter: HBoolExpr
): void;
declare function ForceEnumEnemies(
  whichForce: HForce,
  whichPlayer: HPlayer,
  filter: HBoolExpr
): void;
declare function ForForce(whichForce: HForce, callback: TCode): void;
declare function Rect(
  minx: number,
  miny: number,
  maxx: number,
  maxy: number
): HRect;
declare function RectFromLoc(min: HLocation, max: HLocation): HRect;
declare function RemoveRect(whichRect: HRect): void;
declare function SetRect(
  whichRect: HRect,
  minx: number,
  miny: number,
  maxx: number,
  maxy: number
): void;
declare function SetRectFromLoc(
  whichRect: HRect,
  min: HLocation,
  max: HLocation
): void;
declare function MoveRectTo(
  whichRect: HRect,
  newCenterX: number,
  newCenterY: number
): void;
declare function MoveRectToLoc(whichRect: HRect, newCenterLoc: HLocation): void;
declare function GetRectCenterX(whichRect: HRect): number;
declare function GetRectCenterY(whichRect: HRect): number;
declare function GetRectMinX(whichRect: HRect): number;
declare function GetRectMinY(whichRect: HRect): number;
declare function GetRectMaxX(whichRect: HRect): number;
declare function GetRectMaxY(whichRect: HRect): number;
declare function CreateRegion(): HRegion;
declare function RemoveRegion(whichRegion: HRegion): void;
declare function RegionAddRect(whichRegion: HRegion, r: HRect): void;
declare function RegionClearRect(whichRegion: HRegion, r: HRect): void;
declare function RegionAddCell(
  whichRegion: HRegion,
  x: number,
  y: number
): void;
declare function RegionAddCellAtLoc(
  whichRegion: HRegion,
  whichLocation: HLocation
): void;
declare function RegionClearCell(
  whichRegion: HRegion,
  x: number,
  y: number
): void;
declare function RegionClearCellAtLoc(
  whichRegion: HRegion,
  whichLocation: HLocation
): void;
declare function Location(x: number, y: number): HLocation;
declare function RemoveLocation(whichLocation: HLocation): void;
declare function MoveLocation(
  whichLocation: HLocation,
  newX: number,
  newY: number
): void;
declare function GetLocationX(whichLocation: HLocation): number;
declare function GetLocationY(whichLocation: HLocation): number;
declare function GetLocationZ(whichLocation: HLocation): number;
declare function IsUnitInRegion(
  whichRegion: HRegion,
  whichUnit: HUnit
): boolean;
declare function IsPointInRegion(
  whichRegion: HRegion,
  x: number,
  y: number
): boolean;
declare function IsLocationInRegion(
  whichRegion: HRegion,
  whichLocation: HLocation
): boolean;
declare function GetWorldBounds(): HRect;
declare function CreateTrigger(): HTrigger;
declare function DestroyTrigger(whichTrigger: HTrigger): void;
declare function ResetTrigger(whichTrigger: HTrigger): void;
declare function EnableTrigger(whichTrigger: HTrigger): void;
declare function DisableTrigger(whichTrigger: HTrigger): void;
declare function IsTriggerEnabled(whichTrigger: HTrigger): boolean;
declare function TriggerWaitOnSleeps(
  whichTrigger: HTrigger,
  flag: boolean
): void;
declare function IsTriggerWaitOnSleeps(whichTrigger: HTrigger): boolean;
declare function GetFilterUnit(): HUnit;
declare function GetEnumUnit(): HUnit;
declare function GetFilterDestructable(): HDestructable;
declare function GetEnumDestructable(): HDestructable;
declare function GetFilterItem(): HItem;
declare function GetEnumItem(): HItem;
declare function GetFilterPlayer(): HPlayer;
declare function GetEnumPlayer(): HPlayer;
declare function GetTriggeringTrigger(): HTrigger;
declare function GetTriggerEventId(): HEventId;
declare function GetTriggerEvalCount(whichTrigger: HTrigger): number;
declare function GetTriggerExecCount(whichTrigger: HTrigger): number;
declare function ExecuteFunc(funcName: string): void;
declare function And(operandA: HBoolExpr, operandB: HBoolExpr): HBoolExpr;
declare function Or(operandA: HBoolExpr, operandB: HBoolExpr): HBoolExpr;
declare function Not(operand: HBoolExpr): HBoolExpr;
declare function Condition(func: TCode): HConditionFunc;
declare function DestroyCondition(c: HConditionFunc): void;
declare function Filter(func: TCode): HFilterFunc;
declare function DestroyFilter(f: HFilterFunc): void;
declare function DestroyBoolExpr(e: HBoolExpr): void;
declare function TriggerRegisterVariableEvent(
  whichTrigger: HTrigger,
  varName: string,
  opcode: HLimitop,
  limitval: number
): HEvent;
declare function TriggerRegisterTimerEvent(
  whichTrigger: HTrigger,
  timeout: number,
  periodic: boolean
): HEvent;
declare function TriggerRegisterTimerExpireEvent(
  whichTrigger: HTrigger,
  t: HTimer
): HEvent;
declare function TriggerRegisterGameStateEvent(
  whichTrigger: HTrigger,
  whichState: HGameState,
  opcode: HLimitop,
  limitval: number
): HEvent;
declare function TriggerRegisterDialogEvent(
  whichTrigger: HTrigger,
  whichDialog: HDialog
): HEvent;
declare function TriggerRegisterDialogButtonEvent(
  whichTrigger: HTrigger,
  whichButton: HButton
): HEvent;
declare function GetEventGameState(): HGameState;
declare function TriggerRegisterGameEvent(
  whichTrigger: HTrigger,
  whichGameEvent: HGameEvent
): HEvent;
declare function GetWinningPlayer(): HPlayer;
declare function TriggerRegisterEnterRegion(
  whichTrigger: HTrigger,
  whichRegion: HRegion,
  filter: HBoolExpr
): HEvent;
declare function GetTriggeringRegion(): HRegion;
declare function GetEnteringUnit(): HUnit;
declare function TriggerRegisterLeaveRegion(
  whichTrigger: HTrigger,
  whichRegion: HRegion,
  filter: HBoolExpr
): HEvent;
declare function GetLeavingUnit(): HUnit;
declare function TriggerRegisterTrackableHitEvent(
  whichTrigger: HTrigger,
  t: HTrackable
): HEvent;
declare function TriggerRegisterTrackableTrackEvent(
  whichTrigger: HTrigger,
  t: HTrackable
): HEvent;
declare function GetTriggeringTrackable(): HTrackable;
declare function GetClickedButton(): HButton;
declare function GetClickedDialog(): HDialog;
declare function GetTournamentFinishSoonTimeRemaining(): number;
declare function GetTournamentFinishNowRule(): number;
declare function GetTournamentFinishNowPlayer(): HPlayer;
declare function GetTournamentScore(whichPlayer: HPlayer): number;
declare function GetSaveBasicFilename(): string;
declare function TriggerRegisterPlayerEvent(
  whichTrigger: HTrigger,
  whichPlayer: HPlayer,
  whichPlayerEvent: HPlayerEvent
): HEvent;
declare function GetTriggerPlayer(): HPlayer;
declare function TriggerRegisterPlayerUnitEvent(
  whichTrigger: HTrigger,
  whichPlayer: HPlayer,
  whichPlayerUnitEvent: HPlayerunitEvent,
  filter: HBoolExpr
): HEvent;
declare function GetLevelingUnit(): HUnit;
declare function GetLearningUnit(): HUnit;
declare function GetLearnedSkill(): number;
declare function GetLearnedSkillLevel(): number;
declare function GetRevivableUnit(): HUnit;
declare function GetRevivingUnit(): HUnit;
declare function GetAttacker(): HUnit;
declare function GetRescuer(): HUnit;
declare function GetDyingUnit(): HUnit;
declare function GetKillingUnit(): HUnit;
declare function GetDecayingUnit(): HUnit;
declare function GetConstructingStructure(): HUnit;
declare function GetCancelledStructure(): HUnit;
declare function GetConstructedStructure(): HUnit;
declare function GetResearchingUnit(): HUnit;
declare function GetResearched(): number;
declare function GetTrainedUnitType(): number;
declare function GetTrainedUnit(): HUnit;
declare function GetDetectedUnit(): HUnit;
declare function GetSummoningUnit(): HUnit;
declare function GetSummonedUnit(): HUnit;
declare function GetTransportUnit(): HUnit;
declare function GetLoadedUnit(): HUnit;
declare function GetSellingUnit(): HUnit;
declare function GetSoldUnit(): HUnit;
declare function GetBuyingUnit(): HUnit;
declare function GetSoldItem(): HItem;
declare function GetChangingUnit(): HUnit;
declare function GetChangingUnitPrevOwner(): HPlayer;
declare function GetManipulatingUnit(): HUnit;
declare function GetManipulatedItem(): HItem;
declare function GetOrderedUnit(): HUnit;
declare function GetIssuedOrderId(): number;
declare function GetOrderPointX(): number;
declare function GetOrderPointY(): number;
declare function GetOrderPointLoc(): HLocation;
declare function GetOrderTarget(): HWidget;
declare function GetOrderTargetDestructable(): HDestructable;
declare function GetOrderTargetItem(): HItem;
declare function GetOrderTargetUnit(): HUnit;
declare function GetSpellAbilityUnit(): HUnit;
declare function GetSpellAbilityId(): number;
declare function GetSpellAbility(): HAbility;
declare function GetSpellTargetLoc(): HLocation;
declare function GetSpellTargetX(): number;
declare function GetSpellTargetY(): number;
declare function GetSpellTargetDestructable(): HDestructable;
declare function GetSpellTargetItem(): HItem;
declare function GetSpellTargetUnit(): HUnit;
declare function TriggerRegisterPlayerAllianceChange(
  whichTrigger: HTrigger,
  whichPlayer: HPlayer,
  whichAlliance: HAllianceType
): HEvent;
declare function TriggerRegisterPlayerStateEvent(
  whichTrigger: HTrigger,
  whichPlayer: HPlayer,
  whichState: HPlayerState,
  opcode: HLimitop,
  limitval: number
): HEvent;
declare function GetEventPlayerState(): HPlayerState;
declare function TriggerRegisterPlayerChatEvent(
  whichTrigger: HTrigger,
  whichPlayer: HPlayer,
  chatMessageToDetect: string,
  exactMatchOnly: boolean
): HEvent;
declare function GetEventPlayerChatString(): string;
declare function GetEventPlayerChatStringMatched(): string;
declare function TriggerRegisterDeathEvent(
  whichTrigger: HTrigger,
  whichWidget: HWidget
): HEvent;
declare function GetTriggerUnit(): HUnit;
declare function TriggerRegisterUnitStateEvent(
  whichTrigger: HTrigger,
  whichUnit: HUnit,
  whichState: HUnitState,
  opcode: HLimitop,
  limitval: number
): HEvent;
declare function GetEventUnitState(): HUnitState;
declare function TriggerRegisterUnitEvent(
  whichTrigger: HTrigger,
  whichUnit: HUnit,
  whichEvent: HUnitEvent
): HEvent;
declare function GetEventDamage(): number;
declare function GetEventDamageSource(): HUnit;
declare function GetEventDetectingPlayer(): HPlayer;
declare function TriggerRegisterFilterUnitEvent(
  whichTrigger: HTrigger,
  whichUnit: HUnit,
  whichEvent: HUnitEvent,
  filter: HBoolExpr
): HEvent;
declare function GetEventTargetUnit(): HUnit;
declare function TriggerRegisterUnitInRange(
  whichTrigger: HTrigger,
  whichUnit: HUnit,
  range: number,
  filter: HBoolExpr
): HEvent;
declare function TriggerAddCondition(
  whichTrigger: HTrigger,
  condition: HBoolExpr
): HTriggerCondition;
declare function TriggerRemoveCondition(
  whichTrigger: HTrigger,
  whichCondition: HTriggerCondition
): void;
declare function TriggerClearConditions(whichTrigger: HTrigger): void;
declare function TriggerAddAction(
  whichTrigger: HTrigger,
  actionFunc: TCode
): HTriggerAction;
declare function TriggerRemoveAction(
  whichTrigger: HTrigger,
  whichAction: HTriggerAction
): void;
declare function TriggerClearActions(whichTrigger: HTrigger): void;
declare function TriggerSleepAction(timeout: number): void;
declare function TriggerWaitForSound(s: HSound, offset: number): void;
declare function TriggerEvaluate(whichTrigger: HTrigger): boolean;
declare function TriggerExecute(whichTrigger: HTrigger): void;
declare function TriggerExecuteWait(whichTrigger: HTrigger): void;
declare function TriggerSyncStart(): void;
declare function TriggerSyncReady(): void;
declare function GetWidgetLife(whichWidget: HWidget): number;
declare function SetWidgetLife(whichWidget: HWidget, newLife: number): void;
declare function GetWidgetX(whichWidget: HWidget): number;
declare function GetWidgetY(whichWidget: HWidget): number;
declare function GetTriggerWidget(): HWidget;
declare function CreateDestructable(
  objectid: number,
  x: number,
  y: number,
  face: number,
  scale: number,
  variation: number
): HDestructable;
declare function CreateDestructableZ(
  objectid: number,
  x: number,
  y: number,
  z: number,
  face: number,
  scale: number,
  variation: number
): HDestructable;
declare function CreateDeadDestructable(
  objectid: number,
  x: number,
  y: number,
  face: number,
  scale: number,
  variation: number
): HDestructable;
declare function CreateDeadDestructableZ(
  objectid: number,
  x: number,
  y: number,
  z: number,
  face: number,
  scale: number,
  variation: number
): HDestructable;
declare function RemoveDestructable(d: HDestructable): void;
declare function KillDestructable(d: HDestructable): void;
declare function SetDestructableInvulnerable(
  d: HDestructable,
  flag: boolean
): void;
declare function IsDestructableInvulnerable(d: HDestructable): boolean;
declare function EnumDestructablesInRect(
  r: HRect,
  filter: HBoolExpr,
  actionFunc: TCode
): void;
declare function GetDestructableTypeId(d: HDestructable): number;
declare function GetDestructableX(d: HDestructable): number;
declare function GetDestructableY(d: HDestructable): number;
declare function SetDestructableLife(d: HDestructable, life: number): void;
declare function GetDestructableLife(d: HDestructable): number;
declare function SetDestructableMaxLife(d: HDestructable, max: number): void;
declare function GetDestructableMaxLife(d: HDestructable): number;
declare function DestructableRestoreLife(
  d: HDestructable,
  life: number,
  birth: boolean
): void;
declare function QueueDestructableAnimation(
  d: HDestructable,
  whichAnimation: string
): void;
declare function SetDestructableAnimation(
  d: HDestructable,
  whichAnimation: string
): void;
declare function SetDestructableAnimationSpeed(
  d: HDestructable,
  speedFactor: number
): void;
declare function ShowDestructable(d: HDestructable, flag: boolean): void;
declare function GetDestructableOccluderHeight(d: HDestructable): number;
declare function SetDestructableOccluderHeight(
  d: HDestructable,
  height: number
): void;
declare function GetDestructableName(d: HDestructable): string;
declare function GetTriggerDestructable(): HDestructable;
declare function CreateItem(itemid: number, x: number, y: number): HItem;
declare function RemoveItem(whichItem: HItem): void;
declare function GetItemPlayer(whichItem: HItem): HPlayer;
declare function GetItemTypeId(i: HItem): number;
declare function GetItemX(i: HItem): number;
declare function GetItemY(i: HItem): number;
declare function SetItemPosition(i: HItem, x: number, y: number): void;
declare function SetItemDropOnDeath(whichItem: HItem, flag: boolean): void;
declare function SetItemDroppable(i: HItem, flag: boolean): void;
declare function SetItemPawnable(i: HItem, flag: boolean): void;
declare function SetItemPlayer(
  whichItem: HItem,
  whichPlayer: HPlayer,
  changeColor: boolean
): void;
declare function SetItemInvulnerable(whichItem: HItem, flag: boolean): void;
declare function IsItemInvulnerable(whichItem: HItem): boolean;
declare function SetItemVisible(whichItem: HItem, show: boolean): void;
declare function IsItemVisible(whichItem: HItem): boolean;
declare function IsItemOwned(whichItem: HItem): boolean;
declare function IsItemPowerup(whichItem: HItem): boolean;
declare function IsItemSellable(whichItem: HItem): boolean;
declare function IsItemPawnable(whichItem: HItem): boolean;
declare function IsItemIdPowerup(itemId: number): boolean;
declare function IsItemIdSellable(itemId: number): boolean;
declare function IsItemIdPawnable(itemId: number): boolean;
declare function EnumItemsInRect(
  r: HRect,
  filter: HBoolExpr,
  actionFunc: TCode
): void;
declare function GetItemLevel(whichItem: HItem): number;
declare function GetItemType(whichItem: HItem): HItemType;
declare function SetItemDropID(whichItem: HItem, unitId: number): void;
declare function GetItemName(whichItem: HItem): string;
declare function GetItemCharges(whichItem: HItem): number;
declare function SetItemCharges(whichItem: HItem, charges: number): void;
declare function GetItemUserData(whichItem: HItem): number;
declare function SetItemUserData(whichItem: HItem, data: number): void;
declare function CreateUnit(
  id: HPlayer,
  unitid: number,
  x: number,
  y: number,
  face: number
): HUnit;
declare function CreateUnitByName(
  whichPlayer: HPlayer,
  unitname: string,
  x: number,
  y: number,
  face: number
): HUnit;
declare function CreateUnitAtLoc(
  id: HPlayer,
  unitid: number,
  whichLocation: HLocation,
  face: number
): HUnit;
declare function CreateUnitAtLocByName(
  id: HPlayer,
  unitname: string,
  whichLocation: HLocation,
  face: number
): HUnit;
declare function CreateCorpse(
  whichPlayer: HPlayer,
  unitid: number,
  x: number,
  y: number,
  face: number
): HUnit;
declare function KillUnit(whichUnit: HUnit): void;
declare function RemoveUnit(whichUnit: HUnit): void;
declare function ShowUnit(whichUnit: HUnit, show: boolean): void;
declare function SetUnitState(
  whichUnit: HUnit,
  whichUnitState: HUnitState,
  newVal: number
): void;
declare function SetUnitX(whichUnit: HUnit, newX: number): void;
declare function SetUnitY(whichUnit: HUnit, newY: number): void;
declare function SetUnitPosition(
  whichUnit: HUnit,
  newX: number,
  newY: number
): void;
declare function SetUnitPositionLoc(
  whichUnit: HUnit,
  whichLocation: HLocation
): void;
declare function SetUnitFacing(whichUnit: HUnit, facingAngle: number): void;
declare function SetUnitFacingTimed(
  whichUnit: HUnit,
  facingAngle: number,
  duration: number
): void;
declare function SetUnitMoveSpeed(whichUnit: HUnit, newSpeed: number): void;
declare function SetUnitFlyHeight(
  whichUnit: HUnit,
  newHeight: number,
  rate: number
): void;
declare function SetUnitTurnSpeed(whichUnit: HUnit, newTurnSpeed: number): void;
declare function SetUnitPropWindow(
  whichUnit: HUnit,
  newPropWindowAngle: number
): void;
declare function SetUnitAcquireRange(
  whichUnit: HUnit,
  newAcquireRange: number
): void;
declare function SetUnitCreepGuard(whichUnit: HUnit, creepGuard: boolean): void;
declare function GetUnitAcquireRange(whichUnit: HUnit): number;
declare function GetUnitTurnSpeed(whichUnit: HUnit): number;
declare function GetUnitPropWindow(whichUnit: HUnit): number;
declare function GetUnitFlyHeight(whichUnit: HUnit): number;
declare function GetUnitDefaultAcquireRange(whichUnit: HUnit): number;
declare function GetUnitDefaultTurnSpeed(whichUnit: HUnit): number;
declare function GetUnitDefaultPropWindow(whichUnit: HUnit): number;
declare function GetUnitDefaultFlyHeight(whichUnit: HUnit): number;
declare function SetUnitOwner(
  whichUnit: HUnit,
  whichPlayer: HPlayer,
  changeColor: boolean
): void;
declare function SetUnitColor(whichUnit: HUnit, whichColor: HPlayerColor): void;
declare function SetUnitScale(
  whichUnit: HUnit,
  scaleX: number,
  scaleY: number,
  scaleZ: number
): void;
declare function SetUnitTimeScale(whichUnit: HUnit, timeScale: number): void;
declare function SetUnitBlendTime(whichUnit: HUnit, blendTime: number): void;
declare function SetUnitVertexColor(
  whichUnit: HUnit,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function QueueUnitAnimation(
  whichUnit: HUnit,
  whichAnimation: string
): void;
declare function SetUnitAnimation(
  whichUnit: HUnit,
  whichAnimation: string
): void;
declare function SetUnitAnimationByIndex(
  whichUnit: HUnit,
  whichAnimation: number
): void;
declare function SetUnitAnimationWithRarity(
  whichUnit: HUnit,
  whichAnimation: string,
  rarity: HRarityControl
): void;
declare function AddUnitAnimationProperties(
  whichUnit: HUnit,
  animProperties: string,
  add: boolean
): void;
declare function SetUnitLookAt(
  whichUnit: HUnit,
  whichBone: string,
  lookAtTarget: HUnit,
  offsetX: number,
  offsetY: number,
  offsetZ: number
): void;
declare function ResetUnitLookAt(whichUnit: HUnit): void;
declare function SetUnitRescuable(
  whichUnit: HUnit,
  byWhichPlayer: HPlayer,
  flag: boolean
): void;
declare function SetUnitRescueRange(whichUnit: HUnit, range: number): void;
declare function SetHeroStr(
  whichHero: HUnit,
  newStr: number,
  permanent: boolean
): void;
declare function SetHeroAgi(
  whichHero: HUnit,
  newAgi: number,
  permanent: boolean
): void;
declare function SetHeroInt(
  whichHero: HUnit,
  newInt: number,
  permanent: boolean
): void;
declare function GetHeroStr(whichHero: HUnit, includeBonuses: boolean): number;
declare function GetHeroAgi(whichHero: HUnit, includeBonuses: boolean): number;
declare function GetHeroInt(whichHero: HUnit, includeBonuses: boolean): number;
declare function UnitStripHeroLevel(
  whichHero: HUnit,
  howManyLevels: number
): boolean;
declare function GetHeroXP(whichHero: HUnit): number;
declare function SetHeroXP(
  whichHero: HUnit,
  newXpVal: number,
  showEyeCandy: boolean
): void;
declare function GetHeroSkillPoints(whichHero: HUnit): number;
declare function UnitModifySkillPoints(
  whichHero: HUnit,
  skillPointDelta: number
): boolean;
declare function AddHeroXP(
  whichHero: HUnit,
  xpToAdd: number,
  showEyeCandy: boolean
): void;
declare function SetHeroLevel(
  whichHero: HUnit,
  level: number,
  showEyeCandy: boolean
): void;
declare function GetHeroLevel(whichHero: HUnit): number;
declare function GetUnitLevel(whichUnit: HUnit): number;
declare function GetHeroProperName(whichHero: HUnit): string;
declare function SuspendHeroXP(whichHero: HUnit, flag: boolean): void;
declare function IsSuspendedXP(whichHero: HUnit): boolean;
declare function SelectHeroSkill(whichHero: HUnit, abilcode: number): void;
declare function GetUnitAbilityLevel(
  whichUnit: HUnit,
  abilcode: number
): number;
declare function DecUnitAbilityLevel(
  whichUnit: HUnit,
  abilcode: number
): number;
declare function IncUnitAbilityLevel(
  whichUnit: HUnit,
  abilcode: number
): number;
declare function SetUnitAbilityLevel(
  whichUnit: HUnit,
  abilcode: number,
  level: number
): number;
declare function ReviveHero(
  whichHero: HUnit,
  x: number,
  y: number,
  doEyecandy: boolean
): boolean;
declare function ReviveHeroLoc(
  whichHero: HUnit,
  loc: HLocation,
  doEyecandy: boolean
): boolean;
declare function SetUnitExploded(whichUnit: HUnit, exploded: boolean): void;
declare function SetUnitInvulnerable(whichUnit: HUnit, flag: boolean): void;
declare function PauseUnit(whichUnit: HUnit, flag: boolean): void;
declare function IsUnitPaused(whichHero: HUnit): boolean;
declare function SetUnitPathing(whichUnit: HUnit, flag: boolean): void;
declare function ClearSelection(): void;
declare function SelectUnit(whichUnit: HUnit, flag: boolean): void;
declare function GetUnitPointValue(whichUnit: HUnit): number;
declare function GetUnitPointValueByType(unitType: number): number;
declare function UnitAddItem(whichUnit: HUnit, whichItem: HItem): boolean;
declare function UnitAddItemById(whichUnit: HUnit, itemId: number): HItem;
declare function UnitAddItemToSlotById(
  whichUnit: HUnit,
  itemId: number,
  itemSlot: number
): boolean;
declare function UnitRemoveItem(whichUnit: HUnit, whichItem: HItem): void;
declare function UnitRemoveItemFromSlot(
  whichUnit: HUnit,
  itemSlot: number
): HItem;
declare function UnitHasItem(whichUnit: HUnit, whichItem: HItem): boolean;
declare function UnitItemInSlot(whichUnit: HUnit, itemSlot: number): HItem;
declare function UnitInventorySize(whichUnit: HUnit): number;
declare function UnitDropItemPoint(
  whichUnit: HUnit,
  whichItem: HItem,
  x: number,
  y: number
): boolean;
declare function UnitDropItemSlot(
  whichUnit: HUnit,
  whichItem: HItem,
  slot: number
): boolean;
declare function UnitDropItemTarget(
  whichUnit: HUnit,
  whichItem: HItem,
  target: HWidget
): boolean;
declare function UnitUseItem(whichUnit: HUnit, whichItem: HItem): boolean;
declare function UnitUseItemPoint(
  whichUnit: HUnit,
  whichItem: HItem,
  x: number,
  y: number
): boolean;
declare function UnitUseItemTarget(
  whichUnit: HUnit,
  whichItem: HItem,
  target: HWidget
): boolean;
declare function GetUnitX(whichUnit: HUnit): number;
declare function GetUnitY(whichUnit: HUnit): number;
declare function GetUnitLoc(whichUnit: HUnit): HLocation;
declare function GetUnitFacing(whichUnit: HUnit): number;
declare function GetUnitMoveSpeed(whichUnit: HUnit): number;
declare function GetUnitDefaultMoveSpeed(whichUnit: HUnit): number;
declare function GetUnitState(
  whichUnit: HUnit,
  whichUnitState: HUnitState
): number;
declare function GetOwningPlayer(whichUnit: HUnit): HPlayer;
declare function GetUnitTypeId(whichUnit: HUnit): number;
declare function GetUnitRace(whichUnit: HUnit): HRace;
declare function GetUnitName(whichUnit: HUnit): string;
declare function GetUnitFoodUsed(whichUnit: HUnit): number;
declare function GetUnitFoodMade(whichUnit: HUnit): number;
declare function GetFoodMade(unitId: number): number;
declare function GetFoodUsed(unitId: number): number;
declare function SetUnitUseFood(whichUnit: HUnit, useFood: boolean): void;
declare function GetUnitRallyPoint(whichUnit: HUnit): HLocation;
declare function GetUnitRallyUnit(whichUnit: HUnit): HUnit;
declare function GetUnitRallyDestructable(whichUnit: HUnit): HDestructable;
declare function IsUnitInGroup(whichUnit: HUnit, whichGroup: HGroup): boolean;
declare function IsUnitInForce(whichUnit: HUnit, whichForce: HForce): boolean;
declare function IsUnitOwnedByPlayer(
  whichUnit: HUnit,
  whichPlayer: HPlayer
): boolean;
declare function IsUnitAlly(whichUnit: HUnit, whichPlayer: HPlayer): boolean;
declare function IsUnitEnemy(whichUnit: HUnit, whichPlayer: HPlayer): boolean;
declare function IsUnitVisible(whichUnit: HUnit, whichPlayer: HPlayer): boolean;
declare function IsUnitDetected(
  whichUnit: HUnit,
  whichPlayer: HPlayer
): boolean;
declare function IsUnitInvisible(
  whichUnit: HUnit,
  whichPlayer: HPlayer
): boolean;
declare function IsUnitFogged(whichUnit: HUnit, whichPlayer: HPlayer): boolean;
declare function IsUnitMasked(whichUnit: HUnit, whichPlayer: HPlayer): boolean;
declare function IsUnitSelected(
  whichUnit: HUnit,
  whichPlayer: HPlayer
): boolean;
declare function IsUnitRace(whichUnit: HUnit, whichRace: HRace): boolean;
declare function IsUnitType(
  whichUnit: HUnit,
  whichUnitType: HUnitType
): boolean;
declare function IsUnit(whichUnit: HUnit, whichSpecifiedUnit: HUnit): boolean;
declare function IsUnitInRange(
  whichUnit: HUnit,
  otherUnit: HUnit,
  distance: number
): boolean;
declare function IsUnitInRangeXY(
  whichUnit: HUnit,
  x: number,
  y: number,
  distance: number
): boolean;
declare function IsUnitInRangeLoc(
  whichUnit: HUnit,
  whichLocation: HLocation,
  distance: number
): boolean;
declare function IsUnitHidden(whichUnit: HUnit): boolean;
declare function IsUnitIllusion(whichUnit: HUnit): boolean;
declare function IsUnitInTransport(
  whichUnit: HUnit,
  whichTransport: HUnit
): boolean;
declare function IsUnitLoaded(whichUnit: HUnit): boolean;
declare function IsHeroUnitId(unitId: number): boolean;
declare function IsUnitIdType(
  unitId: number,
  whichUnitType: HUnitType
): boolean;
declare function UnitShareVision(
  whichUnit: HUnit,
  whichPlayer: HPlayer,
  share: boolean
): void;
declare function UnitSuspendDecay(whichUnit: HUnit, suspend: boolean): void;
declare function UnitAddType(
  whichUnit: HUnit,
  whichUnitType: HUnitType
): boolean;
declare function UnitRemoveType(
  whichUnit: HUnit,
  whichUnitType: HUnitType
): boolean;
declare function UnitAddAbility(whichUnit: HUnit, abilityId: number): boolean;
declare function UnitRemoveAbility(
  whichUnit: HUnit,
  abilityId: number
): boolean;
declare function UnitMakeAbilityPermanent(
  whichUnit: HUnit,
  permanent: boolean,
  abilityId: number
): boolean;
declare function UnitRemoveBuffs(
  whichUnit: HUnit,
  removePositive: boolean,
  removeNegative: boolean
): void;
declare function UnitRemoveBuffsEx(
  whichUnit: HUnit,
  removePositive: boolean,
  removeNegative: boolean,
  magic: boolean,
  physical: boolean,
  timedLife: boolean,
  aura: boolean,
  autoDispel: boolean
): void;
declare function UnitHasBuffsEx(
  whichUnit: HUnit,
  removePositive: boolean,
  removeNegative: boolean,
  magic: boolean,
  physical: boolean,
  timedLife: boolean,
  aura: boolean,
  autoDispel: boolean
): boolean;
declare function UnitCountBuffsEx(
  whichUnit: HUnit,
  removePositive: boolean,
  removeNegative: boolean,
  magic: boolean,
  physical: boolean,
  timedLife: boolean,
  aura: boolean,
  autoDispel: boolean
): number;
declare function UnitAddSleep(whichUnit: HUnit, add: boolean): void;
declare function UnitCanSleep(whichUnit: HUnit): boolean;
declare function UnitAddSleepPerm(whichUnit: HUnit, add: boolean): void;
declare function UnitCanSleepPerm(whichUnit: HUnit): boolean;
declare function UnitIsSleeping(whichUnit: HUnit): boolean;
declare function UnitWakeUp(whichUnit: HUnit): void;
declare function UnitApplyTimedLife(
  whichUnit: HUnit,
  buffId: number,
  duration: number
): void;
declare function UnitIgnoreAlarm(whichUnit: HUnit, flag: boolean): boolean;
declare function UnitIgnoreAlarmToggled(whichUnit: HUnit): boolean;
declare function UnitResetCooldown(whichUnit: HUnit): void;
declare function UnitSetConstructionProgress(
  whichUnit: HUnit,
  constructionPercentage: number
): void;
declare function UnitSetUpgradeProgress(
  whichUnit: HUnit,
  upgradePercentage: number
): void;
declare function UnitPauseTimedLife(whichUnit: HUnit, flag: boolean): void;
declare function UnitSetUsesAltIcon(whichUnit: HUnit, flag: boolean): void;
declare function UnitDamagePoint(
  whichUnit: HUnit,
  delay: number,
  radius: number,
  x: number,
  y: number,
  amount: number,
  attack: boolean,
  ranged: boolean,
  attackType: HAttackType,
  damageType: HDamageType,
  weaponType: HWeaponType
): boolean;
declare function UnitDamageTarget(
  whichUnit: HUnit,
  target: HWidget,
  amount: number,
  attack: boolean,
  ranged: boolean,
  attackType: HAttackType,
  damageType: HDamageType,
  weaponType: HWeaponType
): boolean;
declare function IssueImmediateOrder(whichUnit: HUnit, order: string): boolean;
declare function IssueImmediateOrderById(
  whichUnit: HUnit,
  order: number
): boolean;
declare function IssuePointOrder(
  whichUnit: HUnit,
  order: string,
  x: number,
  y: number
): boolean;
declare function IssuePointOrderLoc(
  whichUnit: HUnit,
  order: string,
  whichLocation: HLocation
): boolean;
declare function IssuePointOrderById(
  whichUnit: HUnit,
  order: number,
  x: number,
  y: number
): boolean;
declare function IssuePointOrderByIdLoc(
  whichUnit: HUnit,
  order: number,
  whichLocation: HLocation
): boolean;
declare function IssueTargetOrder(
  whichUnit: HUnit,
  order: string,
  targetWidget: HWidget
): boolean;
declare function IssueTargetOrderById(
  whichUnit: HUnit,
  order: number,
  targetWidget: HWidget
): boolean;
declare function IssueInstantPointOrder(
  whichUnit: HUnit,
  order: string,
  x: number,
  y: number,
  instantTargetWidget: HWidget
): boolean;
declare function IssueInstantPointOrderById(
  whichUnit: HUnit,
  order: number,
  x: number,
  y: number,
  instantTargetWidget: HWidget
): boolean;
declare function IssueInstantTargetOrder(
  whichUnit: HUnit,
  order: string,
  targetWidget: HWidget,
  instantTargetWidget: HWidget
): boolean;
declare function IssueInstantTargetOrderById(
  whichUnit: HUnit,
  order: number,
  targetWidget: HWidget,
  instantTargetWidget: HWidget
): boolean;
declare function IssueBuildOrder(
  whichPeon: HUnit,
  unitToBuild: string,
  x: number,
  y: number
): boolean;
declare function IssueBuildOrderById(
  whichPeon: HUnit,
  unitId: number,
  x: number,
  y: number
): boolean;
declare function IssueNeutralImmediateOrder(
  forWhichPlayer: HPlayer,
  neutralStructure: HUnit,
  unitToBuild: string
): boolean;
declare function IssueNeutralImmediateOrderById(
  forWhichPlayer: HPlayer,
  neutralStructure: HUnit,
  unitId: number
): boolean;
declare function IssueNeutralPointOrder(
  forWhichPlayer: HPlayer,
  neutralStructure: HUnit,
  unitToBuild: string,
  x: number,
  y: number
): boolean;
declare function IssueNeutralPointOrderById(
  forWhichPlayer: HPlayer,
  neutralStructure: HUnit,
  unitId: number,
  x: number,
  y: number
): boolean;
declare function IssueNeutralTargetOrder(
  forWhichPlayer: HPlayer,
  neutralStructure: HUnit,
  unitToBuild: string,
  target: HWidget
): boolean;
declare function IssueNeutralTargetOrderById(
  forWhichPlayer: HPlayer,
  neutralStructure: HUnit,
  unitId: number,
  target: HWidget
): boolean;
declare function GetUnitCurrentOrder(whichUnit: HUnit): number;
declare function SetResourceAmount(whichUnit: HUnit, amount: number): void;
declare function AddResourceAmount(whichUnit: HUnit, amount: number): void;
declare function GetResourceAmount(whichUnit: HUnit): number;
declare function WaygateGetDestinationX(waygate: HUnit): number;
declare function WaygateGetDestinationY(waygate: HUnit): number;
declare function WaygateSetDestination(
  waygate: HUnit,
  x: number,
  y: number
): void;
declare function WaygateActivate(waygate: HUnit, activate: boolean): void;
declare function WaygateIsActive(waygate: HUnit): boolean;
declare function AddItemToAllStock(
  itemId: number,
  currentStock: number,
  stockMax: number
): void;
declare function AddItemToStock(
  whichUnit: HUnit,
  itemId: number,
  currentStock: number,
  stockMax: number
): void;
declare function AddUnitToAllStock(
  unitId: number,
  currentStock: number,
  stockMax: number
): void;
declare function AddUnitToStock(
  whichUnit: HUnit,
  unitId: number,
  currentStock: number,
  stockMax: number
): void;
declare function RemoveItemFromAllStock(itemId: number): void;
declare function RemoveItemFromStock(whichUnit: HUnit, itemId: number): void;
declare function RemoveUnitFromAllStock(unitId: number): void;
declare function RemoveUnitFromStock(whichUnit: HUnit, unitId: number): void;
declare function SetAllItemTypeSlots(slots: number): void;
declare function SetAllUnitTypeSlots(slots: number): void;
declare function SetItemTypeSlots(whichUnit: HUnit, slots: number): void;
declare function SetUnitTypeSlots(whichUnit: HUnit, slots: number): void;
declare function GetUnitUserData(whichUnit: HUnit): number;
declare function SetUnitUserData(whichUnit: HUnit, data: number): void;
declare function Player(number: number): HPlayer;
declare function GetLocalPlayer(): HPlayer;
declare function IsPlayerAlly(
  whichPlayer: HPlayer,
  otherPlayer: HPlayer
): boolean;
declare function IsPlayerEnemy(
  whichPlayer: HPlayer,
  otherPlayer: HPlayer
): boolean;
declare function IsPlayerInForce(
  whichPlayer: HPlayer,
  whichForce: HForce
): boolean;
declare function IsPlayerObserver(whichPlayer: HPlayer): boolean;
declare function IsVisibleToPlayer(
  x: number,
  y: number,
  whichPlayer: HPlayer
): boolean;
declare function IsLocationVisibleToPlayer(
  whichLocation: HLocation,
  whichPlayer: HPlayer
): boolean;
declare function IsFoggedToPlayer(
  x: number,
  y: number,
  whichPlayer: HPlayer
): boolean;
declare function IsLocationFoggedToPlayer(
  whichLocation: HLocation,
  whichPlayer: HPlayer
): boolean;
declare function IsMaskedToPlayer(
  x: number,
  y: number,
  whichPlayer: HPlayer
): boolean;
declare function IsLocationMaskedToPlayer(
  whichLocation: HLocation,
  whichPlayer: HPlayer
): boolean;
declare function GetPlayerRace(whichPlayer: HPlayer): HRace;
declare function GetPlayerId(whichPlayer: HPlayer): number;
declare function GetPlayerUnitCount(
  whichPlayer: HPlayer,
  includeIncomplete: boolean
): number;
declare function GetPlayerTypedUnitCount(
  whichPlayer: HPlayer,
  unitName: string,
  includeIncomplete: boolean,
  includeUpgrades: boolean
): number;
declare function GetPlayerStructureCount(
  whichPlayer: HPlayer,
  includeIncomplete: boolean
): number;
declare function GetPlayerState(
  whichPlayer: HPlayer,
  whichPlayerState: HPlayerState
): number;
declare function GetPlayerScore(
  whichPlayer: HPlayer,
  whichPlayerScore: HPlayerScore
): number;
declare function GetPlayerAlliance(
  sourcePlayer: HPlayer,
  otherPlayer: HPlayer,
  whichAllianceSetting: HAllianceType
): boolean;
declare function GetPlayerHandicap(whichPlayer: HPlayer): number;
declare function GetPlayerHandicapXP(whichPlayer: HPlayer): number;
declare function SetPlayerHandicap(
  whichPlayer: HPlayer,
  handicap: number
): void;
declare function SetPlayerHandicapXP(
  whichPlayer: HPlayer,
  handicap: number
): void;
declare function SetPlayerTechMaxAllowed(
  whichPlayer: HPlayer,
  techid: number,
  maximum: number
): void;
declare function GetPlayerTechMaxAllowed(
  whichPlayer: HPlayer,
  techid: number
): number;
declare function AddPlayerTechResearched(
  whichPlayer: HPlayer,
  techid: number,
  levels: number
): void;
declare function SetPlayerTechResearched(
  whichPlayer: HPlayer,
  techid: number,
  setToLevel: number
): void;
declare function GetPlayerTechResearched(
  whichPlayer: HPlayer,
  techid: number,
  specificonly: boolean
): boolean;
declare function GetPlayerTechCount(
  whichPlayer: HPlayer,
  techid: number,
  specificonly: boolean
): number;
declare function SetPlayerUnitsOwner(
  whichPlayer: HPlayer,
  newOwner: number
): void;
declare function CripplePlayer(
  whichPlayer: HPlayer,
  toWhichPlayers: HForce,
  flag: boolean
): void;
declare function SetPlayerAbilityAvailable(
  whichPlayer: HPlayer,
  abilid: number,
  avail: boolean
): void;
declare function SetPlayerState(
  whichPlayer: HPlayer,
  whichPlayerState: HPlayerState,
  value: number
): void;
declare function RemovePlayer(
  whichPlayer: HPlayer,
  gameResult: HPlayerGameResult
): void;
declare function CachePlayerHeroData(whichPlayer: HPlayer): void;
declare function SetFogStateRect(
  forWhichPlayer: HPlayer,
  whichState: HFogState,
  where: HRect,
  useSharedVision: boolean
): void;
declare function SetFogStateRadius(
  forWhichPlayer: HPlayer,
  whichState: HFogState,
  centerx: number,
  centerY: number,
  radius: number,
  useSharedVision: boolean
): void;
declare function SetFogStateRadiusLoc(
  forWhichPlayer: HPlayer,
  whichState: HFogState,
  center: HLocation,
  radius: number,
  useSharedVision: boolean
): void;
declare function FogMaskEnable(enable: boolean): void;
declare function IsFogMaskEnabled(): boolean;
declare function FogEnable(enable: boolean): void;
declare function IsFogEnabled(): boolean;
declare function CreateFogModifierRect(
  forWhichPlayer: HPlayer,
  whichState: HFogState,
  where: HRect,
  useSharedVision: boolean,
  afterUnits: boolean
): HFogModifier;
declare function CreateFogModifierRadius(
  forWhichPlayer: HPlayer,
  whichState: HFogState,
  centerx: number,
  centerY: number,
  radius: number,
  useSharedVision: boolean,
  afterUnits: boolean
): HFogModifier;
declare function CreateFogModifierRadiusLoc(
  forWhichPlayer: HPlayer,
  whichState: HFogState,
  center: HLocation,
  radius: number,
  useSharedVision: boolean,
  afterUnits: boolean
): HFogModifier;
declare function DestroyFogModifier(whichFogModifier: HFogModifier): void;
declare function FogModifierStart(whichFogModifier: HFogModifier): void;
declare function FogModifierStop(whichFogModifier: HFogModifier): void;
declare function VersionGet(): HVersion;
declare function VersionCompatible(whichVersion: HVersion): boolean;
declare function VersionSupported(whichVersion: HVersion): boolean;
declare function EndGame(doScoreScreen: boolean): void;
declare function ChangeLevel(newLevel: string, doScoreScreen: boolean): void;
declare function RestartGame(doScoreScreen: boolean): void;
declare function ReloadGame(): void;
declare function SetCampaignMenuRace(r: HRace): void;
declare function SetCampaignMenuRaceEx(campaignIndex: number): void;
declare function ForceCampaignSelectScreen(): void;
declare function LoadGame(saveFileName: string, doScoreScreen: boolean): void;
declare function SaveGame(saveFileName: string): void;
declare function RenameSaveDirectory(
  sourceDirName: string,
  destDirName: string
): boolean;
declare function RemoveSaveDirectory(sourceDirName: string): boolean;
declare function CopySaveGame(
  sourceSaveName: string,
  destSaveName: string
): boolean;
declare function SaveGameExists(saveName: string): boolean;
declare function SyncSelections(): void;
declare function SetFloatGameState(
  whichFloatGameState: HFGameState,
  value: number
): void;
declare function GetFloatGameState(whichFloatGameState: HFGameState): number;
declare function SetIntegerGameState(
  whichIntegerGameState: HIGameState,
  value: number
): void;
declare function GetIntegerGameState(
  whichIntegerGameState: HIGameState
): number;
declare function SetTutorialCleared(cleared: boolean): void;
declare function SetMissionAvailable(
  campaignNumber: number,
  missionNumber: number,
  available: boolean
): void;
declare function SetCampaignAvailable(
  campaignNumber: number,
  available: boolean
): void;
declare function SetOpCinematicAvailable(
  campaignNumber: number,
  available: boolean
): void;
declare function SetEdCinematicAvailable(
  campaignNumber: number,
  available: boolean
): void;
declare function GetDefaultDifficulty(): HGameDifficulty;
declare function SetDefaultDifficulty(g: HGameDifficulty): void;
declare function SetCustomCampaignButtonVisible(
  whichButton: number,
  visible: boolean
): void;
declare function GetCustomCampaignButtonVisible(whichButton: number): boolean;
declare function DoNotSaveReplay(): void;
declare function DialogCreate(): HDialog;
declare function DialogDestroy(whichDialog: HDialog): void;
declare function DialogClear(whichDialog: HDialog): void;
declare function DialogSetMessage(
  whichDialog: HDialog,
  messageText: string
): void;
declare function DialogAddButton(
  whichDialog: HDialog,
  buttonText: string,
  hotkey: number
): HButton;
declare function DialogAddQuitButton(
  whichDialog: HDialog,
  doScoreScreen: boolean,
  buttonText: string,
  hotkey: number
): HButton;
declare function DialogDisplay(
  whichPlayer: HPlayer,
  whichDialog: HDialog,
  flag: boolean
): void;
declare function ReloadGameCachesFromDisk(): boolean;
declare function InitGameCache(campaignFile: string): HGameCache;
declare function SaveGameCache(whichCache: HGameCache): boolean;
declare function StoreInteger(
  cache: HGameCache,
  missionKey: string,
  key: string,
  value: number
): void;
declare function StoreReal(
  cache: HGameCache,
  missionKey: string,
  key: string,
  value: number
): void;
declare function StoreBoolean(
  cache: HGameCache,
  missionKey: string,
  key: string,
  value: boolean
): void;
declare function StoreUnit(
  cache: HGameCache,
  missionKey: string,
  key: string,
  whichUnit: HUnit
): boolean;
declare function StoreString(
  cache: HGameCache,
  missionKey: string,
  key: string,
  value: string
): boolean;
declare function SyncStoredInteger(
  cache: HGameCache,
  missionKey: string,
  key: string
): void;
declare function SyncStoredReal(
  cache: HGameCache,
  missionKey: string,
  key: string
): void;
declare function SyncStoredBoolean(
  cache: HGameCache,
  missionKey: string,
  key: string
): void;
declare function SyncStoredUnit(
  cache: HGameCache,
  missionKey: string,
  key: string
): void;
declare function SyncStoredString(
  cache: HGameCache,
  missionKey: string,
  key: string
): void;
declare function HaveStoredInteger(
  cache: HGameCache,
  missionKey: string,
  key: string
): boolean;
declare function HaveStoredReal(
  cache: HGameCache,
  missionKey: string,
  key: string
): boolean;
declare function HaveStoredBoolean(
  cache: HGameCache,
  missionKey: string,
  key: string
): boolean;
declare function HaveStoredUnit(
  cache: HGameCache,
  missionKey: string,
  key: string
): boolean;
declare function HaveStoredString(
  cache: HGameCache,
  missionKey: string,
  key: string
): boolean;
declare function FlushGameCache(cache: HGameCache): void;
declare function FlushStoredMission(
  cache: HGameCache,
  missionKey: string
): void;
declare function FlushStoredInteger(
  cache: HGameCache,
  missionKey: string,
  key: string
): void;
declare function FlushStoredReal(
  cache: HGameCache,
  missionKey: string,
  key: string
): void;
declare function FlushStoredBoolean(
  cache: HGameCache,
  missionKey: string,
  key: string
): void;
declare function FlushStoredUnit(
  cache: HGameCache,
  missionKey: string,
  key: string
): void;
declare function FlushStoredString(
  cache: HGameCache,
  missionKey: string,
  key: string
): void;
declare function GetStoredInteger(
  cache: HGameCache,
  missionKey: string,
  key: string
): number;
declare function GetStoredReal(
  cache: HGameCache,
  missionKey: string,
  key: string
): number;
declare function GetStoredBoolean(
  cache: HGameCache,
  missionKey: string,
  key: string
): boolean;
declare function GetStoredString(
  cache: HGameCache,
  missionKey: string,
  key: string
): string;
declare function RestoreUnit(
  cache: HGameCache,
  missionKey: string,
  key: string,
  forWhichPlayer: HPlayer,
  x: number,
  y: number,
  facing: number
): HUnit;
declare function InitHashtable(): HHashTable;
declare function SaveInteger(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  value: number
): void;
declare function SaveReal(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  value: number
): void;
declare function SaveBoolean(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  value: boolean
): void;
declare function SaveStr(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  value: string
): boolean;
declare function SavePlayerHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichPlayer: HPlayer
): boolean;
declare function SaveWidgetHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichWidget: HWidget
): boolean;
declare function SaveDestructableHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichDestructable: HDestructable
): boolean;
declare function SaveItemHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichItem: HItem
): boolean;
declare function SaveUnitHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichUnit: HUnit
): boolean;
declare function SaveAbilityHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichAbility: HAbility
): boolean;
declare function SaveTimerHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichTimer: HTimer
): boolean;
declare function SaveTriggerHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichTrigger: HTrigger
): boolean;
declare function SaveTriggerConditionHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichTriggercondition: HTriggerCondition
): boolean;
declare function SaveTriggerActionHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichTriggeraction: HTriggerAction
): boolean;
declare function SaveTriggerEventHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichEvent: HEvent
): boolean;
declare function SaveForceHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichForce: HForce
): boolean;
declare function SaveGroupHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichGroup: HGroup
): boolean;
declare function SaveLocationHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichLocation: HLocation
): boolean;
declare function SaveRectHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichRect: HRect
): boolean;
declare function SaveBooleanExprHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichBoolexpr: HBoolExpr
): boolean;
declare function SaveSoundHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichSound: HSound
): boolean;
declare function SaveEffectHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichEffect: HEffect
): boolean;
declare function SaveUnitPoolHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichUnitpool: HUnitPool
): boolean;
declare function SaveItemPoolHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichItempool: HItemPool
): boolean;
declare function SaveQuestHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichQuest: HQuest
): boolean;
declare function SaveQuestItemHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichQuestitem: HQuestItem
): boolean;
declare function SaveDefeatConditionHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichDefeatcondition: HDefeatCondition
): boolean;
declare function SaveTimerDialogHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichTimerdialog: HTimerDialog
): boolean;
declare function SaveLeaderboardHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichLeaderboard: HLeaderBoard
): boolean;
declare function SaveMultiboardHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichMultiboard: HMultiBoard
): boolean;
declare function SaveMultiboardItemHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichMultiboarditem: HMultiBoardItem
): boolean;
declare function SaveTrackableHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichTrackable: HTrackable
): boolean;
declare function SaveDialogHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichDialog: HDialog
): boolean;
declare function SaveButtonHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichButton: HButton
): boolean;
declare function SaveTextTagHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichTexttag: HTextTag
): boolean;
declare function SaveLightningHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichLightning: HLightning
): boolean;
declare function SaveImageHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichImage: HImage
): boolean;
declare function SaveUbersplatHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichUbersplat: HUberSplat
): boolean;
declare function SaveRegionHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichRegion: HRegion
): boolean;
declare function SaveFogStateHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichFogState: HFogState
): boolean;
declare function SaveFogModifierHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichFogModifier: HFogModifier
): boolean;
declare function SaveAgentHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichAgent: HAgent
): boolean;
declare function SaveHashtableHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number,
  whichHashtable: HHashTable
): boolean;
declare function LoadInteger(
  table: HHashTable,
  parentKey: number,
  childKey: number
): number;
declare function LoadReal(
  table: HHashTable,
  parentKey: number,
  childKey: number
): number;
declare function LoadBoolean(
  table: HHashTable,
  parentKey: number,
  childKey: number
): boolean;
declare function LoadStr(
  table: HHashTable,
  parentKey: number,
  childKey: number
): string;
declare function LoadPlayerHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HPlayer;
declare function LoadWidgetHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HWidget;
declare function LoadDestructableHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HDestructable;
declare function LoadItemHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HItem;
declare function LoadUnitHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HUnit;
declare function LoadAbilityHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HAbility;
declare function LoadTimerHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HTimer;
declare function LoadTriggerHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HTrigger;
declare function LoadTriggerConditionHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HTriggerCondition;
declare function LoadTriggerActionHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HTriggerAction;
declare function LoadTriggerEventHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HEvent;
declare function LoadForceHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HForce;
declare function LoadGroupHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HGroup;
declare function LoadLocationHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HLocation;
declare function LoadRectHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HRect;
declare function LoadBooleanExprHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HBoolExpr;
declare function LoadSoundHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HSound;
declare function LoadEffectHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HEffect;
declare function LoadUnitPoolHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HUnitPool;
declare function LoadItemPoolHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HItemPool;
declare function LoadQuestHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HQuest;
declare function LoadQuestItemHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HQuestItem;
declare function LoadDefeatConditionHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HDefeatCondition;
declare function LoadTimerDialogHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HTimerDialog;
declare function LoadLeaderboardHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HLeaderBoard;
declare function LoadMultiboardHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HMultiBoard;
declare function LoadMultiboardItemHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HMultiBoardItem;
declare function LoadTrackableHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HTrackable;
declare function LoadDialogHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HDialog;
declare function LoadButtonHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HButton;
declare function LoadTextTagHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HTextTag;
declare function LoadLightningHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HLightning;
declare function LoadImageHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HImage;
declare function LoadUbersplatHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HUberSplat;
declare function LoadRegionHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HRegion;
declare function LoadFogStateHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HFogState;
declare function LoadFogModifierHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HFogModifier;
declare function LoadHashtableHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): HHashTable;
declare function HaveSavedInteger(
  table: HHashTable,
  parentKey: number,
  childKey: number
): boolean;
declare function HaveSavedReal(
  table: HHashTable,
  parentKey: number,
  childKey: number
): boolean;
declare function HaveSavedBoolean(
  table: HHashTable,
  parentKey: number,
  childKey: number
): boolean;
declare function HaveSavedString(
  table: HHashTable,
  parentKey: number,
  childKey: number
): boolean;
declare function HaveSavedHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): boolean;
declare function RemoveSavedInteger(
  table: HHashTable,
  parentKey: number,
  childKey: number
): void;
declare function RemoveSavedReal(
  table: HHashTable,
  parentKey: number,
  childKey: number
): void;
declare function RemoveSavedBoolean(
  table: HHashTable,
  parentKey: number,
  childKey: number
): void;
declare function RemoveSavedString(
  table: HHashTable,
  parentKey: number,
  childKey: number
): void;
declare function RemoveSavedHandle(
  table: HHashTable,
  parentKey: number,
  childKey: number
): void;
declare function FlushParentHashtable(table: HHashTable): void;
declare function FlushChildHashtable(
  table: HHashTable,
  parentKey: number
): void;
declare function GetRandomInt(lowBound: number, highBound: number): number;
declare function GetRandomReal(lowBound: number, highBound: number): number;
declare function CreateUnitPool(): HUnitPool;
declare function DestroyUnitPool(whichPool: HUnitPool): void;
declare function UnitPoolAddUnitType(
  whichPool: HUnitPool,
  unitId: number,
  weight: number
): void;
declare function UnitPoolRemoveUnitType(
  whichPool: HUnitPool,
  unitId: number
): void;
declare function PlaceRandomUnit(
  whichPool: HUnitPool,
  forWhichPlayer: HPlayer,
  x: number,
  y: number,
  facing: number
): HUnit;
declare function CreateItemPool(): HItemPool;
declare function DestroyItemPool(whichItemPool: HItemPool): void;
declare function ItemPoolAddItemType(
  whichItemPool: HItemPool,
  itemId: number,
  weight: number
): void;
declare function ItemPoolRemoveItemType(
  whichItemPool: HItemPool,
  itemId: number
): void;
declare function PlaceRandomItem(
  whichItemPool: HItemPool,
  x: number,
  y: number
): HItem;
declare function ChooseRandomCreep(level: number): number;
declare function ChooseRandomNPBuilding(): number;
declare function ChooseRandomItem(level: number): number;
declare function ChooseRandomItemEx(
  whichType: HItemType,
  level: number
): number;
declare function SetRandomSeed(seed: number): void;
declare function SetTerrainFog(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): void;
declare function ResetTerrainFog(): void;
declare function SetUnitFog(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): void;
declare function SetTerrainFogEx(
  style: number,
  zstart: number,
  zend: number,
  density: number,
  red: number,
  green: number,
  blue: number
): void;
declare function DisplayTextToPlayer(
  toPlayer: HPlayer,
  x: number,
  y: number,
  message: string
): void;
declare function DisplayTimedTextToPlayer(
  toPlayer: HPlayer,
  x: number,
  y: number,
  duration: number,
  message: string
): void;
declare function DisplayTimedTextFromPlayer(
  toPlayer: HPlayer,
  x: number,
  y: number,
  duration: number,
  message: string
): void;
declare function ClearTextMessages(): void;
declare function SetDayNightModels(
  terrainDNCFile: string,
  unitDNCFile: string
): void;
declare function SetSkyModel(skyModelFile: string): void;
declare function EnableUserControl(b: boolean): void;
declare function EnableUserUI(b: boolean): void;
declare function SuspendTimeOfDay(b: boolean): void;
declare function SetTimeOfDayScale(r: number): void;
declare function GetTimeOfDayScale(): number;
declare function ShowInterface(flag: boolean, fadeDuration: number): void;
declare function PauseGame(flag: boolean): void;
declare function UnitAddIndicator(
  whichUnit: HUnit,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function AddIndicator(
  whichWidget: HWidget,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function PingMinimap(x: number, y: number, duration: number): void;
declare function PingMinimapEx(
  x: number,
  y: number,
  duration: number,
  red: number,
  green: number,
  blue: number,
  extraEffects: boolean
): void;
declare function EnableOcclusion(flag: boolean): void;
declare function SetIntroShotText(introText: string): void;
declare function SetIntroShotModel(introModelPath: string): void;
declare function EnableWorldFogBoundary(b: boolean): void;
declare function PlayModelCinematic(modelName: string): void;
declare function PlayCinematic(movieName: string): void;
declare function ForceUIKey(key: string): void;
declare function ForceUICancel(): void;
declare function DisplayLoadDialog(): void;
declare function SetAltMinimapIcon(iconPath: string): void;
declare function DisableRestartMission(flag: boolean): void;
declare function CreateTextTag(): HTextTag;
declare function DestroyTextTag(t: HTextTag): void;
declare function SetTextTagText(t: HTextTag, s: string, height: number): void;
declare function SetTextTagPos(
  t: HTextTag,
  x: number,
  y: number,
  heightOffset: number
): void;
declare function SetTextTagPosUnit(
  t: HTextTag,
  whichUnit: HUnit,
  heightOffset: number
): void;
declare function SetTextTagColor(
  t: HTextTag,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function SetTextTagVelocity(
  t: HTextTag,
  xvel: number,
  yvel: number
): void;
declare function SetTextTagVisibility(t: HTextTag, flag: boolean): void;
declare function SetTextTagSuspended(t: HTextTag, flag: boolean): void;
declare function SetTextTagPermanent(t: HTextTag, flag: boolean): void;
declare function SetTextTagAge(t: HTextTag, age: number): void;
declare function SetTextTagLifespan(t: HTextTag, lifespan: number): void;
declare function SetTextTagFadepoint(t: HTextTag, fadepoint: number): void;
declare function SetReservedLocalHeroButtons(reserved: number): void;
declare function GetAllyColorFilterState(): number;
declare function SetAllyColorFilterState(state: number): void;
declare function GetCreepCampFilterState(): boolean;
declare function SetCreepCampFilterState(state: boolean): void;
declare function EnableMinimapFilterButtons(
  enableAlly: boolean,
  enableCreep: boolean
): void;
declare function EnableDragSelect(state: boolean, ui: boolean): void;
declare function EnablePreSelect(state: boolean, ui: boolean): void;
declare function EnableSelect(state: boolean, ui: boolean): void;
declare function CreateTrackable(
  trackableModelPath: string,
  x: number,
  y: number,
  facing: number
): HTrackable;
declare function CreateQuest(): HQuest;
declare function DestroyQuest(whichQuest: HQuest): void;
declare function QuestSetTitle(whichQuest: HQuest, title: string): void;
declare function QuestSetDescription(
  whichQuest: HQuest,
  description: string
): void;
declare function QuestSetIconPath(whichQuest: HQuest, iconPath: string): void;
declare function QuestSetRequired(whichQuest: HQuest, required: boolean): void;
declare function QuestSetCompleted(
  whichQuest: HQuest,
  completed: boolean
): void;
declare function QuestSetDiscovered(
  whichQuest: HQuest,
  discovered: boolean
): void;
declare function QuestSetFailed(whichQuest: HQuest, failed: boolean): void;
declare function QuestSetEnabled(whichQuest: HQuest, enabled: boolean): void;
declare function IsQuestRequired(whichQuest: HQuest): boolean;
declare function IsQuestCompleted(whichQuest: HQuest): boolean;
declare function IsQuestDiscovered(whichQuest: HQuest): boolean;
declare function IsQuestFailed(whichQuest: HQuest): boolean;
declare function IsQuestEnabled(whichQuest: HQuest): boolean;
declare function QuestCreateItem(whichQuest: HQuest): HQuestItem;
declare function QuestItemSetDescription(
  whichQuestItem: HQuestItem,
  description: string
): void;
declare function QuestItemSetCompleted(
  whichQuestItem: HQuestItem,
  completed: boolean
): void;
declare function IsQuestItemCompleted(whichQuestItem: HQuestItem): boolean;
declare function CreateDefeatCondition(): HDefeatCondition;
declare function DestroyDefeatCondition(whichCondition: HDefeatCondition): void;
declare function DefeatConditionSetDescription(
  whichCondition: HDefeatCondition,
  description: string
): void;
declare function FlashQuestDialogButton(): void;
declare function ForceQuestDialogUpdate(): void;
declare function CreateTimerDialog(t: HTimer): HTimerDialog;
declare function DestroyTimerDialog(whichDialog: HTimerDialog): void;
declare function TimerDialogSetTitle(
  whichDialog: HTimerDialog,
  title: string
): void;
declare function TimerDialogSetTitleColor(
  whichDialog: HTimerDialog,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function TimerDialogSetTimeColor(
  whichDialog: HTimerDialog,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function TimerDialogSetSpeed(
  whichDialog: HTimerDialog,
  speedMultFactor: number
): void;
declare function TimerDialogDisplay(
  whichDialog: HTimerDialog,
  display: boolean
): void;
declare function IsTimerDialogDisplayed(whichDialog: HTimerDialog): boolean;
declare function TimerDialogSetRealTimeRemaining(
  whichDialog: HTimerDialog,
  timeRemaining: number
): void;
declare function CreateLeaderboard(): HLeaderBoard;
declare function DestroyLeaderboard(lb: HLeaderBoard): void;
declare function LeaderboardDisplay(lb: HLeaderBoard, show: boolean): void;
declare function IsLeaderboardDisplayed(lb: HLeaderBoard): boolean;
declare function LeaderboardGetItemCount(lb: HLeaderBoard): number;
declare function LeaderboardSetSizeByItemCount(
  lb: HLeaderBoard,
  count: number
): void;
declare function LeaderboardAddItem(
  lb: HLeaderBoard,
  label: string,
  value: number,
  p: HPlayer
): void;
declare function LeaderboardRemoveItem(lb: HLeaderBoard, index: number): void;
declare function LeaderboardRemovePlayerItem(
  lb: HLeaderBoard,
  p: HPlayer
): void;
declare function LeaderboardClear(lb: HLeaderBoard): void;
declare function LeaderboardSortItemsByValue(
  lb: HLeaderBoard,
  ascending: boolean
): void;
declare function LeaderboardSortItemsByPlayer(
  lb: HLeaderBoard,
  ascending: boolean
): void;
declare function LeaderboardSortItemsByLabel(
  lb: HLeaderBoard,
  ascending: boolean
): void;
declare function LeaderboardHasPlayerItem(
  lb: HLeaderBoard,
  p: HPlayer
): boolean;
declare function LeaderboardGetPlayerIndex(
  lb: HLeaderBoard,
  p: HPlayer
): number;
declare function LeaderboardSetLabel(lb: HLeaderBoard, label: string): void;
declare function LeaderboardGetLabelText(lb: HLeaderBoard): string;
declare function PlayerSetLeaderboard(
  toPlayer: HPlayer,
  lb: HLeaderBoard
): void;
declare function PlayerGetLeaderboard(toPlayer: HPlayer): HLeaderBoard;
declare function LeaderboardSetLabelColor(
  lb: HLeaderBoard,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function LeaderboardSetValueColor(
  lb: HLeaderBoard,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function LeaderboardSetStyle(
  lb: HLeaderBoard,
  showLabel: boolean,
  showNames: boolean,
  showValues: boolean,
  showIcons: boolean
): void;
declare function LeaderboardSetItemValue(
  lb: HLeaderBoard,
  whichItem: number,
  val: number
): void;
declare function LeaderboardSetItemLabel(
  lb: HLeaderBoard,
  whichItem: number,
  val: string
): void;
declare function LeaderboardSetItemStyle(
  lb: HLeaderBoard,
  whichItem: number,
  showLabel: boolean,
  showValue: boolean,
  showIcon: boolean
): void;
declare function LeaderboardSetItemLabelColor(
  lb: HLeaderBoard,
  whichItem: number,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function LeaderboardSetItemValueColor(
  lb: HLeaderBoard,
  whichItem: number,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function CreateMultiboard(): HMultiBoard;
declare function DestroyMultiboard(lb: HMultiBoard): void;
declare function MultiboardDisplay(lb: HMultiBoard, show: boolean): void;
declare function IsMultiboardDisplayed(lb: HMultiBoard): boolean;
declare function MultiboardMinimize(lb: HMultiBoard, minimize: boolean): void;
declare function IsMultiboardMinimized(lb: HMultiBoard): boolean;
declare function MultiboardClear(lb: HMultiBoard): void;
declare function MultiboardSetTitleText(lb: HMultiBoard, label: string): void;
declare function MultiboardGetTitleText(lb: HMultiBoard): string;
declare function MultiboardSetTitleTextColor(
  lb: HMultiBoard,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function MultiboardGetRowCount(lb: HMultiBoard): number;
declare function MultiboardGetColumnCount(lb: HMultiBoard): number;
declare function MultiboardSetColumnCount(lb: HMultiBoard, count: number): void;
declare function MultiboardSetRowCount(lb: HMultiBoard, count: number): void;
declare function MultiboardSetItemsStyle(
  lb: HMultiBoard,
  showValues: boolean,
  showIcons: boolean
): void;
declare function MultiboardSetItemsValue(lb: HMultiBoard, value: string): void;
declare function MultiboardSetItemsValueColor(
  lb: HMultiBoard,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function MultiboardSetItemsWidth(lb: HMultiBoard, width: number): void;
declare function MultiboardSetItemsIcon(
  lb: HMultiBoard,
  iconPath: string
): void;
declare function MultiboardGetItem(
  lb: HMultiBoard,
  row: number,
  column: number
): HMultiBoardItem;
declare function MultiboardReleaseItem(mbi: HMultiBoardItem): void;
declare function MultiboardSetItemStyle(
  mbi: HMultiBoardItem,
  showValue: boolean,
  showIcon: boolean
): void;
declare function MultiboardSetItemValue(
  mbi: HMultiBoardItem,
  val: string
): void;
declare function MultiboardSetItemValueColor(
  mbi: HMultiBoardItem,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function MultiboardSetItemWidth(
  mbi: HMultiBoardItem,
  width: number
): void;
declare function MultiboardSetItemIcon(
  mbi: HMultiBoardItem,
  iconFileName: string
): void;
declare function MultiboardSuppressDisplay(flag: boolean): void;
declare function SetCameraPosition(x: number, y: number): void;
declare function SetCameraQuickPosition(x: number, y: number): void;
declare function SetCameraBounds(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
): void;
declare function StopCamera(): void;
declare function ResetToGameCamera(duration: number): void;
declare function PanCameraTo(x: number, y: number): void;
declare function PanCameraToTimed(x: number, y: number, duration: number): void;
declare function PanCameraToWithZ(
  x: number,
  y: number,
  zOffsetDest: number
): void;
declare function PanCameraToTimedWithZ(
  x: number,
  y: number,
  zOffsetDest: number,
  duration: number
): void;
declare function SetCinematicCamera(cameraModelFile: string): void;
declare function SetCameraRotateMode(
  x: number,
  y: number,
  radiansToSweep: number,
  duration: number
): void;
declare function SetCameraField(
  whichField: HCameraField,
  value: number,
  duration: number
): void;
declare function AdjustCameraField(
  whichField: HCameraField,
  offset: number,
  duration: number
): void;
declare function SetCameraTargetController(
  whichUnit: HUnit,
  xoffset: number,
  yoffset: number,
  inheritOrientation: boolean
): void;
declare function SetCameraOrientController(
  whichUnit: HUnit,
  xoffset: number,
  yoffset: number
): void;
declare function CreateCameraSetup(): HCameraSetup;
declare function CameraSetupSetField(
  whichSetup: HCameraSetup,
  whichField: HCameraField,
  value: number,
  duration: number
): void;
declare function CameraSetupGetField(
  whichSetup: HCameraSetup,
  whichField: HCameraField
): number;
declare function CameraSetupSetDestPosition(
  whichSetup: HCameraSetup,
  x: number,
  y: number,
  duration: number
): void;
declare function CameraSetupGetDestPositionLoc(
  whichSetup: HCameraSetup
): HLocation;
declare function CameraSetupGetDestPositionX(whichSetup: HCameraSetup): number;
declare function CameraSetupGetDestPositionY(whichSetup: HCameraSetup): number;
declare function CameraSetupApply(
  whichSetup: HCameraSetup,
  doPan: boolean,
  panTimed: boolean
): void;
declare function CameraSetupApplyWithZ(
  whichSetup: HCameraSetup,
  zDestOffset: number
): void;
declare function CameraSetupApplyForceDuration(
  whichSetup: HCameraSetup,
  doPan: boolean,
  forceDuration: number
): void;
declare function CameraSetupApplyForceDurationWithZ(
  whichSetup: HCameraSetup,
  zDestOffset: number,
  forceDuration: number
): void;
declare function CameraSetTargetNoise(mag: number, velocity: number): void;
declare function CameraSetSourceNoise(mag: number, velocity: number): void;
declare function CameraSetTargetNoiseEx(
  mag: number,
  velocity: number,
  vertOnly: boolean
): void;
declare function CameraSetSourceNoiseEx(
  mag: number,
  velocity: number,
  vertOnly: boolean
): void;
declare function CameraSetSmoothingFactor(factor: number): void;
declare function SetCineFilterTexture(filename: string): void;
declare function SetCineFilterBlendMode(whichMode: HBlendMode): void;
declare function SetCineFilterTexMapFlags(whichFlags: HTexMapFlags): void;
declare function SetCineFilterStartUV(
  minu: number,
  minv: number,
  maxu: number,
  maxv: number
): void;
declare function SetCineFilterEndUV(
  minu: number,
  minv: number,
  maxu: number,
  maxv: number
): void;
declare function SetCineFilterStartColor(
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function SetCineFilterEndColor(
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function SetCineFilterDuration(duration: number): void;
declare function DisplayCineFilter(flag: boolean): void;
declare function IsCineFilterDisplayed(): boolean;
declare function SetCinematicScene(
  portraitUnitId: number,
  color: HPlayerColor,
  speakerTitle: string,
  text: string,
  sceneDuration: number,
  voiceoverDuration: number
): void;
declare function EndCinematicScene(): void;
declare function ForceCinematicSubtitles(flag: boolean): void;
declare function GetCameraMargin(whichMargin: number): number;
declare function GetCameraBoundMinX(): number;
declare function GetCameraBoundMinY(): number;
declare function GetCameraBoundMaxX(): number;
declare function GetCameraBoundMaxY(): number;
declare function GetCameraField(whichField: HCameraField): number;
declare function GetCameraTargetPositionX(): number;
declare function GetCameraTargetPositionY(): number;
declare function GetCameraTargetPositionZ(): number;
declare function GetCameraTargetPositionLoc(): HLocation;
declare function GetCameraEyePositionX(): number;
declare function GetCameraEyePositionY(): number;
declare function GetCameraEyePositionZ(): number;
declare function GetCameraEyePositionLoc(): HLocation;
declare function NewSoundEnvironment(environmentName: string): void;
declare function CreateSound(
  fileName: string,
  looping: boolean,
  is3D: boolean,
  stopwhenoutofrange: boolean,
  fadeInRate: number,
  fadeOutRate: number,
  eaxSetting: string
): HSound;
declare function CreateSoundFilenameWithLabel(
  fileName: string,
  looping: boolean,
  is3D: boolean,
  stopwhenoutofrange: boolean,
  fadeInRate: number,
  fadeOutRate: number,
  SLKEntryName: string
): HSound;
declare function CreateSoundFromLabel(
  soundLabel: string,
  looping: boolean,
  is3D: boolean,
  stopwhenoutofrange: boolean,
  fadeInRate: number,
  fadeOutRate: number
): HSound;
declare function CreateMIDISound(
  soundLabel: string,
  fadeInRate: number,
  fadeOutRate: number
): HSound;
declare function SetSoundParamsFromLabel(
  soundHandle: HSound,
  soundLabel: string
): void;
declare function SetSoundDistanceCutoff(
  soundHandle: HSound,
  cutoff: number
): void;
declare function SetSoundChannel(soundHandle: HSound, channel: number): void;
declare function SetSoundVolume(soundHandle: HSound, volume: number): void;
declare function SetSoundPitch(soundHandle: HSound, pitch: number): void;
declare function SetSoundPlayPosition(
  soundHandle: HSound,
  millisecs: number
): void;
declare function SetSoundDistances(
  soundHandle: HSound,
  minDist: number,
  maxDist: number
): void;
declare function SetSoundConeAngles(
  soundHandle: HSound,
  inside: number,
  outside: number,
  outsideVolume: number
): void;
declare function SetSoundConeOrientation(
  soundHandle: HSound,
  x: number,
  y: number,
  z: number
): void;
declare function SetSoundPosition(
  soundHandle: HSound,
  x: number,
  y: number,
  z: number
): void;
declare function SetSoundVelocity(
  soundHandle: HSound,
  x: number,
  y: number,
  z: number
): void;
declare function AttachSoundToUnit(soundHandle: HSound, whichUnit: HUnit): void;
declare function StartSound(soundHandle: HSound): void;
declare function StopSound(
  soundHandle: HSound,
  killWhenDone: boolean,
  fadeOut: boolean
): void;
declare function KillSoundWhenDone(soundHandle: HSound): void;
declare function SetMapMusic(
  musicName: string,
  random: boolean,
  index: number
): void;
declare function ClearMapMusic(): void;
declare function PlayMusic(musicName: string): void;
declare function PlayMusicEx(
  musicName: string,
  frommsecs: number,
  fadeinmsecs: number
): void;
declare function StopMusic(fadeOut: boolean): void;
declare function ResumeMusic(): void;
declare function PlayThematicMusic(musicFileName: string): void;
declare function PlayThematicMusicEx(
  musicFileName: string,
  frommsecs: number
): void;
declare function EndThematicMusic(): void;
declare function SetMusicVolume(volume: number): void;
declare function SetMusicPlayPosition(millisecs: number): void;
declare function SetThematicMusicPlayPosition(millisecs: number): void;
declare function SetSoundDuration(soundHandle: HSound, duration: number): void;
declare function GetSoundDuration(soundHandle: HSound): number;
declare function GetSoundFileDuration(musicFileName: string): number;
declare function VolumeGroupSetVolume(
  vgroup: HVolumeGroup,
  scale: number
): void;
declare function VolumeGroupReset(): void;
declare function GetSoundIsPlaying(soundHandle: HSound): boolean;
declare function GetSoundIsLoading(soundHandle: HSound): boolean;
declare function RegisterStackedSound(
  soundHandle: HSound,
  byPosition: boolean,
  rectwidth: number,
  rectheight: number
): void;
declare function UnregisterStackedSound(
  soundHandle: HSound,
  byPosition: boolean,
  rectwidth: number,
  rectheight: number
): void;
declare function AddWeatherEffect(
  where: HRect,
  effectID: number
): HWeatherEffect;
declare function RemoveWeatherEffect(whichEffect: HWeatherEffect): void;
declare function EnableWeatherEffect(
  whichEffect: HWeatherEffect,
  enable: boolean
): void;
declare function TerrainDeformCrater(
  x: number,
  y: number,
  radius: number,
  depth: number,
  duration: number,
  permanent: boolean
): HTerrainDeformation;
declare function TerrainDeformRipple(
  x: number,
  y: number,
  radius: number,
  depth: number,
  duration: number,
  count: number,
  spaceWaves: number,
  timeWaves: number,
  radiusStartPct: number,
  limitNeg: boolean
): HTerrainDeformation;
declare function TerrainDeformWave(
  x: number,
  y: number,
  dirX: number,
  dirY: number,
  distance: number,
  speed: number,
  radius: number,
  depth: number,
  trailTime: number,
  count: number
): HTerrainDeformation;
declare function TerrainDeformRandom(
  x: number,
  y: number,
  radius: number,
  minDelta: number,
  maxDelta: number,
  duration: number,
  updateInterval: number
): HTerrainDeformation;
declare function TerrainDeformStop(
  deformation: HTerrainDeformation,
  duration: number
): void;
declare function TerrainDeformStopAll(): void;
declare function AddSpecialEffect(
  modelName: string,
  x: number,
  y: number
): HEffect;
declare function AddSpecialEffectLoc(
  modelName: string,
  where: HLocation
): HEffect;
declare function AddSpecialEffectTarget(
  modelName: string,
  targetWidget: HWidget,
  attachPointName: string
): HEffect;
declare function DestroyEffect(whichEffect: HEffect): void;
declare function AddSpellEffect(
  abilityString: string,
  t: HEffectType,
  x: number,
  y: number
): HEffect;
declare function AddSpellEffectLoc(
  abilityString: string,
  t: HEffectType,
  where: HLocation
): HEffect;
declare function AddSpellEffectById(
  abilityId: number,
  t: HEffectType,
  x: number,
  y: number
): HEffect;
declare function AddSpellEffectByIdLoc(
  abilityId: number,
  t: HEffectType,
  where: HLocation
): HEffect;
declare function AddSpellEffectTarget(
  modelName: string,
  t: HEffectType,
  targetWidget: HWidget,
  attachPoint: string
): HEffect;
declare function AddSpellEffectTargetById(
  abilityId: number,
  t: HEffectType,
  targetWidget: HWidget,
  attachPoint: string
): HEffect;
declare function AddLightning(
  codeName: string,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): HLightning;
declare function AddLightningEx(
  codeName: string,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): HLightning;
declare function DestroyLightning(whichBolt: HLightning): boolean;
declare function MoveLightning(
  whichBolt: HLightning,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): boolean;
declare function MoveLightningEx(
  whichBolt: HLightning,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): boolean;
declare function GetLightningColorA(whichBolt: HLightning): number;
declare function GetLightningColorR(whichBolt: HLightning): number;
declare function GetLightningColorG(whichBolt: HLightning): number;
declare function GetLightningColorB(whichBolt: HLightning): number;
declare function SetLightningColor(
  whichBolt: HLightning,
  r: number,
  g: number,
  b: number,
  a: number
): boolean;
declare function GetAbilityEffect(
  abilityString: string,
  t: HEffectType,
  index: number
): string;
declare function GetAbilityEffectById(
  abilityId: number,
  t: HEffectType,
  index: number
): string;
declare function GetAbilitySound(abilityString: string, t: HSoundType): string;
declare function GetAbilitySoundById(abilityId: number, t: HSoundType): string;
declare function GetTerrainCliffLevel(x: number, y: number): number;
declare function SetWaterBaseColor(
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function SetWaterDeforms(val: boolean): void;
declare function GetTerrainType(x: number, y: number): number;
declare function GetTerrainVariance(x: number, y: number): number;
declare function SetTerrainType(
  x: number,
  y: number,
  terrainType: number,
  variation: number,
  area: number,
  shape: number
): void;
declare function IsTerrainPathable(
  x: number,
  y: number,
  t: HPathingType
): boolean;
declare function SetTerrainPathable(
  x: number,
  y: number,
  t: HPathingType,
  flag: boolean
): void;
declare function CreateImage(
  file: string,
  sizeX: number,
  sizeY: number,
  sizeZ: number,
  posX: number,
  posY: number,
  posZ: number,
  originX: number,
  originY: number,
  originZ: number,
  imageType: number
): HImage;
declare function DestroyImage(whichImage: HImage): void;
declare function ShowImage(whichImage: HImage, flag: boolean): void;
declare function SetImageConstantHeight(
  whichImage: HImage,
  flag: boolean,
  height: number
): void;
declare function SetImagePosition(
  whichImage: HImage,
  x: number,
  y: number,
  z: number
): void;
declare function SetImageColor(
  whichImage: HImage,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function SetImageRender(whichImage: HImage, flag: boolean): void;
declare function SetImageRenderAlways(whichImage: HImage, flag: boolean): void;
declare function SetImageAboveWater(
  whichImage: HImage,
  flag: boolean,
  useWaterAlpha: boolean
): void;
declare function SetImageType(whichImage: HImage, imageType: number): void;
declare function CreateUbersplat(
  x: number,
  y: number,
  name: string,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  forcePaused: boolean,
  noBirthTime: boolean
): HUberSplat;
declare function DestroyUbersplat(whichSplat: HUberSplat): void;
declare function ResetUbersplat(whichSplat: HUberSplat): void;
declare function FinishUbersplat(whichSplat: HUberSplat): void;
declare function ShowUbersplat(whichSplat: HUberSplat, flag: boolean): void;
declare function SetUbersplatRender(
  whichSplat: HUberSplat,
  flag: boolean
): void;
declare function SetUbersplatRenderAlways(
  whichSplat: HUberSplat,
  flag: boolean
): void;
declare function SetBlight(
  whichPlayer: HPlayer,
  x: number,
  y: number,
  radius: number,
  addBlight: boolean
): void;
declare function SetBlightRect(
  whichPlayer: HPlayer,
  r: HRect,
  addBlight: boolean
): void;
declare function SetBlightPoint(
  whichPlayer: HPlayer,
  x: number,
  y: number,
  addBlight: boolean
): void;
declare function SetBlightLoc(
  whichPlayer: HPlayer,
  whichLocation: HLocation,
  radius: number,
  addBlight: boolean
): void;
declare function CreateBlightedGoldmine(
  id: HPlayer,
  x: number,
  y: number,
  face: number
): HUnit;
declare function IsPointBlighted(x: number, y: number): boolean;
declare function SetDoodadAnimation(
  x: number,
  y: number,
  radius: number,
  doodadID: number,
  nearestOnly: boolean,
  animName: string,
  animRandom: boolean
): void;
declare function SetDoodadAnimationRect(
  r: HRect,
  doodadID: number,
  animName: string,
  animRandom: boolean
): void;
declare function StartMeleeAI(num: HPlayer, script: string): void;
declare function StartCampaignAI(num: HPlayer, script: string): void;
declare function CommandAI(num: HPlayer, command: number, data: number): void;
declare function PauseCompAI(p: HPlayer, pause: boolean): void;
declare function GetAIDifficulty(num: HPlayer): HAIDifficulty;
declare function RemoveGuardPosition(hUnit: HUnit): void;
declare function RecycleGuardPosition(hUnit: HUnit): void;
declare function RemoveAllGuardPositions(num: HPlayer): void;
declare function Cheat(cheatStr: string): void;
declare function IsNoVictoryCheat(): boolean;
declare function IsNoDefeatCheat(): boolean;
declare function Preload(filename: string): void;
declare function PreloadEnd(timeout: number): void;
declare function PreloadStart(): void;
declare function PreloadRefresh(): void;
declare function PreloadEndEx(): void;
declare function PreloadGenClear(): void;
declare function PreloadGenStart(): void;
declare function PreloadGenEnd(filename: string): void;
declare function Preloader(filename: string): void;
declare function GetUnitBasePrimaryStatById(unitTypeId: number): number;
declare function SetUnitBasePrimaryStatById(
  unitTypeId: number,
  statIndex: number
): void;
declare function GetUnitBaseGoldCostById(unitTypeId: number): number;
declare function SetUnitBaseGoldCostById(
  unitTypeId: number,
  goldCost: number
): void;
declare function GetUnitBaseDaySightById(unitTypeId: number): number;
declare function SetUnitBaseDaySightById(
  unitTypeId: number,
  daySight: number
): void;
declare function GetUnitBaseNightSightById(unitTypeId: number): number;
declare function SetUnitBaseNightSightById(
  unitTypeId: number,
  nightSight: number
): void;
declare function GetUnitBaseColourById(unitTypeId: number): number;
declare function SetUnitBaseColourById(
  unitTypeId: number,
  colour: number
): void;
declare function GetUnitBaseColourAById(unitTypeId: number): number;
declare function SetUnitBaseColourAById(
  unitTypeId: number,
  colourA: number
): void;
declare function GetUnitBaseColourRById(unitTypeId: number): number;
declare function SetUnitBaseColourRById(
  unitTypeId: number,
  colourR: number
): void;
declare function GetUnitBaseColourGById(unitTypeId: number): number;
declare function SetUnitBaseColourGById(
  unitTypeId: number,
  colourG: number
): void;
declare function GetUnitBaseColourBById(unitTypeId: number): number;
declare function SetUnitBaseColourBById(
  unitTypeId: number,
  colourB: number
): void;
declare function GetUnitBaseNameById(unitTypeId: number): string;
declare function SetUnitBaseNameById(unitTypeId: number, name: string): void;
declare function GetUnitBaseProperNameById(
  unitTypeId: number,
  properNameIndex: number
): string;
declare function SetUnitBaseProperNameById(
  unitTypeId: number,
  properName: string,
  properNameIndex: number
): void;
declare function GetUnitBaseModelById(unitTypeId: number): string;
declare function SetUnitBaseModelById(
  unitTypeId: number,
  modelName: string
): void;
declare function GetUnitBasePortraitById(unitTypeId: number): string;
declare function SetUnitBasePortraitById(
  unitTypeId: number,
  portraitName: string
): void;
declare function GetUnitBaseHotKeyById(unitTypeId: number): string;
declare function SetUnitBaseHotKeyById(
  unitTypeId: number,
  hotkey: string
): void;
declare function GetUnitBaseAwakenTipById(unitTypeId: number): string;
declare function SetUnitBaseAwakenTipById(
  unitTypeId: number,
  awakenTip: string
): void;
declare function GetUnitBaseTipById(unitTypeId: number): string;
declare function SetUnitBaseTipById(unitTypeId: number, tip: string): void;
declare function GetUnitBaseUberTipById(unitTypeId: number): string;
declare function SetUnitBaseUberTipById(
  unitTypeId: number,
  uberTip: string
): void;
declare function GetUnitBaseReviveTipById(unitTypeId: number): string;
declare function SetUnitBaseReviveTipById(
  unitTypeId: number,
  reviveTip: string
): void;
declare function GetUnitBaseShadowTexById(unitTypeId: number): string;
declare function SetUnitBaseShadowTexById(
  unitTypeId: number,
  shadowTexture: string
): void;
declare function GetUnitBaseMissileArtById(
  unitTypeId: number,
  attackIndex: number
): string;
declare function SetUnitBaseMissileArtById(
  unitTypeId: number,
  attackIndex: number,
  missleArt: string
): void;
declare function GetUnitBaseMissileSpeedById(
  unitTypeId: number,
  attackIndex: number
): number;
declare function SetUnitBaseMissileSpeedById(
  unitTypeId: number,
  attackIndex: number,
  realValue: number
): void;
declare function GetUnitBaseMissileArcById(
  unitTypeId: number,
  attackIndex: number
): number;
declare function SetUnitBaseMissileArcById(
  unitTypeId: number,
  attackIndex: number,
  realValue: number
): void;
declare function GetUnitBaseSelectionScaleById(unitTypeId: number): number;
declare function SetUnitBaseSelectionScaleById(
  unitTypeId: number,
  realValue: number
): void;
declare function GetHeroBasePrimaryStat(whichUnit: HUnit): number;
declare function SetHeroBasePrimaryStat(
  whichUnit: HUnit,
  statIndex: number
): void;
declare function GetUnitBaseGoldCost(whichUnit: HUnit): number;
declare function SetUnitBaseGoldCost(whichUnit: HUnit, goldCost: number): void;
declare function GetUnitBaseDaySight(whichUnit: HUnit): number;
declare function SetUnitBaseDaySight(whichUnit: HUnit, dsight: number): void;
declare function GetUnitBaseNightSight(whichUnit: HUnit): number;
declare function SetUnitBaseNightSight(whichUnit: HUnit, nsight: number): void;
declare function GetUnitBaseColour(whichUnit: HUnit): number;
declare function SetUnitBaseColour(whichUnit: HUnit, colour: number): void;
declare function GetUnitBaseColourA(whichUnit: HUnit): number;
declare function SetUnitBaseColourA(whichUnit: HUnit, alpha: number): void;
declare function GetUnitBaseColourR(whichUnit: HUnit): number;
declare function SetUnitBaseColourR(whichUnit: HUnit, red: number): void;
declare function GetUnitBaseColourG(whichUnit: HUnit): number;
declare function SetUnitBaseColourG(whichUnit: HUnit, green: number): void;
declare function GetUnitBaseColourB(whichUnit: HUnit): number;
declare function SetUnitBaseColourB(whichUnit: HUnit, blue: number): void;
declare function GetUnitBaseName(whichUnit: HUnit): string;
declare function SetUnitBaseName(whichUnit: HUnit, name: string): void;
declare function GetHeroBaseProperName(
  whichUnit: HUnit,
  nameIndex: number
): string;
declare function SetHeroBaseProperName(
  whichUnit: HUnit,
  nameIndex: number,
  properName: string
): void;
declare function GetUnitBaseModel(whichUnit: HUnit): string;
declare function SetUnitBaseModel(whichUnit: HUnit, model: string): void;
declare function GetUnitBasePortrait(whichUnit: HUnit): string;
declare function SetUnitBasePortrait(whichUnit: HUnit, portrait: string): void;
declare function GetUnitBaseHotkey(whichUnit: HUnit): string;
declare function SetUnitBaseHotkey(whichUnit: HUnit, hotkey: string): void;
declare function GetUnitBaseAwakenTip(whichUnit: HUnit): string;
declare function SetUnitBaseAwakenTip(
  whichUnit: HUnit,
  awakenTip: string
): void;
declare function GetUnitBaseTip(whichUnit: HUnit): string;
declare function SetUnitBaseTip(whichUnit: HUnit, tip: string): void;
declare function GetUnitBaseUberTip(whichUnit: HUnit): string;
declare function SetUnitBaseUberTip(whichUnit: HUnit, ubertip: string): void;
declare function GetUnitBaseReviveTip(whichUnit: HUnit): string;
declare function SetUnitBaseReviveTip(
  whichUnit: HUnit,
  revivetip: string
): void;
declare function GetUnitBaseShadowTex(whichUnit: HUnit): string;
declare function SetUnitBaseShadowTex(
  whichUnit: HUnit,
  shadowTexture: string
): void;
declare function GetUnitBaseMissileArt(
  whichUnit: HUnit,
  attackIndex: number
): string;
declare function SetUnitBaseMissileArt(
  whichUnit: HUnit,
  attackIndex: number,
  missleArt: string
): void;
declare function GetUnitBaseMissileSpeed(
  whichUnit: HUnit,
  attackIndex: number
): number;
declare function SetUnitBaseMissileSpeed(
  whichUnit: HUnit,
  attackIndex: number,
  missleSpeed: number
): void;
declare function GetUnitBaseSelectionScale(whichUnit: HUnit): number;
declare function SetUnitBaseSelectionScale(
  whichUnit: HUnit,
  selectionScale: number
): void;
declare function SetUnitTypeId(whichUnit: HUnit, integerValue: number): void;
declare function GetUnitLocustFlag(whichUnit: HUnit): number;
declare function GetUnitUnderCursor(): HUnit;
declare function GetUnitSelectedCountByPlayer(whichPlayer: HPlayer): number;
declare function GetUnitSelected(whichPlayer: HPlayer): HUnit;
declare function GetFirstUnitInSelection(whichPlayer: HPlayer): HUnit;
declare function IsUnitMoving(whichUnit: HUnit): boolean;
declare function IsUnitStunned(whichUnit: HUnit): boolean;
declare function IsUnitInvulnerable(whichUnit: HUnit): boolean;
declare function IsUnitDead(whichUnit: HUnit): boolean;
declare function IsUnitHero(whichUnit: HUnit): boolean;
declare function IsUnitTower(whichUnit: HUnit): boolean;
declare function IsUnitShop(whichUnit: HUnit): boolean;
declare function IsUnitInventoryEnabled(whichUnit: HUnit): boolean;
declare function EnableUnitInventory(whichUnit: HUnit, enable: boolean): void;
declare function IsUnitInventoryEnabledEx(whichUnit: HUnit): boolean;
declare function EnableUnitInventoryEx(whichUnit: HUnit, enable: boolean): void;
declare function IsUnitMovementEnabled(whichUnit: HUnit): boolean;
declare function EnableUnitMovement(whichUnit: HUnit, enable: boolean): void;
declare function IsUnitMovementEnabledEx(whichUnit: HUnit): boolean;
declare function EnableUnitMovementEx(whichUnit: HUnit, enable: boolean): void;
declare function IsUnitAttackEnabled(whichUnit: HUnit): boolean;
declare function EnableUnitAttack(whichUnit: HUnit, enable: boolean): void;
declare function IsUnitAttackEnabledEx(whichUnit: HUnit): boolean;
declare function EnableUnitAttackEx(whichUnit: HUnit, enable: boolean): void;
declare function IsUnitStateNormal(
  whichUnit: HUnit,
  additionalCheck: boolean
): boolean;
declare function RedrawUnit(whichUnit: HUnit): void;
declare function UpdateUnitInfoBar(whichUnit: HUnit): number;
declare function UnitUnapplyUpdates(whichUnit: HUnit): number;
declare function UnitApplyUpdates(whichUnit: HUnit): number;
declare function GetUnitAbility(whichUnit: HUnit, aid: number): HAbility;
declare function GetUnitAbilityByIndex(
  whichUnit: HUnit,
  index: number
): HAbility;
declare function UnitAddAbilityEx(
  whichUnit: HUnit,
  abilityTypeId: number,
  checkForDuplicates: boolean
): void;
declare function IsUnitSelectable(whichUnit: HUnit): boolean;
declare function SetUnitSelectable(whichUnit: HUnit, selectable: boolean): void;
declare function SetUnitControl(
  whichUnit: HUnit,
  flagValue: number,
  ismove: boolean,
  isattack: boolean,
  isinventory: boolean
): void;
declare function SetUnitLocustFlag(
  whichUnit: HUnit,
  flag: number,
  mode: number
): void;
declare function SetUnitTruesightImmuneState(
  whichUnit: HUnit,
  flag: boolean
): void;
declare function GetUnitMagicResistByType(
  whichUnit: HUnit,
  sourceUnit: number
): number;
declare function GetUnitEluneMagicResist(whichUnit: HUnit): number;
declare function GetUnitRunicMagicResist(whichUnit: HUnit): number;
declare function GetUnitTotalMagicResist(whichUnit: HUnit): number;
declare function IsUnitGatherer(whichUnit: HUnit): boolean;
declare function GetUnitCurrentResources(whichUnit: HUnit): number;
declare function GetUnitCurrentSight(whichUnit: HUnit): number;
declare function SetUnitCurrentSight(whichUnit: HUnit, realValue: number): void;
declare function GetUnitNextAttackTimeStampByIndex(
  whichUnit: HUnit,
  attackIndex: number
): number;
declare function SetUnitNextAttackTimeStampByIndex(
  whichUnit: HUnit,
  attackIndex: number,
  time: number
): void;
declare function SetUnitAttackState(
  whichUnit: HUnit,
  atttackIndex: number,
  attackState: number
): number;
declare function UnitCancelCurrentAttackByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function UnitResetAttackCooldownByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): boolean;
declare function UnitAddExtraAttackByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): boolean;
declare function GetUnitAttackTypeByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitAttackTypeByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  attackType: number
): void;
declare function GetUnitWeaponTypeByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitWeaponTypeByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  weaponType: number
): void;
declare function GetUnitWeaponSoundByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitWeaponSoundByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  weaponSound: number
): void;
declare function GetUnitBaseDamageByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitBaseDamageByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  damage: number
): void;
declare function GetUnitBonusDamageByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitBonusDamageByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  bonusDamage: number
): void;
declare function GetUnitDamageDicesSideByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitDamageDicesSideByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  dicesSides: number
): void;
declare function GetUnitDamageDicesByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitDamageDicesByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  dices: number
): void;
declare function GetUnitAttackRangeByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitAttackRangeByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  range: number
): void;
declare function GetUnitAttackSpeed(whichUnit: HUnit): number;
declare function SetUnitAttackSpeed(
  whichUnit: HUnit,
  attackSpeed: number
): void;
declare function GetUnitAttackCooldownByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitAttackCooldownByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  attackCooldown: number
): void;
declare function GetUnitBackswingPointByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitBackswingPointByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  backswing: number
): void;
declare function GetUnitDamagePointByIndex(
  whichUnit: HUnit,
  atttackIndex: number
): number;
declare function SetUnitDamagePointByIndex(
  whichUnit: HUnit,
  atttackIndex: number,
  damagePoint: number
): void;
declare function GetUnitAttacksEnabledIndex(whichUnit: HUnit): number;
declare function GetUnitArmourType(whichUnit: HUnit): number;
declare function SetUnitArmourType(whichUnit: HUnit, armourType: number): void;
declare function GetUnitArmour(whichUnit: HUnit): number;
declare function SetUnitArmour(whichUnit: HUnit, armour: number): void;
declare function GetUnitTimeScale(whichUnit: HUnit): number;
declare function GetUnitUnitBaseMoveSpeed(whichUnit: HUnit): number;
declare function SetUnitUnitBaseMoveSpeed(
  whichUnit: HUnit,
  baseMoveSpeed: number
): void;
declare function GetUnitTotalMoveSpeed(whichUnit: HUnit): number;
declare function GetUnitBonusMoveSpeedPercent(whichUnit: HUnit): number;
declare function SetUnitBonusMoveSpeedPercent(
  whichUnit: HUnit,
  bonusMoveSpeedPecent: number
): void;
declare function GetUnitVertexColour(whichUnit: HUnit): number;
declare function GetUnitCurrentLife(whichUnit: HUnit): number;
declare function SetUnitCurrentLife(whichUnit: HUnit, life: number): void;
declare function GetUnitMaxLife(whichUnit: HUnit): number;
declare function SetUnitMaxLife(whichUnit: HUnit, maxLife: number): void;
declare function GetUnitLifeRegen(whichUnit: HUnit): number;
declare function SetUnitLifeRegen(whichUnit: HUnit, lifeRegen: number): void;
declare function GetUnitCurrentMana(whichUnit: HUnit): number;
declare function SetUnitCurrentMana(whichUnit: HUnit, mana: number): void;
declare function GetUnitMaxMana(whichUnit: HUnit): number;
declare function SetUnitMaxMana(whichUnit: HUnit, maxMana: number): void;
declare function GetUnitManaRegen(whichUnit: HUnit): number;
declare function SetUnitManaRegen(whichUnit: HUnit, manaRegen: number): void;
declare function GetUnitPrimaryStat(whichUnit: HUnit): number;
declare function SetUnitPrimaryStat(
  whichUnit: HUnit,
  primaryStatIndex: number
): void;
declare function SetUnitModel(whichUnit: HUnit, modelName: string): void;
declare function GetUnitMoveAIType(whichUnit: HUnit): number;
declare function SetUnitMoveAIType(whichUnit: HUnit, moveAIType: number): void;
declare function GetUnitMoveType(whichUnit: HUnit): number;
declare function SetUnitMoveType(whichUnit: HUnit, moveType: number): void;
declare function SetUnitMoveTypeByIndex(
  whichUnit: HUnit,
  moveIndex: number
): void;
declare function GetUnitItemSlots(whichUnit: HUnit): number;
declare function SetUnitItemSlots(whichUnit: HUnit, itemSlots: number): void;
declare function SetUnitFacingInstant(whichUnit: HUnit, facing: number): void;
declare function GetUnitMinimapX(whichUnit: HUnit): number;
declare function GetUnitMinimapY(whichUnit: HUnit): number;
declare function GetUnitMaxLevelExperienceNeeded(whichUnit: HUnit): number;
declare function GetUnitHeroExperienceNeeded(
  whichUnit: HUnit,
  forLevel: number
): number;
declare function SetUnitReplaceableTexture(
  whichUnit: HUnit,
  textureName: string,
  textureIndex: number
): void;
declare function UnitApplySilence(
  whichUnit: HUnit,
  silenceState: boolean
): void;
declare function UnitSetAllAbilitiesState(
  whichUnit: HUnit,
  abilitiesState: boolean
): void;
declare function StunUnit(whichUnit: HUnit, target: HUnit): void;
declare function UnstunUnit(whichUnit: HUnit): void;
declare function GetUnitStunCounter(whichUnit: HUnit): number;
declare function SetUnitStunCounter(
  whichUnit: HUnit,
  stunCounter: number
): void;
declare function MorphUnitToTypeIdEx(
  whichUnit: HUnit,
  uid: number,
  unk1: number,
  unk2: number,
  unk3: number,
  unk4: number,
  unk5: number,
  unk6: number,
  unk7: number,
  unk8: number,
  unk19: number
): void;
declare function MorphUnitToTypeId(whichUnit: HUnit, uid: number): void;
declare function GetAbilityBaseManaCostById(aid: number, level: number): number;
declare function SetAbilityBaseManaCostById(
  aid: number,
  level: number,
  manaCost: number
): number;
declare function GetAbilityBaseCooldownById(aid: number, level: number): number;
declare function SetAbilityBaseCooldownById(
  aid: number,
  level: number,
  cooldown: number
): number;
declare function GetAbilityHotkeyById(aid: number): number;
declare function SetAbilityHotkeyById(aid: number, key: number): number;
declare function GetAbilityUnHotkeyById(aid: number): number;
declare function SetAbilityUnHotkeyById(aid: number, key: number): number;
declare function GetAbilityResearchHotkeyById(aid: number): number;
declare function SetAbilityResearchHotkeyById(aid: number, key: number): number;
declare function GetAbilityEffectSoundById(aid: number): string;
declare function SetAbilityEffectSoundById(aid: number, text: string): number;
declare function GetAbilityGlobalMessageById(aid: number): string;
declare function SetAbilityGlobalMessageById(aid: number, text: string): number;
declare function GetAbilityGlobalSoundById(aid: number): string;
declare function SetAbilityGlobalSoundById(aid: number, text: string): number;
declare function GetAbilityButtonXById(aid: number): number;
declare function SetAbilityButtonXById(aid: number, positionX: number): number;
declare function GetAbilityButtonYById(aid: number): number;
declare function SetAbilityButtonYById(aid: number, positionY: number): number;
declare function GetAbilityUnButtonXById(aid: number): number;
declare function SetAbilityUnButtonXById(
  aid: number,
  positionX: number
): number;
declare function GetAbilityUnButtonYById(aid: number): number;
declare function SetAbilityUnButtonYById(
  aid: number,
  positionY: number
): number;
declare function GetAbilityResearchButtonXById(aid: number): number;
declare function SetAbilityResearchButtonXById(
  aid: number,
  positionX: number
): number;
declare function GetAbilityResearchButtonYById(aid: number): number;
declare function SetAbilityResearchButtonYById(
  aid: number,
  positionY: number
): number;
declare function GetAbilityMissileSpeedById(aid: number): number;
declare function SetAbilityMissileSpeedById(
  aid: number,
  missileSpeed: number
): number;
declare function GetAbilityMissileArcById(aid: number): number;
declare function SetAbilityMissileArcById(
  aid: number,
  missileArc: number
): number;
declare function GetAbilityIsMissileHomingById(aid: number): boolean;
declare function SetAbilityIsMissileHomingById(
  aid: number,
  ishoming: boolean
): number;
declare function GetAbilityBaseSpellDetailsById(aid: number): number;
declare function SetAbilityBaseSpellDetailsById(
  aid: number,
  level: number
): number;
declare function GetAbilityBaseTipById(aid: number, level: number): string;
declare function SetAbilityBaseTipById(
  aid: number,
  level: number,
  text: string
): number;
declare function GetAbilityBaseUnTipById(aid: number, level: number): string;
declare function SetAbilityBaseUnTipById(
  aid: number,
  level: number,
  text: string
): number;
declare function GetAbilityBaseUberTipById(aid: number, level: number): string;
declare function SetAbilityBaseUberTipById(
  aid: number,
  level: number,
  text: string
): number;
declare function GetAbilityBaseUnUberTipById(
  aid: number,
  level: number
): string;
declare function SetAbilityBaseUnUberTipById(
  aid: number,
  level: number,
  text: string
): number;
declare function SetAbilityHotkeyByIdEx(aid: number, key: number): number;
declare function GetAbilityHotkey(abil: HAbility): number;
declare function SetAbilityHotkey(abil: HAbility, key: number): number;
declare function GetAbilityUnHotkey(abil: HAbility): number;
declare function SetAbilityUnHotkey(abil: HAbility, key: number): number;
declare function GetAbilityResearchHotkey(abil: HAbility): number;
declare function SetAbilityResearchHotkey(abil: HAbility, key: number): number;
declare function GetAbilityEffectSound(abil: HAbility): string;
declare function SetAbilityEffectSound(abil: HAbility, text: string): number;
declare function GetAbilityGlobalMessage(abil: HAbility): string;
declare function SetAbilityGlobalMessage(abil: HAbility, text: string): number;
declare function GetAbilityGlobalSound(abil: HAbility): string;
declare function SetAbilityGlobalSound(abil: HAbility, text: string): number;
declare function GetAbilityButtonX(abil: HAbility): number;
declare function SetAbilityButtonX(abil: HAbility, positionX: number): number;
declare function GetAbilityButtonY(abil: HAbility): number;
declare function SetAbilityButtonY(abil: HAbility, positionY: number): number;
declare function GetAbilityUnButtonX(abil: HAbility): number;
declare function SetAbilityUnButtonX(abil: HAbility, positionX: number): number;
declare function GetAbilityUnButtonY(abil: HAbility): number;
declare function SetAbilityUnButtonY(abil: HAbility, positionY: number): number;
declare function GetAbilityResearchButtonX(abil: HAbility): number;
declare function SetAbilityResearchButtonX(
  abil: HAbility,
  positionX: number
): number;
declare function GetAbilityResearchButtonY(abil: HAbility): number;
declare function SetAbilityResearchButtonY(
  abil: HAbility,
  positionY: number
): number;
declare function GetAbilityMissileSpeed(abil: HAbility): number;
declare function SetAbilityMissileSpeed(
  abil: HAbility,
  missileSpeed: number
): number;
declare function GetAbilityMissileArc(abil: HAbility): number;
declare function SetAbilityMissileArc(
  abil: HAbility,
  missileArc: number
): number;
declare function GetAbilityIsMissileHoming(abil: HAbility): boolean;
declare function SetAbilityIsMissileHoming(
  abil: HAbility,
  ishoming: boolean
): number;
declare function GetAbilityBaseSpellDetails(abil: HAbility): number;
declare function SetAbilityBaseSpellDetails(
  abil: HAbility,
  level: number
): number;
declare function GetAbilityBaseTip(abil: HAbility, level: number): string;
declare function SetAbilityBaseTip(
  abil: HAbility,
  level: number,
  text: string
): number;
declare function GetAbilityBaseUnTip(abil: HAbility, level: number): string;
declare function SetAbilityBaseUnTip(
  abil: HAbility,
  level: number,
  text: string
): number;
declare function GetAbilityBaseUberTip(abil: HAbility, level: number): string;
declare function SetAbilityBaseUberTip(
  abil: HAbility,
  level: number,
  text: string
): number;
declare function GetAbilityBaseUnUberTip(abil: HAbility, level: number): string;
declare function SetAbilityBaseUnUberTip(
  abil: HAbility,
  level: number,
  text: string
): number;
declare function SetAbilityHotkeyEx(abil: HAbility, key: number): number;
declare function GetAbilityOrder(abil: HAbility): number;
declare function GetAbilityLevel(abil: HAbility): number;
declare function GetAbilityBaseTypeId(abil: HAbility): number;
declare function GetAbilityTypeId(abil: HAbility): number;
declare function IsAbilityOnCooldown(abil: HAbility): boolean;
declare function IsAbilityEnabled(abil: HAbility): boolean;
declare function SetAbilityEnabled(abil: HAbility, flag: boolean): number;
declare function IsAbilityShown(abil: HAbility): boolean;
declare function ShowAbility(abil: HAbility, flag: boolean): number;
declare function IsAbilityEnabledEx(abil: HAbility): boolean;
declare function SetAbilityEnabledEx(abil: HAbility, flag: boolean): number;
declare function IsAbilityUsable(abil: HAbility): boolean;
declare function GetAbilityCastTime(abil: HAbility): number;
declare function SetAbilityCastTime(abil: HAbility, castTime: number): number;
declare function GetAbilityCastPoint(abil: HAbility): number;
declare function SetAbilityCastPoint(abil: HAbility, castPoint: number): number;
declare function GetAbilityBackswing(abil: HAbility): number;
declare function SetAbilityBackswing(abil: HAbility, backswing: number): number;
declare function GetAbilityCooldownEx(abil: HAbility): number;
declare function GetAbilityCooldown(abil: HAbility): number;
declare function SetAbilityCooldown(abil: HAbility, cooldown: number): number;
declare function GetAbilityRemainingCooldown(abil: HAbility): number;
declare function StartAbilityCooldown(
  abil: HAbility,
  cooldown: number
): boolean;
declare function SilenceAbility(
  abil: HAbility,
  flag1: boolean,
  flag2: boolean
): number;
declare function UnsilenceAbility(
  abil: HAbility,
  flag1: boolean,
  flag2: boolean
): number;
declare function CastAbility(abil: HAbility): boolean;
declare function CastAbilityGround(
  abil: HAbility,
  source: HUnit,
  targX: number,
  targY: number
): boolean;
declare function CastAbilityTarget(abil: HAbility, target: HUnit): boolean;
declare function GetBuffRemainingDuration(buffabil: HBuff): number;
declare function GroupGetCount(whichGroup: HGroup): number;
declare function GroupContainsUnit(
  whichGroup: HGroup,
  whichUnit: HUnit
): boolean;
declare function GroupGetUnitByIndex(whichGroup: HGroup, index: number): HUnit;
declare function GroupForEachUnit(whichGroup: HGroup): HUnit;
declare function GroupAddGroupEx(
  destGroup: HGroup,
  sourceGroup: HGroup
): boolean;
declare function GroupRemoveGroupEx(
  destGroup: HGroup,
  sourceGroup: HGroup
): boolean;
declare function IsSpecialEffectVisible(whichEffect: HEffect): boolean;
declare function SetSpecialEffectVisibility(
  whichEffect: HEffect,
  visibility: boolean
): void;
declare function GetSpecialEffectX(whichEffect: HEffect): number;
declare function GetSpecialEffectY(whichEffect: HEffect): number;
declare function GetSpecialEffectZ(whichEffect: HEffect): number;
declare function GetSpecialEffectHeight(whichEffect: HEffect): number;
declare function GetSpecialEffectPositionLocation(
  whichEffect: HEffect
): HLocation;
declare function SetSpecialEffectPositionWithZ(
  whichEffect: HEffect,
  x: number,
  y: number,
  z: number
): void;
declare function SetSpecialEffectPosition(
  whichEffect: HEffect,
  x: number,
  y: number
): void;
declare function SetSpecialEffectPositionLocation(
  whichEffect: HEffect,
  loc: HLocation
): void;
declare function SetSpecialEffectX(whichEffect: HEffect, x: number): void;
declare function SetSpecialEffectY(whichEffect: HEffect, y: number): void;
declare function SetSpecialEffectZ(whichEffect: HEffect, z: number): void;
declare function SetSpecialEffectHeight(
  whichEffect: HEffect,
  height: number
): void;
declare function GetSpecialEffectScale(whichEffect: HEffect): number;
declare function SetSpecialEffectScale(
  whichEffect: HEffect,
  scale: number
): void;
declare function GetSpecialEffectTimeScale(whichEffect: HEffect): number;
declare function SetSpecialEffectTimeScale(
  whichEffect: HEffect,
  timescale: number
): void;
declare function GetSpecialEffectColour(whichEffect: HEffect): number;
declare function SetSpecialEffectColour(
  whichEffect: HEffect,
  colour: number
): boolean;
declare function SetSpecialEffectAlpha(
  whichEffect: HEffect,
  alpha: number
): boolean;
declare function SetSpecialEffectVertexColour(
  whichEffect: HEffect,
  red: number,
  green: number,
  blue: number,
  alpha: number
): boolean;
declare function SetSpecialEffectAnimationWithRarityByIndex(
  whichEffect: HEffect,
  animIndex: number,
  rarity: number
): void;
declare function SetSpecialEffectAnimationWithRarity(
  whichEffect: HEffect,
  animation: string,
  rarity: number
): void;
declare function SetSpecialEffectAnimationByIndex(
  whichEffect: HEffect,
  animIndex: number
): void;
declare function SetSpecialEffectAnimation(
  whichEffect: HEffect,
  animation: string
): void;
declare function QueueSpecialEffectAnimationByIndex(
  whichEffect: HEffect,
  animIndex: number
): void;
declare function QueueSpecialEffectAnimation(
  whichEffect: HEffect,
  animation: string
): void;
declare function ResetSpecialEffectetMatrix(whichEffect: HEffect): void;
declare function SetSpecialEffectSpaceRotation(
  whichEffect: HEffect,
  yaw: number,
  pitch: number,
  roll: number,
  eulerOrder: number
): boolean;
declare function GetSpecialEffectYaw(whichEffect: HEffect): number;
declare function SetSpecialEffectYaw(
  whichEffect: HEffect,
  yaw: number
): boolean;
declare function GetSpecialEffectFacing(whichEffect: HEffect): number;
declare function SetSpecialEffectFacing(
  whichEffect: HEffect,
  facing: number
): boolean;
declare function GetSpecialEffectPitch(whichEffect: HEffect): number;
declare function SetSpecialEffectPitch(
  whichEffect: HEffect,
  pitch: number
): boolean;
declare function GetSpecialEffectRoll(whichEffect: HEffect): number;
declare function SetSpecialEffectRoll(
  whichEffect: HEffect,
  roll: number
): boolean;
declare function SetSpecialEffectOrientation(
  whichEffect: HEffect,
  yaw: number,
  pitch: number,
  roll: number
): void;
declare function SetSpecialEffectModel(
  whichEffect: HEffect,
  modelName: string
): void;
declare function SetSpecialEffectModelEx(
  whichEffect: HEffect,
  modelName: string,
  playerColour: number
): void;
declare function IsTrackableVisible(whichTrackable: HTrackable): boolean;
declare function SetTrackableVisibility(
  whichTrackable: HTrackable,
  visibility: boolean
): void;
declare function GetTrackableX(whichTrackable: HTrackable): number;
declare function GetTrackableY(whichTrackable: HTrackable): number;
declare function GetTrackableZ(whichTrackable: HTrackable): number;
declare function GetTrackableHeight(whichTrackable: HTrackable): number;
declare function GetTrackablePositionLocation(
  whichTrackable: HTrackable
): HLocation;
declare function SetTrackablePositionWithZ(
  whichTrackable: HTrackable,
  x: number,
  y: number,
  z: number
): void;
declare function SetTrackablePosition(
  whichTrackable: HTrackable,
  x: number,
  y: number
): void;
declare function SetTrackablePositionLocation(
  whichTrackable: HTrackable,
  loc: HLocation
): void;
declare function SetTrackableX(whichTrackable: HTrackable, x: number): void;
declare function SetTrackableY(whichTrackable: HTrackable, y: number): void;
declare function SetTrackableZ(whichTrackable: HTrackable, z: number): void;
declare function SetTrackableHeight(
  whichTrackable: HTrackable,
  height: number
): void;
declare function GetTrackableScale(whichTrackable: HTrackable): number;
declare function SetTrackableScale(
  whichTrackable: HTrackable,
  scale: number
): void;
declare function GetTrackableTimeScale(whichTrackable: HTrackable): number;
declare function SetTrackableTimeScale(
  whichTrackable: HTrackable,
  timescale: number
): void;
declare function GetTrackableColour(whichTrackable: HTrackable): number;
declare function SetTrackableColour(
  whichTrackable: HTrackable,
  colour: number
): boolean;
declare function SetTrackableAlpha(
  whichTrackable: HTrackable,
  alpha: number
): boolean;
declare function SetTrackableVertexColour(
  whichTrackable: HTrackable,
  red: number,
  green: number,
  blue: number,
  alpha: number
): boolean;
declare function SetTrackableAnimationWithRarityByIndex(
  whichTrackable: HTrackable,
  animIndex: number,
  rarity: number
): void;
declare function SetTrackableAnimationWithRarity(
  whichTrackable: HTrackable,
  animation: string,
  rarity: number
): void;
declare function SetTrackableAnimationByIndex(
  whichTrackable: HTrackable,
  animIndex: number
): void;
declare function SetTrackableAnimation(
  whichTrackable: HTrackable,
  animation: string
): void;
declare function QueueTrackableAnimationByIndex(
  whichTrackable: HTrackable,
  animIndex: number
): void;
declare function QueueTrackableAnimation(
  whichTrackable: HTrackable,
  animation: string
): void;
declare function ResetTrackableetMatrix(whichTrackable: HTrackable): void;
declare function SetTrackableSpaceRotation(
  whichTrackable: HTrackable,
  yaw: number,
  pitch: number,
  roll: number,
  eulerOrder: number
): boolean;
declare function GetTrackableYaw(whichTrackable: HTrackable): number;
declare function SetTrackableYaw(
  whichTrackable: HTrackable,
  yaw: number
): boolean;
declare function GetTrackableFacing(whichTrackable: HTrackable): number;
declare function SetTrackableFacing(
  whichTrackable: HTrackable,
  facing: number
): boolean;
declare function GetTrackablePitch(whichTrackable: HTrackable): number;
declare function SetTrackablePitch(
  whichTrackable: HTrackable,
  pitch: number
): boolean;
declare function GetTrackableRoll(whichTrackable: HTrackable): number;
declare function SetTrackableRoll(
  whichTrackable: HTrackable,
  roll: number
): boolean;
declare function SetTrackableOrientation(
  whichTrackable: HTrackable,
  yaw: number,
  pitch: number,
  roll: number
): void;
declare function SetTrackableModel(
  whichTrackable: HTrackable,
  modelName: string
): void;
declare function SetTrackableModelEx(
  whichTrackable: HTrackable,
  modelName: string,
  playerColour: number
): void;
declare function SetItemModel(whichItem: HItem, modelFile: string): void;
declare function GetItemLife(whichItem: HItem): number;
declare function SetItemLife(whichItem: HItem, life: number): void;
declare function GetItemMaxLife(whichItem: HItem): number;
declare function SetItemMaxLife(whichItem: HItem, maxLife: number): void;
declare function GetItemVertexColour(whichItem: HItem): number;
declare function SetItemVertexColour(
  whichItem: HItem,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function GetItemTimeScale(whichItem: HItem): number;
declare function SetItemTimeScale(whichItem: HItem, timeScale: number): void;
declare function GetItemScale(whichItem: HItem): number;
declare function SetItemScale(whichItem: HItem, scale: number): void;
declare function GetItemFacing(whichItem: HItem): number;
declare function SetItemFacing(
  whichItem: HItem,
  facing: number,
  isInstant: boolean
): void;
declare function SetItemSpaceRotation(
  whichItem: HItem,
  yaw: number,
  pitch: number,
  roll: number,
  eulerOrder: number
): void;
declare function SetItemOrientation(
  whichItem: HItem,
  yaw: number,
  pitch: number,
  roll: number
): void;
declare function GetItemYaw(whichItem: HItem): number;
declare function SetItemYaw(whichItem: HItem, yaw: number): void;
declare function GetItemPitch(whichItem: HItem): number;
declare function SetItemPitch(whichItem: HItem, pitch: number): void;
declare function GetItemRoll(whichItem: HItem): number;
declare function SetItemRoll(whichItem: HItem, roll: number): void;
declare function GetItemAbility(whichItem: HItem, abilityId: number): HAbility;
declare function GetItemAbilityByIndex(
  whichItem: HItem,
  abilityIndex: number
): HAbility;
declare function GetItemCooldown(whichItem: HItem): number;
declare function SetItemCooldown(whichItem: HItem, cooldown: number): void;
declare function StartItemCooldown(
  whichUnit: HUnit,
  whichItem: HItem,
  cooldown: number
): void;
declare function GetItemRemainingCooldown(whichItem: HItem): number;
declare function SetItemRemainingCooldown(
  whichItem: HItem,
  cooldown: number
): void;
declare function SetItemAnimationWithRarityByIndex(
  whichItem: HItem,
  animIndex: number,
  rarity: number
): void;
declare function SetItemAnimationWithRarity(
  whichItem: HItem,
  animation: string,
  rarity: number
): void;
declare function SetItemAnimationByIndex(
  whichItem: HItem,
  animIndex: number
): void;
declare function SetItemAnimation(whichItem: HItem, animation: string): void;
declare function QueueItemAnimationByIndex(
  whichItem: HItem,
  animIndex: number
): void;
declare function QueueItemAnimation(whichItem: HItem, animation: string): void;
