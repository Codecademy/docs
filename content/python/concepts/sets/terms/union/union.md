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

The following syntaxes can be used:

```pseudo
set.union(set1, set2, ..., setN)

setA | setB | setC
```

- The `.union()` method can be called directly against `set` with multiple sets passed as arguments.
- Optionally, the `|` [operator](https://www.codecademy.com/resources/docs/python/operators) can be used between sets `setA`, `setB`, and `setC` where it will return the same result as the `.union()` method.

## Example

In the example below, two sets of `liked_artists` are created using two alternate syntaxes. Next, they are combined and stored in a new set, `all_likes`, using the `.union()` method:

```py
liked_artists_1 = {'Grimes', 'Billie Eilish'}
liked_artists_2 = {'Daft Punk', 'Iggy Azalea'}

all_likes = liked_artists_1.union(liked_artists_2)

print(all_likes)
```

The output would be the following:

```shell
{'Iggy Azalea', 'Daft Punk', 'Grimes', 'Billie Eilish'}
```

## Codebyte Example

In this example, a new set, `three_Bs`, is created with the alternative syntax of the `.union()` method:

```codebyte/python
bears = set(["Grizzly", "Polar", "Panda"])

beets = set(["Avalanche", "Bull's Blood", "Crosby Egyptian"])

battlestar_galactica = set(["Razor", "The Plan"])

three_Bs = bears | beets | battlestar_galactica

print(three_Bs)
```
