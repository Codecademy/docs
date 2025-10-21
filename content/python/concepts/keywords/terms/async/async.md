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

The **`async`** keyword is used to define an asynchronous function in Python. Asynchronous functions allow multiple tasks to run simultaneously, unlike synchronous code, which completes each task in sequence before beginning the next task.  Async allows for better resource utilisation by handling multiple operations concurrently and enables non-blocking execution.

## Syntax

```pseudo
import asyncio
  
async def function_name(parameters):
  # Function body
  await #awaitable code
```
In the syntax:

- `import asyncio`: Imports the Python library asyncio that contains the async and await keywords.
- `async`: The async keyword is declared before def to define an asynchronous function.
- `await`: The await keyword must be included in the function body, followed by the function body code to be awaited.

> **Note:** If you declare async and do not include the await keyword within the function body a warning will occur and the code will not execute fully. 

## Example

In this example, the async function `hello()` prints the first half of 'Hello world!', waits 3 seconds, and then prints the second half:

```py
import asyncio

async def hello():
    print("Hello")
    await asyncio.sleep(3) # Pauses for 3 seconds
    print("world!")
```

Here is the output:

```shell
Hello
World!
```

## Codebyte Example

In this example, the brew_tea and make_toast async functions are called at the same time. make_toast completes first in 3 seconds and waits for brew_tea to complete in an extra 2 seconds. Once brew_tea has completed, both return messages are printed together after a total of 5 seconds.

```codebyte/python
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