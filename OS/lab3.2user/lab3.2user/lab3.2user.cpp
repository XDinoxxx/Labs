#include <Windows.h>
#include <iostream>
#include <string>

using namespace std;

int main() {
    HANDLE file = CreateFile((LPCWSTR)L"output.txt", GENERIC_READ, 0, NULL, OPEN_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);

    if (file == INVALID_HANDLE_VALUE) {
        cout << "Unable to open file" << endl;
        return 1;
    }
    char buffer[13];
    DWORD bytesRead;
    ReadFile(file, buffer, 13, &bytesRead, NULL);

    string buf = buffer;
    for (int i = 0; i < 13; i++) {
        cout << buf[i];
    }
  
    CloseHandle(file);
    return 0;
}