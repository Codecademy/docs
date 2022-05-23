---
Title: '.intersection()'
Description: 'Returns a new set with objects that exist inside two or more sets'
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

The `.intersection()` method returns a new set with objects that exist inside two or more [sets](https://www.codecademy.com/resources/docs/python/sets).

## Syntax

The following syntaxes can be used:

```pseudo
set.intersection(set1, set2, ..., setN)

setA & setB & setC
```

- The `.intersection()` method can be called directly against `set` with multiple sets passed as arguments.
- Optionally, the `&` [operator](https://www.codecademy.com/resources/docs/python/operators) can be used between sets `setA`, `setB`, and `setC` where it will return the same result as the `.intersection()` method.

## Example

In the following example, a set of `mutual_friends` is created with the `.intersection()` method using two sets of friend groups:

```py
friend_group_1 = {'Juan', 'Mary', 'David', 'Yukiko', 'Alice'}
friend_group_2 = {'Yukiko', 'Peter', 'Juan', 'Alice'}

mutual_friends = friend_group_1.intersection(friend_group_2)

print(mutual_friends)
```

The output would be:

```shell
{'Juan', 'Yukiko', 'Alice'}
```

## Codebyte Example

In the example, a set of trips for the next year is created with the `.intersection()` method:

```codebyte/python
flight_A = set(["San Francisco", "Atlanta", "New York", "London", "Naples", "Seoul", "Tokyo"])
flight_B = set(["New York", "London", "Paris", "Sydney", "Mumbai", "Tokyo", "Seattle"])

mutual_stops = flight_A.intersection(flight_B)

print(mutual_stops)
```
