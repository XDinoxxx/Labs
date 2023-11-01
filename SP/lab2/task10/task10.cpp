#include <windows.h> 
#include <iostream> 

using namespace std;

CRITICAL_SECTION cs; // Критическая секция

DWORD WINAPI WorkerThread(LPVOID param)
{
    while (true)
    {
        EnterCriticalSection(&cs); // Входим в критическую секцию
        for (int i = 0; i < 25; i++) {
            cout << i << " ";
        }
        cout << *((int*)param) << " ";
        LeaveCriticalSection(&cs); // Покидаем критическую секцию
        Sleep(1000);
    }
}

int main()
{
    HANDLE hThread1, hThread2;
    DWORD ThreadID1, ThreadID2;
    DWORD Num1 = 1, Num2 = 2;

    InitializeCriticalSection(&cs); // Инициализация критической секции

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
        EnterCriticalSection(&cs); // Входим в критическую секцию
        cout << 0 << endl;
        LeaveCriticalSection(&cs); // Покидаем критическую секцию
        Sleep(1000); // Добавляем задержку в 1 секунду, чтобы можно было наблюдать работу всех потоков 
    }

    CloseHandle(hThread1);
    CloseHandle(hThread2);
    DeleteCriticalSection(&cs); // Удаляем критическую секцию
    return 0;
}
