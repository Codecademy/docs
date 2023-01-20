 | Title  | Description    |Subject                        |Tags                         |Catalog Content  |
 |----------------|----------------|-----------------------------|------------------------------|------------------|
 |`.drop_duplicates()`|Will return DataFrame with duplicates removed| Computer Science & Data Science|Data Structures & Pandas| paths\datascience| 
 
 The `.drop_duplicates()`function will return a new DataFrame with duplicated values removed or None if `inplace = False` 
 
 ## Syntax
 ----------------
``` 
df.drop_duplicates(subset= None, *, keep= 'first', inplace= False, ignore_index= False)
```

|Parameter Name| Data Type | Usage |
|:------------:|-----------|-------|
|`subset`| column label or sequence of labels| Will only consider duplicates in these columns, otherwise all columns are screened by default.
|`keep`|*'first'* **default**,*'last'*,*False*| Determines which duplicate to keep by default. `first` will drop all duplicates except the first occurence. `last`will drop all duplicates except the last occurence. False drops all duplicates.
|`inplace`| *bool*, *False* **default**| Decides whether to create a new DataFrame or modify the existing DataFrame.
|`ignore_index`| *bool*, *False* **default**| If True, the resulting axis will be labeled 0, 1, …, n - 1.

 ## Example
 ----------------
 Below are two separate examples of `.drop_duplicates()` using the same DataFrame:
 
 ``` 
import pandas as pd

#The initial DataFrame
df1= pd.DataFrame({"Name": ["Peter", "Julia", "Manon", "Manon", "Nouhoum", "Nouhoum"],
                 "Age": [7, 8, 10, 7, 9, 9], 
                 "Favorite Color": ["Pink", "Purple","Orange","Green", "Blue", "Blue"]})
print(df1.head())

#Example 1
df2 = df1.drop_duplicates(inplace=False)
print(df2.head())

#Example 2 
df3= df1.drop_duplicates(subset=['Name'], keep='last', ignore_index= True, inplace=False)
print(df3.head())
 ```
 Here is the output of both `.drop_duplicates()` examples:
 
 ```
 Original DataFrame:
       Name  Age Favorite Color
0    Peter    7           Pink
1    Julia    8         Purple
2    Manon   10         Orange
3    Manon    7          Green
4  Nouhoum    9           Blue

Example 1 DataFrame:
      Name  Age Favorite Color
0    Peter    7           Pink
1    Julia    8         Purple
2    Manon   10         Orange
3    Manon    7          Green
4  Nouhoum    9           Blue

Example 2 DataFrame:
       Name  Age Favorite Color
0    Peter    7           Pink
1    Julia    8         Purple
2    Manon    7          Green
3  Nouhoum    9           Blue
 ```
 
 


