---
Title: '.find()'
Description: 'Takes a sub-string and a target string, and returns the start and end indices of the first occurrence of the sub-string found in the target string.'
Subjects:
    - 'Code Foundations'
    - 'Computer Science'
    - 'Game Development'
Tags:
    - 'Strings'
    - 'Functions'
    - 'Methods'
    - 'Search'
    - 'Index'
CatalogContent:
  - 'learn-lua'
---

The **`.find()`** string function is used to search for a substring in a target string, and returns the start and end indices of the first occurrence of the substring.

If the substring is not found, the function returns `nil`.

## Syntax

```lua
string.find(fullString, searchString, init, pattern)
```

or 

```lua
StartIndex, EndIndex = string.find(fullString, searchString, Init, Pattern)
```

- `fullString`: is the string we are searching through.
- `searchString`: is the sub-string to search for.
- `init` (optional): is the index where the search starts. **Default index is 1.**
- `pattern ` (optional): is a Boolean flag indicating wheter to search using pattern matching. when set to false, pattern matching can be used, where as when set to true, pattern matching is ignored, and exact matches are searched for. **Default is `false`.**

## Example 1

use `.find()` without multiple assignments:

```lua
s = 'hello world'
search1 = string.find(s, "hello")
search2 = string.find(s, "world")
search3 = string.find(s, "universe")

print(search1)    -- Output: 1
print(search2)    -- Output: 7
print(search3)    -- Output: nil
```

- `hello` is found at starting index 1 in the `s` string.
- `world` is found at starting index 7 in the `s` string.
- `universe` is not found in `s` string, therefore the output is nil

## Example 2

use `.find()` with multiple assignments

```lua
sentence = "hello world"
a, b = string.find(sentence, "hello")
print(a)     -- Output: 1
print(b)     -- Output: 5

print(a, b)  -- Output: 1	5

y, z = string.find(sentence, "world")
print(y)     -- Output: 7
print(z)     -- Output: 11

print(y, z)  -- Output: 7  11
```

- `hello` starts at index 1, and ends at index 5 in the `sentence` string. Due to multiple assignments, `a` saves the first assignment, and `b` saves the second assignment.
- `world` starts at index 7, and ends at index 11 in the `sentence` string. Due to multiple assignments, `y` saves the first assignment, and `z` saves the second assignment.

## Example 3
use `.find()` with `init` (Initial position) parameter.

```lua
sentence1 = 'hello world'
search = string.find(sentence1, "l", 5)
print(search)   -- Output: 10

sentence2 = 'world world'
a, b = string.find(sentence2, "orl", 5)
print(a)        -- Output: 8
print(b)        -- Output: 10

print(a, b)     -- Output: 8  10
```

- `l` has multple instances within the `sentence` string. Due to the init parameter, the search starts at index 5, therefore the first instance of `l` from index 5 will be at starting index 10. 
- `orl` has multple instances within the `sentence` string. Due to the init parameter, the search starts at index 5, therefore the first instance of `orl` from index 5 will be at starting index 8, and ends at index 10.

## Example 4
use `.find()` with `pattern ` (pattern matching) parameter

```lua
-- With pattern matching
sentence = "hello world"
a, b = string.find(sentence, "l+", 1, false)
print(a)       -- Output: 3
print(b)       -- Output: 4

-- Without pattern matching
y, x = string.find("hello world", "l+", 1, true)
print(y)      -- Output: nil
print(z)      -- Output: nil
```

- In the first example, `l+` uses '+' to match one or more repetitions of the previous character 'l'. Due to the `false` Boolean value, pattern matching is being used, which results the outputs of `a` and `b` resulting to 3 and 4 respectively.
- In the second example, `l+` is being treated as a literal string, which doesn't exist in the string `hello world`. Due to the `true` Boolean value, pattern matching is disabled, which results the outputs of `nil` in both `y` and `z`, as the string `l+` does not exist in the string `hello world`.

[^1]: the special pattern matching characters allow for lua to use specified characters in `searchString` to make a pattern matching search. This allows for complex search patterns, which can enhance the flexibility of your searches. pattern matching is similar to the concept [Regular Expressions](https://www.codecademy.com/resources/docs/general/regular-expressions), although Lua's pattern matching is not the same as regular expression, as it is more limited, and uses a different syntax.
