---
Title: '.find_peaks()'
Description: 'Finds the indices of local maxima (peaks) in a 1D signal array based on specified conditions.'
Subjects:
  - 'Machine Learning'
  - 'Data Visualization'
Tags:
  - 'Scikit-learn'
  - 'Machine Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In SciPy, the **`.find_peaks()`** function identifies the indices of local maxima (peaks) in a 1D signal array based on specified conditions.

## Syntax

```pseudo
scipy.signal.find_peaks(x, height=None, threshold=None, distance=None, prominence=None, width=None, wlen=None, rel_height=0.5, plateau_size=None)
```

- `x`: The input data in which to search for peaks.
- `height` (Optional): Specifies the required height of peaks.
- `threshold` (Optional): The vertical distance to the neighboring samples.
- `distance` (Optional): Minimum horizontal distance (in samples) between neighboring peaks.
- `prominence` (Optional): Minimum prominence of peaks.
- `width` (Optional): Required width of peaks in samples.
- `wlen` (Optional): Used for calculating the prominence of peaks; specifies the size of the window.
- `rel_height` (Otional): Used for measuring the width at relative height.
- `plateau_size` (Optional): Specifies the size of flat peaks (plateaus).

## Example

The following example showcases the `.find_peaks()` function:

```py
import numpy as np
from scipy.signal import find_peaks

# Create a signal with some peaks
signal = np.array([1, 2, 3, 4, 5, 4, 3, 2, 1])

# Find the peaks in the signal
peaks, _ = find_peaks(signal)

# Print the indices of the peaks
print(peaks)
```

The code above generates the following output:

```shell
[4]
```
