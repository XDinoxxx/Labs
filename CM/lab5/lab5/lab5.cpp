#include <iostream>
#include <cmath>
#include <vector>

using namespace std;

// Исходная функция
double func(double x)
{
    return x * pow(2, x) - 1;
}

// Многочлен Лагранжа степени 3
double lagrange(vector<double> x, vector<double> y, int n, double val)
{
    double sum = 0;

    for (int i = 0; i <= n; i++)
    {
        double prod = y[i];

        for (int j = 0; j <= n; j++)
        {
            if (j != i)
            {
                prod *= (val - x[j]) / (x[i] - x[j]);
            }
        }

        sum += prod;
    }

    return sum;
}

// Многочлен Ньютона степени 2
double newton(vector<double> x, vector<double> y, double xx)
{
    int n = x.size();
    vector<double> F(n);
    for (int i = 0; i < n; i++) {
        F[i] = y[i];
    }
    for (int j = 1; j < n; j++) {
        for (int i = n - 1; i >= j; i--) {
            F[i] = (F[i] - F[i - 1]) / (x[i] - x[i - j]);
        }
    }

    // Ищем значение функции в точке 
    double sum = F[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        sum = sum * (xx - x[i]) + F[i];
    }

    return sum;
}


int main()
{
    setlocale(LC_ALL, "ru");
    double a = 1; // Начало отрезка
    double b = 2; // Конец отрезка
    double h = 0.2; // Шаг
    double x1 = 1.17; // Первая точка для интерполяции
    double x2 = 1.34; // Вторая точка для интерполяции
    double x3 = 1.74; // Третья точка для интерполяции

    int n = (int)round((b - a) / h) + 1; // Количество точек
    vector<double> x(n), y(n);

    // Заполнение таблицы значений функции
    for (int i = 0; i < n; i++)
    {
        x[i] = a + h * i;
        y[i] = func(x[i]);
    }

    // Вывод таблицы значений функции
    cout << "Таблица значений функции:" << endl;
    for (int i = 0; i < n; i++)
    {
        cout << "x = " << x[i] << "\t y = " << y[i] << endl;
    }
    cout << endl;

    // Проверка
    double yaL = lagrange(x, y, 3, a);
    double yaN = newton(x, y, a);
    
    cout << "Значение функции в x = " << a << " (многочлен Лагранжа степени 3): " << yaL << endl;
    cout << "Значение функции в x = " << a << " (многочлен Ньютона степени 2): " << yaN << endl;

    cout << endl;

    // Вычисление значения функции в первой точке интерполяции
    double y1L = lagrange(x, y, 3, x1);
    double y1N = newton(x, y, x1);
    cout << "Значение функции в x = " << x1 << " (многочлен Лагранжа степени 3): " << y1L << endl;
    cout << "Значение функции в x = " << x1 << " (многочлен Ньютона степени 2): " << y1N << endl;
    cout << endl;

    // Вычисление значения функции во второй точке интерполяции
    double y2L = lagrange(x, y, 3, x2);
    double y2N = newton(x, y, x2);
    cout << "Значение функции в x = " << x2 << " (многочлен Лагранжа степени 3): " << y2L << endl;
    cout << "Значение функции в x = " << x2 << " (многочлен Ньютона степени 2): " << y2N << endl;
    cout << endl;

    // Вычисление значения функции в третьей точке интерполяции
    double y3L = lagrange(x, y, 3, x3);
    double y3N = newton(x, y, x3);
    cout << "Значение функции в x = " << x3 << " (многочлен Лагранжа степени 3): " << y3L << endl;
    cout << "Значение функции в x = " << x3 << " (многочлен Ньютона степени 2): " << y3N << endl;

    return 0;
}
