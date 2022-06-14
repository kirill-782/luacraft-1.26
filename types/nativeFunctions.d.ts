/** @noSelfInFile **/

declare function SetPlayers(playercount: number): void;
declare function GetTriggerEventId(): HEventId;
declare function GetSoundFileDuration(musicFileName: string): number;
declare function CameraSetupApplyWithZ(
  whichSetup: HCameraSetup | null,
  zDestOffset: number
): void;
declare function MultiboardClear(lb: HMultiBoard | null): void;
declare function TriggerClearConditions(whichTrigger: HTrigger | null): void;
declare function AddSpellEffectTarget(
  modelName: string,
  t: HEffectType | null,
  targetWidget: HWidget | null,
  attachPoint: string
): HEffect;
declare function GetDestructableOccluderHeight(d: HDestructable | null): number;
declare function SetTextTagFadepoint(
  t: HTextTag | null,
  fadepoint: number
): void;
declare function SetSoundChannel(
  soundHandle: HSound | null,
  channel: number
): void;
declare function CameraSetupGetDestPositionY(
  whichSetup: HCameraSetup | null
): number;
declare function I2S(i: number): string;
declare function GetFilterPlayer(): HPlayer;
declare function GetPlayerHandicapXP(whichPlayer: HPlayer | null): number;
declare function SetUnitFacingTimed(
  whichUnit: HUnit | null,
  facingAngle: number,
  duration: number
): void;
declare function GetSpellAbilityId(): number;
declare function RegisterStackedSound(
  soundHandle: HSound | null,
  byPosition: boolean,
  rectwidth: number,
  rectheight: number
): void;
declare function HaveStoredUnit(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): boolean;
declare function LoadForceHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HForce;
declare function ConvertMapSetting(i: number): HMapSetting;
declare function StartMeleeAI(num: HPlayer | null, script: string): void;
declare function GroupPointOrderLoc(
  whichGroup: HGroup | null,
  order: string,
  whichLocation: HLocation | null
): boolean;
declare function LoadTriggerConditionHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HTriggerCondition;
declare function GetItemPlayer(whichItem: HItem | null): HPlayer;
declare function GetCameraBoundMaxX(): number;
declare function UnitIgnoreAlarmToggled(whichUnit: HUnit | null): boolean;
declare function CreateDefeatCondition(): HDefeatCondition;
declare function InitHashtable(): HHashTable;
declare function GetTeams(): number;
declare function SaveRectHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichRect: HRect | null
): boolean;
declare function TriggerRegisterPlayerAllianceChange(
  whichTrigger: HTrigger | null,
  whichPlayer: HPlayer | null,
  whichAlliance: HAllianceType | null
): HEvent;
declare function SetMapDescription(description: string): void;
declare function RegionAddCell(
  whichRegion: HRegion | null,
  x: number,
  y: number
): void;
declare function GetPlayerStructureCount(
  whichPlayer: HPlayer | null,
  includeIncomplete: boolean
): number;
declare function GroupEnumUnitsOfType(
  whichGroup: HGroup | null,
  unitname: string,
  filter: HBoolExpr | null
): void;
declare function SyncStoredReal(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): void;
declare function SetUnitColor(
  whichUnit: HUnit | null,
  whichColor: HPlayerColor | null
): void;
declare function SaveBoolean(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  value: boolean
): void;
declare function IssueTargetOrderById(
  whichUnit: HUnit | null,
  order: number,
  targetWidget: HWidget | null
): boolean;
declare function SetUnitTimeScale(
  whichUnit: HUnit | null,
  timeScale: number
): void;
declare function RenameSaveDirectory(
  sourceDirName: string,
  destDirName: string
): boolean;
declare function DialogDestroy(whichDialog: HDialog | null): void;
declare function ConvertSoundType(i: number): HSoundType;
declare function AddPlayerTechResearched(
  whichPlayer: HPlayer | null,
  techid: number,
  levels: number
): void;
declare function AddSpecialEffectLoc(
  modelName: string,
  where: HLocation | null
): HEffect;
declare function LoadGroupHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HGroup;
declare function SetResourceDensity(whichdensity: HMapDensity | null): void;
declare function LoadLeaderboardHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HLeaderBoard;
declare function DestroyTimerDialog(whichDialog: HTimerDialog | null): void;
declare function GetCameraTargetPositionLoc(): HLocation;
declare function StringCase(source: string, upper: boolean): string;
declare function Player(number: number): HPlayer;
declare function IsTriggerWaitOnSleeps(whichTrigger: HTrigger | null): boolean;
declare function GetWidgetX(whichWidget: HWidget | null): number;
declare function SetPlayerState(
  whichPlayer: HPlayer | null,
  whichPlayerState: HPlayerState | null,
  value: number
): void;
declare function SyncSelections(): void;
declare function UnitId2String(unitId: number): string;
declare function SetItemTypeSlots(whichUnit: HUnit | null, slots: number): void;
declare function GroupPointOrderByIdLoc(
  whichGroup: HGroup | null,
  order: number,
  whichLocation: HLocation | null
): boolean;
declare function TimerGetTimeout(whichTimer: HTimer | null): number;
declare function EnableWorldFogBoundary(b: boolean): void;
declare function CreateSoundFromLabel(
  soundLabel: string,
  looping: boolean,
  is3D: boolean,
  stopwhenoutofrange: boolean,
  fadeInRate: number,
  fadeOutRate: number
): HSound;
declare function LoadUnitHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HUnit;
declare function QuestSetIconPath(
  whichQuest: HQuest | null,
  iconPath: string
): void;
declare function GetGamePlacement(): HPlacement;
declare function Atan2(y: number, x: number): number;
declare function SquareRoot(x: number): number;
declare function GetClickedDialog(): HDialog;
declare function SaveTimerHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichTimer: HTimer | null
): boolean;
declare function GetUnitY(whichUnit: HUnit | null): number;
declare function GetLoadedUnit(): HUnit;
declare function SaveTriggerConditionHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichTriggercondition: HTriggerCondition | null
): boolean;
declare function CreateDeadDestructable(
  objectid: number,
  x: number,
  y: number,
  face: number,
  scale: number,
  variation: number
): HDestructable;
declare function SetUnitX(whichUnit: HUnit | null, newX: number): void;
declare function GetLearnedSkill(): number;
declare function DialogAddButton(
  whichDialog: HDialog | null,
  buttonText: string,
  hotkey: number
): HButton;
declare function UnitRemoveBuffs(
  whichUnit: HUnit | null,
  removePositive: boolean,
  removeNegative: boolean
): void;
declare function ConvertPathingType(i: number): HPathingType;
declare function TriggerRegisterPlayerChatEvent(
  whichTrigger: HTrigger | null,
  whichPlayer: HPlayer | null,
  chatMessageToDetect: string,
  exactMatchOnly: boolean
): HEvent;
declare function GroupEnumUnitsOfTypeCounted(
  whichGroup: HGroup | null,
  unitname: string,
  filter: HBoolExpr | null,
  countLimit: number
): void;
declare function MultiboardSetItemWidth(
  mbi: HMultiBoardItem | null,
  width: number
): void;
declare function GetItemCharges(whichItem: HItem | null): number;
declare function GetAbilitySoundById(
  abilityId: number,
  t: HSoundType | null
): string;
declare function UnitHasItem(
  whichUnit: HUnit | null,
  whichItem: HItem | null
): boolean;
declare function ConvertGameDifficulty(i: number): HGameDifficulty;
declare function CachePlayerHeroData(whichPlayer: HPlayer | null): void;
declare function TimerStart(
  whichTimer: HTimer | null,
  timeout: number,
  periodic: boolean,
  handlerFunc: TCode
): void;
declare function ForForce(whichForce: HForce | null, callback: TCode): void;
declare function GetOwningPlayer(whichUnit: HUnit | null): HPlayer;
declare function IsLocationInRegion(
  whichRegion: HRegion | null,
  whichLocation: HLocation | null
): boolean;
declare function SaveTriggerEventHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichEvent: HEvent | null
): boolean;
declare function HaveSavedReal(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): boolean;
declare function FinishUbersplat(whichSplat: HUberSplat | null): void;
declare function GetPlayerScore(
  whichPlayer: HPlayer | null,
  whichPlayerScore: HPlayerScore | null
): number;
declare function SetImageRenderAlways(
  whichImage: HImage | null,
  flag: boolean
): void;
declare function SetFogStateRadius(
  forWhichPlayer: HPlayer | null,
  whichState: HFogState | null,
  centerx: number,
  centerY: number,
  radius: number,
  useSharedVision: boolean
): void;
declare function LoadTextTagHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HTextTag;
declare function IsCineFilterDisplayed(): boolean;
declare function AddSpellEffectTargetById(
  abilityId: number,
  t: HEffectType | null,
  targetWidget: HWidget | null,
  attachPoint: string
): HEffect;
declare function SetPlayerTechMaxAllowed(
  whichPlayer: HPlayer | null,
  techid: number,
  maximum: number
): void;
declare function PauseGame(flag: boolean): void;
declare function ConvertMapDensity(i: number): HMapDensity;
declare function GetGameDifficulty(): HGameDifficulty;
declare function WaygateGetDestinationX(waygate: HUnit | null): number;
declare function LoadTriggerActionHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HTriggerAction;
declare function IsPointBlighted(x: number, y: number): boolean;
declare function LoadGame(saveFileName: string, doScoreScreen: boolean): void;
declare function SaveStr(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  value: string
): boolean;
declare function SetTextTagPermanent(t: HTextTag | null, flag: boolean): void;
declare function MoveLightning(
  whichBolt: HLightning | null,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): boolean;
