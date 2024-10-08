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
- `comparisonType` is an enumeration value that allows to add specific rules to compare strings such as culture, case, and sort. Passing as an additional argument:
  - `CurrentCulture` determines whether strings match culture-sensitive criteria using the current system culture for comparison.
  - `CurrentCultureIgnoreCase` does the same as above and ignores the case.
  - `InvariantCulture` determines whether strings match using a fixed, culture-independent set of rules that remain consistent across all systems and regions.
  - `InvariantCultureIgnoreCase` does the same as above and ignores the case.
  - `Ordinal` determines whether strings match using binary sort rules. This is the fastest comparison method, performing a simple byte-by-byte comparison of Unicode values.
  - `OrdinalIgnoreCase` does the same as above and ignores the case.

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
True
False
```

Now, let's see how we can use the `comparisonType` parameter to modify the comparison rules:

```cs
using System;
using System.Globalization;

public class Example
{
  public static void Main()
  {
    // Turkish culture handles 'i' and 'İ' differently
    CultureInfo turkishCulture = new CultureInfo("tr-TR");
    string turkishString = "İstanbul";
    string searchText = "istanbul";

    // Default culture comparison (typically en-US)
    bool defaultResult = turkishString.Contains(searchText, StringComparison.CurrentCultureIgnoreCase);

    // Turkish culture comparison
    CultureInfo.CurrentCulture = turkishCulture;
    bool turkishResult = turkishString.Contains(searchText,
      StringComparison.CurrentCultureIgnoreCase);

    Console.WriteLine($"Default culture result: {defaultResult}");
    Console.WriteLine($"Turkish culture result: {turkishResult}");
  }
}
```

Here is the output:

```shell
Default culture result: True
Turkish culture result: False
```

## Codebyte Example

The example below determines whether the word `helpful` is included in the particular string.

```codebyte/csharp
using System;

public class CodeByte
{
    public static void Main()
    {
        string exampleString = "Codecademy is very helpful";
        string stringToFind = "helpful";

        if (exampleString.Contains(stringToFind))
        {
          Console.WriteLine("The example string contains the word \"{0}\"", stringToFind);
        }
    }
}
```
