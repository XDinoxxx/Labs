#include <iostream>
#include <Windows.h>

using namespace std;

int priority() {
    system("cls");
    cout << "1. HIGH_PRIORITY_CLASS - Процесс, выполняющий срочные задачи, которые должны быть выполнены немедленно" << endl
        << "2. IDLE_PRIORITY_CLASS - Процесс, потоки которого выполняются только во время простоя системы" << endl
        << "3. NORMAL_PRIORITY_CLASS - Процесс без необходимости специального планирования" << endl
        << "4. REALTIME_PRIORITY_CLASS - Процесс, имеющий максимально возможный приоритет" << endl
        << "5. BELOW_NORMAL_PRIORITY_CLASS - Процесс с приоритетом выше IDLE_PRIORITY_CLASS , но ниже NORMAL_PRIORITY_CLASS " << endl
        << "6. ABOVE_NORMAL_PRIORITY_CLASS - Процесс с приоритетом выше NORMAL_PRIORITY_CLASS , но ниже HIGH_PRIORITY_CLASS" << endl;

    cout << "Выберите число " << endl;
    int number;
    cin >> number;

    switch (number)
    {
    case 1:
        return HIGH_PRIORITY_CLASS;
    case 2:
        return IDLE_PRIORITY_CLASS;
    case 3:
        return NORMAL_PRIORITY_CLASS;
    case 4:
        return REALTIME_PRIORITY_CLASS;
    case 5:
        return BELOW_NORMAL_PRIORITY_CLASS;
    case 6:
        return ABOVE_NORMAL_PRIORITY_CLASS;
    default:
        break;
    }
}

int main() {
    setlocale(LC_ALL, "ru");

    cout << "Перед выполнением всех требований пожалуйста сделайте следующие действия: " << endl
        << "1. Откройте диспетчер задач " << endl
        << "2. Зайдите во вкладку \"Подробности\"" << endl
        << "3. В этой вкладке найдите 2 процесса, первый вы завершите, а второму измените приоритет " << endl
        << "Сейчас будет выведен список всех процессов!" << endl << endl;

    system("pause");
    system("cls");

    system("C:\\Windows\\System32\\tasklist.exe");
    

    system("pause");


    DWORD pid;
    cout << "Введите PID процесса: ";
    cin >> pid;


    HANDLE hProcess = OpenProcess(PROCESS_TERMINATE | PROCESS_QUERY_INFORMATION | PROCESS_SET_INFORMATION, FALSE, pid);
    if (hProcess == NULL) {
        cout << "Не удалось открыть процесс. Код ошибки: " << GetLastError() << endl;
        return 1;
    }

    if (!TerminateProcess(hProcess, 0)) {
        cout << "Не удалось завершить процесс. Код ошибки: " << GetLastError() << endl;
        CloseHandle(hProcess);
        return 1;
    }

    DWORD exitCode;
    if (!GetExitCodeProcess(hProcess, &exitCode)) {
        cout << "Не удалось получить код завершения процесса. Код ошибки: " << GetLastError() << endl;
        CloseHandle(hProcess);
        return 1;
    }

    if (exitCode == STILL_ACTIVE) {
        cout << "Процесс еще не завершился." << endl;
    }
    else {
        cout << "Процесс завершился с кодом: " << exitCode << endl;
    }


    CloseHandle(hProcess);

    DWORD pid2;
    cout << "Введите PID процесса которому надо изменить приоритет: ";
    cin >> pid2;


    HANDLE hProcess2 = OpenProcess(PROCESS_TERMINATE | PROCESS_QUERY_INFORMATION | PROCESS_SET_INFORMATION, FALSE, pid2);
    if (hProcess2 == NULL) {
        cout << "Не удалось открыть процесс. Код ошибки: " << GetLastError() << endl;
        return 1;
    }

    if (!SetPriorityClass(hProcess2, priority())) {
        cout << "Не удалось задать приоритет данному процессу. Код ошибки " << GetLastError() << endl;
        return 1;
    }

    DWORD exitCode1;
    if (!GetExitCodeProcess(hProcess2, &exitCode1)) {
        cout << "Не удалось получить код завершения процесса. Код ошибки: " << GetLastError() << endl;
        CloseHandle(hProcess2);
        return 1;
    }

    if (exitCode1 == STILL_ACTIVE) {
        cout << "Процесс еще не завершился." << endl;
    }
    else {
        cout << "Процесс завершился с кодом: " << exitCode1 << endl;
    }

    CloseHandle(hProcess2);

    system("pause");


    return 0;
}