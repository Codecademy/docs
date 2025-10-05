---
Title: '.perf_counter_ns()'
Description: '**.perf_counter_ns()** is a function from the `time` module that returns a **high-resolution** timer value in **nanoseconds** as an **integer**.'
Subjects: 
    -'Computer Science'
    -'Data Science'
    -'Machine Learning'
    -'Web Development'
Tags: 
    -'Data Structures'
    -'Functions'
    -'Time'
    -''
CatalogContent: 
    -'learn-python-3'
    -'paths/computer-science'
---
**.perf_counter_ns()** is a function from the `time` module that returns a **high-resolution** timer value in **nanoseconds** as an **integer**.

## Syntax
```pseudo
time.perf_counter_ns()
```
The syntax for perf_counter_ns() is very simple because it takes **no arguments**.
- **time**: The module name (must be imported first).
- **perf_counter_ns**: The function.
- **( )**: Empty parentheses because it doesn't need parameters.

## Example
The **perf_counter_ns** function can be used to measure elapsed time between two parts of a pipeline by taking timestamps before and after the code and calculating the difference.
```py
import time

start = time.perf_counter_ns()   # start timer
# some code
end = time.perf_counter_ns()     # end timer

print("Elapsed:", end - start, "nanoseconds")
```

## Codebyte Example
This example shows how you can use `perf_counter_ns()` to benchmark even small tasks very precisely.

```codebyte/python
import time
import random

# Create a random list of numbers
numbers = [random.randint(1, 1000000) for _ in range(100000)]

# Start timer
start = time.perf_counter_ns()

# Code we want to measure
numbers.sort()

# End timer
end = time.perf_counter_ns()

# Calculate elapsed time
elapsed_ns = end - start
print(f"Sorting took {elapsed_ns} nanoseconds ({elapsed_ns / 1e6:.3f} ms)")
```

### What is Happening
    1. Generate a list of 100,000 random numbers.
    2. Start the timer before sorting.
    3. End the timer after sorting.
    4. Subtract start from end → gives elapsed time in nanoseconds.
    5. Optionally, convert nanoseconds to milliseconds for easier reading.
