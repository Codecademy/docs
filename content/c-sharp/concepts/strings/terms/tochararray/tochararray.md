---
Title: '.ToCharArray()'
Description: 'Converts a string into a character array in C#. Each character in the string becomes an element in the array.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.ToCharArray()`** method in C# is used to convert a string into an array of characters. Each character in the string becomes an element in the resulting array, allowing for manipulation or iteration of individual characters.

## Syntax

```pseudo
char[] arrayName = stringName.ToCharArray();
```

- `stringName`: The string to be converted into a character array.
- `arrayName`: The resulting array containing individual characters from the string.

### Optional Parameters

The `.ToCharArray()` method also allows for optional parameters to specify a substring to convert:

```pseudo
char[] substringArray = stringName.ToCharArray(startIndex, length);
```

- `startIndex`: The zero-based index where the substring starts.
- `length`: The number of characters to include in the resulting array.

## Examples

### Split into Individual Characters

Here's an example of using `.ToCharArray()` to split a string into individual characters:

```cs
string greeting = "Hello, World!";
char[] charArray = greeting.ToCharArray();

foreach (char c in charArray)
{
    Console.WriteLine(c);
}
```

The output of the above code will be as follows:

```shell
H
e
l
l
o
,

W
o
r
l
d
!
```

### Converting a Substring to a Character Array

```cs
string phrase = "Convert this string!";
char[] partialArray = phrase.ToCharArray(8, 4);

foreach (char c in partialArray)
{
    Console.WriteLine(c);
}
```

The output of the above code will be as follows:

```shell
t
h
i
s
```

## Codebyte Example

Try this example to see how `.ToCharArray()` works in C#:

```codebyte/csharp
using System;

class Program
{
    static void Main()
    {
        string example = "Learn C#";
        char[] charArray = example.ToCharArray();

        Console.WriteLine("Character Array:");
        foreach (char c in charArray)
        {
            Console.Write(c + " ");
        }
    }
}
```
