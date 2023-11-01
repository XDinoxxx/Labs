#include <iostream>
#include <Windows.h>

using namespace std;

int main() {

	LPCWSTR exucatabelPath = L"D:\\Prog\\7-Zip\\7zFM.exe";
	LPCWSTR archivePath = L"D:\\Labs\\SP\\lab2\\7.zip";

	ShellExecute(NULL, NULL, exucatabelPath, archivePath, NULL, SW_SHOWDEFAULT);

	return 0;
}
