---
Title: 'array_values()'
Description: 'All of the values in the array are returned.'
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

The **`array_values()`** function allows you to return all the values from an array in numerical order.

## Syntax

```
array_values(array)
```

> **Note:** The array that is returned will have numeric keys that start from 0 and is incremented by 1.

## Example
The example shown below creates an array called `$vehicle` with three key-value pairs. It then uses the `array_values()` function to extract and print the array's values resulting in an indexed array.
```
<?php
$vehicle = array("car" => "BMW", "color" => "gold", "model" => "X5");
print_r(array_values($vehicle));
?>
```
This show the values "BMW", "gold" and "X5" that are printed to the console.
```shell
Array
(
  [0] => BMW
  [1] => gold
  [2] => X5 
)
```

## Codebyte Example

This code example  is runnable and demonstrates how all values can be returned by using the `array_values()` function:

```codebyte/php
<?php
$a=array("Name"=>"Jay", "Age"=>"27","Country"=>"The Bahamas")
print_r(array_values($a));
?>
```