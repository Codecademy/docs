---
Title: '.symmetric_difference()'
Description: 'Returns elements which occur in only one set and are not shared by two sets.'
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Discrete Math'
  - 'Data Visualization'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'methods'
  - 'sets'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-2'
  - 'learn-python-3'
  - 'paths/finance-python'
---

The **.symmetric_difference()** method is a mathematical method from the branch of set theory. From two sets it returns a set of the values which occur in one and only one set. This method can be used on finite sets.

## Syntax

Start with two sets.

```
set 1 = {4, 5, 6, 7}

set 2 = {2, 6, 7, 8}
```

Return the method to a variable and print it. The method takes only one argument.

```
sd = set2.symmetric_difference(set1)
print(sd)
```

The output shows the integers that occur in either set 1 or set 2 but not in both sets.

```
{2, 4, 5, 8}
```

Alternatively, use the operator `^` instead of `.symmetric_difference()`

### Shorthand Syntax

```
sd= set 1 ^ set 2
```

## Example

To use a real-world example, imagine that someone wants to get a cat. They want to make time to brush the cat or play with the cat, but not both. 

Therefore the cat should either be shorthair or lazy. They have the following lists of cat breeds.
```
shorthair_cat_breeds = {'bengal', 'british shorthair', 'chartreux', 'russian blue', 'siamese'}

lazy_cat_breeds = {'british shorthair', 'chartreux', 'persian', 'ragdoll', 'russian blue'}
```

Using the symmetric difference method, the prospective cat owner can consider the following breeds.

```
{'bengal', 'siamese', 'persian', 'ragdoll'}
```

## Codebyte Example

Try it yourself!

Jaya and Denise have a collection of teas at their apartment. They are both moving out and would like to take some teas with them. They can only take the teas that the other person doesn't like.

```codebyte/python
jaya_teas = {'earl grey', 'rooibos', 'peppermint', 'english breakfast'}
denise_teas = {'jasmine', 'chamomile', 'rooibos', 'peppermint'}

teas_to_go = jaya_teas ^ denise_teas

print(teas_to_go)
```
