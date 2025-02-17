---
Title: 'Z-table'
Description: 'A Z-table shows the cumulative probabilities of a standard normal distribution, helping find the probability of a value occurring below a given z-score.'
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

The **Z-table** is a statistical reference that shows cumulative probabilities for z-scores in a standard normal distribution (which has a mean of _0_ and standard deviation of _1_). The table helps find probabilities associated with z-scores, where:

- **Positive z-values** represent values **above** the mean.
- **Negative z-values** represent values **below** the mean.

## Types of Z-Tables

Z-tables come in different formats depending on how probabilities are calculated:

- **Cumulative Z-table (Left-Tail)**: The most commonly used table, showing the probability of a value occurring below a given Z-score (area to the left).
- **Right-Tail Z-table**: Displays the probability of a value occurring above a given Z-score (area to the right). It is used when focusing on upper-tail probabilities.
- **Two-Tailed Tests**: Used in hypothesis testing, where deviations in both directions are considered. To find probabilities, sum the areas in both tails or subtract from _1_ accordingly.

## Z-Distribution Table for Positive Z-Values

Shows the cumulative probability of a value occurring below a positive Z-score in a standard normal distribution:

| Z-Score | Probability (P) |
| ------- | --------------- |
| 0.0     | 0.5000          |
| 0.1     | 0.5398          |
| 0.2     | 0.5793          |
| 0.5     | 0.6915          |
| 1.0     | 0.8413          |
| 1.5     | 0.9332          |
| 2.0     | 0.9772          |
| 2.5     | 0.9938          |
| 3.0     | 0.9987          |

## Z-Distribution Table for Negative Z-Values

Displays the cumulative probability of a value occurring below a negative Z-score, representing values to the left of the mean:

| Z-Score | Probability (P) |
| ------- | --------------- |
| -0.1    | 0.4602          |
| -0.2    | 0.4207          |
| -0.5    | 0.3085          |
| -1.0    | 0.1587          |
| -1.5    | 0.0668          |
| -2.0    | 0.0228          |
| -2.5    | 0.0062          |
| -3.0    | 0.0013          |

## How to Use the Z-Table

1. **Calculate the Z-Score**: Determine the z-score based on the data point’s distance from the mean.
2. **Locate the Z-Score**: Find the first decimal in the left column and the second decimal in the top row; their intersection gives the probability.
3. **Interpret the Probability**:
   - **Left-tail table**: The value represents the probability to the left of Z.
   - **Right-tail**: Subtract from 1 to get the probability to the right.
   - **Between two z-scores**: Subtract the smaller probability from the larger one to find the probability of a value falling between two z-scores.
