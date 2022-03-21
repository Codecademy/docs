---
Title: 'Command Line Arguments'
Description: 'Python offers several methods of parsing command line arguments that are used when launching a program.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Input'
  - 'Arguments'
  - 'Bash\Shell'
  - 'Command Line'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Python offers several methods of parsing command line arguments that are used when launching a program. When launching a Python program from the command line, the user has the option of passing various parameters to the program by adding them after the program name. These parameters can be accessed through various modules. The parameter names are left up to the programmer, though by convention the parameter `-h` or `--help` (and `/h` and `/help` in Windows) is reserved to print a help message to the console listing the various command line options recognized by the program.

Arguments are passed differently depending on the operating system:

- Unix-like arguments are a single letter preceeded by a dash (`-h`) or a word preceeded by two dashes (`--help`).
- Windows arguments are a letter or a whole word preceeded by a slash (`/h` or `/help`).

## Parsing Command Line Arguments With `sys.argv`

The `sys` module offers the most straightforward method of accessing command line arguments, but it also requires the programmer to do most of the work interpreting them. With the `sys` module the arguments are passed along in a simple list structure named `sys.argv`.

The first item in the list, `sys.argv[0]` is the name used to launch the Python program, along with the path used. Each subsequent item is a space-delimited argument from the command line used to launch the program. If an argument requires embedded spaces, it needs to be enclosed in quotes to be parsed correctly.

### Example

This prints the script name followed by a list of the command line arguments passed on to the program.

```python
import sys

print(f"The program name used to lauch me is {sys.argv[0]}.")
print("I was passed the following arguments:")
for arg in sys.argv[1:]
  print(arg)
```

If this is named **test.py** and is launched as follows:

```bash
$ test.py --arg1 --arg2 "arg 3"
```

It results in the following output:

```pseudo
The program name used to lauch me is test.py.
I was passed the following arguments:
--arg1
--arg2
arg 3
```
