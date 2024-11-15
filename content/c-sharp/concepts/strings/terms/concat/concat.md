---
Title: '.Concat()'
Description: 'Combines two or more strings together into a single string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Lists'
  - 'Loops'
  - 'Strings'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Concat()`** [method](https://www.codecademy.com/resources/docs/c-sharp/methods) combines strings by appending one string to the end of another. This method is similar in function to using the `+` or `+=` [operator](https://www.codecademy.com/resources/docs/c-sharp/operators) to concatenate strings, though the compiler handles those operators differently for optimization in certain scenarios.

## Syntax

```pseudo
string.Concat(string1, string2, ...)
```

- `string1, string2, ...`: The strings that will be concatenated together.

## Example

The following example uses the `.Concat()` method to combine three strings:

```cs
using System;

public class ConcatMethod
{
  public static void Main()
  {
    string firstString = "Hello";
    string secondString = "World!";
    string fullSentence = string.Concat(firstString, " ", secondString);
    Console.WriteLine(fullSentence);
  }
}
```

This results in the following output:

```shell
Hello World!
```

## Codebyte Example

The below codebyte example demonstrates how `.Concat()` can be used with a `foreach` [loop](https://www.codecademy.com/resources/docs/c-sharp/loops) to iterate through a list and output multiple concatenated strings:

```codebyte/csharp
using System;
using System.Collections.Generic;

public class ConcatMethod
{
  public static void Main()
  {
    List<string> usernames = new List<string> { "Alice", "Bob", "Charlie" };
    foreach (string user in usernames)
    {
      string greeting = string.Concat("Hi there ", user, ", how can I help you?");
      Console.WriteLine(greeting);
    }
  }
}
```
