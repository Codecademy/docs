---
Title: 'Functions'
Description: 'Functions are blocks of code that can be repeatedly called by other code when it executes. A function is not called when it is defined, but only when another part of the code executes the function. The syntax for a user defined function in PHP is similar to other languages: php function functionName(parameters) { code to execute; }'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'learn-php'
  - 'paths/front-end-engineer-career-path'
  - 'paths/computer-science'
---

Functions are blocks of code that can be repeatedly called by other code when it executes.
A function is not called when it is defined, but only when another part of the code executes the function.

## Syntax

The syntax for a user defined function in PHP is similar to other languages:

```php
function functionName(parameters) {
  code to execute;
}
```

- `functionName`: The name of the function. It must start with an alphabetic character or an underscore, and must consist only of alphanumeric characters or underscores.
- `parameters`: Zero or more comma-separated variables that will be passed on to the code block when the function is called.
- `code to execute`: The code that executes when the function is called.

## Example

The following function takes a numeric argument and returns a string saying if it is even or odd:

```php
<?php

  function oddOrEven($x) {
    if ($x % 2 == 1) {
      return 'Odd';
      } else {
      return 'Even';
      }
    }

    echo oddOrEven(15) . '<br />';
    // Output: Odd

    echo oddOrEven(20) . '<br />';
    // Output: Even
?>
```

## The `return` Keyword

The `return` keyword in a function ends execution of the function and returns an optional value. If the value is omitted, the function returns a `null` value.

```php
<?php
  function example() {
    $x = 1;
    $x++;
    return $x; // Execution stops and $x is returned to the caller
    $x = 15; // This is never executed
  }

  echo example();
  // Output: 2;
?>
```

## Passing Parameters by Reference

Parameters are usually passed to PHP functions "by value." This means that when a variable is passed to the function,
its value is copied and any change of the parameter variable does not affect the original variable.
When a parameter is passed "by reference", changes to the variable inside the function will affect the variable being passed to the function.
A parameter is passed by reference when it is preceded by `&` in the function definition.

```php
<?php
  function changeMe(&$x) {
    $x++;
    }

  $y = 10;
  changeMe($y);
  echo $y;
  // Output: 11;
?>
```

## Default Parameter Value

PHP functions can be defined with default values for parameters that are omitted when the function is called. The syntax looks like this:

```php
<?php
  function default10($x = 10) {
    return $x;
    }

   echo default10(5) . '<br />';
   // Output: 5
   echo default10(125) . '<br />';
   // Output: 125
   echo default10() . '<br />';
   // Output: 10
?>
```

## Type Declarations

PHP is a loosely-typed language. That means that data types are not required when assigning values to variables and function parameters.
PHP will manage type conversion by itself is situations such as trying to add an integer to a string.
In PHP 7 it introduced type declarations so a function definition can define what data types it expects for parameters.

```php
<?php
  function specifyTypes(int $x, int $y) {
    echo $x . "*" . $y . "=" . ($x * $y) . '<br />';
    }

  specifyTypes(2, 3);
  specifyTypes(2, 3.5);
  specifyTypes(2, "3.8");
  specifyTypes(2, "3 apples");
  // All Output: 2*3=6
?>
```

PHP can also use `strict` mode, where if a function is passed a data type it isn't explicitly expecting, an error will be thrown.
`strict` is enabled when the statement `declare(strict_types=1);` is the first line of the PHP file. (It must be the first line, before any other PHP or HTML code.)

```php
<?php declare(strict_types=1);
  function specifyTypes(int $x, int $y) {
    echo $x . "*" . $y . "=" . ($x * $y) . '<br />';
  }

  specifyTypes(2,3); // Outputs 2*3=6
  specifyTypes(2,3.5); // Throws error
  specifyTypes(2,"3.8"); // Throws error
  specifyTypes(2,"3 apples"); // Throws error

?>
```

In PHP 7, the function definition can also declare the data type it expects for its return value.
In `strict` mode an error will be thrown if there's a type mismatch.

```php
<?php declare(strict_types=1);
  function throwsError(float $x, float $y) : int {
    return $x + $y;
  }

  function typeSafe(float $x, float $y) : int {
    return (int)($x + $y);
  }
?>
```
