---
Title: 'any()'
Description: 'Takes in an iterable object such as a list or tuple and returns True if any of the elements in the iterable are True. If none of the elements in the iterable are True, returns False.'
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
  - 'paths/data-science'
---

The `any()` built-in function takes in an iterable object such as a list or tuple and returns `True` if any of the elements in the iterable are true. If none of the elements present in the iterable are true, `any()` will return `False`.

## Syntax

```pseudo
any(iterable)
```

The `iterable` is any sequence or collection that can be traversed, such as a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) or [list](https://www.codecademy.com/resources/docs/python/lists).

The inside of the pseudocode can be broken down in the following way:

```pseudo
def any(iterable):
  for element in iterable:
    if element:
      return True
  return False
```

Inside the loop, at the first instance of an `element` existing in the `iterable`, execution will stop and `True` will be returned. If the end of the loop is reached and the element is not found, `False` is returned instead.

## Example

In the following example, the any() function is used to return a boolean after checking a list and a dictionary:

```py
print(any([True, 0, False]))
print(any({0 : "Off"}))
```

The following output will be printed to the shell:

```shell
True
False
```

## Codebyte Example

In the example below, a team of Pokemon are created in preparation for a battle. They are selected based on various properties such as `"level"` and `"type(s)"`. The `any()` function is ultimately used to pick out the Pokemon that meet that criteria:

```codebyte/python
# Declare empty array.
my_team = []

# Add pokemon to array with function.
def add_pokemon_to_team(pokemon):
  my_team.append(pokemon)

# Create array of pokemon objects.
pokemon = [
  {
    "name": "Magikarp",
    "type(s)": ["Water"],
    "level": 21,
    "evolved": False
  },
  {
    "name": "Charizard",
    "type(s)": ["Fire", "Flying"],
    "level": 36,
    "evolved": True
  },
  {
    "name": "Zubat",
    "type(s)": ["Poison", "Flying"],
    "level": 18,
    "evolved": False
  },
  {
    "name": "Ivysaur",
    "type(s)": ["Grass", "Poison"],
    "level": 30,
    "evolved": True
  }
]

# Build team based on type and level.
for p in pokemon:
  poison_type = "Poison" in p["type(s)"]
  fire_type = "Fire" in p["type(s)"]
  acceptable_level = p["level"] >= 25

  necessary_to_win_battle = [
    poison_type and acceptable_level,
    fire_type and acceptable_level
  ]

  # Add pokemon of poison-/fire-types and level 25 or above.
  if any(necessary_to_win_battle):
    add_pokemon_to_team(p["name"])

# Print the array of pokemon that qualify for battle.
print(my_team)
```
