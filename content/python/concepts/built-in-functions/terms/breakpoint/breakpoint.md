---
Title: 'breakpoint()'
Description: 'Engages, configures, and changes the debugger program used in a script.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Debugging'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The **`breakpoint()`** function engages, configures, and changes the debugger program used in a script.

When a breakpoint is reached, it triggers a pause in the execution of the program, allowing the programmer to examine and debug the current state of the code. This feature can be very helpful in trying to figure out why something isn't working correctly or getting an understanding of what is happening. With breakpoints, the programmer can step through the code line-by-line, and watch the output as they progress through the program.

## Syntax

```pseudo
breakpoint()
```

First introduced in [Python 3.7](https://docs.python.org/3/whatsnew/3.7.html#whatsnew37-pep553) via [PEP 553](https://peps.python.org/pep-0553/), the `breakpoint()` function imports the `pdb` module. Earlier versions of Python required explicitly setting up a debugger using the following syntax:

```pseudo
import pdb; pdb.set_trace()
```

One reason the `breakpoint()` function was introduced was to make debugging more concise and type-friendly. Plus, it offers additional features like the ability to choose different debugging tools.

### Common `pdb` Debugger Commands

The default is to work with `pdb` debugger. Here are some common commands used while debugging:

| Command | Expanded | Description                                                                                                                                                                                                                                                               |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `h`     | help     | Print a list of available commands.                                                                                                                                                                                                                                       |
| `s`     | step     | Execute the current line, stop at the first possible occasion (either in a function that is called or on the next line in the current function).                                                                                                                          |
| `n`     | next     | Continue execution until the next line in the current function is reached, or it returns. The difference between next and step is that step stops inside a called function, while next executes called functions, only stopping at the next line in the current function. |
| `c`     | continue | Continue execution, only stop when a breakpoint is encountered.                                                                                                                                                                                                           |
| `w`     | where    | Print a stack trace, with the most recent frame at the bottom, showing the code that is currently executing and its callers.                                                                                                                                              |
| `l`     | list     | Show the current location in the file and a few lines (by default 11 lines) of context.                                                                                                                                                                                   |
| `q`     | quit     | Quit from the debugger.                                                                                                                                                                                                                                                   |

A full list of commands and more information are in [the official documentation on Python's website](https://docs.python.org/3/library/pdb.html#debugger-commands).

## Example

Use `breakpoint()` to open the `pdb` debugger console:

```py
print("Welcome to Codecademy!")

breakpoint()

print("Welcome back to Codecademy!!")
```

This will cause the following in the terminal:

![Terminal window showing the breakpoint() formula](https://raw.githubusercontent.com/Codecademy/docs/main/media/python-built-in-functions-breakpoint-screenshot.png)

The execution of the program was paused, showing a prompt in the terminal. At this point, the code can be analyzed using the previously mentioned commands.
