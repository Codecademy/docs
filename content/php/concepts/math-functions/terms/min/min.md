---
Title: 'min()'
Description: 'Returns the lowest value out of a group or array of values.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`min()`** function returns the lowest value out of a group or array of values.

## Syntax

```pseudo
// Find the minimum value of a group of values
$lowest = min($value1, $value2, $value3, ...);

// Find the minimum value of an array of values
$values = array($n1, $n2, $n3, ...);
$lowest = min($values);
```

- The values can be of any type. The `min()` function will use the standard comparison rules, so if a string value is compared to an integer, the string value is considered `0`.
- If multiple string values are added, then they will be compared alphanumerically. The returned value will not be converted and if two values are identical, the first in the order will be returned.
- If the parameter is an array, the lowest value of the array will be returned.

## Codebyte Examples

```codebyte/php
<?php
  // Example using an array
  $array_values = array(12, 23, 5, 8, 1);
  $lowest = min($array_values);
  echo "Minimum value of the array is " . $lowest . "\n";

  // Example using multiple values as parameters;
  $lowest = min(3, 2, 1, -2, 6, 9);
  echo "Minimum value is " . $lowest . "\n";

  // Example using strings and integers
  $lowest = min("Codecademy", 5, 9, 2);
  echo "Minimum value with a string is " . $lowest . "\n";

  // Example using only strings
  $lowest = min("Coding", "is", "the", "best");
  echo "Minimum value alphanumerically is " . $lowest . "\n";
?>
```
