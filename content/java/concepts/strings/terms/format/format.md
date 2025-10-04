---
Title: '.format()'
Description: 'Returns a formatted string using the specified format string and arguments.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`.format()`** [method](https://www.codecademy.com/resources/docs/java/methods) returns a formatted string using the specified format string and arguments. This method is part of the `String` class and helps improve code readability, localization support, and consistency.

## Syntax

```pseudo
string.format(str, ...args);
```

**Parameters:**

- `str`: A format string containing fixed text and format specifiers (like `%s`, `%d`, `%f`, etc.).
- `args` (Optional): The values that will replace the format specifiers. It can be of any [data type](https://www.codecademy.com/resources/docs/java/data-types).

**Return value:**

The `.format()` method returns the formatted version of the given string.

### Common Format Specifiers

| Format Specifier |   Type    |
| :--------------: | :-------: |
|       `%b`       | `boolean` |
|       `%c`       |  `char`   |
|       `%d`       |   `int`   |
|       `%f`       |  `float`  |
|       `%s`       | `String`  |

> **Notes:**
>
> - A `NullPointerException` will be thrown if the format is `null`.
> - See Java's similar [`.printf()`](https://www.codecademy.com/resources/docs/java/output/printf) method for more information on format specifiers.

## Example 1: Basic Usage of `.format()`

This example demonstrates the usage of the `.format()` method:

```java
class FormatExample1 {
  public static void main(String[] args) {
    String name = "Katara";
    String job = "bender";

    System.out.println(String.format("%s is a water %s.", name, job));
  }
}
```

Here is the output:

```shell
Katara is a water bender.
```

## Example 2: Formatting Numbers Using `.format()`

This example uses the `%.2f` format specifier to format the given floating-point number to two decimal places:

```java
public class FormatExample2 {
  public static void main(String[] args) {
    double price = 1234.56789;

    String formatted = String.format("Price: $%.2f", price);

    System.out.println(formatted);
  }
}
```

Here is the output:

```shell
Price: $1234.57
```

## Example 3: Formatting Dates Using `.format()`

This example first uses the `Calendar.getInstance()` method to create a `Calendar` object containing the current [date](https://www.codecademy.com/resources/docs/java/date). Then, it uses the `%1$td`, `%1$tm`, and `%1$tY` format specifiers to format the date from the object in `dd/mm/yyyy` format (`%1$` refers to the first argument):

```java
import java.util.Calendar;

public class FormatExample3 {
  public static void main(String[] args) {
    Calendar cal = Calendar.getInstance();

    String formatted = String.format("Date: %1$td/%1$tm/%1$tY", cal);

    System.out.println(formatted);
  }
}
```

Here is the output:

```shell
Date: 21/05/2025
```

> **Note:** Since the `Calendar` object contains the current date, the output may vary each time the code is run.

## Frequently Asked Questions

### 1. What is the difference between `.printf()` and `.format()`?

Both use the same formatting syntax. `.printf()` prints the formatted string directly to the console, while `.format()` returns the formatted string for further use.

### 2. Is `.format()` locale-sensitive?

Yes, there's an overloaded version for `.format()` that accepts a `Locale`, which is especially useful for formatting currency, dates, or numbers:

```java
String.format(Locale.FRANCE, "%.2f", 1234.56); // Uses comma as decimal separator
```

### 3. What happens if the arguments don’t match the format specifiers in `.format()`?

If the arguments don’t match the format specifiers in `.format()`, Java throws a `java.util.IllegalFormatException`, such as `MissingFormatArgumentException` or `IllegalFormatConversionException`.
