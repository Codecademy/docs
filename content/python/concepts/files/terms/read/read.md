---
Title: '.read()'
Description: 'Allows the user to read the contents of an open file and return the number of associated bytes.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Files'
  - 'Methods'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.read()` file method allows the user to read the contents of an open file and return the number of associated bytes.

## Syntax

```pseudo
file.read(size)
```

The `size` argument is optional and specifies the number of characters (or bytes) to read. The default `size` is -1, which means the whole file will be read.

## Example

The following example reads the full contents of the **lorem_ipsum.txt** file:

```python
f = open("lorem_ipsum.txt", "w")
f.write("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
f.close()

f = open("lorem_ipsum.txt", "r", encoding='utf8')

read_data = f.read()
print(read_data)
f.close()
```

This will print the following:

```shell
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
```

## Codebyte Example

The example below reads the first 100 characters of the `gullivers_travels.txt` file:

```codebyte/python
f = open("gullivers_travels.txt", "w")
f.write("The author gives some account of himself and family. His first inducements to travel. He is shipwrecked, and swims for his life. Gets safe on shore in the country of Lilliput; is made a prisoner, and carried up the country.")
f.close()

f = open("gullivers_travels.txt", "r", encoding='utf8')

read_data = f.read(100)
print(read_data)
f.close()
```
