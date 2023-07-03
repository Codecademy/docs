---
Title: 'array_push()'
Description: 'Inserts one or more element values to the end of an array, and returns the new number of element values in the array.'
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

The **`array_push()`** method inserts one or more element values to the end of an array, and returns the new number of element values in the array.

## Syntax

```pseudo
array_push($array, $value1, $value2, ... $valueN)
```

The `array_push()` function has one required parameter and some optional parameters:

- `$array`: Specifies the input `array`.
- `$value1 ... $valueN`: Specifies the element values to add. This function adds one or more element values at a time which are separated by commas.

The `array_push()` function returns the element count of `$array` with the new element values inserted to the end of the `$array`.

## Example

The following example uses the `array_push()` function to add `"Chervolet"`, and `"Toyota"` element values to the end of the indexed array `$car_brands`:

```php
<?php
$car_brands = array("Mercedes","Ford");
array_push($car_brands,"Chervolet","Toyota");
print_r($car_brands);
?>
```

The example will result in the following output:

```shell
Array (
[0] => Mercedes
[1] => Ford
[2] => Chervolet
[3] => Toyota
)
```

## Codebyte Example

This example is runnable and uses the `array_push()` function:

```codebyte/php
<?php
$supermarkets = array("Costco","Walmart");
array_push($supermarkets,"Sam's Club","Target");
print_r($supermarkets);
echo "\n \n";
$companies = array("Microsoft","Adobe"); 
array_push($companies,["Meta","Amazon"]);
print_r($companies);
echo "\n \n";
$Electronic_devices = array("a"=>"Television","b"=>"Laptop");
array_push($Electronic_devices,"Tablet","Smartphone");
print_r($Electronic_devices);
?>
```
