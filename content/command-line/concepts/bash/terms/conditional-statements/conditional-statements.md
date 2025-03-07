---
Title: 'Conditional Statements'
Description: 'Learn about conditional statements in Bash scripting, including syntax and examples.'
Tags:
  - 'Bash/Shell'
  - 'Command Line'
  - 'Scripting'
  – 'Conditional'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

## Introduction
Conditional statements in Bash allow a script to make decisions based on conditions. These statements help in controlling the flow of execution by performing different actions based on whether a condition evaluates to true or false. Bash supports several types of conditional checks, including comparisons between numbers, strings, and file conditions.

## Syntax
Bash conditional statements are typically written using `if`, `elif`, `else`, and `fi` keywords. The basic syntax is:

```bash
if [ condition ]; then
  # Code to execute if condition is true
elif [ another_condition ]; then
  # Code to execute if another_condition is true
else
  # Code to execute if no conditions are met
fi
```

### Conditions for Different Data Types
Bash provides different operators for various types of conditions:

#### Numeric Comparisons:
| Operator | Description |
|----------|-------------|
| `-eq` | Equal to |
| `-ne` | Not equal to |
| `-lt` | Less than |
| `-le` | Less than or equal to |
| `-gt` | Greater than |
| `-ge` | Greater than or equal to |

Example:
```bash
if [ "$num" -gt 10 ]; then
  echo "Number is greater than 10"
fi
```

#### String Comparisons:
| Operator | Description |
|----------|-------------|
| `=` | Equal to |
| `!=` | Not equal to |
| `-z` | String is empty |
| `-n` | String is not empty |

Example:
```bash
if [ "$name" = "Alice" ]; then
  echo "Hello, Alice!"
fi
```

#### File Conditions:
| Operator | Description |
|----------|-------------|
| `-e` | File exists |
| `-f` | File is a regular file |
| `-d` | File is a directory |
| `-r` | File is readable |
| `-w` | File is writable |
| `-x` | File is executable |

Example:
```bash
if [ -f "myfile.txt" ]; then
  echo "File exists."
else
  echo "File does not exist."
fi
```

## Example
Here is an example demonstrating conditional statements in Bash:

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

### Explanation:
1. The script prompts the user to enter a number.
2. It checks whether the number is greater than 0, less than 0, or equal to 0.
3. The appropriate message is printed based on the condition.

## Summary
- Bash conditional statements use `if`, `elif`, `else`, and `fi`.
- Various operators exist for numeric, string, and file conditions.
- Conditional statements help control the execution flow in a Bash script.

By mastering conditional statements, you can create more interactive and dynamic Bash scripts!
 