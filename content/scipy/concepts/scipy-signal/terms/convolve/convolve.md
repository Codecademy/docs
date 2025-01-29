---
Title: '.convolve()'
Description: 'Calculates the convolution of two input arrays.'
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

The **`.convolve`** function from the `scipy.signal` module is used to compute the convolution of two input arrays. Convolution is a mathematical process that combines two sequences to produce a third sequence, representing the way one sequence is modified by the other. It is frequently used in signal processing, data analysis, and machine learning tasks, such as filtering signals or image processing.

This technique has a wide array of uses, including in the context of neural networks and signal filtering.

## Syntax

```pseudo
scipy.signal.convolve(in1, in2, mode='full', method='auto')
```

### Parameters

- `in1`: The first input array (array-like). It is the sequence to be convolved
- `in2`: The second input array (array-like). It is the other sequence to be convolved.
- `mode` (Optional): Defines the size of the output:
  - `'full'`: Returns the full convolution (default).
  - `'valid'`: Outputs only the parts that are fully overlapped.
  - `'same'`: The output size is the same as the first input array.
- `method` (Optional): Specifies the convolution method:
  - `'auto'` (default): Chooses the optimal method automatically.
  - `'direct'`: Uses the direct method of convolution.
  - `'fft'`: Uses Fast Fourier Transform for the convolution.

This function returns the result of the convolution as an ndarray, which is the convolved output array.

## Example

Here's an example demonstrating the use of `.convolve()`:

```py
import numpy as np
from scipy.signal import convolve

# Define the signal and the kernel
signal = [1, 2, 3, 4]
kernel = [0.5, 1.0, 0.5]

# Perform convolution with 'full' mode
full_result = convolve(signal, kernel, mode='full')
print("Full mode result:", full_result)

# Perform convolution with 'same' mode
same_result = convolve(signal, kernel, mode='same')
print("Same mode result:", same_result)

# Perform convolution with 'valid' mode
valid_result = convolve(signal, kernel, mode='valid')
print("Valid mode result:", valid_result)
```

The code above generates this output:

```shell
Full mode result: [0.5 2.  4.  6.  5.5 2. ]
Same mode result: [2.  4.  6.  5.5]
Valid mode result: [4. 6.]
```

In this example, convolution is used to apply a smoothing kernel to the input signal, which can be useful for filtering noise or processing time-series data.