declare function GroupTargetOrder(
  whichGroup: HGroup | null,
  order: string,
  targetWidget: HWidget | null
): boolean;
declare function ChooseRandomItem(level: number): number;
declare function SaveHashtableHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichHashtable: HHashTable | null
): boolean;
declare function GetTerrainType(x: number, y: number): number;
declare function UnitModifySkillPoints(
  whichHero: HUnit | null,
  skillPointDelta: number
): boolean;
declare function GetUnitDefaultPropWindow(whichUnit: HUnit | null): number;
declare function LeaderboardSetItemValue(
  lb: HLeaderBoard | null,
  whichItem: number,
  val: number
): void;
declare function FlushStoredInteger(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): void;
declare function GetTriggerPlayer(): HPlayer;
declare function GetFilterDestructable(): HDestructable;
declare function UnitAddItemById(
  whichUnit: HUnit | null,
  itemId: number
): HItem;
declare function FlushStoredString(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): void;
declare function SetUnitAnimationByIndex(
  whichUnit: HUnit | null,
  whichAnimation: number
): void;
declare function IsPlayerAlly(
  whichPlayer: HPlayer | null,
  otherPlayer: HPlayer | null
): boolean;
declare function LoadButtonHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HButton;
declare function UnitResetCooldown(whichUnit: HUnit | null): void;
declare function MoveRectTo(
  whichRect: HRect | null,
  newCenterX: number,
  newCenterY: number
): void;
declare function QuestSetTitle(whichQuest: HQuest | null, title: string): void;
declare function SetCameraRotateMode(
  x: number,
  y: number,
  radiansToSweep: number,
  duration: number
): void;
declare function CameraSetTargetNoise(mag: number, velocity: number): void;
declare function FogModifierStart(whichFogModifier: HFogModifier | null): void;
declare function IsUnitLoaded(whichUnit: HUnit | null): boolean;
declare function IsUnitIllusion(whichUnit: HUnit | null): boolean;
declare function IssueNeutralTargetOrderById(
  forWhichPlayer: HPlayer | null,
  neutralStructure: HUnit | null,
  unitId: number,
  target: HWidget | null
): boolean;
declare function SetBlightRect(
  whichPlayer: HPlayer | null,
  r: HRect | null,
  addBlight: boolean
): void;
declare function GetFoodUsed(unitId: number): number;
declare function GetAttacker(): HUnit;
declare function IsItemVisible(whichItem: HItem | null): boolean;
declare function RemovePlayer(
  whichPlayer: HPlayer | null,
  gameResult: HPlayerGameResult | null
): void;
declare function SaveImageHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichImage: HImage | null
): boolean;
declare function SetPlayerHandicapXP(
  whichPlayer: HPlayer | null,
  handicap: number
): void;
declare function SaveInteger(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  value: number
): void;
declare function IsUnitInRangeXY(
  whichUnit: HUnit | null,
  x: number,
  y: number,
  distance: number
): boolean;
declare function SavePlayerHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichPlayer: HPlayer | null
): boolean;
declare function SetCineFilterEndColor(
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function R2S(r: number): string;
declare function DoNotSaveReplay(): void;
declare function RemoveUnitFromStock(
  whichUnit: HUnit | null,
  unitId: number
): void;
declare function GetUnitCurrentOrder(whichUnit: HUnit | null): number;
declare function PlayCinematic(movieName: string): void;
declare function ResumeTimer(whichTimer: HTimer | null): void;
declare function GetTriggerDestructable(): HDestructable;
declare function SaveMultiboardHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichMultiboard: HMultiBoard | null
): boolean;
declare function EnableUserControl(b: boolean): void;
declare function SaveAgentHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichAgent: HAgent | null
): boolean;
declare function SetMapMusic(
  musicName: string,
  random: boolean,
  index: number
): void;
declare function MultiboardDisplay(lb: HMultiBoard | null, show: boolean): void;
declare function EnableOcclusion(flag: boolean): void;
declare function SetPlayerStartLocation(
  whichPlayer: HPlayer | null,
  startLocIndex: number
): void;
declare function SetAllItemTypeSlots(slots: number): void;
declare function SetHeroXP(
  whichHero: HUnit | null,
  newXpVal: number,
  showEyeCandy: boolean
): void;
declare function LoadTriggerHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HTrigger;
declare function DialogClear(whichDialog: HDialog | null): void;
declare function SetCameraField(
  whichField: HCameraField | null,
  value: number,
  duration: number
): void;
declare function SetDestructableLife(
  d: HDestructable | null,
  life: number
): void;
declare function TriggerRegisterVariableEvent(
  whichTrigger: HTrigger | null,
  varName: string,
  opcode: HLimitop | null,
  limitval: number
): HEvent;
declare function AddSpellEffectByIdLoc(
  abilityId: number,
  t: HEffectType | null,
  where: HLocation | null
): HEffect;
declare function ConvertPlacement(i: number): HPlacement;
declare function SetGamePlacement(whichPlacementType: HPlacement | null): void;
declare function GetPlayerUnitCount(
  whichPlayer: HPlayer | null,
  includeIncomplete: boolean
): number;
declare function SaveItemPoolHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichItempool: HItemPool | null
): boolean;
declare function SetPlayerAlliance(
  sourcePlayer: HPlayer | null,
  otherPlayer: HPlayer | null,
  whichAllianceSetting: HAllianceType | null,
  value: boolean
): void;
declare function ReviveHeroLoc(
  whichHero: HUnit | null,
  loc: HLocation | null,
  doEyecandy: boolean
): boolean;
declare function SetItemDropID(whichItem: HItem | null, unitId: number): void;
declare function GetStartLocationLoc(whichStartLocation: number): HLocation;
declare function SetUnitPositionLoc(
  whichUnit: HUnit | null,
  whichLocation: HLocation | null
): void;
declare function IssueTargetOrder(
  whichUnit: HUnit | null,
  order: string,
  targetWidget: HWidget | null
): boolean;
declare function HaveSavedInteger(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): boolean;
declare function IsTriggerEnabled(whichTrigger: HTrigger | null): boolean;
declare function GetEventUnitState(): HUnitState;
declare function SetPlayerHandicap(
  whichPlayer: HPlayer | null,
  handicap: number
): void;
declare function SaveSoundHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichSound: HSound | null
): boolean;
declare function GetRectMinX(whichRect: HRect | null): number;
declare function DestroyItemPool(whichItemPool: HItemPool | null): void;
declare function IsLocationVisibleToPlayer(
  whichLocation: HLocation | null,
  whichPlayer: HPlayer | null
): boolean;
declare function SaveDefeatConditionHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichDefeatcondition: HDefeatCondition | null
): boolean;
declare function VersionSupported(whichVersion: HVersion | null): boolean;
declare function CreateMultiboard(): HMultiBoard;
declare function Atan(x: number): number;
declare function QueueDestructableAnimation(
  d: HDestructable | null,
  whichAnimation: string
): void;
declare function SetUnitUseFood(
  whichUnit: HUnit | null,
  useFood: boolean
): void;
declare function ConvertAllianceType(i: number): HAllianceType;
declare function MultiboardSetItemsWidth(
  lb: HMultiBoard | null,
  width: number
): void;
declare function IssueInstantTargetOrderById(
  whichUnit: HUnit | null,
  order: number,
  targetWidget: HWidget | null,
  instantTargetWidget: HWidget | null
): boolean;
declare function IssuePointOrderById(
  whichUnit: HUnit | null,
  order: number,
  x: number,
  y: number
): boolean;
declare function CameraSetSourceNoiseEx(
  mag: number,
  velocity: number,
  vertOnly: boolean
): void;
declare function UnitStripHeroLevel(
  whichHero: HUnit | null,
  howManyLevels: number
): boolean;
declare function PlayThematicMusicEx(
  musicFileName: string,
  frommsecs: number
): void;
declare function TriggerSyncReady(): void;
declare function GetUnitX(whichUnit: HUnit | null): number;
declare function SetUnitAbilityLevel(
  whichUnit: HUnit | null,
  abilcode: number,
  level: number
): number;
declare function GetTriggeringRegion(): HRegion;
declare function AddUnitToStock(
  whichUnit: HUnit | null,
  unitId: number,
  currentStock: number,
  stockMax: number
): void;
declare function GetPlayerColor(whichPlayer: HPlayer | null): HPlayerColor;
declare function SetTextTagPosUnit(
  t: HTextTag | null,
  whichUnit: HUnit | null,
  heightOffset: number
): void;
declare function GetSoundIsLoading(soundHandle: HSound | null): boolean;
declare function TerrainDeformCrater(
  x: number,
  y: number,
  radius: number,
  depth: number,
  duration: number,
  permanent: boolean
): HTerrainDeformation;
declare function MultiboardSetItemsValue(
  lb: HMultiBoard | null,
  value: string
): void;
declare function SaveTimerDialogHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichTimerdialog: HTimerDialog | null
): boolean;
declare function UnitRemoveBuffsEx(
  whichUnit: HUnit | null,
  removePositive: boolean,
  removeNegative: boolean,
  magic: boolean,
  physical: boolean,
  timedLife: boolean,
  aura: boolean,
  autoDispel: boolean
): void;
declare function LoadWidgetHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HWidget;
declare function ConvertUnitType(i: number): HUnitType;
declare function IsUnitInRangeLoc(
  whichUnit: HUnit | null,
  whichLocation: HLocation | null,
  distance: number
): boolean;
declare function CreateTextTag(): HTextTag;
declare function GetGameTypeSelected(): HGameType;
declare function GetSpellAbilityUnit(): HUnit;
declare function ConvertAttackType(i: number): HAttackType;
declare function GroupAddUnit(
  whichGroup: HGroup | null,
  whichUnit: HUnit | null
): void;
declare function SaveGameCache(whichCache: HGameCache | null): boolean;
declare function ConvertPlayerScore(i: number): HPlayerScore;
declare function LeaderboardSetValueColor(
  lb: HLeaderBoard | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function AddIndicator(
  whichWidget: HWidget | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function SaveLeaderboardHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichLeaderboard: HLeaderBoard | null
): boolean;
declare function SetDestructableAnimation(
  d: HDestructable | null,
  whichAnimation: string
): void;
declare function IssueInstantPointOrderById(
  whichUnit: HUnit | null,
  order: number,
  x: number,
  y: number,
  instantTargetWidget: HWidget | null
): boolean;
declare function TriggerRegisterUnitStateEvent(
  whichTrigger: HTrigger | null,
  whichUnit: HUnit | null,
  whichState: HUnitState | null,
  opcode: HLimitop | null,
  limitval: number
): HEvent;
declare function CreateTimerDialog(t: HTimer | null): HTimerDialog;
declare function GetCameraEyePositionX(): number;
declare function GroupEnumUnitsOfPlayer(
  whichGroup: HGroup | null,
  whichPlayer: HPlayer | null,
  filter: HBoolExpr | null
): void;
declare function LeaderboardSortItemsByPlayer(
  lb: HLeaderBoard | null,
  ascending: boolean
): void;
declare function Cos(radians: number): number;
declare function SetSoundPosition(
  soundHandle: HSound | null,
  x: number,
  y: number,
  z: number
): void;
declare function GroupRemoveUnit(
  whichGroup: HGroup | null,
  whichUnit: HUnit | null
): void;
declare function GetStartLocationY(whichStartLocation: number): number;
declare function ConvertVersion(i: number): HVersion;
declare function SetReservedLocalHeroButtons(reserved: number): void;
declare function RecycleGuardPosition(hUnit: HUnit | null): void;
declare function TerrainDeformStop(
  deformation: HTerrainDeformation | null,
  duration: number
): void;
declare function ForcePlayerStartLocation(
  whichPlayer: HPlayer | null,
  startLocIndex: number
): void;
declare function GetUnitState(
  whichUnit: HUnit | null,
  whichUnitState: HUnitState | null
): number;
declare function UnitAddSleepPerm(whichUnit: HUnit | null, add: boolean): void;
declare function EndCinematicScene(): void;
declare function GetObjectName(objectId: number): string;
declare function GetItemUserData(whichItem: HItem | null): number;
declare function And(
  operandA: HBoolExpr | null,
  operandB: HBoolExpr | null
): HBoolExpr;
declare function TriggerRemoveCondition(
  whichTrigger: HTrigger | null,
  whichCondition: HTriggerCondition | null
): void;
declare function LeaderboardSortItemsByLabel(
  lb: HLeaderBoard | null,
  ascending: boolean
): void;
declare function AdjustCameraField(
  whichField: HCameraField | null,
  offset: number,
  duration: number
): void;
declare function GetDestructableMaxLife(d: HDestructable | null): number;
declare function GetTriggerEvalCount(whichTrigger: HTrigger | null): number;
declare function SetItemDroppable(i: HItem | null, flag: boolean): void;
declare function SetSoundParamsFromLabel(
  soundHandle: HSound | null,
  soundLabel: string
): void;
declare function SetPlayerTeam(
  whichPlayer: HPlayer | null,
  whichTeam: number
): void;
declare function GetRectMaxY(whichRect: HRect | null): number;
declare function LoadInteger(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): number;
declare function SetTimeOfDayScale(r: number): void;
declare function GetAIDifficulty(num: HPlayer | null): HAIDifficulty;
declare function LoadUnitPoolHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HUnitPool;
declare function I2R(i: number): number;
declare function SetUbersplatRenderAlways(
  whichSplat: HUberSplat | null,
  flag: boolean
): void;
declare function SyncStoredUnit(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): void;
declare function ForceUICancel(): void;
declare function DisplayCineFilter(flag: boolean): void;
declare function IssueBuildOrderById(
  whichPeon: HUnit | null,
  unitId: number,
  x: number,
  y: number
): boolean;
declare function CameraSetupGetDestPositionX(
  whichSetup: HCameraSetup | null
): number;
declare function SetUnitPathing(whichUnit: HUnit | null, flag: boolean): void;
declare function QuestItemSetDescription(
  whichQuestItem: HQuestItem | null,
  description: string
): void;
declare function IsLocationMaskedToPlayer(
  whichLocation: HLocation | null,
  whichPlayer: HPlayer | null
): boolean;
declare function TriggerRegisterDialogButtonEvent(
  whichTrigger: HTrigger | null,
  whichButton: HButton | null
): HEvent;
declare function GetHeroStr(
  whichHero: HUnit | null,
  includeBonuses: boolean
): number;
declare function CreateDestructableZ(
  objectid: number,
  x: number,
  y: number,
  z: number,
  face: number,
  scale: number,
  variation: number
): HDestructable;
declare function SetTerrainType(
  x: number,
  y: number,
  terrainType: number,
  variation: number,
  area: number,
  shape: number
): void;
declare function GetRectCenterX(whichRect: HRect | null): number;
declare function GetSoundDuration(soundHandle: HSound | null): number;
declare function AddUnitAnimationProperties(
  whichUnit: HUnit | null,
  animProperties: string,
  add: boolean
): void;
declare function PlaceRandomItem(
  whichItemPool: HItemPool | null,
  x: number,
  y: number
): HItem;
declare function SetUnitPosition(
  whichUnit: HUnit | null,
  newX: number,
  newY: number
): void;
declare function UnitSuspendDecay(
  whichUnit: HUnit | null,
  suspend: boolean
): void;
declare function LoadTrackableHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HTrackable;
declare function WaygateIsActive(waygate: HUnit | null): boolean;
declare function GetPlayerTechCount(
  whichPlayer: HPlayer | null,
  techid: number,
  specificonly: boolean
): number;
declare function EnableTrigger(whichTrigger: HTrigger | null): void;
declare function SaveQuestHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichQuest: HQuest | null
): boolean;
declare function CreateDeadDestructableZ(
  objectid: number,
  x: number,
  y: number,
  z: number,
  face: number,
  scale: number,
  variation: number
): HDestructable;
declare function IsQuestRequired(whichQuest: HQuest | null): boolean;
declare function ConvertRacePref(i: number): HRacePreference;
declare function R2SW(r: number, width: number, precision: number): string;
declare function MultiboardGetTitleText(lb: HMultiBoard | null): string;
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
declare function IsUnitInTransport(
  whichUnit: HUnit | null,
  whichTransport: HUnit | null
): boolean;
declare function SetUnitFacing(
  whichUnit: HUnit | null,
  facingAngle: number
): void;
declare function LoadLightningHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HLightning;
declare function CreateLeaderboard(): HLeaderBoard;
declare function SetDestructableOccluderHeight(
  d: HDestructable | null,
  height: number
): void;
declare function GetUnitPropWindow(whichUnit: HUnit | null): number;
declare function UnitAddAbility(
  whichUnit: HUnit | null,
  abilityId: number
): boolean;
declare function MoveLocation(
  whichLocation: HLocation | null,
  newX: number,
  newY: number
): void;
declare function IssuePointOrderByIdLoc(
  whichUnit: HUnit | null,
  order: number,
  whichLocation: HLocation | null
): boolean;
declare function UnitUseItem(
  whichUnit: HUnit | null,
  whichItem: HItem | null
): boolean;
declare function IssueNeutralTargetOrder(
  forWhichPlayer: HPlayer | null,
  neutralStructure: HUnit | null,
  unitToBuild: string,
  target: HWidget | null
): boolean;
declare function LoadTimerDialogHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HTimerDialog;
declare function SetHeroStr(
  whichHero: HUnit | null,
  newStr: number,
  permanent: boolean
): void;
declare function TriggerRegisterGameEvent(
  whichTrigger: HTrigger | null,
  whichGameEvent: HGameEvent | null
): HEvent;
declare function ReviveHero(
  whichHero: HUnit | null,
  x: number,
  y: number,
  doEyecandy: boolean
): boolean;
declare function VolumeGroupReset(): void;
declare function GetTriggeringTrackable(): HTrackable;
declare function SaveQuestItemHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichQuestitem: HQuestItem | null
): boolean;
declare function GetManipulatedItem(): HItem;
declare function SaveGame(saveFileName: string): void;
declare function GetRandomInt(lowBound: number, highBound: number): number;
declare function MultiboardSetItemStyle(
  mbi: HMultiBoardItem | null,
  showValue: boolean,
  showIcon: boolean
): void;
declare function MultiboardGetColumnCount(lb: HMultiBoard | null): number;
declare function GetTournamentFinishNowRule(): number;
declare function SetTeams(teamcount: number): void;
declare function GetPlayerId(whichPlayer: HPlayer | null): number;
declare function RemoveWeatherEffect(whichEffect: HWeatherEffect | null): void;
declare function IssueImmediateOrder(
  whichUnit: HUnit | null,
  order: string
): boolean;
declare function UnitDamageTarget(
  whichUnit: HUnit | null,
  target: HWidget | null,
  amount: number,
  attack: boolean,
  ranged: boolean,
  attackType: HAttackType | null,
  damageType: HDamageType | null,
  weaponType: HWeaponType | null
): boolean;
declare function TriggerAddCondition(
  whichTrigger: HTrigger | null,
  condition: HBoolExpr | null
): HTriggerCondition;
declare function FlushChildHashtable(
  table: HHashTable | null,
  parentKey: number
): void;
declare function TriggerRegisterUnitInRange(
  whichTrigger: HTrigger | null,
  whichUnit: HUnit | null,
  range: number,
  filter: HBoolExpr | null
): HEvent;
declare function TriggerRegisterDialogEvent(
  whichTrigger: HTrigger | null,
  whichDialog: HDialog | null
): HEvent;
declare function DestroyMultiboard(lb: HMultiBoard | null): void;
declare function GetWinningPlayer(): HPlayer;
declare function CripplePlayer(
  whichPlayer: HPlayer | null,
  toWhichPlayers: HForce | null,
  flag: boolean
): void;
declare function GetAbilitySound(
  abilityString: string,
  t: HSoundType | null
): string;
declare function LoadTimerHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HTimer;
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
declare function GetTriggerUnit(): HUnit;
declare function GetSpellTargetX(): number;
declare function StringLength(s: string): number;
declare function GetDefaultDifficulty(): HGameDifficulty;
declare function CameraSetupSetDestPosition(
  whichSetup: HCameraSetup | null,
  x: number,
  y: number,
  duration: number
): void;
declare function ShowDestructable(d: HDestructable | null, flag: boolean): void;
declare function SaveRegionHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichRegion: HRegion | null
): boolean;
declare function GetCameraTargetPositionX(): number;
declare function DisableTrigger(whichTrigger: HTrigger | null): void;
declare function DisableRestartMission(flag: boolean): void;
declare function LoadMultiboardHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HMultiBoard;
declare function GetStoredReal(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): number;
declare function DestroyQuest(whichQuest: HQuest | null): void;
declare function UnitAddItemToSlotById(
  whichUnit: HUnit | null,
  itemId: number,
  itemSlot: number
): boolean;
declare function ConvertGameSpeed(i: number): HGameSpeed;
declare function MultiboardReleaseItem(mbi: HMultiBoardItem | null): void;
declare function ResetUbersplat(whichSplat: HUberSplat | null): void;
declare function RemoveSavedBoolean(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): void;
declare function EnableMinimapFilterButtons(
  enableAlly: boolean,
  enableCreep: boolean
): void;
declare function GroupEnumUnitsInRangeOfLoc(
  whichGroup: HGroup | null,
  whichLocation: HLocation | null,
  radius: number,
  filter: HBoolExpr | null
): void;
declare function GetTrainedUnitType(): number;
declare function SetCampaignAvailable(
  campaignNumber: number,
  available: boolean
): void;
declare function ConvertUnitEvent(i: number): HUnitEvent;
declare function SetSoundPitch(soundHandle: HSound | null, pitch: number): void;
declare function SetSoundDistanceCutoff(
  soundHandle: HSound | null,
  cutoff: number
): void;
declare function StoreString(
  cache: HGameCache | null,
  missionKey: string,
  key: string,
  value: string
): boolean;
declare function UnitCanSleepPerm(whichUnit: HUnit | null): boolean;
declare function AddItemToStock(
  whichUnit: HUnit | null,
  itemId: number,
  currentStock: number,
  stockMax: number
): void;
declare function IsHeroUnitId(unitId: number): boolean;
declare function EnableSelect(state: boolean, ui: boolean): void;
declare function DestroyDefeatCondition(
  whichCondition: HDefeatCondition | null
): void;
declare function ConvertStartLocPrio(i: number): HStartLocPrio;
declare function ConvertPlayerUnitEvent(i: number): HPlayerunitEvent;
declare function GetCreatureDensity(): HMapDensity;
declare function GetUnitDefaultMoveSpeed(whichUnit: HUnit | null): number;
declare function SetMusicPlayPosition(millisecs: number): void;
declare function OrderId2String(orderId: number): string;
declare function Sin(radians: number): number;
declare function IsLocationFoggedToPlayer(
  whichLocation: HLocation | null,
  whichPlayer: HPlayer | null
): boolean;
declare function GetPlayerSlotState(
  whichPlayer: HPlayer | null
): HPlayerSlotState;
declare function SaveDestructableHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichDestructable: HDestructable | null
): boolean;
declare function GetCameraMargin(whichMargin: number): number;
declare function SetUbersplatRender(
  whichSplat: HUberSplat | null,
  flag: boolean
): void;
declare function SetUnitBlendTime(
  whichUnit: HUnit | null,
  blendTime: number
): void;
declare function IsUnitMasked(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null
): boolean;
declare function LeaderboardAddItem(
  lb: HLeaderBoard | null,
  label: string,
  value: number,
  p: HPlayer | null
): void;
declare function SetImageRender(whichImage: HImage | null, flag: boolean): void;
declare function PlayerSetLeaderboard(
  toPlayer: HPlayer | null,
  lb: HLeaderBoard | null
): void;
declare function IsUnitRace(
  whichUnit: HUnit | null,
  whichRace: HRace | null
): boolean;
declare function FlushStoredUnit(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): void;
declare function DialogCreate(): HDialog;
declare function GetCustomCampaignButtonVisible(whichButton: number): boolean;
declare function GetUnitRallyPoint(whichUnit: HUnit | null): HLocation;
declare function GetHeroSkillPoints(whichHero: HUnit | null): number;
declare function MultiboardGetItem(
  lb: HMultiBoard | null,
  row: number,
  column: number
): HMultiBoardItem;
declare function PlayThematicMusic(musicFileName: string): void;
declare function LoadImageHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HImage;
declare function SetTextTagLifespan(t: HTextTag | null, lifespan: number): void;
declare function CreateItem(itemid: number, x: number, y: number): HItem;
declare function KillDestructable(d: HDestructable | null): void;
declare function UnitRemoveAbility(
  whichUnit: HUnit | null,
  abilityId: number
): boolean;
declare function TriggerRegisterTimerExpireEvent(
  whichTrigger: HTrigger | null,
  t: HTimer | null
): HEvent;
declare function SetUnitCreepGuard(
  whichUnit: HUnit | null,
  creepGuard: boolean
): void;
declare function TimerDialogSetRealTimeRemaining(
  whichDialog: HTimerDialog | null,
  timeRemaining: number
): void;
declare function CopySaveGame(
  sourceSaveName: string,
  destSaveName: string
): boolean;
declare function ConvertGameType(i: number): HGameType;
declare function SetMissionAvailable(
  campaignNumber: number,
  missionNumber: number,
  available: boolean
): void;
declare function FlushStoredBoolean(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): void;
declare function SetSoundDuration(
  soundHandle: HSound | null,
  duration: number
): void;
declare function Acos(x: number): number;
declare function HaveSavedBoolean(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): boolean;
declare function IsUnitAlly(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null
): boolean;
declare function LoadUbersplatHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HUberSplat;
declare function Deg2Rad(degrees: number): number;
declare function LeaderboardHasPlayerItem(
  lb: HLeaderBoard | null,
  p: HPlayer | null
): boolean;
declare function QuestSetRequired(
  whichQuest: HQuest | null,
  required: boolean
): void;
declare function SetPlayerName(whichPlayer: HPlayer | null, name: string): void;
declare function CreateCorpse(
  whichPlayer: HPlayer | null,
  unitid: number,
  x: number,
  y: number,
  face: number
): HUnit;
declare function ItemPoolAddItemType(
  whichItemPool: HItemPool | null,
  itemId: number,
  weight: number
): void;
declare function ConvertFogState(i: number): HFogState;
declare function GetTriggerExecCount(whichTrigger: HTrigger | null): number;
declare function LoadReal(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): number;
declare function SetCameraPosition(x: number, y: number): void;
declare function UnitWakeUp(whichUnit: HUnit | null): void;
declare function TriggerAddAction(
  whichTrigger: HTrigger | null,
  actionFunc: TCode
): HTriggerAction;
declare function GetRectCenterY(whichRect: HRect | null): number;
declare function StopMusic(fadeOut: boolean): void;
declare function ForceRemovePlayer(
  whichForce: HForce | null,
  whichPlayer: HPlayer | null
): void;
declare function IsPlayerEnemy(
  whichPlayer: HPlayer | null,
  otherPlayer: HPlayer | null
): boolean;
declare function StoreUnit(
  cache: HGameCache | null,
  missionKey: string,
  key: string,
  whichUnit: HUnit | null
): boolean;
declare function IsUnitInGroup(
  whichUnit: HUnit | null,
  whichGroup: HGroup | null
): boolean;
declare function PingMinimap(x: number, y: number, duration: number): void;
declare function ForceCinematicSubtitles(flag: boolean): void;
declare function UnitAddItem(
  whichUnit: HUnit | null,
  whichItem: HItem | null
): boolean;
declare function PreloadGenClear(): void;
declare function CreateFogModifierRadius(
  forWhichPlayer: HPlayer | null,
  whichState: HFogState | null,
  centerx: number,
  centerY: number,
  radius: number,
  useSharedVision: boolean,
  afterUnits: boolean
): HFogModifier;
declare function GetItemName(whichItem: HItem | null): string;
declare function SetFogStateRadiusLoc(
  forWhichPlayer: HPlayer | null,
  whichState: HFogState | null,
  center: HLocation | null,
  radius: number,
  useSharedVision: boolean
): void;
declare function IsUnitHidden(whichUnit: HUnit | null): boolean;
declare function GetSummoningUnit(): HUnit;
declare function MultiboardSetItemsIcon(
  lb: HMultiBoard | null,
  iconPath: string
): void;
declare function MultiboardSetTitleTextColor(
  lb: HMultiBoard | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function PauseCompAI(p: HPlayer | null, pause: boolean): void;
declare function SaveMultiboardItemHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichMultiboarditem: HMultiBoardItem | null
): boolean;
declare function CreateUnitAtLoc(
  id: HPlayer | null,
  unitid: number,
  whichLocation: HLocation | null,
  face: number
): HUnit;
declare function SetPlayerUnitsOwner(
  whichPlayer: HPlayer | null,
  newOwner: number
): void;
declare function GetCameraEyePositionY(): number;
declare function MultiboardSetTitleText(
  lb: HMultiBoard | null,
  label: string
): void;
declare function RegionAddCellAtLoc(
  whichRegion: HRegion | null,
  whichLocation: HLocation | null
): void;
declare function ConvertBlendMode(i: number): HBlendMode;
declare function TerrainDeformRandom(
  x: number,
  y: number,
  radius: number,
  minDelta: number,
  maxDelta: number,
  duration: number,
  updateInterval: number
): HTerrainDeformation;
declare function GetWorldBounds(): HRect;
declare function UnitDamagePoint(
  whichUnit: HUnit | null,
  delay: number,
  radius: number,
  x: number,
  y: number,
  amount: number,
  attack: boolean,
  ranged: boolean,
  attackType: HAttackType | null,
  damageType: HDamageType | null,
  weaponType: HWeaponType | null
): boolean;
declare function SetUnitRescuable(
  whichUnit: HUnit | null,
  byWhichPlayer: HPlayer | null,
  flag: boolean
): void;
declare function LoadAbilityHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HAbility;
declare function DisplayTimedTextToPlayer(
  toPlayer: HPlayer | null,
  x: number,
  y: number,
  duration: number,
  message: string
): void;
declare function CameraSetupSetField(
  whichSetup: HCameraSetup | null,
  whichField: HCameraField | null,
  value: number,
  duration: number
): void;
declare function SetTutorialCleared(cleared: boolean): void;
declare function DestroyUbersplat(whichSplat: HUberSplat | null): void;
declare function TriggerExecute(whichTrigger: HTrigger | null): void;
declare function ConvertGameEvent(i: number): HGameEvent;
declare function CreateGroup(): HGroup;
declare function LoadLocationHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HLocation;
declare function CreateItemPool(): HItemPool;
declare function LoadDialogHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HDialog;
declare function HaveSavedHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): boolean;
declare function GetRescuer(): HUnit;
declare function RemoveSavedReal(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): void;
declare function GetHandleId(h: HHandle | null): number;
declare function GetPlayerController(whichPlayer: HPlayer | null): HMapControl;
declare function SetCineFilterStartUV(
  minu: number,
  minv: number,
  maxu: number,
  maxv: number
): void;
declare function GetEventDamageSource(): HUnit;
declare function SaveGroupHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichGroup: HGroup | null
): boolean;
declare function IsMaskedToPlayer(
  x: number,
  y: number,
  whichPlayer: HPlayer | null
): boolean;
declare function GetLocationZ(whichLocation: HLocation | null): number;
declare function UnitAddIndicator(
  whichUnit: HUnit | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function CameraSetupApplyForceDuration(
  whichSetup: HCameraSetup | null,
  doPan: boolean,
  forceDuration: number
): void;
declare function GetRevivableUnit(): HUnit;
declare function UnitIsSleeping(whichUnit: HUnit | null): boolean;
declare function LeaderboardSetItemLabelColor(
  lb: HLeaderBoard | null,
  whichItem: number,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function SetUnitVertexColor(
  whichUnit: HUnit | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function AddSpecialEffect(
  modelName: string,
  x: number,
  y: number
): HEffect;
declare function IsItemIdPawnable(itemId: number): boolean;
declare function SetCampaignMenuRaceEx(campaignIndex: number): void;
declare function UnitUseItemPoint(
  whichUnit: HUnit | null,
  whichItem: HItem | null,
  x: number,
  y: number
): boolean;
declare function SetItemPlayer(
  whichItem: HItem | null,
  whichPlayer: HPlayer | null,
  changeColor: boolean
): void;
declare function TimerDialogSetTimeColor(
  whichDialog: HTimerDialog | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
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
declare function ConvertEffectType(i: number): HEffectType;
declare function PreloadEnd(timeout: number): void;
declare function DestroyLeaderboard(lb: HLeaderBoard | null): void;
declare function HaveStoredReal(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): boolean;
declare function ForceQuestDialogUpdate(): void;
declare function Tan(radians: number): number;
declare function SetPlayerRacePreference(
  whichPlayer: HPlayer | null,
  whichRacePreference: HRacePreference | null
): void;
declare function PanCameraToTimed(x: number, y: number, duration: number): void;
declare function WaygateActivate(
  waygate: HUnit | null,
  activate: boolean
): void;
declare function DestroyBoolExpr(e: HBoolExpr | null): void;
declare function StartSound(soundHandle: HSound | null): void;
declare function ConvertMapFlag(i: number): HMapFlag;
declare function GroupPointOrder(
  whichGroup: HGroup | null,
  order: string,
  x: number,
  y: number
): boolean;
declare function ForceCampaignSelectScreen(): void;
declare function GetIntegerGameState(
  whichIntegerGameState: HIGameState | null
): number;
declare function RegionAddRect(
  whichRegion: HRegion | null,
  r: HRect | null
): void;
declare function Filter(func: TCode): HFilterFunc;
declare function GroupImmediateOrderById(
  whichGroup: HGroup | null,
  order: number
): boolean;
declare function IssueNeutralImmediateOrder(
  forWhichPlayer: HPlayer | null,
  neutralStructure: HUnit | null,
  unitToBuild: string
): boolean;
declare function GetLocationX(whichLocation: HLocation | null): number;
declare function SetMapFlag(
  whichMapFlag: HMapFlag | null,
  value: boolean
): void;
declare function GetUnitLevel(whichUnit: HUnit | null): number;
declare function IssuePointOrderLoc(
  whichUnit: HUnit | null,
  order: string,
  whichLocation: HLocation | null
): boolean;
declare function SetUnitUserData(whichUnit: HUnit | null, data: number): void;
declare function GetAbilityEffect(
  abilityString: string,
  t: HEffectType | null,
  index: number
): string;
declare function CreateDestructable(
  objectid: number,
  x: number,
  y: number,
  face: number,
  scale: number,
  variation: number
): HDestructable;
declare function ConvertVolumeGroup(i: number): HVolumeGroup;
declare function SetSoundConeAngles(
  soundHandle: HSound | null,
  inside: number,
  outside: number,
  outsideVolume: number
): void;
declare function SetUnitExploded(
  whichUnit: HUnit | null,
  exploded: boolean
): void;
declare function SetAllyColorFilterState(state: number): void;
declare function SetCineFilterTexMapFlags(
  whichFlags: HTexMapFlags | null
): void;
declare function SuspendTimeOfDay(b: boolean): void;
declare function Preloader(filename: string): void;
declare function UnitPauseTimedLife(
  whichUnit: HUnit | null,
  flag: boolean
): void;
declare function GetCreepCampFilterState(): boolean;
declare function AddWeatherEffect(
  where: HRect | null,
  effectID: number
): HWeatherEffect;
declare function GetKillingUnit(): HUnit;
declare function GetUnitRallyDestructable(
  whichUnit: HUnit | null
): HDestructable;
declare function ForceAddPlayer(
  whichForce: HForce | null,
  whichPlayer: HPlayer | null
): void;
declare function GetCameraField(whichField: HCameraField | null): number;
declare function GetHeroProperName(whichHero: HUnit | null): string;
declare function VolumeGroupSetVolume(
  vgroup: HVolumeGroup | null,
  scale: number
): void;
declare function GetLocalizedString(source: string): string;
declare function AddHeroXP(
  whichHero: HUnit | null,
  xpToAdd: number,
  showEyeCandy: boolean
): void;
declare function MultiboardMinimize(
  lb: HMultiBoard | null,
  minimize: boolean
): void;
declare function GetEventPlayerChatStringMatched(): string;
declare function TriggerEvaluate(whichTrigger: HTrigger | null): boolean;
declare function GetCameraBoundMinX(): number;
declare function IssuePointOrder(
  whichUnit: HUnit | null,
  order: string,
  x: number,
  y: number
): boolean;
declare function GetDestructableName(d: HDestructable | null): string;
declare function GetUnitPointValue(whichUnit: HUnit | null): number;
declare function SetUnitFlyHeight(
  whichUnit: HUnit | null,
  newHeight: number,
  rate: number
): void;
declare function GetCameraEyePositionLoc(): HLocation;
declare function UnitRemoveItemFromSlot(
  whichUnit: HUnit | null,
  itemSlot: number
): HItem;
declare function AbilityId(abilityIdString: string): number;
declare function GetPlayerHandicap(whichPlayer: HPlayer | null): number;
declare function SetPlayerRaceSelectable(
  whichPlayer: HPlayer | null,
  value: boolean
): void;
declare function EnablePreSelect(state: boolean, ui: boolean): void;
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
declare function SyncStoredBoolean(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): void;
declare function SetItemCharges(whichItem: HItem | null, charges: number): void;
declare function SetUnitMoveSpeed(
  whichUnit: HUnit | null,
  newSpeed: number
): void;
declare function LeaderboardSetSizeByItemCount(
  lb: HLeaderBoard | null,
  count: number
): void;
declare function IsTimerDialogDisplayed(
  whichDialog: HTimerDialog | null
): boolean;
declare function DestroyFilter(f: HFilterFunc | null): void;
declare function SetUnitState(
  whichUnit: HUnit | null,
  whichUnitState: HUnitState | null,
  newVal: number
): void;
declare function RemoveSavedInteger(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): void;
declare function QuestItemSetCompleted(
  whichQuestItem: HQuestItem | null,
  completed: boolean
): void;
declare function IsUnitInvisible(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null
): boolean;
declare function DestroyForce(whichForce: HForce | null): void;
declare function GetEventDetectingPlayer(): HPlayer;
declare function IsLeaderboardDisplayed(lb: HLeaderBoard | null): boolean;
declare function GetEventGameState(): HGameState;
declare function FirstOfGroup(whichGroup: HGroup | null): HUnit;
declare function GetTournamentScore(whichPlayer: HPlayer | null): number;
declare function DestructableRestoreLife(
  d: HDestructable | null,
  life: number,
  birth: boolean
): void;
declare function SetStartLocPrio(
  whichStartLoc: number,
  prioSlotIndex: number,
  otherStartLocIndex: number,
  priority: HStartLocPrio | null
): void;
declare function SaveDialogHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichDialog: HDialog | null
): boolean;
declare function GetResourceAmount(whichUnit: HUnit | null): number;
declare function UnregisterStackedSound(
  soundHandle: HSound | null,
  byPosition: boolean,
  rectwidth: number,
  rectheight: number
): void;
declare function LeaderboardSetLabel(
  lb: HLeaderBoard | null,
  label: string
): void;
declare function Cheat(cheatStr: string): void;
declare function EndThematicMusic(): void;
declare function GetTimeOfDayScale(): number;
declare function SetImageConstantHeight(
  whichImage: HImage | null,
  flag: boolean,
  height: number
): void;
declare function AddSpecialEffectTarget(
  modelName: string,
  targetWidget: HWidget | null,
  attachPointName: string
): HEffect;
declare function IssueNeutralImmediateOrderById(
  forWhichPlayer: HPlayer | null,
  neutralStructure: HUnit | null,
  unitId: number
): boolean;
declare function StringHash(s: string): number;
declare function GetUnitRace(whichUnit: HUnit | null): HRace;
declare function GetPlayerRace(whichPlayer: HPlayer | null): HRace;
declare function RemoveGuardPosition(hUnit: HUnit | null): void;
declare function GetItemY(i: HItem | null): number;
declare function CreateRegion(): HRegion;
declare function SetSoundVelocity(
  soundHandle: HSound | null,
  x: number,
  y: number,
  z: number
): void;
declare function GetLeavingUnit(): HUnit;
declare function CreateUnitAtLocByName(
  id: HPlayer | null,
  unitname: string,
  whichLocation: HLocation | null,
  face: number
): HUnit;
declare function FogModifierStop(whichFogModifier: HFogModifier | null): void;
declare function ForceEnumPlayersCounted(
  whichForce: HForce | null,
  filter: HBoolExpr | null,
  countLimit: number
): void;
declare function UnitAddSleep(whichUnit: HUnit | null, add: boolean): void;
declare function GroupEnumUnitsInRectCounted(
  whichGroup: HGroup | null,
  r: HRect | null,
  filter: HBoolExpr | null,
  countLimit: number
): void;
declare function SetDestructableInvulnerable(
  d: HDestructable | null,
  flag: boolean
): void;
declare function MultiboardSetItemValueColor(
  mbi: HMultiBoardItem | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function IsFogEnabled(): boolean;
declare function HaveStoredString(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): boolean;
declare function GetConstructingStructure(): HUnit;
declare function MultiboardSetRowCount(
  lb: HMultiBoard | null,
  count: number
): void;
declare function CreateCameraSetup(): HCameraSetup;
declare function TriggerRemoveAction(
  whichTrigger: HTrigger | null,
  whichAction: HTriggerAction | null
): void;
declare function AddResourceAmount(
  whichUnit: HUnit | null,
  amount: number
): void;
declare function PreloadGenStart(): void;
declare function GetEnteringUnit(): HUnit;
declare function PlaceRandomUnit(
  whichPool: HUnitPool | null,
  forWhichPlayer: HPlayer | null,
  x: number,
  y: number,
  facing: number
): HUnit;
declare function PanCameraToWithZ(
  x: number,
  y: number,
  zOffsetDest: number
): void;
declare function IncUnitAbilityLevel(
  whichUnit: HUnit | null,
  abilcode: number
): number;
declare function DestroyTimer(whichTimer: HTimer | null): void;
declare function Condition(func: TCode): HConditionFunc;
declare function SetPlayerAbilityAvailable(
  whichPlayer: HPlayer | null,
  abilid: number,
  avail: boolean
): void;
declare function DestroyTextTag(t: HTextTag | null): void;
declare function SyncStoredString(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): void;
declare function SetLightningColor(
  whichBolt: HLightning | null,
  r: number,
  g: number,
  b: number,
  a: number
): boolean;
declare function ConvertTexMapFlags(i: number): HTexMapFlags;
declare function Pow(x: number, power: number): number;
declare function IsUnitEnemy(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null
): boolean;
declare function DefineStartLocation(
  whichStartLoc: number,
  x: number,
  y: number
): void;
declare function ChooseRandomItemEx(
  whichType: HItemType | null,
  level: number
): number;
declare function Not(operand: HBoolExpr | null): HBoolExpr;
declare function DecUnitAbilityLevel(
  whichUnit: HUnit | null,
  abilcode: number
): number;
declare function SyncStoredInteger(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): void;
declare function UnitCountBuffsEx(
  whichUnit: HUnit | null,
  removePositive: boolean,
  removeNegative: boolean,
  magic: boolean,
  physical: boolean,
  timedLife: boolean,
  aura: boolean,
  autoDispel: boolean
): number;
declare function GetOrderTargetItem(): HItem;
declare function MultiboardSetItemsStyle(
  lb: HMultiBoard | null,
  showValues: boolean,
  showIcons: boolean
): void;
declare function ConvertPlayerGameResult(i: number): HPlayerGameResult;
declare function SetCampaignMenuRace(r: HRace | null): void;
declare function TimerDialogDisplay(
  whichDialog: HTimerDialog | null,
  display: boolean
): void;
declare function SetUnitY(whichUnit: HUnit | null, newY: number): void;
declare function GetRectMinY(whichRect: HRect | null): number;
declare function GetPlayerTechMaxAllowed(
  whichPlayer: HPlayer | null,
  techid: number
): number;
declare function GetDestructableX(d: HDestructable | null): number;
declare function DisplayTimedTextFromPlayer(
  toPlayer: HPlayer | null,
  x: number,
  y: number,
  duration: number,
  message: string
): void;
declare function SetBlightPoint(
  whichPlayer: HPlayer | null,
  x: number,
  y: number,
  addBlight: boolean
): void;
declare function GetOrderPointY(): number;
declare function SetUnitLookAt(
  whichUnit: HUnit | null,
  whichBone: string,
  lookAtTarget: HUnit | null,
  offsetX: number,
  offsetY: number,
  offsetZ: number
): void;
declare function SetDoodadAnimation(
  x: number,
  y: number,
  radius: number,
  doodadID: number,
  nearestOnly: boolean,
  animName: string,
  animRandom: boolean
): void;
declare function GetDetectedUnit(): HUnit;
declare function IsNoVictoryCheat(): boolean;
declare function GetSoldUnit(): HUnit;
declare function TriggerSyncStart(): void;
declare function RemoveSaveDirectory(sourceDirName: string): boolean;
declare function QuestSetDiscovered(
  whichQuest: HQuest | null,
  discovered: boolean
): void;
declare function SetItemPosition(i: HItem | null, x: number, y: number): void;
declare function OrderId(orderIdString: string): number;
declare function GroupTargetOrderById(
  whichGroup: HGroup | null,
  order: number,
  targetWidget: HWidget | null
): boolean;
declare function LoadPlayerHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HPlayer;
declare function TriggerSleepAction(timeout: number): void;
declare function LoadItemPoolHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HItemPool;
declare function SetImageColor(
  whichImage: HImage | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function GetItemType(whichItem: HItem | null): HItemType;
declare function SaveFogModifierHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichFogModifier: HFogModifier | null
): boolean;
declare function SaveFogStateHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichFogState: HFogState | null
): boolean;
declare function ClearMapMusic(): void;
declare function SetItemUserData(whichItem: HItem | null, data: number): void;
declare function SaveUnitHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichUnit: HUnit | null
): boolean;
declare function PreloadRefresh(): void;
declare function GetSpellTargetDestructable(): HDestructable;
declare function IsVisibleToPlayer(
  x: number,
  y: number,
  whichPlayer: HPlayer | null
): boolean;
declare function MultiboardSetColumnCount(
  lb: HMultiBoard | null,
  count: number
): void;
declare function FogMaskEnable(enable: boolean): void;
declare function GetDestructableY(d: HDestructable | null): number;
declare function SetCineFilterBlendMode(whichMode: HBlendMode | null): void;
declare function GetEventTargetUnit(): HUnit;
declare function PauseUnit(whichUnit: HUnit | null, flag: boolean): void;
declare function TriggerRegisterPlayerEvent(
  whichTrigger: HTrigger | null,
  whichPlayer: HPlayer | null,
  whichPlayerEvent: HPlayerEvent | null
): HEvent;
declare function GetSpellTargetItem(): HItem;
declare function SetItemDropOnDeath(
  whichItem: HItem | null,
  flag: boolean
): void;
declare function ForceEnumEnemies(
  whichForce: HForce | null,
  whichPlayer: HPlayer | null,
  filter: HBoolExpr | null
): void;
declare function GetResourceDensity(): HMapDensity;
declare function LoadStr(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): string;
declare function UnitRemoveType(
  whichUnit: HUnit | null,
  whichUnitType: HUnitType | null
): boolean;
declare function SetCineFilterTexture(filename: string): void;
declare function SetTerrainFog(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): void;
declare function AbilityId2String(abilityId: number): string;
declare function SetPlayerTechResearched(
  whichPlayer: HPlayer | null,
  techid: number,
  setToLevel: number
): void;
declare function IsUnitDetected(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null
): boolean;
declare function AddItemToAllStock(
  itemId: number,
  currentStock: number,
  stockMax: number
): void;
declare function LeaderboardSetLabelColor(
  lb: HLeaderBoard | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function GetUnitDefaultTurnSpeed(whichUnit: HUnit | null): number;
declare function TimerDialogSetTitle(
  whichDialog: HTimerDialog | null,
  title: string
): void;
declare function SetUnitScale(
  whichUnit: HUnit | null,
  scaleX: number,
  scaleY: number,
  scaleZ: number
): void;
declare function RemoveItemFromAllStock(itemId: number): void;
declare function ReloadGame(): void;
declare function GetOrderPointX(): number;
declare function SetSoundConeOrientation(
  soundHandle: HSound | null,
  x: number,
  y: number,
  z: number
): void;
declare function SaveBooleanExprHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichBoolexpr: HBoolExpr | null
): boolean;
declare function GetSaveBasicFilename(): string;
declare function GetItemX(i: HItem | null): number;
declare function IsItemSellable(whichItem: HItem | null): boolean;
declare function UnitMakeAbilityPermanent(
  whichUnit: HUnit | null,
  permanent: boolean,
  abilityId: number
): boolean;
declare function GetRevivingUnit(): HUnit;
declare function CameraSetTargetNoiseEx(
  mag: number,
  velocity: number,
  vertOnly: boolean
): void;
declare function GetTerrainCliffLevel(x: number, y: number): number;
declare function DisplayLoadDialog(): void;
declare function GetEventPlayerState(): HPlayerState;
declare function SetRect(
  whichRect: HRect | null,
  minx: number,
  miny: number,
  maxx: number,
  maxy: number
): void;
declare function LoadDestructableHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HDestructable;
declare function SaveTextTagHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichTexttag: HTextTag | null
): boolean;
declare function IsPointInRegion(
  whichRegion: HRegion | null,
  x: number,
  y: number
): boolean;
declare function GetPlayerTeam(whichPlayer: HPlayer | null): number;
declare function DisplayTextToPlayer(
  toPlayer: HPlayer | null,
  x: number,
  y: number,
  message: string
): void;
declare function EndGame(doScoreScreen: boolean): void;
declare function UnitId(unitIdString: string): number;
declare function RemoveItemFromStock(
  whichUnit: HUnit | null,
  itemId: number
): void;
declare function CreateTimer(): HTimer;
declare function IsMultiboardDisplayed(lb: HMultiBoard | null): boolean;
declare function GetExpiredTimer(): HTimer;
declare function GetUnitDefaultFlyHeight(whichUnit: HUnit | null): number;
declare function LeaderboardGetLabelText(lb: HLeaderBoard | null): string;
declare function GetCameraBoundMaxY(): number;
declare function GetAbilityEffectById(
  abilityId: number,
  t: HEffectType | null,
  index: number
): string;
declare function FlushStoredReal(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): void;
declare function SetUnitRescueRange(
  whichUnit: HUnit | null,
  range: number
): void;
declare function FogEnable(enable: boolean): void;
declare function QuestSetCompleted(
  whichQuest: HQuest | null,
  completed: boolean
): void;
declare function GetHeroXP(whichHero: HUnit | null): number;
declare function GetCameraEyePositionZ(): number;
declare function ConvertRarityControl(i: number): HRarityControl;
declare function GetEventDamage(): number;
declare function SetCineFilterEndUV(
  minu: number,
  minv: number,
  maxu: number,
  maxv: number
): void;
declare function VersionGet(): HVersion;
declare function SetRectFromLoc(
  whichRect: HRect | null,
  min: HLocation | null,
  max: HLocation | null
): void;
declare function GetConstructedStructure(): HUnit;
declare function StartCampaignAI(num: HPlayer | null, script: string): void;
declare function SaveReal(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  value: number
): void;
declare function LoadEffectHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HEffect;
declare function IssueNeutralPointOrder(
  forWhichPlayer: HPlayer | null,
  neutralStructure: HUnit | null,
  unitToBuild: string,
  x: number,
  y: number
): boolean;
declare function GetTerrainVariance(x: number, y: number): number;
declare function SaveWidgetHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichWidget: HWidget | null
): boolean;
declare function GetTransportUnit(): HUnit;
declare function SuspendHeroXP(whichHero: HUnit | null, flag: boolean): void;
declare function IsQuestCompleted(whichQuest: HQuest | null): boolean;
declare function IsUnitFogged(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null
): boolean;
declare function UnitSetUpgradeProgress(
  whichUnit: HUnit | null,
  upgradePercentage: number
): void;
declare function IsGameTypeSupported(whichGameType: HGameType | null): boolean;
declare function UnitApplyTimedLife(
  whichUnit: HUnit | null,
  buffId: number,
  duration: number
): void;
declare function SetGameTypeSupported(
  whichGameType: HGameType | null,
  value: boolean
): void;
declare function DialogAddQuitButton(
  whichDialog: HDialog | null,
  doScoreScreen: boolean,
  buttonText: string,
  hotkey: number
): HButton;
declare function GetSellingUnit(): HUnit;
declare function ConvertUnitState(i: number): HUnitState;
declare function ResetUnitLookAt(whichUnit: HUnit | null): void;
declare function SetStartLocPrioCount(
  whichStartLoc: number,
  prioSlotCount: number
): void;
declare function GetRectMaxX(whichRect: HRect | null): number;
declare function ForceEnumPlayers(
  whichForce: HForce | null,
  filter: HBoolExpr | null
): void;
declare function LoadBoolean(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): boolean;
declare function TriggerRegisterFilterUnitEvent(
  whichTrigger: HTrigger | null,
  whichUnit: HUnit | null,
  whichEvent: HUnitEvent | null,
  filter: HBoolExpr | null
): HEvent;
declare function IssueInstantTargetOrder(
  whichUnit: HUnit | null,
  order: string,
  targetWidget: HWidget | null,
  instantTargetWidget: HWidget | null
): boolean;
declare function GroupEnumUnitsInRange(
  whichGroup: HGroup | null,
  x: number,
  y: number,
  radius: number,
  filter: HBoolExpr | null
): void;
declare function GetUnitFacing(whichUnit: HUnit | null): number;
declare function SetWidgetLife(
  whichWidget: HWidget | null,
  newLife: number
): void;
declare function SaveButtonHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichButton: HButton | null
): boolean;
declare function StoreInteger(
  cache: HGameCache | null,
  missionKey: string,
  key: string,
  value: number
): void;
declare function GetPlayerStartLocation(whichPlayer: HPlayer | null): number;
declare function ShowImage(whichImage: HImage | null, flag: boolean): void;
declare function ClearTextMessages(): void;
declare function IsItemIdSellable(itemId: number): boolean;
declare function GetTrainedUnit(): HUnit;
declare function WaygateSetDestination(
  waygate: HUnit | null,
  x: number,
  y: number
): void;
declare function SetTextTagAge(t: HTextTag | null, age: number): void;
declare function SaveEffectHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichEffect: HEffect | null
): boolean;
declare function ResetToGameCamera(duration: number): void;
declare function GetPlayerTaxRate(
  sourcePlayer: HPlayer | null,
  otherPlayer: HPlayer | null,
  whichResource: HPlayerState | null
): number;
declare function SetCinematicScene(
  portraitUnitId: number,
  color: HPlayerColor | null,
  speakerTitle: string,
  text: string,
  sceneDuration: number,
  voiceoverDuration: number
): void;
declare function GetUnitRallyUnit(whichUnit: HUnit | null): HUnit;
declare function PanCameraTo(x: number, y: number): void;
declare function LeaderboardSetItemStyle(
  lb: HLeaderBoard | null,
  whichItem: number,
  showLabel: boolean,
  showValue: boolean,
  showIcon: boolean
): void;
declare function ShowInterface(flag: boolean, fadeDuration: number): void;
declare function GetFilterUnit(): HUnit;
declare function EnumItemsInRect(
  r: HRect | null,
  filter: HBoolExpr | null,
  actionFunc: TCode
): void;
declare function SetUnitTurnSpeed(
  whichUnit: HUnit | null,
  newTurnSpeed: number
): void;
declare function QuestSetDescription(
  whichQuest: HQuest | null,
  description: string
): void;
declare function TriggerClearActions(whichTrigger: HTrigger | null): void;
declare function RestartGame(doScoreScreen: boolean): void;
declare function SaveAbilityHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichAbility: HAbility | null
): boolean;
declare function GetSpellTargetUnit(): HUnit;
declare function RemoveUnitFromAllStock(unitId: number): void;
declare function RemoveAllGuardPositions(num: HPlayer | null): void;
declare function GetIssuedOrderId(): number;
declare function GetRandomReal(lowBound: number, highBound: number): number;
declare function MultiboardSetItemIcon(
  mbi: HMultiBoardItem | null,
  iconFileName: string
): void;
declare function InitGameCache(campaignFile: string): HGameCache;
declare function GetStartLocPrioSlot(
  whichStartLoc: number,
  prioSlotIndex: number
): number;
declare function IssueImmediateOrderById(
  whichUnit: HUnit | null,
  order: number
): boolean;
declare function NewSoundEnvironment(environmentName: string): void;
declare function AddSpellEffectById(
  abilityId: number,
  t: HEffectType | null,
  x: number,
  y: number
): HEffect;
declare function S2R(s: string): number;
declare function UnitDropItemSlot(
  whichUnit: HUnit | null,
  whichItem: HItem | null,
  slot: number
): boolean;
declare function RemoveRect(whichRect: HRect | null): void;
declare function LoadTriggerEventHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HEvent;
declare function SetTextTagColor(
  t: HTextTag | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function ConvertMapControl(i: number): HMapControl;
declare function SaveForceHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichForce: HForce | null
): boolean;
declare function SetTextTagVisibility(t: HTextTag | null, flag: boolean): void;
declare function ChooseRandomNPBuilding(): number;
declare function TimerDialogSetTitleColor(
  whichDialog: HTimerDialog | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function CommandAI(
  num: HPlayer | null,
  command: number,
  data: number
): void;
declare function IssueInstantPointOrder(
  whichUnit: HUnit | null,
  order: string,
  x: number,
  y: number,
  instantTargetWidget: HWidget | null
): boolean;
declare function GetUnitTypeId(whichUnit: HUnit | null): number;
declare function GroupEnumUnitsInRangeOfLocCounted(
  whichGroup: HGroup | null,
  whichLocation: HLocation | null,
  radius: number,
  filter: HBoolExpr | null,
  countLimit: number
): void;
declare function GetUnitTurnSpeed(whichUnit: HUnit | null): number;
declare function SaveTriggerHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichTrigger: HTrigger | null
): boolean;
declare function GetStoredInteger(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): number;
declare function IsSuspendedXP(whichHero: HUnit | null): boolean;
declare function TriggerRegisterTrackableHitEvent(
  whichTrigger: HTrigger | null,
  t: HTrackable | null
): HEvent;
declare function ShowUnit(whichUnit: HUnit | null, show: boolean): void;
declare function GetTournamentFinishSoonTimeRemaining(): number;
declare function LoadFogStateHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HFogState;
declare function IsMultiboardMinimized(lb: HMultiBoard | null): boolean;
declare function DestroyGroup(whichGroup: HGroup | null): void;
declare function ForGroup(whichGroup: HGroup | null, callback: TCode): void;
declare function GetHeroLevel(whichHero: HUnit | null): number;
declare function KillSoundWhenDone(soundHandle: HSound | null): void;
declare function UnitShareVision(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null,
  share: boolean
): void;
declare function FlushGameCache(cache: HGameCache | null): void;
declare function StopCamera(): void;
declare function GetPlayerState(
  whichPlayer: HPlayer | null,
  whichPlayerState: HPlayerState | null
): number;
declare function ConvertItemType(i: number): HItemType;
declare function IsUnitPaused(whichHero: HUnit | null): boolean;
declare function RemoveItem(whichItem: HItem | null): void;
declare function RemoveSavedHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): void;
declare function GetChangingUnit(): HUnit;
declare function IsUnitIdType(
  unitId: number,
  whichUnitType: HUnitType | null
): boolean;
declare function SetMusicVolume(volume: number): void;
declare function IsQuestEnabled(whichQuest: HQuest | null): boolean;
declare function IsFogMaskEnabled(): boolean;
declare function DestroyTrigger(whichTrigger: HTrigger | null): void;
declare function DestroyImage(whichImage: HImage | null): void;
declare function GetTriggeringTrigger(): HTrigger;
declare function Asin(y: number): number;
declare function DialogSetMessage(
  whichDialog: HDialog | null,
  messageText: string
): void;
declare function PreloadStart(): void;
declare function GetStartLocationX(whichStartLocation: number): number;
declare function GetLightningColorB(whichBolt: HLightning | null): number;
declare function GetBuyingUnit(): HUnit;
declare function GetOrderTarget(): HWidget;
declare function SetMapName(name: string): void;
declare function GetChangingUnitPrevOwner(): HPlayer;
declare function EnableDragSelect(state: boolean, ui: boolean): void;
declare function SaveLocationHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichLocation: HLocation | null
): boolean;
declare function GetOrderTargetUnit(): HUnit;
declare function LoadHashtableHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HHashTable;
declare function FlashQuestDialogButton(): void;
declare function UnitPoolRemoveUnitType(
  whichPool: HUnitPool | null,
  unitId: number
): void;
declare function GetWidgetY(whichWidget: HWidget | null): number;
declare function IsQuestItemCompleted(
  whichQuestItem: HQuestItem | null
): boolean;
declare function GetTriggerWidget(): HWidget;
declare function SetTerrainFogEx(
  style: number,
  zstart: number,
  zend: number,
  density: number,
  red: number,
  green: number,
  blue: number
): void;
declare function GetEnumDestructable(): HDestructable;
declare function SaveItemHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichItem: HItem | null
): boolean;
declare function SetUnitAcquireRange(
  whichUnit: HUnit | null,
  newAcquireRange: number
): void;
declare function IsPlayerInForce(
  whichPlayer: HPlayer | null,
  whichForce: HForce | null
): boolean;
declare function ConvertMapVisibility(i: number): HMapVisibility;
declare function GetLocalPlayer(): HPlayer;
declare function GetDecayingUnit(): HUnit;
declare function Rect(
  minx: number,
  miny: number,
  maxx: number,
  maxy: number
): HRect;
declare function GetUnitFoodUsed(whichUnit: HUnit | null): number;
declare function ConvertAIDifficulty(i: number): HAIDifficulty;
declare function MultiboardGetRowCount(lb: HMultiBoard | null): number;
declare function GetWidgetLife(whichWidget: HWidget | null): number;
declare function FlushStoredMission(
  cache: HGameCache | null,
  missionKey: string
): void;
declare function RemoveUnit(whichUnit: HUnit | null): void;
declare function RestoreUnit(
  cache: HGameCache | null,
  missionKey: string,
  key: string,
  forWhichPlayer: HPlayer | null,
  x: number,
  y: number,
  facing: number
): HUnit;
declare function RegionClearCellAtLoc(
  whichRegion: HRegion | null,
  whichLocation: HLocation | null
): void;
declare function CreateMIDISound(
  soundLabel: string,
  fadeInRate: number,
  fadeOutRate: number
): HSound;
declare function GroupEnumUnitsInRect(
  whichGroup: HGroup | null,
  r: HRect | null,
  filter: HBoolExpr | null
): void;
declare function LoadRegionHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HRegion;
declare function GetGameSpeed(): HGameSpeed;
declare function GetTournamentFinishNowPlayer(): HPlayer;
declare function SetUnitInvulnerable(
  whichUnit: HUnit | null,
  flag: boolean
): void;
declare function SetCinematicCamera(cameraModelFile: string): void;
declare function SetTerrainPathable(
  x: number,
  y: number,
  t: HPathingType | null,
  flag: boolean
): void;
declare function TriggerWaitForSound(s: HSound | null, offset: number): void;
declare function AddUnitToAllStock(
  unitId: number,
  currentStock: number,
  stockMax: number
): void;
declare function LeaderboardGetPlayerIndex(
  lb: HLeaderBoard | null,
  p: HPlayer | null
): number;
declare function CameraSetSourceNoise(mag: number, velocity: number): void;
declare function GetUnitAcquireRange(whichUnit: HUnit | null): number;
declare function QuestSetFailed(
  whichQuest: HQuest | null,
  failed: boolean
): void;
declare function GetUnitUserData(whichUnit: HUnit | null): number;
declare function CreateFogModifierRect(
  forWhichPlayer: HPlayer | null,
  whichState: HFogState | null,
  where: HRect | null,
  useSharedVision: boolean,
  afterUnits: boolean
): HFogModifier;
declare function DestroyEffect(whichEffect: HEffect | null): void;
declare function GroupImmediateOrder(
  whichGroup: HGroup | null,
  order: string
): boolean;
declare function IssueBuildOrder(
  whichPeon: HUnit | null,
  unitToBuild: string,
  x: number,
  y: number
): boolean;
declare function GetUnitFoodMade(whichUnit: HUnit | null): number;
declare function CreateTrackable(
  trackableModelPath: string,
  x: number,
  y: number,
  facing: number
): HTrackable;
declare function GroupEnumUnitsSelected(
  whichGroup: HGroup | null,
  whichPlayer: HPlayer | null,
  filter: HBoolExpr | null
): void;
declare function DefineStartLocationLoc(
  whichStartLoc: number,
  whichLocation: HLocation | null
): void;
declare function SetDoodadAnimationRect(
  r: HRect | null,
  doodadID: number,
  animName: string,
  animRandom: boolean
): void;
declare function GetAllyColorFilterState(): number;
declare function LoadQuestItemHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HQuestItem;
declare function SetPlayerOnScoreScreen(
  whichPlayer: HPlayer | null,
  flag: boolean
): void;
declare function ConvertWeaponType(i: number): HWeaponType;
declare function SetOpCinematicAvailable(
  campaignNumber: number,
  available: boolean
): void;
declare function IsNoDefeatCheat(): boolean;
declare function UnitPoolAddUnitType(
  whichPool: HUnitPool | null,
  unitId: number,
  weight: number
): void;
declare function EnableUserUI(b: boolean): void;
declare function IsDestructableInvulnerable(d: HDestructable | null): boolean;
declare function LeaderboardSetItemValueColor(
  lb: HLeaderBoard | null,
  whichItem: number,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function GetFoodMade(unitId: number): number;
declare function GetUnitMoveSpeed(whichUnit: HUnit | null): number;
declare function SetUnitFog(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): void;
declare function ConvertPlayerSlotState(i: number): HPlayerSlotState;
declare function GetEnumUnit(): HUnit;
declare function TriggerRegisterLeaveRegion(
  whichTrigger: HTrigger | null,
  whichRegion: HRegion | null,
  filter: HBoolExpr | null
): HEvent;
declare function CreateForce(): HForce;
declare function MoveLightningEx(
  whichBolt: HLightning | null,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): boolean;
declare function SetSoundPlayPosition(
  soundHandle: HSound | null,
  millisecs: number
): void;
declare function SetItemVisible(whichItem: HItem | null, show: boolean): void;
declare function PingMinimapEx(
  x: number,
  y: number,
  duration: number,
  red: number,
  green: number,
  blue: number,
  extraEffects: boolean
): void;
declare function ConvertPlayerEvent(i: number): HPlayerEvent;
declare function GetResearchingUnit(): HUnit;
declare function IsQuestDiscovered(whichQuest: HQuest | null): boolean;
declare function SetPlayerTaxRate(
  sourcePlayer: HPlayer | null,
  otherPlayer: HPlayer | null,
  whichResource: HPlayerState | null,
  rate: number
): void;
declare function CreateUnit(
  id: HPlayer | null,
  unitid: number,
  x: number,
  y: number,
  face: number
): HUnit;
declare function LeaderboardRemoveItem(
  lb: HLeaderBoard | null,
  index: number
): void;
declare function LeaderboardClear(lb: HLeaderBoard | null): void;
declare function TriggerExecuteWait(whichTrigger: HTrigger | null): void;
declare function AddSpellEffect(
  abilityString: string,
  t: HEffectType | null,
  x: number,
  y: number
): HEffect;
declare function SetSoundDistances(
  soundHandle: HSound | null,
  minDist: number,
  maxDist: number
): void;
declare function WaygateGetDestinationY(waygate: HUnit | null): number;
declare function GetSoundIsPlaying(soundHandle: HSound | null): boolean;
declare function SetBlight(
  whichPlayer: HPlayer | null,
  x: number,
  y: number,
  radius: number,
  addBlight: boolean
): void;
declare function GetItemTypeId(i: HItem | null): number;
declare function CreateSoundFilenameWithLabel(
  fileName: string,
  looping: boolean,
  is3D: boolean,
  stopwhenoutofrange: boolean,
  fadeInRate: number,
  fadeOutRate: number,
  SLKEntryName: string
): HSound;
declare function StoreReal(
  cache: HGameCache | null,
  missionKey: string,
  key: string,
  value: number
): void;
declare function GroupEnumUnitsInRangeCounted(
  whichGroup: HGroup | null,
  x: number,
  y: number,
  radius: number,
  filter: HBoolExpr | null,
  countLimit: number
): void;
declare function Or(
  operandA: HBoolExpr | null,
  operandB: HBoolExpr | null
): HBoolExpr;
declare function GetEnumItem(): HItem;
declare function ConvertDamageType(i: number): HDamageType;
declare function TriggerRegisterPlayerStateEvent(
  whichTrigger: HTrigger | null,
  whichPlayer: HPlayer | null,
  whichState: HPlayerState | null,
  opcode: HLimitop | null,
  limitval: number
): HEvent;
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
declare function UnitInventorySize(whichUnit: HUnit | null): number;
declare function GetStartLocPrio(
  whichStartLoc: number,
  prioSlotIndex: number
): HStartLocPrio;
declare function SetTextTagPos(
  t: HTextTag | null,
  x: number,
  y: number,
  heightOffset: number
): void;
declare function DestroyLightning(whichBolt: HLightning | null): boolean;
declare function LoadMultiboardItemHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HMultiBoardItem;
declare function FlushParentHashtable(table: HHashTable | null): void;
declare function ClearSelection(): void;
declare function SetIntegerGameState(
  whichIntegerGameState: HIGameState | null,
  value: number
): void;
declare function GetItemLevel(whichItem: HItem | null): number;
declare function GetLightningColorG(whichBolt: HLightning | null): number;
declare function SaveUnitPoolHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichUnitpool: HUnitPool | null
): boolean;
declare function UnitDropItemTarget(
  whichUnit: HUnit | null,
  whichItem: HItem | null,
  target: HWidget | null
): boolean;
declare function GetOrderTargetDestructable(): HDestructable;
declare function SetHeroInt(
  whichHero: HUnit | null,
  newInt: number,
  permanent: boolean
): void;
declare function ForceUIKey(key: string): void;
declare function TimerGetRemaining(whichTimer: HTimer | null): number;
declare function TriggerRegisterEnterRegion(
  whichTrigger: HTrigger | null,
  whichRegion: HRegion | null,
  filter: HBoolExpr | null
): HEvent;
declare function CreateUnitPool(): HUnitPool;
declare function ResetTerrainFog(): void;
declare function ChangeLevel(newLevel: string, doScoreScreen: boolean): void;
declare function CreateBlightedGoldmine(
  id: HPlayer | null,
  x: number,
  y: number,
  face: number
): HUnit;
declare function TimerDialogSetSpeed(
  whichDialog: HTimerDialog | null,
  speedMultFactor: number
): void;
declare function SetUnitAnimation(
  whichUnit: HUnit | null,
  whichAnimation: string
): void;
declare function UnitRemoveItem(
  whichUnit: HUnit | null,
  whichItem: HItem | null
): void;
declare function UnitItemInSlot(
  whichUnit: HUnit | null,
  itemSlot: number
): HItem;
declare function GetEnumPlayer(): HPlayer;
declare function LeaderboardRemovePlayerItem(
  lb: HLeaderBoard | null,
  p: HPlayer | null
): void;
declare function RemoveRegion(whichRegion: HRegion | null): void;
declare function GetFloatGameState(
  whichFloatGameState: HFGameState | null
): number;
declare function GetUnitName(whichUnit: HUnit | null): string;
declare function SetCameraOrientController(
  whichUnit: HUnit | null,
  xoffset: number,
  yoffset: number
): void;
declare function HaveStoredBoolean(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): boolean;
declare function SetDestructableAnimationSpeed(
  d: HDestructable | null,
  speedFactor: number
): void;
declare function IsItemOwned(whichItem: HItem | null): boolean;
declare function GetHeroInt(
  whichHero: HUnit | null,
  includeBonuses: boolean
): number;
declare function SetWaterDeforms(val: boolean): void;
declare function ItemPoolRemoveItemType(
  whichItemPool: HItemPool | null,
  itemId: number
): void;
declare function MultiboardSetItemsValueColor(
  lb: HMultiBoard | null,
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function IsPlayerRacePrefSet(
  whichPlayer: HPlayer | null,
  pref: HRacePreference | null
): boolean;
declare function CreateFogModifierRadiusLoc(
  forWhichPlayer: HPlayer | null,
  whichState: HFogState | null,
  center: HLocation | null,
  radius: number,
  useSharedVision: boolean,
  afterUnits: boolean
): HFogModifier;
declare function SetBlightLoc(
  whichPlayer: HPlayer | null,
  whichLocation: HLocation | null,
  radius: number,
  addBlight: boolean
): void;
declare function UnitSetConstructionProgress(
  whichUnit: HUnit | null,
  constructionPercentage: number
): void;
declare function ConvertWidgetEvent(i: number): HwidgEtevent;
declare function ForceClear(whichForce: HForce | null): void;
declare function GetHeroAgi(
  whichHero: HUnit | null,
  includeBonuses: boolean
): number;
declare function ConvertPlayerColor(i: number): HPlayerColor;
declare function VersionCompatible(whichVersion: HVersion | null): boolean;
declare function PlayModelCinematic(modelName: string): void;
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
declare function GetCameraTargetPositionZ(): number;
declare function GetStoredBoolean(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): boolean;
declare function GroupPointOrderById(
  whichGroup: HGroup | null,
  order: number,
  x: number,
  y: number
): boolean;
declare function IsPlayerObserver(whichPlayer: HPlayer | null): boolean;
declare function GetPlayerName(whichPlayer: HPlayer | null): string;
declare function PauseTimer(whichTimer: HTimer | null): void;
declare function CameraSetupApply(
  whichSetup: HCameraSetup | null,
  doPan: boolean,
  panTimed: boolean
): void;
declare function RemoveLocation(whichLocation: HLocation | null): void;
declare function GetLearningUnit(): HUnit;
declare function ConvertFGameState(i: number): HFGameState;
declare function GetSoldItem(): HItem;
declare function CameraSetupGetField(
  whichSetup: HCameraSetup | null,
  whichField: HCameraField | null
): number;
declare function SelectHeroSkill(
  whichHero: HUnit | null,
  abilcode: number
): void;
declare function GetUnitPointValueByType(unitType: number): number;
declare function Location(x: number, y: number): HLocation;
declare function GetClickedButton(): HButton;
declare function DialogDisplay(
  whichPlayer: HPlayer | null,
  whichDialog: HDialog | null,
  flag: boolean
): void;
declare function SetUnitTypeSlots(whichUnit: HUnit | null, slots: number): void;
declare function SaveUbersplatHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichUbersplat: HUberSplat | null
): boolean;
declare function ReloadGameCachesFromDisk(): boolean;
declare function SetImagePosition(
  whichImage: HImage | null,
  x: number,
  y: number,
  z: number
): void;
declare function ShowUbersplat(
  whichSplat: HUberSplat | null,
  flag: boolean
): void;
declare function SetEdCinematicAvailable(
  campaignNumber: number,
  available: boolean
): void;
declare function LoadFogModifierHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HFogModifier;
declare function SetFloatGameState(
  whichFloatGameState: HFGameState | null,
  value: number
): void;
declare function LeaderboardSortItemsByValue(
  lb: HLeaderBoard | null,
  ascending: boolean
): void;
declare function SetUnitOwner(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null,
  changeColor: boolean
): void;
declare function SetCustomCampaignButtonVisible(
  whichButton: number,
  visible: boolean
): void;
declare function ChooseRandomCreep(level: number): number;
declare function ConvertDialogEvent(i: number): HDialogEvent;
declare function SaveTriggerActionHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichTriggeraction: HTriggerAction | null
): boolean;
declare function GetCameraBoundMinY(): number;
declare function GetSpellAbility(): HAbility;
declare function GetCancelledStructure(): HUnit;
declare function UnitCanSleep(whichUnit: HUnit | null): boolean;
declare function SetItemInvulnerable(
  whichItem: HItem | null,
  flag: boolean
): void;
declare function EnumDestructablesInRect(
  r: HRect | null,
  filter: HBoolExpr | null,
  actionFunc: TCode
): void;
declare function CreateSound(
  fileName: string,
  looping: boolean,
  is3D: boolean,
  stopwhenoutofrange: boolean,
  fadeInRate: number,
  fadeOutRate: number,
  eaxSetting: string
): HSound;
declare function SetRandomSeed(seed: number): void;
declare function DestroyCondition(c: HConditionFunc | null): void;
declare function SetSoundVolume(
  soundHandle: HSound | null,
  volume: number
): void;
declare function GetPlayerSelectable(whichPlayer: HPlayer | null): boolean;
declare function SetWaterBaseColor(
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function RegionClearCell(
  whichRegion: HRegion | null,
  x: number,
  y: number
): void;
declare function PlayMusic(musicName: string): void;
declare function SetSkyModel(skyModelFile: string): void;
declare function SaveTrackableHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichTrackable: HTrackable | null
): boolean;
declare function SubString(source: string, start: number, end: number): string;
declare function SetHeroLevel(
  whichHero: HUnit | null,
  level: number,
  showEyeCandy: boolean
): void;
declare function GetDestructableTypeId(d: HDestructable | null): number;
declare function IsItemInvulnerable(whichItem: HItem | null): boolean;
declare function SetPlayerController(
  whichPlayer: HPlayer | null,
  controlType: HMapControl | null
): void;
declare function TriggerRegisterDeathEvent(
  whichTrigger: HTrigger | null,
  whichWidget: HWidget | null
): HEvent;
declare function SetThematicMusicPlayPosition(millisecs: number): void;
declare function CameraSetSmoothingFactor(factor: number): void;
declare function StoreBoolean(
  cache: HGameCache | null,
  missionKey: string,
  key: string,
  value: boolean
): void;
declare function ConvertCameraField(i: number): HCameraField;
declare function SelectUnit(whichUnit: HUnit | null, flag: boolean): void;
declare function MoveRectToLoc(
  whichRect: HRect | null,
  newCenterLoc: HLocation | null
): void;
declare function SetTextTagText(
  t: HTextTag | null,
  s: string,
  height: number
): void;
declare function GetLearnedSkillLevel(): number;
declare function QuestSetEnabled(
  whichQuest: HQuest | null,
  enabled: boolean
): void;
declare function IsUnit(
  whichUnit: HUnit | null,
  whichSpecifiedUnit: HUnit | null
): boolean;
declare function GroupClear(whichGroup: HGroup | null): void;
declare function GetSpellTargetLoc(): HLocation;
declare function GetOrderPointLoc(): HLocation;
declare function PreloadEndEx(): void;
declare function PanCameraToTimedWithZ(
  x: number,
  y: number,
  zOffsetDest: number,
  duration: number
): void;
declare function SetHeroAgi(
  whichHero: HUnit | null,
  newAgi: number,
  permanent: boolean
): void;
declare function GetSpellTargetY(): number;
declare function LeaderboardSetItemLabel(
  lb: HLeaderBoard | null,
  whichItem: number,
  val: string
): void;
declare function IsQuestFailed(whichQuest: HQuest | null): boolean;
declare function KillUnit(whichUnit: HUnit | null): void;
declare function UnitUseItemTarget(
  whichUnit: HUnit | null,
  whichItem: HItem | null,
  target: HWidget | null
): boolean;
declare function TriggerRegisterUnitEvent(
  whichTrigger: HTrigger | null,
  whichUnit: HUnit | null,
  whichEvent: HUnitEvent | null
): HEvent;
declare function SetImageAboveWater(
  whichImage: HImage | null,
  flag: boolean,
  useWaterAlpha: boolean
): void;
declare function ForceEnumAllies(
  whichForce: HForce | null,
  whichPlayer: HPlayer | null,
  filter: HBoolExpr | null
): void;
declare function SetFogStateRect(
  forWhichPlayer: HPlayer | null,
  whichState: HFogState | null,
  where: HRect | null,
  useSharedVision: boolean
): void;
declare function GetPlayers(): number;
declare function SetGameDifficulty(
  whichdifficulty: HGameDifficulty | null
): void;
declare function ResumeMusic(): void;
declare function ExecuteFunc(funcName: string): void;
declare function GetCameraTargetPositionY(): number;
declare function SetAltMinimapIcon(iconPath: string): void;
declare function LoadItemHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HItem;
declare function GetEventPlayerChatString(): string;
declare function LeaderboardDisplay(
  lb: HLeaderBoard | null,
  show: boolean
): void;
declare function SetIntroShotModel(introModelPath: string): void;
declare function Preload(filename: string): void;
declare function IsUnitInForce(
  whichUnit: HUnit | null,
  whichForce: HForce | null
): boolean;
declare function TerrainDeformStopAll(): void;
declare function IsItemPowerup(whichItem: HItem | null): boolean;
declare function PlayMusicEx(
  musicName: string,
  frommsecs: number,
  fadeinmsecs: number
): void;
declare function SaveGameExists(saveName: string): boolean;
declare function AttachSoundToUnit(
  soundHandle: HSound | null,
  whichUnit: HUnit | null
): void;
declare function SetImageType(
  whichImage: HImage | null,
  imageType: number
): void;
declare function IsUnitVisible(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null
): boolean;
declare function SetIntroShotText(introText: string): void;
declare function ConvertLimitOp(i: number): HLimitop;
declare function SetTextTagVelocity(
  t: HTextTag | null,
  xvel: number,
  yvel: number
): void;
declare function S2I(s: string): number;
declare function HaveSavedString(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): boolean;
declare function RegionClearRect(
  whichRegion: HRegion | null,
  r: HRect | null
): void;
declare function SetTextTagSuspended(t: HTextTag | null, flag: boolean): void;
declare function TriggerRegisterPlayerUnitEvent(
  whichTrigger: HTrigger | null,
  whichPlayer: HPlayer | null,
  whichPlayerUnitEvent: HPlayerunitEvent | null,
  filter: HBoolExpr | null
): HEvent;
declare function TriggerWaitOnSleeps(
  whichTrigger: HTrigger | null,
  flag: boolean
): void;
declare function SetDayNightModels(
  terrainDNCFile: string,
  unitDNCFile: string
): void;
declare function SetCineFilterDuration(duration: number): void;
declare function MultiboardSuppressDisplay(flag: boolean): void;
declare function RectFromLoc(
  min: HLocation | null,
  max: HLocation | null
): HRect;
declare function LeaderboardGetItemCount(lb: HLeaderBoard | null): number;
declare function GetFilterItem(): HItem;
declare function IsUnitInRegion(
  whichRegion: HRegion | null,
  whichUnit: HUnit | null
): boolean;
declare function DefeatConditionSetDescription(
  whichCondition: HDefeatCondition | null,
  description: string
): void;
declare function LoadDefeatConditionHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HDefeatCondition;
declare function IsFoggedToPlayer(
  x: number,
  y: number,
  whichPlayer: HPlayer | null
): boolean;
declare function AddSpellEffectLoc(
  abilityString: string,
  t: HEffectType | null,
  where: HLocation | null
): HEffect;
declare function TriggerRegisterTrackableTrackEvent(
  whichTrigger: HTrigger | null,
  t: HTrackable | null
): HEvent;
declare function RemoveDestructable(d: HDestructable | null): void;
declare function LoadBooleanExprHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HBoolExpr;
declare function LeaderboardSetStyle(
  lb: HLeaderBoard | null,
  showLabel: boolean,
  showNames: boolean,
  showValues: boolean,
  showIcons: boolean
): void;
declare function GetPlayerTypedUnitCount(
  whichPlayer: HPlayer | null,
  unitName: string,
  includeIncomplete: boolean,
  includeUpgrades: boolean
): number;
declare function HaveStoredInteger(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): boolean;
declare function LoadQuestHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HQuest;
declare function CreateQuest(): HQuest;
declare function GetStoredString(
  cache: HGameCache | null,
  missionKey: string,
  key: string
): string;
declare function UnitHasBuffsEx(
  whichUnit: HUnit | null,
  removePositive: boolean,
  removeNegative: boolean,
  magic: boolean,
  physical: boolean,
  timedLife: boolean,
  aura: boolean,
  autoDispel: boolean
): boolean;
declare function QuestCreateItem(whichQuest: HQuest | null): HQuestItem;
declare function DestroyFogModifier(
  whichFogModifier: HFogModifier | null
): void;
declare function IsUnitInRange(
  whichUnit: HUnit | null,
  otherUnit: HUnit | null,
  distance: number
): boolean;
declare function SetItemPawnable(i: HItem | null, flag: boolean): void;
declare function LoadSoundHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HSound;
declare function SetCineFilterStartColor(
  red: number,
  green: number,
  blue: number,
  alpha: number
): void;
declare function PlayerGetLeaderboard(toPlayer: HPlayer | null): HLeaderBoard;
declare function IssueNeutralPointOrderById(
  forWhichPlayer: HPlayer | null,
  neutralStructure: HUnit | null,
  unitId: number,
  x: number,
  y: number
): boolean;
declare function GetSummonedUnit(): HUnit;
declare function SetCreatureDensity(whichdensity: HMapDensity | null): void;
declare function SetGameSpeed(whichspeed: HGameSpeed | null): void;
declare function SetUnitAnimationWithRarity(
  whichUnit: HUnit | null,
  whichAnimation: string,
  rarity: HRarityControl | null
): void;
declare function SetDefaultDifficulty(g: HGameDifficulty | null): void;
declare function R2I(r: number): number;
declare function UnitAddType(
  whichUnit: HUnit | null,
  whichUnitType: HUnitType | null
): boolean;
declare function QueueUnitAnimation(
  whichUnit: HUnit | null,
  whichAnimation: string
): void;
declare function ConvertIGameState(i: number): HIGameState;
declare function IsUnitType(
  whichUnit: HUnit | null,
  whichUnitType: HUnitType | null
): boolean;
declare function SaveLightningHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number,
  whichLightning: HLightning | null
): boolean;
declare function CameraSetupApplyForceDurationWithZ(
  whichSetup: HCameraSetup | null,
  zDestOffset: number,
  forceDuration: number
): void;
declare function IsMapFlagSet(whichMapFlag: HMapFlag | null): boolean;
declare function IsTerrainPathable(
  x: number,
  y: number,
  t: HPathingType | null
): boolean;
declare function GetDyingUnit(): HUnit;
declare function IsItemPawnable(whichItem: HItem | null): boolean;
declare function ConvertPlayerState(i: number): HPlayerState;
declare function Rad2Deg(radians: number): number;
declare function GetManipulatingUnit(): HUnit;
declare function GetUnitAbilityLevel(
  whichUnit: HUnit | null,
  abilcode: number
): number;
declare function ResetTrigger(whichTrigger: HTrigger | null): void;
declare function GetPlayerAlliance(
  sourcePlayer: HPlayer | null,
  otherPlayer: HPlayer | null,
  whichAllianceSetting: HAllianceType | null
): boolean;
declare function TriggerRegisterTimerEvent(
  whichTrigger: HTrigger | null,
  timeout: number,
  periodic: boolean
): HEvent;
declare function GetDestructableLife(d: HDestructable | null): number;
declare function ConvertRace(i: number): HRace;
declare function UnitIgnoreAlarm(
  whichUnit: HUnit | null,
  flag: boolean
): boolean;
declare function CreateTrigger(): HTrigger;
declare function GetLocalizedHotkey(source: string): number;
declare function GetUnitFlyHeight(whichUnit: HUnit | null): number;
declare function UnitDropItemPoint(
  whichUnit: HUnit | null,
  whichItem: HItem | null,
  x: number,
  y: number
): boolean;
declare function AddLightning(
  codeName: string,
  checkVisibility: boolean,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): HLightning;
