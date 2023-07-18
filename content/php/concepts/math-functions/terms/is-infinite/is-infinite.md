---
Title: 'is_infinite()'
Description: 'Evaluates whether a value is an infinite number or not.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`is_infinite()`** function evaluates whether the value is infinite or not and returns a *boolean* value.

## Syntax

```pseudo
$result = is_infinite(value);
```

Returns `1` if `value` is infinite, else returns `false/nothing`

## Example

The example below demonstrates the use of the `is_infinite()` function to check whether a number is infinite or not.

```php
<?php
  $value = log(0);
  $result = is_infinite($value);
  echo $result; //this will output '1', indicating True
?>
```

## Codebyte Example

The codebyte below deploys the `is_infinite()` function on the values of `100` and `log(0)` to evaluate whether they are `infinite`:

```codebyte/php
<?php
// Declare the test values

  $test_value1 = 100;
  $test_value2 = log(0);

//Use the if-else conditional to check whether the test values are infinite or not

  if (is_infinite($test_value1)) {
    echo "Test value 1 is infinite.";
  } else {
    echo "Test value 1 is not infinite.";
  }
  echo "\n"; // Separate the output for the two test values using a new line

  if (is_infinite($test_value2)) {
    echo "Test value 2 is infinite.";
  } else {
    echo "Test value 2 is not infinite.";
  }
?>
```
