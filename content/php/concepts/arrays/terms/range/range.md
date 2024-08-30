---
Title: 'range()'
Description: 'Returns an array that contains a series of elements based on the parameters given.'
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

The **`range()`** function generates an array containing a sequence of elements. The function allows for the specification of a starting point, an endpoint, and an optional step value to determine the increment between elements.

## Syntax

```pseudo
range($start, $end, $step)
```

The `range()` function accepts three parameters as described below:

- `$start`: The starting value of the sequence.
- `$end`: The endpoint value of the sequence.
- `$step`(optional): The increment between elements in the sequence. If not specified, the default value is `1`.

The `range()` function returns an array of elements from `$start` to `$end`, and is inclusive (the `$end` value will be the final element in the array).

> **Note:** If the `$start` parameter is higher than the `$end` parameter, the range array will be from high to low.

## Example

The following example uses the `range()` function to generate a sequence of even numbers from `2` to `10` with a step of `2`.

```php
<?php
$evenNumbers = range(2, 10, 2);
foreach ($evenNumbers as $num) {
    echo $num . ' ';
}
?>
```

The example will result in the following output:

```shell
2 4 6 8 10
```

## Codebyte Example

This example is runnable and uses the `range()` function:

```codebyte/php
<?php
$tebahpla = range('z','a');

// Printing elements of the array
foreach ($tebahpla as $a) {
    echo "$a ";
}
?>
```
