---
Title: 'array_pop()'
Description: 'Removes the last element of an array.'
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

The **`array_pop()`** method removes the last element of an array, and returns the truncated array.

## Syntax

```pseudo
array_pop($array)
```

The `array_pop()` function has one required parameter, `$array`, which specifies the input `array`.
If the specified array is empty, null will be returned.

## Example

The following example uses the `array_pop()` function to remove `"Mexico"` from the array `$countries`:

```php
<?php
$countries = array("USA","Canada","England","Mexico");
array_pop($countries);
print_r($countries);
?>
```

The example will result in the following output:

```shell
Array (
[0] => USA
[1] => Canada
[2] => England
)
```

## Codebyte Example

This example is runnable and uses the `array_pop()` function:

```codebyte/php
<?php
$supermarkets = array("Costco","Walmart");
array_pop($supermarkets);
print_r($supermarkets);
echo "\n";
$companies = array("Microsoft");
array_pop($companies);
print_r($companies);
echo "\n";
$empty_array = array();
array_pop($empty_array);
print_r($empty_array);
echo "\n";
$Electronic_devices = array("a"=>"Television","b"=>"Laptop");
array_pop($Electronic_devices);
print_r($Electronic_devices);
?>
```
