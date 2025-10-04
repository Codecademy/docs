---
Title: 'perf_counter()'
Description: 'Returns a high-resolution timer value, useful for measuring short durations, including time elapsed during sleep.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Time'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`perf_counter()`** function returns a floating-point number representing a high-resolution timer value (in seconds) at the moment of the call, and is commonly used to benchmark code by measuring the time taken to execute a piece of code.

## Syntax

```pseudo
time.perf_counter()
```

**Parameters:**

The function takes no arguments.

**Return value:**

Returns a float representing the current value of a high-resolution performance counter in seconds.

## Example 1

This example shows how to call `perf_counter()` to get the current high-resolution timer value:

```py
import time

print(time.perf_counter())
```

A possible output of this code is:

```shell
5003.666789873
```

Importing `perf_counter()` from `time`:

```py
from time import perf_counter

print(perf_counter())
```

A possible outcome of this code is:

```shell
1780743.368374651
```

## Example 2: Using `.perf_counter()` Like a Stopwatch

Here, two `perf_counter()` calls are placed around [`sleep()`](https://www.codecademy.com/resources/docs/python/time-module/sleep) which adds a 5-second delay in the execution right after the first method call:

```py
from time import perf_counter, sleep

# record current time before delay
start = perf_counter()

print('Time before sleep():', start)

sleep(5) # pause for 5 seconds

# record current time after delay
end = perf_counter()

print('Time after sleep():', end)

# calculate elapsed time between both calls
elapsed_time = end - start

print('Elapsed time in seconds:', elapsed_time)
```

The output of this code is:

```shell
Time before sleep(): 1781952.36727265
Time after sleep(): 1781957.367474534
Elapsed time in seconds: 5.000201884191483
```

## Codebyte Example

The following program shows two ways to search for an element in a sorted integer list. Both solutions are written in separate functions, and pairs of `perf_counter()` calls are used to track the time taken to execute each function:

```codebyte/python
from time import perf_counter

# linear search: search through every element in the list
def search_1(nums, target) -> bool:
  for num in nums:
    if (num == target):
      return True

  return False

# binary search: searching within half of the list using the midpoint
def search_2(nums, target) -> bool:
  left = 0
  right = len(nums) - 1

  while left <= right:
    mid = (left + right) // 2

    if nums[mid] == target:
      return True

    if nums[mid] < target:
      left = mid + 1
    else:
      right = mid - 1;

  return False

# example values
nums = [-109, -83, -57, -43, -39, -10, -5, -2, 0, 1, 7, 18, 45, 78, 82, 94, 123, 165] # sorted in ascending order
target = 165

# track elapsed time for search_1()
begin_result1 = perf_counter()
result1 = search_1(nums, target)
end_result1 = perf_counter()
elapsed_result1 = end_result1 - begin_result1

# track elapsed time for search_2()
begin_result2 = perf_counter()
result2 = search_2(nums, target)
end_result2 = perf_counter()
elapsed_result2 = end_result2 - begin_result2

print('Time taken for search_1(): {} seconds'.format(elapsed_result1))
print('Time taken for search_2(): {} seconds'.format(elapsed_result2))
```

> **Note:** The actual numbers will vary each time you run the code, since they represent the current internal timer value, not absolute wall-clock time.

Ideally, with a large `nums` list the binary search function should take half as much time as the linear search function.
