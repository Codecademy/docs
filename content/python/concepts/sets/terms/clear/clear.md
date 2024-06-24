---
Title: '.clear()' 
Description: 'Removes all elements from the set.'
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
 - 'Methods'
 - 'Sets'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.clear()`** method removes all elements from a set and does not return any value. After using the `.clear()` method, the set itself remains, but it is empty.

## Syntax

```pseudo
set.clear()
```

- `set`: The set from which all elements will be removed.
  
## Example

In the example below, the `.clear()` method is used to remove all elements from the `pets` set, leaving it empty:

```py
pets ={"cats", "dogs", "hamsters", "lizards", "turtles"}
pets.clear()
print(pets)
```

The resulting output will look like this:

```shell
 set()
```

## Codebyte Example

```codebyte/python
cat_breeds ={"Persian", "Sphynx", "Siamese", "Maine Coon", "Bengal"}
print("Cat Breeds:", cat_breeds)

cat_breeds.clear()
print(cat_breeds)
```
