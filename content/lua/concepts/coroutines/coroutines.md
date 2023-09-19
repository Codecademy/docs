---
Title: 'Coroutines' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Coroutines are functions that can be paused and restarted as needed.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Functions'
  - 'Async Await'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

**Coroutines** allow for the distribution and execution of multiple tasks as a set of concurrent processes. Coroutines do not provide parallelism: they can not be used to distribute work across multiple cores.

## Syntax

Coroutines can be created in two different ways, either by defining a function and passing it to `coroutine.create()`, or declaring the relevant logic as an anonymous function within the body of the `coroutine.create()` statement.

```pseudo
-- Option 1
local newFunc = function()
  -- Function body
  end
end

local routineA = coroutine.create(newFunc)

-- Option 2
local routineB = coroutine.create(
  function() -- Anonymous function declaration
    -- Function body
    if -- Condition x
      coroutine.yield() -- The coroutine is paused until it is called again
    end
  end
)
```

## Coroutine States

A coroutine can enter one of three states: suspended, running, or dead. This is what makes them useful, as they are essentially functions that can be paused and resumed at a later point. The status of a coroutine can be checked with the `status()` function and resumed using the `resume()` function. Once a coroutine has reached a dead state, it cannot be resumed again.

## Functions in Coroutines

The following functions can be used to create, manage and terminate coroutines.
