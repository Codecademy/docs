---
Title: .getrandbits()' 
Description: 'Returns a pseudo-random integer with a specified number of bits.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Functions'
  - 'Methods'
  - 'Random'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

In the Python `random` module, the `.getrandbits()` method is used to generate a pseudo-random integer with a specified number of bits

## Syntax

```pseudo
random.getrandbits(k)
```

Where `k` is the number of bits in the generated integer. The `k` must be a non-negative integer. The result will range from 0 —2<sup>k</sup> - 1.

## Example

In the example below, `.getrandbits()` returns an integer with 256 bits: 

```py 
import random 

random_bits = random.getrandbits(256)

```

## Codebyte Example (if applicable)

In the example below, the `.getrandbits()` method is used to generate a pseudo-random integer that takes up 8 bits in binary. 

```codebyte/python
import random 

get_random = random.getrandbits(8)
print(get_random)


```
