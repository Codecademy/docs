---
Title: '.Contains()'
Description: 'Determines whether a character or subset of characters is present within a given string'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Characters'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Contains()`** method determines whether a `string` includes a particular character or substring. It returns `true` if the character is included, otherwise the method returns `false`. There are additional parameters that can modify the comparison rules.

## Syntax

```pseudo
// Determines whether the String includes a given character
String.Contains(char);

// Determines whether the String includes a given string
String.Contains(string);

// Determines whether the String includes a given character considering the type of comparison
String.Contains(char, comparisonType)

// Determines whether the String includes a given string considering the type of comparison
String.Contains(string, comparisonType)
```

`.Contains()` takes the following arguments:

- `char` is a single character.
- `string` is a sequence of characters.
- `comparisonType` is an enumeration value that sets the comparison rules.

## Example
The following example shows how we can use `.Contains()` method

```cs
using System;

public class Example
{
    public static void Main()
    {
        string stringToSeek = "The distance is nothing when one has a motive.";
        string substring = "motive";
        char character = 'l';

        bool result;

        // String.Contains(string)
        result = stringToSeek.Contains(substring);
        Console.WriteLine(result);

        // String.Contains(char)
        result = stringToSeek.Contains(character);
        Console.WriteLine(result);
    }
}
```

Here is the following output:

```shell
Whether the specified string contains the word "motive": True
Whether the specified string contains the following character "l": False
```


