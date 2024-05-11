---
Title: '.discard()'
Description: 'Removes a specified element from the set if it exists.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Methods'
  - 'Sets'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.discard()`** method in [sets](https://www.codecademy.com/resources/docs/python/sets) removes a specified element if present; however, if the element is not found, it takes no action and does not raise an error.

## Syntax

```pseudo
set.discard(value)
```

- `set`: Refers to the set from which the specified element is to be removed.
- `value`: This denotes the element that should be removed from the set.

## Example

The example below shows the usage of the `.discard()` method:

```py
coffee_set = {'espresso', 'flat_white', 'cappuccino', 'filter'}
print(coffee_set)

# removing 'espresso' from the set 
coffee_set.discard('espresso') 
print(coffee_set)

# removing 'latte' from the set 
coffee_set.discard('latte') 
print(coffee_set)
```

The code above produces  the following output:

```shell
{'espresso', 'flat_white', 'cappuccino', 'filter'}
{'flat_white', 'cappuccino', 'filter'}
{'flat_white', 'cappuccino', 'filter'}
```

In the example, our code continues to execute without errors even though we attempt to remove the element 'latte' which doesn't even exist in the set.

## Codebyte Example

```codebyte/python
coffee_beans = {'Brazil', 'Ethiopia', 'Kenya', 'Columbia'}
print(coffee_beans)

coffee_beans.discard('Vietnam')
coffee_beans.discard('Brazil')
print(coffee_beans)
```
