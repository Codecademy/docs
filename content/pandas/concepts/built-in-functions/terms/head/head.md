---
Title: '.head()'
Description: 'Returns the first 5 rows of a dataset provided before.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Display'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science-foundations'
---

Using the buil-in function `.head()` will display all the columns of a dataset and the first 5 rows of information for each column. Also you can pass an integer as an argument in order to see that number of rows displayed. 

## Syntax 

```pseudo
pd.head(10)
```

The parameter "10" infomrs us that the rows displayed will change from 5 (default) to 10. 

## Example
```py
import pandas as pd

document = pd.read_csv("csv_file.csv")

document.head()
```

The code can be changed by using another kind of file such as an Excel file (with the extension .xlsx), and the parameter in `.head()` can be omitted . This code would result on the following output: 

```shell
  column 1 column 2 column 3 column 4 column 5
0        A        B        C        D       E
1        F        G        H        I       J
2        K        L        M        N       O
3        P        Q        R        S       T
4        U        V        W        X       Y

```

The letters in the columns will be replaced with the information from the document provided when reading the file. 