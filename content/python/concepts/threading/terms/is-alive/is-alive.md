---
Title: '.is_alive()'
Description: 'Returns True if the thread is still running and False, otherwise.'
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

The `.is_alive()` method returns `True` if the thread is still running and `False`, otherwise.

## Syntax

```pseudo
thread_object.is_alive()
```

This method will return `True` from when the [`.run()`](https://www.codecademy.com/resources/docs/python/threading/run) method starts until just after it finishes.

## Example

In the example below, two `print(f'...')` statements are written to show calls to `thread.is_alive()`:

```py
import threading

def countdown(count):
  print(f'Thread alive? {thread.is_alive()}')
  print("Counting down...")
  while count > 0:
    print(f'{count} left')
    count -= 1
  print("We made it!")

thread = threading.Thread(target=countdown, args=(5,))

thread.start()
thread.join()

print(f'Thread still alive? {thread.is_alive()}')
print("End of program.")
```

The output will look like the following:

```shell
Thread alive? True
Counting down...
5 left
4 left
3 left
2 left
1 left
We made it!
Thread still alive? False
End of program.
```

## Codebyte Example

The following example goes further with showing where and when the `.is_alive()` method returns `True`:

```codebyte/python
import threading

def countdown(thread, count):
  while count > 0:
    count -= 1

class Frankenstein(threading.Thread):
  def __init__(self, nickname, lifespan):
    threading.Thread.__init__(self)
    self.nickname = nickname
    self.lifespan = lifespan
    print(f'{nickname} created before run(). Alive yet? {self.is_alive()}')

  def run(self):
    print(f'{self.nickname} rising...')
    print(f'Are they alive? {self.is_alive()}')
    countdown(self, self.lifespan)


frankie = Frankenstein("Frankie", 5)

frankie.start()
frankie.join()

print(f'Are they still alive? {frankie.is_alive()}')
```
