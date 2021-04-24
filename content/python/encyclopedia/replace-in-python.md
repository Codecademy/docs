<!--
---
Title: "Replace in Python" 
Subjects:
  - "Python"
Tags: # Please first look to use tags that are already listed at author.codecademy.com/browse/tags
  - "Functions"
  - "Python"
Catalog Content: 
  - https://www.codecademy.com/learn/learn-python-3"
---
-->

Use the built in replace() method in Python to modify Strings.

## Syntax

`String.replace("thing_to_remove", "thing_to_add", count)`

replace() can be called either directy on a String, or on a variable assigned to a String:

```Python
var = "x".replace("x", "y")
print(var)
# prints(y)

var = "x"
var = var.replace("x", "y")
print(var)
# prints(y)
```

## Usage

Because replace() is a method, it returns a new string and does not modify the original string. Therefore:

```Python
var = "x"
var.replace("x", "y")
print(var)
# prints(x)
```

By default, replace() will replace all occurances in the String. However, you can add an Integer to specifiy how many strings should be replaced.

```Python
var = "I like cats and cats like me"
var = var.replace("like", "LOVE")
print(var)
# prints "I LOVE cats and cats LOVE me"

var = "I like cats and cats like me"
var = var.replace("like", "LOVE", 1)
print(var)
# prints "I LOVE cats and cats like me"
```

## Examples

The replace() method can be used to remove sections of a String entirely:

`<codebyte>`
```Python
myString = "I am a sentence with an extra elephant word."
newString = myString.replace("elephant ", "")
print(newString)
```
`</codebyte>`
  
It can also be called multiple times on the same String:

`<codebyte>`
```Python
myString = "I am a sentence with an extra elephant word."
newString = myString.replace("elephant ", "").replace("with", "without")
print(newString)
```
`</codebyte>`

If there are many words that need to be removed, consider using a for-loop:

`<codebyte>`
```Python
wordsToReplace = ["rocks! ", "He ", "never ", "and ", "loves "]
mySentence = "My cat rocks! He never bites and loves me."
for word in wordsToReplace:
  mySentence = mySentence.replace(word, "")
print(mySentence)
```
`</codebyte>`
