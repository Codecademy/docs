---
Title: 'Variables'
Description: 'A variable refers to a storage location in the computer’s memory that one can set aside to save, retrieve, and manipulate data.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

A **variable** is a storage location in the computer’s memory that is used to save, retrieve, and manipulate data.

## Syntax

Minimally, a variable is declared by specifying a data type and a name:

```pseudo
type name;
```

In this case, the variable will be initialized with the default value for its type: zero for numeric types, and `null` for reference types.

A variable can also be initialized with a value when it is declared:

```pseudo
type name = value;
```

In this case, the variable `name` will be set to the value `value`.

> **Note:** `value` must be of type `type` or be able to be implicitly converted to `type`.

## Example

```cs
using System;

public class Example
{
  public static void Main(string[] args)
  {
    int x = 1;
    int y = x + 5;
    long z = y;

    Console.WriteLine("The int {0} can be implicitly converted to the long {1}.", y, z);

    // Output: "The int 6 can be implicitly converted to the long 6."
  }
}
```
