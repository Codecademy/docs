---
Title: 'Loops'
Description: 'A loop allows a block of code to repeat some number of times. Depending on the type of loop, it can repeat a set number of times, until a particular condition is no longer met, or once for each member of an array. The process of repeating the code block is called iteration. A for loop is used in PHP when it is known how many times its bock of code should execute. The syntax looks like this: pseudo for (init; test; increment) { code to execute;'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Loops'
  - 'While'
  - 'For'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

A loop allows a block of code to repeat some number of times.
Depending on the type of loop, it can repeat a set number of times, until a particular condition is no longer met,
or once for each member of an array. The process of repeating the code block is called iteration.

## `for` Loop

A `for` loop is used in PHP when it is known how many times its bock of code should execute. The syntax looks like this:

```pseudo
for (init; test; increment) {
  code to execute;
}
```

- `init`: Initialize a counter variable.
- `test`: Tests the counter variable. The loop continues to iterate as long as this test evaluates to `true`.
- `increment`: Increment/decrements the counter variable. Executed on each loop iteration.
- `code to execute`: Block of code to execute on each iteration. The counter variable is available inside this block.

The order these pieces are executed are: `init`, `test`, `execute`, `increment`, then back to `test`.

Note that it's possible to write a `for` loop that never executes if the initial `test` fails.

### Example

```php
<?php
for ($i = 1;$i <= 10; $i++) {
    echo 'iteration #' . $i . '<br/>';
    }
?>
```

Output:

```shell
iteration #1
iteration #2
iteration #3
iteration #4
iteration #5
iteration #6
iteration #7
iteration #8
iteration #9
iteration #10
```

## `foreach` Loop

A `foreach` loop iterates through a block of code once for each element of an array. The syntax is as follows:

Iterate through array values:

```pseudo
foreach ($array as $value) {
  code to execute;
}
```

- `$array`: An array variable.
- `$value`: Variable to receive each value of array in turn.
- `execute`: Block of code to execute on each iteration. The <code><i>$value</i></code> variable is available inside this block.

Iterate through array keys and values:

```pseudo
foreach ($array as $key => $value) {
  code to execute;
}
```

- `$array`: An array variable.
- `$key`: Variable to receive each key of array in turn.
- `$value`: Variable to receive each value of array in turn.
- `code to execute`: Block of code to execute on each iteration. The <code><i>$key</i></code> and <code><i>$value</i></code> variables are available inside this block.

### Examples

Values only:

```php
<?php
$a = ['one','two','three','four'];

foreach ($a as $x) {
  echo 'The value is ' . $x . '<br />';
  }
?>
```

Output:

```shell
The value is one
The value is two
The value is three
The value is four
```

Values and keys:

```php
<?php
$a = ['one' => 'green','two' => 'blue','three' => 'red','four' => 'yellow'];

foreach ($a as $k => $x) {
  echo 'The value for ' . $k . ' is ' . $x . '<br />';
  }
?>
```

Output:

```shell
The value for one is green
The value for two is blue
The value for three is red
The value for four is yellow
```

## `while` Loop

The `while` loop iterates through a block of code as long as a condition evaluates to `true`. The syntax looks like this:

```pseudo
while (test) {
  code to execute;
}
```

- `test`: The expression to evaluate on each iteration of loop. Iterations continue until this evaluates to `false`.
- `code to execute`: Block of code to execute on each iteration.

### Example

```php
<?php
$x = 0;
$i = 2;

while ($x <= 100) {
    echo 'the number is ' . $x . '<br/>';
    $x += $i;
    $i *= 2;
    }
?>
```

Output:

```shell
the number is 0
the number is 2
the number is 6
the number is 14
the number is 30
the number is 62
```

## `do...while` Loop

The `do...while` loop, like a `while` loop, iterates as long as a condition is `true`.
But the `do...while` loop tests the condition after the iteration, not before, so the loop always executes at least once.

The syntax looks like this:

```pseudo
do {
  execute;
  } while (test);
```

- `test`: The expression to evaluate on each iteration of loop. Iterations continue until this evaluates to `false`.
- `execute`: Block of code to execute on each iteration.

### Example

```php
<?php
$x = 125;

do {
    echo 'the number is ' . $x . '<br/>';
    $x++;
    } while ($x <= 100);
?>
```

Output:

```shell
the number is 125
```

## `break` Statement

The `break` statement can be used to prematurely jump out of a loop during execution.

### Example

```php
<?php
$x = 0;
$i = 2;

while ($x <= 100) {
    echo 'the number is ' . $x . '<br/>';
    if ($x == 14) { break; }
    $x += $i;
    $i *= 2;
    }
?>
```

Output:

```
the number is 0
the number is 2
the number is 6
the number is 14
```

## `continue` Statement

The `continue` statement breaks out of the current loop and immediately starts the next iteration.

### Example

```php
<?php
for ($i = 1;$i <= 10; $i++) {
    if ($i % 2 == 1) {continue; }
    echo 'iteration #' . $i . '<br/>';
    }
?>
```

Output:

```
iteration #2
iteration #4
iteration #6
iteration #8
iteration #10
```
