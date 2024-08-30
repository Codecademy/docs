---
Title: 'decbin()'
Description: 'Converts a decimal number to a string containing a binary number.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`decbin()`** function converts a decimal number to a string containing a binary number.

## Syntax

```pseudo
decbin(number);
```

Where `number` is the decimal value to be converted to binary. The result returns a string that contains the binary number of the passed decimal value.

## Example

```php
<?php
  echo decbin(333);
?>
```

This will result in the following output:

```shell
101001101
```
