#include <iostream>
#include <cmath>

using namespace std;

const double eps = 0.001; // точность решения
const int max_iter = 1000; // максимальное число итераций

// функции системы уравнений
double f1(double x, double y) {
    return sin(y) + 2 * x - 2;
}

double f2(double x, double y) {
    return cos(x - 1) + y - 0.7;
}

// Частные производные
double df1_dx(double x, double y) {
    return 2;
}

double df1_dy(double x, double y) {
    return cos(y);
}

double df2_dx(double x, double y) {
    return -sin(x - 1);
}

double df2_dy(double x, double y) {
    return 1;
}



void newtonMethod() {
    double x = 1, y = 1; // Начальное приближение
    double eps = 0.001; // Точность решения
    int n = 0; // Число итераций
    double dx, dy; // Инкремент
    double err; // Погрешность

    do {
        double J = df1_dx(x, y) * df2_dy(x, y) - df2_dx(x, y) * df1_dy(x, y); // Вычисляем якобиан
        dx = (-f2(x, y) * df1_dy(x, y) + f1(x, y) * df2_dy(x, y)) / J; // Вычисляем инкремент для x
        dy = (f2(x, y) * df1_dx(x, y) - f1(x, y) * df2_dx(x, y)) / J; // Вычисляем инкремент для y
        x += dx;
        y += dy;
        err = sqrt(pow(dx, 2) + pow(dy, 2)); // Вычисляем погрешность решения
        n++;
    } while (err >= eps);

    cout << "Решение системы нелинейных уравнений: " << endl;
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
    cout << "Число итераций: " << n << endl;
    cout << "Погрешность решения: " << err << endl;
}

void iterationMethod() {
    double x = 1, y = 1; // Начальное приближение
    double eps = 0.001; // Точность решения
    int n = 0; // Число итераций
    double nx, ny; // Новое приближение
    double err; // Погрешность

    do {
        nx = (2 - sin(y)) / 2; // Вычисляем новое приближение для x
        ny = 0.7 - cos(x - 1); // Вычисляем новое приближение для y
        err = sqrt(pow(nx - x, 2) + pow(ny - y, 2)); // Вычисляем погрешность решения
        x = nx;
        y = ny;
        n++;
    } while (err >= eps);

    cout << "Решение системы нелинейных уравнений: " << endl;
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
    cout << "Число итераций: " << n << endl;
    cout << "Погрешность решения: " << err << endl;
}

int main() {
    setlocale(LC_ALL, "ru");

    cout << "Метод Ньютона" << endl;

    newtonMethod();
    
    cout << endl << "Итерационный метод" << endl;

    iterationMethod();


    return 0;
}