---
Title: '.columns'
Description: 'Represents the column labels of the DataFrame.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Pandas'
  - 'Attributes'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.columns`** attribute represents the column labels of the DataFrame. It returns an Index object and can be used to view or assign new values to the column labels.

## Syntax

```pseudo
pandas.DataFrame.columns
```

## Example

In the following example, the `.columns` attribute is used to view and modify the column labels of the `studentGrades` DataFrame:

```py
import pandas as pd

# Creating the DataFrame representing student grades
data = {'Math': [88, 92, 79, 85],
        'Science': [94, 77, 90, 78],
        'English': [89, 80, 95, 81]}

studentGrades = pd.DataFrame(data)

# Print the column label of the studentGrades
print(studentGrades.columns)

# Print the studentGrades DataFrame
print(f'{studentGrades} \n')

# modify the column label
studentGrades.columns = ['Algebra', 'Biology', 'Literature']

# print the modified column label
print(studentGrades.columns)

# print the modified studentGrades Dataframe
print(f'{studentGrades}')
```

The output for the above code is as follows:

```shell
Index(['Math', 'Science', 'English'], dtype='object')
   Math  Science  English
0    88       94       89
1    92       77       80
2    79       90       95
3    85       78       81 

Index(['Algebra', 'Biology', 'Literature'], dtype='object')
   Algebra  Biology  Literature
0       88       94          89
1       92       77          80
2       79       90          95
3       85       78          81
```

## Codebyte Example

The following Codebyte Example demonstrates how to view and update the column labels of a DataFrame using the `.columns` attribute:

```codebyte/python
import pandas as pd

# Sample DataFrame
data = {'A': [1, 2], 'B': [3, 4]}
df = pd.DataFrame(data)

# View column labels
print(df.columns)

# Update column labels
df.columns = ['X', 'Y']

print("Updated columns:")
print(df.columns)
```
