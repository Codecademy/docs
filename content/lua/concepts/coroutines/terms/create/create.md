---
Title: 'create()'
Description: 'Returns a new coroutine with a function as an argument that will run within the new coroutine.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

**`create()`** is used to create a new coroutine with a function as an argument that will run within the new coroutine. This function returns a type thread value. When a new coroutine is created, the status is 'suspended'. The `.resume()` method is used to run or initiate the coroutine. When the execution has completed the coroutine is designated 'dead'.

## Syntax

```pseudo
co = coroutine.create(newFunc)
```

Where `newFunc` is used as an argument to run within the new coroutine.

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
print(coroutine.resume(co_great, "Alice"))

-- Check again after it was run
print(coroutine.status(co_great))
```

The output will look like this below:

```shell
suspended
Hi, Alice
true
dead
```
