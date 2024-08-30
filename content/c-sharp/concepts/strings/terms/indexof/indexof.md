---
Title: '.IndexOf()'
Description: 'Returns the index of a specified character or substring in a string.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Strings'
  - 'Search'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.IndexOf()`** method is a string method that returns the index of the first occurrence of a specified character or substring in a given string. If the character or substring is not found, it returns `-1`.

## Syntax

```pseudo
IndexOf(char value);
IndexOf(string value);
IndexOf(char value, int startIndex);
IndexOf(string value, int startIndex);
IndexOf(string value, int startIndex, int count);
```

- `value` : The substring or character to search for.
- `startIndex` (optional): The index from where the search should start.
- `count` (optional): Maximum number of characters to search.

## Example

The following example uses the `IndexOf()` method to find the index of the first occurrence of the character "d" in the string "Codecademy docs".

```cs
string str = "Codecademy docs";
int index = str.IndexOf('d');

Console.WriteLine("Index: " + index);
```

This example results in the following output:

```
Index: 2
```

## Codebyte Example

The following codebyte is runnable and shows the usage of the `.IndexOf()` method on a string.

```codebyte/csharp
using System;

public class IndexOfExample
{
    public static void Main()
    {
        string sentence = "The cat in the hat wears a red and white striped hat";

        Console.WriteLine(sentence);

        int index1 = sentence.IndexOf('h');
        Console.WriteLine($"Index of 'h': {index1}");

        int index2 = sentence.IndexOf("cat");
        Console.WriteLine($"Index of 'cat': {index2}");

        int index3 = sentence.IndexOf('a', 10);
        Console.WriteLine($"Index of 'a' starting from index 10: {index3}");

        int index4 = sentence.IndexOf("dog");
        Console.WriteLine($"Index of 'dog': {index4}");
    }
}
```
