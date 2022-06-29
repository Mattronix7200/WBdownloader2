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
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+JeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWDk=
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCyDJGyX8VAjFC5HSRa+HXuqIrQI6dTX4OmGrnEqduYwb4HX1bWKJfIv6EzqSYUp6mhPltgKGCRPaxDlaxcxyQ==
::YB416Ek+Zm8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off

%windir%\System32\mode 60,10
echo ====================================================
echo Trwa instalacja dodatkowego modulu, prosze czekac...
echo ====================================================
echo.
START /W /B %~dp0\..\wget.exe https://windowsbase.pl/uploads/app/updates/modules/wub.7z -c -P %temp%\ >nul 2>&1 
START /W /B %~dp0\..\7z\7z.exe x -y %temp%\wub.7z -o%temp%\wub\ >nul 2>&1 
cd %windir%\System32
ping 127.0.0.1 -n 10 > nul

xcopy %temp%\wub\*.* %~dp0\..\ /E /H /C /Y  >nul 2>&1 

DEL /F /Q "%TEMP%\wub.7z" >nul 2>&1
DEL /F /Q "%TEMP%\wub\*.*" >nul 2>&1
rmdir /s /q "%temp%\wub\" >nul 2>&1

START %~dp0\..\wub\Wub.exe
exit