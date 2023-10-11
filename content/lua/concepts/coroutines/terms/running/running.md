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

**`running()`** returns a reference to the current coroutine and a boolean for whether execution is currently in the main coroutine.

## Syntax

```pseudo
coroutine.running()
```

- `running()` function in Lua which returns the coroutine running the function. If the function is not running inside a coroutine, it returns nil.
- The `coroutine` table in Lua contains all its coroutine functions, including `create`, which creates new coroutines, and `yield`, which allows a running coroutine to suspend its execution so that it can be resumed later.