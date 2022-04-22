---
Title: '.union()'
Description: 'Returns a new set that combines objects from all sets involved, removing any duplicates.'
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

The `.union()` method returns a new set that combines objects from all [sets](https://www.codecademy.com/resources/docs/python/sets) involved, removing any duplicates.

## Syntax

```pseudo
set.union(set1, set2, .., setN)

setA | setB | setC
```

## Example

In the example below, two sets of `liked_artists_` are created using two alternate syntaxes. Next, they are combined and stored in a new set, `all_likes`, using the `.union()` method:

```py
liked_artists_1 = {'Grimes', 'Billie Eilish'}
liked_artists_2 = set({'Daft Punk', 'Iggy Azalea'})

all_likes = liked_artists_1.union(liked_artists_2)

print(all_likes)
```

The output would be the following:

```shell
{'Iggy Azalea', 'Daft Punk', 'Grimes', 'Billie Eilish'}
```

## Codebyte Example

In the example, a set of trips for the next year is created with the `.union()` method:

```codebyte/python
goal_trips_last_year = set(["San Francisco", "Dublin", "London", "Naples", "Tokyo", "New York", "Seoul"])
actually_visited_last_year = set(["San Francisco", "London", "Tokyo", "Naples"])

goal_trips_next_year = goal_trips_last_year.union(actually_visited_last_year)

print(goal_trips_next_year)
```
