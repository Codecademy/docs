---
Title: '.poisson()' 
Description: 'Draw random samples from a Poisson distribution' 
Subjects: 
  - 'Data Science'
  - 'Data Visualization'
Tags: 
  - 'Data Distributions'
  - 'Probability'
  - 'NumPy'
  - 'Random'
CatalogContent: 
  - 'learn-python-3'
  - 'learn/intro-statistics-numpy'
  - 'paths/analyze-data-with-python'
---

The `random` module for NumPy has a variety of functions to model statistical distributions including the **`.poisson()`** method which randomly draws samples from a Poisson distribution. The Poisson distribution illustrates the probability of `k` events happening over a fixed interval of time given the events occur with a known constant mean rate $`\lambda`$ and independently of time since last event occured. 

**The Poisson distribution**:

$$f\left(k;\lambda\right) eq \frac{\lambda^k e^{-\lambda}}{k!}$$

## Syntax

```pseudo
numpy.random.poisson(lam=1.0, size=None)
```

**Parameters**
- `lam` *float, or array_like of floats*: The expected number of events occuring over a fixed-time period. Must be non-negative.
- `size` *int, or tuple of ints, (optional)*: Output shape. For example, the tuple `(3, 4)` will output a ndarray with shipe 3 x 4.  If `size=None`, the default argument, then a single sample is drawn if `lam` is scalar, otherwise `np.array(lam).size` samples are drawn.

**Returns**
- `Out` *ndarray or scalar*: Drawn samples from Poisson distribution given parameter inputs.

## Examples of Generating Random Values From a Poisson Distribution

**Example 1**: Drawing a scalar of random samples from a Poisson distribution with `lam` input of 5

```py
import numpy as np

# Generate 10 random samples from a Poisson distribution given a lambda input of 5
result = np.random.poisson(5, 10)
# Print results to view random sampling
print(results)
```

This code will output something similar to this:

```shell
[ 7 10  5  4  7  5  4  4  2 13]
```

**Example 2**: Drawing a tuple of random samples from a Poisson distribution with `lam` input of 5

```py
import numpy as np

# Generate 3 sets of 4 random samples
results = np.random.poisson(5, (3, 4))

print(results)
```

This code will produce an output similar to this:

```shell
[[4 4 4 7]
 [1 8 3 4]
 [3 4 8 5]]
 ```

> [!NOTE]
> The method produces random results so outcomes will vary.


## Codebyte Example 

Below is a codebyte example with the same parameter inputs as Example 1 that allows for experimenting with different parameters.

```codebyte/python
import numpy as np

# Set lambda value
lambda = 5

# Set sample size value
size = 10

# Generate samples and save to a variable
results = np.random.poisson(lambda, size)

# Print results for viewing
print(results)
```
