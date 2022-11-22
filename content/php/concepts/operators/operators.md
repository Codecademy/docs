---
Title: 'Operators'
Description: 'Operators are used to perform operations on variables and values. PHP has the following basic arithmetic operators to perform common mathematical operations: addition, subtraction, multiplication, division, modulo, exponentiation.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

**Operators** are used to perform operations on variables and values.

## Arithmetic Operators

PHP has the following basic arithmetic operators to perform common mathematical operations:

| Operator | Name           | Description                                                     |
| -------- | -------------- | --------------------------------------------------------------- |
| `+`      | Addition       | `$x + $y` returns the sum of `$x` and `$y`                      |
| `-`      | Subtraction    | `$x - $y` returns the difference of `$x` and `$y`               |
| `*`      | Multiplication | `$x * $y` returns the product of `$x` and `$y`                  |
| `/`      | Division       | `$x / $y` returns the quotient of `$x` and `$y`                 |
| `%`      | Modulo         | `$x % $y` returns the integer remainder of `$x` divided by `$y` |
| `**`     | Exponentiation | `$x ** $y` returns `$x` raised to the power `$y`                |

The division operator returns a float unless its operands are integers and the result is a whole number, in which case it returns an integer.

Operands of modulo are converted to integers before calculating. The modulo result will have the same sign as the dividend.

```php
<?php
  $x = 0;
  $x = $x + 4; // $x is now 4
  $x = $x - 1; // $x is now 3
  $x = $x * 8; // $x is now 24
  $x = $x / 4; // $x is now 6
  $x = $x % 4; // $x is now 2
  $x = $x ** 3; // $x is now 8
?>
```

## Assignment Operators

The basic assignment operator is `=`, which takes the right-hand operand and assigns it to the variable that is the left-hand operand. PHP also has a number of additional assignment operators that are shortcuts for longer expressions.

### Arithmetic Assignment Operators

There is an assignment operator for each arithmetic operator above.

| Operator | Name                      | Description                            |
| -------- | ------------------------- | -------------------------------------- |
| `+=`     | Addition Assignment       | `$a += 3` is short for `$a = $a + 3`   |
| `-=`     | Subtraction Assignment    | `$a -= 3` is short for `$a = $a - 3`   |
| `*=`     | Multiplication Assignment | `$a *= 3` is short for `$a = $a * 3`   |
| `/=`     | Division Assignment       | `$a /= 3` is short for `$a = $a / 3`   |
| `%=`     | Modulo Assignment         | `$a %= 3` is short for `$a = $a % 3`   |
| `**=`    | Exponentiation Assignment | `$a **= 3` is short for `$a = $a ** 3` |

```php
<?php
  $x = 0;
  $x += 4; // $x is now 4
  $x -= 1; // $x is now 3
  $x *= 8; // $x is now 24
  $x /= 4; // $x is now 6
  $x %= 4; // $x is now 2
  $x **= 3; // $x is now 8
?>
```

### Bitwise Assignment Operators

There is an assignment operator for each bitwise operator (see below).

| Operator | Name                   | Description                            |
| -------- | ---------------------- | -------------------------------------- |
| `&=`     | And Assignment         | `$a &= 3` is short for `$a = $a & 3`   |
| `\|=`    | Or Assignment          | `$a \|= 3` is short for `$a = $a \| 3` |
| `^=`     | Xor Assignment         | `$a ^= 3` is short for `$a = $a ^ 3`   |
| `<<=`    | Left Shift Assignment  | `$a <<= 3` is short for `$a = $a << 3` |
| `>>=`    | Right Shift Assignment | `$a >>= 3` is short for `$a = $a >> 3` |

```php
<?php
  $x = 19;
  $x &= 7;
  // $x is 3 : 10011 & 00111 = 00011

  $x = 19;
  $x |= 7;
  // $x is 23 : 10011 | 00111 = 10111

  $x = 19;
  $x ^= 7;
  // $x is 20 : 10011 ^ 00111 = 10100

  $x = 7;
  $x <<= 2;
  // $x is 28 : 00111 << 2 = 11100

  $x = 19;
  $x >>= 2;
  // $x is 4 : 10011 >> 2 = 00100
?>
```

