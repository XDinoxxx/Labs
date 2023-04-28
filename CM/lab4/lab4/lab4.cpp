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
    double x = 0, y = 1;
    int counter = 0;
    double dx, dy;

    while (1) {
        double J11 = df1_dx(x,y);
        double J12 = df1_dy(x,y);
        double J21 = df2_dx(x, y);
        double J22 = df2_dy(x, y);

        double detJ = J11 * J22 - J12 * J21;

        dx = (J22 * (-f1(x, y)) - J12 * (-f2(x, y))) / detJ;
        dy = (J11 * (-f2(x, y)) - J21 * (-f1(x, y))) / detJ;

        x += dx;
        y += dy;
        counter++;

        if (abs(dx) < eps && abs(dy) < eps)
        {
            cout << "Решение системы нелинейных уравнений: " << endl;
            cout << "x = " << x << endl;
            cout << "y = " << y << endl;
            cout << "Число итераций: " << counter << endl;
            return;
        }
    }
}

void iterationMethod() {
    double x = 0, y = 1; // Начальное приближение
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