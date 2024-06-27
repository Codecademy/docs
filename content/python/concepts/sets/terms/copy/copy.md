---
Title: '.copy()'
Description: 'Returns a shallow copy of a specified set.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Functions'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.copy()`** method returns a shallow copy of a specified set. The shallow copy is a new set that contains references to the elements in the original set, not the elements themselves. It can be used when it is important to work with the new set without modifying the original set.

## Syntax

```pseudo
set.copy()
```

- `set`: The set to be copied.

## Example

The following example demonstrates the usage of the `.copy()` method:

```py
original_set = { 'First', 'Second', 'Third' }
print (original_set)

new_set = original_set.copy()
new_set.add('Fourth')
print(new_set)
```

The above code produces the following output:

```shell
{'First', 'Second', 'Third'}
{'First', 'Second', 'Third', 'Fourth'}
```

> Note: Unlike [lists](https://www.codecademy.com/resources/docs/python/lists), a set element has no order or index. Hence, though the elements in the output are shown in order, they can be placed differently in other cases.

## Codebyte Example

The following codebyte example demonstrates the usage of the `.copy()` method:

```codebyte/python
original_set = {'apple', 'banana', 'cherry'}
print(original_set)

new_set = original_set.copy()
new_set.add('date')
print(new_set)
```
