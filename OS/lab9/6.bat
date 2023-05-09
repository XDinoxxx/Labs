@echo off
echo Access control list for a file 1.txt:
icacls D:\Labs\OS\lab9\1.txt


echo Granting rights to a user JackVorobey...
icacls D:\Labs\OS\lab9\1.txt /grant JackVorobey:(w)


echo Granting rights to a group PIRATES...
icacls D:\Labs\OS\lab9\1.txt /grant PIRATES:(f)