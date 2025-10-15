---
Title: 'pop' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Removes and returns element from the right end of the queue' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
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

**deque.pop()** Removes and returns an element from the right end of the deque.
If the deque is empty, calling ```pop()``` raises an ```IndexError```
The ```pop()``` method works in O(1) time complexity - removing an element from either end of a deque is constant time.


## Syntax

```pseudo
deque.pop()
```

**Parameters**

This method does not take any parameters

**Return Value**

Returns the element that was removed from the right end of the deque

**Exceptions**

- ```IndexError``` - Raised if the deque is empty when ```pop()``` is called

## Example

This example demonstrates basic deque operation ```pop()```

```py
from collections import deque

# Create a deque
dq = deque([10, 20, 30, 40])

# Remove and return the rightmost element
item = dq.pop()
print("Removed element:", item)
print("Deque after pop:", dq)
```

This example results in the following output

```shell
Removed element: 40
Deque after pop: deque([10, 20, 30])
```


## Codebyte Example: Popping the 2 rightmost element from deque

This examples demonstrates the working of ```pop()```

```codebyte/python
from collections import deque

# Create a deque with some numbers
numbers = deque([1, 2, 3, 4, 5])

print("Initial deque:", numbers)

# Remove elements one by one from the right
last_item = numbers.pop()
print("Popped element:", last_item)
print("Deque after first pop:", numbers)

# Pop again
another_item = numbers.pop()
print("Popped another element:", another_item)
print("Final deque:" numbers)
```


