---
Title: 'Syntax Fundamentals'
Description: 'Defines the essential rules and structures for writing commands and scripts in Bash shell.'
Subjects:
  - 'Bash/Shell'
  - 'Computer Science'
Tags:
  - 'Command Line'
  - 'Syntax'
  - 'Variables'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

**Syntax fundamentals** in [Bash (Bourne-Again Shell)](https://www.codecademy.com/resources/docs/command-line/bash) refer to the essential rules and structures that govern how commands and scripts are written in the Bash shell environment. These rules dictate how the shell interpreter processes commands, providing the foundation for scripting and automation in Unix/[Linux](https://www.codecademy.com/resources/docs/general/linux) systems. Mastering Bash syntax is essential for system administrators, developers, and users who need to efficiently manage system resources and automate tasks.

## Basic Command Structure

The most fundamental aspect of Bash syntax is its command structure. Commands in Bash typically follow this pattern:

```pseudo
command [OPTIONS] arguments
```

Here, the command is executed with optional parameters (OPTIONS) that modify its behavior, followed by the arguments the command will operate on.

**Example:**

```bash
ls -la /home/user
```

In this example, `ls` is the command, `-la` are options (list in long format and show hidden files), and `/home/user` is the argument specifying which directory to list.

## Variables and Assignments

Variables in Bash allow you to store and reference data throughout your script. Variable assignment follows this syntax:

```pseudo
variable_name=value
```

> **Note:** There should be no spaces around the equals sign in Bash variable assignments.

To access a variable's value, prefix the variable name with a `$`:

```bash
name="John"
echo "Hello, $name!"
```

This outputs: `Hello, John!`

Variables can store strings, numbers, or the output of commands using command substitution:

```bash
current_date=$(date)
echo "Today is $current_date"
```

## Quoting and Escaping

Bash offers several ways to handle text that contains special characters:

1. **Double Quotes (`"`)**: Preserve variable expansion but interpret special characters.

   ```bash
   message="Hello, $USER"
   echo "$message"  # Outputs: Hello, username
   ```

2. **Single Quotes (`'`)**: Preserve text exactly as written, no variable expansion.

   ```bash
   message='Hello, $USER'
   echo "$message"  # Outputs: Hello, $USER
   ```

3. **Escape Character (`\`)**: Escape a single character to remove its special meaning.

   ```bash
   echo "The price is \$5.00"  # Outputs: The price is $5.00
   ```

## Operators

Bash supports various types of operators:

### Arithmetic Operators

Used for mathematical operations in Bash:

```bash
result=$((5 + 3))  # Addition
echo $result       # Outputs: 8

result=$((10 - 2)) # Subtraction
echo $result       # Outputs: 8

result=$((4 * 3))  # Multiplication
echo $result       # Outputs: 12

result=$((15 / 3)) # Division
echo $result       # Outputs: 5

result=$((20 % 3)) # Modulus (remainder)
echo $result       # Outputs: 2
```

### Logical Operators

Used in conditional expressions:

```bash
# AND operator: both conditions must be true
if [ "$age" -gt 18 ] && [ "$registered" = true ]; then
    echo "Eligible to vote"
fi

# OR operator: at least one condition must be true
if [ "$age" -gt 65 ] || [ "$disabled" = true ]; then
    echo "Eligible for assistance"
fi

# NOT operator: inverts the condition
if ! [ -f "$file" ]; then
    echo "File does not exist"
fi
```

### Comparison Operators

Used for comparing values:

For numeric comparisons:

- `-eq`: Equal to
- `-ne`: Not equal to
- `-gt`: Greater than
- `-lt`: Less than
- `-ge`: Greater than or equal to
- `-le`: Less than or equal to

For string comparisons:

- `=` or `==`: Equal to
- `!=`: Not equal to
- `-z`: String is empty
- `-n`: String is not empty

**Example:**

```bash
if [ "$count" -gt 100 ]; then
    echo "Count exceeds limit"
fi

if [ "$name" = "John" ]; then
    echo "Hello John!"
fi
```

## Conditionals

Conditionals allow scripts to make decisions based on specific conditions.

### If-Else Statement

```pseudo
if [ condition ]; then
    # Commands to execute when condition is true
elif [ another_condition ]; then
    # Commands to execute when another_condition is true
else
    # Commands to execute when all conditions are false
fi
```

**Example:**

This code checks the age and prints whether the person is a minor, adult, or senior:

```bash
#!/bin/bash
age=25

if [ $age -lt 18 ]; then
    echo "Minor"
elif [ $age -ge 18 ] && [ $age -lt 65 ]; then
    echo "Adult"
else
    echo "Senior"
fi
```

## Loops

Loops enable repeated execution of commands based on specified conditions.

### For Loop

```pseudo
for variable in list; do
    # Commands to execute for each item in the list
done
```

**Example:**

The example here iterates through a list of fruits and prints each one:

```bash
#!/bin/bash
for fruit in apple banana orange; do
    echo "I like $fruit"
done
```

### While Loop

```pseudo
while [ condition ]; do
    # Commands to execute while condition is true
done
```

**Example:**

The example increments a counter from 1 to 5 while printing its value:

```bash
#!/bin/bash
counter=1
while [ $counter -le 5 ]; do
    echo "Count: $counter"
    ((counter++))
done
```

### Until Loop

```pseudo
until [ condition ]; do
    # Commands to execute until condition becomes true
done
```

**Example:**

This example increments a counter from 1 to 5, stopping when the condition becomes true:

```bash
#!/bin/bash
counter=1
until [ $counter -gt 5 ]; do
    echo "Count: $counter"
    ((counter++))
done
```

## Functions

Functions allow you to group commands for reuse throughout your script.

```pseudo
function_name() {
    # Commands to execute
    # Optional return value
    return value
}
```

Or the alternative syntax:

```pseudo
function function_name {
    # Commands to execute
}
```

Functions are called simply by using their name.

**Example:**

The function prints a greeting message using an argument:

```bash
#!/bin/bash

# Define the function
greet() {
    echo "Hello, $1!"
    return 0
}

# Call the function with argument
greet "World"
```

Functions can take arguments, accessed within the function as `$1`, `$2`, etc., and return values using the `return` statement (limited to integers 0-255, typically used for status codes).

These were some of the fundamental concepts of Bash syntax to help you get started. Learn more about Bash with the [Bash courses](https://www.codecademy.com/catalog/language/bash) on Codecademy.
