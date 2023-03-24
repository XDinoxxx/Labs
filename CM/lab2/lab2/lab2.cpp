﻿#include <iostream>
#include <cmath>

using namespace std;

// Определение уравнения
double f(double x) {
    return x * x * x - 5 * x + 1;
}

// Производная уравнения
double df(double x) {
    return 3 * x * x - 5;
}

// Определение функции для метода простой итерации
double g(double x) {
    return x - f(x) / df(x);
}

int main() {

    setlocale(LC_ALL, "ru");

    double x0 = 0.5; // начальное приближение
    double x1 = g(x0); // первое приближение
    double eps = 0.001; // точность
    int n = 0; // число итераций
    double error = x1 - x0; // погрешность

    // Проверка условия сходимости МПИ
    if (abs(df(x0)) > 1) {
        cout << "Условие сходимости МПИ не выполнено!" << endl;
    }

    // Итерационный процесс
    while (abs(error) >= eps) {
        x0 = x1;
        x1 = g(x0);
        error = x1 - x0;
        n++;
    }

    // Вывод результатов
    cout << "Корень уравнения: " << x1 << endl;
    cout << "Число итераций: " << n << endl;
    cout << "Оценка погрешности: " << abs(error) << endl;

    return 0;
}