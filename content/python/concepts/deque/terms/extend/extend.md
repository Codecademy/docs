---
Title: 'extend' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Adds multiple elements to the right end of a deque from any iterable(like a list, tuple, or another deque)' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Data Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Algorithms'
  - 'Collections'
  - 'Data Structures'
  - 'Deques'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **extend()** method adds multiple elements to the right end of a deque from any iterable(like a list, tuple, or another deque)
Thi method modifies the deque in place and does not return anything


## Syntax

```pseudo
deque.extend(iterable)
```

**Parameters:**

- ```iterable```: A sequence or iterable whose elements will be added to the right end of the deque.

**Return Value**

This method does not return any value - it modifies the deque directly.

## Example

This example demonstrates basic deque operation ```extend()```

```py
from collections import deque

# Create a deque
dq = deque([1, 2, 3])

# Extend it 
dq.extend([4, 5, 6])
print("Extending with list: ", dq)

#Extend it using another deque
dq.extend(deque([7, 8, 9]))
print("Extending with another deque: ", dq)
```

This example results in the following output

```shell
Extending with list: deque([1, 2, 3, 4, 5, 6])
Extending with another deque: deque([1, 2, 3, 4, 5, 6, 7, 8, 9])
```

## Codebyte Example: Extending a deque with a list and a tuple

This examples demonstrates the working of ```extend()```

```codebyte/python
from collections import deque

# Create a deque with some initial elements
fruits = deque(["apple","banana"])

print("Initital deque:", fruits)

# Add multiple elements to the right using extend()
fruits.extend(["cherry", "date", "elderberry"])

# Extend again using a tuple
fruits.extend(("fig", "grape"))
print("Deque after extending with a tuple:", fruits)
```

