<!--
---
Title: "Replace in Python" 
Subjects:
  - "python"
Tags: # Please first look to use tags that are already listed at author.codecademy.com/browse/tags
  - "functions"
  - "python"
Catalog Content: 
  - https://www.codecademy.com/learn/learn-python-3"
---
-->

Use the built in `replace()` method in Python to modify strings.

## Syntax

`String.replace("thing_to_remove", "thing_to_add", count)`

`replace()` can be called either directly on a string, or on a variable assigned to a string:

```python
var = "hello, world!".replace("world", "Codepedia")
print(var)
# Output: hello, Codepedia!

var = "hello, world! "
var = var.replace("world", "Codepedia")
print(var)
# Output: hello, Codepedia!
```

## Usage

Because `replace()` is a method, it returns a new string and does not modify the original string. Therefore:

```python
var = "x"
var.replace("x", "y")
print(var)
# Output: x
```

By default, `replace()` will replace all occurances in the string. However, you can add an integer to specifiy how many strings should be replaced.

```python
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

`<codebyte>`
```python
myString = "I am a sentence with an extra elephant word."
newString = myString.replace("elephant ", "")
print(newString)
```
`</codebyte>`
  
It can also be called multiple times on the same string:

`<codebyte>`
```python
myString = "I am a sentence with an extra elephant word."
newString = myString.replace("elephant ", "").replace("with", "without")
print(newString)
```
`</codebyte>`

If there are many words that need to be removed, consider using a `for` loop:

`<codebyte>`
```python
wordsToReplace = ["rocks! ", "He ", "never ", "and ", "loves "]
mySentence = "My cat rocks! He never bites and loves me."

for word in wordsToReplace:
  mySentence = mySentence.replace(word, "")

print(mySentence)
```
`</codebyte>`
