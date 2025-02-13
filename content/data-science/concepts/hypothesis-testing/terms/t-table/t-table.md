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

The **t-table**, also known as the Student's t-distribution table, is a fundamental reference tool in statistical analysis that helps researchers determine whether to reject or fail to reject their null hypothesis. It provides critical values based on degrees of freedom and desired significance levels, allowing for precise statistical inference in scenarios where sample sizes are small or population standard deviation is unknown.

## One-Tailed T-Test Critical Values

| Degrees of Freedom (df) | α = 0.10 | α = 0.05 | α = 0.025 | α = 0.01 | α = 0.005 |
| ----------------------- | -------- | -------- | --------- | -------- | --------- |
| 1                       | 3.078    | 6.314    | 12.706    | 31.821   | 63.657    |
| 2                       | 1.886    | 2.920    | 4.303     | 6.965    | 9.925     |
| 3                       | 1.638    | 2.353    | 3.182     | 4.541    | 5.841     |
| 4                       | 1.533    | 2.132    | 2.776     | 3.747    | 4.604     |
| 5                       | 1.476    | 2.015    | 2.571     | 3.365    | 4.032     |
| 10                      | 1.372    | 1.812    | 2.228     | 2.764    | 3.169     |
| 15                      | 1.341    | 1.753    | 2.131     | 2.602    | 2.947     |
| 20                      | 1.325    | 1.725    | 2.086     | 2.528    | 2.845     |
| 30                      | 1.310    | 1.697    | 2.042     | 2.457    | 2.750     |
| 60                      | 1.296    | 1.671    | 2.000     | 2.390    | 2.660     |
| ∞                       | 1.282    | 1.645    | 1.960     | 2.326    | 2.576     |

## ## Two-Tailed T-Test Critical Values

| Degrees of Freedom (df) | α = 0.20 | α = 0.10 | α = 0.05 | α = 0.02 | α = 0.01 |
| ----------------------- | -------- | -------- | -------- | -------- | -------- |
| 1                       | 3.078    | 6.314    | 12.706   | 31.821   | 63.657   |
| 2                       | 1.886    | 2.920    | 4.303    | 6.965    | 9.925    |
| 3                       | 1.638    | 2.353    | 3.182    | 4.541    | 5.841    |
| 4                       | 1.533    | 2.132    | 2.776    | 3.747    | 4.604    |
| 5                       | 1.476    | 2.015    | 2.571    | 3.365    | 4.032    |
| 10                      | 1.372    | 1.812    | 2.228    | 2.764    | 3.169    |
| 15                      | 1.341    | 1.753    | 2.131    | 2.602    | 2.947    |
| 20                      | 1.325    | 1.725    | 2.086    | 2.528    | 2.845    |
| 30                      | 1.310    | 1.697    | 2.042    | 2.457    | 2.750    |
| 60                      | 1.296    | 1.671    | 2.000    | 2.390    | 2.660    |
| ∞                       | 1.282    | 1.645    | 1.960    | 2.326    | 2.576    |

### How to Use These Tables:

1. Determine whether a one-tailed is needed or two-tailed test based on the hypothesis.
2. Calculate degrees of freedom (df = n - 1 for single sample tests).
3. Choose the significance level (`α`).
4. Find the critical value where the `df` row intersects with the chosen `α` column.
5. Compare the calculated t-statistic with this critical value to make the decision.

**Note:**

- For one-tailed tests, use the one-tailed table directly.
- For two-tailed tests, use the two-tailed table or double the α value in the one-tailed table.
- If the df isn't listed, interpolate between the closest values or use the more conservative (larger) critical value.
