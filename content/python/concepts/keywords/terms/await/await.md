---
Title: 'await'
Description: 'Pauses the execution of an async function until the awaited coroutine completes.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Async'
  - 'Await'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`await`** keyword pauses the execution of an asynchronous function until the awaited [coroutine](https://docs.python.org/3/library/asyncio-task.html#id2), task, or awaitable object is completed. It allows asynchronous code to be written in a way that resembles synchronous code.  

## Syntax

```pseudo
await expression
```

The `await` keyword can only be used inside an `async` function. Using it outside an async function will raise a `SyntaxError`.

## Example

The await keyword can be used to wait for an asynchronous task before continuing:

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
In the Example:

- `Async`: It is used to define an asynchronous function.
- `Asyncio`: It provides the framework and utilities to write asynchronous programs, such as event loops, tasks, and coroutines.


## Codebyte Example

Below is another example:

```codebyte/python
import asyncio

async def greet():
    await asyncio.sleep(1)
    return "Hello from await!"

async def main():
    message = await greet()
    print(message)

asyncio.run(main())
```