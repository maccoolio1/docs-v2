toc = [
  {label:"Kurzübersicht",path:"AutoHotkey.htm"},
  {label:"Nutzung und Syntax",children:
  [
    {label:"Hotkeys",path:"Hotkeys.htm"},
    {label:"Hotstrings & Auto-Ersetzen",path:"Hotstrings.htm"},
    {label:"Neubelegung von Tasten",path:"misc/Remap.htm"},
    {label:"Tastenliste (Tastatur, Maus, Joystick)",path:"KeyList.htm"},
    {label:"Skripte",path:"Scripts.htm"},
    {label:"Variablen und Ausdrücke",path:"Variables.htm"},
    {label:"Funktionen",path:"Functions.htm"},
    {label:"Label",path:"misc/Labels.htm"},
    {label:"Threads",path:"misc/Threads.htm"},
    {label:"Debugger-Clients (DBGp)",path:"AHKL_DBGPClients.htm"},
    {label:"Objekte",path:"Objects.htm",children:
    [
      {label:"Grundlagen",path:"Objects.htm#Usage"},
      {label:"Erweiterte Grundlagen",path:"Objects.htm#Extended_Usage"},
      {label:"Benutzerdefinierte Objekte",path:"Objects.htm#Custom_Objects"},
      {label:"Standard-base-Objekt",path:"Objects.htm#Default_Base_Object"},
      {label:"Implementierung",path:"Objects.htm#Implementation"}
    ]}
  ]},
  {label:"Häufig gestellte Fragen",path:"FAQ.htm"},
  {label:"Tutorial (Schnellstart)",path:"Tutorial.htm"},
  {label:"Aktuelle Änderungen",path:"ChangeLog.htm"},
  {label:"Skript-Beispiele",path:"scripts/index.htm"},
  {label:"Skript-Kompatibilität",path:"Compat.htm"},
  {label:"Befehls- und Funktionsliste",path:"commands/index.htm"},
  {label:"Umgebung",children:
  [
    {label:"ClipWait",path:"commands/ClipWait.htm"},
    {label:"EnvGet",path:"commands/EnvGet.htm"},
    {label:"EnvSet",path:"commands/EnvSet.htm"},
    {label:"OnClipboardChange",path:"commands/OnClipboardChange.htm"},
    {label:"SysGet",path:"commands/SysGet.htm"}
  ]},
  {label:"Externe Libraries",children:
  [
    {label:"DllCall",path:"commands/DllCall.htm"},
    {label:"NumGet",path:"commands/NumGet.htm"},
    {label:"NumPut",path:"commands/NumPut.htm"},
    {label:"RegisterCallback",path:"commands/RegisterCallback.htm"},
    {label:"StrPut/StrGet",path:"commands/StrPutGet.htm"},
    {label:"VarSetCapacity",path:"commands/VarSetCapacity.htm"},
    {label:"COM",children:
    [
      {label:"ComObjActive",path:"commands/ComObjActive.htm"},
      {label:"ComObjArray",path:"commands/ComObjArray.htm"},
      {label:"ComObjConnect",path:"commands/ComObjConnect.htm"},
      {label:"ComObjCreate",path:"commands/ComObjCreate.htm"},
      {label:"ComObjGet",path:"commands/ComObjGet.htm"},
      {label:"ComObject",path:"commands/ComObject.htm"},
      {label:"ComObjError",path:"commands/ComObjError.htm"},
      {label:"ComObjFlags",path:"commands/ComObjFlags.htm"},
      {label:"ComObjQuery",path:"commands/ComObjQuery.htm"},
      {label:"ComObjType",path:"commands/ComObjType.htm"},
      {label:"ComObjValue",path:"commands/ComObjValue.htm"},
      {label:"ObjAddRef / ObjRelease",path:"commands/ObjAddRef.htm"}
    ]}
  ]},
  {label:"Datei, Verzeichnis, Laufwerk",children:
  [
    {label:"Drive..",path:"commands/Drive.htm"},
    {label:"DriveGet..",path:"commands/DriveGet.htm"},
    {label:"DirCopy",path:"commands/DirCopy.htm"},
    {label:"DirCreate",path:"commands/DirCreate.htm"},
    {label:"DirDelete",path:"commands/DirDelete.htm"},
    {label:"DirExist",path:"commands/FileExist.htm"},
    {label:"DirMove",path:"commands/DirMove.htm"},
    {label:"DirSelect",path:"commands/DirSelect.htm"},
    {label:"FileAppend",path:"commands/FileAppend.htm"},
    {label:"FileCopy",path:"commands/FileCopy.htm"},
    {label:"FileCreateShortcut",path:"commands/FileCreateShortcut.htm"},
    {label:"FileDelete",path:"commands/FileDelete.htm"},
    {label:"FileEncoding",path:"commands/FileEncoding.htm"},
    {label:"FileExist",path:"commands/FileExist.htm"},
    {label:"FileGetAttrib",path:"commands/FileGetAttrib.htm"},
    {label:"FileGetShortcut",path:"commands/FileGetShortcut.htm"},
    {label:"FileGetSize",path:"commands/FileGetSize.htm"},
    {label:"FileGetTime",path:"commands/FileGetTime.htm"},
    {label:"FileGetVersion",path:"commands/FileGetVersion.htm"},
    {label:"FileInstall",path:"commands/FileInstall.htm"},
    {label:"FileMove",path:"commands/FileMove.htm"},
    {label:"FileOpen",path:"commands/FileOpen.htm"},
    {label:"FileRead",path:"commands/FileRead.htm"},
    {label:"FileRecycle",path:"commands/FileRecycle.htm"},
    {label:"FileRecycleEmpty",path:"commands/FileRecycleEmpty.htm"},
    {label:"FileSelect",path:"commands/FileSelect.htm"},
    {label:"FileSetAttrib",path:"commands/FileSetAttrib.htm"},
    {label:"FileSetTime",path:"commands/FileSetTime.htm"},
    {label:"IniDelete",path:"commands/IniDelete.htm"},
    {label:"IniRead",path:"commands/IniRead.htm"},
    {label:"IniWrite",path:"commands/IniWrite.htm"},
    {label:"Loop (Dateien & Ordner)",path:"commands/LoopFile.htm"},
    {label:"Loop (Dateiinhalt lesen)",path:"commands/LoopReadFile.htm"},
    {label:"SetWorkingDir",path:"commands/SetWorkingDir.htm"},
    {label:"SplitPath",path:"commands/SplitPath.htm"}
  ]},
  {label:"Ablaufsteuerung",children:
  [
    {label:"#Include/#IncludeAgain",path:"commands/_Include.htm"},
    {label:"{ ... } (Block)",path:"commands/Block.htm"},
    {label:"Break",path:"commands/Break.htm"},
    {label:"Catch",path:"commands/Catch.htm"},
    {label:"Continue",path:"commands/Continue.htm"},
    {label:"Critical",path:"commands/Critical.htm"},
    {label:"Else",path:"commands/Else.htm"},
    {label:"Exit",path:"commands/Exit.htm"},
    {label:"ExitApp",path:"commands/ExitApp.htm"},
    {label:"Finally",path:"commands/Finally.htm"},
    {label:"For-Schleife",path:"commands/For.htm"},
    {label:"Gosub",path:"commands/Gosub.htm"},
    {label:"Goto",path:"commands/Goto.htm"},
    {label:"If (Ausdruck)",path:"commands/IfExpression.htm"},
    {label:"Loop",path:"commands/Loop.htm",children:
    [
      {label:"Loop",path:"commands/Loop.htm"},
      {label:"Loop (Dateien & Ordner)",path:"commands/LoopFile.htm"},
      {label:"Loop (Zeichenkette parsen)",path:"commands/LoopParse.htm"},
      {label:"Loop (Dateiinhalt lesen)",path:"commands/LoopReadFile.htm"},
      {label:"Loop (Registry)",path:"commands/LoopReg.htm"}
    ]},
    {label:"OnExit",path:"commands/OnExit.htm"},
    {label:"Pause",path:"commands/Pause.htm"},
    {label:"Reload",path:"commands/Reload.htm"},
    {label:"Return",path:"commands/Return.htm"},
    {label:"SetTimer",path:"commands/SetTimer.htm"},
    {label:"Sleep",path:"commands/Sleep.htm"},
    {label:"Suspend",path:"commands/Suspend.htm"},
    {label:"Thread",path:"commands/Thread.htm"},
    {label:"Throw",path:"commands/Throw.htm"},
    {label:"Try",path:"commands/Try.htm"},
    {label:"Until",path:"commands/Until.htm"},
    {label:"While-Schleife",path:"commands/While.htm"}
  ]},
  {label:"Grafische Benutzeroberflächen",children:
  [
    {label:"DirSelect",path:"commands/DirSelect.htm"},
    {label:"FileSelect",path:"commands/FileSelect.htm"},
    {label:"Gui-Steuerelementarten",path:"commands/GuiControls.htm"},
    {label:"Gui-Objekt",path:"objects/Gui.htm"},
    {label:"GuiControl-Objekt",path:"objects/GuiControl.htm"},
    {label:"GuiCreate",path:"commands/GuiCreate.htm"},
    {label:"GuiCtrlFromHwnd",path:"commands/GuiCtrlFromHwnd.htm"},
    {label:"GuiFromHwnd",path:"commands/GuiFromHwnd.htm"},
    {label:"ListView",path:"commands/ListView.htm"},
    {label:"TreeView",path:"commands/TreeView.htm"},
    {label:"Bild-Handles",path:"misc/ImageHandles.htm"},
    {label:"InputBox",path:"commands/InputBox.htm"},
    {label:"LoadPicture",path:"commands/LoadPicture.htm"},
    {label:"Menu",path:"commands/Menu.htm"},
    {label:"MenuGetHandle",path:"commands/MenuGetHandle.htm"},
    {label:"MenuGetName",path:"commands/MenuGetName.htm"},
    {label:"MsgBox",path:"commands/MsgBox.htm"},
    {label:"OnMessage",path:"commands/OnMessage.htm"},
    {label:"Styles für Fenster/Steuerelement",path:"misc/Styles.htm"},
    {label:"ToolTip",path:"commands/ToolTip.htm"},
    {label:"TrayTip",path:"commands/TrayTip.htm"}
  ]},
  {label:"Mathematik",path:"commands/Math.htm",children:
  [
    {label:"Abs",path:"commands/Math.htm#Abs"},
    {label:"Ceil",path:"commands/Math.htm#Ceil"},
    {label:"DateAdd",path:"commands/DateAdd.htm"},
    {label:"DateDiff",path:"commands/DateDiff.htm"},
    {label:"Exp",path:"commands/Math.htm#Exp"},
    {label:"Floor",path:"commands/Math.htm#Floor"},
    {label:"Log",path:"commands/Math.htm#Log"},
    {label:"Ln",path:"commands/Math.htm#Ln"},
    {label:"Mod",path:"commands/Math.htm#Mod"},
    {label:"Random",path:"commands/Random.htm"},
    {label:"Round",path:"commands/Math.htm#Round"},
    {label:"Sqrt",path:"commands/Math.htm#Sqrt"},
    {label:"Sin/Cos/Tan",path:"commands/Math.htm#Sin"},
    {label:"ASin/ACos/ATan",path:"commands/Math.htm#ASin"}
  ]},
  {label:"Maus und Tastatur",children:
  [
    {label:"Hotkeys und Hotstrings",path:"Hotkeys.htm",children:
    [
      {label:"#HotkeyInterval",path:"commands/_HotkeyInterval.htm"},
      {label:"#HotkeyModifierTimeout",path:"commands/_HotkeyModifierTimeout.htm"},
      {label:"#Hotstring",path:"commands/_Hotstring.htm"},
      {label:"#If",path:"commands/_If.htm"},
      {label:"#IfTimeOut",path:"commands/_IfTimeout.htm"},
      {label:"#IfWinActive/Exist",path:"commands/_IfWinActive.htm"},
      {label:"#InputLevel",path:"commands/_InputLevel.htm"},
      {label:"#MaxHotkeysPerInterval",path:"commands/_MaxHotkeysPerInterval.htm"},
      {label:"#MaxThreads",path:"commands/_MaxThreads.htm"},
      {label:"#MaxThreadsBuffer",path:"commands/_MaxThreadsBuffer.htm"},
      {label:"#MaxThreadsPerHotkey",path:"commands/_MaxThreadsPerHotkey.htm"},
      {label:"#MenuMaskKey",path:"commands/_MenuMaskKey.htm"},
      {label:"#UseHook",path:"commands/_UseHook.htm"},
      {label:"Hotkey",path:"commands/Hotkey.htm"},
      {label:"ListHotkeys",path:"commands/ListHotkeys.htm"},
      {label:"Suspend",path:"commands/Suspend.htm"}
    ]},
    {label:"#InstallKeybdHook",path:"commands/_InstallKeybdHook.htm"},
    {label:"#InstallMouseHook",path:"commands/_InstallMouseHook.htm"},
    {label:"#KeyHistory",path:"commands/_KeyHistory.htm"},
    {label:"BlockInput",path:"commands/BlockInput.htm"},
    {label:"Click",path:"commands/Click.htm"},
    {label:"ControlClick",path:"commands/ControlClick.htm"},
    {label:"ControlSend, ControlSendRaw",path:"commands/ControlSend.htm"},
    {label:"CoordMode",path:"commands/CoordMode.htm"},
    {label:"GetKeyName/VK/SC",path:"commands/GetKey.htm"},
    {label:"GetKeyState",path:"commands/GetKeyState.htm"},
    {label:"Tastenliste (Tastatur, Maus, Joystick)",path:"KeyList.htm"},
    {label:"KeyHistory",path:"commands/KeyHistory.htm"},
    {label:"KeyWait",path:"commands/KeyWait.htm"},
    {label:"Input",path:"commands/Input.htm"},
    {label:"MouseClick",path:"commands/MouseClick.htm"},
    {label:"MouseClickDrag",path:"commands/MouseClickDrag.htm"},
    {label:"MouseGetPos",path:"commands/MouseGetPos.htm"},
    {label:"MouseMove",path:"commands/MouseMove.htm"},
    {label:"Send, SendRaw, SendInput, SendPlay, SendEvent",path:"commands/Send.htm"},
    {label:"SendLevel",path:"commands/SendLevel.htm"},
    {label:"SendMode",path:"commands/SendMode.htm"},
    {label:"SetDefaultMouseSpeed",path:"commands/SetDefaultMouseSpeed.htm"},
    {label:"SetKeyDelay",path:"commands/SetKeyDelay.htm"},
    {label:"SetMouseDelay",path:"commands/SetMouseDelay.htm"},
    {label:"SetNumScrollCapsLockState",path:"commands/SetNumScrollCapsLockState.htm"},
    {label:"SetStoreCapslockMode",path:"commands/SetStoreCapslockMode.htm"}
  ]},
  {label:"Sonstiges",children:
  [
    {label:"Download",path:"commands/Download.htm"},
    {label:"Edit",path:"commands/Edit.htm"},
    {label:"Func",path:"commands/Func.htm"},
    {label:"IsByRef",path:"commands/IsByRef.htm"},
    {label:"IsFunc",path:"commands/IsFunc.htm"},
    {label:"IsLabel",path:"commands/IsLabel.htm"},
    {label:"IsObject",path:"commands/IsObject.htm"},
    {label:"ListLines",path:"commands/ListLines.htm"},
    {label:"ListVars",path:"commands/ListVars.htm"},
    {label:"MonitorGet",path:"commands/MonitorGet.htm"},
    {label:"OutputDebug",path:"commands/OutputDebug.htm"},
    {label:"VarSetCapacity",path:"commands/VarSetCapacity.htm"}
  ]},
  {label:"Objekttypen",children:
  [
    {label:"Object",path:"objects/Object.htm"},
    {label:"Enumerator-Objekt",path:"objects/Enumerator.htm"},
    {label:"Exception-Objekt",path:"commands/Throw.htm#Exception"},
    {label:"File-Objekt",path:"objects/File.htm"},
    {label:"Func-Objekt",path:"objects/Func.htm"},
    {label:"Funktionsobjekte",path:"objects/Functor.htm"},
    {label:"Gui-Objekt",path:"objects/Gui.htm"},
    {label:"GuiControl-Objekt",path:"objects/GuiControl.htm"},
    {label:"RegExMatch-Objekt",path:"commands/RegExMatch.htm#MatchObject"},
  ]},
  {label:"Prozess",children:
  [
    {label:"Process",path:"commands/Process.htm"},
    {label:"Run/RunWait",path:"commands/Run.htm"},
    {label:"RunAs",path:"commands/RunAs.htm"},
    {label:"Shutdown",path:"commands/Shutdown.htm"}
  ]},
  {label:"Registry",children:
  [
    {label:"Loop (Registry)",path:"commands/LoopReg.htm"},
    {label:"RegDelete",path:"commands/RegDelete.htm"},
    {label:"RegRead",path:"commands/RegRead.htm"},
    {label:"RegWrite",path:"commands/RegWrite.htm"},
    {label:"SetRegView",path:"commands/SetRegView.htm"}
  ]},
  {label:"Bildschirm",children:
  [
    {label:"ImageSearch",path:"commands/ImageSearch.htm"},
    {label:"PixelGetColor",path:"commands/PixelGetColor.htm"},
    {label:"PixelSearch",path:"commands/PixelSearch.htm"}
  ]},
  {label:"Sound",children:
  [
    {label:"SoundBeep",path:"commands/SoundBeep.htm"},
    {label:"SoundGet",path:"commands/SoundGet.htm"},
    {label:"SoundPlay",path:"commands/SoundPlay.htm"},
    {label:"SoundSet",path:"commands/SoundSet.htm"},
  ]},
  {label:"Zeichenkette",children:
  [
    {label:"Chr",path:"commands/Chr.htm"},
    {label:"Format",path:"commands/Format.htm"},
    {label:"FormatTime",path:"commands/FormatTime.htm"},
    {label:"InStr",path:"commands/InStr.htm"},
    {label:"Loop (Zeichenkette parsen)",path:"commands/LoopParse.htm"},
    {label:"Ord",path:"commands/Ord.htm"},
    {label:"RegEx-Kurzübersicht",path:"misc/RegEx-QuickRef.htm"},
    {label:"RegExMatch",path:"commands/RegExMatch.htm"},
    {label:"RegExReplace",path:"commands/RegExReplace.htm"},
    {label:"Sort",path:"commands/Sort.htm"},
    {label:"StringCaseSense",path:"commands/StringCaseSense.htm"},
    {label:"StrLower/StrUpper",path:"commands/StrLower.htm"},
    {label:"StrLen",path:"commands/StrLen.htm"},
    {label:"StrPut/StrGet",path:"commands/StrPutGet.htm"},
    {label:"StrReplace",path:"commands/StrReplace.htm"},
    {label:"StrSplit",path:"commands/StrSplit.htm"},
    {label:"SubStr",path:"commands/SubStr.htm"},
    {label:"Trim",path:"commands/Trim.htm"}
  ]},
  {label:"Fenster",children:
  [
    {label:"Steuerelemente",children:
    [
      {label:"Control-Funktionen",path:"commands/Control.htm"},
      {label:"ControlClick",path:"commands/ControlClick.htm"},
      {label:"ControlFocus",path:"commands/ControlFocus.htm"},
      {label:"ControlGetFocus",path:"commands/ControlGetFocus.htm"},
      {label:"ControlGetPos",path:"commands/ControlGetPos.htm"},
      {label:"ControlGetText",path:"commands/ControlGetText.htm"},
      {label:"ControlMove",path:"commands/ControlMove.htm"},
      {label:"ControlSend/ControlSendRaw",path:"commands/ControlSend.htm"},
      {label:"ControlSetText",path:"commands/ControlSetText.htm"},
      {label:"Menu",path:"commands/Menu.htm"},
      {label:"MenuSelect",path:"commands/MenuSelect.htm"},
      {label:"PostMessage/SendMessage",path:"commands/PostMessage.htm"},
      {label:"SetControlDelay",path:"commands/SetControlDelay.htm"}
    ]},
    {label:"Fenstergruppen",children:
    [
      {label:"GroupActivate",path:"commands/GroupActivate.htm"},
      {label:"GroupAdd",path:"commands/GroupAdd.htm"},
      {label:"GroupClose",path:"commands/GroupClose.htm"},
      {label:"GroupDeactivate",path:"commands/GroupDeactivate.htm"}
    ]},
    {label:"Fenstertitel",path:"misc/WinTitle.htm"},
    {label:"#WinActivateForce",path:"commands/_WinActivateForce.htm"},
    {label:"DetectHiddenText",path:"commands/DetectHiddenText.htm"},
    {label:"DetectHiddenWindows",path:"commands/DetectHiddenWindows.htm"},
    {label:"SetTitleMatchMode",path:"commands/SetTitleMatchMode.htm"},
    {label:"SetWinDelay",path:"commands/SetWinDelay.htm"},
    {label:"StatusBarGetText",path:"commands/StatusBarGetText.htm"},
    {label:"StatusBarWait",path:"commands/StatusBarWait.htm"},
    {label:"WinActivate",path:"commands/WinActivate.htm"},
    {label:"WinActivateBottom",path:"commands/WinActivateBottom.htm"},
    {label:"WinActive",path:"commands/WinActive.htm"},
    {label:"WinClose",path:"commands/WinClose.htm"},
    {label:"WinExist",path:"commands/WinExist.htm"},
    {label:"WinGet.. (verschiedenes)",path:"commands/WinGet.htm"},
    {label:"WinGetClass",path:"commands/WinGetClass.htm"},
    {label:"WinGetPos",path:"commands/WinGetPos.htm"},
    {label:"WinGetText",path:"commands/WinGetText.htm"},
    {label:"WinGetTitle",path:"commands/WinGetTitle.htm"},
    {label:"WinHide",path:"commands/WinHide.htm"},
    {label:"WinKill",path:"commands/WinKill.htm"},
    {label:"WinMaximize",path:"commands/WinMaximize.htm"},
    {label:"WinMinimize",path:"commands/WinMinimize.htm"},
    {label:"WinMinimizeAll, WinMinimizeAllUndo",path:"commands/WinMinimizeAll.htm"},
    {label:"WinMove",path:"commands/WinMove.htm"},
    {label:"WinRestore",path:"commands/WinRestore.htm"},
    {label:"WinSet.. (verschiedenes)",path:"commands/WinSet.htm"},
    {label:"WinSetTitle",path:"commands/WinSetTitle.htm"},
    {label:"WinShow",path:"commands/WinShow.htm"},
    {label:"WinWait",path:"commands/WinWait.htm"},
    {label:"WinWaitActive, WinWaitNotActive",path:"commands/WinWaitActive.htm"},
    {label:"WinWaitClose",path:"commands/WinWaitClose.htm"}
  ]},
  {label:"#Direktiven",children:
  [
    {label:"#ClipboardTimeout",path:"commands/_ClipboardTimeout.htm"},
    {label:"#ErrorStdOut",path:"commands/_ErrorStdOut.htm"},
    {label:"#HotkeyInterval",path:"commands/_HotkeyInterval.htm"},
    {label:"#HotkeyModifierTimeout",path:"commands/_HotkeyModifierTimeout.htm"},
    {label:"#Hotstring",path:"commands/_Hotstring.htm"},
    {label:"#If",path:"commands/_If.htm"},
    {label:"#IfWinActive/Exist",path:"commands/_IfWinActive.htm"},
    {label:"#IfTimeout",path:"commands/_IfTimeout.htm"},
    {label:"#Include/#IncludeAgain",path:"commands/_Include.htm"},
    {label:"#InputLevel",path:"commands/_InputLevel.htm"},
    {label:"#InstallKeybdHook",path:"commands/_InstallKeybdHook.htm"},
    {label:"#InstallMouseHook",path:"commands/_InstallMouseHook.htm"},
    {label:"#KeyHistory",path:"commands/_KeyHistory.htm"},
    {label:"#MaxHotkeysPerInterval",path:"commands/_MaxHotkeysPerInterval.htm"},
    {label:"#MaxThreads",path:"commands/_MaxThreads.htm"},
    {label:"#MaxThreadsBuffer",path:"commands/_MaxThreadsBuffer.htm"},
    {label:"#MaxThreadsPerHotkey",path:"commands/_MaxThreadsPerHotkey.htm"},
    {label:"#MenuMaskKey",path:"commands/_MenuMaskKey.htm"},
    {label:"#NoTrayIcon",path:"commands/_NoTrayIcon.htm"},
    {label:"#Persistent",path:"commands/_Persistent.htm"},
    {label:"#SingleInstance",path:"commands/_SingleInstance.htm"},
    {label:"#UseHook",path:"commands/_UseHook.htm"},
    {label:"#Warn",path:"commands/_Warn.htm"},
    {label:"#WinActivateForce",path:"commands/_WinActivateForce.htm"}
  ]}
];
