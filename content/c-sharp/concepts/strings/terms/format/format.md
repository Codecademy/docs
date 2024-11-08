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

- any additional format information embedded in the corresponding placeholder;
- a specific culture.

## Syntax

```pseudo
String.Format(formatString, value_1, value_2, ..., value_n);

String.Format(culture, formatString, value_1, value_2, ..., value_n);
```

The `.Format()` method is a static method of the `String` class that defines the following parameters:

- `formatString`: a **composite format string** that contains plain text and **format items**, which are placeholders to be replaced by the specified values.
- `value_1`, `value_2`, ..., `value_n`: the values that replace the format items in `formatString`. They can be objects of any type. Each format item requires a corresponding value argument.
- `culture`: an object implementing the `IFormatProvider` interface (usually a `CultureInfo` object), which specifies how to format numeric and date values according to a specific culture. If not passed, the conventions of the current culture are used (i.e., `CultureInfo.CurrentCulture`).

Each format item in the composite format string must be enclosed in curly braces and follow this syntax:

```pseudo
{parameter_specifier[,alignment_specifier][:format_specifier]}
```

Where:

- a **parameter specifier** (mandatory) is a number starting from `0` which indicates the position of the replacing value among those passed to the method. For example, `{0}` for the first value, `{1}` for the second, etc..
- an **alignment specifier** (optional) is a number, separated by a comma, that indicates the minimum number of characters for the value's string representation, which is padded with spaces only if too short. The padding occurs on the right if the specifier is negative (left alignment), or on the left if positive (right alignment). For example, `{0, 15}` right-aligns the first passed value taking up at least 15 characters.
- a **format specifier** (optional) is a string, separated by a colon, that applies a specific format to the value. It is only allowed for types implementing the `IFormattable` interface, essentially numeric, date, and enum values. If missing, it defaults to `G`.

To display a literal curly brace in the result string, you need to double it (`{{`).

The same parameter specifier can be used multiple times in the composite format string if the same value needs to appear more than once.

### Format Specifiers

Format specifiers vary by value type and indicate either:

- a **standard format**, when consisting of a single character corresponding to a predefined format,
- or a **custom format**, when consisting of multiple **custom format specifiers**, each of which is a character with a specific formatting meaning.

Formatting data related to a format specifier (such as which character to use as the decimal separator or the date separator) are usually taken from the `NumberFormat` and `DateTimeFormat` properties of the `CultureInfo` object currently used by the formatting procedure. Changes to these data allow for format customization.

### Numeric Formats

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

A custom numeric format can be defined using **custom numeric format specifiers**. The following table lists some of them and shows examples of formatting the value `1234.5` using the US culture. Note how some formats round the result.

| Specifier | Description                                                                                                                                                         | Example                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `0`       | Digit placeholder replaced by the digit of the formatted value at the same position, or by a `0` if there is no digit.                                              | `00000` >> `01235`      |
| `#`       | Digit placeholder replaced by the digit of the formatted value at the same position, or by nothing if there is no digit.                                            | `#` >> `12345`          |
| `.`       | Decimal separator, based on the culture. Digit placeholders on the right decide how to format the decimal part.                                                     | `0.00` >> `1234.50`     |
| `,`       | A comma between two digit placeholders in the integral part indicates to split the integral digits into groups. The actual group separator is based on the culture. | `#,#.#` >> `1,234.5`    |
| `;`       | A semicolon separates the different sections of the format for positive, zero, and negative values ​​(in that order). The zero section can be skipped.              | `-(-#);#` >> `-(-1235)` |
| `\`       | Escape character to display characters otherwise interpreted as specifiers. It must be doubled in quoted string literals.                                           | `\##` >> `#1235`        |
| any other | Displayed as is.                                                                                                                                                    | `≈#` >> `≈1235`         |

### Date Formats

The following table shows some of the commonly used standard formats for date values and how they would format a date and time value corresponding to June 7, 2009, at 8:05:09 PM, with the US culture.

| Specifier | Description                  | Example                           |
| --------- | ---------------------------- | --------------------------------- |
| `d`       | Short date.                  | `6/7/09`                          |
| `D`       | Long date.                   | `Sunday, June 7, 2009`            |
| `f`       | Full date and short time.    | `Sunday, June 7, 2009 8:05 PM`    |
| `F`       | Full date and long time.     | `Sunday, June 7, 2009 8:05:09 PM` |
| `g`       | General date and short time. | `6/7/09 8:05 PM`                  |
| `G`       | General date and long time.  | `6/7/09 8:05:09 PM`               |
| `M`       | Month and day.               | `June 7`                          |
| `t`       | Short time.                  | `8:05 PM`                         |
| `T`       | Long time.                   | `8:05:09 PM`                      |
| `Y`       | Month and year.              | `June 2009`                       |

