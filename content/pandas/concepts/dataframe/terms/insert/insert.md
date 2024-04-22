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

- `loc` is the integer representation of the insertion index.  This value must be greater than or equal to 0 and less or equal to the number of columns currently in the DataFrame.
- `column` is the label associated with the inserted column.
- `value` is the content of the inserted column.
- `allow_duplicates` is a boolean that allows duplicate column labels if set to `True`.

More details about `DataFrame.insert()`'s parameters:

|   Parameter   | Define                                                | Usage                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :-----------: | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `loc`     | int. Insertion index                                 | Defines the index at which the new column will be inserted.                                                                                                                                                                                                                                                                           |
|    `column`     | str.                        | Sets the label for the new column.                                                                                                                                                                                                                                                                                          |
|     `value`     | Scalar, Series, or array-like.                        | Content to be inserted as the new column.  Note that passing a single value will set that same value for all rows.                                                                                                                                                 |
| `allow_duplicates` | bool. Default `False` | If `allow_duplicates` is set to `True`, the new column is allowed to have the same `column` value as a preexisting column. If `allow duplicates` is set to `False`, passing a column name that is associated with a preexisting column will throw a `ValueError`. |

## Example

In the following example, the `.insert()` method is used with different parameters on the testResults DataFrame:

```
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

```
Original Test Results:
   grade                name          home
0     99           Jarnathan     Frozenfar
1     76              Sofina          Thay
2     64        Edgin Darvis  Icewind Dale
3     83  Simon the Sorcerer       Triboar
```

Doric forgot to insert the alignment of each person tested.  She uses `insert()` to add the alignment of each person as follows:

```
#insert new column
testResults.insert(3, 'alignment', ['Lawful Good','Neutral Evil','Chaotic Good','Chaotic Good'])

#print  the updated DataFrame
print("Updated Test Results:")
print(testResults)
```

Output:

```
Updated Test Results:
   grade                name          home     alignment
0     99           Jarnathan     Frozenfar   Lawful Good
1     76              Sofina          Thay  Neutral Evil
2     64        Edgin Darvis  Icewind Dale  Chaotic Good
3     83  Simon the Sorcerer       Triboar  Chaotic Good
```

Szass Tam used *scrying* to learn Doric's password.  To confuse Doric, Szass decided to add an identical *grade* column as follows:

```
#insert the 'new' column
testResults.insert(1, 'grade', [54,100,26,70],allow_duplicates=True)

#print  the updated DataFrame
print("Further Updated Test Results:")
print(testResults)
```

Output:

```
   grade  grade                name          home     alignment
0     99     54           Jarnathan     Frozenfar   Lawful Good
1     76    100              Sofina          Thay  Neutral Evil
2     64     26        Edgin Darvis  Icewind Dale  Chaotic Good
3     83     70  Simon the Sorcerer       Triboar  Chaotic Good
```

## Codebyte Example

Feel free to play around with Doric's `testResults` DataFrame and add your own column.  Some suggestions include: test date(s), each person's class (such as 'Rogue' or 'Barbarian'), or known associates.

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
