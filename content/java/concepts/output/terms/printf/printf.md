---
Title: '.printf()'
Description: 'Prints output to the console using various formatting commands.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Formatting'
  - 'Output'
  - 'Strings'
  - 'Print'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.printf()`** method prints output to the console with the use of various formatting commands.

## Syntax

```pseudo
System.out.printf(formatstring, arg1, arg2, ... argN);
```

Where `formatstring` is a string containing various format commands defining how to print an arbitrary number of additional arguments, `arg1, arg2, ... argN`. The format string contains text which is rendered as it appears in the string and format specifiers that output an argument in a specified format.

### Format Specifiers

Format specifiers obey the following sequence:

```pseudo
%[index$][flags][width][.precision]conversion-character
```

The elements in square brackets (`[...]`) are optional.

`index$` is a number followed by `$` which specifies the index of the argument being formatted. The default is to format arguments in the order they appear.

`flags` can contain one or more of the following characters:

- `-`: Left-justify. Defaults to right-justify.
- `+`: For numerical values display a leading `+` or `-`.
- `0`: Zero-pad numerical values (blank padding is the default).
- `,`: Use a comma grouping separator for numerical values (i.e., 1,000,000).
- A space will show a leading `-` for negative numbers or a space for positive numbers.

`width` is a number representing the minimum width used for outputting characters.

`precision` is a number representing the number of digits used to the right of the decimal for floating point numbers, or the length of a substring to extract from a string.

`conversion-characters` are one of the following:

- `b`: Boolean value.
- `B`: Boolean value, uppercase.
- `c`: Unicode character.
- `C`: Unicode character, force uppercase.
- `d`: Decimal integer.
- `f`: Floating-point number.
- `h`: Hashcode.
- `n`: Newline character, platform specific.
- `s`: String.
- `S`: String, force uppercase.
- `t`: Time/date formatting.

The `t` time/date character is followed by one of the following characters to extract parts of a datetime value:

- `T`: Time in hh:mm:ss format.
- `H`: Hour.
- `M`: Minute.
- `S`: Second.
- `L`: Millisecond.
- `N`: Nanosecond.
- `p`: A.M./P.M.
- `z`: Time zone offset.
- `A`: Full day of the week.
- `d`: Two digit day of the month.
- `B`: Full month name.
- `m`: Two-digit month.
- `Y`: Four-digit year.
- `y`: Last two digits of year.

## Example

The following example uses `.printf()` to format various types of output.

```java
import java.util.*;

public class PrintExample {
  public static void main(String[] args) {
    System.out.printf("This is a string: '%10s'%n", "Output");
    System.out.printf("This is a float: %+.2f%n", 123.456);
    Date date = new Date();
    System.out.printf("This is a date: %1$tA, %1$tB %1$td %1$tY %n", date);
  }
}
```

This will produce the following output (with the current date):

```shell
This is a string: '    Output'
This is a float: +123.46
This is a date: Saturday, June 11 2022
```
