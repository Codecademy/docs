---
Title: 'array_keys()'
Description: 'Returns all keys or a subset of the keys of a given array.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`array_keys()`** function returns an array containing all the keys or a subset of the keys of the array provided. `array_keys()` can operate on both indexed and associative arrays.

## Syntax

```pseudo
array_keys($array, $filter_value, $strict)
```

- `$array`: The array from which the keys are retrieved.
- `$filter_value`: Optional parameter used to return a subset of the keys where the value matches the argument provided.
- `$strict`: Optional parameter to be used with `$filter_value`. If set to `true` a strict comparison of the argument passed to `$filter_value` and the array values is performed. By default `$strict` is set to `false`.

## Example

The following example extracts all the keys from the array. The array `$arr` contains numeric and string indexes.

```php
<?php
    $arr = array("hello" => "world", "hi", "greeting" => "welcome", 5 => "hello");
    print_r(array_keys($arr));
?>
```

The above code results in the following output:

```shell
Array
(
    [0] => hello
    [1] => 0
    [2] => greeting
    [3] => 5
)
```

## Codebyte Example

The runnable example demonstrates the use of the two optional parameters `$filter_value` and `$strict`. `array_keys()` is called with the `$colors` array and `$filter_value` set to `"yellow"`. Note that the filter is case sensitive.

Observe the affect of the `$strict` parameter on the subset of keys returned when `array_keys()` is called with the `$numbers` array. By performing a strict comparison `5` and `"5"` are not considered equal since they have different types.

```codebyte/php
<?php
    $colors = array("red", "orange", "yellow", "green", "yellow", "blue", "Yellow");
    print_r(array_keys($colors, "yellow"));

    $numbers = array(5, 6, 7, "5", 5, 9);
    print_r(array_keys($numbers, 5));

    $numbers = array(5, 6, 7, "5", 5, 9);
    print_r(array_keys($numbers, 5, true));
?>
```
