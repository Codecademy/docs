---
Title: '.strip()'
Description: 'Eliminates spaces at the beginning and end of a string, and specified characters when passed as an argument.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.strip()`** method removes any whitespace at the beginning and end of a string. It’s also possible to specify which characters will be removed; otherwise, all whitespaces will be removed. 

## Syntax

```pseudo
string.strip(characters) 
```

Parameters are optional for this method.

## Example 1

The following example shows the usage of `.strip()` _without_ a parameter:

```py
string_with_white_spaces = "   221B, Baker Street   "

print(string_with_white_spaces) 
print(string_with_white_spaces.strip())
```

Output:

```shell
   221B, Baker Street   
221B, Baker Street
```

In the first print statement, the string includes leading and trailing spaces.
In the second print statement, `.strip()` removes these spaces, resulting in a clean output.

## Example 2

The following example shows the usage of `.strip()` _with_ a parameter:

```py
messy_sentence = "iiixxxyyyxyyyyyOctopuses have three hearts and blue blood.iiixxyyyxxyyy"
print(messy_sentence.strip("ixy"))

```

Output:

```shell
Octopuses have three hearts and blue blood.
```

Since the unwanted characters were at the beginning and at the end of the sentence, when passing the specified characters as a parameter in `.strip()`, the output was clean.

## Codebyte Example

Print the code below to prank the person who added this new entry to a shopping list, so no one would know how many bottles of soda to buy, and see the `.strip()` method in action!

```codebyte/python
buy_soda = "15 Sodas for Bday!"
print(buy_soda.strip("15"))
```
