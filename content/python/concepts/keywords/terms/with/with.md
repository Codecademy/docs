---
Title: 'with'
Description: 'Simplifies resource management by automatically handling setup and teardown actions using context managers.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Files'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`with`** keyword in Python is used to wrap the execution of a block of code within methods defined by a context manager. It simplifies resource management — automatically handling setup and teardown operations like opening and closing files, acquiring and releasing locks, or connecting and disconnecting from databases.

When a block under `with` is executed:

1. The context manager’s `__enter__()` method is called.
2. The block of code inside the `with` statement runs.
3. The context manager’s `__exit__()` method is automatically called after the block finishes — even if an error occurs.

## Syntax

```pseudo
with expression [as variable]:
  # Code block
```

**Parameters:**

- `expression`: A context manager that defines `__enter__()` and `__exit__()` methods.
- `variable` (optional): The object returned by the `__enter__()` method, which can be used inside the code block.

**Return value:**

Returns the object provided by the context manager’s `__enter__()` method, if assigned using `as`.

## Example 1: Managing File Resources

In this example, a file is opened, written to, and automatically closed after the block finishes:

```py
with open("example.txt", "w") as file:
  file.write("Hello, World!")
```

The output of this code is:

```shell
# (No visible output)
# The file 'example.txt' is written and automatically closed.
```

Here the file is automatically opened and closed using `with`. Even if an error occurs while writing, `file.close()` is called automatically.

## Example 2: Using Multiple Context Managers

In this example, two files are managed simultaneously, ensuring both are safely opened and closed:

```py
with open("input.txt", "r") as infile, open("output.txt", "w") as outfile:
  data = infile.read()
  outfile.write(data)
```

In this example, both files are safely managed, opened at the start, and closed automatically when the block ends.

## Example 3: File Handling with `with`

In this example, data is written to a file and then read back using separate `with` blocks for writing and reading:

```py
# Writing to a file using 'with'
with open("demo.txt", "w") as file:
  file.write("Learning Python 'with' keyword!")

# Reading the same file
with open("demo.txt", "r") as file:
  content = file.read()
print(content)
```

The expected output is:

```shell
Learning Python 'with' keyword!
```
