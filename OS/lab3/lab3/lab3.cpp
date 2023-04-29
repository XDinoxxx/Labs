#include <iostream>
#include <Windows.h>

int main()
{
    HANDLE hKernelObject = CreateMutex(NULL, FALSE, NULL);
    if (hKernelObject == NULL)
    {
        std::cout << "Failed to create kernel object. Error code: " << GetLastError() << std::endl;
        return 1;
    }

    DWORD flags;
    if (GetHandleInformation(hKernelObject, &flags))
    {
        std::cout << "Handle is inheritable: " << ((flags & HANDLE_FLAG_INHERIT) ? "true" : "false") << std::endl;
    }
    else
    {
        std::cout << "Failed to get handle information. Error code: " << GetLastError() << std::endl;
    }

    DWORD count;
    if (GetProcessHandleCount(GetCurrentProcess(), &count))
    {
        std::cout << "Number of handles in the process: " << count << std::endl;
    }
    else
    {
        std::cout << "Failed to get handle count. Error code: " << GetLastError() << std::endl;
    }

    SetHandleInformation(hKernelObject, HANDLE_FLAG_INHERIT, HANDLE_FLAG_INHERIT);

    if (GetHandleInformation(hKernelObject, &flags))
    {
        std::cout << "Handle is inheritable: " << ((flags & HANDLE_FLAG_INHERIT) ? "true" : "false") << std::endl;
    }
    else
    {
        std::cout << "Failed to get handle information. Error code: " << GetLastError() << std::endl;
    }

    CloseHandle(hKernelObject);

    return 0;
}