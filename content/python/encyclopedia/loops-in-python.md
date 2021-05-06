---
Title: "Loops in Python"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Loops"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

## While Loops

In Python, a `while` loop will repeatedly execute a code block as long as a condition evaluates to `True`.

The condition of a `while` loop is always checked first before the block of code runs. If the condition is not met initially, then the code block will never run.

```pseudo
while condition:
  # code inside
```

```py
# This loop will only run 1 time
hungry = True

while hungry:
   print("Time to eat!")
   hungry = False
 
# This loop will run 5 times
i = 1

while i < 6:
   print(i)
   i = i + 1
```

## For Loop

Python `for` loops can be used to iterate over and perform an action one time for each element in a list.

Proper for loop syntax assigns a temporary value, the current item of the list, to a variable on each successive iteration: 

```py
for <temporary value> in <a list>:
```

`for` loop bodies must be indented to avoid an `IndentationError`.

```python
dog_breeds = ["boxer", "bulldog", "shiba inu"]
 
# Print each breed:
for breed in dog_breeds:
  print(breed)
```

## Nested Loops

In Python, loops can be nested inside other loops. Nested loops can be used to access items of lists which are inside other lists. The item selected from the outer loop can be used as the list for the inner loop to iterate over.

```py
groups = [["Jobs", "Gates"], ["Newton", "Euclid"], ["Einstein", "Feynman"]]
 
# This outer loop will iterate over each list in the groups list
for group in groups:
  # This inner loop will go through each name in each list
  for name in group:
    print(name)
```

## Break Keyword

In a loop, the `break` keyword escapes the loop, regardless of the iteration number. Once break executes, the program will continue to execute after the loop.

```py
numbers = [0, 254, 2, -1, 3]
 
for num in numbers:
  if (num < 0):
    print("Negative number detected!")
    break
  print(num)
```

In this example, the output would be:

```bash
0
254
2
Negative number detected!
```

## Continue Keyword

In Python, the `continue` keyword is used inside a loop to skip the remaining code inside the loop code block and begin the next loop iteration.

```py
big_number_list = [1, 2, -1, 4, -5, 5, 2, -9]
 
# Print only positive numbers:
for i in big_number_list:
  if i < 0:
    continue
  print(i)
```