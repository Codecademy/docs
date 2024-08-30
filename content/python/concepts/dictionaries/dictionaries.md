---
Title: 'Dictionaries'
Description: 'A dictionary is a data set of key-value pairs.'
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

A dictionary is a data set of key-value pairs. It provides a way to map pieces of data to each other and allows for quick access to values associated with keys.

In Python, dictionaries are dynamic and mutable, which means they can change.

**Note:** As of Python version 3.7, dictionaries are ordered based on insertion, but this is not the case in previous versions.

## Syntax

The syntax of a dictionary is as follows:

```pseudo
dictionary_name = { key1: value1,  key2: value2,  key3: value3 }
```

Each entry in a dictionary is a key-value pair. Each pair is separated by a comma.

Dictionary keys must be immutable types such as numbers and strings because keys should not change. Keys cannot be lists because lists are mutable, and it will raise a `TypeError`.

Values can be any type, such as strings, numbers, lists, and even other dictionaries.

## Creating a Dictionary

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
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }
```

The three key-value pairs in the `coffee_shop` dictionary:

- `"cold brew": 3.50`
- `"latte": 4.25`
- `"cappucino": 3.99`

## Accessing a Dictionary

The values in a dictionary can be accessed by passing the associated key name in a `dictionary[key]` syntax:

```py
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }

print(coffee_shop["cold brew"])
# Output: 3.5
```

When a value is retrieved from a key that does not exist, `KeyError` is raised. If a value is assigned to a key that doesn't exist, the new key-value pair will be added. If a value is assigned to an existing dictionary key, it replaces the existing value.

## Iterating Through a Dictionary

There are several ways to iterate through a dictionary depending on which data that is accessed: keys, values, or both.

The following codebyte consists of four `for` loops that iterate through the `coffee_shop` dictionary:

```codebyte/py
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }

for key in coffee_shop.keys():
    print(key)

for value in coffee_shop.values():
    print(value)

for item in coffee_shop.items():
    print(item)

for key, value in coffee_shop.items():
    print(key, value)
```

The `for` loops access and print each key, value, key-value tuple, and individual key-values in `coffee_shop`, respectively.

## Adding an Entry

To add an entry, use square brackets to create an index into a `new_key` and assign it a `new_value`:

```py
my_dict[new_key] = new_value
```

## Creating a Dictionary using Dictionary Comprehension

Like a list comprehension, a dictionary comprehension is a Pythonic way to create a dictionary. They can be used to filter and manipulate data in tons of useful ways. The syntax is as follows:

```py
new_dict = { expression for key, value in old_dict.items() if condition }
```

The `if` condition at the end is optional, but is a great tool for filtering data. For example, given a dictionary with a person's name and age, make a new dictionary that only contains people with an age under 25:

```py
person_age = { "Mark": 55, "Shiela": 28, "Bryce": 24, "Jim": 41, "Eric": 33, "Ally": 23 }
person_age_filtered = { name: age for name, age in person_age.items() if age < 25 }
```

The expression is `name: age`, as that's how the new dictionary will be formatted. Then, the typical for loop iteration, `for name, age in person_age.items()`. Lastly, the `if` condition filters out the results.

The expression can also perform operations on the data being extracting. For example, to create a dictionary with key value pairs of a number and its square given a list of numbers:

```py
nums_list = [ 1, 2, 3, 4, 5 ]
nums_squared = { num: num**2 for num in nums_list }
```

`nums_squared` will produce a result of: `{ 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 }`

The following built-in methods listed below help with manipulating dictionaries and the objects within:

## Replacing an Entry in an Existing Dictionary

If a key needs to be updated in an existing dictionary, it uses the same syntax for adding an entry into a dictionary (`dictionary[new_key] = new_value`), but instead, the `new_key` argument is replaced with an already existing key in the desired dictionary (`dictionary[existing_key] = new_value`).

```py
person_age = { "Mark": 55, "Shiela": 28, "Bryce": 24, "Jim": 41, "Eric": 33, "Ally": 23 }

# Looks like it's Mark's Birthday! Let's update our dictionary to reflect his new age:
person_age['Mark'] = 56
```

Now, when the `"Mark"` key is accessed from the `person_age` dictionary, it will produce the value 56.
