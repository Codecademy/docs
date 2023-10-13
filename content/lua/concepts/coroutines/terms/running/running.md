---
Title: 'running()'
Description: 'Returns the running coroutine or nil if called in the main thread.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

**`running()`** returns a reference to the current coroutine and a boolean that indicates if the execution is currently in the main coroutine.

## Syntax

```pseudo
coroutine.running()
```

- `running()` function in Lua which returns the coroutine running the function. If the function is not running inside a coroutine, it returns `nil`.
- There are several coroutine functions used to manage these objects, including `create()`, which creates new coroutines, and `yield()`, which allows a running coroutine to suspend its execution so that it can be resumed later.

## Example

This example uses `coroutine.running()` to print coroutine IDs, both from the main thread and within a coroutine.

```lua
function printCurrentCoroutineID()
  local currentCoroutine = coroutine.running()
  if currentCoroutine then
    print("Current coroutine ID:", currentCoroutine)
  else
    print("Not running inside a coroutine")
  end
end

print("Printing from the main thread")
printCurrentCoroutineID()

-- Create a coroutine and print from it
local myCoroutine = coroutine.create(function()
  print("Printing from the coroutine")
  printCurrentCoroutineID()
end)

coroutine.resume(myCoroutine)
```

The output will be similar to:

```shell
Printing from the main thread
Current coroutine ID: thread: 0x55eed07642a8
Printing from the coroutine
Current coroutine ID: thread: 0x55eed076bbf8
```
