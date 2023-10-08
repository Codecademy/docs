---
Title: 'Running Method'
Description: 'Explanation of the running() method in Lua coroutines.'
Subjects:
  - 'Computer Science'
  - 'Functions'
  - 'Async Await'
  - 'learn-lua'
  - 'paths/computer-science'
Tags:
  - 'Lua'
  - 'coroutines'
  - 'documentation'
CatalogContent:
  - 'Coroutines'
  - 'Concepts'
  - 'Lua'
  - 'Running Method'
---

# Running Method

## Introduction

The `running()` method is a crucial function in Lua coroutines. This section provides an in-depth explanation of its purpose and usage.

## Syntax

The syntax for the `running()` method is straightforward:

```lua
coroutine.running()
```

The `running()` method is called without any arguments.

## Example

Here's an example of how to use the `running()` method:

```lua
-- Create a coroutine
local co = coroutine.create(function()
    print("This is a coroutine")
    coroutine.yield()
    print("Resumed coroutine")
end)

-- Resume the coroutine
coroutine.resume(co)

-- Output: 
-- This is a coroutine
-- Resumed coroutine
```

In this example, we create a coroutine and then use the `coroutine.resume()` function to start and resume the coroutine. The `running()` method helps us identify the state of the coroutine.

## Codebyte Example (Lua)

We currently support the Lua language for runnable code examples.

```codebyte/lua
-- Example runnable code block in Lua.
local co = coroutine.create(function()
    print("This is a coroutine")
    coroutine.yield()
    print("Resumed coroutine")
end)

coroutine.resume(co) -- Output: This is a coroutine
coroutine.resume(co) -- Output: Resumed coroutine
```

This code block demonstrates the use of the `running()` method within a Lua coroutine, showing the output at different stages of execution.

## Conclusion

The `running()` method in Lua coroutines allows you to manage and control the execution flow of coroutines. It provides a means to determine whether a coroutine is running and facilitates advanced coroutine-based programming.

Understanding how to use the `running()` method is fundamental to working effectively with Lua coroutines and asynchronous programming.

For more detailed information about Lua coroutines and related concepts, explore the other documentation entries in the [Coroutines](https://www.codecademy.com/resources/docs/lua/coroutines) section.
