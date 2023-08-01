---
Title: 'compact()'
Description: 'Returns an array from variables and their values.'
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

The **`compact()`** function generates an array from variables and their values.

## Syntax

```pseudo
compact($variable1, ...$variableN)
```

The `compact()` function accepts the following parameters:

- `$variable1`: Can be a string with the variable name, or an array of variables.
- `$variableN`(optional): These are additional parameters, and each can be a string with the variable name or an array of variables. Multiple parameters are allowed.

The `compact()` function returns an array with all the variables added to it.

> **Note:** Any string that does not match a variable name will be skipped.

## Example

The following example demonstrates a basic implementation of `compact()`.

```php
<?php
// Create some variables
$name = 'John';
$age = 30;
$city = 'New York';

// Use compact() to create an array from variables
$person = compact('name', 'age', 'city');

// Output the resulting array
print_r($person);
?>
```

The example will result in the following output:

```shell
Array
(
    [name] => John
    [age] => 30
    [city] => New York
)
```

## Codebyte Example

This example is runnable and uses the `compact()` function:

```codebyte/php
<?php
$username = "john";
$password = "hunter1";
$age = "27";

$NAME = array("username", "password");

$result = compact($NAME, "age");

print_r($result);
?>
```
