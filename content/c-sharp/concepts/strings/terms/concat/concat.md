---
Title: '.Concat()'
Description: 'Combines two or more strings together into a single string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
  - 'Game Development'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Concat()`** method combines strings together by appending one string to the end of the other string. This method is also called by the compiler when using the`+` or `+=` [operators](https://www.codecademy.com/resources/docs/c-sharp/operators) to combine strings.

## Syntax

```pseudo
string.Concat(string1, string2,...)
```

`string1` and `string2` are the string objects to be concatenated.

## Example

The following example uses the `Concat()` method to combine three strings.

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

The next example demonstrates how `Concat()` can be used with a foreach loop to iterate through a list and output multiple concatenated strings.

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
