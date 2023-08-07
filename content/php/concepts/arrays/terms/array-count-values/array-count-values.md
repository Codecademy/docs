---
Title: 'array_count_values()'
Description: 'Counts the occurrences of values in an array.'
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

The **`array_count_values()`** is a function that counts the occurrences of values in an array. It accepts an input array and returns an associative array, where the keys are the unique values found in the array, and the corresponding values are the number of occurrences of each unique value.

## Syntax

```pseudo
$result = array_count_values($array)
```

- `$array` is the array whose values are being counted.
- `$result` is the resultant array with counts.

## Example

The following example demonstrates the usage of `array_count_values()` function to count the occurrences of values from the input array `$inputArray`. When applied, it returns an associative array `$resultArray` containing the unique values as keys and their corresponding counts as values.

```php
<?php
    $inputArray = [1, 2, 3, 2, 4, 1, 2, 4, 5, 1];
    $resultArray = array_count_values($inputArray);

    print_r($resultArray);
?>
```

The example will result in the following output:

```shell
Array
(
    [1] => 3
    [2] => 3
    [3] => 1
    [4] => 2
    [5] => 1
)
```

## Codebyte Example

The following runnable example declares an input string `$inputString`, and converts the string into an array of characters using `str_split()`. Lastly, the `array_count_values()` function is applied to `$characters`, which returns an associative array `$resultArray`.

```codebyte/php
<?php
    $inputString = "PHP is awesome";
    $characters = str_split($inputString);

    $resultArray = array_count_values($characters);

    print_r($resultArray);
?>
```
