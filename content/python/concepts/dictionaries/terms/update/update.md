---
Title: '.update()'
Description: 'Updates the dictionary with key-value pairs from another dictionary or iterable, overwriting existing keys if they exist.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dictionaries'
  - 'Functions'
  - 'Methods'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.update()`** method adds key-value pairs from another dictionary or an [iterable](https://www.codecademy.com/resources/docs/python/iterators) of key-value pairs to the target dictionary. If a key already exists, its value is updated; otherwise, a new key-value pair is added. This method is useful for tasks like updating user profiles, merging configuration settings, or synchronizing data across sources.

## Syntax

```pseudo
dict.update([other])
```

**Parameters:**

- `other`: This can be a dictionary or an iterable of key-value pairs (like a list of [tuples](https://www.codecademy.com/resources/docs/python/tuples)). If there is a duplicate key in `dict` and `other`, the key-value pair in `dict` is replaced with the key-value pair in `other`.

**Return value:**

The `.update()` method updates the dictionary in place and returns `None`.

## Example 1: Basic Usage of `.update()` method in Python Dictionary

This example uses the `.update()` method to add the entries from one dictionary to another:

```py
# Create two dictionaries
person = {'name': 'Alice', 'age': 25}
new_info = {'city': 'New York', 'age': 26}

# Add the entries from 'new_info' to 'person'
person.update(new_info)

# Print the modified 'person' dictionary
print(person)
```

Here is the output:

```shell
{'name': 'Alice', 'age': 26, 'city': 'New York'}
```

## Example 2: Using `.update()` with a List of Tuples

This example uses the `.update()` method to add the entries from an iterable of key-value pairs (list of tuples) to a dictionary:

```py
# Create a dictionary and a tuple
settings = {'theme': 'light', 'notifications': True}
new_settings = [('theme', 'dark'), ('volume', 'medium')]

# Add the entries from 'new_settings' to 'settings'
settings.update(new_settings)

# Print the modified 'settings' dictionary
print(settings)
```

Here is the output:

```shell
{'theme': 'dark', 'notifications': True, 'volume': 'medium'}
```

## Codebyte Example: Using `.update()` with Keyword Arguments

This codebyte example uses the `.update()` method with keyword arguments to add entries to a dictionary:

```codebyte/python
# Create a dictionary
config = {'debug': False}

# Add entries to 'config'
config.update(debug=True, log_level='INFO')

# Print the modified 'config' dictionary
print(config)
```

## Frequently Asked Questions

### 1. What if the argument to `.update()` is `None` or not iterable?

Passing `None` or a non-iterable object to `.update()` will raise a `TypeError`. You must provide a dictionary or an iterable of key-value pairs.

### 2. Is `.update()` thread-safe?

No, `.update()` is not thread-safe. If you're working with shared dictionaries in a multi-threaded environment, use locks to avoid race conditions.

### 3. Can I chain `.update()` calls?

Since `.update()` returns `None`, it cannot be chained directly. If you want to apply multiple updates, call `.update()` separately for each.
