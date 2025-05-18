---
Title: '.exponential()'
Description: 'Generates random samples from an exponential distribution using a specified scale.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Numpy'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.exponential()`** function in NumPy random module generates random numbers from an exponential distribution, where the `scale` parameter (1/λ) controls the spread, and the `size` defines the shape of the output array.

## Syntax

```pseudo
numpy.random.exponential(scale=1.0, size=None)
```

**Parameters:**

- `scale` (float, optional): The scale parameter (β = 1/λ) is also the distribution's mean. Must be > 0. The default is `1.0`.
- `size` (int or tuple of ints, optional): Output shape. If `None` (default), returns a single value. If an integer or tuple, returns an array of that shape.

**Return value:**

It returns random samples from the exponential distribution.

Its probability density function is:

```
$f(x; \frac{1}{\beta}) = \frac{1}{\beta} \exp(-\frac{x}{\beta}),$
```

Here, $\beta$ is the scale parameter (also the mean), and $\lambda = 1/\beta$ is the rate. This is a standard parameterization of the exponential distribution.

## Example

The following code returns 10 random samples from an exponential distribution with a scale of `0.75`. Setting the seed ensures reproducible results:

```py
import numpy as np
np.random.seed(23)
results = np.random.exponential(scale=0.75, size=10)
print(results)
```

The output of this code will be:

```shell
[0.54626666 2.20256852 1.08759608 0.24887788 0.18735185 0.86930237 0.13716657 0.3737313  0.72185379 0.39818209]
```

## Codebyte Example

In this example, the waiting times between 100 calls to a help desk are simulated, where calls arrive randomly but on average every 5 minutes:

```codebyte/python
import numpy as np

# Set seed for reproducibility
np.random.seed(42)

# Simulate 100 waiting times with an average of 5 minutes between calls
waiting_times = np.random.exponential(scale=5.0, size=100)

# Print the first 10 simulated waiting times
print(waiting_times[:10])
```

Here:

- `scale=5.0` means the average time between calls is 5 minutes.
- `size=100` generates 100 waiting time values.
- `np.random.exponential(...)` creates the random samples from an exponential distribution.
- Only the first 10 values are printed for brevity.

This example demonstrates how exponential distribution can be used to model real-world scenarios like time intervals between incoming events.
