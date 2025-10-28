---
Title: 'async'
Description: 'Allows users to define an asynchronous function in Python.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Async Await'
  - 'Functions'
  - 'Python'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`async`** keyword defines an asynchronous function in Python. Asynchronous functions let a program handle multiple tasks concurrently without waiting for each to finish, improving efficiency and enabling non-blocking execution.

## Syntax

```pseudo
import asyncio

async def function_name(parameters):
  # Function body
  await #awaitable code
```

In the syntax:

- `import asyncio`: Imports Python’s built-in library for running and managing asynchronous tasks.
- `async`: The `async` keyword is declared before [`def`](https://www.codecademy.com/resources/docs/python/keywords/def) to define an asynchronous function (coroutine).
- `await`: Used inside an async function to pause execution until the awaited coroutine or awaitable object completes.

**Parameters:**

Same as a regular function, any number of positional or keyword arguments.

**Return value:**

Returns a coroutine object, which must be awaited (using `await`) to get the actual result.

> **Note:** If an `async` function doesn’t contain any `await` statements, it will still be valid but won’t perform any asynchronous operations.

## Example 1

In this example, the async function `hello()` prints the first half of 'Hello world!', waits 3 seconds, and then prints the second half:

```py
import asyncio

async def hello():
   print("Hello")
   await asyncio.sleep(3) # Pauses for 3 seconds
   print("world!")
```

Here is the output of this code:

```shell
Hello
world!
```

## Example 2

In this example, the `brew_tea` and `make_toast` async functions start running at the same time. `make_toast` finishes first in 3 seconds, while `brew_tea` takes 5 seconds to complete. The program waits for both tasks to finish, then prints their results together after a total of 5 seconds:

```py
import asyncio

async def brew_tea():
  print("Start brewing tea")
  await asyncio.sleep(5) # Pauses for 5 seconds
  return "The tea is ready!"

async def make_toast():
  print("Start making toast")
  await asyncio.sleep(3) # Pauses for 3 seconds
  return "The toast is ready!"

async def make_breakfast():
  batch = asyncio.gather(brew_tea(), make_toast())
  tea_complete, toast_complete = await batch
  print(tea_complete)
  print(toast_complete)

result = asyncio.run(make_breakfast())
print(result)
```

The output of this code is:

```shell
Start brewing tea
Start making toast
The tea is ready!
The toast is ready!
None
```
