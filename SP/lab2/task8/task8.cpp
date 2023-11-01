#include <iostream>
#include <Windows.h>


using namespace std;

DWORD WINAPI WorkerThread(LPVOID param)
{
    while (true)
    {
        cout << *((int*)param) << " ";
        Sleep(1000);
    }
}

int main()
{
	setlocale(LC_ALL, "ru");
	
    HANDLE hThread1, hThread2, hThread3;
    DWORD ThreadID1, ThreadID2, ThreadID3;
    DWORD Num1 = 1, Num2 = 2, Num3 = 3;

    hThread1 = CreateThread(NULL, 0, WorkerThread, (void*)&Num1, 0, &ThreadID1);
    if (hThread1 == NULL)
    {
        cout << "Ошибка создания потока 1: " << GetLastError() << endl;
        system("pause");
        return -1;
    }

    hThread2 = CreateThread(NULL, 0, WorkerThread, (void*)&Num2, 0, &ThreadID2);
    if (hThread2 == NULL)
    {
        cout << "Ошибка создания потока 2: " << GetLastError() << endl;
        system("pause");
        return -1;
    }

    hThread3 = CreateThread(NULL, 0, WorkerThread, (void*)&Num2, 0, &ThreadID3);
    if (hThread1 == NULL)
    {
        cout << "Ошибка создания потока 3: " << GetLastError() << endl;
        system("pause");
        return -1;
    }

    while (true)
    {
        cout << 0 << " ";
        Sleep(1000); // Добавляем задержку в 1 секунду, чтобы можно было наблюдать работу всех потоков
    }

    CloseHandle(hThread1);
    CloseHandle(hThread2);
    CloseHandle(hThread3);

	return 0;
}


