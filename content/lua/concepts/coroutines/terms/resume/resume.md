---
Title: 'resume()'
Description: 'Resumes a coroutine.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`resume()`** function in Lua resumes a coroutine after it has been paused.

## Syntax

The `resume()` function resumes a coroutine named `routine`.

```pseudo
coroutine.resume(routine)
```

## Example

Consider the following code:

```lua
local routineX = coroutine.create(
  function ()
    for i = 1, 5, 1 do
      print("Run coroutineX!")
        if i == 2 then
          coroutine.yield()
        end
    end
  end
)

local routineY = coroutine.create(
  function ()
    for i = 1, 3, 1 do
      print("Run coroutineY!")
    end
  end
)

print("Coroutine resumed!")
coroutine.resume(routineX)

print("Coroutine resumed!")
coroutine.resume(routineY)

print("Coroutine resumed!")
coroutine.resume(routineX)
```

Two coroutines are created. `routineX` prints `"Run coroutineX!"` twice before stopping. `routineY` prints `"Run coroutineY!"` three times and ends. `routineX` then resumes and continues to print out the text three more times before ending.

This example results in the following output:

```shell
Coroutine resumed!
Run coroutineX!
Run coroutineX!
Coroutine resumed!
Run coroutineY!
Run coroutineY!
Run coroutineY!
Coroutine resumed!
Run coroutineX!
Run coroutineX!
Run coroutineX!
```

A real world example of using `resume()` is when copying and pasting a large folder into another folder or moving a large folder into another folder on the computer. The coroutine runs to move items to another folder, pauses to update the visual loading bar, and then resumes the coroutine of moving items over. And that cycle repeats over and over again until the entire transfer is complete.
