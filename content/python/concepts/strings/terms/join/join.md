---
Title: '.join()'
Description: 'Concatenates all items from an iterable into a single string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Elements'
  - 'Methods'
  - 'Strings'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.join()`** method concatenates all items from an iterable into a single [string](https://www.codecademy.com/resources/docs/python/strings). It’s especially useful when there is a need to combine multiple string elements with a specific separator, like commas, spaces, or newlines.

## Syntax

The `.join()` method is called on a `separator` string:

```pseudo
string.join(iterable)
```

**Parameters:**

- The `separator` can be any string, even an empty one, and is placed between each element from the `iterable`.
- The `iterable` is any object that can be iterated over like tuples or lists. All values of the `iterable` must be strings.

**Return value:**

The `.join()` method returns a new string containing the concatenated result.

## Example 1: Joining a List of Words with Space

This example joins the elements of the `fruits` list with a single space (`" "`) in between:

```py
fruits = ["Apples", "Bananas", "Blueberries"]

combined = " ".join(fruits)

print(combined)
```

Here is the output:

```shell
Apples Bananas Blueberries
```

## Example 2: Using a Hyphen as Separator

This example uses `.join()` to append elements of a tuple with a hyphen (`"-"`) as separator:

```py
vehicles = ("bicycle", "car", "moped", "truck")

joined = "-".join(vehicles)

print(joined)
```

Here is the output:

```shell
bicycle-car-moped-truck
```

## Codebyte Example: Joining Characters in a String

In this example, the string `"hello"` is treated as an iterable of characters, which are joined using `"."` as a separator:

```codebyte/python
chars = "hello"

joined = ".".join(chars)

print(joined)
```

Here is the output:

```shell
h.e.l.l.o
```

## Frequently Asked Questions

### 1. Can I use `.join()` with numbers?

No, all elements must be strings. If you try to join a list of integers using `.join()`, you’ll get a `TypeError`. Use `str()` or a list comprehension to convert them first:

```py
numbers = [1, 2, 3]

joined = "-".join(str(num) for num in numbers)
```

### 2. What happens if the list passed to `.join()` is empty?

If the iterable is empty, `.join()` returns an empty string:

```py
print(",".join([])) # Output: ''
```

### 3. Is `.join()` faster than using `+` in a loop?

Yes. Using `.join()` is much faster and more memory-efficient than concatenating strings with `+` in a loop. It’s the recommended way to concatenate many strings.
