---
Title: 'Switch'
Description: 'Switch case statements allow the execution of different blocks of code based on the value of a variable or expression.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Switch'
  - 'Conditionals'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

A **switch case** statement in PHP executes different blocks of code based on a variable or an expression. It's a helpful alternative to multiple `elseif` [conditional](https://www.codecademy.com/resources/docs/php/conditionals) statements, especially when there are many conditions to check. By grouping related conditions, switch case statements simplify code and make it easier to read. Moreover, it speeds up code execution by evaluating the expression only once.

### Syntax

```pseudo
switch (expression) {
  case value1:
    // Code to be executed if expression matches value1
    break;
  case value2:
    // Code to be executed if expression matches value2
    break;
  ...
  default:
    // Code to be executed if expression does not match any of the cases
}
```

In the above syntax, the switch statement compares the `expression` to each case value (`case value1`, `case value2`, ... ).

If there's a match, the code block associated with that case is executed. The `default` case is optional, and it specifies the code that should be executed when none of the cases match the expression.

> **Note:** It's important to end each case block with a `break` statement, or the code will continue to the next case block.

### Codebyte Example

The following codebyte example uses switch statements to compare the value of the variable `$day` to each case value. If the value of `$day` matches with the case value "Tuesday", the code block associated with the second case is executed, which prints "Today is Tuesday." to the screen:

```codebyte/php
<?php
$day = "Tuesday";

switch ($day) {
  case "Monday":
    echo "Today is Monday.";
    break;
  case "Tuesday":
    echo "Today is Tuesday.";
    break;
  case "Wednesday":
    echo "Today is Wednesday.";
    break;
  default:
    echo "Today is a different day.";
}
?>
```
