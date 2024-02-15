---
Title: 'Conditionals'
Description: 'An if statement takes an expression as an argument: - If the expression evaluates to true its associated code block executes. - If the expression evaluates to false its associated code block is skipped. php  20) {'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Conditionals'
  - 'If'
  - 'Else'
CatalogContent:
  - 'learn-php'
  - 'paths/front-end-engineer-career-path'
  - 'paths/computer-science'
---

## `if` Statement

An `if` statement takes an expression as an argument:

- If the expression evaluates to `true` its associated code block executes.
- If the expression evaluates to `false` its associated code block is skipped.

```php
<?php
  $x = 10;

  if ($x > 20) {
    echo x$ . "is too much";
  }

  if ($x <= 20) {
    echo x$ . "is within limits.";
  }

  // Output: 10 is within limits.
?>
```

The braces `{...}` are optional when the associated code blocks are only a single line. The above code can be rewritten:

```php
<?php
  $x = 10;

  if ($x > 20)
    echo x$ . "is too much.";

  if ($x <= 20)
    echo x$ . "is within limits.";

  // Output: 10 is within limits.
?>
```

## `else` Statement

An `else` statement can immediately follow the `if` block. The code block following the `else` only executes if the `if`'s expression evaluates to `false`.
The above code can be rewritten:

```php
<?php
  $x = 10;

  if ($x > 20) {
    echo x$ . "is too much.";
  } else {
    echo x$ . "is within limits.";
  }
  // Output: 10 is within limits.
?>
```

## `elseif` Statement

Between an `if` block and an `else` block, any number of `elseif` statements and associated code blocks can occur.
Each `elseif` has its own expression to evaluate.
The code block associated with the first `if` or `elseif` to have a `true` expression will be the code block to execute.
Subsequent `elseif` blocks will not execute, even if their own expressions are `true`.
The `else` block will only execute if all `if` and `elseif` expressions evaluate `false`.

```php
<?php
  $x = -10;

  if ($x > 20) {
    echo $x . "is too much.";
  }
  elseif ($x < 0) {
    echo "Negative numbers are illegal!";
  }
  elseif ($x < 5) {
    echo $x . " is too little.";
  }
  else
  {
    echo x$ . "is within limits.";
  }
  // Output: Negative numbers are illegal!
?>
```

Note in the above, if the `elseif` clauses were swapped, then the block where `$x < 0` would never execute.

## The Ternary Operator

There is a compact version of an `if` expression called the ternary operator which has the following syntax:

```pseudo
expression ? true value : false value
```

An example:

```php
<?php
  $x = 10;

  echo ($x > 20) ? $x . " is too much." : $x . " is within limits.";

  // Output: 10 is within limits.
?>
```
