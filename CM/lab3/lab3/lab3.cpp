#include <iostream>
#include <cmath>

using namespace std;

double f(double x) {
    return x - sin(x) - 0.25; // здесь задайте ваше уравнение
}

double df(double x) {
    return 1 - cos(x); // здесь задайте производную вашего уравнения
}

void newtonMethod() {
    double x0 = 1; // начальное приближение
    double eps = 0.001; // заданная точность
    double x = x0;
    double fx = f(x);
    double dfx = df(x);
    int iter = 0;
    while (abs(fx) > eps) {
        x = x - fx / dfx;
        fx = f(x);
        dfx = df(x);
        iter++;
        if (iter > 1000) { // проверка на сходимость
            cout << "Метод Ньютона не сошелся" << endl;
        }
    }
    cout << "Корень уравнения: " << x << endl;
    cout << "Число итераций: " << iter << endl;
    cout << "Погрешность: " << abs(fx) << endl;
}

void chord_method(double a, double b, double eps) {
    double fa = f(a);
    double fb = f(b);
    double x = a - fa * (b - a) / (fb - fa);
    double fx = f(x);
    int iter = 0;
    while (abs(fx) > eps && iter < 1000) {
        if (fa * fx < 0) {
            b = x;
            fb = fx;
        }
        else {
            a = x;
            fa = fx;
        }
        x = a - fa * (b - a) / (fb - fa);
        fx = f(x);
        iter++;
    }
    cout << "Корень уравнения: " << x << endl;
    cout << "Число итераций: " << iter << endl;
    cout << "Погрешность: " << abs(fx) << endl;
}

int main() {

    setlocale(LC_ALL, "ru");

    double a = 1.0;
    double b = 3.0;
    double eps = 0.001;

    cout << "Метод хорд" << endl;

    chord_method(a, b, eps);

    cout << endl;


    cout << "Метод Ньютона" << endl;


    newtonMethod();

    return 0;
}