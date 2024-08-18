---
Title: .getrandbits()' 
Description: 'Returns an integer with a specified number random of bits.' 
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

In the Python `random` module, the `.getrandbits()` method is used to create a pseudo-random integer with a specified number of random bits.  

## Syntax

```pseudo
random.getrandbits(value)
```

Where `value` is the size of the number in bits. The `value` must be a non-negative number.

## Example

In the example below, `.getrandbits()` returns a number with 256 bits: 

```py 
import random 

random_bits = random.getrandbits(256)

```

## Codebyte Example (if applicable)

In the example below, the `.getrandbits()` method is used to generate a psuedo-random integer that takes up 8 bits in binary. 

```codebyte/python
import random 

get_random = random.getrandbits(8)
print(get_random)


```
