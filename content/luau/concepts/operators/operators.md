---
Title: 'Operators'
Description: 'Operators perform broadly logical or mathematical computations on supplied arguments.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Operators'
  - 'Math'
  - 'Numbers'
  - 'Logical'
  - 'Arithmetic'
CatalogContent:
  - 'learn-lua'
  - 'introduction-to-game-development'
---

**Operators** perform broadly logical or mathematical computations. An operator takes in one or more arguments, performs some computations based on those arguments, and returns a value.

## Logical Operators

Logical operators mirror the behavior of logical concepts like conjunction, disjunction, and negation. Because Luau is not a strongly-typed language, logical operators in Luau will accept arguments other than `true` and `false`. Note also that Luau treats a value of `nil` as equivalent to `false` in the context of a logical operator.

| Logical Operator |                                                Behavior                                                |
| :--------------: | :----------------------------------------------------------------------------------------------------: |
|      `and`       |   Returns the first argument if the first argument is `false`; otherwise returns the second argument   |
|       `or`       | Returns the first argument if the first argument is not `false`; otherwise returns the second argument |
|      `not`       |            Returns `true` if and only if the argument is `false`; otherwise returns `false`            |

### Examples

```lua
print(true and false) -- false
print(false and false) -- false
print(true and true) -- true
print(1 and 2) -- 2
print("Hello" and "World") -- World
print(true or false) -- true
print(false or false) -- false
print(true or true) -- true
print(1 or 2) -- 1
print("Hello" or "World) -- Hello
print(not false) -- true
print(not nil) -- true
print(not true) -- false
print(not 1) -- false
print(not "Hello World") -- false
```

## Mathematical Operators

Mathematical operators include arithmetic and relational (comparative) operators.

### Relational Operators

Relational operators compare two arguments numerically (greater than, equal to, etc.) and return a boolean value of `true` or `false`.

| Relational Operator |                                                    Behavior                                                     |
| :-----------------: | :-------------------------------------------------------------------------------------------------------------: |
|        `==`         |                    Returns `true` if the two arguments are equal; otherwise returns `false`                     |
|        `~=`         |                  Returns `true` if the two arguments are not equal; otherwise returns `false`                   |
|         `>`         |       Returns `true` if the first argument is greater than the second argument; otherwise returns `false`       |
|         `<`         |      Returns `true` if the first argument is less than the the second argument; otherwise returns `false`       |
|        `>=`         | Returns `true` if the first argument is greater than or equal to the second argument; otherwise returns `false` |
|        `<=`         |  Returns `true` if the first argument is less than or equal to the second argument; otherwise returns `false`   |

#### Examples

```lua
print(5 == 5) -- true
print("arts" = "sciences") -- false
print(0 ~= 9) -- true
print(true ~= true) -- false
print(15 > 2) -- true
print(6 > 9) -- false
print("apple" >= "apple") -- true
print(7 >= 8)  -- false
print(false <= false) -- true
print(3 <= 0) -- false
```

## Arithmetic Operators

Arithmetic operators perform the basic operations of arithmetic (addition, subtraction, etc.) on the supplied arguments.

| Arithmetic Operator |                                  Behavior                                   |
| :-----------------: | :-------------------------------------------------------------------------: |
|         `+`         |                      Returns the sum of two arguments                       |
|         `-`         | Returns the value of the second argument subtracted from the first argument |
|         `*`         |                    Returns the product of two arguments                     |
|         `/`         |   Returns the value of the first argument divided by the second argument    |
|         `^`         | Returns the value of the first argument to the power of the second argument |
|         `%`         | Returns the remainder of the first argument divided by the second argument  |

### Examples

```lua
print(3 + 4) -- 7
print(2.3 - 7.8) -- -5.5
print(0 * 4.2) -- 0.0
print(8 / 3) -- 2.6666666666667
print(4 ^ 6) -- 4096.0
print(8 % 2) -- 0
```

## Other Operators

There are a couple of operators that do not fit into the categories above.

| Operator |                    Behavior                     |
| :------: | :---------------------------------------------: |
|   `..`   | Returns a concatenation of two string arguments |
|   `#`    |    Returns the number of elements in a table    |

### Examples

```lua
print("Finally " .. "together") -- "Finally together"
print(#{"#", "goes", "crazy"}) -- 3
```

## Compound Assignment

Several operators can be combined with `=` to form a compound operator that updates the value of a variable by performing an operation on it.

| Compound Operator |                              Behavior                              |
| :---------------: | :----------------------------------------------------------------: |
|       `+=`        |              Adds argument to initial variable value               |
|       `-=`        |               Subtracts argument from initial value                |
|       `*=`        |                Multiplies argument by initial value                |
|       `/=`        |                 Divides initial value by argument                  |
|       `%=`        | Variable updated to remainder of initial value divided by argument |
|       `^=`        |   Variable updated to intial value to the power of the argument    |
|       `..=`       |              Concatenates initial value with argument              |

### Examples

```lua
initial_value = 8
print(initial_value += 10) -- 18
print(initial_value -= 4) -- 4
print(initial_value *= 3) -- 24
print(initial_value /= 2) -- 4
print(initial_value % = 3) -- 2
print(initial_value ^= 0) -- 1.0

initial_value = "8"
print(initial_value ..= " ball") -- 8 ball
```
