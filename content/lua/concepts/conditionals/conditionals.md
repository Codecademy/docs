---
Title: 'Conditionals' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Conditionals are used to evaluate statements as true or false.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Conditionals'
  - 'Control Flow'
  - 'Operators'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

**Conditionals** are used to evaluate statements as `true` or `false`. They can be used to direct the flow of a program by specifying code blocks to run depending on the outcome of the expression.

The statement or condition can contain logic [operators](https://www.codecademy.com/resources/docs/lua/operators) and [variables](https://www.codecademy.com/resources/docs/lua/variables).

## If Statements

```pseudo
if <condition> then
  <code>
end
```

`if..then` statements run a block of code only when the condition is met. If the condition is `false`, the code block inside the `if` statement does not run. All conditional statements need to have an `end` keyword to close off the statement.

The following example demonstrates an `if` statement with a `true` condition:

```lua
a = 13
b = 16

if a < b then
  a = a + 5
end

print(a)
-- This prints 18 because a is less than b, so the code within the if statement was run which updates the value of a.
```

The following code block demonstrates when the condition is now `false`:

```lua
a = 8
b = 10

if a==b then
  print(b + a)
end
-- Nothing is printed because a is not equal to b so the code statement was not executed.
```

## Else Statements

```pseudo
if <condition> then
  <code>
else
  <code>
end
```

In the event that the first condition is `false`, when there’s a subsequent `else` statement, the `else` statement will execute instead. Think of the `else` as an “if all else fails” plan. The `else` statement **must** go at the end and does not have a condition.

```lua
isNightTime = false

if isNightTime then
  print("Good night!")
else
  print("Good morning!")
end
-- This statement prints "Good morning!" because the if condition evaluated to false.
```

## ElseIf Statements

```pseudo
if <condition> then
  <code>
elseif <condition> then
  <code>
else
  <code>
end
```

`elseif` statements are similar to `else` statements but they can be used to create multiple actions instead of an either/or format. You can have multiple `elseif` statements, each with its own condition, but the final statement has to be an `else` statement.

```lua
player1 = 9

player2 = 12

if player1 >= 20 and player2 >= 20 then
  print( "Everyone wins!")
elseif player1 > player2 then
  print( "Player 1 wins with " .. player1 .. " points!")
elseif player1 < player2 then
  print( "Player 2 wins with " .. player2 .. " points!")
else
  print ("It’s a tie.")
end
-- This prints "Player 2 wins with 12 points" because it’s the first statement that evaluates to true.
```
