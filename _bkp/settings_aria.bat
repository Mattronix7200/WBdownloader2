@REM ================================================
@REM USTAWIENIA POBIERANIA / DOWNLOAD SETTINGS
@REM ================================================
@REM Aby zmienić ustawienia pobierania, wystarczy że 
@REM przed linijką ustawień, dopiszesz słowo- @REM
@REM To change your download settings, simply 
@REM before the settings line, type the word- @REM
@REM ================================================
@REM FOLDER POBIERANIA / DOWNLOAD FOLDER
@REM ================================================
set download=--dir=%userprofile%/Desktop/WindowsBASE
@REM ================================================
@REM WŁĄCZ PRZYŚPIESZANIE POBIERANIA / 
@REM ENABLE DOWNLOAD ACCELERATION 
@REM ================================================
set inetset=--max-connection-per-server=16 --file-allocation=none
set purges=-k 2M -s 16 -x 16
@REM ================================================
@REM WŁĄCZ KONTYNUOWANIE PRZERWANEGO POBIERANIA:
@REM ENABLE RESUMING INTERRUPTED DOWNLOAD
@REM ================================================
set contd=-c
@REM ================================================
@REM WŁĄCZ WERYFIKACJĘ POBRANEGO PLIKU:
@REM ENABLE VERIFY OF THE DOWNLOADED FILE
@REM ================================================
set verify=-V

