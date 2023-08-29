---
Title: 'array_replace()'
Description: 'Used to replace the values of an array with values from one or more arrays.'
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

The **`array_replace()`** function in PHP is used to replace the values of an array with values from one or more arrays.

## Syntax

```pseudo
array_replace(array $array, array ...$replacements)
```

- `$array` (array): The original array that will be used as the base.
- `$replacements` (array): One or more arrays containing the replacement values.

> **Note:** If multiple arrays contain the same key, the value from the last array in the argument list will overwrite the previous ones.

## Example

The code below demonstrates the basic use of the `array_replace()` function:

```php
<?php
$array1 = ['a' => 1, 'b' => 2, 'c' => 3];
$array2 = ['b' => 10, 'c' => 20, 'd' => 30];

$replacedArray = array_replace($array1, $array2);
print_r($replacedArray);
?>
```

**Output:**

```
Array
(
    [a] => 1
    [b] => 10
    [c] => 20
    [d] => 30
)
```

## Codebyte Example

In the following PHP code, the `array_replace()` function is demonstrated by replacing values in the `$baseArray` with values from the `$replacementArray`. The resulting array is then printed.

```codebyte/php
<?php
$baseArray = ['red', 'green', 'blue'];
$replacementArray = [1 => 'yellow', 2 => 'purple'];

$replacedArray = array_replace($baseArray, $replacementArray);
print_r($replacedArray);
?>
```

When executed, this code will output:

```
Array
(
    [0] => red
    [1] => yellow
    [2] => purple
)
```
