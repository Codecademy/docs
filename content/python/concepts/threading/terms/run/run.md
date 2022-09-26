---
Title: '.run()'
Description: 'Executes any target function belonging to a given thread object that is now active.'
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

The `.run()` method executes any target function belonging to a given thread object that is now active. It normally executes in the background after the [`.start()`](https://www.codecademy.com/resources/docs/python/threading/start) method is invoked.

## Syntax

```pseudo
thread_object.start()
# .run() executing in the background
```

The `.run()` method commonly takes the form of the `target` function passed to the `thread_object`, if any.

## Example

The `.run()` method can be overridden with different instructions and statements in a separate subclass, like in the example below:

```py
import threading

class CustomThread(threading.Thread):
  def run(self):
    print("This is my custom run!")

custom_thread = CustomThread()
custom_thread.start()
```

After the `.start()` method is called against the `custom_thread`, the overriden `.run()` method is executed and the following is printed:

```shell
This is my custom run!
```

## Codebyte Example

Choosing whether or not to override the `.run()` method is a matter of preference. It exists to assist [Java](https://www.codecademy.com/resources/docs/java) developers with learning to use threads in Python. Passing a `target` function into the `.Thread()` constructor and then invoking the `.start()` will achieve the same thing:

```codebyte/python
import threading

class CustomThread(threading.Thread):
  def run(self):
    print("This is my custom run!")

def regular_run():
  print("This is my regular run!")

thread_A = CustomThread()
thread_B = threading.Thread(target=regular_run)

thread_A.start()
thread_B.start()
```
