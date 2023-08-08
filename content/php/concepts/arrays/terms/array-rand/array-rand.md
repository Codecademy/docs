---
Title: 'array_rand()'
Description: 'Used to select one or more random keys from an array.'
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

The **`array_rand()`** function returns either a random key from an array, or an array of random keys from an array.

## Syntax

```pseudo
array_rand($array, $number = 1)
```

- `$array`: The array from which the keys will be randomly selected.
- `$number` (optional): Specifies the number of random keys to be selected from the array. By default, it is set to 1.

> **Note:** When trying to pick more elements than there are in the array, `array_rand()` will return `NULL` and throw an `E_WARNING` error.

## Example

Consider the following array of fruits.

```php
<?php
  $fruits = array("apple", "banana", "orange", "grape", "mango");
?>
```

To get a single key from the array:

```php
<?php
  $randomKey = array_rand($fruits);
  print_r($randomKey)
?>
```

The above code might result in the following output:

```shell
2
```

To get three random keys from the array:

```php
<?php
  $randomKeys = array_rand($fruits, 3);
  print_r($randomKeys)
?>
```

The above code might result in the following output:

```shell
Array
(
    [0] => 3
    [1] => 0
    [2] => 2
)
```

## Codebyte Example

In the code below, the `array_rand()` function is used to select 3 random keys from the array `$colors`. The corresponding values are then displayed.

Note how the displayed values change every time the code is run.

```codebyte/php
<?php
  $colors = array("red", "green", "blue", "yellow", "brown");
  $random_keys = array_rand($colors, 3);

  echo $colors[$random_keys[0]] . ", ";
  echo $colors[$random_keys[1]] . ", ";
  echo $colors[$random_keys[2]];
?>
```
