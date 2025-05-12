---
Title: '.gamma()'
Description: 'Draws samples from a gamma distribution'
Subjects:
  - 'computer science'
  - 'data visualization'
Tags:
  - 'numpy'
  - 'python'
  - 'random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **.gamma()** function of NumPy Random module generates random samples from the Gamma distribution, a three-parameter continuous probability distribution commonly used in statistics for modeling positive-valued data. 

## Syntax


```pseudo
numpy.random.gamma(shape, scale, size)
```

To compute the gamma function on complex numbers:

```pseudo
scipy.special.gamma(x)
```  


> [!Note]
> New code should use the `.gamma` method of a `Generator` instance instead.


### Parameters

*shape*: float or array_like of floats.  
The shape parameter, $\kappa$ of the distribution. Must be non-negative.

*scale*: float or array_like of floats, optional.  
The scale parameter $\theta$ of the distribution. Default is 1.0. Must be non-negative.

*size*: int or tuple of ints, optional.  
The output shape. If provided, the function returns samples in the specified shape. If `None` (default), a single sample is returned.

### Statistical Properties

Mean: $μ=αθμ=αθ$\
Variance: $σ2=αθ2σ2=αθ2$

The probability density for the Gamma distribution is:

$$
p(x) = x^{k-1} \frac{e^{-x/\theta}} {\theta^{k}\Gamma(k)'}
$$

Where $\kappa$ is the shape, $\theta$ is scale and $\Gamma$ is the Gamma function.  
The Gamma distribution is often used to model the times to failure of electronic components,  
and arises naturally in processes for which the waiting times between Poisson distributed events are relevant.

### Returns

out: *ndarray or scalar*\
Drawn samples from the parameterized Gamma distribution.

## Example
  

```python

```

Output:

```shell

```
