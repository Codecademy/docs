---
Title: '.rpartition()' 
Description: 'Used to split a string into three parts based on a specified separator.'
Subjects: 
  - 'Data Science'
  - 'Web Development'
  - 'Computer Science'
Tags: 
  - 'Strings'
  - 'Methods'
  - 'Formatting'
  - 'Tuples'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`rpartition()`** method is a string method that is used to split a string into three parts based on a specified separator. It searches for the last occurrence of the specified separator in the string and divides the string into three parts: the part before the separator, the separator itself, and the part after the separator. The method returns a tuple containing these three parts.

## Syntax

```pseudo
str.rpartition(separator)
```

- `str`: This is the string on which you want to apply the `.rpartition()` method.
- `separator`: This is the delimiter that determines where to split the string.

## Example 1
  
```py
text = "apple,orange,banana"

result = text.rpartition(',')

print(result)

```

This results in the following output:

```shell
('apple,orange', ',', 'banana')
```

In this example, the `.rpartition()` method splits the string text based on the last occurrence of the comma (','). The result is a tuple containing three parts: the part before the comma, the comma itself, and the part after the comma.

## Example 2
  
When a non-empty `seperator` is provided or `seperator` is not found, `rpartition()` looks for the last character in the string and splits it into three parts: everything before the last character, the last character itself, and everything after the last character.

```py
text = "example"

result = text.rpartition('')

print(result)
```

This results in the following output:

```shell
('exampl', 'e', '')
```

## Codebyte Example (if applicable)

The code below is runnable and uses `.rpartition()` to split `url` : 

```codebyte/python
url = "https://www.example.com/path/to/resource"

base_url, separator, resource = url.rpartition('/')

print("Base URL:", base_url)
print("Separator:", separator)
print("Resource:", resource)

```
