---
Title: '.printf()'
Description: 'Prints output to the console using various formatting commands.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Formatting'
  - 'Output'
  - 'Strings'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.printf()`** [method](https://www.codecademy.com/resources/docs/java/methods) prints output to the console with the use of various formatting commands. It comes from the `PrintStream` [class](https://www.codecademy.com/resources/docs/java/classes) and can be used to format [strings](https://www.codecademy.com/resources/docs/java/strings), numbers, and other [data types](https://www.codecademy.com/resources/docs/java/data-types) neatly and precisely.

## Syntax

```pseudo
System.out.printf(formatString, arg1, arg2, ..., argN);
```

**Parameters:**

- `formatString`: A string containing various format commands defining how to print an arbitrary number of additional arguments. It contains text which is rendered as it appears in the string and format specifiers that output an argument in a specified format.
- `arg1, arg2, ..., argN`: The values to be formatted and inserted into the format string.

### Format Specifiers

Format specifiers follow this syntax:

```pseudo
%[index$][flags][width][.precision]conversion-character
```

- `index$` (Optional): A number followed by `$` which specifies the index of the argument being formatted. The default is to format arguments in the order they appear.
- `flags` (Optional): Modifies the output format. It can contain one or more of these characters:
  - `-`: Left-justify (right-justify is the default).
  - `+`: For numerical values, display a leading `+` or `-`.
  - `0`: Zero-pad numerical values (blank padding is the default).
  - `,`: Use a comma grouping separator for numerical values (i.e., 1,000,000).
  - A space will show a leading `-` for negative numbers or a space for positive numbers.
- `width` (Optional): A number representing the minimum width used for outputting characters.
- `.precision` (Optional): A number representing the number of digits used to the right of the decimal for floating-point numbers, or the length of a substring to extract from a string.
- `conversion-character`: Specifies the type of value being formatted. It can have one of these values:
  - `b`: Boolean value
  - `B`: Boolean value, uppercase
  - `c`: Unicode character
  - `C`: Unicode character, force uppercase
  - `d`: Decimal integer
  - `f`: Floating-point number
  - `h`: Hashcode
  - `n`: Newline character, platform specific
  - `s`: String
  - `S`: String, force uppercase
  - `t`: Time/date formatting. This character is followed by one of these characters to extract parts of a datetime value:
    - `T`: Time in hh:mm:ss format
    - `H`: Hour
    - `M`: Minute
    - `S`: Second
    - `L`: Millisecond
    - `N`: Nanosecond
    - `p`: A.M./P.M.
    - `z`: Time zone offset
    - `A`: Full day of the week
    - `d`: Two digit day of the month
    - `B`: Full month name
    - `m`: Two-digit month
    - `Y`: Four-digit year
    - `y`: Last two digits of year

## Example 1: Printing an Integer and a String Using `.printf()`

This example uses the `.printf()` method to print an integer with `%d` and a string with `%s`:

```java
public class PrintfExample1 {
  public static void main(String[] args) {
    int age = 25;
    String name = "Alice";

    System.out.printf("Name: %s, Age: %d%n", name, age);
  }
}
```

Here is the output of this code:

```shell
Name: Alice, Age: 25
```

## Example 2: Formatting Decimal Numbers Using `.printf()`

This example uses the `.printf()` method to format a decimal number to 2 decimal places with `%.2f`:

```java
public class PrintfExample2 {
  public static void main(String[] args) {
    double price = 1234.56789;

    System.out.printf("Price: %.2f%n", price);
  }
}
```

Here is the output:

```shell
Price: 1234.57
```

## Example 3: Aligning Output into Columns Using `.printf()`

This example uses `%-15s` to print strings with padding on the right and `%5.2f` to print floats with 2 decimal places with padding on the left to format the output into columns using `.printf()`:

```java
public class PrintfExample3 {
  public static void main(String[] args) {
    System.out.printf("%-15s %5s%n", "Item", "Price");
    System.out.printf("%-15s %5.2f%n", "Apples", 2.5);
    System.out.printf("%-15s %5.2f%n", "Bananas", 1.75);
    System.out.printf("%-15s %5.2f%n", "Cherries", 3.0);
  }
}
```

Here is the output:

```shell
Item            Price
Apples           2.50
Bananas          1.75
Cherries         3.00
```

## Frequently Asked Questions

### 1. What is the difference between `.print()`, `.println()`, and `.printf()`?

- `.print()`: Prints text without a newline.
- `.println()`: Prints text with a newline at the end.
- `.printf()`: Prints formatted output, with full control over layout, data formatting, precision, etc.

### 2. What happens if I use the wrong format specifier in `.printf()`?

If you use the wrong format specifier in `.printf()`, you'll get a `java.util.IllegalFormatException`.

### 3. Can I print percentages with `.printf()`?

Yes, you can use `%%` with `.printf()` to print a percentage symbol.
