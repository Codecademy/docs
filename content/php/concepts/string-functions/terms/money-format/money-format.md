---
Title: 'money_format()'
Description: 'Formats a number and returns it as a currency string.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`money_format()`** function takes a given number and formats it to a currency string. `money_format()` is often used in conjunction with the `set_locale()` function, so `money_format()` will default to the currency format of the geographical location specified in `set_locale()`.

## Syntax

```pseudo
money_format($string, $number);
```

- `$string` (required): The string to format and the specifications to format the string. Formatting specifications are listed below.
- `$number` (required): The number to format.

### Formatting Specifications

- `%` (required): Where the formatted number will be inserted in the returned string.

#### Optional Flags

- `=f`: The character to use for padding. If left empty, the default padding is a space.
- `^`: Disables grouping characters. Defined by the current locale, if it is used.
- `+` or `(`: How to format positive and negative numbers. If `(` is specified, the negative numbers will be enclosed by parenthesis. If `+` is specified, there will be no sign in front of the positive numbers and a `-` in front of the negative numbers. If current locale is used in conjunction with `+`, the current locale's version of `+` and `-` will be used. The default is `+`.
- `!`: Omit the currency symbol of the output string.
- `-`: Left-justify (padding on the right) all of the fields. The default is right-justified (padding to the left).

#### Field Width

- `w` (optional): Specifies the minimum field width, which will be right-justified unless the `-` flag is used. The default value is zero.

#### Left Precision

- `#n` (optional): Specifies the maximum amount of digits that can be on the left side of the decimal point. The typical usage is to keep the formatting aligned in the return columns. If the digits to the left of the decimal point is less than `n`, fill characters are used.

This specification is not used if the digits to the left of the decimal point is greater than `n`. If the `^` flag is not used and there are grouping separators, they will be put before the filling characters. However, grouping separators do not apply to fill characters, even if the fill characters are a digit.

To keep alignment, currency, positive, or negative symbols that appear on either side (beginning or end) of the formatted output will be padded to ensure that all formats are of equivalent lengths.

#### Right Precision

- `.p` (optional): Specifies the amount of numbers after the decimal place. If `.p` is set to zero, all numbers after the decimal place will be omitted. If `.p` is not set, the behavior defaults to the specifications of the current locale used.

#### Required Conversion Character

- `i`: The number will be formatted to the specifications of the international format for currency in the given locale.
- `n`: The number will be formatted to the specifications of the national format for currency in the given locale.
- `%`: Where the formatted number will be inserted in the returned string.

## Example

This example uses the `money_format()` function to format a number to the international format for the United States locale.

```php
<?php
  $value = 7269.30
  set_locale(LC_MONETARY, 'en_US');
  echo money_format('US International Format is: %i', $value);
?>
```

This will result in the following output:

```shell
US International format is: USD 7,269.30
```

## Codebyte Example

The following codebyte example can be run and calls the `money_format()` method two times. The second call uses the optional `(` flag for negative numbers, right precision `.p` to two digits, left precision to five digits `#n`, and `=f` to use `&` as the fill character.

```codebyte/php
<?php
  $value = 5463.55
  set_locale(LC_MONETARY, 'en_US');
  echo money_format('%i', $value);
  echo money_format('%=&(#5.2n', $value);
?>
```
