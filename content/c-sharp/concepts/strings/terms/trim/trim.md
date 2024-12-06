---
Title: '.Trim()'
Description: 'Trims starting and ending whitespaces from a given string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Functions'
  - 'Strings'
  - 'Characters'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

In C#, the **`.Trim()`** [method](https://www.codecademy.com/resources/docs/c-sharp/methods) trims starting and ending whitespaces from a given string.

## Syntax

```pseudo
str.Trim()
```

- `str`: The string from which starting and ending whitespaces are to be removed.

## Example

The following example demonstrates the usage of the `.Trim()` method:

```cs
using System;

public class Example
{
  public static void Main()
  {
    string str = " Codecademy ";

    Console.WriteLine(str);
  }
}
```

The above code produces the following output:

```shell
Codecademy
```

## Codebyte Example

The following codebyte example shows the use of the `.Trim()` method:

```codebyte/csharp
using System;

public class CodebyteExample
{
  public static void Main()
  {
    string str = " Programming ";

    Console.WriteLine(str);
  }
}
```
