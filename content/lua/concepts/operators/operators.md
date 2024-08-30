---
Title: 'Operators' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Operators are special characters that can carry out mathematical tasks and resolve logical expressions.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Operators'
  - 'Math'
  - 'Numbers'
  - 'Logical'
  - 'Arithmetic'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

**Operators** are special characters that can carry out mathematical tasks and resolve logical expressions.

## Arithmetic Operators

Arithmetic operators can be used to carry out mathematical functions:

```lua
-- Addition. Adds two numbers.
print(1 + 1) -- "2"

-- Subtraction. Subtracts two numbers
print(2 - 1) -- "1"

-- Multiplication. Multiplies two numbers.
print(2 * 2) -- "4"

-- Division. Divides two numbers.
print(4 / 2) -- "2"

-- Exponentiation. Performs an exponential operation
print(3 ^ 3) -- "27"

-- Modulus. This is a special operator that returns the remainder of a division expression.
print(16 % 3) -- "1" (16 divided by 3 would leave a remainder of 1)
print(25 % 5) -- "0" (25 divides evenly into 5)

-- Unary negation. This is not the same as subtraction, as it can be placed in front of a number/expression to negate it.
print(-1) -- "-1"
print(5 + (-1)) -- "4"
print(-(4 * 4)) -- "-16"
```

## Compound Assignments

Compound assignments can be used to carry out mathematical operations and assign them to variables. To prevent errors, the initial value assigned to the variable should align with the input used to update the variable.

Within the following examples, `n = 2`.

| Compound Operation |   Operation    |     Shorthand      |    Expanded Form    |    Result     |
| :----------------: | :------------: | :----------------: | :-----------------: | :-----------: |
|        `+=`        |    Addition    |      `n += 1`      |     `n = n + 1`     |      `3`      |
|        `-=`        |  Subtraction   |      `n -= 1`      |     `n = n - 1`     |      `1`      |
|        `*=`        | Multiplication |     `n \*= 2`      |     `n = n * 2`     |      `4`      |
|        `/=`        |    Division    |      `n /= 2`      |     `n = n / 2`     |      `1`      |
|        `^=`        | Exponentiation |      `n ^= 3`      |     `n = n ^ 3`     |      `8`      |
|        `%=`        |    Modulus     |      `n %= 2`      |     `n = n % 2`     |      `0`      |
|       `..=`        | Concatenation  | `n ..= “ Apples!”` | `n = n.." Apples!"` | `“2 Apples!”` |

## Logical Operators

Logical operators return boolean or `nil` evaluations for [conditional statements](https://www.codecademy.com/resources/docs/lua/conditionals).

| Logical Operator |                             Description                             |
| :--------------: | :-----------------------------------------------------------------: |
|      `and`       |           Resolves as `true` if both conditions are true            |
|       `or`       |           Resolves as `true` if either condition is true            |
|      `not`       | Returns the opposite result of the provided conditional expression. |

## Relational Operators

Relational operators compare two values and resolve as `true` or `false`.

| Compound Operation |        Operation         |       Example       |
| :----------------: | :----------------------: | :-----------------: |
|        `==`        |         Equal to         | `10 == 1` → `false` |
|        `~=`        |       Not equal to       | `10 ~= 1` → `true`  |
|        `>`         |       Greater than       |  `10 > 1` → `true`  |
|        `<`         |        Less than         | `10 < 1` → `false`  |
|        `>=`        | Greater than or equal to | `10 >= 1` → `true`  |
|        `<=`        |  Less than or equal to   | `10 <= 1` → `false` |
