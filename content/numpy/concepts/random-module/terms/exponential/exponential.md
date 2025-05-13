---
Title: '.exponential()'
Description: 'Draws from an exponential distribution'
Subject:
 - 'Computer Science'
 - 'Data Visualization'
Tags:
 - 'numpy'
 - 'random'
ContentCatalog:
 - 'learn-python-3'
 - 'paths/computer-science'
 - 'paths/data-science'
 - 'paths/data-science-foundations'
---

The **.exponential()** function of the `numpy.random` module, draws from an exponential distribution.

## Syntax

Basic syntax with parameters at the default value.

```psuedo
ran_num = numpy.random.exponential(scale=1, size=None)
print(ran_num)
```
`ran_num` will return one value.

> [!Note]
> New code should use the `.exponential()` method of a `Generator` instance instead.

### Parameters

`scale`: Determines the spread of the distribution. Default value is 0  
`size`: *Optional* Determines the size of returned array. Default value is `None`.

Its probability density function is:

$f(x; \frac{1}{\beta}) = \frac{1}{\beta} \exp(-\frac{x}{\beta}),$

$\beta$ is the scale parameter, which is the inverse of the rate parameter $\lambda = 1/\beta$.  
The rate parameter is an alternative, widely used parameterization of the exponential distribution.

## Example

The following code block will return 10 random numbers with a distribution scale of 0.75.  
Setting `.seed()` allows the code to be repeatable.

```python
import numpy as np
np.random.seed(23)
results = np.random.exponential(scale=0.75, size=10)
print(results)
```

Output:

```shell
[0.54626666 2.20256852 1.08759608 0.24887788 0.18735185 0.86930237 0.13716657 0.3737313  0.72185379 0.39818209]
```
