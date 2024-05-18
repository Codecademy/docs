---
Title: '.difference_update()'
Description: 'Modifys a given set of objects to be unique when compared to other set or sets.'
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

The `.difference_unique()` method modifys a given set of objects to be unique when compared to another set or sets; it returns NONE.

## Syntax

The following syntaxes can be used:

```pseudo
set.difference_update(set1, set2, ..., setN)

setA -= setB - setC
```

- The `.difference_update()` method can be called directly against `set` with multiple sets passed as arguments.
- Optionally, the `-=` [operator](https://www.codecademy.com/resources/docs/python/operators) can be used between sets `setA`, `setB`, and `setC` where it will produce the same result as the `.difference_update()` method.

## Example

The following example uses the `-=` operator to create a new set of activities unique to `summercamp_activities` when compared with the sets `school_activities` and `afterschool_activities`:

```py
summercamp_activities = {'fishing', 'bouldering', 'tennis', 'swimming', 'chess'}
school_activities = {'swimming', 'football', 'art', 'chess', 'choir'}
afterschool_activities = {'badminton', 'tennis', 'rugby', 'football', 'yoga'}

summercamp_activities -= school_activities, afterschool_activities
print(summercamp_activities)
```

This modifies the origina set of summercamp_activities so will print just the items unique to the first set:

```shell
{'fishing', 'bouldering'}
```

## Codebyte Example

In the example, all afterschool activities are cancelled, but the teachers have tried to incorporate them into school and summercamp so let's find which activities are unique to summercamp now, using the `.difference_update()` method:

```codebyte/python
summercamp_activities = set(['fishing', 'bouldering', 'tennis', 'swimming', 'chess', 'yoga'])
school_activities = set(['swimming', 'football', 'badminton', 'art', 'chess', 'choir'])


summercamp_activities.difference_update(school_activities)

print(summercamp_activities)
```