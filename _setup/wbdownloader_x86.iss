#define MyAppName "Menedżer pobierania (32-bit)"
#define MyAppVersion "2.0.2"
#define MyAppPublisher "WindowsBASE.pl"
#define MyAppURL "https://windowsbase.pl/"
#define MyAppExeName "wbdownloader.exe"

[Setup]
VersionInfoVersion=2.0.2
AppId={{DC3E86C4-D351-43A0-93DE-E09DD36FE43E}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={code:GetDirName}
DisableDirPage=no
DisableWelcomePage=no
DefaultGroupName=Menedżer pobierania- WindowsBASE.pl
AllowNoIcons=yes
PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=commandline dialog
OutputDir=C:\Users\User\Desktop
OutputBaseFilename=wbd_setup_x86
SetupIconFile=C:\Users\User\Desktop\install1.ico
Compression=lzma2/ultra64
SolidCompression=yes
WizardStyle=modern
WizardSmallImageFile=C:\Users\User\Desktop\logo.bmp
WizardImageFile=C:\Users\User\Desktop\slogo.bmp
InfoBeforeFile=readme.txt
InfoAfterFile=after.txt
UninstallDisplayIcon={app}\{#MyAppExeName}

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"
Name: "polish"; MessagesFile: "compiler:Languages\Polish.isl"

[Files]
Source: "C:\Users\User\Desktop\WBdownloader\{#MyAppExeName}"; DestDir: "{app}"; Flags: ignoreversion; Permissions: everyone-full;
Source: "C:\Users\User\Desktop\WBdownloader\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs; Permissions: everyone-full;
Source: "{tmp}\wbsft_data.7z"; DestDir: "{app}\resources\app\bin\"; Flags: external; Permissions: everyone-full;

[Dirs]
Name: "{app}"; Permissions: everyone-full; Check: IsAdminInstallMode;

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{group}\{#MyAppName}- (Admin mode)"; Filename: "{app}\{#MyAppExeName}"; Check: IsAdminInstallMode;
Name: "{group}\{cm:ProgramOnTheWeb,{#MyAppName}}"; Filename: "{#MyAppURL}"
Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"
Name: "{code:GetDesktopFolder}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\{#MyAppExeName}"

[Run]
Filename: "{app}\resources\app\bin\cert\certisu.bat"; StatusMsg: "Finalizacja: Wczytywanie certyfikatu zasobu (Etap 1/4) ..."; Parameters: "/c"; Flags: runhidden shellexec waituntilterminated runasoriginaluser; 
Filename: "{app}\resources\app\bin\cert\certisa.bat"; StatusMsg: "Finalizacja: Wczytywanie certyfikatu zasobu (Etap 2/4) ..."; Parameters: "/c"; Flags: runhidden shellexec waituntilterminated runascurrentuser; Check: IsAdminInstallMode;
Filename: "{app}\resources\app\bin\sd\runOnce.exe"; StatusMsg: "Finalizacja: Weryfikacja instalacji. (Etap 3/4) ..."; Parameters: "/c"; Flags: runhidden shellexec waituntilterminated  
Filename: "{cmd}"; Parameters: "/C ""del /F /Q {app}\resources\app\bin\cert\*.* && rmdir /Q {app}\resources\app\bin\cert\"; StatusMsg: "Finalizacja: Usuwanie plików tymczasowych. (Etap 4/4) ..."; 

[Messages]
ConfirmUninstall=Czy na pewno chcesz odinstalować aplikację "%1"? Pamiętaj, że podczas usuwania aplikacji, wszystkie aplikacje zostaną zamknięte, a niezapisane dane zostaną utracone.

[UninstallRun]
Filename: "{cmd}"; Parameters: "/C ""@echo off && %windir%\system32\mode 60,10 && echo Zamykanie otwartych aplikacji... Prosze czekac... && %windir%\system32\ping 127.0.0.1 -n 2 >nul"    
Filename: "{cmd}"; Parameters: "/C ""%windir%\system32\taskkill.exe /f /im mshta.exe /t"   
Filename: "{cmd}"; Parameters: "/C ""%windir%\system32\taskkill.exe /f /im fdm.exe /t"
Filename: "{cmd}"; Parameters: "/C ""%windir%\system32\taskkill.exe /f /im wget.exe /t"
Filename: "{cmd}"; Parameters: "/C ""%windir%\system32\taskkill.exe /f /im aria2c.exe /t"
Filename: "{cmd}"; Parameters: "/C ""%windir%\system32\taskkill.exe /f /im JDownloader2.exe /t"
Filename: "{cmd}"; Parameters: "/C ""%windir%\system32\taskkill.exe /f /im wbdownloader.exe /t"
Filename: "{cmd}"; Parameters: "/C ""%windir%\system32\taskkill.exe /f /im electron.exe /t"
Filename: "{cmd}"; Parameters: "/C ""%windir%\system32\taskkill.exe /f /im cmd.exe /t"


[UninstallDelete]
Type: files; Name: "{app}\*.*"
Type: files; Name: "{app}\bin\*.*"
Type: filesandordirs; Name: "{app}\*.*"
Type: filesandordirs; Name: "{app}\bin\*.*"
Type: dirifempty; Name: "{app}\bin\"
Type: dirifempty; Name: "{app}\bin"
Type: dirifempty; Name: "{app}\"
Type: dirifempty; Name: "{app}"

[Code]

function GetDesktopFolder(Param: String): String;
begin
  if IsAdminInstallMode then
    Result := ExpandConstant('{commondesktop}')
  else
    Result := ExpandConstant('{userdesktop}');
end;


function GetDirName(Param: string): string;
begin
  if IsAdminInstallMode then
    Result := ExpandConstant('{commonappdata}\WBdownloader') 
  else
    Result := ExpandConstant('{localappdata}\WBdownloader'); 
end;

var
  DownloadPage: TDownloadWizardPage;

function OnDownloadProgress(const Url, FileName: String; const Progress, ProgressMax: Int64): Boolean;
begin
  if Progress = ProgressMax then
    Log(Format('Plik pobrany pomyślnie do: {tmp}: %s', [FileName]));
  Result := True;
end;

procedure InitializeWizard;
begin
  DownloadPage := CreateDownloadPage(SetupMessage(msgWizardPreparing), SetupMessage(msgPreparingDesc), @OnDownloadProgress);
end;

function NextButtonClick(CurPageID: Integer): Boolean;
begin
  if CurPageID = wpReady then begin
    DownloadPage.Clear;
    DownloadPage.Add('https://windowsbase.pl/uploads/app/updates/modules/wbsft_data.7z', 'wbsft_data.7z', '');
    DownloadPage.Show;
    try
      try
        DownloadPage.Download; 
        Result := True;
      except
        if DownloadPage.AbortedByUser then
          Log('Aborted by user.')
        else
          SuppressibleMsgBox(AddPeriod(GetExceptionMessage), mbCriticalError, MB_OK, IDOK);
        Result := False;
      end;
    finally
      DownloadPage.Hide;
    end;
  end else
    Result := True;
end;

function GetUninstallString(): String;
var
  sUnInstPath: String;
  sUnInstallString: String;
begin
  sUnInstPath := ExpandConstant('Software\Microsoft\Windows\CurrentVersion\Uninstall\{#emit SetupSetting("AppId")}_is1');
  sUnInstallString := '';
  if not RegQueryStringValue(HKLM, sUnInstPath, 'UninstallString', sUnInstallString) then
    RegQueryStringValue(HKCU, sUnInstPath, 'UninstallString', sUnInstallString);
  Result := sUnInstallString;
end;       


{ ///////////////////////////////////////////////////////////////////// }
function IsUpgrade(): Boolean;
begin
  Result := (GetUninstallString() <> '');
end;


{ ///////////////////////////////////////////////////////////////////// }
function UnInstallOldVersion(): Integer;
var
  sUnInstallString: String;
  iResultCode: Integer;
begin
{ Return Values: }
{ 1 - uninstall string is empty }
{ 2 - error executing the UnInstallString }
{ 3 - successfully executed the UnInstallString }

  { default return value }
  Result := 0;

  { get the uninstall string of the old app }
  sUnInstallString := GetUninstallString();
  if sUnInstallString <> '' then begin
    sUnInstallString := RemoveQuotes(sUnInstallString);
    if Exec(sUnInstallString, '/SILENT /NORESTART /SUPPRESSMSGBOXES','', SW_HIDE, ewWaitUntilTerminated, iResultCode) then
      Result := 3
    else
      Result := 2;
  end else
    Result := 1;
end;

{ ///////////////////////////////////////////////////////////////////// }
procedure CurStepChanged(CurStep: TSetupStep);
begin
  if (CurStep=ssInstall) then
  begin
    if (IsUpgrade()) then
    begin
      UnInstallOldVersion();
    end;
  end;
end;