#include <iostream>
#include <cmath>

using namespace std;

const double eps = 0.001; // точность решения
const int max_iter = 100; // максимальное число итераций

// функции системы уравнений
double f1(double x, double y) {
    return sin(y) + 2 * x - 2;
}

double f2(double x, double y) {
    return cos(x - 1) + y - 0.7;
}

// Якобиан системы уравнений
void jacobian(double x, double y, double z, double& j11, double& j12, double& j13, double& j21, double& j22, double& j23, double& j31, double& j32, double& j33) {
    j11 = 2;
    j12 = z * sin(y * z);
    j13 = y * sin(y * z);
    j21 = -x / sqrt(1 - x * x);
    j22 = -cos(y);
    j23 = 0;
    j31 = -exp(-x);
    j32 = -0.5 * sin(y);
    j33 = 1;
}

void newtonMethod() {
    double x = 0.01, y = 0.01; // начальное приближение
    double x_prev, y_prev; // предыдущее приближение
    int iter = 0; // число итераций

    do {
        x_prev = x;
        y_prev = y;

        // вычисление новых значений переменных
        x = f1(x_prev, y_prev);
        y = f2(x_prev, y_prev);

        iter++;
    } while (iter < max_iter && (abs(x - x_prev) > eps || abs(y - y_prev) > eps));

    // вывод результатов
    cout << "Решение: x = " << x << ", y = " << y << endl;
    cout << "Количество итераций: " << iter << endl;

    // оценка погрешности решения
    double err = max(abs(x - x_prev), abs(y - y_prev));
    cout << "Погрешность: " << err << endl;
}

int main() {
    setlocale(LC_ALL, "ru");
    
    double x = 0.5, y = 0.5, z = 0.5; // начальное приближение
    double x_prev, y_prev, z_prev; // предыдущее приближение
    int iter = 0; // число итераций

    do {
        x_prev = x;
        y_prev = y;
        z_prev = z;

        // вычисление Якобиана и вектора значений функций
        double j11, j12, j13, j21, j22, j23, j31, j32, j33;
        jacobian(x_prev, y_prev, z_prev, j11, j12, j13, j21, j22, j23, j31, j32, j33);
        double f1_val = f1(x_prev, y_prev);
        double f2_val = f2(x_prev, y_prev);

        // решение системы линейных уравнений
        double det = j11 * j22 * j33 + j12 * j23 * j31 + j13 * j21 * j32 - j13 * j22 * j31 - j12 * j21 * j33 - j11 * j23 * j32;
        double dx = (j22 * j33 - j23 * j32) * f1_val + (j13 * j32 - j12 * j33) * f2_val + (j12 * j23 - j13 * j22) * f3_val;
        double dy = (j23 * j31 - j21 * j33) * f1_val + (j11 * j33 - j13 * j31) * f2_val + (j13 * j21 - j11 * j23) * f3_val;
        double dz = (j21 * j32 - j22 * j31) * f1_val + (j12 * j31 - j11 * j32) * f2_val + (j11 * j22 - j12 * j21) * f3_val;
        dx /= det;
        dy /= det;
        dz /= det;

        // вычисление новых значений переменных
        x = x_prev - dx;
        y = y_prev - dy;
        z = z_prev - dz;

        iter++;
    } while (iter < max_iter && (abs(x - x_prev) > eps || abs(y - y_prev) > eps || abs(z - z_prev) > eps));

    // вывод результатов
    cout << "Solution: x = " << x << ", y = " << y << ", z = " << z << endl;
    cout << "Number of iterations: " << iter << endl;

    // оценка погрешности решения
    double err = max(abs(x - x_prev), max(abs(y - y_prev), abs(z - z_prev)));
    cout << "Error: " << err << endl;

    return 0;
}