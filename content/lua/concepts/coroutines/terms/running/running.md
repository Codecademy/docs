# Lua Coroutines: .running() Method

## Introduction

This README provides documentation for the `.running()` method in Lua coroutines. The `.running()` method is a useful function for determining the current coroutine that is executing.

## Table of Contents

- [Syntax](#syntax)
- [Return Value](#return-value)
- [Example](#example)

## Syntax

```lua
coroutine.running()
```

The `.running()` method is called without any arguments.

## Return Value

The `.running()` method returns two values:

1. The current coroutine if it is not the main coroutine (i.e., it was created using `coroutine.create()`).
2. `nil` if called from the main coroutine (the default coroutine running when Lua is first started).

## Example

```lua
-- Create two coroutines
local co1 = coroutine.create(function()
  print("Coroutine 1 is running")
  print("Current coroutine:", coroutine.running()) -- Returns co1
end)

local co2 = coroutine.create(function()
  print("Coroutine 2 is running")
  print("Current coroutine:", coroutine.running()) -- Returns co2
end)

-- Start coroutine 1
coroutine.resume(co1)

-- Start coroutine 2
coroutine.resume(co2)

-- Check from the main coroutine
print("Current coroutine from main:", coroutine.running()) -- Returns nil
```

In this example, we create two coroutines (`co1` and `co2`) using `coroutine.create()`. When we call `coroutine.running()` from within each coroutine, it returns the respective coroutine. However, when we call it from the main coroutine, it returns `nil`.

The `.running()` method is useful when you want to identify the current coroutine in a multi-coroutine Lua environment.

## Conclusion

The `.running()` method is a simple yet powerful function for working with Lua coroutines. It allows you to determine the current coroutine, which can be especially useful in situations where you are managing multiple coroutines concurrently.
