---
Title: 'is_finite()'
Description: 'Evaluates whether a value is a legal finite number or not.'
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

The **`is_finite()`** function evaluates whether the value is finite or not and returns a *boolean* value.

## Syntax

```pseudo
$result = is_finite(value);
```

Returns `1` (`true`) if the `value` is finite, nothing (`false`) otherwise.

## Example

The example below demonstrates the use of the `is_finite()` function to check whether a number is finite or not.

```php
<?php
  $result = is_finite(100);
  echo $result; //this will output '1', indicating True
?>
```

## Codebyte Example

The codebyte below deploys the `is_finite()` function on the values of `100` and `log(0)` to evaluate whether they are `finite`:

```codebyte/php
<?php
// Declare the test values

  $test_value1 = 100;
  $test_value2 = log(0);

//Use the if-else conditional to check whether the test values are finite or not

  if (is_finite($test_value1)) {
    echo "Test value 1 is finite.";
  } else {
    echo "Test value 1 is not finite.";
  }
  echo "\n"; //separate the output for the two test values using a new line

  if (is_finite($test_value2)) {
    echo "Test value 2 is finite.";
  } else {
    echo "Test value 2 is not finite.";
  }
?>

```
