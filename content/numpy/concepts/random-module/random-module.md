---
Title: 'Random Module'
Description: 'Provides a set of functions for producing random numbers, sampling, and performing statistical simulations.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`random`** module is used for generating random numbers, sampling, and performing statistical simulations. It provides a suite of functions to generate random values, including integers, floating-point numbers, and samples from various probability distributions.

Unlike Python's built-in `random` module, NumPy's `random` module is optimized for performance and can generate random numbers more efficiently, especially for large arrays.

Some of the common functions that the `random` module in NumPy provides include:

- `.rand()`
- `.randint()`
- `.choice()`
- `.normal()`
- `.uniform()`
- `.binomial()`

## Applications

The `random` module in NumPy is widely used in various fields, including:

- **Machine Learning and AI**: Initializing weights in neural networks, data augmentation, and Monte Carlo simulations.
- **Statistical Simulations**: Running probability-based simulations for hypothesis testing.
- **Game Development**: Generating random movements or events in games.
- **Data Science and Analysis**: Random sampling, bootstrapping, and resampling datasets.
- **Cryptography and Security**: Generating random keys, tokens, and nonces.

## Syntax

The general syntax for the functions under the `random` module in NumPy is following:

```pseudo
np.random.func(params)
```

- `func`: The specific function from the NumPy random module (e.g., `.rand()`, `.randint()`, `.choice()`).
- `params`: The parameters to be used in the function.

## Example

The following example demonstrates the usage of some common functions under the `random` module in NumPy:

```py
import numpy as np

# Generate a random float in the range 0-1
random_float = np.random.rand()
print("Random Float:", random_float)

# Generate a random integer between 10 and 50
random_int = np.random.randint(10, 50)
print("Random Integer:", random_int)

# Select 3 random elements from a list
sample_list = [10, 20, 30, 40, 50]
random_sample = np.random.choice(sample_list, 3)
print("Random Sample:", random_sample)

# Generate 3 random numbers from a normal distribution with mean '0' and standard deviation '1'
random_normal = np.random.normal(0, 1, 3)
print("Random Normal Distribution:", random_normal)

# Generate 3 random numbers from a uniform distribution between 5 and 15
random_uniform = np.random.uniform(5, 15, 3)
print("Random Uniform Distribution:", random_uniform)

# Generate 5 binomially distributed numbers with 10 trials and 0.5 probability
random_binomial = np.random.binomial(10, 0.5, 5)
print("Random Binomial Distribution:", random_binomial)
```

The above code produces the following output:

```shell
Random Float: 0.002883955111148917
Random Integer: 13
Random Sample: [30 40 30]
Random Normal Distribution: [ 1.42832105  0.54950071 -0.46675773]
Random Uniform Distribution: [ 7.15527759  9.39970904 10.51563253]
Random Binomial Distribution: [4 4 5 4 5]
```

> **Note:** The output values will change each time the code is executed because the functions generate random numbers, meaning the results are not fixed and will vary on each run.
