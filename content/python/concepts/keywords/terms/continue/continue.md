---
Title: 'continue'
Description: 'Skips to the next iteration of a loop.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Continue'
  - 'Loops'
  - 'Control Flow'
  - 'Conditionals'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`continue`** keyword is used inside loops to skip the remaining code in the current iteration and immediately start the next iteration. It helps control the flow of loops by allowing certain conditions to bypass parts of the loop without terminating it entirely.

## Syntax

```pseudo
continue
```

The `continue` keyword is placed inside a loop to skip over certain values or conditions. When Python encounters `continue`, it jumps to the next iteration without running any more code below it in the loop body.

This is useful for filtering out unwanted values, skipping invalid data, or handling only specific cases inside loops.

**Note**: Unlike `break`, `continue` does not exit the loop - it only skips the current iteration.

## Example

A simple example using a while loop that counts from 1 to 5 but skips printing the number 3:

```py
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue
    print(count, end = ' ')

# Output: 1 2 4 5
```

## CodeByte Example

Below is an example of the `continue` keyword being used in an `odd_numbers()` function:

```codebyte/python
def odd_numbers():
    for n in range(10):
        if n % 2 == 0:
            continue # Skips even numbers
        print(n)

odd_numbers()
```
