---
Title: '.partition()'
Description: 'Searches a string for a given keyword and splits that string into a three part tuple.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
  - 'Tuples'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

Searches a string for a given keyword and splits that string into a three part tuple.

## Syntax

```python
string.partition("keyword")
```

## Example

The `.partition()` method searches for an exact match of the given keyword:

```python
my_string = "Do not go gentle into that good night"

my_tuple = my_string.partition("gentle")

print(my_tuple)
# Output: ('Do not go ', 'gentle', ' into that good night')
```

## No Match Found

If no match is found, `.partition()` will return a tuple with the full string, followed by two empty strings

```codebyte/py
my_string = "Old age should burn and rave at close of day"

my_tuple = my_string.partition("gentle")
print(my_tuple)
```

## Multiple Matches

If there are multiple matches, the first one will be used:

```codebyte/py
my_string = "rage, rage against the dying of the light"

my_tuple = my_string.partition("rage")
print(my_tuple)
```
