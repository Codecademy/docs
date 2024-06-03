---
Title: '.symmetric_difference_update()'
Description: 'Updates the original set by removing items present in both sets and adding items unique to each set.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Collections'
  - 'Functions'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.symmetric_difference_update()`** method updates the original set by removing items present in both sets and adding items unique to each set.

## Syntax

The syntax for using this method is:

```pseudo
set1.symmetric_difference_update(set2)
```

Or in a more compact form :

```pseudo
set1 ^= set2
```

- `set1`: Refers to the original set.
- `set2`: This is the set to be compared with the original set.

## Example

The following example removes items present in both `store1` and `store2` and adds unique items from `store2` to `store1` set:

```py
store1 = {'apple', 'mango', 'lichi', 'orange', 'banana'}
store2 = {'strawberry', 'banana', 'pear', 'raspberry'}

store1.symmetric_difference_update(store2)

print(store1)
```

This would result in modified `store1` set:

```shell
{'apple', 'mango', 'lichi', 'orange', 'strawberry', 'pear', 'raspberry'}
```

> **Note:** A set in Python is unordered. This means that the order of items can change in the above output.

## Codebyte Example

```codebyte/python
sweet_drawer_1 = set(['lollipops', 'cheesecake', 'gummy bears', 'chocolate', 'lemon bars'])
sweet_drawer_2 = set(['waffles', 'brownie', 'gummy bears', 'jelly beans', 'chocolate'])

sweet_drawer_1 ^= sweet_drawer_2
print(sweet_drawer_1)
```
