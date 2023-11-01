#include <windows.h>
#include <stdio.h>
#include <tchar.h>
#include <iostream>

using namespace std;

int _tmain(int argc, TCHAR* argv[])
{
    STARTUPINFO si;
    PROCESS_INFORMATION pi;
    ZeroMemory(&si, sizeof(si));
    si.cb = sizeof(si);
    ZeroMemory(&pi, sizeof(pi));


    WCHAR lpszAppName[] = L"D:\Prog\Visual Studio Code\Microsoft VS Code\Code.exe";
    if (!CreateProcess(lpszAppName, NULL, NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi)) {
        int error = GetLastError();
        cerr << "Create process failed with code: " << error << endl;
        return -1;
    }
}