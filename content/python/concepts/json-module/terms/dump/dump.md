---
Title: '.dump()'
Description: 'Encodes a Python object as a JSON file.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'JSON'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.dump()`** [function](https://www.codecademy.com/resources/docs/python/functions) encodes a Python object as a [JSON](https://www.codecademy.com/resources/docs/general/json) file. The process is known as serialization. The encoding conversion is based on this [table](https://docs.python.org/3/library/json.html#json-to-py-table). This function is essential for data persistence, APIs, and inter-process communication where data needs to be stored or transferred in a structured, language-independent format.

## Syntax

```pseudo
json.dump(obj, file, *, skipkeys=False, ensure_ascii=True, indent=None, ...)
```

**Parameters:**

- `obj`: The Python object to be converted. It can be a [string](https://www.codecademy.com/resources/docs/python/strings), [list](https://www.codecademy.com/resources/docs/python/lists), [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries), etc.
- `file`: A [file](https://www.codecademy.com/resources/docs/python/files)-like object opened in write mode (`'w'`).
- `skipkeys` (Optional): If `True`, skips dictionary keys that are not basic [data types](https://www.codecademy.com/resources/docs/python/data-types) instead of raising a [`TypeError`](https://www.codecademy.com/resources/docs/python/errors).
- `ensure_ascii` (Optional): If `True`, escapes all non-ASCII characters; set to `False` for UTF-8 encoded output.
- `indent` (Optional): If set to an integer (e.g., `2` or `4`), pretty-prints the output with that many spaces of indentation.

> **Note:** The ellipsis (`...`) in the syntax indicates that there can be additional optional parameters beyond those listed here.

## Example 1: Basic Usage of `.dump()`

In this example, a Python dictionary is serialized into a JSON-formatted text file named `person.json` using `.dump()`:

```py
import json

person = {
  'name': 'Alice',
  'age': 30,
  'city': 'New York'
}

with open('person.json', 'w') as f:
  json.dump(person, f)
```

## Example 2: `.dump()` with Indentation and Non-ASCII Characters

This example writes a dictionary containing non-ASCII characters to a file using `.dump()`. The `ensure_ascii=False` parameter ensures characters are saved in UTF-8 format without being escaped, while `indent=4` makes the output nicely formatted for readability:

```py
import json

product = {
  'name': 'Café Latte',
  'price': 3.5,
  'available': True,
  'tags': ['coffee', 'beverage', 'café']
}

with open('product.json', 'w') as f:
  json.dump(product, f, indent=4, ensure_ascii=False)
```

## Example 3: Serializing a List of Dictionaries Using `.dump()`

This example shows how to use `.dump()` to serialize more complex structures like a list of dictionaries into JSON format:

```py
import json

users = [
  {'id': 1, 'name': 'Alice'},
  {'id': 2, 'name': 'Bob'}
]

with open('users.json', 'w') as f:
  json.dump(users, f, indent=2)
```

## Frequently Asked Questions

### 1. What is the difference between `.dump()` and `.dumps()` in Python?

- `.dump()` writes serialized data to a file-like object.
- `.dumps()` returns the serialized data as a string.

### 2. Can I use `.dump()` with custom objects?

Not directly. You'll need to define a custom serialization function or use `default=str` to handle non-serializable objects.

### 3. What happens if the file used in `.dump()` does not exist?

If the file used in `.dump()` is opened in write mode (`'w'`), Python will create the file automatically. If the directory path doesn't exist, it will raise a `FileNotFoundError`.
