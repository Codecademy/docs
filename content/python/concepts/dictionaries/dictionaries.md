---
Title: 'Dictionaries'
Description: 'A dictionary is an ordered set of key-value pairs. It provides a way to map pieces of data to each other and allows for quick access to values associated to keys.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dictionaries'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A dictionary is an ordered set of key-value pairs. It provides a way to map pieces of data to each other and allows for quick access to values associated with keys. Keys must be unique in dictionaries, but the values don't have to be.

Python dictionaries are dynamic and mutable, which means they can change.

If you assign a value to an already existing dictionary key, it does not add the key a second time. Instead, it replaces the existing value. Dictionaries also have several built-in methods which make it easier to manipulate the data structure and objects contained within.

**Note:** As of Python version 3.7, dictionaries are ordered based on insertion, but this is not the case in Python 3.6 and earlier.

## Syntax

The syntax of a dictionary is as follows:

```pseudo
dictionary_name = {key1: value1,  key2: value2,  key3: value3}
```

Each entry in a dictionary is a key-value pair. Each pair is separated by a comma.

Dictionary keys must be immutable types such as numbers and strings because keys should not change. Keys cannot be lists because lists are mutable, and it will throw a `TypeError`.

Values can be any type, such as strings, numbers, lists, and even other dictionaries.

## Create a Dictionary

An empty dictionary is created with curly braces:

```py
diner = {}
```

An empty dictionary can also be created using the built-in function, `dict()`, with no arguments:

```py
diner = dict()
```

A dictionary with entries:

```py
coffee_shop = {"cold brew": 3.50, "latte": 4.25, "cappucino": 3.99}
```

The three key-value pairs in the `coffee_shop` dictionary:

- `"cold brew": 3.50`
- `"latte": 4.25`
- `"cappucino": 3.99`

## Accessing a Dictionary

Dictionaries can be referred to by using the key name:

```py
coffee_shop = {"cold brew": 3.50, "latte": 4.25, "cappucino": 3.99}

print(coffee_shop["cold brew"])
# Output: 3.5
```

When you try to access a key that does not exist, it will throw a `KeyError`.

## Iterating Through a Dictionary

There are several ways to iterate through a dictionary depending on which data you want to access: keys, values, or both.

The following codebyte consists of four `for` loops that iterate through the `coffee_shop` dictionary:

```codebyte/py
coffee_shop = {"cold brew": 3.50, "latte": 4.25, "cappucino": 3.99}

# Access keys
for key in coffee_shop.keys():
    print(key)

# Access values
for value in coffee_shop.values():
    print(value)

# Key-value as an item, formatted as a tuple
for item in coffee_shop.items():
    print(item)

# Individual key and value:
for key, value in coffee_shop.items():
    print(key, value)
```

The `for` loops access and print each key, value, key-value as a tuple, and individual key-values in `coffee_shop`, respectively.

## Add an Entry

To add an entry, use square brackets to create an index into a `new_key` and assign it a `new_value`:

```py
my_dict[new_key] = new_value
```

## Create a Dictionary using Dictionary Comprehension

Like a list comprehension, a dictionary comprehension is a pythonic way to create a dictionary. They can be used to filter and manipulate data in tons of useful ways. The syntax is as follows:

```py
my_dict_comp = { expression for key, value in dictionary if condition }
```

The `if condition` is optional, but is a great tool for filtering data. For example, given a dictionary with key value pairs as a person's name and their age, make a new dictionary to filter only those whose age is less than 25:

```py
person_age = { "Mark": 55, "Shiela": 28, "Bryce": 24, "Jim": 41, "Eric": 33, "Ally": 23 }
person_age_filtered = { name: age for name, age in person_age.items() if age < 25 }
```

The expression is `name: age`, as that's how the new dictionary will be formatted. Then, the typical for loop iteration, `for name, age in person_age.items()`. Lastly, the if condition that filters out the results. 

The expression can also perform operations on the data being extracting. For example, to create a dictionary with key value pairs of a number and its square given a list of numbers:

```py
nums_list = [ 1, 2, 3, 4, 5 ]
nums_squared = { num: num**2 for num in nums_list }
```

`nums_squared` will produce a result of: `{ 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 }`
