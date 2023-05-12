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
    return pow(3, value) + 2 * value - 5;
}

double f1(double value) {
    return cos(value + 0.3) - pow(value, 2);
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




int main()
{
    int a = 0;
    int b = 2;
    double eps = 0.01;

    copy(ls.begin(), ls.end(), ostream_iterator<double>(cout, " "));
    cout << endl;
    copy(ls1.begin(), ls1.end(), ostream_iterator<double>(cout, " "));
    cout << endl;

    cout << dihotomia(a, b, eps) << endl;

}

