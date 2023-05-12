#include <Windows.h>
#include <iostream>
#include <string>
#include <thread>

using namespace std;

void playSound() {
    while (true) {
        Beep(500, 500);
        Sleep(1000);
    }
}

void writeFile(HANDLE file) {
    string message = "Hello, world!";
    DWORD bytesWritten;
    WriteFile(file, message.c_str(), (DWORD)message.length(), &bytesWritten, NULL);
}

int main() {
    HANDLE soundThread = CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)playSound, NULL, 0, NULL);
    HANDLE file = CreateFile((LPCWSTR)L"D:\\GitHub\\Labs\\OS\\lab3.2user\\lab3.2user\\output.txt", GENERIC_READ | GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);
    writeFile(file);
    DuplicateHandle(GetCurrentProcess(), file, GetCurrentProcess(), &file, 0, FALSE, DUPLICATE_SAME_ACCESS);
    CloseHandle(file);
    return 0;
}