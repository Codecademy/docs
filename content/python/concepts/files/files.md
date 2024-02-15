---
Title: 'Files'
Description: 'Files are named locations on disk to store related information that can be used in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Files'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Files** are named locations on the computer's disk that permanently store information for future use of its data. They are used to permanently store data in non-volatile memory (e.g. hard disk) as opposed to volatile sources like Random Access Memory [RAM](https://www.codecademy.com/resources/docs/general/computer-hardware/ram), which loses its data when the computer is turned off.

## File Handling

Handling files is a common feature that many languages use to work with the computer's file system. In Python, file handling is possible and usually takes place in the following order:

1. Open (or create) the file.
2. Perform operations on the file, such as reading or writing to it.
3. Close the file to free up any resources used.

## Example

The small example below demonstrates how one process of file handling could work:

```py
# Create, or overwrite, a file and open for writing
file = open("myfile.txt", "w")
file.write("Hello world!")
file.close()

# Open existing file to read and print text content
file = open("myfile.txt", "r")
first_two_bytes = file.read(2)
next_three_bytes = file.read(3)
the_rest = file.read()
print(first_two_bytes, next_three_bytes, the_rest, sep="\n")
file.close()
```

In the first part of the code example, a plain text file named `myfile.txt` was created and opened in the `"w"` "write"-mode. Then a piece of text was written to the file and closed afterward.

In the next part, a few calls to the `.read()` method are assigned to some [variables](https://www.codecademy.com/resources/docs/python/variables) and then each one is [printed](https://www.codecademy.com/resources/docs/python/built-in-functions/print) on a new line:

```shell
He
llo
 world!
```

## Files and the Command Line

Python files can be run as [command line arguments](https://www.codecademy.com/resources/docs/python/command-line-arguments) using their filename.

```bash
python example_file.py

# Alternate
python3 example_file.py
```

This executes a file's inner `__main__` environment variable, which then runs the code within. This code may include variable declarations, operations, and function calls.

### More on `__main__`

Any time a `.py` file is run and interpreted, certain variables are set up and linked with the file. This includes `__main__` environment variable, which is assigned as the file's `__name__` variable. All Python programs feature these variables, which can be verified as in the following example:

```py
# example.py

import imported_example

if __name__ == '__main__':
  print('Example file: ' + __name__)

print('Imported example file: ' + imported_example.__name__)
```

When `python example.py` is run on the command line, the following will be printed:

```shell
Example file: __main__
Imported example file: imported_example_file
```

The main file being run, `example.py`, has its `__name__` set to `__main__` while the `imported_example.py` file's `__name__` is literally set to the name of the file.

More information about file methods in Python can be found below.
