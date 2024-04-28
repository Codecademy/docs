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

The **`.columns`** attribute represents the column labels of the DataFrame. It is an Index object and can be used to view or assign new values to the column labels.

## Syntax

```pseudo
Dataframe.columns
```

## Example

In the following example, the `.columns` attribute is used to modify the column labels of the `studentGrades` DataFrame:

```py
import pandas as pd

# Creating the DataFrame representing student grades
data = {'Math': [88, 92, 79, 85],
        'Science': [94, 77, 90, 78],
        'English': [89, 80, 95, 81]}

studentGrades = pd.DataFrame(data)

# Printing the grades
print(studentGrades)
```

The output for the above code is as follows:

```shell
   Math  Science  English
0    88       94       89
1    92       77       80
2    79       90       95
3    85       78       81
```

Now, let’s say the school decides to update the curriculum and change the subject names to reflect the new courses. The `.columns` attribute can be used to update the column labels accordingly:

```py
import pandas as pd

data = {'Math': [88, 92, 79, 85],
        'Science': [94, 77, 90, 78],
        'English': [89, 80, 95, 81]}

studentGrades = pd.DataFrame(data)

# Updating the column labels
studentGrades.columns = ['Algebra', 'Biology', 'Literature']

# Printing the updated DataFrame
print(studentGrades)
```

The above code produces the following output:

```shell
   Algebra  Biology  Literature
0       88       94          89
1       92       77          80
2       79       90          95
3       85       78          81
```

## Codebyte Example

The following Codebyte demonstrates how to view and update the column labels of a DataFrame using the `.columns` attribute:

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
