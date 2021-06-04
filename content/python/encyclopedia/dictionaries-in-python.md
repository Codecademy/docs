---
Title: "Dictionaries in Python" 
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Dictionaries"
  - "Data Types"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

A dictionary is an unordered set of `key: value` pairs. It provides a way to map pieces of data to each other, and allows for quick access to values associated to keys.

## Syntax

The syntax of a dictionary is as follows:

```py
dict = {key1: value1, key2: value2, key3: value3}
```

Each entry in a dictionary is a `key: value` pair. Each pair is separated by a comma.

Dictionary keys can must be immutable types such as numbers and strings, because keys should not change. Keys cannot be lists, as lists are mutable and can change. Otherwise, it will throw a `TypeError`.

Values can be any type such as strings, numbers, lists, even other dictionaries.

## Creating a Dictionary

A dictionary is created using curly braces `{` `}`:

```py
diner = {}
```

A dictionary with entries:

```py
coffee_shop = {"cold brew": 3.50, "latte": 4.25, "cappucino": 3.99}
```
- `"cold brew": 3.50`
- `"latte": 4.25`
- `"cappucino": 3.99`

## Adding a new entry

```py
dict[new_key] = new_value
```

When you try to access a key that does not exist, it will throw a `KeyError`.

## Safely accessing keys using `.get()`

To avoid `KeyError`s when the key does not exist, the `.get()` method can be used. It will return `None` if there is no such key.

```py
```

## .update() method

The `.update()` method lets us add new key: value pairs to a dictionary.

```py
dict.update({key1: value1, key2: value2})
```

`.update()` can also be used to merge dictionaries.

```py
dict1.update(dict2)
```
The key: value pairs of the second dictionary will be written into the original dictionary dict1.

If the keys already exist when performing .update(), it will update the keys with the new values.

## Creating a dictionary using list comprehension

```py
dict = {key: value for key, value in zip(list1, list2)}
```

The values of the first list become the keys, and the values of the second list become the values.

## Removing an entry from a dictionary using .pop()

`.pop()` removes an entry from a dictionary, and returns the value of the corresponding key. If the key does not exist, we can set a default return value.

```py
.pop(key, default_val)
```

## Get all keys using `.keys()`

Returns a dict_keys object, a view object which provides a look at the current state of the dictionary, without the user being able to modify anything. This can be used to iterate over all keys.

```py
for student in dict.keys():
  print(student)
```

## Get all values using `.values()`

Returns a dict_values object, a view object, similar to dict_keys but for the values. Can be used for iterating over all values of a dictionary.
```py
for grade in dict.values():
  print(grade)
```

## Get all keys and values using `.items()`

The `.items()` method returns all keys and values as a dict_list object. Each item in the dict_list is a tuple consisting of each (key, value).

```py
for student, grade in dict.items():
  print(student + ....)
```
