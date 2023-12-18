---
Title: '.Equals()'
Description: 'Determines whether two string objects have the same value or not.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Libraries'
  - 'Arithmetic'
  - 'Strings'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Equals()`** method determines whether two string objects have the same value or not.

## Syntax

```pseudo
String.Equals(string1, string2)

string1.Equals(string2)
```

`.Equals()` is a method of class `String`. This method will take two parameters in the form of string objects and check their values for equality.

This method returns a boolean value of `true` or `false`.

## Example

The following example demonstrates the `.Equals()` method. Two parameters are passed to the method and the return value is printed with the `Console.WriteLine()` method.

```cs
using System;

class EqualsMethod {

    public static void Main(string[] args)
    {
        string s1 = "Codecademy";
        string s2 = "Codecademy";

        Console.WriteLine(s1.Equals(s2));
    }
}
```

This example results in the following output:

```shell
True
```

## Codebyte Example

In this executable example, the string variables can be modified. The output will be the result of the `.Equals()` method:

```codebyte/csharp
using System;

class EqualsMethod {

    public static void Main(string[] args)
    {
        string string1 = "Codecademy";
        string string2 = "codecademy!";

        Console.WriteLine(string1.Equals(string2));
    }
}
```
