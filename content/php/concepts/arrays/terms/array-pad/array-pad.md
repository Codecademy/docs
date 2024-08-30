---
Title: 'array_pad()'
Description: 'Pads an array to a specified length with a value.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`array_pad()`** method pads an array to a specified length with a value. If the specified length is positive, the array is padded to the right with the value until the array's size equals the specified length. Conversely, if the specified length is negative, the array is padded to the left with the value until the array's size equals the absolute value of the specified length. The array will not be padded if the size of the array is more than the absolute value of the specified length.

## Syntax

```pseudo
array_pad($array, $length, $value)
```

- `$array`: Specifies the input `array`.
- `$length`: The new size of `array`.
- `$value`: The value to be padded to `array` if its size is less than the absolute value of `$length`.

> **Note:** The `array_pad()` function returns the padded array according to the specified length with the intended value.

## Example

The following example uses the `array_pad()` function to pad the array `$numbers` to different lengths and values:

```php
<?php
  $numbers = array(1, 2, 3);
  $paddedArray = array_pad($numbers, 5, "hello");
  $paddedArray2 = array_pad($numbers, -5, "you");
  $paddedArray3 = array_pad($numbers, 2, "nope");
  print_r($paddedArray);
  print_r($paddedArray2);
  print_r($paddedArray3);
?>
```

The example above will result in the following output:

```shell
Array
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => hello
    [4] => hello
)
Array
(
    [0] => you
    [1] => you
    [2] => 1
    [3] => 2
    [4] => 3
)
Array
(
    [0] => 1
    [1] => 2
    [2] => 3
)
```

## Codebyte Example

This example is runnable and uses the `array_pad()` function in various scenarios:

```codebyte/php
<?php
  $fruits = array("apple", "banana");
  $padSize = 4;
  $padValue = "orange";

  // Pad the end of the array
  $paddedFruits = array_pad($fruits, $padSize, $padValue);
  print_r($paddedFruits);
  echo "\n";

  // Pad the beginning of the array
  $paddedFruitsNegative = array_pad($fruits, -$padSize, $padValue);
  print_r($paddedFruitsNegative);
  echo "\n";

  // Attempt to pad without changing the size
  $paddedFruitsZero = array_pad($fruits, 2, $padValue);
  print_r($paddedFruitsZero);
  echo "\n";

  // Using an associative array
  $assocArray = array("a"=>"apple", "b"=>"banana");
  $assocPad = array_pad($assocArray, 4, $padValue);
  print_r($assocPad);
?>
```
