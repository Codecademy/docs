---
Title: '.extend()'
Description: 'Adds the elements of an iterable (like a list, tuple, or string) to the end of the current list.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Lists'
  - 'Methods'
  - 'Values'
  - 'Variables'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Python, the **`.extend()`** method adds the elements of an [iterable](https://www.codecademy.com/resources/docs/python/iterators) (like a list, [string](https://www.codecademy.com/resources/docs/python/strings), or [tuple](https://www.codecademy.com/resources/docs/python/tuples)) to the end of the current list. Unlike [`.append()`](https://www.codecademy.com/resources/docs/python/lists/append), which adds the entire object as a single element, `.extend()` adds each element individually.

This makes `.extend()` especially useful for combining lists or incorporating multiple values into an existing list.

## Syntax

```pseudo
list.extend(iterable)
```

**Parameters:**

- `iterable`: An iterable (like a list, tuple, or string) whose elements are to be added to `list`.

**Return value:**

The `.extend()` method changes the list in place and returns `None`.

## Example 1: Extending a List with Another List

This example uses `.extend()` to add the items from the `grocery_new` list to the end of the `grocery` list:

```py
grocery = ['blueberries', 'eggs', 'artichoke']
grocery_new = ['milk', 'cookies']

grocery.extend(grocery_new)

print(grocery)
```

Here is the output:

```shell
['blueberries', 'eggs', 'artichoke', 'milk', 'cookies']
```

## Example 2: Extending a List with a Tuple

This example uses `.extend()` to add the items from the `targets` tuple to the end of the `to_do_list` list:

```py
to_do_list = ['respond to email', 'check github']
targets = (4, 1, 6, 20)

to_do_list.extend(targets)

print(to_do_list)
```

Here is the output:

```shell
['respond to email', 'check github', 4, 1, 6, 20]
```

## Codebyte Example: Extending a List with a String

This example uses `.extend()` to add the characters of a string to the end of the `letters` list:

```codebyte/python
letters = ['a', 'b']
letters.extend('cd')

print(letters)
```

## Frequently Asked Questions

### 1. What is the difference between `.append()` and `.extend()`?

- `.append()` adds the entire object as a single element.
- `.extend()` adds elements one by one from the iterable.

### 2. Does `.extend()` return a new list?

No. `.extend()` modifies the list in place and returns `None`.

### 3. What happens if I pass a non-iterable object to `.extend()`?

If you pass a non-iterable object to `.extend()`, you’ll get a `TypeError`.
