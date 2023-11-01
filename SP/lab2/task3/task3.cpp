#include <iostream>
#include <Windows.h>

using namespace std;

int main() {

	LPCWSTR exutablePath = L"D:\\Prog\\Visual Studio Code\\Microsoft VS Code\\Code.exe";
	LPCWSTR folderPath = L"D:\\Labs\\Web\\lab9";

	ShellExecute(NULL, NULL, exutablePath, folderPath, NULL, SW_SHOWDEFAULT);

	return 0;
}