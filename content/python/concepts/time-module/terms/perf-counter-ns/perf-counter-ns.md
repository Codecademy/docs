---
Title: '.perf_counter_ns()'
Description: 'Returns the value of a high-resolution performance counter in nanoseconds.'
Subjects: 
    -'Computer Science'
    -'Data Science'
    -'Machine Learning'
    -'Web Development'
Tags: 
    -'Data Structures'
    -'Functions'
    -'Time'
CatalogContent: 
    -'learn-python-3'
    -'paths/computer-science'
---

**`.perf_counter_ns()`** is a function from the `time` module that returns a high-resolution timer value in nanoseconds as an integer.

## Syntax

```pseudo
time.perf_counter_ns()
```

**Parameters:**

The `.perf_counter_ns()` function takes no arguments.

**Return value:**

Returns the value of a high-resolution performance counter in nanoseconds as an integer.

## Example

In this example, `.perf_counter_ns()` from the `time` module is used to measure elapsed time for a block of code by taking timestamps before and after execution and calculating the difference:

```py
import time

start = time.perf_counter_ns() # start timer
end = time.perf_counter_ns()   # end timer

print("Elapsed:", end - start, "nanoseconds")
```

A sample output for this code is:

```shell
Elapsed: 800 nanoseconds
```

## Example 2

This example shows how to use `.perf_counter_ns()` to benchmark even small tasks very precisely:

```py
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

A sample output of this code is:

```shell
Sorting took 20045800 nanoseconds (20.046 ms)
```

This code generates a large list of random numbers, sorts it, and calculates the elapsed time by subtracting the start timestamp from the end timestamp, giving a precise measurement in nanoseconds (and milliseconds for readability).
