@echo off
net user CaptainBlack 1703 /add /active:yes /fullname:"Captain Black" /comment:"User Account for Captain Black" /expires:never
echo List total local user:
net user
echo List of users logged in:
C:\Users\user\Documents\PSTools\PsLoggedon.exe
