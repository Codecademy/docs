---
Title: 'sprintf()'
Description: 'Returns a string with a specified formatting.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The `sprintf()` function returns a string with the specified formatting. Its parameters include a single format string followed by any number of values to be formatted.

## Syntax

```pseudo
sprintf($format, $value1, $value2, ... $valueN)
```

Where `$format` is a string value containing the format instructions and `$value1, $value2, ... $valueN` are one to any number of arbitrary values to be formatted. The `sprintf()` function returns the formatted string.

## Format Directive Syntax

The format string consists of any arbitrary text containing one or more directives. These indicate how the values should be expressed within the format string when passed to the `sprintf()` function. Format directives obey the following syntax:

```pseudo
%[num$][flags][width][.precision]specifier
```

Aside from the `specifier`, all of the following arguments are optional:

- `num$`: The number (one-based) of the value argument to format followed by `$`. If specified for one directive in the format string, it should be specified for all, or the function will return unexpected results.
- `flags`: Specification for padding and leading `+` sign for numeric values.
- `width`: Specification of the minimum number of characters the formatted value should fill. (Padding specified by `flags` with a space as the default.
- `.precision`: Period followed by a number. For `e`, `E`, `f`, and `F` specifiers it is the number of digits after the decimal. For `g`, `G`, `h`, and `H` specifiers it is the maximum significant digits. For `s` specifier, it specifies the maximum character limit.
- `specifier`: An alpha character that specifies the format of the output.

The possible flags are listed in the table below:

|  Flag   | Description                                                                                       |
| :-----: | ------------------------------------------------------------------------------------------------- |
|   `-`   | Left justify within the specified width. Right justification is the default.                      |
|   `+`   | Prefix positive numbers with a `+` sign. By default only negative numbers are prefixed by a sign. |
|   `0`   | Left-pads numbers with zeros. With the `s` specifier will also right-pad with zeros.              |
| `'char` | Pads the result with the character `char`.                                                        |

The possible specifiers are listed in the table below:

| Specifier | Description                                                                                         |
| :-------: | --------------------------------------------------------------------------------------------------- |
|    `b`    | Numeric value is converted to an integer and shown as a binary number.                              |
|    `c`    | Numeric value is converted to an integer and is shown as a character with that ASCII value.         |
|    `d`    | Numeric value is converted to an integer and is shown as a signed decimal number.                   |
|    `e`    | Numeric value is converted to a float and shown with scientific notation with a lower case "e".     |
|    `E`    | Numeric value is converted to a float and shown with scientific notation with an upper case "E".    |
|    `f`    | Numeric value is converted to a float and shown as a locale aware floating-point number.            |
|    `F`    | Numeric value is converted to a float and shown as a non-locale aware floating-point number.        |
|    `g`    | General numeric format converting numeric value to a float and treating exponents as `e`.           |
|    `G`    | General numeric format converting numeric value to a float and treating exponents as `E`.           |
|    `h`    | Like `g` but treats floats as `F`.                                                                  |
|    `H`    | Like `G` but treats floats as `F`.                                                                  |
|    `o`    | Numeric value is converted to an integer and shown as an octal number.                              |
|    `s`    | Value is treated as a string.                                                                       |
|    `u`    | Numeric value is converted to an integer and is shown as a unsigned decimal number.                 |
|    `x`    | Numeric value is converted to an integer and shown as a hexadecimal number with lower case letters. |
|    `X`    | Numeric value is converted to an integer and shown as a hexadecimal number with upper case letters. |

## Example

```php
<?php
  $str1 = 'PHP';
  $str2 = 'code';
  $format = "This string is right justified and padded with \"^\" characters: \"%'^8s\".  \nThis string is left justified and padded with spaces: \"%-8s\".";
  echo sprintf($format, $str1, $str2);
?>
```

This results in the following output:

```shell
This string is right justified and padded with "^" characters: "^^^^^PHP".
This string is left justified and padded with spaces: "code    ".
```

## Codebyte Example

```codebyte/php
<?php
  $num1 = 63;
  $num2 = 87;
  $format = 'The number %1$d in hexadecimal is %1$04X. The number %2$d in binary is %2$08b.';
  echo sprintf($format, $num1, $num2);
?>
```

**Note**: The format string must be in single quotes, otherwise PHP will try to interpret the `$d` in the `%1$d` and `%2$d` format directives as a variable.
