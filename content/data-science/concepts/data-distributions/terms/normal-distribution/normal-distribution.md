---
Title: 'Normal Distribution'
Description: 'A kind of continuous probability distribution characterized by a bell-shaped curve that is symmetric around its mean.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
  - 'Machine Learning'
Tags:
  - 'Data Science'
  - 'Deep Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **normal distribution**, otherwise known as the Gaussian distribution, is one of the most signifcant probability distributions used for continuous data. It is defined by two parameters:

- **Mean (μ)**: The central value of the distribution.
- **Standard Deviation (σ)**: Computes the amount of variation or dispersion in the data.

Mathematically, the probability density function (PDF) used for the normal distribution is:

![Normal distribution formula](https://raw.githubusercontent.com/Codecademy/docs/main/media/normal-distribution-formula.png)

Where:

- `x` is the random variable
- `μ` is the mean
- `σ` is the standard deviation
- `e` is Euler's number (approximately 2.71828)
- `π` is Pi (approximately 3.14159)

### Key Properties

1. **Bell-shaped and Symmetric**: The distribution is perfectly symmetrical around its mean.
2. **Mean, Median, and Mode are Equal**: All three measures of central tendency have the same value.
3. **Empirical Rule (68-95-99.7 Rule)**:
   - Approximately 68% of the given data falls within 1 standard deviation of the mean
   - Approximately 95% falls within 2 standard deviations
   - Approximately 99.7% falls within 3 standard deviations
4. **Standardized Form**: Any normal distribution can be converted to a standard normal distribution (`μ=0`, `σ=1`) using the formula `z = (x-μ)/σ`.

### Applications

The normal distribution is broadly used in various fields:

- **Finance**: Modeling stock returns
- **Natural Sciences**: Measurement errors
- **Social Sciences**: IQ scores, heights, and other human characteristics
- **Machine Learning**: Assumptions in many algorithms
- **Quality Control**: Manufacturing processes

## Example

The following code creates a sample of 1,000 normally distributed data points with a mean of `70` and a standard deviation of `10`, and displays this data in a 2×2 grid of plots for analysis:

```py
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats
import seaborn as sns

# Set seed for reproducibility
np.random.seed(42)

# Generate random data from a normal distribution
# Parameters: mean=70, standard deviation=10, size=1000
data = np.random.normal(70, 10, 1000)

# Create visualizations
plt.figure(figsize=(12, 8))

# Histogram with density curve
plt.subplot(2, 2, 1)
sns.histplot(data, kde=True, stat="density")
plt.title('Histogram with Density Curve')
plt.xlabel('Value')
plt.ylabel('Density')

# Q-Q plot to check normality
plt.subplot(2, 2, 2)
stats.probplot(data, plot=plt)
plt.title('Q-Q Plot')

# Box plot
plt.subplot(2, 2, 3)
sns.boxplot(x=data)
plt.title('Box Plot')
plt.xlabel('Value')

# Verify the empirical rule
plt.subplot(2, 2, 4)
mean = np.mean(data)
std = np.std(data)
within_1_std = np.sum((mean - std <= data) & (data <= mean + std)) / len(data) * 100
within_2_std = np.sum((mean - 2*std <= data) & (data <= mean + 2*std)) / len(data) * 100
within_3_std = np.sum((mean - 3*std <= data) & (data <= mean + 3*std)) / len(data) * 100

bars = plt.bar(['1σ', '2σ', '3σ'], [within_1_std, within_2_std, within_3_std])
plt.axhline(y=68, color='r', linestyle='-', label='68% (theoretical)')
plt.axhline(y=95, color='g', linestyle='-', label='95% (theoretical)')
plt.axhline(y=99.7, color='b', linestyle='-', label='99.7% (theoretical)')
plt.title('Empirical Rule Verification')
plt.xlabel('Standard Deviation Range')
plt.ylabel('Percentage of Data (%)')
plt.legend()

plt.tight_layout()
plt.show()

# Statistical summary
print("Statistical Summary:")
print(f"Mean: {np.mean(data):.2f}")
print(f"Median: {np.median(data):.2f}")
print(f"Standard Deviation: {np.std(data):.2f}")
print(f"Skewness: {stats.skew(data):.4f}")
print(f"Kurtosis: {stats.kurtosis(data):.4f}")
print("\nEmpirical Rule Verification:")
print(f"Data within 1 standard deviation: {within_1_std:.2f}% (theoretical: 68%)")
print(f"Data within 2 standard deviations: {within_2_std:.2f}% (theoretical: 95%)")
print(f"Data within 3 standard deviations: {within_3_std:.2f}% (theoretical: 99.7%)")
```

The output of the above code will be:

```shell
Statistical Summary:
Mean: 70.19
Median: 70.25
Standard Deviation: 9.79
Skewness: 0.1168
Kurtosis: 0.0662

Empirical Rule Verification:
Data within 1 standard deviation: 68.60% (theoretical: 68%)
Data within 2 standard deviations: 95.60% (theoretical: 95%)
Data within 3 standard deviations: 99.70% (theoretical: 99.7%)
```

The histogram with density curve shows the bell-shaped curve characteristic of normal distributions:

![Bell-shaped curve](https://raw.githubusercontent.com/Codecademy/docs/main/media/normal-distribution-histogram.png)

Q-Q plot compares the data quantiles against theoretical normal distribution quantiles to check if the data follows a normal distribution (points following the diagonal line indicate normality):

![Q-Q plot](https://raw.githubusercontent.com/Codecademy/docs/main/media/normal-distribution-q-plot.png)

Box plot visualizes the central tendency and spread of the data:

![Box plot](https://raw.githubusercontent.com/Codecademy/docs/main/media/normal-distribution-box-plot.png)

Bar chart tests whether the data follows the 68-95-99.7 rule by calculating the percentage of data points that fall within 1, 2, and 3 standard deviations:

![Bar plot](https://raw.githubusercontent.com/Codecademy/docs/main/media/normal-distribution-empirical-rule.png)
