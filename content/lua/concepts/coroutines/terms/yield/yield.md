---
Title: 'yield()'
Description: 'Suspends the coroutine and returns to the caller'
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

The **`yield()`** function suspends the current coroutine and returns its arguments to the caller. When subsequently resumed, `yield()` will return any arguments that were passed to `resume()`, and pick up where it left off.

## Syntax

```pseudo
coroutine.yield(...)
```

- The `yield()` function is used to temporarily pause the execution of a coroutine and return control to the coroutine that resumed it.
- When `coroutine.yield()` is called, any arguments passed to it are returned by the corresponding `coroutine.resume()` call that started the coroutine.
- The arguments passed to `coroutine.resume()` are available as return values of the `yield()` function call that suspended the coroutine before.