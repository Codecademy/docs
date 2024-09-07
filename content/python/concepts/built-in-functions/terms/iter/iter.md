---
Title: 'iter()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'create an iterator object.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'computer science'
  - 'data science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Iterators'

CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'paths/computer-science'
---

<!-- [A brief definition - make sure first mention of term is in **bold**.] -->
**iter()** function is a built-in function in python that returns an [iterator](https://www.codecademy.com/resources/docs/python/iterators)

## Syntax


```pseudo
iter(object)
iter(object, sentinel)
```
- `object` parameter supplies the object on which the iter() method will return the iterator. The type of this parameter depends on the presence of the optional second `sentinel` parameter. In the case where the sentinel parameter is not given, the object parameter type must be one that supports iteration or a sequence. These types include: list, str, and tuple. You may also pass in objects that you've defined with either **\_\_iter\_\_()** or **\_\_getitem\_\_()** methods. When the sentinel parameter is present, the object parameter must be callable.

- `sentinel` is the parameter that stores the value which represents the end of the sequence. When the callable object returns this value, the iterator will terminate. 

## Example

```py
from functools import partial
import random

## example one iter() with no sentinel parameter
fruits = ['apples', 'bananas', 'oranges']

my_iterator = iter(fruits)
print(my_iterator)

## example two iter() with a sentinel parameter
func_iterator = iter(partial(random.randint, 1, 10), 7)
print(func_iterator)
```

```shell
<list_iterator object at 0x000001CCFDCAA470>
<callable_iterator object at 0x000001CCFDE37910>
```

## Codebyte Example (if applicable)

```codebyte/python
import randint from random


technologies = ['next.js', 'react', 'node.js', 'postgreSql', 'firebase', 'tailwindcss']

def callback_fn():
  return randint(1,10)

tech_iterator = iter(technologies)

call_iterator = iter(callback_fn, 7)

for tech in tech_iterator:
  print(tech)

for val in call_iterator:
  print(val)
```
