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

Files are named locations on the computer's disk that permanently store information for future use of its data. They are used to permanently store data in a non-volatile memory (e.g. hard disk) as opposed to volatile sources like Random Access Memory (RAM](https://www.codecademy.com/resources/docs/general/ram), which loses its data when the computer is turned off.

## File Handling

Handling files is a common feature that many languages use to work with the computer's file system. In Python, file handling is possible and usually takes place in the following order:

1. Open (or create) the file.
2. Perform operations on the file, such as reading or writing to it.
3. Close the file to its resources are freed.

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

In the first part of the code example, a plain text file named **myfile.txt** was created and opened in the `"w"` "write"-mode. Then a piece of text was written to the file and closed afterward.

In the next part, a few calls to the `.read()` method are assigned to some [variables](https://www.codecademy.com/resources/docs/python/variables) and then each one is [printed](https://www.codecademy.com/resources/docs/python/built-in-functions/print) on a new line:

```shell
He
llo
 world!
```

More information about file methods in Python can be found below.
