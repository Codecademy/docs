---
Title: 'array_map()'
Description: 'Creates a new array by applying a callback function to each element of an existing array.'
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

The **`array_map()`** function applies a user-defined function to each value of an array and returns a new array with the results. The user-defined function can be used to transform the values of the array in any way desired.

## Syntax

```pseudo
array_map($function, $array1, $array2, ...)
```

- `$function`: The name of the user-defined function that will be applied to each value of the array.
- `$array1`: This is the first array that will be used as input to the callback function.
- `$array2`: This is an optional second array that will be used as input to the callback function.
- `...`: This is an optional variadic argument that can be used to pass additional arrays to the callback function.

## Example

Here is an example of how to use the `array_map()` function:

```php
<?php

function double($number) {
  return $number * 2;
}

$array = [1, 2, 3, 4, 5];
$new_array = array_map('double', $array);
print_r($new_array);

?>
```

The above code results in the following output:

```shell
Array
(
    [0] => 2
    [1] => 4
    [2] => 6
    [3] => 8
    [4] => 10
)

```

## Codebyte Example

The example below defines a function called `addElements()`, which takes two array elements as arguments, and returns the sum. Next, the code declares two arrays of numbers called `$array1` and `$array2` and passes them as arguments to the `array_map()` function. Run the code to see the output.

```codebyte/php
<?php

function addElements($x, $y) {
  return  $x + $y;
}
$array1 = array(1, 2, 3, 4, 5);
$array2 = array(6, 7, 8, 9, 10);
$added_arrays = array_map('addElements', $array1, $array2);
print_r($added_arrays);

?>

```
