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




