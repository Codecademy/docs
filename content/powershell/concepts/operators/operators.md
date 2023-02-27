---
Title: 'Operators'
Description: 'Operators are used to perform specific mathematical or logical functions on variables and values.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'PowerShell'
Tags:
  - 'Operators'
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

**Operators** are used to perform specific mathematical or logical functions on data, often stored in variables. PowerShell offers multiple types of operators to manipulate data including:

- Arithmetic Operators
- Assignment Operators
- Unary Operators
- Equality Comparison Operators
- Logical Operators

## Arithmetic Operators

PowerShell has the following arithmetic operators which are used to calculate numeric values. Arithmetic operators include:

| Operator |      Name      | Description                                                                                 |
| :------: | :------------: | --------------------------------------------------------------------------------------------|
|   `+`    |    Addition    | Adds numbers, concatenates strings and arrays                                               |
|   `-`    |  Subtraction   | Subtracts or negates numbers                                                                |
|   `*`    | Multiplication | Multiplies numbers or copies strings and arrays a specified number of times                 |
|   `/`    |    Division    | Divides numbers                                                                             |
|   `%`    |     Modulo     | Returns the remainder of a division operation                                               |

Arithmetic operators are binary operators. Their syntax in PowerShell is `<Operand_1> <Arithmetic Operator> <Operand_2>`.

```PowerShell
$x = 5 + 5  # x is now 10
$x = $x - 8 # x is now 2
$x = $x * 3 # x is now 6
$x = $x / 2 # x is now 3
$x = $x % 2 # x is now 1
```

Arithmetic operators, `+` and `*`, also work on strings and arrays.

```PowerShell
PS > $best_learning_platform = "code" + "cademy"
PS > $best_learning_platform + "!" * 3
codecademy!!!
```

```PowerShell
PS > $fibonacci_1 = 0, 1, 1
PS > $fibonacci_2 = 2, 3, 5
PS > $fibonacci_1 + $fibonacci_2
0
1
1
2
3
5

PS > $fibonacci_2 * 2
2
3
5
2
3
5
```

## Assignment Operators

Assignment operators can be used to assign, change, or append values to variables. These operators are a shorter syntax for assigning the result of an arithmetic operator. The general syntax of the assignment operators is: `<Variable> <Assignment Operator> <Value>`.


| Operator |                Name                | Description                                 |
| :------: | :--------------------------------: | ------------------------------------------- |
|   `=`    |             Assignment             | `$x = 3` assigns value `3` to variable `x`. |
|   `+=`   |    Addition Compound Assignment    | `$x += 3` is short for `$x = $x + 3`.       |
|   `-=`   |  Subtraction Compound Assignment   | `$x -= 3` is short for `$x = $x - 3`.       |
|   `*=`   | Multiplication Compound Assignment | `$x *= 3` is short for `$x = $x * 3`.       |
|   `/=`   |    Division Compound Assignment    | `$x /= 3` is short for `$x = $x / 3`.       |
|   `%=`   |     Modulo Compound Assignment     | `$x %= 3` is short for `$x = $x % 3`.       |

## Unary Operators

Unary operators increase or decrease the value of a variable by 1.

| Operator |      Name      | Description                                                   |
| :------: | :------------: | ------------------------------------------------------------- |
|   `++`   |   Increment    | `$x++` returns `$x + 1`                                       |
|   `--`   |   Decrement    | `$x--` returns `$x - 1`                                       |

## Equality Comparison Operators

Equality operators in PowerShell are binary operators that compare two integer or string values that return `True` if the operator condition is met, otherwise `False`.

| Operator |           Name           | Description                                                   |
| :------: | :----------------------: | ------------------------------------------------------------- |
|   `-eq`  |          Equal           | `$x -eq $y` is `true` if `x` and `y` are equal.               |
|   `-ne`  |        Not Equal         | `$x -ne $y` is `true` if `x` and `y` are not equal.           |
|   `-gt`  |        Less Than         | `$x -gt $y` is `true` if `x` is less than `y`.                |
|   `-lt`  |       Greater Than       | `$x -lt $y` is `true` if `x` is greater than `y`.             |
|   `-ge`  |  Less Than or Equal to   | `$x -ge $y` is `true` if `x` is less than or equal to `y`.    |
|   `-le`  | Greater Than or Equal to | `$x -le $y` is `true` if `x` is greater than or equal to `y`. |

## Logical Operators

Logical operators allow us to combine multiple operator expressions and statements into complex conditionals. They operate on boolean values and return boolean values.

| Operator            | Name  | Description                                                           |
| :-----------------: | :---: | --------------------------------------------------------------------- |
|   `-and`            | And   | `$x -and $y` is `True` only if `$x` and `$y` are both `True`.         |
|  `-or`              | Or    | `$x -or $y` is `True` if either `$x` or `$y` is `True`.               |
|  `-xor`             | Xor   | `$x -xor $y` is `True` if only, but not both, `$x` or `$y` is `True`. |
|   `!` or `-not`     | Not   | `!$x` is `True` when `$x` is `False` and `False` when `$x` is `True`. |

## Operator Precedence

Precedence order is the order in which PowerShell evaluates the operators if multiple operators are used in the same expression. Operator precedence in PowerShell is as follows:

- Parentheses: `( )`
- Unary operators: `++`, `--`
- `!`, `not`
- Arithmetic operators: `*`, `/`, `%`, `+`, `-`
- Comparison operators: `-eq`, `-ne`, `-gt`, `-ge`, `-lt`, `-le`
- `-and`, `-or`, `-xor`
- Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
