#include <iostream>
#include <fstream>
#include <cmath>
#include <vector>

using namespace std;

const double PI = 3.14159;

// аналитическая функция
double f(double x)
{
    return sin(2 * PI * x) / (1 + x);
}

// многочлен Лагранжа
double lagrange(int n, const vector<double>& x, const vector<double>& y, double x0)
{
    double result = 0.0;

    // вычисляем многочлен Лагранжа для заданной точки x0
    for (int i = 0; i <= n; i++)
    {
        double li = 1.0;

        for (int j = 0; j <= n; j++)
        {
            if (j != i)
            {
                li *= (x0 - x[j]) / (x[i] - x[j]);
            }
        }

        result += y[i] * li;
    }

    return result;
}

// разделенные разности
double divided_difference(int n, const vector<double>& x, const vector<double>& y, int i, int j)
{
    if (j == 0)
    {
        return y[i];
    }

    return (divided_difference(n, x, y, i + 1, j - 1) - divided_difference(n, x, y, i, j - 1)) / (x[i + j] - x[i]);
}

// многочлен Ньютона
double newton(int n, const vector<double>& x, const vector<double>& y, double x0)
{
    double result = y[0];
    double temp = 1.0;

    // вычисляем многочлен Ньютона для заданной точки x0
    for (int i = 1; i <= n; i++)
    {
        temp *= (x0 - x[i - 1]);
        result += temp * divided_difference(i - 1, x, y, 0, i - 1);
    }

    return result;
}

int main()
{
    setlocale(LC_ALL, "ru");
    double a = 0.0, b = 2.0, h = 0.1;
    int n = (b - a) / h + 1;
    vector<double> x(n), y(n);
    vector<double> x0 = { 0.25, 1.0, 1.75 };

    // получаем таблицу значений функции на отрезке [a, b] с шагом h
    for (int i = 0; i < n; i++)
    {
        x[i] = a + i * h;
        y[i] = f(x[i]);
    }

    // вычисляем значения функции в заданных точках с помощью многочлена Лагранжа
    cout << "Значения функции в точках x:" << endl;
    for (int i = 0; i < 3; i++)
    {
        double y0 = lagrange(4, x, y, x0[i]);
        cout << "f(" << x0[i] << ") = " << y0 << endl;
    }

    cout << endl;

    // вычисляем значения функции в заданных точках с помощью многочлена Ньютона
    cout << "Значения функции в точках x:" << endl;
    for (int i = 0; i < 3; i++)
    {
        double y0 = newton(4, x, y, x0[i]);
        cout << "f(" << x0[i] << ") = " << y0 << endl;
    }

    return 0;
}
