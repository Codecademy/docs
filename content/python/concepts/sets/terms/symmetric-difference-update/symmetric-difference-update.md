---
Title: '.symmetric_difference_update()'
Description: 'updates the original set by removing items that are present in both sets, and inserting the other items'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Collections'
  - 'Functions'
  - 'Methods'
  - 'Sets'
Catalog:
  - 'learn-python-3'
  - 'paths/computer-science'
Content:
---

The __`.symmetric_difference_update()`__ method updates the original set by removing items that are present in both sets, and inserting the other items.


## Syntax

The following syntaxes can be used:

```pseudo
set.symettrc_difference_update(set1)

```

- `set`: Refers to the original set.
- `set1`: The set to check for matches in.


## Shorter Sytax

Optional shorter syntax :

```pseudo 
set ^= set1

``` 
## Example

The following example removes items that are both present in `store1` and `store2` and adds unique items from `store2` to `store1` set:

```py
store1 = {'apple', 'mango', 'lichi', 'orange', 'banana'}
store2 = {'strawberry', 'banana', 'pear', 'raspberry'}
store1 ^= store2
print(store1)
```

This would result in modified `store1` set:

```shell
{'apple', 'mango', 'lichi', 'orange', 'strawberry', 'pear', 'raspberry'}
```

## Codebyte Example


```codebyte/python
sweet_drawer_1 = set(['lollipops', 'cheescake', 'gummy bears', 'chocolate', 'lemon bars'])
sweet_drawer_2 = set(['waffles', 'brownie', 'gummy bears', 'jelly beans', 'chocolate'])

sweet_drawer_1.symmetric_difference_update(sweet_drawer_2)
print(sweet_drawer_1)
```