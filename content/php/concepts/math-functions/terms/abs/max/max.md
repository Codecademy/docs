---
Title: 'Max()'
Description: 'The max() function in PHP is used to find the highest value in an array or a list of variables. It returns the highest value from the input provided.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
 - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The `max()` function in PHP is used to find the highest value in an [array](https://www.codecademy.com/resources/docs/php/arrays) or a list of [variables](https://www.codecademy.com/resources/docs/php/variables). It returns the highest value from the input provided.

## Syntax

```pseudo
max($var1, $var2, $var3, ...);
```

## Example

$var1, $var2, $var3: These are the [variables](https://www.codecademy.com/resources/docs/php/variables) or [array](https://www.codecademy.com/resources/docs/php/arrays) from which the maximum value will be returned.

```php
$numbers = array(23, 12, 35, 67, 8, 90);
$max_value = max($numbers);
echo "The maximum value in the array is: " . $max_value;
```

The example uses the `max()` function to find the highest value in the array of numbers and then prints the result using the `echo` statement. The output will be the maximum value found in the array.

```php
The maximum value in the array is: 90
```