---
Title: "Errors in Python" 
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Errors"
  - "Exceptions"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

There are (at least) two distinguishable kinds of errors in Python: syntax errors and exceptions.

## Syntax Errors

Syntax errors, also known as parsing errors, are perhaps the most common kind of complaint you get while you are still learning Python:

```error
File "script.py", line 1
  while True print("Hello world!")
                   ^
SyntaxError: invalid syntax
```

The parser repeats the offending line and displays a little arrow `^` pointing at the earliest point in the line where the error was detected. 

The error is caused by (or at least detected at) the token preceding the arrow in the example, the error is detected at the function `print()`, since a colon `:` is missing before it. 

File name and line number are printed so you know where to look in case the input came from a script.

## Exceptions

Even if a statement or expression is syntactically correct, it may cause an error when an attempt is made to execute it. Errors detected during execution are called exceptions and are not unconditionally fatal. Most exceptions are not handled by programs, however, and result in error messages as shown here:

### Value Error

`ValueError` is thrown when a function's argument is of an inappropriate type.

```error
Traceback (most recent call last):
File "script.py", line 1, in <module>
int('xyz')
ValueError: invalid literal for int() with base 10: 'xyz'
```

### Name Error

`NameError` is thrown when an object could not be found.

```error
Traceback (most recent call last):
File "script.py", line 1, in <module>
age
NameError: name 'age' is not defined
```

### Index Error

`IndexError` is thrown when trying to access an item at an invalid index.

```error
Traceback (most recent call last):
File "script.py", line 1, in <module>
employees[3]
IndexError: list index out of range
```

### Module Not Found Error

`ModuleNotFoundError` is thrown when a module could not be found.

```error
Traceback (most recent call last):
File "script.py", line 1, in <module>
import notamodule
ModuleNotFoundError: No module named 'notamodule'
```

### Zero Division Error 

`ZeroDivisionError` is thrown when the second operator in the division is zero.

```error
Traceback (most recent call last):
File "script.py", line 1, in <module>
ratio = 100 / 0
ZeroDivisionError: division by zero
```

### Full Table

The following table lists important built-in exceptions in Python.

| Exception	| Description |
| --- | --- |
| `AssertionError`	| Raised when the assert statement fails. |
| `AttributeError`	| Raised on the attribute assignment or reference fails. |
| `EOFError`	| Raised when the input() function hits the end-of-file condition. |
| `FloatingPointError`	| Raised when a floating point operation fails. |
| `GeneratorExit` | Raised when a generator's close() method is called. |
| `ImportError`	| Raised when the imported module is not found. |
| `IndexError` | Raised when the index of a sequence is out of range. |
| `KeyError`	| Raised when a key is not found in a dictionary. |
| `MemoryError`	| Raised when an operation runs out of memory. |
| `NameError`	| Raised when a variable is not found in the local or global scope. |
| `OSError`	| Raised when a system operation causes a system-related error. |
| `OverflowError` |	Raised when the result of an arithmetic operation is too large to be represented. |
| `RuntimeError` | Raised when an error does not fall under any other category. |
| `IndentationError` |	Raised when there is an incorrect indentation. |
| `TabError` |Raised when the indentation consists of inconsistent tabs and spaces. |
| `SystemError`	| Raised when the interpreter detects internal error. |
| `TypeError`	| Raised when a function or operation is applied to an object of an incorrect type. |
| `ValueError`	| Raised when a function gets an argument of correct type but improper value. |
| `ZeroDivisionError` | Raised when the second operand of a division or module operation is zero. |