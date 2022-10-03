---
Title: '.replace()'
Description: 'Replace a specific substring with another substring.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
  - 'paths/computer-science'
---

Replace a specific substring with another substring.

## Syntax

```py
string.replace(old, new, count)
```

The `.replace()` string method takes in three parameters:

- `old`: The substring to search for. (Required)
- `new`: The substring to replace. (Required)
- `count`: A number specifying how many occurrences of the old value to replace. Default is all occurrences.

## Example 1

`.replace()` can be called either directly on a string:

```py
welcome = "Hello, world!".replace("world", "Codecademy")

print(welcome)
# Output: Hello, Codecademy!
```

Or on a variable assigned to a string:

```py
welcome = "Hello, world!"
welcome = welcome.replace("world", "Codecademy")

print(welcome)
# Output: Hello, Codecademy!
```

Because `replace()` is a method, it returns a new string and does not modify the original string. Therefore:

```py
var = "x"
var.replace("x", "y")
print(var)
# Output: x
```

By default, `replace()` will replace all occurrences in the string. However, you can add an integer to specify how many strings should be replaced.

```py
var = "I like cats and cats like me"
var = var.replace("like", "LOVE")
print(var)
# Output: "I LOVE cats and cats LOVE me"

var = "I like cats and cats like me"
var = var.replace("like", "LOVE", 1)
print(var)
# Output "I LOVE cats and cats like me"
```

## Examples

The `replace()` method can be used to remove sections of a string entirely:

```codebyte/py
myString = "I am a sentence with an extra elephant word."
newString = myString.replace("elephant ", "")
print(newString)
```

It can also be called multiple times on the same string:

```codebyte/py
myString = "I am a sentence with an extra elephant word."
newString = myString.replace("elephant ", "").replace("with", "without")
print(newString)
```

If there are many words that need to be removed, consider using a `for` loop:

```codebyte/py
wordsToReplace = ["rocks! ", "He ", "never ", "and ", "loves "]
mySentence = "My cat rocks! He never bites and loves me."

for word in wordsToReplace:
  mySentence = mySentence.replace(word, "")

print(mySentence)
```
