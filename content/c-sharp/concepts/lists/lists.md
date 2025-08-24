---
Title: 'Lists'
Description: 'A List in c# is a dynamic data structure that stores multiple objects of a specified type.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
  - 'Developer Tools'
Tags:
  - 'Lists'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

A **List** in [C#](https://www.codecademy.com/resources/docs/c-sharp) is a **dynamic data structure** that stores multiple Objects of a specified type. These objects can be accessed by their **zero-based index**. Unlike [arrays](https://www.codecademy.com/resources/docs/c-sharp/arrays), Lists can automatically resize as elements are added or removed, and their capacity is practically *unlimited*, as long as there is enough memory available on the system.

## Syntax

> **Note:** Before creating a `List`, you need to include the `System.Collections.Generic` namespace.

There are two common ways to create a `List` in C#:

```pseudo
// Creating a List without any elements
List<T> myList = new List<T>();

// Creating a List with three elements
List<T> myList = new List<T> { element1, element2, element3 };
```

**Where:**

- `T`: Represents any data type.

- `element`: Any object or variable of type `T`.

## Example

This example creates a new `List` that stores three numbers. Since each element has an index, we can print each element in the `numbers` list by its index:

```csharp
using System;
using System.Collections.Generic;

public class Test
{
  public static void Main()
  {
    List<int> numbers = new List<int> { 2, 5, 10 };

    Console.WriteLine(numbers[0]); // Prints "2"
    Console.WriteLine(numbers[1]); // Prints "5"
    Console.WriteLine(numbers[2]); // Prints "10"
  }
}
```

## Subsection n

[Text about subsection n]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
