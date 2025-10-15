---
Title: '.reverse()'
Description: 'Reverses the elements of a collections.deque in-place.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deques'
  - 'Collections'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.reverse()` method of a Python `collections.deque` (https://www.codecademy.com/resources/docs/python/collections-module/deque) reverses the order of elements in the deque in-place. It does not accept any arguments and returns `None`.

## Syntax

```py
deque.reverse()
```
## Example

```python
from collections import deque

# Create a deque
d = deque([1, 2, 3, 4])
# Reverse the order of deque's elements
d.reverse()
print(d)  # Output: deque([4, 3, 2, 1])
```

## Codebyte Example

The example below reverses the deque in-place to flip the sentence, then shows the result as a string

```codebyte/python
from collections import deque

words = deque(["requests", "pull", "and", "calm", "keep"])
print("Original deque:", list(words))
print("Original sentence:", " ".join(words))
# Reverse the deque in-place to flip the sentence
words.reverse()

print("After .reverse():", list(words))
print("Reversed sentence:", " ".join(words))
```
