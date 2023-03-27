---
Title: '.sleep()'
Description: 'Suspends execution of the current thread for a given time.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Time'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **.sleep()** method suspends execution of the current [thread](https://www.codecademy.com/resources/docs/python/threading) for a given period of time in seconds.

## Syntax

```pseudo
time.sleep(duration)
```

The `duration` parameter is given in seconds, and suspends/delays execution of the thread.

## Example

The following example will delay execution of the next [`print()`](https://www.codecademy.com/resources/docs/python/built-in-functions/print) statement by 2.4 seconds:

```py
import time

print("Printed immediately.")
time.sleep(2.4)
print("Printed after 2.4 seconds.")
```

The output will be:

```shell
Printed immediately.
Printed after 2.4 seconds.
```

## Codebyte Example

The following example will output time after a 5 second delay from current time (provided by the [`.ctime()`](https://www.codecademy.com/resources/docs/python/time-module/ctime) function):

```codebyte/python
import time

print ("Start : %s" % time.ctime())
time.sleep( 5 )
print ("End : %s" % time.ctime())
```
