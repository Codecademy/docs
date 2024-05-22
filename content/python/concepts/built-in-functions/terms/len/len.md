---
Title: 'len()'
Description: 'Returns the length of an object, which can either be a sequence or collection.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The built-in `len()` function returns the length of an object, which can either be a sequence or collection.

## Syntax

```pseudo
len(object)
```

An `object` passed to the `len()` function is commonly one of the following:

- It can be a sequence such as a [string](https://www.codecademy.com/resources/docs/python/strings) or [tuple](https://www.codecademy.com/resources/docs/python/tuples).
- It can also be a collection such as a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) or [set](https://www.codecademy.com/resources/docs/python/sets).

## Example

The example below demonstrates how the `len()` function is used in a Python program:

```py
print(len("Hello, World!"))
# Output: 13
```

## Codebyte Example

In the example below, the `len()` function is used to return the length of a string, dictionary, and [list](https://www.codecademy.com/resources/docs/python/lists):

```codebyte/python
trainer_name = "Code Ninja"

badges = {
  "pewter city": "boulder badge",
  "cerulean city": "cascade badge",
  "vermillion city": "thunder badge"
}

pokemon_team = ["Pikachu", "Charmander", "Pidgeotto"]

print(len(trainer_name))
print(len(badges))
print(len(pokemon_team))
```