declare function StopSound(
  soundHandle: HSound | null,
  killWhenDone: boolean,
  fadeOut: boolean
): void;
declare function GetPlayerTechResearched(
  whichPlayer: HPlayer | null,
  techid: number,
  specificonly: boolean
): boolean;
declare function GetResearched(): number;
declare function DestroyUnitPool(whichPool: HUnitPool | null): void;
declare function SetResourceAmount(
  whichUnit: HUnit | null,
  amount: number
): void;
declare function CameraSetupGetDestPositionLoc(
  whichSetup: HCameraSetup | null
): HLocation;
declare function TimerGetElapsed(whichTimer: HTimer | null): number;
declare function GetLightningColorA(whichBolt: HLightning | null): number;
declare function SetCameraTargetController(
  whichUnit: HUnit | null,
  xoffset: number,
  yoffset: number,
  inheritOrientation: boolean
): void;
declare function SetPlayerColor(
  whichPlayer: HPlayer | null,
  color: HPlayerColor | null
): void;
declare function GetUnitLoc(whichUnit: HUnit | null): HLocation;
declare function GetUnitDefaultAcquireRange(whichUnit: HUnit | null): number;
declare function RemoveSavedString(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): void;
declare function SetUnitPropWindow(
  whichUnit: HUnit | null,
  newPropWindowAngle: number
): void;
declare function SetCameraQuickPosition(x: number, y: number): void;
declare function GetLightningColorR(whichBolt: HLightning | null): number;
declare function GetLocationY(whichLocation: HLocation | null): number;
declare function UnitSetUsesAltIcon(
  whichUnit: HUnit | null,
  flag: boolean
): void;
declare function GetOrderedUnit(): HUnit;
declare function PreloadGenEnd(filename: string): void;
declare function SetCreepCampFilterState(state: boolean): void;
declare function TriggerRegisterGameStateEvent(
  whichTrigger: HTrigger | null,
  whichState: HGameState | null,
  opcode: HLimitop | null,
  limitval: number
): HEvent;
declare function SetDestructableMaxLife(
  d: HDestructable | null,
  max: number
): void;
declare function SetAllUnitTypeSlots(slots: number): void;
declare function IsUnitOwnedByPlayer(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null
): boolean;
declare function IsUnitSelected(
  whichUnit: HUnit | null,
  whichPlayer: HPlayer | null
): boolean;
declare function LoadRectHandle(
  table: HHashTable | null,
  parentKey: number,
  childKey: number
): HRect;
declare function MultiboardSetItemValue(
  mbi: HMultiBoardItem | null,
  val: string
): void;
declare function EnableWeatherEffect(
  whichEffect: HWeatherEffect | null,
  enable: boolean
): void;
declare function GetLevelingUnit(): HUnit;
declare function IsItemIdPowerup(itemId: number): boolean;
declare function CreateUnitByName(
  whichPlayer: HPlayer | null,
  unitname: string,
  x: number,
  y: number,
  face: number
): HUnit;
declare function FourCC(id: string): number;
declare function StringToId(id: string): number;
