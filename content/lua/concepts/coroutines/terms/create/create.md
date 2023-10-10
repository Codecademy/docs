---
Title: '.create()'
Description: '.create() is used to create a new coroutine with a function as an argument that will run within the new coroutine.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Lua'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

**.create()** is used to create a new coroutine with a function as an argument that will run within the new coroutine. This function returns a type thread value. When a new coroutine is created, the status is 'suspended'. Use `.resume()` to run. It will turn to 'dead' once it is finished.

## Syntax

This function can be written by using this syntax:

```pseudo
coroutine.create(newFunc)
```

Where newFunc is used as an argument to run within the new coroutine.

## Example

The following example shows the implementation of the function and its output.

```lua
-- Create a new coroutine named co_great
co_great = coroutine.create(function (name)
    print("Hi, " .. name)
end)

-- Check a new coroutine status
print(coroutine.status(co_great))

-- Run a new coroutine
print(coroutine.status(co_great, "Alice"))

-- Check again after it got run
print(coroutine.status(co_great))
```

The output will look like this below:

```shell
suspended

Hi, Alice

dead
```
