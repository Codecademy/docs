---
Title: 'array_values()'
Description: 'Returns all of the values in a given array.'
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

The **`array_values()`** function returns all the values from an array in numerical order.

## Syntax

```pseudo
array_values(array)
```

> **Note:** The array that is returned will have numeric keys that start from `0` and increase by `1`.

## Example

The example shown below creates an array called `$vehicle` with three key-value pairs. It then uses the `array_values()` function to extract the array's values.

```php
<?php
$vehicle = array("car" => "BMW", "color" => "gold", "model" => "X5");
print_r(array_values($vehicle));
?>
```

This results in the following output printed to the console.

```shell
Array
(
  [0] => BMW
  [1] => gold
  [2] => X5
)
```

## Codebyte Example

This code example is runnable and demonstrates how values can be returned using the `array_values()` function:

```codebyte/php
<?php
$a=array("Name"=>"Jay", "Age"=>"27","Country"=>"The Bahamas");
print_r(array_values($a));
?>
```
