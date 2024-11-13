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

The string representation of each value can also be based on:

- Additional format details specified in each placeholder, such as specific number or date formats, or alignment settings.
- A specific culture or regional style, which affects how numbers and dates are formatted.

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

- A **parameter specifier** (mandatory) is a number starting from `0` which indicates the position of the replacing value among those passed to the method. For example, `{0}` for the first value, `{1}` for the second, etc..
- An **alignment specifier** (optional) is a number, separated by a comma, that indicates the minimum number of characters for the value's string representation, which is padded with spaces only if too short. The padding occurs on the right if the specifier is negative (left alignment), or on the left if positive (right alignment). For example, `{0, 15}` right-aligns the first passed value taking up at least 15 characters.
- A **format specifier** (optional) is a character, or a group of characters, preceded by a colon, that applies a specific format to the value. It is only supported by numeric, date, and enum values and defaults to the general format (`G`) if not provided. It depends on the value type and indicates either:
  - A standard format that consists of a single character corresponding to a predefined format (e.g., `C` for currency, `D` for a long date or a decimal, depending on the value type).
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

This example results in the following output::

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

The previous example outputs:

```shell
Hi John, your last login was on 02/09/2024 at 17:45.
```

## Numeric Formats

The following table shows some of the commonly used standard formats for numeric values and how they would format the value of `12345` with the US culture.

| Specifier | Description                                                                                     | Example         |
| --------- | ----------------------------------------------------------------------------------------------- | --------------- |
| `C`       | Currency amount.                                                                                | `$12,345.00`    |
| `D`       | Only digits (0-9) with an optional negative sign (only supported by integral type).             | `12345`         |
| `e`       | Scientific notation with lowercase exponent prefix.                                             | `1.234500e+004` |
| `E`       | Scientific notation with uppercase exponent prefix.                                             | `1.234500E+004` |
| `F`       | Integral and decimal digits with optional negative sign.                                        | `12345.000`     |
| `g`       | The more compact between fixed-point and scientific notation with a lowercase exponent prefix.  | `12345`         |
| `G`       | The more compact between fixed-point and scientific notation with an uppercase exponent prefix. | `12345`         |
| `N`       | Numeric format. It is essentially like `F` but with the integral part digits split into groups. | `12,345.000`    |

A standard numeric format can be followed by a **precision specifier**, a number that has a different meaning based on the format specifier:

- For `C`, `E`, `F`, and `N`, it is the desired number of decimal places.
- For `D`, it is the minimum number of digits desired. Shorter values are padded with leading zeros.
- For `G`, it is the maximum number of significant digits that can appear.

If missing, a default precision based on the format specifier is applied.

Numbers can also be rounded when formatting. For example, `F2` formats `12345` to `12345.00` and `12.345` to `12.35`;

A custom numeric format can be created using custom numeric format specifiers. The table below lists some common specifiers and provides examples of formatting the value `1234.5` using US culture settings.

| Specifier | Description                                                                                                                                            | Example                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| `0`       | Digit placeholder replaced by the digit of the formatted value at the same position, or by a `0` if there is no digit.                                 | `00000` >> `01235`      |
| `#`       | Digit placeholder replaced by the digit of the formatted value at the same position, or by nothing if there is no digit.                               | `#` >> `12345`          |
| `.`       | Decimal separator. Digit placeholders on the right decide how to format the fractional part. If missing, the fractional part is cut (and rounded).     | `0.00` >> `1234.50`     |
| `,`       | A comma between two digit placeholders in the integer part specifies that the integer part should be split into groups of digits.                      | `#,#.#` >> `1,234.5`    |
| `;`       | A semicolon separates the different sections of the format for positive, zero, and negative values ​​(in that order). The zero section can be skipped. | `-(-#);#` >> `-(-1235)` |
| `\`       | Escape character to display characters otherwise interpreted as specifiers. It must be doubled in quoted string literals.                              | `\##` >> `#1235`        |
| any other | Displayed as is.                                                                                                                                       | `≈#` >> `≈1235`         |

The formatted number is rounded at the rightmost digit placeholder `0` or `#`. The characters used as separators and other symbols depend on the culture.

## Date Formats

The following table shows some of the commonly used standard formats for date values and how they would format a date and time value corresponding to June 7, 2009, at 8:05:09 PM, with the US culture.

| Specifier | Description                 | Example                           |
| --------- | --------------------------- | --------------------------------- |
| `d`       | Short date                  | `6/7/09`                          |
| `D`       | Long date                   | `Sunday, June 7, 2009`            |
| `f`       | Full date and short time    | `Sunday, June 7, 2009 8:05 PM`    |
| `F`       | Full date and long time     | `Sunday, June 7, 2009 8:05:09 PM` |
| `g`       | General date and short time | `6/7/09 8:05 PM`                  |
| `G`       | General date and long time  | `6/7/09 8:05:09 PM`               |
| `M`       | Month and day               | `June 7`                          |
| `t`       | Short time                  | `8:05 PM`                         |
| `T`       | Long time                   | `8:05:09 PM`                      |
| `Y`       | Month and year              | `June 2009`                       |

