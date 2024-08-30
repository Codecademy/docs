---
Title: 'status()'
Description: 'Returns a string indicating the status of the provided coroutine.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Async Await'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`status()`** method takes a coroutine as an argument and returns a string indicating the status of that coroutine. This status can be one of three states: `suspended`, `running`, or `dead`.

When a coroutine is created, it has a status of `suspended` by default. Once a coroutine has been called or resumed, it has a status of `running`. The coroutine will run until it is suspended, using `coroutine.yield()`, or it completes. If a coroutine completes its execution and terminates, it receives a permanent status of `dead`.

## Syntax

The syntax for calling `status()` is given below:

```pseudo
coroutine.status(xCoroutine)
```

Where `xCoroutine` names the coroutine to be checked.

## Example

The example below demonstrates the life-cycle of a coroutine from `suspended` to `running` to `dead`:

```lua
--Create a new coroutine using the function lifecycle()

lifecycle = function(parameterCoroutine)
  print(coroutine.status(parameterCoroutine))
end

exampleCoroutine = coroutine.create(lifecycle)

print(coroutine.status(exampleCoroutine)) --Prints 'suspended', since we have not yet run exampleCoroutine.

coroutine.resume(exampleCoroutine, exampleCoroutine) --Runs exampleCoroutine and passes it as a parameter to lifecycle(). This prints 'running', since .status() is called on exampleCoroutine while it is executing.

print(coroutine.status(exampleCoroutine)) --Prints 'dead', since exampleCoroutine has terminated.
```

This results in the output:

```shell
suspended
running
dead
```
