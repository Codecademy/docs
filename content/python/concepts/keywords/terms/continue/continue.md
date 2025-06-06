---
Title: 'continue'
Description: 'Skips the rest of the current loop iteration and moves to the next one immediately.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Conditionals'
  - 'Continue'
  - 'Control Flow'
  - 'Loops'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`continue`** keyword is used inside [loops](https://www.codecademy.com/resources/docs/python/loops) to skip the remaining code in the current iteration and immediately begin the next one. When Python encounters `continue`, it jumps to the next iteration without executing the remaining statements in the loop body. This allows certain conditions to bypass parts of the loop without exiting it completely. It is useful for filtering out unwanted values, skipping invalid data, or focusing on specific cases within loops.

```pseudo
continue
```

**Parameters:**

The `continue` statement does not take any parameters.

**Return value:**

The `continue` statement does not return any value. It simply skips to the next iteration of the nearest enclosing loop.

> **Note**: Unlike `break`, `continue` does not exit the loop - it only skips the current iteration.

## Example: Using `continue` in a `while` Loop

This example demonstrates how the `continue` statement skips the iteration when the count reaches 3, preventing it from being printed:

```py
count = 0
while count < 5:
  count += 1
  if count == 3:
    continue
  print(count, end = ' ')
```

The output of this code is:

```shell
1 2 4 5
```

## CodeByte Example: Skipping Even Numbers Using `continue`

This example defines a function that prints only odd numbers from 0 to 9 by using the `continue` statement to skip even numbers in a `for` loop:

```codebyte/python
def odd_numbers():
  for n in range(10):
    if n % 2 == 0:
      continue # Skips even numbers
    print(n)

odd_numbers()
```
