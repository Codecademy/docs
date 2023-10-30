---
Title: '.find()'
Description: 'The **`.find()`** function is used to search for a substring within a string, and returns the start and end indices of the first occurrence of the substring.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Index'
  - 'Methods'
  - 'Search'
  - 'Strings'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`.find()`** function is used to search for a substring within a string, and returns the start and end indices of the first occurrence of the substring.

If the substring is not found, the function returns `nil`.

## Syntax

These are 2 different syntaxes for the .find() function:

```pseudo
string.find(fullString, searchString, init, pattern)
```

This requires assining the function to a variable, to return the function.

or

```pseudo
startindex, endindex = string.find(fullstring, searchstring, init, pattern)
```

This uses multiple assignment to save the results to a individual variables.

- `fullString`: Is the string we are searching through.
- `searchString`: Is the sub-string to search for.
- `init` (optional): Is the initial index where the search starts. *Default index is 1*.
- `pattern` (optional): Is a Boolean flag indicating whether to search using **pattern matching**[^1]. When set to false, pattern matching can be used, where as when set to true, pattern matching is ignored, and exact matches are searched for. *Default is false*.

## Example 1

Use `.find()` without multiple assignments:

```lua
sentence = 'hello world'
search1 = string.find(sentence, "hello")
search2 = string.find(sentence, "world")
search3 = string.find(sentence, "universe")

print(search1)
print(search2)
print(search3)
```

The above example assigns the function to a unique variable, in order for the results to be returned/printed to the console.

The results of the above functions are:

```shell
1
7
nil
```

- `hello` is found at starting index 1 in the `sentence` string.
- `world` is found at starting index 7 in the `sentence` string.
- `universe` is not found in `sentence` string, therefore the output is nil.

## Example 2

Use `.find()` with multiple assignments:

```lua
sentence = "hello world"
a, b = string.find(sentence, "hello")
print(a)
print(b)

print(a, b)

y, z = string.find(sentence, "world")
print(y)
print(z)

print(y, z)
```

The above example uses multiple assignment, to save the results to individual variables, in order for the results to be returned/printed to the console.

The results of the above functions are:

```shell
1
5
1  5
7
11
7  11
```

- `hello` starts at index 1, and ends at index 5 in the `sentence` string. Due to multiple assignments, `a` saves the value `1`, and `b` saves the second value `5`.
- `world` starts at index 7, and ends at index 11 in the `sentence` string. Due to multiple assignments, `y` saves the first value `7`, and `z` saves the second value `11`.

## Example 3

Use `.find()` with `init` (Initial position) parameter:

```lua
sentence1 = 'hello world'
search = string.find(sentence1, "l", 5)
print(search)  -- Output: 10

sentence2 = 'world world'
a, b = string.find(sentence2, "orl", 5)
print(a)  -- Output: 8
print(b)  -- Output: 10

print(a, b)  -- Output: 8  10
```

The above example uses the initial position parameter to indicate where the search shout start.

The results of the above functions are:

```shell
10
8
10
8  10
```

- `l` has multiple instances within the `sentence` string. Due to the init parameter, the search starts at index 5, therefore the first instance of `l` from index 5 will be at starting index `10`.
- `orl` has multiple instances within the `sentence` string. Due to the init parameter, the search starts at index 5, therefore the first instance of `orl` from index 5 will be at starting index `8`, and ends at index `10`.

## Example 4

Use `.find()` with `pattern` (pattern matching) parameter:

```lua
-- With pattern matching
sentence = "hello world"
a, b = string.find(sentence, "l+", 1, false)
print(a)  -- Output: 3
print(b)  -- Output: 4

-- Without pattern matching
y, x = string.find("hello world", "l+", 1, true)
print(y)  -- Output: nil
print(z)  -- Output: nil
```

The above example uses the pattern matching parameter to determine if pattern matching characters can be used as search terms.

The results of the above functions are:

```shell
3
4
nil
nil
```

- In the first example, `l+` uses '+' to match one or more repetitions of the previous character 'l'. Due to the `false` boolean value, pattern matching is being used, which results the outputs of `a` and `b` resulting to 3 and 4 respectively.
- In the second example, `l+` is being treated as a literal string, which doesn't exist in the string `hello world`. Due to the `true` boolean value, pattern matching is disabled, which results the outputs of `nil` in both `y` and `z`, as the string `l+` does not exist in the string `hello world`.

[^1]: The special pattern matching characters allow for lua to use specified characters in `searchString` to make a pattern matching search. This allows for complex search patterns, which can enhance the flexibility of your searches. Pattern matching is similar to the concept [Regular Expressions](https://www.codecademy.com/resources/docs/general/regular-expressions), although Lua's pattern matching is not the same as regular expression, as it is more limited, and uses a different syntax.
