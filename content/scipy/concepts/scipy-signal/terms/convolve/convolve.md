---
Title: 'scipy.signal.convolve'
Description: 'Performs the convolution of two arrays.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Data'
  - 'Signal Processing'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`scipy.signal.convolve`** is a function in the `scipy.signal` module that computes the convolution of two arrays. Convolution is a mathematical operation widely used in signal processing, data analysis, and machine learning. It combines two sequences to produce a third sequence, which reflects how the shape of one sequence is modified by the other.

Convolution has various applications, including filtering signals, image processing, and neural networks.

## Syntax

```python
scipy.signal.convolve(in1, in2, mode='full', method='auto')
```

### Parameters

- `in1`: Input array (array-like). The first sequence to be convolved.
- `in2`: Input array (array-like). The second sequence to be convolved.
- `mode`: (optional) Determines the size of the output:
  - `'full'`: Full convolution (default).
  - `'valid'`: Only parts that are fully overlapped.
  - `'same'`: Output size matches the first input array.
- `method`: (optional) Specifies the method of convolution:
  - `'auto'` (default): Automatically chooses the fastest method.
  - `'direct'`: Uses the direct convolution method.
  - `'fft'`: Uses the Fast Fourier Transform for convolution.

### Returns

- `out`: Convolved array (ndarray). The result of the convolution.

## Example

Here's an example demonstrating the use of `scipy.signal.convolve`:

```python
import numpy as np
from scipy.signal import convolve

# Define the signal and the kernel
signal = [1, 2, 3]
kernel = [0.2, 0.5, 0.2]

# Full convolution
full_result = convolve(signal, kernel, mode='full')
print("Full mode result:  ", full_result)

# Same convolution
same_result = convolve(signal, kernel, mode='same')
print("Same mode result:  ", same_result)

# Valid convolution
valid_result = convolve(signal, kernel, mode='valid')
print("Valid mode result: ", valid_result)
```

### Output

```
Full mode result:   [0.2 0.9 1.8 1.9 0.6]
Same mode result:   [0.9 1.8 1.9]
Valid mode result:  [1.8]
```

In this example, the convolution computes a smoothed version of the signal, which can be useful in filtering or signal processing applications.

## Additional Resources

- **[SciPy Documentation: `scipy.signal.convolve`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.convolve.html)**
- **[SciPy Signal Processing Module](https://docs.scipy.org/doc/scipy/reference/signal.html)**: Learn more about the broad range of signal processing capabilities in SciPy.
