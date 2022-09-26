---
Title: '.join()'
Description: 'Delays the flow of execution of a program until the target thread is completely read.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Async Await'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.join()` method delays a program's flow of execution until the target thread has been completely read.

## Syntax

```pseudo
thread_object.join(timeout)
```

The `.join()` method always returns `None`. There is also a `timeout` parameter that is set to `None` by default. If set otherwise, it must be represented in seconds with a floating-point value.

## Example

The following example features two threads, `thread_A` and `thread_B`. Each thread makes a call to [`.start()`](https://www.codecademy.com/resources/docs/python/threading/start), immediately followed by a call to `.join()`.

```py
import threading

def is_divisible(dividend, divisor):
  print("Starting...")
  if(dividend % divisor == 0):
    print(True)
  else:
    print(False)
  print("Finished")

thread_A = threading.Thread(target=is_divisible, args=(28, 14))
thread_B = threading.Thread(target=is_divisible, args=(34, 7))

thread_A.start()
thread_A.join()

thread_B.start()
thread_B.join()
```

The output will look like this:

```shell
Starting...
True
Finished
Starting...
False
Finished
```

The second thread, `thread_B`, cannot start before `thread_A` is finished due to `.join()`.

## Codebyte Example

In the example below, the `.join()` method allows the last `print()` statement to appear at the expected time in the program's flow of execution:

```codebyte/python
import threading

def countdown(count):
  print("Counting down...")
  while count > 0:
    print(f'{count} left')
    count -= 1
  print("We made it!")

thread = threading.Thread(target=countdown, args=(5,))

thread.start()
thread.join()

print("End of program.")
```
