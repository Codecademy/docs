---
Title: '.sleep()'
Description: 'The function suspends execution of current thread for a given time.'
Subject: 'Computer Science'
Tags: 
 -'Functions'
 -'Time'
CatalogContent:
 -'learn-python'
 - 'concepts/time-module'
---

### **.sleep()**

The python time module function .sleep() suspends execution of current thread for a given period of time(in seconds).

### **Syntax** 

```time.sleep(duration)``` 
Duration is the time(in seconds) the execution will be suspended/delayed.

This will suspend execution for 23.4 seconds.
This function is part of the python time module which handles time related tasks.

### **Example**
This example will delay print by 2.4 seconds.

```
import time

print("Printed immediately.")
time.sleep(2.4)
print("Printed after 2.4 seconds.")
```

## Codebyte Example

The example below will output time after a 5 second delay from current time.

```codebyte/python
import time

print "Start : %s" % time.ctime()
time.sleep( 5 )
print "End : %s" % time.ctime()

```