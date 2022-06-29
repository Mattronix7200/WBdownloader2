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
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDACNK2W2CbQY1+L/jw==
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQIcIRVfDAyHMHu/FPUR5+zu4+/n
::dhA7uBVwLU+EWG6N+kY/Pwh2bTencnu2Zg==
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATEw0s+LBRDXyajD070Frl8
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCyDJGyX8VAjFC5HSRa+HXuqIrQI6dTX4OmGrnEqduYwb4HX1bWKJfIv6EzqSZIiwXRWl8oIMxFcMBeza28=
::YB416Ek+Zm8=
::
::
::978f952a14a936cc963da21a135fa983
@ECHO OFF
cd /d %~dp0

FOR /F "tokens=* USEBACKQ" %%F IN (`winclip.exe -p`) DO (SET clipboardText=%%F)
ECHO %clipboardText%

cd /d %~dp0/jd

start cmd.exe /c "JDownloader2.exe %clipboardText%"
exit
