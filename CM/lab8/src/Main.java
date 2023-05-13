import org.math.plot.Plot2DPanel;
import org.math.plot.plotObjects.BaseLabel;

import javax.swing.*;

public class Main {
    public static double f(double x, double u)
    {
        return (1 + x * u)/ (x*x);
    }
    public static double u (double x)
    {
        return 0.5 * (x - Math.pow(x,-1));
    }
    public static void euler (double x0, double X, double u0, double h, double[] array)
    {

        double u = u0;
        double u_exact = u(x0);
        int i = 0;
        for (double x = x0; x <= X; x += h)
        {
            u += h * f(x, u);
            array[i] = u;
            i++;
            u_exact = u(x);
            System.out.println("Эйлера = " + u + "\nТочное = " + u_exact + "\n");

        }
    }

    public static void euler_cauchy (double x0, double X, double u0, double h, double[] array)
    {
        double u_exact = u(x0);

        double x = x0;
        double u = u0;
        double k1, k2;
        int i = 0;
        while (x <= X)
        {
            k1 = h * f(x, u);
            k2 = h * f(x + h, u + k1);
            u += (k1 + k2) / 2.0;
            array[i] = u;
            i++;
            x += h;

            u_exact = u(x);
            System.out.println("Эйлера-Коши = " + u + "\nТочное = " + u_exact + "\n");
        }
    }

    public static void runge_kutta4 (double x0, double X, double u0, double h,  double[] array)
    {
        double k1, k2, k3, k4, k, u_exact;
        double x = x0, y = u0;

        int i = 0;
        while (x < X) {
            k1 = h * f(x, y);
            k2 = h * f(x + h / 2, y + k1 / 2);
            k3 = h * f(x + h / 2, y + k2 / 2);
            k4 = h * f(x + h, y + k3);
            k = (k1 + 2 * k2 + 2 * k3 + k4) / 6;
            y += k;
            array[i] = y;
            i++;
            x += h;
            u_exact = u(x);
            System.out.println("Рунге-Кутта = " + y + "\nТочное = " + u_exact + "\n");
        }
    }

    public static void main(String[] args)
    {
        double u0 = 0;
        double x0 = 1;
        double X = 2;
        double h = 0.1;
        int n = (int) (X/h) + 1;

        double[] euler = new double[n];
        double[] euler_cauchy = new double[n];
        double[] range_kutta = new double[n];

        euler(x0, X, u0, h, euler);
        euler_cauchy(x0,X, u0, h, euler_cauchy);
        runge_kutta4(x0, X, u0, h, range_kutta);



        double[] x = new double[n];
        for (int i = 1; i < n; i++)
        {
            x[i] = 0 + h*i;
        }
        double[] exact = new double[n];
        int t = 0;
        for (double i = 1; i <= X; i += h)
        {
            exact[t] = u(i);
            t++;
        }


        Plot2DPanel plotPanel = new Plot2DPanel();
        plotPanel.addLegend("SOUTH");
        plotPanel.setAxisLabels("Ось Х", "Ось Y");
        plotPanel.addPlotable(new BaseLabel("График численного решения задачи Коши разными методами", java.awt.Color.BLACK, 0.5, 1.1));
        plotPanel.addLinePlot("Точное", x, exact);
        plotPanel.addLinePlot("Эйлер", x, euler);
        plotPanel.addLinePlot("Эйлера-Коши", x, euler_cauchy);
        plotPanel.addLinePlot("Рунге-Кутта", x, range_kutta);

        JFrame frame = new JFrame("График");
        frame.setSize(700, 600);
        frame.setContentPane(plotPanel);
        frame.setVisible(true);
    }
}