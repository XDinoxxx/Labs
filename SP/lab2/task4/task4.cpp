#include <iostream>
#include <Windows.h>

using namespace std;

int main() {

	LPCWSTR exutablePath = L"C:\\Windows\\Temp";

	ShellExecute(NULL, NULL, exutablePath, NULL, NULL, SW_SHOWDEFAULT);

	return 0;
}