---
Title: 'Serialization/Deserialization'
Description: 'Serialization is the process of translating a complex object into a format that can be later deserialized back into a copy of the original object.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Classes'
  - 'Data Structures'
  - 'JSON'
  - 'Objects'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Serialization is the process of translating a complex object into a string of characters that can be later deserialized back into a copy of the original object. This is beneficial as it allows the software to save the state of an arbitrary object to a destination that can be completely unaware of the details of the object being saved. So any object can be saved to a simple string variable, a database field, an external file system, some third-party application in the cloud, or even printed out on a sheet of paper.

Common formats for serialization include XML and JSON, which have the advantage of being human-readable, but also include binary formats that aren't. Whatever the format, the intent of serialization is that, at a later time, the serialized data can be read or otherwise input into the program and be deserialized back into a copy of the original object.

When programming languages implement serialization, they often require special declarations in defined classes to make their associated objects serializable, and often require special libraries to implement this functionality.

## Example

Here is a simple example of serialization in Python:

```python
import json

def SerializeDict(input_dict):
  print("Serializing input to JSON")
  output_str = json.dumps(input_dict)
  print(output_str)

test_dict = {
  "make": "Chevy",
  "model": "Silverado",
  "msrp" : 15000,
  "options": ["4-wheel-drive","Towing Package","Heated Seats"],
  "year": 2019
}

SerializeDict(test_dict)
```

The output looks like this:

```shell
Serializing input to JSON
{"make": "Chevy", "model": "Silverado", "msrp": 15000, "options": ["4-wheel-drive", "Towing Package", "Heated Seats"], "year": 2019}
```
