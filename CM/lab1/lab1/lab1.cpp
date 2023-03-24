#include <iostream>
#include <iomanip>
#include <list>


using namespace std;

list<double> ls;
list<double> ls1;

double min(double a, double b) {
    if (abs(a) < abs(b)) {
        return a;
    }
    else
        return b;
}

double f(double value) {
    return pow(0.5, value) + 1 - pow((value - 2), 2);
}

double f1(double value) {
    return 2 * pow(value,3) - 9 * pow(value,2) - 60 * value + 1;
}

double dihotomia(double a, double b, double eps) {
    double x = (a + b) / 2;
    while (abs(b - a) > 2 * eps) {
        ;
        if (f(a) * f(x) < 0) {
            b = x;
            x = (a + b) / 2;
        }
        else {
            if (f(b) * f1(x) < 0) {
                a = x;
                x = (a + b) / 2;
            }
        }
    }
    return x;
}

double dihotomia1(double a, double b, double eps) {
    double x = (a + b) / 2;
    while (abs(b - a) > 2 * eps) {
        if (f1(a) * f1(x) < 0) {
            b = x;
            x = (a + b) / 2;
        }
        else {
            if (f1(b) * f1(x) < 0) {
                a = x;
                x = (a + b) / 2;
            }
        }
    }
    return x;
}


int main()
{
    int a = 0;
    int b = 2;
    int c = -1;
    int d = 3;
    double eps = 0.01;

    copy(ls.begin(), ls.end(), ostream_iterator<double>(cout, " "));
    cout << endl;
    copy(ls1.begin(), ls1.end(), ostream_iterator<double>(cout, " "));
    cout << endl;

    cout << dihotomia(a, b, eps) << endl;
    cout << dihotomia1(c, d, eps);
}

