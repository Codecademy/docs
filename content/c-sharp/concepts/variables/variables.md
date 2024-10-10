---
Title: 'Variables'
Description: 'Variables are used to store and manipulate data. In C#, each variable has a type that determines the values it can store.'
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

**Variables** are used to store and manipulate data. In C#, each variable has a type that determines the values it can store.

## Types

**C#** is a type-safe language, and has different types. The following are some examples:

| Name          | Description                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `int`         | represents a 32-bit signed integer. It can store whole numbers from `-2,147,483,648` to `2,147,483,647`.                          |
| `double`      | represents a 64-bit floating-point number. It can store both whole numbers and decimals from `±5.0 × 10^−324` to `±1.7 × 10^308`. |
| `char`        | represents a single 16-bit Unicode character. It is used to store a single letter, digit, or symbol.                              |
| `string`      | represents a sequence of characters and is used to store text. It is immutable, meaning that once created, it cannot be changed.  |
| `bool`        | represents a Boolean value, which can be either `true` or `false`. Used for conditional statements and logical operations.        |

## Syntax

A variable is declared by specifying a data **type**, a **name** and a **value** (if it is to be initialized):

```pseudo
type name = value;
```

## Examples

### Integer (`int`)

The `int` type is commonly used when you don't need decimal values and the number fits within the defined range.

```cs
int x = 25;
int y = 100;
int z = x - y; // z = -75
```

### Floating-point number (`double`)

The `double` type is commonly used to store decimal numbers or perform calculations that require a high degree of precision.

```cs
double temperature = 36.5;
double distance = 12345.6789;
```

### Unicode character (`char`)

The `char` type is commonly used in tasks like processing text, handling user input, or representing specific values in a program.

```cs
char grade = 'A';
char symbol = '#';
```

### Sequence of characters (`string`)

The type `string` is commonly used for storing and manipulating text data, such as user input, messages, file paths, and formatted output.

```cs
string greeting = "Hello, World!";
string name = "Alice";
string fullName = name + " Smith"; // "Alice Smith"
```

### Boolean (`bool`)

The `bool` type is commonly used for conditional statements (like `if` statements) and to represent flags or states in logical operations.

```cs
bool isActive = true;
bool isComplete = false;
```

## Codebyte Example

Feel free to play around with the values of `x` and `y`, experiment with different operations, or even add more variables. Observe how changes affect the output and enhance your understanding of variable types in C#. Happy coding!

```codebyte/csharp
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
