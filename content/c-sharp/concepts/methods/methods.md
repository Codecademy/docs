---
Title: 'Methods' 
Description: 'Methods in C# are a block of code that can be called.'
Subjects: 
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
CatalogContent: 
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

A **method** is a block of code used in [C#](https://www.codecademy.com/resources/docs/c-sharp) (and many other programming languages) containing statements. Each C# application has at least one method, called the 'Main', which is the starting point for the application. Methods are used to avoid the copy pasting of code, enabling better maintainability and readability of the code. Usually, a method has one or multiple dedicated purposes. 

## Syntax

To declare a function, the following parts must be present:

* The access level (public, private, ...) and optional modifiers (abstract, sealed, ...)
* The method return value (void, string, int, object, ...)
* The method name
* The (optional) method parameters

All parts together form the **method signature**. Methods are written with a capital letter and camel case. 

```pseudo
// Declare a public method without return type and no parameters:
public void PrintHappyHolidays()
{
	Console.WriteLine("Happy Holidays!");
}

// Declare a private method which returns an object and takes no parameters:
private int CheckNumberOfCookies()
{
	return 7;
}

// Declare a public method which returns an object and takes an input parameter:
public int CalculateLeftoverAmountOfCookies(int eaten)
{
	return CheckNumberOfCookies() - 7;
}
```


## Example
The following example calculates the square of a given integer and prints it to the console. There are two methods present, the 'Main' method as well as the 'GetSquare' method.


```cs
using System;

public class Example
{
  public static void Main(string[] args)
  {
    var squared = GetSquare(5);
    Console.WriteLine(squared.ToString()); 
  }

  private int GetSquare(int i)
  {
     return i*i; 
  }
}
```

## Methods vs. Functions

A function inside a class is called a method. As C# is an object-oriented programming language, all functions are declared inside classes, making them methods. Thus, C# only deals with methods, not with functions.