## Bitwise Operators

The bitwise operators manipulate individual bits in an integer.

| Operator | Name        | Description                                                                                                                                                             |
| -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `&`      | And         | result has bit set only where both operands have that bit set.                                                                                                          |
| `\|`     | Or          | result has bit set if either operand has that bit set.                                                                                                                  |
| `^`      | Xor         | result has bit set only if only one operand has that bit set.                                                                                                           |
| `~`      | Not         | takes a single operand and inverts each bit in it.                                                                                                                      |
| `<<`     | Left shift  | `$a << $b` means `$a`'s bits are shifted to the left `$b` spaces. `$b` zeros are inserted from the right, and the leftmost $b bits are discarded.                       |
| `>>`     | Right shift | `$a >> $b` means `$a`'s bits are shifted to the right `$b` spaces. `$b` copies of the leftmost bit are inserted from the left, and the rightmost $b bits are discarded. |

```php
<?php
  $x = 19 & 7;
  // $x is 3 : 10011 & 00111 = 00011

  $x = 19 | 7;
  // $x is 23 : 10011 | 00111 = 10111

  $x = 19 ^ 7;
  // $x is 20 : 10011 ^ 00111 = 10100

  $x = 7 << 2;
  // $x is 28 : 00111 << 2 = 11100

  $x = 19 >> 2;
  // $x is 4 : 10011 >> 2 = 00100
?>
```

## Comparison Operators

| Operator | Name                     | Description                                                                                                                                  |
| -------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `==`     | Equal                    | `$x == $y` is `true` if `$x` and `$y` are equal after type juggling.                                                                         |
| `===`    | Identical                | `$x === $y` is `true` if `$x` and `$y` are equal and the same type.                                                                          |
| `!=`     | Not Equal                | `$x != $y` is `true` if `$x` and `$y` are not equal after type juggling.                                                                     |
| `<>`     | Not Equal                | `$x <> $y` is `true` if `$x` and `$y` are not equal after type juggling.                                                                     |
| `!==`    | Not Identical            | `$x !== $y` is `true` if `$x` and `$y` are not equal or not the same type.                                                                   |
| `<`      | Less Than                | `$x < $y` is `true` if `$x` is less than `$y`.                                                                                               |
| `>`      | Greater Than             | `$x > $y` is `true` if `$x` is greater than `$y`.                                                                                            |
| `<=`     | Less Than or Equal to    | `$x <= $y` is `true` if `$x` is less than or equal to `$y`.                                                                                  |
| `>=`     | Greater Than or Equal to | `$x >= $y` is `true` if `$x` is greater than or equal to `$y`.                                                                               |
| `<=>`    | Spaceship                | `$x <=> $y` returns an integer greater than, less than or equal to zero when `$x` is greater than, less than, or equal to `$y` respectively. |

```php
<?php
  $x = 5;
  $y = '5';

  if ($x == $y):
    echo "equal";
  else:
    echo "not equal";
  endif;
  // Output: equal

  echo "<br/>";

  if ($x === $y):
    echo "identical";
  else:
    echo "not identical";
  endif;
  // Output: not identical

  echo "<br/>";

  $y = 12;

  if ($x > $y):
    echo $x . " is greater than " . $y;
  else:
    echo $x . " is not greater than " . $y;
  endif;
  // Output: 5 is not greater than 12

?>
```

## Incrementing/Decrementing Operators

| Operator | Name          | Description                                |
| -------- | ------------- | ------------------------------------------ |
| `++$x`   | Preincrement  | Increments `$x` by one then returns `$x`.  |
| `$x++`   | Postincrement | Returns `$x`, then increments `$x` by one. |
| `--$x`   | Predecrement  | Decrements `$x` by one, then returns `$x`. |
| `$x--`   | Postdecrement | Returns `$x`, then decrements `$x` by one. |

