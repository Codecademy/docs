---
Title: 'decbin()'
Description: 'Converts a decimal number to a binary number.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
  - 'Math Functions'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`decbin()`** function converts a decimal number to a binary number.

The required parameter is the `number` that is used to specify the decimal value to convert. The result returns a `string` that contains the binary number of the decimal value.

## Syntax

```pseudo
decbin(number); 
```

Where the `number` is the decimal value to be converted to binary.

## Example

```php
echo decbin(333)
```

The result will be the binary number `101001101`.

## Codebyte Example

Using `decbin()` to return the binary equivalent of the decimal `87234`:

```codebyte/php
<?php
  echo decbin(87234);
?>
```
