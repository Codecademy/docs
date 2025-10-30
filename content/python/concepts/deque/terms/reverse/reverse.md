---
Title: '.reverse()'
Description: 'Reverses the elements of a deque in-place.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Deques'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.reverse()`** method of a Python [`collections.deque`](https://www.codecademy.com/resources/docs/python/collections-module/deque) reverses the order of elements in the deque in-place.

## Syntax

```pseudo
deque.reverse()
```

**Parameters:**

The `.reverse()` method doesn't take any parameters.

**Return value:**

The deque is modified in-place.

## Example

In this example, the elements of a deque are reversed in-place, changing the order of items:

```py
from collections import deque

# Create a deque
d = deque([1, 2, 3, 4])

# Reverse the order of deque's elements
d.reverse()
print(d)
```

The output of this code is:

```shell
deque([4, 3, 2, 1])
```

## Codebyte Example

The following example reverses the deque in-place to flip the order of words in a sentence:

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
