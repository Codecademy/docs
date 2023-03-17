---
Title: 'Conditionals'
Description: 'The if, else, elseif, and switch conditionals in PowerShell are used for control flow. They allow the choice of which sections of code are executed based on conditions.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Bash/Shell'
Tags:
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

There are four types of conditionals in PowerShell:

1. `if`
2. `else`
3. `elseif`
4. `switch`

## `if`

The `if` statement executes a block of code if the condition expression is `True`.

```shell
if($my_num -eq 2){ 
  Write-Host "A True Statement"
}
Write-Host "After the if statement"
```

The example above prints `A True Statement` *and* `After the if statement` if `$my_num` is equal to `2`. Otherwise, it skips the statement within the `if` curly braces `{ }` and just prints `After the if statement`.

## `else` 

The `else` clause is appended to the `if` statement.

- If the condition is `True`, the code in the `if` section is executed.
- If the condition is `False`, the code in the `else` section is executed.

```shell
if($my_num -gt 0) {
  Write-Host "A positive number" # Prints if $my_num is more than 0
}
else {
  Write-Host "A negative number" # Prints if $my_num is less than or equal to 0
}
```

## `elseif`

One or more `elseif` statements can be added between `if` and `else` to test multiple conditions.

```shell
if($my_num -gt 0) {
  Write-Host "A positive number" # Prints if $my_num is more than 0
}
elseif ($my_num -lt 0) {
  Write-Host "A negative number" # Prints if $my_num is less than 0
}
else {
  Write-Host "Zero"              # Prints if both of the previous conditions fail
}
```

## `switch`

The `switch` statement provides a simpler syntax for the same behavior as `if` / `elseif` expressions that check for equality.

```shell
$my_num = 2
switch ($my_num) {
  1 { 
    Write-Host "You chose 1"
  2 { 
    Write-Host "You chose 2"
  3 { 
    Write-Host "You chose 3"
  }
  default { 
    Write-Host "No match"
  }
}
```

The example above prints `You chose 2`. If `$my_num` was `4`, for example, it would print `No match` since the `default` clause is run if all other conditions fail.

PowerShell allows conditional expressions to be used in `switch` statements.

```shell
$my_num = 10
switch ($my_num) {
  {$_ -gt 5} { 
    Write-Host "Greater than 5"
    break # "Greater than 0" would also be printed if this was missing
  }
  {$_ -gt 0} { 
    Write-Host "Greater than 0" 
  }
  {$_ -lt 5} { 
    Write-Host "Less than 5" 
  }
}
```

> **Note:** Even if a condition is `True`, the following conditions are still tested unless a `break` statement is provided.
