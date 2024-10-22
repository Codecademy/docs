---
Title: '.getrandbits()'
Description: 'Generates an integer with a specified number of random bits.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The Python random module generates an integer with a specified number of random bits using the **`.getrandbits()`** method. This method produces an integer value that is uniformly distributed across the range of possible values that can be represented with the specified number of bits.

## Syntax

```pseudo
random.getrandbits(k)
```

- `k`: The number of bits in the generated integer, which must be a non-negative integer. The result will range from 0 to 2<sup>k</sup> - 1.

## Example

In the example below, `.getrandbits()` returns an integer with 256 bits:

```py
import random

random_bits = random.getrandbits(256)

print(random_bits)
```

The above code generates the following output:

```shell
10657559295629545859200648092091505165182082957984693304497110910582120092295
```

> **Note:** The output will change every time the code is run because `.getrandbits()` generates a new random integer each time it's called.

## Codebyte Example

Run the following codebyte to understand how the `.getrandbits()` method works:

```codebyte/python
import random

get_random = random.getrandbits(8)
print(get_random)
```
