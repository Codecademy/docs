---
Title: '.ToLower()'
Description: 'The ToLower() method is used to convert all the characters in a given string to lowercase.'
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

The **`ToLower()`** method is a string method in C# that returns a new string in which all the characters are converted to lowercase. The method does not modify the original string, but rather returns a new one. This method is helpful in normalizing user input or comparing strings in a case-insensitive manner.
 
## Syntax

```pseudo
string lowerCaseString = originalString.ToLower();
```
Here, `originalString` is the string being converted to lowercase, and `lowerCaseString` is the new string that contains the lowercase characters.

## Example

In the following example, a new string `originalString` is created that contains the text "HELLO WORLD". Then the `.ToLower()` method is called on this string and the result is stored in a new string variable `lowerCaseString`. Finally, the value of `lowerCaseString` is printed to the console, which outputs "hello world".

```cs
string originalString = "HELLO WORLD";
string lowerCaseString = originalString.ToLower();

Console.WriteLine(lowerCaseString); // Output: "hello world"
```

## Codebyte Example

In following runnable example, a new string `originalString` is created that contains the text "THIS IS A TEST STRING". Then the `.ToLower()` method is called on this string and the result is stored in a new string variable `lowerCaseString`. Finally, both the original and the lowercase strings are printed to the console.

```codebyte/csharp
// This code demonstrates the use of the ToLower() method in C#

using System;

class Program
{
    static void Main(string[] args)
    {
        string originalString = "THIS IS A TEST STRING";
        string lowerCaseString = originalString.ToLower();

        Console.WriteLine("Original string: " + originalString);
        Console.WriteLine("Lowercase string: " + lowerCaseString);
    }
}
```