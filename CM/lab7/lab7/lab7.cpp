#include <iostream>
#include <cmath>
#include <complex>


using namespace std;

// Функция, которую интегрируем
double f(double x) {
    return x / (2 * x + 1);
}

// Первообразная функции
double F(double x) {
    return (x / 2) - log(abs(2 * x + 1)) / 4;
}

// формула НАСТ
double gauss(double a, double b) {
    // коэффициенты для формулы НАСТ типа Гаусса
    double c[] = { 0.3478548451, 0.6521451549, 0.6521451549, 0.3478548451 };
    double x[] = { -0.8611363116, -0.3399810435, 0.3399810435, 0.8611363116 };
    double sum = 0; // переменная для хранения приближенного значения интеграла

    for (int i = 0; i < 4; i++) {
        double t = ((b - a) / 2) * x[i] + ((a + b) / 2);
        sum += c[i] * f(t);
    }
    sum = sum * ((b - a) / 2);
    return sum;
}

double sumF(double a, double b) {
    return F(b) - F(a);
}

// Метод прямоугольников
double RectanglesMethod(double a, double b, int n) {
    double h = (b - a) / n; // шаг разбиения
    double sum = 0; // сумма интеграла

    for (int i = 0; i < n; i++) {
        double x = a + i * h; // левая граница прямоугольника
        double y = f(x); // вычисление функции в левой границе
        sum += y * h; // добавляем площадь прямоугольника в сумму
        cout << x << "\t" << y << "\t" << sum << endl;
    }

    return sum;
}

// Метод трапеций
double TrapezoidalMethod(double a, double b, int n) {
    double h = (b - a) / n; // шаг разбиения
    double sum = (f(a) + f(b)) / 2; // сумма интеграла

    for (int i = 1; i < n; i++) {
        double x = a + i * h; // точка разбиения
        double y = f(x); // значение функции в точке разбиения
        sum += y; // добавление значения функции в сумму
    }

    sum *= h; // умножаем сумму на шаг

    return sum;
}

// Метод Симпсона
double SimpsonMethod(double a, double b, int n) {
    double h = (b - a) / n; // шаг разбиения
    double sum = f(a) + f(b); // сумма интеграла

    for (int i = 1; i < n; i++) {
        double x = a + i * h; // точка разбиения
        double factor = (i % 2 == 0) ? 2 : 4; // множитель для значения функции
        double y = factor * f(x); // значение функции в точке разбиения, умноженное на множитель
        sum += y; // добавление значения функции в сумму
    }

    sum *= (h / 3); // умножаем сумму на (h/3)

    return sum;
}

int main() {
    setlocale(LC_ALL, "ru");
    double a = 0.2, b = 1; // границы интегрирования
    int nR = 200, nT = 10, nS = 10; // количество разбиений

    double rM = RectanglesMethod(a, b, nR);
    double tM = TrapezoidalMethod(a, b, nT);
    double sM = SimpsonMethod(a, b, nS);
    double _sumF = sumF(a, b);
    double nast = gauss(a, b);

    cout << "Результат метода прямоугольников: " << rM << endl;
    cout << "Результат метода трапеций: " << tM << endl;
    cout << "Результат метода Симпсона: " << sM << endl;
    cout << "Результат метода НАСТ: " << nast << endl;
    cout << "Значение первообразной: " << _sumF << endl;
    cout << "Погрешность метода прямоугольников: " << abs(_sumF - rM)/ abs(rM) * 100 << endl;
    cout << "Погрешность метода трапеций: " << abs(_sumF - tM) / abs(tM) * 100 << endl;
    cout << "Погрешность метода Симпсона: " << abs(_sumF - sM) / abs(sM) * 100 << endl;

    return 0;
}
