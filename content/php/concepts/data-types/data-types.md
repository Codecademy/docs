---
Title: 'Data Types'
Description: 'PHP supports a number of primitive data types.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Booleans'
  - 'Strings'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

PHP supports the following primitive data types:

- bool: a value that's either `true` or `false`.
- int: a whole number value.
- float: a numeric value with decimal.
- string: a series of characters.
- array: an ordered map of key/value pairs.
- object: an instance of a pre-defined class.
- callable: a reference to a PHP function.
- iterable: represents any array or object implementing the `Traversable` interface.
- resource: a reference to an external resource.
- NULL: represents a variable with no value.

Rather than being declared in code, the data type is decided at runtime depending on the context. There are many ways to determine the type of a variable or expression.

## Printing the Type and Value

The `var_dump()` function prints out the type and value of an expression.

### Example

```php
$text = "PHP";
var_dump($text);
```

The output looks like this:

```shell
string(3) "PHP"
```

## The `gettype()` Function

The `gettype()` function returns a human readable string representing the data type of an expression.

### Example

```php
$text = "PHP";
echo(gettype($text));
```

Results in the output:

```shell
string
```

## Checking Types

PHP has a number of "is_type" functions to check the type of a variable.

- `is_bool($value)` returns `true` if `$value` is a bool value.
- `is_int($value)` returns `true` if `$value` is an int value. (Also `is_integer()`.)
- `is_float($value)` returns `true` if `$value` is a float value.
- `is_string($value)` returns `true` if `$value` is a string.
- `is_array($value)` returns `true` if `$value` is an array value.
- `is_object($value)` returns `true` if `$value` is an object value.
- `is_iterable($value)` returns `true` if `$value` is an iterable value.
- `is_resource($value)` returns `true` if `$value` is a resource value.
- `is_null($value)` returns `true` if `$value` is a `NULL` value.

The `is_callable()` function has a slightly more complicated syntax:

```pseudo
is_callable($value, $syntax_only, $callable_name)
```

Where `$value` is the value being checked. The `$syntax_only` parameter is an optional boolean flag that if set `true` will only check if `$value` is properly structured to be used as a callback. The `$callable_name` parameter is optional, and if included, will be set to the name of the callable function or method referred to by `$value`. The function will return `true` if `$value` is a callable value.

## Codebyte Example

```codebyte/php
<?php
  $var = 100;
  print(is_int($var));
?>
```
