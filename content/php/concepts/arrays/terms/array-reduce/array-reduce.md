---
Title: 'array_reduce()'
Description: 'Iterates through an array to produce a single value.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
Tags:
  - 'Arrays'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`array_reduce()`** method iterates through an array to produce a single value.

## Syntax

```pseudo
array_reduce($array, $callback, $initial = null)
```

The first two parameters `$array` and `$callback` are both required, if no argument is given for the `$initial` parameter it will default to the first element of the `$array` argument.

The callback pseudo-code:

```pseudo
callback($carry, $item)
```

This is the function that will be applied to every element of the array, and it must return a value. To start, `$carry` is the `$initial` argument, or the first element of the `$array` argument if nothing was given for the `$initial` parameter.

The `$item` argument is simply the first element of the `$array` argument or its second element respectively. After the first iteration `$carry` will be the result returned from the function and `$item` will be the next element of the array.

After this loop has completed the `array_reduce()` function will return a single value of any type.

## Example

The example below demonstrates how the `array_reduce()` method can be used to return the largest value in an array.

```php
<?php

  $arrOfNumbers = [1, 6, 10, 14, 23];

  function highestNumber($carry, $item) {
    if ($item > $carry) return $item;
    return $carry;
  }

  printf("The largest value in the array is: %f", array_reduce($arrOfNumbers, "highestNumber"));
?>
```

The output will be:

```shell
The largest value in the array is: 23
```

## Codebyte Example

The following code is runnable and demonstrates the use of `array_reduce()` with an optional initial value:

```codebyte/php
<?php

  $arrOfNumbers = [1, 4, 2, 10, 3];

  function sumOfAll($carry, $item) {
    $carry += $item;
    return $carry;
  }

  printf("The sum of all numbers is : %f", array_reduce($arrOfNumbers, "sumOfAll", 10));

?>
```
