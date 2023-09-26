---
Title: 'Conditionals'
Description: 'Conditionals execute a code block depending on whether an expression is true.'
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

A **conditional** determines whether or not certain blocks of code will run. A conditional checks the value of an expression, called the **condition**. If the condition is equal to `false`, then the code block within the conditional will be skipped. Otherwise, the code block will be run.

Conditionals are used to control the flow of the execution of code within a program.

## `if` Statement

A basic conditional in Luau is given as follows:

```psuedo
if <condition> then
  <code block>
end
```

Note that, as seen above, `end` must be used to close out a conditional in Luau.

### Examples of basic conditionals

```pseudo
if true then			--code block ran
  print("code block ran")
end

if false then			--no output
  print("code block ran")
end

if "chicken" then		--code block ran
  print("code block ran")
end
```

## else and elseif

To augment the basic conditional, `elseif` can be used to check additional conditions if the first condition is false. Also, `else` can be used to run a code block if all previous conditions were false.

```pseudo
if <condition 1> then
  <code block 1>
elseif <condition 2> then
  <code block 2>
else
  <code block 3>
end
```

In the code above, condition 1 is checked first. Condition 2 will be checked only if condition 1 is false. If both condition 1 and condition 2 are false, then code block 3 will be executed.

### else and elseif examples

```pseudo
if "tony" == "paulie" then		--madone!
  print("ooh!")
elseif "silvio" == "junior" then
  print("dooh!")
else
  print("madone!")
end

if 3 >= 4 then				--dooh!
  print("ooh!")
elseif 23 then
  print("dooh!")
else
  print("madone!")
end

if "AJ" == "AJ" and 3 < 10 then		--ooh!
  print("ooh!")
else
  print("dooh!")
end
```