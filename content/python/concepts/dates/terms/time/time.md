---
Title: '.time()'
Description: 'Returns the seconds elapsed since the epoch.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Date'
  - 'Time'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`datetime.time()`** method returns a time in seconds that has passed since the epoch set on the computer. The [`.sleep()`](https://www.codecademy.com/resources/docs/python/time-module/sleep) function suspends execution of the current thread for the specified number of seconds.

## Syntax

```pseudo
datetime.time(hour=0, minute=0, second=0, microsecond=0, tzinfo=None)
time.sleep(seconds)
```

The epoch is usually set as `January 1, 1970, 00:00:00 (UTC)` on most operating systems, excluding any leap seconds.

## Example

The following example demonstrates using `datetime.time()` to track when tea brewing starts and ends, with `.sleep()` creating a pause to simulate brewing time:

```py
import datetime
import time

# Create a simple timer for brewing tea
def brew_tea():
  # Get start time
  start_time = datetime.datetime.now().time()
  print(f"Starting to brew tea at: {start_time.strftime('%H:%M:%S')}")

  print("Brewing...")
  time.sleep(3)  # Wait for 3 seconds

  end_time = datetime.datetime.now().time()
  print(f"Tea is ready at: {end_time.strftime('%H:%M:%S')}")

brew_tea()
```

The output of the above code will be:

```shell
Starting to brew tea at: 21:54:54
Brewing...
Tea is ready at: 21:54:57
```

> **Note:** Times shown will reflect system's current time.

## Codebyte Example

Run the following code to get a better understanding of how `.time()` and `.sleep()` works:

```codebyte/python
import datetime
import time

# Set meeting time
meeting_time = datetime.datetime.now().time()
print("Meeting time:", meeting_time)

# Simulate waiting for 2 seconds
print("Waiting...")
time.sleep(2)

# Print current time
current_time = datetime.datetime.now().time()
print("Current time:", current_time)
```
