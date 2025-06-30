---
Title: '.assign()'
Description: 'Creates new columns or modifies existing columns in a DataFrame while preserving the original DataFrame.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'DataFrame'
  - 'Methods'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.assign()`** method in pandas is used to create new columns or modify existing columns in a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) while preserving the original `DataFrame`. It returns a new `DataFrame` object with all original columns plus the newly assigned ones, making it an ideal choice for functional programming approaches and method chaining.

The `.assign()` method is particularly useful in data preprocessing, feature engineering, and exploratory data analysis workflows. It allows for dynamic column creation using both static values and callable functions, making it versatile for various data manipulation scenarios. Common use cases include calculating derived metrics, creating categorical variables, applying transformations to existing columns, and building complex data pipelines where immutability is preferred.

## Syntax

```pseudo
DataFrame.assign(**kwargs)
```

**Parameters:**

- `**kwargs`: Keyword arguments where the keys represent column names and values can be:
  - **Scalar values**: Single values assigned to all rows
  - **Array-like objects**: Lists, arrays, or Series with length matching the `DataFrame`
  - **Callable functions**: Functions or lambda expressions that take the `DataFrame` as input and return values for the new column

**Return value:**

A new `DataFrame` containing all original columns plus the newly assigned columns. If a column name already exists, it will be replaced in the returned `DataFrame`.

## Example 1: Adding Basic Columns

This example demonstrates the fundamental usage of `.assign()` to add new columns with static values:

```py
import pandas as pd

# Create sample DataFrame
df = pd.DataFrame({
  'product_id': [101, 102, 103, 104],
  'price': [25.99, 45.50, 12.75, 67.25],
  'quantity': [10, 5, 20, 8]
})

# Add new columns using assign
df_updated = df.assign(
  currency='USD',
  in_stock=True,
  category='Electronics'
)

print(df_updated)
```

Output of this code is:

```shell
   product_id  price  quantity currency  in_stock    category
0         101  25.99        10      USD      True  Electronics
1         102  45.50         5      USD      True  Electronics
2         103  12.75        20      USD      True  Electronics
3         104  67.25         8      USD      True  Electronics
```

This example shows how `.assign()` creates a new `DataFrame` with three additional columns. The `currency` and `category` columns receive string values, while `in_stock` receives a boolean value that is applied to all rows.

## Example 2: Calculating Revenue Analysis

This example demonstrates using `.assign()` with lambda functions to perform business calculations and create derived metrics:

```py
import pandas as pd

# Create sales DataFrame
sales_df = pd.DataFrame({
  'product_name': ['Laptop', 'Mouse', 'Keyboard', 'Monitor'],
  'unit_price': [899.99, 29.99, 79.99, 299.99],
  'units_sold': [50, 200, 150, 75],
  'cost_per_unit': [600.00, 15.00, 45.00, 180.00]
})

# Calculate business metrics using assign
sales_analysis = sales_df.assign(
  total_revenue=lambda x: x['unit_price'] * x['units_sold'],
  total_cost=lambda x: x['cost_per_unit'] * x['units_sold'],
  profit=lambda x: (x['unit_price'] - x['cost_per_unit']) * x['units_sold'],
  profit_margin=lambda x: ((x['unit_price'] - x['cost_per_unit']) / x['unit_price']) * 100
)

print(sales_analysis.round(2))
```

The output of this code is:

```shell
  product_name  unit_price  units_sold  cost_per_unit  total_revenue  total_cost   profit  profit_margin
0       Laptop      899.99          50         600.00       44999.50     30000.0  14999.5          33.33
1        Mouse       29.99         200          15.00        5998.00      3000.0   2998.0          50.02
2     Keyboard       79.99         150          45.00       11998.50      6750.0   5248.5          43.76
3      Monitor      299.99          75         180.00       22499.25     13500.0   8999.25         40.00
```

This example demonstrates real-world financial analysis where `.assign()` calculates multiple business metrics. Each lambda function receives the `DataFrame` as input and performs calculations using existing columns to create comprehensive sales analytics.

## Codebyte Example: Customer Segmentation Pipeline

This example shows advanced usage of `.assign()` for customer segmentation and data categorization in a chained workflow:

```codebyte/python
import pandas as pd
import numpy as np

# Create customer DataFrame
customers_df = pd.DataFrame({
  'customer_id': range(1001, 1021),
  'age': [25, 34, 45, 23, 56, 67, 29, 38, 41, 52, 33, 28, 47, 35, 42, 26, 39, 44, 31, 37],
  'annual_spending': [1200, 3400, 5600, 800, 7200, 2100, 2800, 4500, 6100, 3900,
                     2600, 1800, 5200, 3100, 4800, 1500, 3700, 5800, 2400, 4100],
  'years_as_customer': [2, 5, 8, 1, 12, 15, 3, 6, 9, 7, 4, 2, 10, 5, 8, 2, 6, 11, 3, 7]
})

# Create comprehensive customer segmentation
segmented_customers = customers_df.assign(
  # Age-based categories
  age_group=lambda x: pd.cut(x['age'], bins=[0, 30, 45, 100],
                            labels=['Young', 'Middle-aged', 'Senior']),

  # Spending tier classification
  spending_tier=lambda x: pd.cut(x['annual_spending'],
                                bins=[0, 2000, 4000, 8000],
                                labels=['Low', 'Medium', 'High']),

  # Customer loyalty score
  loyalty_score=lambda x: np.where(x['years_as_customer'] >= 8, 'Loyal',
                                 np.where(x['years_as_customer'] >= 4, 'Regular', 'New')),

  # Average spending per year
  avg_annual_spending=lambda x: x['annual_spending'] / x['years_as_customer'],

  # Customer value segment
  value_segment=lambda x: np.where(
    (x['annual_spending'] > 4000) & (x['years_as_customer'] >= 6), 'Premium',
    np.where(x['annual_spending'] > 3000, 'Standard', 'Basic')
  )
)

print(segmented_customers.head(10))
```

This advanced example demonstrates how `.assign()` can be used for complex customer segmentation. It creates multiple categorical variables using `pd.cut()`, conditional logic with `np.where()`, and mathematical calculations, all within a single method call to build a comprehensive customer analysis framework.

## Frequently Asked Questions

### 1. Does `.assign()` modify the original `DataFrame`?

No, `.assign()` returns a new `DataFrame` with the assigned columns while leaving the original `DataFrame` unchanged.

### 2. Can I assign multiple columns in a single `.assign()` call?

Yes, you can assign multiple columns by providing multiple keyword arguments. Later columns in the same `.assign()` call can reference earlier columns that were created in the same call.

### 3. How does `.assign()` handle existing column names?

If you assign to an existing column name, `.assign()` will overwrite that column in the returned `DataFrame`. The original `DataFrame` remains unchanged, but the new `DataFrame` will have the updated column values.
