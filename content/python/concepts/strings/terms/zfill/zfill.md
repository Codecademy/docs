---
Title: '.zfill()' 
Description: 'Takes an int and returns a copy of the string with a number of zeros preppended as a suffix , i.e "no. of zeros" + string.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`.zfill()`**  method pads a string with zeros on the left to maintain a specific length. It takes an integer argument, and the number of zeros added is determined by the difference between the specified length and the length of the original string.

> **Note:** The `.zfill()` method does not change the string it is used on.
If no argument is passed into the method. A type error is thrown

## Syntax
```pseudo
string.zfill(arg(int))
```

## Codebyte Example
The following example shows how `.zfill()` returns a copy of that string with leading zeros. 

```py
first_string = "Codecademy"
second_string = "@Codecademy"
third_string = "cat"

print(first_string)
print(second_string)

# parameter is less than/ equal to string length, output will be the same string.
print(first_string.zfill(10))
print(second_string.zfill(10))

print(first_string.zfill(12))
print(second_string.zfill(12))
print(third_string.zfill(12))
```
This would output:

```shell
Codecademy
@Codecademy

Codecademy
@Codecademy

00Codecademy
0@Codecademy
000000000cat

```

## Example
The following example shows the error thrown when `.zfill()` is used without an arguement passed in

```py
string = "Codecademy"

string.zfill()
```

This would output:

```shell
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: zfill() takes exactly 1 argument (0 given)
```

The above error simply means the `.zfill` method is missing the integer paramater

## Codebyte Example
The following example shows how `.zfill()` method helps ensure a specific length for a string, adding zeros to the beginning if the string is shorter than the desired length.

```codebyte/python
string = '1234'
desired_length = 8

if len(string) < desired_length:
    string = string.zfill(desired_length)
    
print(string)
```

