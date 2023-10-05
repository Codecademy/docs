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


## Codebyte Example

The following code is runnable and uses the `.strip()` method.

```codebyte/python
buy_soda = "15 Sodas for Bday!"
print(buy_soda.strip("15"))
```
