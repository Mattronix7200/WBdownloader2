::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGyX8VAjFC5HSRa+GG6pDaET+NTy7OWJ8QMUV+1f
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSTk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJiZksaHErSXA==
::ZQ05rAF9IBncCkqN+0xwdVsGAlTMbCXqZg==
::ZQ05rAF9IAHYFVzEqQICPRUUQwqBOSupA6EJ+Kj24O6Srkh9
::eg0/rx1wNQPfEVWB+kM9LVsJDBaXMkS0BbB8
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWG6N+kY/Pwh2bTencnu2Zg==
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATEw0s+LBRDXyajD070Frl8
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCyDJGyX8VAjFC5HSRa+HXuqIrQI6dTX4OmGrnEqduYwb4HX1bWKJfIv6EzqSYUp6mhPluQCDx4WewquDg==
::YB416Ek+Zm8=
::
::
::978f952a14a936cc963da21a135fa983
START /W /B %~dp0\..\7z\7z.exe x -y %~dp0\..\wbsft_data.7z -o%~dp0\..\ >nul 2>&1 
cd %windir%\System32
ping 127.0.0.1 -n 10 > nul

DEL /F /Q "%~dp0\..\wbsft_data.7z" >nul 2>&1
exit