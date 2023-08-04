---
Title: '.close()'
Description: 'Allows the user to close an open file within the IDE.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Files'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.close()` file method allows the user to close an open file within the IDE.

## Syntax

```py
file.close()
```

## Example

Use `.close()` to close the opened `gullivers_travels.txt` file:

```python
f = open("gullivers_travels.txt", "r", encoding='utf8')

f.close()
```

## Codebyte Example

The example below opens a file called `example_file.txt` and then closes it using `.close()`. The `.closed` attribute is used to show whether the file is open or closed.

```codebyte/python
filename = "example.txt"
f = open(filename, "w")


print("f is closed" if f.closed else "f is open")

f.close()

print("f is closed" if f.closed else "f is open")
```
