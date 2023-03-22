---
Title: '.ToLower()'
Description: 'The ToUpper() method is used to convert all the characters in a given string to uppercase.'
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

The **`ToUpper()`** method is a method in C# that takes a string and returns a copy of this string converted to uppercase. Numbers and symbols are not changed.

## Syntax

```pseudo
string.ToUpper()
```
The .ToUpper() return a new string whose letters are converted to uppercase.

This method will not change the input string.


## Example

In this following example, `originalString` is the string being converted to uppercase, and `uppercaseString` is the new string that contains the uppercase characters. We can see that that the original string remains unchanged:

```cs
originalString = "Hello World"

string uppercaseString = originalString.ToUpper();

Console.WriteLine(originalString);
Console.WriteLine(uppercaseString);
```
Here is the output:
```pseudo
Hello World
HELLO WORLD
```

## Codebyte Example

To convert `originalString`, which contains the text *"Hi! I'm Codecademy"*, to uppercase then store in a new string variable named `uppercaseString`:

```codebyte/csharp
// This code demonstrates the use of the ToUpper() method in C#

using System;

class Program
{
    static void Main(string[] args)
    {
        string originalString = "Hi! I'm Codecademy";
        string uppercaseString = originalString.ToUpper();

        Console.WriteLine("Original string: " + originalString);
        Console.WriteLine("Uppercase string: " + uppercaseString);
    }
}
```