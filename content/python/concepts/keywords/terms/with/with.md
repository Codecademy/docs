---
Title: 'with'
Description: 'Simplifies resource management by automatically handling setup and teardown actions using context managers.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Context Managers'
  - 'File Handling'
  - 'Resource Management'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`with`** keyword in Python is used to wrap the execution of a block of code within methods defined by a **context manager**.  
It simplifies **resource management** — automatically handling setup and teardown operations like opening and closing files, acquiring and releasing locks, or connecting and disconnecting from databases.

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

expression: A context manager that defines **enter**() and **exit**() methods.

variable (optional): The object returned by the **enter**() method, which can be used inside the code block.

**Return value:**

The value returned by the context manager’s **enter**() method (if assigned using as).

## Example: Managing File Resources

```py
with open("example.txt", "w") as file:
    file.write("Hello, World!")
```

Output:

```shell
# (No visible output)
# The file 'example.txt' is written and automatically closed.
```

In this example:

- The file is automatically opened and closed using with.
- There’s no need to manually call file.close().
- Even if an exception occurs while writing, the file will still close properly.

## Example: Using Multiple Context Managers

You can manage more than one resource in a single with statement:

```py
with open("input.txt", "r") as infile, open("output.txt", "w") as outfile:
    data = infile.read()
    outfile.write(data)
```

This ensures both files are safely opened and closed automatically.

## Codebyte Example: File Handling with `with`

```codebyte/python
# Writing to a file using 'with'
with open("demo.txt", "w") as file:
    file.write("Learning Python 'with' keyword!")

# Reading the same file
with open("demo.txt", "r") as file:
    content = file.read()
print(content)
```

**Expected Output:**
Learning Python 'with' keyword!
