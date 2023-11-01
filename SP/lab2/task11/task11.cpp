#include <windows.h> 
#include <iostream> 

using namespace std;

HANDLE mutex;

DWORD WINAPI WorkerThread(LPVOID param)
{
    while (true)
    {
        WaitForSingleObject(mutex, INFINITE);
        for (int i = 0; i < 25; i++) {
            cout << i << " ";
        }
        cout << *((int*)param) << " ";
        ReleaseMutex(mutex);
        Sleep(1000);
    }
}

int main()
{
    HANDLE hThread1, hThread2;
    DWORD ThreadID1, ThreadID2;
    DWORD Num1 = 1, Num2 = 2;

    mutex = CreateMutex(NULL, FALSE, NULL);

    if (mutex == NULL) 
    {
        cout << "Ошибка создания мьютекса: " << GetLastError() << endl;
        return -1;
    }

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

    while (true)
    {
        WaitForSingleObject(mutex, INFINITE);
        cout << 0 << endl;
        ReleaseMutex(mutex);
        Sleep(1000); // Добавляем задержку в 1 секунду, чтобы можно было наблюдать работу всех потоков 
    }

    CloseHandle(hThread1);
    CloseHandle(hThread2);
    CloseHandle(mutex);
    return 0;
}
