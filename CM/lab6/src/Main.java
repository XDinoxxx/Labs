import org.math.plot.Plot2DPanel;
import org.math.plot.plotObjects.BaseLabel;

import javax.swing.*;

public class Main {
    public static void main(String[] args) {

        // значения переменных из таблицы
        double[] x = {0, 2, 4, 6, 8, 10};
        double[] y = {5, 1, 0.5, 1.5, 4.5, 8.5};

        int n = x.length; // количство значений из таблицы

        // рисуем точечный график
        Plot2DPanel plotPanel = new Plot2DPanel();
        plotPanel.addScatterPlot("Точки", x, y);
        plotPanel.addLegend("SOUTH");
        plotPanel.setAxisLabels("Ось Х", "Ось Y");
        plotPanel.addPlotable(new BaseLabel("Лабораторная работа 16", java.awt.Color.BLACK, 0.5, 1.1));




        // линейная y=ax+b ...............................
        double sum_xy = 0;
        double sum_x = 0;
        double sum_y = 0;
        double sum_xx = 0;
        for (int i = 0; i < n; i++)
        {
            sum_xy += (x[i]*y[i]);
            sum_x += x[i];
            sum_y += y[i];
            sum_xx += (x[i]*x[i]);
        }
        // найдем коэфициенты по формуле наименьших квадратов
        double linear_a = ((n * sum_xy) - (sum_x * sum_y)) / ((n * sum_xx) - (sum_x * sum_x));
        double linear_b = (sum_y - (linear_a * sum_x)) / n;
        // найдем значения функции y=ax+b
        double[] linear_y = new double[n];
        for (int i = 0; i < n; i++)
        {
            linear_y[i] = linear_a * x[i] + linear_b;
        }
        // рисуем линейную функцию
        plotPanel.addLinePlot("Линейная функция", x, linear_y);


        // квадратичная y=ax^2+bx+c ...........................
        double sum_x4 = 0;
        double sum_x3 = 0;
        double sum_x2 = sum_xx;
        //double sum_x
        double sum_x2y = 0;
        //double sum_xy
        //sum_y
        for (int i = 0; i < n; i++)
        {
            sum_x4 += Math.pow(x[i], 4);
            sum_x3 += Math.pow(x[i], 3);
            sum_x2y += (x[i] * x[i] * y[i]);
        }
        // заполним матрицы А и В суммами чтобы потом подставить эти матрицы в метод гаусса
        double[][] A = {{n, sum_x, sum_x2}, {sum_x, sum_x2, sum_x3}, {sum_x2, sum_x3, sum_x4}};
        double[] B = {sum_y, sum_xy, sum_x2y};
        // найдем коэфициенты a, b, c по формуле наименьших квадратов и с помощью метода гаусса
        double quadratic_a = gauss(A, B)[0];
        double quadratic_b = gauss(A, B)[1];
        double quadratic_c = gauss(A, B)[2];
        // найдем значения функции y=ax^2+bx+c
        double[] quadratic_y = new double[n];
        for (int i = 0; i < n; i++)
        {
            quadratic_y[i] = quadratic_a * x[i] * x[i] + quadratic_b * x[i] + quadratic_c;
        }
        // рисуем квадратическую функцию
        plotPanel.addLinePlot("Квадратическая функция", x, quadratic_y);




        // вывод графика на экран
        JFrame frame = new JFrame("График");
        frame.setSize(800, 600);
        frame.setContentPane(plotPanel);
        frame.setVisible(true);

    }

    // метод Гаусса для решения системы линейных уравнений
    public static double[] gauss(double[][] A, double[] B) {
        int n = B.length;
        for (int p = 0; p < n; p++) {
            int max = p;
            for (int i = p + 1; i < n; i++) {
                if (Math.abs(A[i][p]) > Math.abs(A[max][p])) {
                    max = i;
                }
            }
            double[] temp = A[p];
            A[p] = A[max];
            A[max] = temp;
            double t = B[p];
            B[p] = B[max];
            B[max] = t;
            for (int i = p + 1; i < n; i++) {
                double alpha = A[i][p] / A[p][p];
                B[i] -= alpha * B[p];
                for (int j = p; j < n; j++) {
                    A[i][j] -= alpha * A[p][j];
                }
            }
        }
        double[] x = new double[n];
        for (int i = n - 1; i >= 0; i--) {
            double sum = 0.0;
            for (int j = i + 1; j < n; j++) {
                sum += A[i][j] * x[j];
            }
            x[i] = (B[i] - sum) / A[i][i];
        }
        return x;
    }

}