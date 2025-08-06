---
Title: '.roundsuffix()'
Description: 'Removes a specific suffix from a string'
Subjects: 
 - 'Python'
 - 'Computer Science'
Tags: 
 - 'Methods'
 - 'Strings'
CatalogContent: 
 - 'learn-python-3'
 - 'paths/computer-science'
---
# removesuffix()

 **removesuffix()** is a Python method that removes a specified suffix from a string. This method is helpful when you want to remove any unwanted parts of your string. It is case sensitive.

## Syntax 

 ```py
 string_name.removesuffix(suffix) 
 ```
 **string_name** is the string's variable name and **suffix** is the specified part you want to remove.

## Example

This method can be used for a string whose suffix is distinct and separated by punctuation like **(.)**.

```py
file_type = "Cat Store.docx"

file_type.removesuffix('docx')

print(file_type)
```
The output would look like this:
```
Cat Store
```
The suffix can also be specified as the ending of a string.
```py
quote = 'Do or do not, there is no try (Yoda).'

quote.removesuffix('there is no try')

print(quote)
```
The output for this code would look like this:

```
Do or do not,
```
Here's an example demonstrating that roundsuffix() is case-sensitive:

```py
statement = "And when I silently snuck up on my mom, I jumped up and exclaimed 'BOO!'"

statement.roundsuffix('Boo!')

print(statement)

```
Here's the output:
```
And when I silently snuck up on my mom, I jumped up and exclaimed 'BOO!'
```




  