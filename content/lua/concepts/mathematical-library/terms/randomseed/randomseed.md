---
Title: 'randomseed()'
Description: 'Used to initialize a seed for the random number generator.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

In Lua, the **`math.randomseed()`** function is a standard function that is part of the Lua `math` library. The `math.randomseed()` function initializes the random number generator with a specific seed value. When the random number generator is initialized with a seed value, it ensures that the sequence of random numbers generated is predictable and reproducible.

This is particularly useful in applications such as simulations or games, where a specific random sequence can be recreated for debugging or sharing results.

## Syntax

```pseudo
math.randomseed(seed)
```

This `randomseed()` method of the Lua `math` library, takes an argument `seed` which can be any integer value.

## Example 1

### Seed with a Fixed Value

In this example, by seeding the random number generator with the value `42`, it ensures that the subsequent calls to `math.random()` will always yield the same result.

```lua
math.randomseed(42)  -- Seed the random number generator with 42
print("Random Number: ", math.random())  -- This will always produce the same random number
```

This example results in the following output:

```shell
Random Number: 0.93081217803957
```

## Example 2

### Creating Reproducible Random Sequences

In this example, by using the same `seed` value `1234`, it will generate the same sequence of 5 random numbers every time.

```lua
math.randomseed(1234)  -- Seed with a specific value
for i = 1, 5 do
    print("Random Number ", i, ": ", math.random(1, 10))  -- Generate and print 5 random numbers
end
```

This example results in the following output:

```shell
Random Number 1 : 3
Random Number 2 : 7
Random Number 3 : 1
Random Number 4 : 4
Random Number 5 : 9
```

## Example 3

### Using System Time as a Seed

In this example, by using `os.time()`, a different `seed` value is taken each time the Lua script is executed, leading to more unpredictable random sequences. This is a common technique to make random sequences less predictable.

```lua
print("System Time:", os.time())
math.randomseed(os.time())  -- Seed with the current system time
print("Random Number:", math.random(1, 100))
```

This code will result in an output similar to the following:

```shell
System Time: 1697258566
Random Number: 53
```

> **Note:** Using this technique for cryptographic purposes is not advisable, as the time value from the `os.time()` is hardly a secret.
