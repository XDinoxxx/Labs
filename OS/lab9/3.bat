@echo off
<nul set /p x=>D:\Labs\OS\lab9\user.txt
echo SID of the current user (administrator) > D:\Labs\OS\lab9\user.txt 
whoami /user >> D:\Labs\OS\lab9\user.txt
echo JackVorobey's SID >> D:\Labs\OS\lab9\user.txt
wmic useraccount where name="JackVorobey" get sid /value >> D:\Labs\OS\lab9\user.txt
echo PIRATES Group SID >> D:\Labs\OS\lab9\user.txt
wmic group where name="PIRATES" get sid /value >> D:\Labs\OS\lab9\user.txt 
echo Security principal name with SID: S-1-1-0 >> D:\Labs\OS\lab9\user.txt 
wmic useraccount where sid="S-1-1-0" get name /value>> D:\Labs\OS\lab9\user.txt 
