@echo off
whoami /user>nul 2>nul || goto :eof
setlocal
set "tempfile=%temp%\tempfile.txt"
set "userfile=user.txt"
set "adminsid="
set "jacksid="
set "piratessid="
set "securityname="
for /f "tokens=1-3 delims=-" %%a in ('whoami /user /fo:list ^| findstr /i /c:"SID="') do (
   if "%%c"=="4" set "adminsid=%%a-%%b-%%c"
)
for /f "tokens=1-3 delims=-" %%a in ('wmic useraccount where name="JackVorobey" get sid /value ^| findstr /i /c:"SID="') do (
   if "%%c"=="4" set "jacksid=%%a-%%b-%%c"
)
for /f "tokens=1-3 delims=-" %%a in ('wmic group where name="PIRATES" get sid /value ^| findstr /i /c:"SID="') do (
   if "%%c"=="4" set "piratessid=%%a-%%b-%%c"
)
for /f "tokens=2 delims==" %%a in ('wmic useraccount where sid="S-1-1-0" get name /value ^| findstr /i /c:"name="') do (
   set "securityname=%%a"
)
echo Admin SID: %adminsid%>>"%tempfile%"
echo JackVorobey SID: %jacksid%>>"%tempfile%"
echo PIRATES SID: %piratessid%>>"%tempfile%"
echo Security member name with SID S-1-1-0: %securityname%>>"%tempfile%"
move /y "%tempfile%" "%userfile%" >nul 2>nul
endlocal
