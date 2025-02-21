---
Title: 'T-table'
Description: 'A statistical tool used in hypothesis testing to determine critical values for t-distributions and assess the significance of test results.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Database'
  - 'Queries'
CatalogContent:
  - 'r-for-programmers'
  - 'paths/data-science'
---

The **t-table**, also known as the Student's t-distribution table, is a critical reference tool in statistical analysis. It helps researchers determine whether to reject or fail to reject their null hypothesis, particularly in cases where sample sizes are small or the population standard deviation is unknown. The table provides critical values based on degrees of freedom (df) and significance levels (α), making it essential for statistical inference.

The t-distribution is bell-shaped like the normal distribution but has heavier tails, which account for variability in smaller samples. As df increases, the t-distribution gradually approaches the normal distribution.

## One-Tailed T-Test Critical Values

| Degrees of Freedom (df) | α = 0.10 | α = 0.05 | α = 0.025 | α = 0.01 | α = 0.005 |
| ----------------------- | -------- | -------- | --------- | -------- | --------- |
| 1                       | 3.078    | 6.314    | 12.706    | 31.821   | 63.657    |
| 2                       | 1.886    | 2.920    | 4.303     | 6.965    | 9.925     |
| 3                       | 1.638    | 2.353    | 3.182     | 4.541    | 5.841     |
| 4                       | 1.533    | 2.132    | 2.776     | 3.747    | 4.604     |
| 5                       | 1.476    | 2.015    | 2.571     | 3.365    | 4.032     |
| 6                       | 1.440    | 1.943    | 2.447     | 3.143    | 3.707     |
| 7                       | 1.415    | 1.895    | 2.365     | 2.998    | 3.499     |
| 8                       | 1.397    | 1.860    | 2.306     | 2.896    | 3.355     |
| 9                       | 1.383    | 1.833    | 2.262     | 2.821    | 3.250     |
| 10                      | 1.372    | 1.812    | 2.228     | 2.764    | 3.169     |
| 11                      | 1.363    | 1.796    | 2.201     | 2.718    | 3.106     |
| 12                      | 1.356    | 1.782    | 2.179     | 2.681    | 3.055     |
| 13                      | 1.350    | 1.771    | 2.160     | 2.650    | 3.012     |
| 14                      | 1.345    | 1.761    | 2.145     | 2.624    | 2.977     |
| 15                      | 1.341    | 1.753    | 2.131     | 2.602    | 2.947     |
| 16                      | 1.337    | 1.746    | 2.120     | 2.583    | 2.921     |
| 17                      | 1.333    | 1.740    | 2.110     | 2.567    | 2.898     |
| 18                      | 1.330    | 1.734    | 2.101     | 2.552    | 2.878     |
| 19                      | 1.328    | 1.729    | 2.093     | 2.539    | 2.861     |
| 20                      | 1.325    | 1.725    | 2.086     | 2.528    | 2.845     |
| 21                      | 1.323    | 1.721    | 2.080     | 2.518    | 2.831     |
| 22                      | 1.321    | 1.717    | 2.074     | 2.508    | 2.819     |
| 23                      | 1.319    | 1.714    | 2.069     | 2.500    | 2.807     |
| 24                      | 1.318    | 1.711    | 2.064     | 2.492    | 2.797     |
| 25                      | 1.316    | 1.708    | 2.060     | 2.485    | 2.787     |
| 26                      | 1.315    | 1.706    | 2.056     | 2.479    | 2.779     |
| 27                      | 1.314    | 1.703    | 2.052     | 2.473    | 2.771     |
| 28                      | 1.313    | 1.701    | 2.048     | 2.467    | 2.763     |
| 29                      | 1.311    | 1.699    | 2.045     | 2.462    | 2.756     |
| 30                      | 1.310    | 1.697    | 2.042     | 2.457    | 2.750     |

## Two-Tailed T-Test Critical Values

