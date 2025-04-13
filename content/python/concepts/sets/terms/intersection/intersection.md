---
Title: '.intersection()'
Description: 'Returns a new set with objects that exist inside two or more sets.'
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

The **`.intersection()`** method returns a new set with objects that exist inside two or more sets. It's a fundamental set operation that mirrors the mathematical concept of intersection. This method is widely used in data analysis, filtering datasets, and identifying shared elements between [collections](https://www.codecademy.com/resources/docs/python/collections-module). Its ability to operate on multiple sets at once makes it a concise and efficient tool for comparing groups of data.

## Syntax

```pseudo
set.intersection(set1, set2, ..., setN)
```

Alternatively:

```pseudo
set & set1 & set2 ... & setN
```

**Parameters:**

- `set`: The input set in which to search for common values.
- `set1, set2, ..., setN`: The other sets in which to search for common values.

**Return Value:**

The `.intersection()` method returns a new set with values that exist inside the given sets.

## Example 1: Using `.intersection()` with Two Sets

In the following example, a set of `mutual_friends` is created with the `.intersection()` method using two sets of friend groups:

```py
# Create two sets of friend groups
friend_group_1 = {'Juan', 'Mary', 'David', 'Yukiko', 'Alice'}
friend_group_2 = {'Yukiko', 'Peter', 'Juan', 'Alice'}

# Find the mutual friends in these sets
mutual_friends = friend_group_1.intersection(friend_group_2)

# Print the result
print(mutual_friends)
```

The above code produces the following output:

```shell
{'Juan', 'Yukiko', 'Alice'}
```

## Example 2: Using `.intersection()` with Three or More Sets

In the following example, the `.intersection()` method finds the intersection of three sets:

```py
# Create three sets
set = {1, 2, 3, 4}
set1 = {2, 3, 5}
set2 = {0, 2, 3, 7}

# Find the intersection of these sets
res = set.intersection(set1, set2)

# Print the result
print(res)
```

The above code produces the following output:

```shell
{2, 3}
```

## Codebyte Example: Using `.intersection()` with Non-Set Iterables

In the following codebyte example, the `.intersection()` method converts all the non-set [iterables](https://www.codecademy.com/resources/docs/python/iterators) to sets and then finds the intersection of all the sets:

```codebyte/python
# Create a set
set = {1, 2, 3}

# Create two iterables
iter1 = [2, 3, 4]
iter2 = (3, 4, 5)

# Find the intersection of the set and these iterables
res = set.intersection(iter1, iter2)

# Print the result
print(res)
```

## Frequently Asked Questions

<details>
  <summary>Can I chain multiple .intersection() calls?</summary>
  <p>Yes, you can chain .intersection() calls to find the intersection of multiple sets or iterables. Each call returns a new set with the intersected result.</p>
</details>

<details>
  <summary>Does .intersection() modify the original set?</summary>
  <p>No, .intersection() returns a new set and does not change the original set. Use .intersection_update() to modify the original.</p>
</details>

<details>
  <summary>What happens if I use .intersection() with no arguments?</summary>
  <p>If used with no arguments, .intersection() returns a shallow copy of the original set, which is a new set containing the same elements as the original.</p>
</details>
