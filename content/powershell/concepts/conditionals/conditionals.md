---
Title: 'Conditionals'
Description: 'Control program flow in PowerShell using if, else, elseif, and switch to execute code based on conditions.'
Subjects:
  - 'Bash/Shell'
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Break'
  - 'Conditionals'
  - 'Control Flow'
  - 'Else'
  - 'If'
  - 'Switch'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

**Conditionals** enable execution of code based on provided conditions. They take in an expression and check if it is `True` or `False`. If the expression is `True`, one set of statements is executed. Otherwise, another set of instructions is performed. This control of flow makes programs more robust by enabling them to address multiple scenarios.

There are four types of conditional statements in PowerShell:

1. `if`
2. `else`
3. `elseif`
4. `switch`

## `if` in PowerShell

The `if` statement executes a block of code if the condition expression is `True`. Syntax for `if` in PowerShell is:

```pseudo
if (<condition>) {
  <statements>
}
```

### Example for `if` statement in PowerShell

```shell
$my_num = 2
if($my_num -eq 2){
  Write-Host "A True Statement"
}
Write-Host "After the if statement"
```

The example above prints `"A True Statement"` and `"After the if statement"` if `$my_num` is equal to `2`. Otherwise, it skips the statement within the `if` curly braces `{ }` and just prints `"After the if statement"`.

## `else` in PowerShell

The `else` clause always follows the `if` statement.

- If the condition is `True`, the code in the `if` section is executed.
- If the condition is `False`, the code in the `else` section is executed.

Here is the syntax for `else` in PowerShell:

```pseudo
if (<condition>) {
  <statements>
}
else {
  <statements>
}
```

### PowerShell `else` statement example

```shell
$my_num = 2
if($my_num -gt 0) {
  # Prints if $my_num is more than 0
  Write-Host "A positive number"
}
else {
  # Prints if $my_num is less than or equal to 0
  Write-Host "A negative number"
}
```

## `elseif` in PowerShell

One or more `elseif` statements can be added between `if` and `else` to test multiple conditions. Here is the syntax for `elseif` in PowerShell:

```pseudo
if (<condition1>) {
  <statements>
}
elseif (<condition2>) {
  <statements>
}
else {
  <statements>
}
```

### PowerShell `elseif` statement example

```shell
$my_num = 2
if($my_num -gt 0) {
  # Prints if $my_num is more than 0
  Write-Host "A positive number"
}
elseif ($my_num -lt 0) {
  # Prints if $my_num is less than 0
  Write-Host "A negative number"
}
else {
  # Prints if both of the previous conditions fail
  Write-Host "Zero"
}
```

## `switch` in PowerShell

The `switch` statement provides a simpler syntax for the same behavior as `if` / `elseif` expressions that check for equality. Here is the syntax for `switch` in PowerShell:

```pseudo
switch (<value>) {
  <pattern1> { <statements> }
  <pattern2> { <statements> }
  default    { <statements> }
}
```

### Example for `switch` in Powershell

```shell
$my_num = 2
switch ($my_num) {
  1 {
    Write-Host "You chose 1"
  }
  2 {
    Write-Host "You chose 2"
  }
  3 {
    Write-Host "You chose 3"
  }
  default {
    Write-Host "No match"
  }
}
```

The example above prints `"You chose 2"`. If `$my_num` was `4`, for example, it would print `"No match"` since the `default` clause is run if all other conditions fail.

PowerShell allows conditional expressions to be used in `switch` statements.

```shell
$my_num = 10
switch ($my_num) {
  {$PSItem -gt 5} {
    Write-Host "Greater than 5"
  }
  {$PSItem -gt 0} {
    Write-Host "Greater than 0"
  }
  {$PSItem -lt 5} {
    Write-Host "Less than 5"
  }
}
```

> **Note:** `$PSItem` is an automatic variable that contains the value passed to the `switch` statement. It can be replaced with its shorthand alias `$_`.

The above example prints `"Greater than 5"` and `"Greater than 0"` since their corresponding conditions are `True`. Even if a condition is `True`, the following conditions are still tested unless a `break` statement is provided, as in the example below which only prints `"Greater than 5"`.

```shell
$my_num = 10
switch ($my_num) {
  {$_ -gt 5} {
    Write-Host "Greater than 5"
    break
  }
  {$_ -gt 0} {
    Write-Host "Greater than 0"
  }
  {$_ -lt 5} {
    Write-Host "Less than 5"
  }
}
```

## Frequently Asked Questions

### 1. How to use if condition in PowerShell?

In PowerShell, the `if` statement checks whether a condition is true before running a block of code. Here is how to implement it:

```shell
$number = 10
if ($number -gt 5) {
  Write-Output "Number is greater than 5"
}
```

### 2. Does PowerShell have else if?

Yes, PowerShell supports elseif for multiple conditions.

```shell
$score = 75
if ($score -ge 90) {
  Write-Output "Grade: A"
} elseif ($score -ge 75) {
  Write-Output "Grade: B"
} else {
  Write-Output "Grade: C"
}
```

### 3. Can I use ++ in PowerShell?

Yes. PowerShell supports the unary `++` and `--` operators for incrementing and decrementing values. It also supports unary `-` for negation.
