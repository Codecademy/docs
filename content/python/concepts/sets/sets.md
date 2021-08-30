---
Title: "Sets" 
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Sets"
  - "Data Types"
CatalogContent: 
  - "learn-python-3"
  - "paths/computer-science"
---

A set is an unordered collection of elements with any duplicates.

Sets are especially useful for performing logical operations like finding the union, intersection, or difference between collections of elements. For example, sets could be used to determine mutual friends on a social networking site.

## Creating a Set

There are several ways to create a set. 

1. We can create a set from a list with the `set()` keyword:

```py
animals = set()
animals = set(['aardvark', 'snail', 'squid'])
```

2. A set can also be created with curly braces:

```py 
oceans = {'Pacific', 'Atlantic', 'Indian', 'Southern', 'Arctic'}
```

It's important to note that creating a set will remove any duplicate elements. For example:

```py
dog_breeds = {'pug', 'golden retriever', 'corgi', 'pug', 'corgi'}
```

will create a new set with only unique values:

```py 
{'pug', 'golden retriever', 'corgi'}
```

## Set Operations

Sets are especially useful for logical operations such as finding the intersection, union, or difference between collections. 

## Union

The `union()` method or `|` operator can be used to merge two or more sets:

```py
liked_artists1 = {'Grimes', 'Billie Eilish'}
liked_artists2 = set({'Daft Punk', 'Iggy Azalea'})

all_likes = liked_artists1.union(liked_artists2)
print(all_likes)
```

The output would be:

```shell
{'Iggy Azalea', 'Daft Punk', 'Grimes', 'Billie Eilish'}
```

## Intersection

We can use the `intersection()` method or `&` operator to find the shared elements within two or more sets. For example:

```py
friend_group1= {'Juan', 'Mary', 'David', 'Yukiko', 'Alice'}
friend_group2 = {'Yukiko', 'Peter', 'Juan', 'Alice'}

mutual_friends = friend_group1.intersection(friend_group2)
print(mutual_friends)
```

Would output:

```shell
{'Yukiko', 'Alice', 'Juan'}
```

## Difference

We can use the `difference()` method or `-` operator to identify objects unique to a set. For example:

```py
sue_likes = {'Pizza', 'Tofu', 'Poke'}
erika_likes = {'Poke', 'Pizza', 'Popcorn'}

print(sue_likes - erika_likes)
```

Will print only the items unique to the first set:

```shell
{'Tofu'}
```


## Frozensets

Frozensets are a special type of set that are immutable. Like tuples, their contents are frozen and cannot changed after creation. 

We can create frozensets with the `frozenset()` keyword:

```py
frozen_objects = frozenset(['ice cube', 'glacier', 'frozen_set'])
```

Set methods that modify the set such as `update()`, `remove()`, and `add()` cannot be used with frozensets since they are frozen in place!