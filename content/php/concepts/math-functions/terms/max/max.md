---
Title: 'max()'
Description: 'Finds and returns the highest value in an array or a list of variables.'
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

The **`max()`** function in PHP is used to find the highest value in an [array](https://www.codecademy.com/resources/docs/php/arrays) or a list of [variables](https://www.codecademy.com/resources/docs/php/variables). It returns the highest value from the input provided.

## Syntax

```pseudo
max($var1, $var2, $var3, ...);
```

`$var1`, `$var2`, `$var3` are the [variables](https://www.codecademy.com/resources/docs/php/variables) from which the maximum value will be returned. In other words, the `max()` function compares the values of all the variables passed in, and returns the highest value among them.

It can be called either with multiple parameters or with a single [array](https://www.codecademy.com/resources/docs/php/array) parameter.

When called with a single array parameter, the **`max()`** function takes an array of values, like this:

```php
$max_value = max([$var1, $var2, $var3]);
```

In this case, the `max()` function compares the values in the array `[$var1, $var2, $var3]`, returns the highest value among them, and then assigns it to the variable `$max_value`.

It's important to note that if the `max()` function is called with a single non-array parameter, it will cause an error:

```php
$max_value = max($var1);
```

The function expects at least two parameters when called with multiple values. Therefore, to use `max()` with a single parameter, it's necessary to use an array:

```php
$max_value = max([$var1]);
```

This will return the value of `$var1`, since it's the only value in the array.

## Example

The example below uses the `max()` function to find the highest value in the array of numbers and then prints the result using the `echo` statement. The output will be the maximum value found in the array.

```php
$numbers = array(23, 12, 35, 67, 8, 90);
$max_value = max($numbers);

echo "The maximum value in the array is: " . $max_value;
```

This example results in the following output:

```shell
The maximum value in the array is: 90
```
