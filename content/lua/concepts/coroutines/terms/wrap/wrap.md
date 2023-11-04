---
Title: 'wrap()'
Description: 'Returns a function that can resume a coroutine, acting like a thread but returning a function.'
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

The **`wrap()`** function makes a coroutine and gives back a function. When that function is called, it resumes the coroutine.

## Syntax

```pseudo
coroutine.wrap(function)
```

- `wrap()` is a function in Lua that creates a coroutine and returns a function that, when called, resumes the coroutine.
- It is similar to `coroutine.create()`, but instead of returning the coroutine itself, it returns a function that can be called multiple times to resume the coroutine.

## Example

This example utilizes the `wrap()` function to execute a wrapped coroutine, printing a specific message.

```lua
function myCoroutine()
  print("Hello from coroutine wrap!")
end

local wrappedCoroutine = coroutine.wrap(myCoroutine)
wrappedCoroutine()
```

This will output:

```shell
Hello from coroutine wrap!
```
