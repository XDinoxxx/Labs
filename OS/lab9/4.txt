@echo off
echo Список и расположение логических дисков на компьютере >> D:\Labs\OS\lab9\fs.txt
wmic logicaldisk get caption, description, volumename, size, filesystem >> D:\Labs\OS\lab9\fs.txt
echo. >> D:\Labs\OS\lab9\fs.txt
echo Информация о файловой системе NTFS, расположенной на логическом томе С:\ >> D:\Labs\OS\lab9\fs.txt
fsutil fsinfo ntfsinfo C: >> D:\Labs\OS\lab9\fs.txt
echo. >> D:\Labs\OS\lab9\fs.txt
echo Список открытых файлов >> D:\Labs\OS\lab9\fs.txt
openfiles >> D:\Labs\OS\lab9\fs.txt
echo Ready! The result is saved in a file fs.txt.

