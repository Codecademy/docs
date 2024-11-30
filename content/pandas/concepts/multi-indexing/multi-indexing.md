
# Multi-Indexing

## Introduction  
Multi-Indexing in pandas refers to a hierarchical indexing technique that allows you to work with multiple levels of indexes in a single DataFrame or Series. It is particularly useful for managing complex datasets, enabling easier selection, slicing, and organization of data.

For example, in a DataFrame containing sales data, you might use a MultiIndex to organize data by regions and years simultaneously.

Learn more about pandas basics in [Codecademy’s Pandas course](https://www.codecademy.com/learn/learn-pandas).

---

## Syntax  

Creating a MultiIndex typically involves using the `MultiIndex` object or specifying multiple columns as the index when creating a DataFrame.  

### Example Syntax:
```python
# Creating a MultiIndex DataFrame
df = pd.DataFrame(
    data,
    index=pd.MultiIndex.from_tuples(tuples, names=["Level1", "Level2"])
)
```

You can also set a MultiIndex from existing columns in a DataFrame:  
```python
df = df.set_index(["Column1", "Column2"])
```

For more on creating and managing indexes in pandas, visit the [DataFrame Indexing section on Codecademy](https://www.codecademy.com/learn/learn-pandas/modules/learn-pandas-indexing).

---

## Example  

Here’s how Multi-Indexing works in practice:  
```python
import pandas as pd

# Sample data
data = {
    "Sales": [200, 150, 400, 300],
    "Profit": [50, 20, 80, 60]
}
index = [
    ("Region A", "2021"),
    ("Region A", "2022"),
    ("Region B", "2021"),
    ("Region B", "2022")
]

# Create DataFrame with MultiIndex
df = pd.DataFrame(data, index=pd.MultiIndex.from_tuples(index, names=["Region", "Year"]))

# Display the DataFrame
print(df)
```

### Output:
```
                Sales  Profit
Region    Year               
Region A  2021    200      50
          2022    150      20
Region B  2021    400      80
          2022    300      60
```

For more advanced examples, explore [pandas MultiIndex documentation](https://pandas.pydata.org/pandas-docs/stable/user_guide/advanced.html).

---

## Codebyte Example  

Below is an interactive Codebyte example to experiment with Multi-Indexing:

```python
# Import pandas
import pandas as pd

# Sample data
data = {
    "Revenue": [1000, 2000, 3000],
    "Expenses": [400, 700, 600]
}
multi_index = pd.MultiIndex.from_tuples(
    [("Tech", "Q1"), ("Tech", "Q2"), ("Retail", "Q1")],
    names=["Sector", "Quarter"]
)

# Create DataFrame
df = pd.DataFrame(data, index=multi_index)

# View the DataFrame
print(df)
```

### Output:
```
                Revenue  Expenses
Sector Quarter                   
Tech   Q1         1000       400
       Q2         2000       700
Retail Q1         3000       600
```

---

## Additional Resources  

- [Codecademy’s Pandas Course](https://www.codecademy.com/learn/learn-pandas)  
- [Pandas MultiIndex Documentation](https://pandas.pydata.org/pandas-docs/stable/user_guide/advanced.html)  
- [Codecademy Docs: pandas DataFrame](https://www.codecademy.com/resources/docs/python/pandas/dataframe)

By following these examples and links, you can effectively implement Multi-Indexing in your pandas DataFrames, enhancing the organization and accessibility of your data.
