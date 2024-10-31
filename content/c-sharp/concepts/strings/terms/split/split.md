---
Title: '.Split()'
Description: 'Used to break string into substrings by specifying a delimeter.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Libraries'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The `.Split()`** method breaks a string into substrings based on a delimeter which can be a character or another string and returns an array of strings

## Syntax

```pseudo
// Splits a string using a character as a delimeter
string[] subs = String.Split(char)

// Splits a string using a string as a delimeter
string[] subs = String.Split(string)

// Splits a string using a character as a delimeter into maximum substrings of the number specified in the second argument.
string[] subs =  String.Split(char, Int)

// Splits a string using a character as a delimeter into maximum substrings of the number specified in the second argument.
string[] subs =  String.Split(string, Int)
```

`.Split()` is a method of class `String`. This method can take upto 3 parameters:
1. The first parameter is the delimeter and it can be a `Char`, an array of characters `Char[]`, or a `String`
2. The second parameter is optional and could be the manximum number of desired substrings which is specified as an integer of type `Int32`
3. The third parameter which is also optional could contain the split options `StringSplitOptions`

This method returns a boolean value of `true` or `false`.

## Example

The following examples demonstrates the various uses of `.Split()` method.

```cs
using System;

class EqualsMethod {

    public static void Main(string[] args)
    {
        string s1 = "Rivers, Mountains, Oceans";

        string[] subs = s1.Split(',');
        foreach (var sub in subs)
        {
          Console.WriteLine($"Substring: {sub}");
        }

        // To remove spaces too, we can specify ', ' as the delimeter
        subs = s1.Split(", ");
        foreach (var sub in subs)
        {
          Console.WriteLine($"Substring: {sub}");
        }

        // To limit our substring to 2 we can specify the optional parameter
        subs = s1.Split(", ", 2);
        foreach (var sub in subs)
        {
          Console.WriteLine($"Substring: {sub}");
        }
    }
}
```

This example results in the following output:

```shell
Substring: Rivers
Substring:  Mountains
Substring:  Oceans
Substring: Rivers
Substring: Mountains
Substring: Oceans
Substring: Rivers
Substring: Mountains, Oceans
```

## Codebyte Example

In this executable example, the string variable and the delimeter can be modified to observe the program output.

```codebyte/csharp
using System;

class EqualsMethod {

    public static void Main(string[] args)
    {
        string s1 = "Rivers, Mountains, Oceans";

        string[] subs = s1.Split(',');
        foreach (var sub in subs)
        {
          Console.WriteLine($"Substring: {sub}");
        }

        // To remove spaces too, we can specify ', ' as the delimeter
        subs = s1.Split(", ");
        foreach (var sub in subs)
        {
          Console.WriteLine($"Substring: {sub}");
        }
    }
}
```
