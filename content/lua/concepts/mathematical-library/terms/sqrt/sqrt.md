---
Title: 'sqrt()'
Description: '`sqrt` function returns the result of the square root operation on a numeric variable.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Game Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

**math.sqrt()** function returns the result of the square root operation on a numeric variable. It takes a positive number as an argument value to be passed into the function.

## Syntax

`sqrt()` function can be written by using this syntax:

```pseudo
math.sqrt(num_var)
```

Where the `num_var` is an argument with the value of positive number.

## Example 1

The function returns the square root of 25 and show it directly.

```lua
num_var = 25
math.sqrt(num_var)
```

The result will be shown below:

```shell
5.0
```

## Example 2

The function returns nan as the results value if the `num_var` has negative number.

```lua
num_var = -25
math.sqrt(num_var)
```

The results will look like this:

```shell
nan
```

Where nan stands for not a number which represent undefined or unpresentable numerical results.
