---
Title: '.discard()'
Description: 'Removes a passing element from the set if it's present.'
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

The `.discard()` method removes the specified item from the set of objects. 

## Syntax

The syntax is the following:

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