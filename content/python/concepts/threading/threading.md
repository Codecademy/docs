---
Title: 'Threading'
Description: 'The threading module allows multiple threads of execution to take place in a Python program.'
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

The **`threading`** module allows multiple threads of execution to take place in a Python program.

While threads may appear to run simultaneously, only one thread can be executed at a time. This is enforced by Python's [global interpreter lock](https://docs.python.org/3/glossary.html#term-global-interpreter-lock).

Threading is helpful when working with tasks that are I/O bound. This includes web-oriented tasks like scraping or downloading files.

## Syntax

```pseudo
import threading
```

The `threading` module must first be imported before thread constants can be created and their methods can be used.

## Example

The following example features five threads that are created, started, and end at different points before the program finishes:

```py
import threading, time, random

# simulates waiting time (e.g., an API call/response)
def slow_function(thread_index):
  time.sleep(random.randint(1, 10))
  print("Thread {} done!".format(thread_index))

def run_threads():
  threads = []

  for thread_index in range(5):
    individual_thread = threading.Thread(target=slow_function, args=(thread_index,))
    threads.append(individual_thread)
    individual_thread.start()

  # at this point threads are running independently from the main flow of application and each other
  print("Main flow of application")

  # This ensures that all threads finish before the main flow of application continues
  for individual_thread in threads:
    individual_thread.join()

  print("All threads are done")

run_threads()
```

This results in output like the following:

```shell
Main flow of application
Thread 1 done!
Thread 4 done!
Thread 3 done!
Thread 2 done!
Thread 0 done!
All threads are done
```
