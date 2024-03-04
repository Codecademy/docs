---
Title: 'array_combine()'
Description: 'Returns a new array by combining two arrays, where one array represents keys and the other array represents values.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`array_combine()`** method returns a new array of key-value pairs from two separate arrays.

## Syntax

```pseudo
array_combine(arrayOfKeys, arrayOfValues)
```

- `arrayOfKeys`: An array with elements to be used as keys in the combined array.
- `arrayOfValues`: An array with elements to be used as values in the combined array.

> **Note:** If the two arrays do not have an equal number of elements, `array_combine()` will throw a `ValueError` as of PHP 8.0.0.

## Example

In this example, a single array is created from the `$keys` and `$values` arrays.

```php
<?php
  $keys = array("one", "two", "three", "four");
  $values = array(1, 2, 3, 4);

  $combinedArray = array_combine($keys, $values);

  print_r($combinedArray);
?>
```

The output looks like this:

```shell
Array
(
    [one] => 1
    [two] => 2
    [three] => 3
    [four] => 4
)
```

Additionally, if there are multiple keys in the `keys` array, the last value that corresponds to the last occurrence of the key will prevail.

```php
<?php
  $keys = array("one", "two", "two", "four");
  $values = array(1, 2, 3, 4);

  $combinedArray = array_combine($keys, $values);

  print_r($combinedArray);
?>
```

The output looks like this:

```shell
Array
(
    [one] => 1
    [two] => 3
    [four] => 4
)
```

In the example above, the last value of the key `two` is `3`, so the value `3` is used in the combined array.

## Codebyte Example

The following codebyte example declares a `$colors` and a `$food` array. It then combines these two arrays into a new array called `$colorAndFood`.

```codebyte/php
<?php
  $colors = array("red", "green", "blue");
  $food = array("apple", "broccoli", "blueberry");
  $colorAndFood = array_combine($colors, $food);
  print_r($colorAndFood);
?>
```
