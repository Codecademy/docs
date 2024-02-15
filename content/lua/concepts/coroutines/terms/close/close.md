---
Title: 'close()'
Description: 'Allows the user to gracefully terminate a coroutine, freeing up associated resources in the process.'
Subjects:
  - 'Computer Science'
  - 'Lua Programming'
Tags:
  - 'Methods'
  - 'Coroutines'
  - 'Functions'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`close()`** function in Lua's coroutine module is employed to gracefully terminate a coroutine and release its associated resources.
It yields a boolean value, `true`, if the coroutine has been successfully closed, otherwise it returns `false`.

## Syntax

```pseudo
coroutine.close(coroutine_thread)
```

- The `close()` function is used to explicitly release resources associated with a coroutine, making it safe to close coroutines that have finished their execution.
- Attempting to close a running coroutine or a coroutine that has already been closed will result in an error.
- Always check the return values of `coroutine.close()` to handle potential errors appropriately.

## Example 1

This example uses the `close()` function to terminate a running coroutine.

```lua
local function myCoroutine()
    print("Coroutine is running")
    coroutine.yield()
    print("Coroutine has resumed")
end

local co = coroutine.create(myCoroutine)
coroutine.resume(co) -- Start the coroutine
local success, error_message = coroutine.close(co)
print("Closing coroutine:", success, error_message)
```

The output is:

```shell
Coroutine is running
Closing coroutine:   true   nil
```

## Example 2

This example creates a coroutine using `coroutine.create()`, starts it with `coroutine.resume()`, and then closes it with `coroutine.close()`.

```lua
local function manageCoroutine()
    local co = coroutine.create(function ()
        print("Coroutine is running")
        coroutine.yield()
        print("Coroutine has resumed")
    end)

    coroutine.resume(co) -- Start the coroutine

    local success, error_message = coroutine.close(co)

    if success then
        print("Coroutine closed successfully")
    else
        print("Error while closing coroutine:", error_message)
    end
end

manageCoroutine()
```

This will output:

```shell
Coroutine is running
Coroutine closed successfully
```
