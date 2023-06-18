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

The `bindec()` function in PHP is used to convert a binary string representation to its decimal equivalent. It takes a binary string as input and returns the corresponding decimal value.

## Syntax

Here's an explanation of the `bindec()` function along with syntax:

```pseudo
bindec(string $binary_string): int
```

- **Parameters**:
  - `$binary_string`: The binary string to be converted to decimal.

- **Return Value**:
  - Returns an integer representing the decimal value of the binary string.

## Example 1

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

## Example 2

```php
$binaryString = '1100101';
$decimalValue = bindec($binaryString);
echo $decimalValue;
```

The output for the above code will be:

```shell
101
```

In this example, the binary string `1100101` is converted to its decimal equivalent, which is `101`.

It's important to note that if the binary string contains characters other than `0` and `1`, or if it's an empty string, the `bindec()` function will return `0`. Additionally, if the binary string is too large to fit into an integer, the function may return an incorrect result due to integer overflow.

## Additional details

Here are a few additional details about the `bindec()` function in PHP:

- **Binary String Format**: The `bindec()` function expects the binary string to be in the standard format, consisting of 0s and 1s. It does not recognize any prefixes such as `0b` or `0B` to indicate a binary number.

- **Leading Zeros**: The function can handle binary strings with leading zeros. For example, `'001010'` and `'1010'` will both be correctly converted to the decimal value `10`.

- **Limitations**: PHP's `bindec()` function is limited by the maximum integer size on your system. On most systems, this limit is determined by the platform's native integer size, typically 32 or 64 bits. If the binary string exceeds this limit, the result may not be accurate due to integer overflow.

- **Error Handling**: If the input to `bindec()` is not a valid binary string (i.e., contains characters other than `0` and `1`), or if it's an empty string, the function will return `0`. It's important to validate the input before using `bindec()` to avoid unexpected results.
