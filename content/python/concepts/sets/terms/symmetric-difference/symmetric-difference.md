---
Title: '.symmetric_difference()'
Description: 'Returns elements that occur in either of the two sets but not in both.'
Subjects:
  - 'Code Foundations'
  - 'Discrete Math'
  - 'Data Visualization'
Tags:
  - 'Elements'
  - 'Methods'
  - 'Math'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.symmetric_difference()`** method is a set operation that returns a new set containing elements that are in either of the two sets but not in both.

## Syntax

```pseudo
set1.symmetric_difference(set2)
```

- `set1`: The set on which the method is applied.
- `set2`: The set to be compared to `set1`.

The `^` [operator](https://www.codecademy.com/resources/docs/python/operators) can also be used instead of the `.symmetric_difference()` method:

```pseudo
set1 ^ set2
```

## Example

Suppose John wants to get a cat. However, he only wants to make time to brush the cat or play with the cat. Therefore, the cat should either be short-haired or lazy.

In this case, the `.symmetric_difference()` method can be used to compare the cat breeds that come under each category and retrieve a list of the ones that only fall under either of these categories:

```py
shorthair_cat_breeds = {'bengal', 'british shorthair', 'chartreux', 'russian blue', 'siamese'}

lazy_cat_breeds = {'british shorthair', 'chartreux', 'persian', 'ragdoll', 'russian blue'}

unique_cat_breeds = shorthair_cat_breeds.symmetric_difference(lazy_cat_breeds)

print(unique_cat_breeds)
```

The above code produces the following output:

```shell
{'bengal', 'siamese', 'persian', 'ragdoll'}
```

## Codebyte Example

Suppose Jaya and Denise have a collection of teas in their apartment. Since both of them are now moving out, they want to take some teas with them. Here, the `.symmetric_difference()` method can be used to compare their teas and get a list of the ones that are only loved by either of them:

```codebyte/python
jaya_teas = {'earl grey', 'rooibos', 'peppermint', 'english breakfast'}
denise_teas = {'jasmine', 'chamomile', 'rooibos', 'peppermint'}

teas_to_go = jaya_teas.symmetric_difference(denise_teas)

print(teas_to_go)
```
