---
Title: '.replace()'
Description: 'Replaces a given substring with another substring in a string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Python, the **`.replace()`** method replaces a given [substring](https://www.codecademy.com/resources/docs/python/substrings) with another substring in a string. This method is useful for text processing, data cleaning, and formatting tasks.

## Syntax

```pseudo
string.replace(old, new, count)
```

**Parameters:**

- `old`: The substring to be replaced.
- `new`: The substring to replace with.
- `count`: Specifies the number of occurrences of the given substring to be replaced. If not specified, all occurrences of the given substring is replaced.

**Return value:**

The `.replace()` method returns another string with the given substring replaced.

## Example 1: Basic Usage of `.replace()`

This example uses the `.replace()` method to replace "world" with "Codecademy" in the `welcome` string:

```py
welcome = "Hello, world!"

welcome = welcome.replace("world", "Codecademy")

print(welcome)
```

Here is the output:

```shell
Hello, Codecademy!
```

## Example 2: Using `.replace()` with `count`

This example uses the `.replace()` method with the `count` parameter to replace only the first occurrence (`count = 1`) of "like" with "love" in the `var` string:

```py
var = "I like cats and cats like me."

var = var.replace("like", "love", 1)

print(var)
```

Here is the output:

```shell
I love cats and cats like me.
```

## Codebyte Example: Removing Substrings Using `.replace()`

This codebyte example uses the `.replace()` method to remove "elephant " from the `myVar` string:

```codebyte/python
myVar = "I am a sentence with an extra elephant word."

newVar = myVar.replace("elephant ", "")

print(newVar)
```

## Frequently Asked Questions

### 1. Is `.replace()` case-sensitive?

Yes, `.replace()` is case-sensitive. For example, `"Hello".replace("h", "J")` won’t work because "h" is not the same as "H".

### 2. Can `.replace()` be used with variables?

Yes. You can use variables for both old and new values in `.replace()`:

```py
old = "apple"
new = "orange"

fruit_text = "I like apple pie."

print(fruit_text.replace(old, new))
```

Here is the output:

```shell
I like orange pie.
```

### 3. Can you replace substrings in a loop using `.replace()`?

Yes, and you can also chain `.replace()` calls for multiple replacements:

```py
text = "I love red and blue."

text = text.replace("red", "green").replace("blue", "yellow")

print(text)
```

Here is the output:

```shell
I love green and yellow.
```
