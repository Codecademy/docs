---
Title: 'Iterators' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Iterators are used to loop through a collection of data. They are also used to repeat processes a preset or infinite amount of times.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Lua'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Iterators'
  - 'Conditionals'
  - 'Tables'
  - 'Arrays'
  - 'Logical'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

**Iterators** are used to loop through a collection of data. They are also used to repeat processes a preset or infinite amount of times.

## Iteration Types

In Lua, there are multiple ways to iterate through and/or repeat code. Some iteration methods are intended for iterating through arrays, while others can be used to `repeat` a command until/while a condition is met. Below are some examples of conditional iterations.

### While

A common form of iteration is the "while" loop, in Lua this form of iteration is also implemented with the `while` keyword. However, the body of the loop is framed by the `do` and `end` keywords, as opposed to the curly braces that are used in many other languages.

In addition to the familiar while loop format, there is also the `repeat`-`until` syntax that can be used to serve the same purpose.

```lua
-- This iteration will repeatedly execute it's provided code until the CONDITION becomes false.
x = 2

while x > 0 do
    print("x is still greater than 0!")
    x -= 1
end

print("x is no longer greater than 0!");

-- repeat TASK until CONDITION
-- This iteration will repeat its provided task until the required CONDITION becomes true
i = 1

repeat
    i = i + 1
    print(i) -- 1, 2, 3, 4, ..., 20
until
i == 20 -- Stops iteration when 'i' becomes equivalent to 20
```

### For

It's also possible to create a loop, such as iterating through a list's contents, by using the phrase `for i = n1, n2, n3 do`. This method of iteration will not automatically fetch _index_ and _value_ pairs, but will instead repeat a task a specified amount of times. The `n` values represent the commonly used _start_, _stop_ and _increment_ values in a typical `for` loop.

```lua
--- Repeat the "print" method by using this type of iteration.
for i = 1, 3 do
    print(i) -- 1, 2, 3
end

--[[

  Alternatively, this can be flipped backwards by using
  an optional third parameter within an iteration.

  This third parameter will control how 'i' will increment itself per iteration.

]]--

for i = 1, 3, -1 do
    print(i) -- 3, 2, 1
end
```

As mentioned, iterations can be used to loop through an array. For this, the global keyword `pairs` is used loop through an array in order.

```lua
list = {"🌽", "🥦", "🍄"}

for Index, Value in pairs(list) do
    print(Index) -- 1, 2, 3
    print(Value) -- 🌽, 🥦, 🍄
end
```
