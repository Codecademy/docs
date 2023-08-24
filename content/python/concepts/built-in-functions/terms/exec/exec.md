---
Title: 'exec()'
Description: 'Executes a code object or string containing Python code.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`exec()`** function executes a code object or string containing Python code.

## Syntax

```pseudo
exec(object, globals=None, locals=None)
```

- `object` : String or code object
- `globals`: (optional) A dictionary containing global variables. If not specified, defaults to `None`.
- `locals`: (optional) A dictionary containing local variables. If not specified, defaults to `None`.

The `exec()` function returns `None`.

## Example 1

This example uses `exec()` to parse and execute Python code contained in the string `code`:

```py
code = 'print("Hello, Codecademy!")'

exec(code)
```

This example results in the following output:

```shell
Hello, Codecademy!
```

## Example 2

This example uses `exec()` to execute Python code from a file `code.txt`, which contains Python commands:

```py
#code.txt
import datetime

current_time = datetime.datetime.now()

print(current_time)
```

The content of the file `code.txt` is read until the end of the file (EOF) into a string. The content (Python commands) is executed by `exec()`.

```py
with open('code.txt','r') as file:
  code = file.read()

exec(code)
```

This example will produce output like the following, but with the current date:

```shell
2023-08-16 14:17:06.092145
```

## Example 3

This example uses `exec()` with `globals` and `locals`:

```py
code = input("Enter your command: ")

# In this example a user could inject malicious code like "import os; os.system('cat /etc/passwd')"
exec(code)

code = input("Enter another command: ")

# The globals dictionary allows only the print function from the builtins.
exec(code,{"__builtins__": {"print": print}},{})

def f1():
    print('Hello, Codecademy!')

def f2():
    print('Hello, world!')

# locals restrict the usage of f1 function with exec:
exec("f1()",{"__builtins__": {}}, {"f1": f1})

exec("f2()",{"__builtins__": {}}, {"f1": f1}) # This will throw an error
```

## Codebyte Example

This example uses `exec()` to execute a code object:

```codebyte/python
code = 'import datetime\nprint("Hello, Codecademy!")\ncurrent_time = datetime.datetime.now()\nprint(current_time)'

code_object = compile(code,'<string>','exec')

exec(code_object)
```
