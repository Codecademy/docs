---
Title: 'array_push()'
Description: 'Adds one or more element values to the end of an array, and returns the updated array.'
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

The **`array_push()`** method adds one or more element values to the end of an array, and returns the updated array.

## Syntax

```pseudo
array_push($array, $value1, $value2, ... $valueN)
```

The `array_push()` function has one required parameter and some optional parameters:

- `$array`: Specifies the input `array`.
- `$value1 ... $valueN`: Specifies the element values to add. This function adds one or more element values at a time which are separated by commas.

The `array_push()` function returns an array with the added elements.

## Example

The following example uses the `array_push()` function to add `"Chevrolet"`, and `"Toyota"` element values to the end of the indexed array `$car_brands`:

```php
<?php
  $car_brands = array("Mercedes","Ford");
  array_push($car_brands,"Chevrolet","Toyota");
  print_r($car_brands);
?>
```

The example will result in the following output:

```shell
Array (
[0] => Mercedes
[1] => Ford
[2] => Chevrolet
[3] => Toyota
)
```

## Codebyte Example

This example is runnable and uses the `array_push()` function:

> **Note:** The example uses `count()` to highlight the length of the array before and after the addition of elements. A `foreach` loop is used to cycle through the keys and values of the array.

```codebyte/php
<?php
  $supermarkets = array("Costco","Walmart");
  $size = count($supermarkets);
  echo("Array length before array_push(): " . $size) . "\n\n";
  $newsize = array_push($supermarkets,"Sam's Club","Target");
  echo("Array length after array_push(): " . $newsize . "\n\n");

  foreach($supermarkets as $val){
    echo “Supermarket’s name: " . $val . "\n";
  }

  echo "\n\n";
?>
```
