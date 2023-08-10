---
Title: 'Coroutines' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Coroutines allow the execution of multiple tasks at the same time without yielding by using separate threads.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
---

**Coroutines** allow the execution of multiple tasks at the same time without yielding by using separate threads.


## Coroutine States

Coroutines act as normal threads with the exception of being controlled by the main thread it was created within. A coroutine can enter one of three states: suspended, running, or dead. This is what makes them useful, as they are essentially functions that can be paused and resumed at a later point. The status of a coroutine can be checked with the status function and resumed it using the resume function. Once a coroutine is in a dead state, it cannot be resumed again.


## When Should Coroutines Be Used?

Coroutines are ideal when sent data needs to be matched with received data. For example, if a process needs to be run in an infinite loop thread, you can use `coroutine.yield()` to run the process, and wait for the process to resume the thread when it’s ready.


## Functions In Coroutines

`coroutine.create(f)` - Creates a new coroutine with a function, represented by f, and returns an object of the type “thread”.

`coroutine.resume(co, val1, …)` - Resumes the coroutine co and passes the parameters if any are defined. It returns the status of the operation and optional other return values.

`coroutine.running()` - Returns the running coroutine or nil if called in the main thread

`coroutine.status(co)` - Returns the values from running, suspended, or dead based on the state of the coroutine.

`coroutine.wrap(f)` - Similar to `coroutine.create()`, this function also creates a coroutine, but instead of returning the coroutine itself, it returns a function that, when called, resumes the coroutine.

`coroutine.yield(...)` - This suspends the running coroutine. The parameter passed to this method acts as additional return values to the resumed function.