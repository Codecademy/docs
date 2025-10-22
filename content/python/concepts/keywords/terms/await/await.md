---
Title: 'await'
Description: 'Pauses the execution of an asynchronous function until the awaited coroutine, task, or awaitable object finishes.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Async Await'
  - 'Functions'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`await`** keyword pauses the execution of an asynchronous function until the awaited [coroutine](https://docs.python.org/3/library/asyncio-task.html#id2), task, or awaitable object completes. It lets asynchronous code read and behave more like synchronous code.

## Syntax

```pseudo
await expression
```

> **Note:** The `await` keyword can only be used inside an `async` function. Using it outside an async function will raise a `SyntaxError`.

## Example 1

This example pauses execution while waiting for simulated data to be fetched:

```py
import asyncio

async def fetch_data():
  print("Fetching data...")
  await asyncio.sleep(1)
  print("Data received!")
  return {"data": 42}

async def main():
  result = await fetch_data()
  print("Result:", result)

asyncio.run(main())
```

Here is the output:

```shell
Fetching data...
Data received!
Result: {'data': 42}
```

In this example:

- `async` defines an asynchronous function that can contain `await`.
- `asyncio` provides tools for running asynchronous code, such as event loops, coroutines, and tasks.

## Example 2

This example waits for one second before returning and printing a message:

```py
import asyncio

async def greet():
  await asyncio.sleep(1)
  return "Hello from await!"

async def main():
  message = await greet()
  print(message)

asyncio.run(main())
```

The output of this code is:

```shell
Hello from await!
```
