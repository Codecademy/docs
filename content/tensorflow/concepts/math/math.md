---
Title: 'Math'
Description: 'Mathematical computations on tensors using TensorFlow.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Arrays'
  - 'Deep Learning'
  - 'TensorFlow'
CatalogContent:
  - 'intro-to-tensorflow'
  - 'tensorflow-for-deep-learning'
---

In TensorFlow, **math operations** are fundamental for performing various mathematical computations on tensors. Tensors are multi-dimensional arrays that can be manipulated using various operations.

TensorFlow offers a rich set of mathematical operations under the `tf.math` module. These operations include arithmetic, trigonometric and exponential functions, and more.

Some of the key mathematical operations available in TensorFlow are listed below.

## Arithmetic Operations

TensorFlow provides a wide range of arithmetic operations that can be performed on tensors, including addition, subtraction, multiplication, division, and more. Here are some examples of arithmetic operations in TensorFlow:

```py
import tensorflow as tf

a = tf.constant([1, 2, 3])
b = tf.constant([4, 5, 6])

# Arithmetic operations

tf.math.add(a, b)  # Element-wise addition
tf.math.subtract(a, b)  # Element-wise subtraction
tf.math.multiply(a, b)  # Element-wise multiplication
tf.math.divide(a, b)  # Element-wise division
```

## Element-wise Operations

Element-wise operations are operations applied to each element of a tensor individually. These operations include computing each element's power, calculating each element's square root, and returning the absolute value of each component. Here are some examples of element-wise operations in TensorFlow:

```py
import tensorflow as tf

a = tf.constant([1, 2, 3], dtype=tf.float32)

# Element-wise operations

tf.math.pow(a, 2)  # Element-wise power
tf.math.sqrt(a)  # Element-wise square root
tf.math.abs(a)  # Element-wise absolute value
```

## Trigonometric Functions

TensorFlow supports trigonometric functions such as sine, cosine, tangent, and their inverses, which have domain constraints. These functions are useful for various mathematical computations. Here are some examples of trigonometric functions in TensorFlow:

```py
import tensorflow as tf

a = tf.constant([0.0, 1.0, 2.0])

# Trigonometric functions

tf.math.sin(a)  # Element-wise sine
tf.math.cos(a)  # Element-wise cosine
tf.math.tan(a)  # Element-wise tangent
tf.math.asin(a)  # Element-wise arcsine
tf.math.acos(a)  # Element-wise arccosine
tf.math.atan(a)  # Element-wise arctangent
```

## Exponential and Logarithmic Functions

TensorFlow offers functions to compute exponentials and logarithms of tensor elements, widely used in mathematical and scientific computations. Here are some examples of exponential and logarithmic functions in TensorFlow:

```py
import tensorflow as tf

a = tf.constant([1.0, 2.0, 3.0])

# Exponential and logarithmic functions

tf.math.exp(a)  # Element-wise exponential
tf.math.log(a)  # Element-wise natural logarithm
tf.math.log10(a)  # Element-wise base-10 logarithm
tf.math.log1p(a)  # Element-wise natural logarithm of (1 + x)
```

## Reduction Operations

Reduction operations compute a single result from multiple tensor elements. These operations include sum, mean, maximum, minimum, and more. Here are some examples of reduction operations in TensorFlow:

```py
import tensorflow as tf

a = tf.constant([[1, 2, 3], [4, 5, 6]])

# Reduction operations

tf.math.reduce_sum(a)  # Sum of all elements
tf.math.reduce_mean(a)  # Mean of all elements
tf.math.reduce_max(a)  # Maximum value
tf.math.reduce_min(a)  # Minimum value
```

## Comparison Operations

TensorFlow supports comparison operations that compare tensor elements and return boolean values based on the comparison results. Here are some examples of comparison operations in TensorFlow:

```py
import tensorflow as tf

a = tf.constant([1, 2, 3])
b = tf.constant([3, 2, 1])

# Comparison operations

tf.math.equal(a, b)  # Element-wise equality
tf.math.less(a, b)  # Element-wise less than
tf.math.greater(a, b)  # Element-wise greater than
tf.math.not_equal(a, b)  # Element-wise inequality
```

## Special Functions

TensorFlow offers a variety of special mathematical functions such as `Bessel` functions, `error` functions, and `gamma` functions. These functions are useful for advanced mathematical computations. Here are some examples of special functions in TensorFlow:

```py
import tensorflow as tf

a = tf.constant([1.0, 2.0, 3.0])

# Special functions

tf.math.erf(a)  # Element-wise error function
tf.math.lgamma(a)  # Element-wise natural logarithm of the absolute value of the gamma function of x
tf.math.bessel_i0(a)  # Element-wise modified Bessel function of the first kind of order 0
```

By leveraging these mathematical operations, a wide range of computations on tensors can be performed in TensorFlow, making it a powerful tool for scientific computing, machine learning, and deep learning applications.
