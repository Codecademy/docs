---
Title: 'bin2hex()'
Description: 'Converts a string to hexadecimal values.'
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

The **`bin2hex()`** function converts a `string` of characters to a `string` of hexadecimal values.

> **Note:** This function does **NOT** convert strings representing binary digits to hexadecimal values.

## Syntax

```pseudo
bin2hex(char_string);
```

The `bin2hex()` function takes only one parameter as a `string`, `char_string`. The function returns a `string`, the hexadecimal value of `char_string`.

### Example

The following example uses the `bin2hex()` function to convert the `string` of `"PHP"` to hexadecimal values. Then the `echo` command prints this value to the console:

```php
<?php
  echo bin2hex("PHP");
?>
```

The example will result in the following output:

```shell
504850
```

## Codebyte Example

The following example is runnable and creates a new `string` type variable, `my_string`. Then, the `bin2hex()` function converts `my_string` into a hexadecimal value, and finally, the `echo` command prints this value to the console:

```codebyte/php
<?php
  $my_string = "I am learning PHP";
  $hex_value = bin2hex($my_string);
  echo "The hexadecimal value of \"" . $my_string ."\" characters are: " . $hex_value;
?>
```
