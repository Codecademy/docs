---
Title: 'Chi-Square Distribution'
Description: 'The chi-square distribution is a continuous probability distribution used primarily in hypothesis testing and confidence interval estimation.'
Subjects:
  - 'Data Science'
  - 'AI'
Tags:
  - 'Data Distributions'
  - 'Chi-Square'
  - 'Statistics'
CatalogContent:
  - 'learn-data-science'
  - 'paths/data-science'
---

The **chi-square distribution** is derived from the sum of squared standard normal variables. It plays a crucial role in statistical tests, such as the chi-square test for independence and goodness of fit. The shape of the distribution varies with its degrees of freedom; for lower degrees of freedom, it is skewed, while higher degrees of freedom result in a more symmetric shape.

## Example

The example below demonstrates how to generate random samples from a chi-square distribution and visualize them with a [histogram](https://www.codecademy.com/learn/statistics-histograms). In this demonstration, [SciPy](https://www.codecademy.com/resources/docs/scipy) is used to generate the samples and [Matplotlib](https://www.codecademy.com/resources/docs/matplotlib) is used for plotting:

```py
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import chi2

# Set the degrees of freedom
df = 4

# Generate 1,000 random samples from the chi-square distribution
data = chi2.rvs(df, size=1000)

# Plot the histogram
plt.hist(data, bins=30, density=True, alpha=0.6, color='skyblue', edgecolor='black')
plt.title(f"Chi-Square Distribution (df={df})")
plt.xlabel("Value")
plt.ylabel("Density")
plt.show()
```

The above code generates a histogram illustrating the chi-square distribution:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/chi-square-distribution.png)
