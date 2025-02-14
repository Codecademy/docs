---
Title: 'Hypothesis Testing'
Description: 'Hypothesis testing is a statistical method to determine if an observed effect is significant or due to chance, using p-values and test statistics.'
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

**Hypothesis testing** is a fundamental statistical method used in data science to make inferences about a population based on sample data. It helps in determining whether an observed effect is statistically significant or if it occurred by random chance.

## Key Concepts

### Null and Alternative Hypotheses

- **Null Hypothesis (H₀)**: A statement that assumes no effect or no difference exists. It represents the default assumption.
- **Alternative Hypothesis (H₁ or Ha)**: A statement that contradicts the null hypothesis, suggesting an effect or a difference exists.

### Significance Level (α)

- The probability threshold for rejecting the null hypothesis, commonly set at 0.05 (5%).

### P-Value

- A measure of the probability that the observed data would occur if the null hypothesis were true. A small p-value (≤ α) suggests strong evidence against H₀, leading to its rejection.

### Test Statistics

- A numerical value calculated from sample data used to determine whether to reject H₀.
- Common test statistics, calculated from hypothesis tests, include:
  - **Z-score**: Used when population variance is known.
  - **T-score**: Used when population variance is unknown and the sample size is small.
  - **Chi-square statistic**: Used for categorical data.
  - **F-statistic**: Used in variance analysis (ANOVA).

## Type I and Type II Errors

- **Type I Error (False Positive)**: Rejecting H₀ when it is actually true.
- **Type II Error (False Negative)**: Failing to reject H₀ when it is actually false.

## Steps in Hypothesis Testing

1. **State the Hypotheses**: The first step is to define the null hypothesis (H₀) and the alternative hypothesis (H₁) clearly.
2. **Choose the Significance Level (α)**: Determine the threshold probability (commonly 0.05) for rejecting the null hypothesis.
3. **Select the Appropriate Test**: Choose the statistical test that best suits the data and research question, such as a T-test, Chi-square test, or ANOVA.
4. **Compute the Test Statistic and P-value**: Perform the statistical test to calculate the test statistic and corresponding p-value.
5. **Compare P-value with α**: If the p-value is less than or equal to α, reject H₀, indicating significant evidence for H₁. Otherwise, fail to reject H₀, suggesting insufficient evidence against it.
6. **Draw a Conclusion**: Based on the results, interpret whether there is enough evidence to support the alternative hypothesis.

## Common Hypothesis Tests

1. **Z-Test**: Used when the sample size is large (n > 30) and population variance is known.
2. **T-Test**: Used when the sample size is small (n ≤ 30) and population variance is unknown. Common variants of T-test include:
   - **One-sample T-test**: Compares sample mean to a known population mean.
   - **Two-sample T-test**: Compares means of two independent groups.
   - **Paired T-test**: Compares means of two related groups.
3. **Chi-Square Test**: Used for categorical data to test the independence or goodness of fit.
4. **ANOVA (Analysis of Variance)**: Typically used when comparing three or more group means.
5. **Mann-Whitney U Test**: A non-parametric alternative to the T-test for comparing two independent groups.
