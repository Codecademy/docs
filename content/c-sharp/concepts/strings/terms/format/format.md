---
Title: '.Format()'
Description: 'Creates a new string by replacing placeholders in a format string with the string representation of specified values.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Formatting'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Format()`** method creates a new string by replacing placeholders in a format string with the string representation of specified values. Non-string values are converted to strings by calling their `.ToString()` method.

The string representation of each value is also based on:

- Additional format details specified in each placeholder, such as specific number or date formats, or alignment settings.
- A specific culture or regional style which affects how numbers and dates are formatted.

## Syntax

```pseudo
String.Format(formatString, value_1, value_2, ..., value_n);

String.Format(culture, formatString, value_1, value_2, ..., value_n);
```

The `.Format()` method is a static method of the `String` class that defines the following parameters:

- `formatString`: A string containing plain text and placeholders to be replaced by the specified values. For example, `"My name is {0}."` where `{0}` is a placeholder to be replaced by a value representing the name.
- `value_1`, `value_2`, ..., `value_n`: The values that replace the placeholders in `formatString`. They can be objects of any type. Each placeholder requires a corresponding value argument.
- `culture`: This specifies how numbers and dates should be formatted based on the rules of a specific culture (like language or region). If not provided, it will use the default settings of your system.

Each placeholder in the format string must be enclosed in curly braces and follow this syntax:

```pseudo
{parameter_specifier[,alignment_specifier][:format_specifier]}
```

Where:

- A **parameter specifier** (mandatory) is a number starting from `0`, which indicates the position of the replacing value among those passed to the method. For example, `{0}` for the first value, `{1}` for the second, etc..
- An **alignment specifier** (optional) is a number, separated by a comma, that indicates the minimum number of characters for the value's string representation, which is padded with spaces only if too short. The padding occurs on the right if the specifier is negative (left alignment) or on the left if positive (right alignment). For example, `{0, 15}` right-aligns the first passed value taking up at least 15 characters.
- A **format specifier** (optional) is a character or a group of characters preceded by a colon that applies a specific format to the value. It is only supported by numeric, date, and enum values and defaults to the general format (`G`) if not provided. It depends on the value type and indicates either:
  - A standard format that consists of a single character corresponding to a predefined format (e.g., `C` for currency, `D` for a long date, or a decimal, depending on the value type).
  - A custom format that consists of multiple characters that define specific formatting rules for the value (e.g., `yyyy-MM-dd` for dates).

To display a literal curly brace in the result string, you need to double it (`{{`).

The same parameter specifier can be used multiple times in the format string if the same value needs to appear more than once.

## Example 1

The following example uses two values (a string and a date) to create a new string by applying the `.Format()` method to a format string. The string value (`name`) is inserted into the `{0}` placeholder. The date value (`loginDate`) is used in two placeholders with the same parameter specifier (`{1:d}` and `{1:t}`) to display the date and time parts separately. Here, `d` and `t` specify standard short date and short time formats, respectively. Since no culture argument is provided, the date and the time are formatted according to the rules of the current culture (`en-US`, in this case).

```cs
using System;

public class Example {
  public static void Main (string[] args)
  {
    string name = "John";
    DateTime loginDate = new DateTime(2024, 9, 2, 17, 45, 0);

    // Using String.Format to create the message based on the current culture:
    string message = String.Format("Hi {0}, your last login was on {1:d} at {1:t}.", name, loginDate);

    Console.WriteLine(message);
  }
}
```

This example results in the following output:

```shell
Hi John, your last login was on 9/2/24 at 5:45 PM.
```

## Example 2

The following example is a variation of the previous one which shows how to format `loginDate` using the rules of the British culture (`en-GB`).

```cs
using System;
using System.Globalization;

public class Example {

  public static void Main (string[] args)
  {
    string name = "John";
    DateTime loginDate = new DateTime(2024, 9, 2, 17, 45, 0);

    // Using String.Format to create the message based on the British culture:
    CultureInfo culture = CultureInfo.CreateSpecificCulture("en-GB");
    string message = String.Format(culture, "Hi {0}, your last login was on {1:d} at {1:t}.", name, loginDate);

    Console.WriteLine(message);
 }
}
```

This example results in the following output:

```shell
Hi John, your last login was on 02/09/2024 at 17:45.
```

## Codebyte Example

The following example uses the `.Format()` method to create a string with a name, a date, and a number, where the date displays only the month and day, and the number is rounded to a single digit after the decimal point.

```codebyte/csharp
using System;

public class Example {

 static void Main()
 {
    DateTime date = new DateTime(2024, 8, 4);
    string name = "John";
    double temperature = 102.68;

    // Using String.Format to create a formatted string
    string formattedString = String.Format("On {0:M}, {1} recorded a temperature of {2:0.0}°F.",  date, name, temperature);

    Console.WriteLine(formattedString);
  }
}
```
