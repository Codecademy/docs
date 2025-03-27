---
Title: 'Looping statements'
Description: 'Executes commands repeatedly until a condition is met.'
Subjects:
  - 'Bash/Shell'
  - 'Computer Science'
Tags:
  - 'Automation'
  - 'Control Flow'
  - 'Command Line'
  - 'Loops'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

**Looping statements** in Bash are control flow constructs that allow a set of commands to be executed repeatedly until a specific condition is met. They are essential for automating repetitive tasks and processing multiple items efficiently.

Loops perform the same set of commands over and over with slight variations, such as processing files in a directory or performing operations on a list of items. Bash provides three main types of loop structures: `while`, `until`, and `for` loops, along with control statements like `break` and `continue` that modify loop execution. These powerful constructs make shell scripts more versatile and efficient for tasks like file processing, data manipulation, and system administration.

## `while` Loop

A **`while` loop** executes a block of commands repeatedly as long as a specified condition evaluates to true. This type of loop is particularly useful when performing an action until a certain condition changes.

### When to Use a `while` Loop

The `while` loop is appropriate when:

- Commands need to be executed based on a condition that might change during execution
- The number of iterations is not known beforehand
- Processing data until a specific state is reached

### Syntax

```pseudo
while [ condition ]
do
  # Commands to execute
done
```

The condition is evaluated before each iteration. If the condition is true, the commands within the loop body are executed. If the condition is false, the loop terminates and execution continues with the commands after the loop.

**Example:**

```bash
#!/bin/bash
# Count from 1 to 5
counter=1
while [ $counter -le 5 ]
do
  echo $counter
  counter=$((counter+1))
done
echo "Counting complete!"
```

Output:

```shell
1
2
3
4
5
Counting complete!
```

In this example, the loop initializes a counter to 1, then continues printing and incrementing the counter as long as it's less than or equal to 5.

## `until` Loop

An **`until` loop** is the logical opposite of a while loop. It executes commands repeatedly until a specified condition becomes true. In other words, the loop continues as long as the condition is false.

### When to Use an `until` Loop

The `until` loop is appropriate when:

- An action needs to be performed until a specific condition is met
- The code is more readable with a positive termination condition
- Waiting for a specific event or state to occur

### Syntax

```pseudo
until [ condition ]
do
  # Commands to execute
done
```

The condition is evaluated before each iteration. If the condition is false, the commands within the loop body are executed. Once the condition becomes true, the loop terminates.

**Example:**

```bash
#!/bin/bash
# Count from 5 down to 1
counter=5
until [ $counter -lt 1 ]
do
  echo $counter
  counter=$((counter-1))
done
echo "Countdown complete!"
```

Output:

```shell
5
4
3
2
1
Countdown complete!
```

This example counts down from 5 to 1, executing the loop until the counter becomes less than 1.

## `for` Loop

A **`for` loop** is designed to iterate over a list of items, executing a set of commands once for each item in the list. This loop type is especially useful for processing arrays, ranges of numbers, file lists, and command outputs.

### When to Use a `for` Loop

The `for` loop is appropriate when:

- Each item in a known list or sequence needs to be processed
- The number of iterations is fixed and known beforehand
- The same operation must be performed on multiple items

### Syntax

```pseudo
for variable in [list]
do
  # Commands to execute
done
```

The list can be a series of values, a range, filenames with wildcards, or the output of a command. For each item in the list, the variable is set to that value, and the commands in the loop body are executed.

**Example:**

```bash
#!/bin/bash
# Print each fruit in the list
fruits="apple banana orange grape"
for fruit in $fruits
do
  echo "Current fruit: $fruit"
done
echo "All fruits processed!"
```

Output:

```shell
Current fruit: apple
Current fruit: banana
Current fruit: orange
Current fruit: grape
All fruits processed!
```

In this example, the `for` loop iterates through each word in the `fruits` variable, assigning it to the `fruit` variable, and then executes the `echo` command.

## The `break` Statement

The **`break`** statement allows for exiting a loop immediately, regardless of whether the loop condition is still true. It terminates the innermost loop and execution continues with the command following the loop.

### Uses of `break`

- Exiting a loop when a specific condition is met
- Preventing unnecessary iterations after finding a desired result
- Implementing early loop termination logic
- Handling exceptional cases within a loop

**Example:**

```bash
#!/bin/bash
# Find a specific file in a list
files="document.txt image.jpg script.sh config.ini"
search_file="script.sh"

for file in $files
do
  echo "Checking $file..."
  if [ "$file" = "$search_file" ]
  then
    echo "Found $search_file!"
    break
  fi
done
echo "Search complete."
```

Output:

```shell
Checking document.txt...
Checking image.jpg...
Checking script.sh...
Found script.sh!
Search complete.
```

In this example, the loop terminates as soon as the target file is found, avoiding unnecessary checks of the remaining files.

## The `continue` Statement

The **`continue`** statement skips the remaining commands in the current iteration of a loop and moves to the next iteration. Unlike break, continue does not terminate the loop; it only skips the rest of the current cycle.

### Uses of `continue`

- Skipping processing of certain items that match specific criteria
- Handling special cases within a loop without disrupting the loop flow
- Implementing filtering logic within a loop
- Avoiding nested conditional blocks for cleaner code

**Example:**

```bash
#!/bin/bash
# Process only even numbers
for num in {1..10}
do
  # Check if number is odd
  if [ $((num % 2)) -eq 1 ]
  then
    echo "Skipping odd number: $num"
    continue
  fi

  echo "Processing even number: $num"
done
echo "Processing complete."
```

Output:

```shell
Skipping odd number: 1
Processing even number: 2
Skipping odd number: 3
Processing even number: 4
Skipping odd number: 5
Processing even number: 6
Skipping odd number: 7
Processing even number: 8
Skipping odd number: 9
Processing even number: 10
Processing complete.
```

In this example, the `continue` statement allows the loop to skip processing of odd numbers and focus only on even numbers.

For a comprehensive introduction to command line concepts, consider exploring Codecademy's [Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line) course.
