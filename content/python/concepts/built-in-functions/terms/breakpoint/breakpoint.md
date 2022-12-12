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

By default, the `breakpoint()` function imports the `pdb` debugger module.
`breakpoint()` was introduced in [Python 3.7](https://docs.python.org/3/whatsnew/3.7.html#whatsnew37-pep553) via [PEP 553](https://peps.python.org/pep-0553/). Earlier versions of Python required explicitly setting up a debugger using the following syntax:

```pseudo
import pdb; pdb.set_trace()
```

So, why did they introduce the `breakpoint()` function? For one, it is much more concise and easier to type. Plus, it offers some additional features, such as the ability to choose different debugging tools.

### Common `pdb` Debugger Commands

The default is to work with `pdb` debugger. Here are some common commands used while debugging:

- `h` (help): Print a list of available commands

- `s` (step): Execute the current line, stop at the first possible occasion (either in a function that is called or on the next line in the current function).

-  `n` (next): Continue execution until the next line in the current function is reached, or it returns. The difference between next and step is that step stops inside a called function, while next executes called functions, only stopping at the next line in the current function.

- `c` (continue): Continue execution, only stop when a breakpoint is encountered.

- `w` (where): Print a stack trace, with the most recent frame at the bottom. That means  you'll see the code that is currently executing and its callers.

- `l` (list): Show the current location in the file and a few lines (by default 11 lines) of context.

- `q` (quit): Quit from the debugger. 

For a full list of commands and more information, you can check out [the official documentation on Python's website](https://docs.python.org/3/library/pdb.html#debugger-commands).

## Example

Use `breakpoint()` to open the `pdb` debugger console:

```python
print("Welcome to Codecademy!")

breakpoint()

print("Welcome back to Codecademy!!")
```

Let's take a look at what happens when you run this code in your terminal:

![Screenshot of terminal showing the breakpoint() formula](Screenshot-Terminal-Breakpoint.png)

As you can see, the execution of our program was paused, and you get a prompt in the terminal. At this point, you can start analyzing your code using the previously mentioned commands.