---
Title: 'Threading'
Description: 'The threading module allows multiple threads of execution to take place in a Python program.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Async Await'
  - 'Functions'
  - 'Threads'
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

## Example - How to Create and Run Threads in Python

The following example features five threads that are created, started, and end at different points before the program finishes:

```py
import threading, time, random

# Simulates waiting time (e.g., an API call/response)
def slow_function(thread_index):
  time.sleep(random.randint(1, 10))
  print("Thread {} done!".format(thread_index))

def run_threads():
  threads = []

  for thread_index in range(5):
    individual_thread = threading.Thread(target=slow_function, args=(thread_index,))
    threads.append(individual_thread)
    individual_thread.start()

  # At this point, threads are running independently from the main flow of application and each other
  print("Main flow of application")

  # This ensures that all threads finish before the main flow of application continues
  for individual_thread in threads:
    individual_thread.join()

  print("All threads are done")

run_threads()
```

The output for the example will be:

```shell
Main flow of application
Thread 1 done!
Thread 4 done!
Thread 3 done!
Thread 2 done!
Thread 0 done!
All threads are done
```

## Advantages and Use Cases of Python Threading

Python threading offers several advantages and is particularly useful in specific scenarios where concurrent execution can improve performance:

1. **Improved Responsiveness**: In GUI applications, threading keeps the interface responsive while performing background tasks.

2. **I/O-Bound Operations**: Threading is ideal for tasks that spend time waiting for external operations like file I/O, network requests, or database queries.

3. **Simplified Design**: When handling multiple simultaneous operations, threading can make program design clearer and more modular.

4. **Resource Efficiency**: Threads share memory and resources, making them more lightweight than separate processes.

5. **Concurrent Processing**: For operations that can run independently, threading allows concurrent execution, improving overall throughput.

Common use cases for threading include:

- Web scrapers and crawlers
- Server applications handling multiple client connections
- Background tasks in GUI applications
- File and network I/O operations
- Monitoring systems that check multiple services

## Frequently Asked Questions

### 1. Is asyncio better than threading?

Neither is universally better. **Asyncio** uses coroutines for cooperative multitasking within a single thread, making it efficient for many concurrent I/O operations. **Threading** provides actual concurrent execution but with overhead from thread switching. Choose asyncio for high-concurrency I/O tasks and threading for simpler implementation of blocking operations.

### 2. Is Python single-threaded or multithreaded?

Python supports **multithreading**, but the Global Interpreter Lock (GIL) in CPython allows only a single thread to execute Python bytecode at any moment. This means Python can run multiple threads simultaneously for I/O operations, but CPU-bound Python threads won't get true parallel execution in the standard implementation.

### 3. How many Python threads can I run?

The practical limit depends on:

- Available system memory
- CPU resources
- Nature of the workload (I/O vs CPU bound)

For I/O-bound applications, 10-100 threads is typically effective. Beyond that, context switching overhead often outweighs the benefits, and alternatives like asyncio may be more appropriate.

### 4. What is the difference between a thread and a process?

- **Memory**: Threads share memory; processes have separate memory spaces.
- **Resources**: Threads are lightweight; processes have higher overhead.
- **Communication**: Threads use shared memory; processes require IPC.
- **Isolation**: Thread crashes can affect other threads; processes are isolated.
- **Parallelism**: In Python, the GIL limits thread parallelism for CPU tasks; processes can run truly in parallel.
