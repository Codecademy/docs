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

```
set_name.discard(value)
```
- This method takes exactly one argument;

- It differs from the `.remove()` method because it **will not raise a KeyError** if the specified item doesn't exist in the set.


## Example

The example below shows possible usage of the method:

```py
coffee_set = {'espresso', 'flat_white', 'cappuccino', 'filter'}
print(coffee_set)

coffee_set.discard('espresso')
print(coffee_set)

coffee_set.discard('aeropress')
print(coffee_set)
```

The output would be the following:

```py
{'espresso', 'flat_white', 'cappuccino', 'filter'}
{'flat_white', 'cappuccino', 'filter'}
{'flat_white', 'cappuccino', 'filter'}
```

## Codebyte Example

In the example, we see that our code continues to execute though there are already no coffee beans from Vietnam in our set.

```codebyte/python
coffee_beans = {'Brazil', 'Ethiopia', 'Kenya', 'Columbia'}
print(coffee_beans)

coffee_beans.discard('Vietnam')
coffee_beans.discard('Brazil')
print(coffee_beans)
```