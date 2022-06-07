---
Title: '.start()'
Description: 'Activates and prompts a thread object to be run.'
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

The `.start()` method activates and prompts a thread object to be run.

## Syntax

```pseudo
thread_object.start()
```

Each `thread_object` can only be run once. Otherwise, a `RuntimeError` will be thrown.

## Example

```py
import threading

def do_this():
  print("Task done!")

my_thread = threading.Thread(target=do_this)

my_thread.start()
```

After the `.start()` method is invoked against `my_thread`, the `target` function, `do_this()`, will execute and the following will be printed:

```shell
Task done!
```

## Codebyte Example

Another example of the `.start()` method being used is shown below:

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
```
