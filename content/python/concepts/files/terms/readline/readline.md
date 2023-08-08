---
Title: '.readline()'
Description: 'Returns the first line of content from an open file.'
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

The `.readline()` returns the first line of content from an open file.

## Syntax

```py
file.readline()
```

## Example

Use `.readline()` to read the first line of content from the `gullivers_travels.txt` file:

```python
f = open("gullivers_travels.txt", "r", encoding='utf8')

f.readline()
```

## Codebyte Example

The example below first creates a file called `sample_text.txt` and writes multiple lines of text to the file. It then calls `.readline()` twice to extract the two lines of content.

```codebyte/python
with open("sample_text.txt", "w") as f:
    f.write("First line\nSecond line\n")

with open("sample_text.txt", "r") as f:
    print(f.readline())
    print(f.readline())
```
