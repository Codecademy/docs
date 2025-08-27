---
Title: 'Lists'
Description: 'A List in c# is a dynamic data structure that stores multiple objects of a specified type.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
  - 'Developer Tools'
Tags:
  - 'Data Structures'
  - 'Lists'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

A **list** in [C#](https://www.codecademy.com/resources/docs/c-sharp) is a dynamic data structure that stores multiple objects of a specified type. These objects can be accessed by their zero-based index. Unlike [arrays](https://www.codecademy.com/resources/docs/c-sharp/arrays), Lists can automatically resize as elements are added or removed, and their capacity is practically _unlimited_, as long as there is enough memory available on the system.

## Syntax

> **Note:** Before creating a `List`, you need to include the `System.Collections.Generic` namespace.

There are two common ways to create a `List` in C#:

```pseudo
// Creating a List without any elements
List<T> myList = new List<T>();
```

Or alternatively:

```pseudo
// Creating a List with three elements
List<T> myList = new List<T> { element1, element2, element3 };
```

**Parameters:**

- `T`: Represents any data type.
- `element`: Any object or variable of type `T`.

## Example: Creating and Accessing a List in C#

In this example, a list is created, numbers are added, and elements are accessed by their index:

```cs
using System;
using System.Collections.Generic;

class Program
{
  static void Main()
  {
    // Create a list of integers
    List<int> numbers = new List<int>();

    // Add elements to the list
    numbers.Add(10);
    numbers.Add(20);
    numbers.Add(30);

    // Access elements by index
    Console.WriteLine(numbers[0]);
    Console.WriteLine(numbers[1]);
    Console.WriteLine(numbers[2]);
  }
}
```

The output of this code is:

```shell
10
20
30
```

## Codebyte Example: Printing elements in a List

This example creates a new `List` that stores three numbers. Since each element has an index, we can print each element in the `numbers` list by its index:

```codebyte/csharp
using System;
using System.Collections.Generic;

public class Test
{
  public static void Main()
  {
    List<int> numbers = new List<int> { 2, 5, 10 };

    Console.WriteLine(numbers[0]);
    Console.WriteLine(numbers[1]);
    Console.WriteLine(numbers[2]);
  }
}
```
