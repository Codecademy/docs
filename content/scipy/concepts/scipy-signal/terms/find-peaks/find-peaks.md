---
Title: 'find_peaks()'
Description: 'Finds the indices of local maxima (peaks) in a 1D signal array based on specified conditions.'
Subjects:
  - 'Machine Learning'
  - 'Data Visualization'
Tags:
  - 'Scikit-learn'
  - 'Machine Learning'
CatalogContent:
  - 'paths/intermediate-machine-learning-skill-path'
  - 'learn-python-3'
---

In SciPy, the **`find_peaks()`** function identifies the indices of local maxima (peaks) in a 1D signal array based on specified conditions.

## Syntax

```pseudo
find_peaks(signal);
```

The `signal` parameter is an array of numbers.

The default height of the peaks is defined by the height parameter. If the parameter is unspecified, the height is set to 0. The width parameter is used to filter out peaks that have a width less than the specified width. The rel_height parameter is used to filter out peaks that have a relative height less than the specified relative height. The threshold parameter is used to filter out peaks that have a value less than the specified threshold. The distance parameter is used to filter out peaks that have a distance between peaks less than the specified distance. The prominence parameter is used to filter out peaks that have a prominence less than the specified prominence. The wlen parameter is used to filter out peaks that have a width less than the specified width. The plateau_size parameter is used to filter out peaks that have a plateau size less than the specified plateau size.

## Example

The following example showcases the `find_peaks()` function:

```python
import numpy as np
from scipy.signal import find_peaks

# Create a signal with some peaks
signal = np.array([1, 2, 3, 4, 5, 4, 3, 2, 1])

# Find the peaks in the signal
peaks, _ = find_peaks(signal)

# Print the indices of the peaks
print(peaks)
```
```
[4]
``` 
The above code creates a signal with some peaks, finds the peaks in the signal, and prints the indices of the peaks.