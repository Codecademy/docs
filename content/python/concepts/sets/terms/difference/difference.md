---
Title: '.difference()'
Description: 'Returns a new set of objects unique to a given set when compared to others.'
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

The `.difference()` method returns a new set of objects unique to a given set when compared to others.

## Syntax

The following syntaxes can be used:

```pseudo
set.difference(set1, set2, ..., setN)

setA - setB - setC
```

- The `.difference()` method can be called directly against `set` with multiple sets passed as arguments.
- Optionally, the `-` [operator](https://www.codecademy.com/resources/docs/python/operators) can be used between sets `setA`, `setB`, and `setC` where it will return the same result as the `.difference()` method.

## Example

The following example uses the `-` operator to create a new set of likes unique to `sue_likes` when compared with another set, `erika_likes`:

```py
sue_likes = {'Pizza', 'Tofu', 'Poke'}
erika_likes = {'Poke', 'Pizza', 'Popcorn'}

print(sue_likes - erika_likes)
```

This would only print the items unique to the first set:

```shell
{'Tofu'}
```

## Codebyte Example

In the example, a set of trips for the next year is created with the `.difference()` method:

```codebyte/python
goal_trips_last_year = set(["San Francisco", "Dublin", "London", "Naples", "Tokyo", "New York", "Seoul"])
actually_visited_last_year = set(["San Francisco", "London", "Tokyo", "Naples"])

goal_trips_next_year = goal_trips_last_year.difference(actually_visited_last_year)

print(goal_trips_next_year)
```
