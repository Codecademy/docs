---
Title: 'sprintf()'
Description: 'Returns a string with the specified formatting.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/front-end-engineer-career-path'
  - 'paths/computer-science'
---

The `sprintf()` function returns a string with the specified formatting. Its parameters include a single format string followed by any number of values to be formatted.

## Syntax

```php
sprintf($format, $value1, $value2, ... $valueN)
```

Where `$format` is a string value containing the format instructions and `$value1, $value2, ... $valueN` are one to any number of arbitrary values to be formatted. The `sprintf()` function returns the formatted string.

## Format Directive Syntax

The format string is an ordinary string consisting of any arbitrary text containing one or more directives indicating how the values passed in the `sprintf()` function should be expressed within the format string. The format directive follows the following syntax:

```pseudo
%[num$][flags][width][.precision]specifier
```

Where:

- `num$`: The number (one-based) of the value argument to format followed by `$`. Optional, but if specified for one directive in the format string, it should be specified for all, or the function will return unexpected results.
- `flags`: Optional specification for padding and leading `+` sign for numeric values.
- `width`: Optional specification of the minimum number of characters the formatted value should fill. (Padding specified by `flags` with a space as the default.
- `.precision`: Period followed by a number. For `e`, `E`, `f`, and `F` specifiers is the number of digits after the decimal. For `g`, `G`, `h`, and `H` specifiers it is the maximum significant digits. For `s` specifier, it specifies the maximum character limit.
- `specifier`: an alpha character that specifies the format of the output according to the following table.

Secifier|Description
-------:|-----------
b|Numeric value is converted to an integer and shown as a binary number.
c|Numeric value is converted to an integer and is shown as a character with that ASCII value.
d|Numeric value is converted to an integer and is shown as a signed decimal number.
e|Numeric value is shown with scientific notation with a lower case "e".
E|Numeric value is shown with scientific notation with an upper case "E".
f|Numeric value is converted to a float and presented as a locale aware floating-point number.
F|Numeric value is converted to a float and presented as a non-locale aware floating-point number.
g|General numeric format treating exponents as `e`.
G|General numeric format treating exponents as `E`.
h|Like `g` but treats floats as `F`.
H|Like `G` but treats floats as `F`.
o|Numeric value is converted to an integer and shown as a octal number.
s|Value is treated as a string.
u|Numeric value is converted to an integer and is shown as a unsigned decimal number.
x|Numeric value is converted to an integer and shown as a hexidecimal number with lower case letters.
X|Numeric value is converted to an integer and shown as a hexidecimal number with upper case letters.

## Example

```php

```


