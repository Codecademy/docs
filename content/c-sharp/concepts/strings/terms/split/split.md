---
Title: '.Split()'
Description: 'Divides a string into an array of substrings based on specified delimeter(s).'
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

The **`.Split()`** method breaks a string into substrings based on specified delimiter(s), which can be a character, an array of characters, or a string. It returns an array of strings containing the split substrings.

## Syntax


Using a single character as a delimeter:
```pseudo
string[] subs = String.Split(char)
```

Using a string as a delimeter:
```pseudo
string[] subs = String.Split(string)
```

Using a character as a delimeter and breaking into maximum N substrings
```pseudo
string[] subs =  String.Split(char, Int N)
```

Using a character as a delimeter and breaking into maximum N substrings
```pseudo
string[] subs =  String.Split(string, Int N)
```

`.Split()` is a method of class `String`. This method can take upto 3 parameters:
1. The first parameter is the delimeter:
  * `Char`: a single character
  * `Char[]`: an array of characters
  * `String`: a string
2. `Int32`: The second parameter is optional and could be the manximum number of desired substrings which is specified as an integer.
3. `StringSplitOptions`: The third parameter which is also optional could contain the split options `StringSplitOptions`

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
