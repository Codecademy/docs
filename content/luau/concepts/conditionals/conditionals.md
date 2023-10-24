---
Title: 'Conditionals'
Description: 'Conditionals evaluate expressions to determine what code to run.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Conditionals'
  - 'Control Flow'
  - 'Logic'
  - 'Logical'
CatalogContent:
  - 'learn-lua'
  - 'introduction-to-game-development'
---

A **conditional** determines whether or not certain blocks of code will run. A conditional checks the value of an expression, called the **condition**. If the condition is `false`, then the code block within the conditional will be skipped. Otherwise, the code block will be run.

Conditionals are used to control the flow of the execution of code within a program.

## `if` Conditionals

A basic `if` conditional in Luau is given as follows:

```psuedo
if <condition> then
  <code block>
end
```

### Examples of basic `if` conditionals

```lua
if true then  --code block ran
  print("code block ran")
end

if false then  --no output
  print("code block ran")
end

if "chicken" then  --code block ran
  print("code block ran")
end
```

## `else` and `elseif`

To augment the basic `if` conditional, `elseif` can be used to check additional conditions if the first condition is `false`. Also, the `else` keyword can be used as a catchall to run a code block if all previous conditions were `false`.

```pseudo
if <condition 1> then
  <code block 1>
elseif <condition 2> then
  <code block 2>
else
  <code block 3>
end
```

In the code above, `condition 1` is checked first. `condition 2` is checked only if `condition 1` is `false`. If the first two conditions are both `false`, then `code block 3` will be executed.

### `else` and `elseif` examples

The following examples illustrate conditionals that use `else` and `elseif`.

```lua
if "tony" == "paulie" then  --madone!
  print("ooh!")
elseif "silvio" == "junior" then
  print("dooh!")
else
  print("madone!")
end

if 3 >= 4 then  --dooh!
  print("ooh!")
elseif 23 then
  print("dooh!")
else
  print("madone!")
end

if "AJ" == "AJ" and 3 < 10 then  --ooh!
  print("ooh!")
else
  print("dooh!")
end
```
