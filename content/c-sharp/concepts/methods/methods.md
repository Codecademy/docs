---
Title: 'Methods'
Description: 'Methods are blocks of code that can be called elsewhere in the program.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

**Methods** are blocks of code that can be reused elsewhere in a C# application. Each application has at least one `Main()` method that acts as the starting point. Methods are used to avoid the repetition of code and make it maintainable and readable. Usually, a method has one or multiple dedicated purposes.

A function inside a class is called a method. As C# is an [object-oriented](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming) programming language, all functions are declared inside classes, making them methods. Thus, methods and functions are synonymous.

## Syntax

```pseudo
// Declare a public method without return type and no parameters:
public void PrintString()
{
  Console.WriteLine("Hello, World!");
}

// Declare a private method which returns an object and takes no parameters:
private int ReturnNumber()
{
  return 7;
}

// Declare a public method which returns an object and takes an input parameter:
public int CalculateWithParameter(int x)
{
  return ReturnNumber() - x;
}
```

Methods begin with a signature made of the following parts:

- An access level of `public` or `private` (`private` is the default)
- Optional modifiers (e.g., `abstract` and `sealed`)
- The method return value (`string`, `int`, `object`, etc.) or `void`
- The method name (starting with a capital letter; usually a verb)
- Zero, one, or more (optional) parameters

## Codebyte Example

In the following example, two methods are separate defined: `Main()` and `GetSquare()`. When the program is run, the `Main()` is executed first which, in turn, executes the `GetSquare()` method with an `int` parameter passed to it. The returned value is saved to a [variable](https://www.codecademy.com/resources/docs/c-sharp/variables) and printed to the console:

```codebyte/csharp
using System;

public class Example
{
  public static void Main(string[] args)
  {
    var squared = new Example().GetSquare(5);
    Console.WriteLine(squared.ToString());
  }

  private int GetSquare(int i)
  {
     return i * i;
  }
}
```
