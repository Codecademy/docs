---
Title: '.Tanh()'
Description: 'Computes the hyperbolic tangent of a given angle in radians.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Numbers'
  - 'Classes'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
  ---
```codebyte c/sharp


  using System;
  public class program
  {
    public static void Main(string[] args)
    {
        double num1 = 60.0, num2 = 0.0, num3 = 1.0;
        double tanhvalue = Math.Tanh(num1);
        Console.WriteLine("The tanh of num1 = " + tanhvalue);

        tanhvalue = Math.Tanh(num2);
        Console.WriteLine("The tanh of num2 = " + tanhvalue);

        tanhvalue = Math.Tanh(num3);
        Console.WriteLine("The tanh of num3 = " + tanhvalue);
    }
  }
  ```