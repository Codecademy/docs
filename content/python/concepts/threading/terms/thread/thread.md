---
Title: '.Thread()'
Description: 'Returns a thread object that can run a function with zero or more arguments.'
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

The `.Thread()` method is a class constructor which returns a thread object that can run a function with zero or more arguments.

## Syntax

```pseudo
threading.Thread(target=object, args=())
```

[Functions](https://www.codecademy.com/resources/docs/python/functions) are commonly passed as the `target` argument, but without parentheses. If any items are listed in the `args` tuple, they are passed as positional arguments to the `target`.

## Example

The object that returns from the `.Thread()` constructor can be assigned to its own variable, as shown in the example below:

```py
import threading

thread_1 = threading.Thread()
thread_2 = threading.Thread()

print(thread_1)
print(thread_2)
```

Every thread object has a `name` attribute that, unless otherwise specified, defaults to `Thread-x`:

```shell
<Thread(Thread-1, initial)>
<Thread(Thread-2, initial)>
```

## Codebyte Example

In the example below, a thread, `hello_thread`, targets the `say_hello()` function with supplied arguments. After the thread is created, the targeted `say_hello()` function is executed when the [`.start()`](https://www.codecademy.com/resources/docs/python/threading/start) method is run.

```codebyte/python
import threading

def say_hello(subject):
  print(f'Hello, {subject}!')
  # Output: Hello, World!

hello_thread = threading.Thread(target=say_hello, args=("World",))

hello_thread.start()
```
