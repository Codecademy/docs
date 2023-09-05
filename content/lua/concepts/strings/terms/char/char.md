---
Title: 'string.char() function in Lua programming' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'use of the string.char() function' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'char.md'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Lua'
---

In Lua, to convert a decimal value to its internal character value we make use of the **string.char()** function.

## Syntax
```codebyte/js
string.char(I)
```
In the above syntax, the identifier I represents the decimal value which we want to convert into a character.

## Example

1. Let’s consider a very simple example, where you are given different decimal values, and you want to convert them to a character value.

**Input**

```codebyte/js
s = string.char(97)
print(s)
s = string.char(122)
print(s)
s = string.char(125)
print(s)
```

**Output**

```codebyte/js
a
z
}
```

2. The string.char() function can take multiple arguments as well.

**Input**

```codebyte/js
i = 97
s = string.char(i,i+1,i+2,i+3)
print(s)
```

**Output**

```codebyte/js
abcd
```