A custom date format can be defined using custom date format specifiers. The following table lists some of them and shows examples of formatting the value corresponding to June 7, 2009, at 8:05:09 PM using the US culture.

| Specifier        | Description                                                                                                               | Example                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `/`, `:`         | Date (`/`) and time (`:`) separators, based on the culture.                                                               | `y/M/d h:m:s` >> `9/6/7 8:5:9`     |
| `d`, `dd`        | Day of the month, from `1` to `31` (`d`) or `01` to `31` (`dd`).                                                          | `M/dd/y` >> `6/07/9`               |
| `ddd`, `dddd`    | Abbreviated (`ddd`) or full (`dddd`) name of the day.                                                                     | `ddd, MMM d` >> `Sun, Jun 7`       |
| `M`, `MM`        | Month, from `1` to `12` (`M`) or `01` to `12` (`MM`).                                                                     | `MM/dd/yy` >> `06/07/09`           |
| `MMM`, `MMMM`    | Abbreviated (`MMM`) or full name (`MMMM`) of the month.                                                                   | `dddd, MMMM d` >> `Sunday, June 7` |
| `y`, `yy`        | Year, from `0` to `99` (`y`) or `00` to `99` (`yy`).                                                                      | `d MMM yy` >> `7 Jun 09`           |
| `yyy` to `yyyyy` | Year, as a three (`yyy`), four (`yyyy`), or five (`yyyyy`) digit number.                                                  | `MM/dd/yyyy`>> `06/07/2009`        |
| `h`, `hh`        | Hours, using a 12-hour clock from `1` to `12` (`h`) or `01` to `12` (`hh`).                                               | `hh:mm tt` >> `08:05 PM`           |
| `H`, `HH`        | Hours, using a 24-hour clock from `0` to `23` (`H`) or `00` to `23` (`HH`).                                               | `HH:mm` >> `20:05`                 |
| `m`, `mm`        | Minutes, from `0` to `59` (`m`) or `00` to `59` (`mm`).                                                                   | `m \\min` >> `5 min`               |
| `s`, `ss`        | Seconds, from `0` to `59` (`s`) or `00` to `59` (`ss`).                                                                   | `s \\sec` >> `9 sec`               |
| `f` to `fffffff` | The fraction of a second: tenth (`f`), hundredths (`ff`), ..., or ten millionths (`fffffff`).                             | `HH:mm:ss.fff` >> `20:05:09.000`   |
| `F` to `FFFFFFF` | If non-zero, the fraction of a second: tenth (`F`), hundredths (`FF`), ..., or ten millionths (`FFFFFFF`).                | `HH:mm:ss.fFF` >> `20:05:09.0`     |
| `t`, `tt`        | The first character of the AM/PM designator (`t`) or the entire one (`tt`).                                               | `hh:mm t` >> `08:05 P`             |
| `\`              | Escape character to display characters otherwise interpreted as specifiers. It must be doubled in quoted string literals. | `\da\y: d` >> `day: 7`             |
| any other        | Displayed as is.                                                                                                          | `MM-dd-yyyy` >> `06-07-2009`       |

The characters used as separators and other symbols in the formatted date or time depend on the culture specified.

## Enum Formats

There are only standard formats available to format enum values, namely `G`, `F`, `D`, and `X`.

For example, let the `Access` type be defined as:

```cs
public enum Access { Read = 1, Write = 2};
```

With the `G` specifier:

- An enum value is displayed as its enum name. For example `Access.Read` is displayed as `Read`.
- A combination of enum values ​​using the bitwise OR operator (`|`) is displayed as a comma-separated list of matching names. For example `Access.Read | Access.Write` is displayed as `Read, Write`.
- An integer (cast to an enum type) is displayed as the name of the matching enum value if found. For example `((Access)1)` is displayed as `Read` while `((Access)3)` is displayed as `3` since there is no matching enum name. But if the enum type is defined with a `[Flags]` attribute (e.g., `[Flags] public enum Access { ... };`), an attempt is made to find a list of matching names. In that case, `((Access)3)` would be displayed as `Read, Write` since `1 | 2 = 3`.

> **Note:** To understand why `1 | 2 = 3`, convert the operands in binary format (`1` becomes `01` and `2` becomes `10`), then apply the `|` operator bit by bit using the following rules `0 | 0 = 0`, `0 | 1 = 1`, `1 | 0 = 0`, and `1 | 1 = 1`. The result of the operation `10 | 01` is `11` which corresponds to `3`.

The `F` specifier works like `G`, but it attempts to display an integer as a list of matching names even if the enum type is not defined with the `Flags`attribute. For example, in our case `((Access)3)` is displayed as `Read, Write` even if the `Access` type is defined without the `[Flags]` attribute.

The `D` displays the enum value as the corresponding integer, and `X` as the corresponding hexadecimal value. For example, `Access.Write` is displayed as `2` with `D`, and as `00000002` with `X`.

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
