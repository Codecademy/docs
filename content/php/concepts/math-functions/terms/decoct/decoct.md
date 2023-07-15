---
Title: 'decoct()'
Description: 'Converts a decimal number to a string containing its octal representation.'
Subjects:
    - 'Computer Science'
    - 'Web Development'
Tags:
    - 'Arithmetic'
    - 'Functions'
    - 'Numbers'
    - 'Conversion'
CatalogContent:
    - 'learn-php'
    - 'paths/web-development'
---
The **`decoct()`** function in PHP is used to convert a decimal number to its octal representation. It takes a decimal number as input and returns a string representing the octal equivalent.
## Syntax
```pseudo
decoct(int $number): string
```
`$number` is the decimal number to be converted to octal.
Returns a string representing the octal equivalent of the decimal number.
## Example
```php
$decimalNumber = 123;
$octalNumber = decoct($decimalNumber);
echo $octalNumber;
```
The output for the above code will be:

```shell
173
```
In the above example, the decimal number `123` is converted to its octal equivalent, which is `173`.

> **Note:** The `decoct()` function returns a string representing the octal value. If the provided input is not a valid decimal number, the function may produce unexpected results.






