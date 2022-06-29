::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGyX8VAjFC5HSRa+GG6pDaET+NTy7OWJ8QMUV+1f
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpSI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJiZksaHErSXA==
::ZQ05rAF9IBncCkqN+0xwdVsGAlTMbCXqZg==
::ZQ05rAF9IAHYFVzEqQIDLQ9BXESPM2+vCrB8
::eg0/rx1wNQPfEVWB+kM9LVsJDA2ML3+7CrkZ+og=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQIZJghATQiOfGq0RqAM7Onv6qqBq0EYR4I=
::dhA7uBVwLU+EWG6N+kY/Pwh2bTencnu2Zg==
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATEw0s+LBRDXyajD070Frl8
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCyDJGyX8VAjFC5HSRa+HXuqIrQI6dTX4OmGrnEqduYwb4HX1bWKJfIv6EzqSZ8jxW5blMcJHlVdZhfL
::YB416Ek+Zm8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
@chcp 1250 >nul 2>&1  
%windir%\system32\mode 60,10

if '%appRun%'=='1' goto UPDATEAPP
if '%dbRun%'=='2' goto UPDATEDB

:UPDATEDB
echo ==========================================
echo Aktualizator programu- Menedzer pobierania
echo ==========================================
echo.
echo Trwa aktualizacja bazy danych, 
echo prosze czekac...
echo.
start /w /b powershell -Command "(New-Object Net.WebClient).DownloadFile('https://windowsbase.pl/uploads/app/updates/dbv.txt', 'dbv.txt')"
for /f "tokens=*" %%A in (dbv.txt) do (
FOR /F %%i IN (%~dp0\..\data\dbv.txt) DO @echo "Wersja: %%i ==> Wersja: %%A"
DEL %~dp0dbv.txt >nul 2>&1 
DEL %~dp0\..\..\..\dbv.txt >nul 2>&1 
)
echo.
echo ------------------------------------------
del %~dp0\..\data\mydata.js >nul 2>&1  
del %~dp0\..\data\dbv.txt >nul 2>&1  
START /W /B %~dp0\..\bin\wget.exe https://windowsbase.pl/uploads/app/updates/mydata.js -c -P %~dp0\..\data\ >nul 2>&1  
START /W /B %~dp0\..\bin\wget.exe https://windowsbase.pl/uploads/app/updates/dbv.txt -c -P %~dp0\..\data\ >nul 2>&1  
cls
echo Gotowe, program uruchomi sie w ciagu 5 sekund
echo. 
ping 127.0.0.1 -n 5 >nul 2>&1 
start %~dp0\runapp.exe
%windir%\system32\taskkill.exe /f /pid cmd.exe 
exit


:UPDATEAPP
cls
echo ==========================================
echo Aktualizator programu- Menedzer pobierania
echo ==========================================
echo.
echo Trwa aktualizacja programu, 
echo prosze czekac...
echo.
start /w /b powershell -Command "(New-Object Net.WebClient).DownloadFile('https://windowsbase.pl/uploads/app/updates/appv.txt', 'appv.txt')"
for /f "tokens=*" %%B in (appv.txt) do (
FOR /F %%k IN (%~dp0\..\data\appv.txt) DO @echo "Wersja: %%k ==> Wersja: %%B"
DEL %~dp0appv.txt >nul 2>&1 
DEL %~dp0\..\..\..\appv.txt >nul 2>&1 
)
echo.
echo ------------------------------------------
del %~dp0\..\data\appv.txt >nul 2>&1  
START /W /B %~dp0\..\bin\wget.exe https://windowsbase.pl/uploads/app/updates/appv.txt -c -P %~dp0\..\data\ >nul 2>&1  
START /W /B %~dp0\..\bin\wget.exe https://windowsbase.pl/uploads/app/updates/update_v2.7z -c -P %temp%\ >nul 2>&1 
ping 127.0.0.1 -n 5 >nul 2>&1  
CALL %~dp0\extractor.exe >nul 2>&1  
ping 127.0.0.1 -n 5 >nul 2>&1  
cd %windir%\System32 >nul 2>&1  
xcopy %temp%\wbd\*.* %~dp0\..\..\..\ /E /H /C /Y >nul 2>&1  
ping 127.0.0.1 -n 5 >nul 2>&1  
DEL /F /Q "%TEMP%\update_v2.7z" >nul 2>&1
DEL /F /Q "%TEMP%\wbd\*.*" >nul 2>&1
RD /S /Q "%TEMP%\wbd\" >nul 2>&1
cls
echo Gotowe, program uruchomi sie w ciagu 5 sekund
echo. 
ping 127.0.0.1 -n 5 >nul 2>&1 
start %~dp0\runapp.exe
%windir%\system32\taskkill.exe /f /pid cmd.exe 
exit