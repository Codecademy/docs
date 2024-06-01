---
Title: '.discard()'
Description: 'Removes a specified element from a set.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Collections'
  - 'Sets'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.discard()`** method removes a specified element from a [set](https://www.codecademy.com/resources/docs/python/sets). If the element is not found, it takes no action and does not raise an [error](https://www.codecademy.com/resources/docs/python/errors) either.

## Syntax

```pseudo
set.discard(value)
```

- `set`: Refers to the set from which the specified element is to be removed.
- `value`: Denotes the element to be removed from the set.

## Example

The below example shows the usage of the `.discard()` method:

```py
coffee_set = {'espresso', 'flat_white', 'cappuccino', 'filter'}
print(coffee_set)

# Removing 'espresso' from the set
coffee_set.discard('espresso')
print(coffee_set)

# Removing 'latte' from the set
coffee_set.discard('latte')
print(coffee_set)
```

The above code produces the following output:

```shell
{'espresso', 'flat_white', 'cappuccino', 'filter'}
{'flat_white', 'cappuccino', 'filter'}
{'flat_white', 'cappuccino', 'filter'}
```

In the above example, the code continues to get executed without any errors despite the attempt to remove the element `latte`, which doesn't even exist in the set.

## Codebyte Example

Here is a codebyte example demonstrating the use of the `.discard()` method:

```codebyte/python
coffee_beans = {'Brazil', 'Ethiopia', 'Kenya', 'Columbia'}
print(coffee_beans)

coffee_beans.discard('Vietnam')
coffee_beans.discard('Brazil')
print(coffee_beans)
```
