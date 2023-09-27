---
Title: '.ToLower()'
Description: 'Converts all the characters in a given string to lowercase.'
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

The **`.ToLower()`** method is a string method in C# that returns a new string in which all the characters are converted to lowercase.

The method does not modify the original string, but rather returns a new one. This method is helpful in normalizing user input or comparing strings in a case-insensitive manner.

## Syntax

```pseudo
myString.ToLower();
```

`myString` is the string being converted to lowercase.

## Example

In the following example, the `.ToLower()` method is called on a string `originalString`, and is printed to the console:

```cs
using System;

string originalString = "HELLO WORLD";

Console.WriteLine(originalString.ToLower()); // Output: "hello world"
```

## Codebyte Example

In following runnable example, a new string `originalString` is created that contains some text. Then, the `.ToLower()` method is called on this string and the result is stored in a new string variable `lowerCaseString`. Finally, both the original and the lowercase strings are printed to the console.

```codebyte/csharp
using System;

class Program {
  static void Main(string[] args) {
    string originalString = "THIS IS A TEST STRING";
    string lowerCaseString = originalString.ToLower();

    Console.WriteLine("Lowercase string: " + originalString.ToLower(););
    Console.WriteLine("Original string: " + originalString);
  }
}
```
