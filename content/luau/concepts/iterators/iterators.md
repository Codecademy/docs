---
Title: 'Iterators'
Description: 'Iterators are expressions that repeatedly execute a block of code some number of times.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Iterators'
  - 'Tables'
  - 'Arrays'
  - 'Logical'
  - 'Logic'
CatalogContent:
  - 'learn-lua'
  - 'introduction-to-game-development'
---

An **iterator** repeatedly executes a code block a number of times. This number may be determined or indefinite. In the latter case, an iterator will endlessly execute a code block until some external event occurs, such as the user closing the program.

Common types of iterators in Luau are described below.

## `while` Loops

A `while` loop executes a code block repeatedly until a specific condition is evaluated as `false`.

### `while` Loop Examples and Syntax

```lua
remaining_loops = 5

while remaining_loops > 0 do
  print("There are " .. remaining_loops .. " loops remaining.")
  remaining_loops -= 1
end

print("Enough with the loops!")
```

In the example above, the code block between `while` and `end` will be executed repeatedly until `remaining_loops > 0` is `false`. This results in the following output:

```shell
There are 5 loops remaining.
There are 4 loops remaining.
There are 3 loops remaining.
There are 2 loops remaining.
There are 1 loops remaining.
Enough with the loops!
```

By using a condition that will never evaluate as `false`, `while` loops can run indefinitely:

```lua
while true do
  -- Add code here that will run indefinitely

  task.wait(0.1)
  --A delay is needed when using an indefinite loop to prevent crashes.
end
```

Indefinite loops are useful for programs that are intended to run until a user chooses to end them.

## `repeat` Loops

A `repeat` loop is similar to a while loop. The key difference is that a repeat loop evaluates its condition after the first run of its code block.

### `repeat` Loop Example and Syntax

```lua
repeat
  print("This will always run at least once.")
until false
```

This results in the output:

```shell
This will always run at least once.
```

## `for` Loops

A `for` loop iterates through a series of elements and executes a code block at each one of those elements. This series could be a series of numbers, elements in a table, or characters in a string.

### Numeric `for` Loops

A numeric `for` loop iterates through a series of numbers. A numeric `for` loop includes a start value, end value, and an optional increment value.

```pseudo
for i = start_value, end_value, increment_value do
  --Add code to be repeated here
end
```

`start_value` initializes the value of `i`. `increment_value` increments the value of `i` after each run of the loop. If `increment_value` is positive, the loop will end once `i` is greater than or equal to `end_value`. If `increment_value` is negative, the will end when `i` is less than or equal to `end_value`.

#### Numeric `for` Loop Examples

Excluding the optional increment value parameter results in a default increment value of `1`:

```lua
for i = 1, 3 do
  print(i)
end
```

Output:

```shell
1
2
3
```

An example using a negative increment value:

```lua
for i = 10, 1, -2 do
  print(i)
end
```

Output:

```shell
10
8
6
4
2
```

### Generic `for` Loops

A generic `for` loop iterates through the indices of a table or the characters in a string.

#### `pairs()`

The `pairs()` function can be used to iterate through all elements in a table:

```lua
mixed_table = {}
mixed_table[1] = 1
mixed_table[2] = 0.5
mixed_table[5] = "biff"
mixed_table["a"] = 7

for i,v in pairs(mixed_table) do
  print("The value at index " .. i .. " is " .. v)
end
```

Output:

```shell
The value at index 1 is 1
The value at index 2 is 0.5
The value at index 5 is biff
The value at index a is 7
```

> **Note:** The order in which the elements of the table are looped through is not guaranteed when using `pairs()`.

#### `ipairs()`

The `ipairs()` function can also be used to iterate through a table, but it has a few key differences from `pairs()`:

1. `ipairs()` will ignore any elements with non-integer indices.
2. `ipairs()` will begin at index `1` and ignore any elements at earlier indices.
3. `ipairs()` will stop iterating if there are any integer gaps in the indices.
4. `ipairs()` guarantees the order in which the elements are looped through.

Due to these differences, `ipairs()` is best used for iterating through arrays.

Compare the behavior of `ipairs()` when used on the same table as above:

```lua
mixed_table = {}
mixed_table[1] = 1
mixed_table[2] = 0.5
mixed_table[5] = "biff"
mixed_table["a"] = 7

for i,v in ipairs(mixed_table) do
  print("The value at index " .. i .. " is " .. v)
end
```

Output:

```shell
The value at index 1 is 1
The value at index 2 is 0.5
```

#### `string.gmatch()`

The `string.gmatch()` function can be used to iterate through characters in a string:

```lua
for char in string.gmatch("sarsaparilla", ".") do
  print(char)
end
```

Output:

```shell
s
a
r
s
a
p
a
r
i
l
l
a
```

In the above example, `"."` is used as a special character that matches all other characters.

## `break`

The keyword `break` can be used in any type of loop to instantly force a loop to end.

```lua
for i = 1, 10 do
  if(i == 6) then
    break
  end

  print(i)
end
```

Output:

```shell
1
2
3
4
5
```
