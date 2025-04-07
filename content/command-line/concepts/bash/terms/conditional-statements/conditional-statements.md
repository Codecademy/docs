---
Title: 'Conditional Statements'
Description: 'Allow a script to make decisions based on conditions.'
Subjects:
  - 'Bash/Shell'
  - 'Computer Science'
Tags:
  - 'Bash/Shell'
  - 'Command Line'
  - 'Script'
  - 'Conditionals'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

Conditional statements in Bash allow a script to make decisions based on conditions. These statements help in controlling the flow of execution by performing different actions based on whether a condition evaluates to true or false. Bash supports several types of conditional checks, including comparisons between numbers, strings, and file conditions.

## Syntax

Bash conditional statements are typically written using `if`, `elif`, `else`, and `fi` keywords. The basic syntax is:

```pseudo
if [ condition ]; then
  # Code to execute if condition is true
elif [ another_condition ]; then
  # Code to execute if another_condition is true
else
  # Code to execute if no conditions are met
fi
```

### Basic Operators

The different operators that Bash provides can be classified into several categories based on the data type of the operands.

**Numeric Operators:**

| Operator | Description              |
| -------- | ------------------------ |
| `-eq`    | Equal to                 |
| `-ne`    | Not equal to             |
| `-lt`    | Less than                |
| `-le`    | Less than or equal to    |
| `-gt`    | Greater than             |
| `-ge`    | Greater than or equal to |

**String Operators:**

| Operator | Description         |
| -------- | ------------------- |
| `=`      | Equal to            |
| `!=`     | Not equal to        |
| `-z`     | String is empty     |
| `-n`     | String is not empty |

**File Test Operators:**

| Operator | Description            |
| -------- | ---------------------- |
| `-e`     | File exists            |
| `-f`     | File is a regular file |
| `-d`     | File is a directory    |
| `-r`     | File is readable       |
| `-w`     | File is writable       |
| `-x`     | File is executable     |

## Example

Here is an example that takes a number from the user and then uses conditional statements in Bash to check if the number is greater than, less than, or equal to 0:

```bash
#!/bin/bash

read -p "Enter a number: " num

if [ "$num" -gt 0 ]; then
  echo "The number is positive."
elif [ "$num" -lt 0 ]; then
  echo "The number is negative."
else
  echo "The number is zero."
fi
```

The above code produces the following output if the user inserts the number 5 when prompted:

```shell
Enter a number: 5
The number is positive.
```
