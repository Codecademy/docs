## Syntax
```cs
Math.Abs(value)
```
Math.Abs() is a static method of the Math class. It takes a single parameter of type int, long, float, double, or decimal. It returns the absolute value of the number.

## Example:
Find the absolute value of the number -5.
```cs
int x = -5;
int y = Math.Abs(x);
Console.WriteLine(y);
```

Codebyte Exmaple:
```codebyte/csharp  
using System;
public class Program
{
    public static void Main()
    {
        int x = -5;
        int y = Math.Abs(x);
        Console.WriteLine(y);
    }
}
```

The output of the above code can be seen such:
```pseudo
int x = -5;
public int GetAbsolute(int x)
{
    int x = -5; // x is a local variable
    if (x < 0) 
    {
        // if x is less than 0, multiply it by -1 to make it positive
        return x * -1; 
    }
    // if x is greater than 0, return it
    return x;
}

int y = GetAbsolute(x);
Console.WriteLine(y);

or 

int y = Math.Abs(x);
Console.WriteLine(y);
```