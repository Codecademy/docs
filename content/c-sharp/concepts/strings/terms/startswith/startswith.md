---
Title: '.StartsWith()'
Description: 'Determines if the start of the string instance matches the specified string and returns a boolean.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Characters'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.StartsWith()`** method determines whether the start of the `string` instance matches the specified character or string. Additional parameters may be supplied to define the criteria for a match.

## Syntax

```pseudo
// Determines whether the String instance's first character matches the specified character.
String.StartsWith(char);

// Determines whether the start of String instance matches the specified string.
String.StartsWith(string);

// Same as above but uses additional case-sensitive and culture-sensitive criteria.
String.StartsWith(string, ignoreCase, culture)

// Same as above but uses an enumeration to determine the case- and culture-sensitive criteria.
String.StartsWith(string, comparisonType)
```

`.StartsWith()` is a static method of the `String` object. It takes the following arguments:

- `char` is an instance of the `Char` structure; represents a single letter.
- `string` is an instance of the `String` object.
- `ignoreCase` is a boolean; if `true` then case is ignored for comparison (e.g., 'a' == 'A').
- `culture` is an instance of the `System.Globalization.CultureInfo` class which includes culture-specific sort order rules.
- `comparisonType` is an element of the `StringComparison` enumeration which encapsulates the case- and culture-specific criteria; available fields include:
  - `CurrentCulture` sets the current culture rules.
  - `CurrentCultureIgnoreCase` sets the current culture rules but ignores case.
  - `InvariantCulture` sets the invariant culture's sorting rules (it's a culture that doesn't change based on the user's location).
  - `InvariantCultureIgnoreCase` sets the invariant culture rules but ignores case.
  - `Ordinal` sets ordinal (binary) sort rules to compare strings.
  - `OrdinalIgnoreCase` sets ordinal (binary) sort rules to compare strings but ignores case.

## Example

The following example illustrates a few of the ways the `String.StartsWith()` method may be used to evaluate the start of a `string`.

```cs
using System;
using System.Threading;

public class Example
{
    public static void Main()
    {
        string baseString = "AbCdEfG";
        string compareStart = "abc";

        bool result;

        // String.StartsWith(string)
        result = baseString.StartsWith(compareStart);
        Console.WriteLine("Simple compare: {0}", result.ToString());

        // String.StartsWith(string, ignoreCase, culture)
        result = baseString.StartsWith(compareStart, true, Thread.CurrentThread.CurrentCulture);
        Console.WriteLine("Compare using Case/Culture: {0}", result.ToString());

        // String.StartsWith(string, comparisonType)
        result = baseString.StartsWith(compareStart, StringComparison.InvariantCulture);
        Console.WriteLine("Compare using Enumeration: {0}", result.ToString());
    }

}
```

This is what is printed to the console:

```shell
Simple compare: False
Compare using Case/Culture: True
Compare using Enumeration: False
```

## Codebyte Example

In this example, the `months` array is populated with the months of the year, and the `.StartsWith()` method is used to determine the number of months that start in the letter 'J':

```codebyte/csharp
using System;

public class CodeByteExample
{
    public static void Main()
    {
        string[] months = new string[] {"January",
                                        "February",
                                        "March",
                                        "April",
                                        "May",
                                        "June",
                                        "July",
                                        "August",
                                        "September",
                                        "October",
                                        "November",
                                        "December"};

        int j_count = 0;

        foreach (string month in months)
        {
            if (month.StartsWith('J'))
            {
                j_count++;
            }
        }

        Console.WriteLine("{0} months starts in the letter 'J'", j_count);
    }
}
```
