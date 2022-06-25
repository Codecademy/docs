---
Title: 'Command Line Arguments'
Description: 'Python offers several methods of parsing command line arguments that are used when launching a program.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Input'
  - 'Arguments'
  - 'Bash/Shell'
  - 'Command Line'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Python offers several methods of parsing **command line arguments** that are used when launching a program. The user has the option of passing various parameters to the program by adding them after the program name. These parameters can be accessed through various modules. The parameter names are left up to the programmer. By convention the parameter `-h` or `--help` (and `/h` and `/help` in Windows) is reserved to print a help message to the console listing the various command line options recognized by the program.

Arguments are passed differently depending on the operating system:

- Unix-like arguments are a single letter preceded by a dash (`-h`) or a word preceded by two dashes (`--help`).
- Windows arguments are a letter or a whole word preceded by a slash (`/h` or `/help`).

## Parsing With `sys.argv`

The `sys` module offers the most straightforward method of accessing command line arguments, but it also requires the programmer to do most of the work interpreting them. With the `sys` module, the arguments are passed along in a simple list structure named `sys.argv`.

The first item in the list, `sys.argv[0]` is the name used to launch the Python program, along with the path used. Each subsequent item is a space-delimited argument from the command line used to launch the program. If an argument requires embedded spaces, it needs to be enclosed in quotes to be parsed correctly.

### Example

This prints the script name followed by a list of the command line arguments passed on to the program.

```py
import sys

print(f"The program name used to launch me is {sys.argv[0]}.")
print("I was passed the following arguments:")
for arg in sys.argv[1:]:
  print(arg)
```

If this is named `test.py` it can be launched with the following result:

```bash
$ test.py --arg1 --arg2 "arg 3"
The program name used to launch me is test.py.
I was passed the following arguments:
--arg1
--arg2
arg 3
```

## Parsing With `getopt()`

Using `getopt()` requires importing both the `sys` and `getopt` modules to work. With `getopt`, parameter validation is possible. This is done by passing a list of the command line arguments themselves, a string of short (one character) options, and a list of long (full word) options. To indicate that the option requires a value to be passed along with it, the short option is followed by a colon (`:`), and the long option is followed by an equals sign (`=`).

To set up options for "help", "argument", and a "value" that requires an additional passed value, would look like this:

- The short options would be a string like `"hav:"`.
- The long options would be a list like `["help","argument","value="]`.

### Syntax

```python
options, values = getopt.getopt(arguments, short_options, long_options)
```

Where the results of `getopt()` are `options` which is a list of option/value pairs, and `values` which is a list of arguments left after the option list was stripped. The parameters passed to `getopt()` are `arguments`, a list of the arguments as provided by `sys.argv` without the initial program name, the string `short_options` and the list `long_options` as described above.

If `arguments` contains an option that is not in `short_options` or `long_options` then an `getopt.error` exception is thrown.

### Example

This prints the option/value pairs passed as command line arguments.

```py
import sys, getopt

arguments = sys.argv[1:]
short_options = "hav:"
long_options = ["help","argument","value="]

options, values = getopt.getopt(arguments, short_options, long_options)

for o, v in options:
  print(f"Option is {o}. Value is {v}.")
```

If this is named **test.py** it can be launched with the following results:

```bash
$ test.py -a --value=test
Option is -a. Value is .
Option is --value. Value is test.
```

**Note**: Since `-a` wasn't defined as requiring a value passed to it, the corresponding value for the option is empty.

## Other Methods of Parsing the Command Line

There are other methods of parsing command line arguments in Python, which add varying functionality to the task. Some examples include:

- The `argparse` module, that's been available since Python 3.2, validates fixed and optional arguments and offers a default help message displaying the accepted arguments.
- The `docopt` module, which is complex and versatile, provides its own language to describe command line options.
- The `click` module provides arbitrary nesting of commands and automatic help page generation.