```php
$x = 6;

echo "Postincrement :" . $x++ . "<br />\n";
// Output: Postincrement: 6
echo "After postincrement :" . $x . "<br />\n";
// Output: After postincrement: 7

echo "Preincrement :" . ++$x . "<br />\n";
// Output: Preincrement: 8
echo "After preincrement :" . $x . "<br />\n";
// Output: After preincrement: 8

echo "Postdecrement :" . $x-- . "<br />\n";
// Output: Postdecrement: 8
echo "After postdecrement :" . $x . "<br />\n";
// Output: After postdecrement: 7

echo "Predecrement :" . --$x . "<br />\n";
// Output: Predecrement: 6
echo "After predecrement :" . $x . "<br />\n";
// Output: After predecrement: 6
```

## Logical Operators

| Operator | Name | Description                                                         |
| -------- | ---- | ------------------------------------------------------------------- |
| `and`    | And  | `x$ and $y` is `true` only if `x$` and `y$` are both `true`.        |
| `or`     | Or   | `$x or $y` is `true` if either `$x` or `$y` is `true`.              |
| `xor`    | Xor  | `$x xor $y` is `true` only when only one of `$x` or `$y` is `true`. |
| `!`      | Not  | `!$x` is `true` when $x is `false` and `false` when $x is `true`.   |
| `&&`     | And  | `x$ && $y` is `true` only if `x$` and `y$` are both `true`.         |
| `\|\|`   | Or   | `$x \|\| $y` is `true` if either `$x` or `$y` is `true`.            |

While `and` and `&&`, and `or` and `||`, have the same meaning, they operate at different precedences.
Importantly, `&&` and `||` have higher precedence than `=` while `and` and `or` do not.

```php
<?php
  $x = false || true; // $x is assigned the value true ($x = (false || true))
  $x = false or true; // $x is assigned the value false (($x = false) or true)
?>
```

## String Operators

| Operator | Name                   | Description                                                                         |
| -------- | ---------------------- | ----------------------------------------------------------------------------------- |
| `.`      | Concatenate            | Concatenates the left and right operands                                            |
| `.=`     | Concatenate assignment | Concatenates the left and right operands and assigns the value to the left operand. |

```php
<?php
  $x = 'this' . '&' . 'that';

  echo $x; // Output: this&that;

  $x .= '!';

  echo $x; // Output: this&that!;
?>
```

## Array Operators

| Operator | Name             | Description                                                                                                     |
| -------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `+`      | Union            | `$x + $y` returns the union of arrays `$x` and `$y`.                                                            |
| `+=`     | Union Assignment | `$x += $y` assigns the union of $x and $y to $x.                                                                |
| `==`     | Equal            | `$x == $y` is `true` if `$x` and `$y` consist of the same key/value pairs.                                      |
| `===`    | Identical        | `$x === $y` is `true` if `$x` and `$y` have the same key/value pairs, in the same order, and of the same types. |
| `!=`     | Not Equal        | `$x != $y` is `true` if `$x` and `$y` do not have the same key/value pairs.                                     |
| `<>`     | Not Equal        | `$x <> $y` is `true` if `$x` and `$y` do not have the same key/value pairs.                                     |
| `!==`    | Not Identical    | `$x !== $y` is `true` if `$x === $y` is `false`.                                                                |

When using `+` with arrays, it returns an array of the right operand appended to the left operand.
In cases where there are matching keys in the arrays, the elements from the left operand will be used
and the matching elements from the right operand will be discarded.

## Type Operators

| Operator     | Name        | Description                                                                                                                   |
| ------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `instanceof` | Instance of | <code>$x instanceof <i>SomeClass</i></code> returns `true` if `$x` is an instance of the class <code><i>SomeClass</i></code>. |

<code><i>SomeClass</i></code> can be a class name, a variable of the given class, or a string containing the class name.
