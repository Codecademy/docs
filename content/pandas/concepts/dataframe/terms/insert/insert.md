---
Title: '.insert()'
Description: Inserts a new column into the DataFrame at the specified location.
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`insert()`** method is used to insert into the DataFrame the provided column at the specified location, shifting all existing columns at or above the specified index to the right.

## Syntax

```pseudo
DataFrame.insert(loc, column, value, allow_duplicates=False)
```

- `loc`: Specifies the index at which the new column will be inserted. It should be a non-negative integer and must not exceed the current number of columns in the DataFrame.
- `column`: Provides a string label that describes the newly inserted column.
- `value`: Represents the content of the inserted column, which can be a scalar, a pandas Series, or an array-like object. Note that if a single value is passed, it will be set for all rows in the new column.
- `allow_duplicates`: A boolean flag that determines whether duplicate column labels are allowed. When set to True, duplicate column labels are permitted, allowing the new column to have the same label as an existing one. Conversely, setting allow_duplicates to False will raise a ValueError if the provided column label matches an existing one.

## Example

In the following example, the `.insert()` method is used with different parameters on the testResults DataFrame:

```py
import pandas as pd
 
# Create the DataFrame representing test results administered by Doric
data = {'grade': [99, 76, 64, 83],
        'name': ['Jarnathan', 'Sofina', 'Edgin Darvis', 'Simon the Sorcerer'],
        'home': ['Frozenfar', 'Thay', 'Icewind Dale','Triboar']}
 
testResults = pd.DataFrame(data)
 
# Print the original DataFrame
print("Original Test Results:")
print(testResults)
```

Output:

```shell
Original Test Results:
   grade                name          home
0     99           Jarnathan     Frozenfar
1     76              Sofina          Thay
2     64        Edgin Darvis  Icewind Dale
3     83  Simon the Sorcerer       Triboar
```

Doric forgot to insert the alignment of each person tested.  She uses `insert()` to add the alignment of each person as follows:

```py
#insert new column
testResults.insert(3, 'alignment', ['Lawful Good','Neutral Evil','Chaotic Good','Chaotic Good'])

#print  the updated DataFrame
print("Updated Test Results:")
print(testResults)
```

Output:

```shell
Updated Test Results:
   grade                name          home     alignment
0     99           Jarnathan     Frozenfar   Lawful Good
1     76              Sofina          Thay  Neutral Evil
2     64        Edgin Darvis  Icewind Dale  Chaotic Good
3     83  Simon the Sorcerer       Triboar  Chaotic Good
```

Szass Tam used *scrying* to learn Doric's password.  To confuse Doric, Szass decided to add an identical *grade* column as follows:

```py
#insert the 'new' column
testResults.insert(1, 'grade', [54,100,26,70],allow_duplicates=True)

#print  the updated DataFrame
print("Further Updated Test Results:")
print(testResults)
```

Output:

```shell
Further Updated Test Results:
   grade  grade                name          home     alignment
0     99     54           Jarnathan     Frozenfar   Lawful Good
1     76    100              Sofina          Thay  Neutral Evil
2     64     26        Edgin Darvis  Icewind Dale  Chaotic Good
3     83     70  Simon the Sorcerer       Triboar  Chaotic Good
```

## Codebyte Example

The following example demonstrates the use of the .insert() method in pandas to add a new column named 'alignment' to a DataFrame, representing alignment information for test results.

```codebyte/python
import pandas as pd
 
# Create the DataFrame representing test results administered by Doric
data = {'grade': [99, 76, 64, 83],
        'name': ['Jarnathan', 'Sofina', 'Edgin Darvis', 'Simon the Sorcerer'],
        'home': ['Frozenfar', 'Thay', 'Icewind Dale','Triboar']}
 
testResults = pd.DataFrame(data)
 
# Print the original DataFrame
print("Original Test Results:")
print(testResults)

testResults.insert(3, 'alignment', ['Lawful Good','Neutral Evil','Chaotic Good','Chaotic Good'])
print("Updated Test Results:")
print(testResults)
```
