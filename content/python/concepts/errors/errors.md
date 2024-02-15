---
Title: 'Errors'
Description: 'The two types of errors in Python are syntax errors and exceptions. Exceptions may arise even if the code is syntactically correct.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Errors'
  - 'Exceptions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The two types of **errors** in Python are syntax errors and exceptions.

## Syntax Errors

Syntax errors (also known as parsing errors) occur when a sequence of characters, or tokens, violates the syntax of the Python programming language:

```shell
File "script.py", line 1
  while True print("Hello world!")
                   ^
SyntaxError: invalid syntax
```

The parser repeats the offending line and displays a little arrow `^` pointing at the earliest point in the line where the error was detected.

The error is caused by (or at least detected at) the token preceding the arrow in the example, the error is detected at the [`print()`](https://www.codecademy.com/resources/docs/python/built-in-functions/print) function, since a colon `:` is missing before it.

File name and line number are printed to state where the error originated.

## Exceptions

Even if a statement or expression is syntactically correct, it may cause an error when an attempt is made to execute it. Errors detected during execution are called exceptions and are not unconditionally fatal. Most exceptions are not handled by programs, however, and result in error messages as shown here:

### Value Error

`ValueError` is thrown when a function's argument is of the correct type, but an inapprpriate value, such as being out of range.

```shell
Traceback (most recent call last):
File "script.py", line 1, in <module>
int('xyz')
ValueError: invalid literal for int() with base 10: 'xyz'
```

### Name Error

`NameError` is thrown when an object could not be found.

```shell
Traceback (most recent call last):
File "script.py", line 1, in <module>
age
NameError: name 'age' is not defined
```

### Index Error

`IndexError` is thrown when trying to access an item at an invalid index.

```shell
Traceback (most recent call last):
File "script.py", line 1, in <module>
employees[3]
IndexError: list index out of range
```

### Module Not Found Error

`ModuleNotFoundError` is thrown when a module could not be found.

```shell
Traceback (most recent call last):
File "script.py", line 1, in <module>
import notamodule
ModuleNotFoundError: No module named 'notamodule'
```

### Type Error

`TypeError` is thrown when a function's argument is of an inappropriate type.

```shell
Traceback (most recent call last):
File "script.py", line 1, in <module>
max(True)
TypeError: 'bool' object is not iterable
```

### Zero Division Error

`ZeroDivisionError` is thrown when the second operator in the division is zero.

```shell
Traceback (most recent call last):
File "script.py", line 1, in <module>
ratio = 100 / 0
ZeroDivisionError: division by zero
```
