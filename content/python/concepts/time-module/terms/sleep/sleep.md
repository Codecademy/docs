---
Title: 'sleep()'
Description: 'Suspends execution of the current thread for a specified number of seconds'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Control Flow'
  - 'Functions'
  - 'Methods'
  - 'Time'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`time.sleep()`** method suspends the execution of the current [thread](https://www.codecademy.com/resources/docs/python/threading) for a specified number of seconds. This function temporarily pauses program execution, allowing other processes to run or creating deliberate delays in code execution.

The `time.sleep()` method is commonly used in scenarios where you need to introduce delays, such as creating timers, controlling the rate of data processing, simulating real-world delays, or implementing retry mechanisms with backoff strategies. It's particularly useful in automation scripts, web scraping applications, and programs that interact with external APIs or hardware devices.

## Syntax

```pseudo
time.sleep(seconds)
```

**Parameters:**

- `seconds`: A positive number (integer or float) representing the number of seconds to pause execution. Float values allow for sub-second precision.

**Return value:**

The `time.sleep()` method does not return any value (returns `None`).

## Example 1: Basic Sleep Implementation

This example demonstrates the fundamental usage of `time.sleep()` to create a simple delay in program execution:

```py
import time

# Print message before delay
print("Starting program...")

# Pause execution for 3 seconds
time.sleep(3)

# Print message after delay
print("Program resumed after 3 seconds")
```

The output of this code is:

```shell
Starting program...
Program resumed after 3 seconds
```

The program first prints "Starting program...", then pauses for exactly 3 seconds, and finally prints the second message.

## Example 2: Creating a Simple Timer

This example shows how to use `time.sleep()` to create a countdown timer, demonstrating a practical real-world application:

```py
import time

def countdown_timer(seconds):
  """Creates a countdown timer that displays remaining time"""
  for i in range(seconds, 0, -1):
    print(f"Time remaining: {i} seconds")
    time.sleep(1)  # Wait for 1 second
  print("Timer finished!")

# Create a 5-second countdown
countdown_timer(5)
```

The output of this code is:

```shell
Time remaining: 5 seconds
Time remaining: 4 seconds
Time remaining: 3 seconds
Time remaining: 2 seconds
Time remaining: 1 seconds
Timer finished!
```

This example creates a countdown that updates every second, showing how `time.sleep()` can be used to control the timing of repeated operations.

## Codebyte Example: Automated Data Processing with Delays

This example demonstrates using `time.sleep()` in a data processing scenario where you need to respect rate limits or simulate processing time:

```codebyte/python
import time

def process_data_batch(data_list, delay_seconds=2):
  """Process data with delays between operations"""
  print("Starting batch processing...")

  for i, item in enumerate(data_list, 1):
    print(f"Processing item {i}: {item}")

    # Simulate processing time or respect API rate limits
    time.sleep(delay_seconds)

    print(f"Completed processing: {item}")

  print("All items processed successfully!")

# Example data list
items = ["user_data.json", "sales_report.csv", "inventory.xml"]

# Process with 2-second delays between items
process_data_batch(items)
```

This example shows how `time.sleep()` can be used to create controlled delays in automated processes, which is essential when working with external APIs or systems that have rate limiting.

## Frequently Asked Questions

### 1. Can `time.sleep()` accept decimal values for sub-second delays?

Yes, `time.sleep()` accepts both integer and float values. For example, `time.sleep(0.5)` will pause execution for half a second, and `time.sleep(0.1)` will pause for 100 milliseconds.

### 2. Does `time.sleep()` block the entire program?

Yes, `time.sleep()` blocks the current thread completely. In single-threaded programs, this means the entire program is paused. For non-blocking delays, consider using `asyncio.sleep()` in asynchronous programs or threading for concurrent operations.

### 3. What happens if I pass a negative number to `time.sleep()`?

Passing a negative number to `time.sleep()` will raise a `ValueError`. The function only accepts non-negative values.