| Degrees of Freedom (df) | α = 0.20 | α = 0.10 | α = 0.05 | α = 0.02 | α = 0.01 |
| ----------------------- | -------- | -------- | -------- | -------- | -------- |
| 1                       | 3.078    | 6.314    | 12.706   | 31.821   | 63.657   |
| 2                       | 1.886    | 2.920    | 4.303    | 6.965    | 9.925    |
| 3                       | 1.638    | 2.353    | 3.182    | 4.541    | 5.841    |
| 4                       | 1.533    | 2.132    | 2.776    | 3.747    | 4.604    |
| 5                       | 1.476    | 2.015    | 2.571    | 3.365    | 4.032    |
| 6                       | 1.440    | 1.943    | 2.447    | 3.143    | 3.707    |
| 7                       | 1.415    | 1.895    | 2.365    | 2.998    | 3.499    |
| 8                       | 1.397    | 1.860    | 2.306    | 2.896    | 3.355    |
| 9                       | 1.383    | 1.833    | 2.262    | 2.821    | 3.250    |
| 10                      | 1.372    | 1.812    | 2.228    | 2.764    | 3.169    |
| 11                      | 1.363    | 1.796    | 2.201    | 2.718    | 3.106    |
| 12                      | 1.356    | 1.782    | 2.179    | 2.681    | 3.055    |
| 13                      | 1.350    | 1.771    | 2.160    | 2.650    | 3.012    |
| 14                      | 1.345    | 1.761    | 2.145    | 2.624    | 2.977    |
| 15                      | 1.341    | 1.753    | 2.131    | 2.602    | 2.947    |
| 16                      | 1.337    | 1.746    | 2.120    | 2.583    | 2.921    |
| 17                      | 1.333    | 1.740    | 2.110    | 2.567    | 2.898    |
| 18                      | 1.330    | 1.734    | 2.101    | 2.552    | 2.878    |
| 19                      | 1.328    | 1.729    | 2.093    | 2.539    | 2.861    |
| 20                      | 1.325    | 1.725    | 2.086    | 2.528    | 2.845    |
| 21                      | 1.323    | 1.721    | 2.080    | 2.518    | 2.831    |
| 22                      | 1.321    | 1.717    | 2.074    | 2.508    | 2.819    |
| 23                      | 1.319    | 1.714    | 2.069    | 2.500    | 2.807    |
| 24                      | 1.318    | 1.711    | 2.064    | 2.492    | 2.797    |
| 25                      | 1.316    | 1.708    | 2.060    | 2.485    | 2.787    |
| 26                      | 1.315    | 1.706    | 2.056    | 2.479    | 2.779    |
| 27                      | 1.314    | 1.703    | 2.052    | 2.473    | 2.771    |
| 28                      | 1.313    | 1.701    | 2.048    | 2.467    | 2.763    |
| 29                      | 1.311    | 1.699    | 2.045    | 2.462    | 2.756    |
| 30                      | 1.310    | 1.697    | 2.042    | 2.457    | 2.750    |

### How to Use These Tables

1. **Determine the Test Type**:

   - **One-tailed test**: Used when testing for an effect in a specific direction (greater than or less than).
   - **Two-tailed test**: Used when testing for any significant difference, regardless of direction.

2. **Calculate degrees of freedom (df)**:

   - For a single-sample test: \( df = n - 1 \)

3. **Choose the significance level (\(\alpha\))**:

   - Common values: 0.05 (5%), 0.01 (1%), 0.10 (10%)

4. **Find the critical value** where the `df` row intersects with the chosen \(\alpha\) column.

5. **Compare with the t-statistic**:
   - If the calculated t-statistic exceeds the critical value, reject the null hypothesis.
   - If it does not exceed the critical value, fail to reject the null hypothesis.

**Note:**

- For one-tailed tests, use the one-tailed table directly.
- For two-tailed tests, use the two-tailed table or double the α value in the one-tailed table.
- If the df isn't listed, interpolate between the closest values or use the more conservative (larger) critical value.

## Example

Given:

- Degrees of freedom (df) = 15
- Significance level (α) = 0.05 (for 95% confidence level)
- Two-tailed test

### Steps to find critical t-value

- Find degrees of freedom (df = 15) in the leftmost column
- Move right to the α = 0.05 column
- Read the t-value where the row and column intersect

From the t-table:

| Degrees of Freedom (df) | α = 0.05 |
| ----------------------- | -------- |
| 15                      | 2.131    |

Therefore, the critical t-value for df = 15 at α = 0.05 is 2.131
