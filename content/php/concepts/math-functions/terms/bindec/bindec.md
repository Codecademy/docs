---
Title: 'bindec()'
Description: 'Returns an integer representing the decimal value of the binary string passed as input.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`bindec()`** function in PHP is used to convert a binary string representation to its decimal equivalent. It takes a binary string as input and returns the corresponding decimal value.

## Syntax

```pseudo
bindec(string $binary_string): int
```

- `$binary_string`: The binary string to be converted to decimal.
- Returns an integer representing the decimal value of the binary string.

## Example

```php
$binaryString = '101010';
$decimalValue = bindec($binaryString);
echo $decimalValue;
```

The output for the above code will be:

```shell
42
```

In the above example, the binary string `101010` is converted to its decimal equivalent, which is `42`.

> **Note:** If the binary string contains characters other than `0` and `1`, or if it's an empty string, the `bindec()` function will return `0`. Additionally, if the binary string is too large to fit into an integer (defined by the system, usually 32 or 64 bits) the function may return an incorrect result due to integer overflow.