A custom date format can be defined using **custom date format specifiers**. The following table lists some of them and shows examples of formatting the value corresponding to June 7, 2009, at 8:05:09 PM using the US culture.

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

For example, `MMM dd, yyyy` applied to `new DateTime(2024, 6, 1)` returns `Jun 01, 2024`.

### Enum Formats

There are only standard formats available to format enum values. Some of these are:

- `G`: An enum value is displayed as its enum name. A binary OR (`\|`) combination of enum values ​​is displayed as a comma-separated list of matching names. An integer (cast to an enum type) is displayed as the name of the matching enum value if found. Otherwise, an attempt is made to find a list of matching names, but only with the enum type defined with the `Flags` attribute. If no match is found, the integer is displayed.
- `F`: Like `G`, but attempts to display a list of names even if the enum type is not defined with the `Flags`attribute.
- `D`: Displays the integer corresponding to the enum value.

## Example

The following example shows how to compose a message using the `.Format()` method and how the result is affected by the culture involved in the formatting procedure. The message is generated twice: once with the current culture (in this case, `en-US`) and once with the British culture (`en-GB`). The example also shows how to use the same parameter specifier in different format items to format the same value (`loginDate`), once as a date and once as a time.

```cs
using System;
using System.Globalization;

public class Example {

  public static void Main (string[] args)
 {
    string name = "John";
    DateTime loginDate = new DateTime(2024, 9, 2, 17, 45, 0);
    string formatString = "Hi {0}, your last login was on {1:d} at {1:t}.";

 // Displaying a message using the current culture:

    string message = String.Format(formatString, name, loginDate);
    Console.WriteLine(message);          

 // Displaying the same message but using an Italian culture:

    CultureInfo culture = CultureInfo.CreateSpecificCulture("en-GB");
    message = String.Format(culture, formatString, name, loginDate);

    Console.WriteLine(message);
 }
}
```

The previous example outputs:

```shell
Hi John, your last login was on 9/2/24 at 5:45 PM.
Hi John, your last login was on 02/09/2024 at 17:45.
```

## Codebyte Example

The following runnable example defines a `User` class to populate a list of `User` objects and display them on the console. The user class uses the `.Format()` method to define a property (`FullName`) that returns a combination of two other fields (`firstName` and `lastName`). The `.Format()` method is also used to create the rows of user data to be displayed. Custom format specifiers are used to format the `Rank` (numeric) and `LastLogin` (date) properties of each user. The default format specifier `G` is used to format the enum property `Type`, since no format specifier is indicated.

```codebyte/csharp
using System;

public enum UserType {None, Student, Teacher, Parent};

public class User
{
   private readonly string firstName;
   private readonly string lastName;
   private readonly UserType type;
   private readonly float rank;
   private readonly DateTime lastLogin;

   public User (string firstName, string lastName, UserType type, float rank, DateTime lastLogin)
   {
     this.firstName = firstName;
     this.lastName = lastName;
     this.type = type;
     this.rank = rank;
     this.lastLogin = lastLogin;
   }

   public string FirstName { get { return firstName; } }
   public string LastName { get { return lastName; } }
   public string FullName { get { return String.Format("{0}, {1}", lastName, firstName); } }
   public UserType Type { get { return type; } }
   public float Rank { get { return rank; } }
   public DateTime LastLogin { get { return lastLogin; } }
}

public class Example {

 static User[] UserList = new User[]
 {
   new User("Alice", "Apple", UserType.Student, 3.456f, new DateTime(2024, 9, 5, 14, 5, 34)),
   new User("Robert", "Blue", UserType.Teacher, 2.453f, new DateTime(2024, 10, 15, 10, 20, 48)),
   new User("John", "Green", UserType.Student, 4.63f, new DateTime(2024, 10, 31, 9, 5, 6)),
   new User("Amelia", "Orange", UserType.Parent, 1.4f, new DateTime(2024, 11, 3, 17, 10, 24))
 };

 static void Main()
 {
    foreach(User user in UserList)
    {
      string line = String.Format("{0} ({1}). Rank: {2:0.00}. Last login on {3:MMM d, yyyy h:mm:ss tt}.",
      user.FullName, user.Type, user.Rank, user.LastLogin);
      Console.WriteLine(line);
    }
  }
}
```
