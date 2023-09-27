---
Title: '.reset_index()'
Description: 'Resets the index of a DataFrame to be continuous'
Subjects:
  - 'Data Science'
  - 'Pandas'
Tags:
  - 'Methods'
  - 'Pandas'
  - 'Data Science'
CatalogContent:
  - 'learn-python'
  - 'paths/data-science'
---

Through the course of exploratory analysis, and other data work, a DataFrame object will often be modified to clean and/or restructure the data. Through this work an index may become discontinuous or additional levels may be added or subtracted from the index. The **`.reset_index()`** method can be used to reestablish a continuous index as well as remove one or more unwanted levels.

## Syntax

```pseudo
df = dataframe_value.reset_index()
```

The `.reset_index()` method provides the following parameters:

- _level:_ Takes integer, string, tuple, list, or None values and is set to None by default. Removes the given levels from the index, by default all levels are removed.
- _drop:_ Takes a boolean value and is set to `False` by default. When this parameter is set to `True` it replaces the previous DataFrame index with the new index provided by `.reset_index()`, otherwise it sets the new index in front of the old index.
- _inplace:_ Takes a boolean value and is set to `False` by default. When this parameter is set to `True` it applies all changes to the current instance of the DataFrame, otherwise it creates a new DataFrame instance with the changes applied to that DataFrame.
- _col_level:_ Takes integer or string values and is set to 0 by default. Determines what level the labels are inserted into when the columns have multiple levels. The first level is set by default.
- _col_fill:_ Takes a string, list, or None and is set to None by default. Determines how the other levels are named when the columns have multiple levels. Uses the index name by default.
- _allow_duplicates:_ Optional parameter which takes a boolean value and is set to `lib.no_default` by default. When this parameter is set to `True` it allows duplicate column labels to be created.
- _names:_ Takes integer, string, 1-dimensional list, or None values and is set to None by default. Renames the index DataFrame column. In the case that the Dataframe has a MultiIndex this value has to be a list or tuple equal in length to the number of levels.

## Actions Which Cause Indexing Issues

Common examples include but are not limited to:

- Changing the order of columns.
- Using a column or multiple columns of the database as an index instead of the default index pandas provides and then later needing a numbered index.
- Filtering out certain rows of the DataFrame based on the value of a column of data.
- Changing the order of rows of data by sorting those rows by the values of a certain column of data such as Date or Employee ID Number.
- Adding columns and or rows of data to the DataFrame that were not present in the original DataFrame.

## Example

To follow along a copy of the [Austin_Animal_Center_intakes.csv](https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Intakes/wter-evkm) can be downloaded from city of Austin data portal.

### The Original DataFrame

```py
import pandas as pd

df = pd.read_csv('Austin_Animal_Center_intakes.csv').head()
pd.set_option('display.max_columns', None)
print(df)
```

This results in the following output:

```shell
  Animal ID          Name                DateTime     MonthYear  \
0   A786884        *Brock  01/03/2019 04:19:00 PM  January 2019
1   A706918         Belle  07/05/2015 12:59:00 PM     July 2015
2   A724273       Runster  04/14/2016 06:43:00 PM    April 2016
3   A857105  Johnny Ringo  05/12/2022 12:23:00 AM      May 2022
4   A682524           Rio  06/29/2014 10:38:00 AM     June 2014

                        Found Location    Intake Type Intake Condition  \
0  2501 Magin Meadow Dr in Austin (TX)          Stray           Normal
1     9409 Bluegrass Dr in Austin (TX)          Stray           Normal
2   2818 Palomino Trail in Austin (TX)          Stray           Normal
3   4404 Sarasota Drive in Austin (TX)  Public Assist           Normal
4        800 Grove Blvd in Austin (TX)          Stray           Normal

  Animal Type Sex upon Intake Age upon Intake  \
0         Dog   Neutered Male         2 years
1         Dog   Spayed Female         8 years
2         Dog     Intact Male       11 months
3         Cat   Neutered Male         2 years
4         Dog   Neutered Male         4 years

                                   Breed         Color
0                             Beagle Mix      Tricolor
1               English Springer Spaniel   White/Liver
2                            Basenji Mix   Sable/White
3                     Domestic Shorthair  Orange Tabby
4  Doberman Pinsch/Australian Cattle Dog      Tan/Gray
```

### Removing Cats From the Dataframe

```py

# This section of code removes the furball from our dog DataFrame
df = df[df['Animal Type'] != 'Cat']

# Uncommenting the line below this line will remove the index of the original DataFrame and reset the order
# df.reset_index(inplace = True, drop = True)
print(df)
```

This is the output without `df.reset_index(inplace = True, drop = True)`:

```shell
  Animal ID     Name                DateTime     MonthYear  \
0   A786884   *Brock  01/03/2019 04:19:00 PM  January 2019
1   A706918    Belle  07/05/2015 12:59:00 PM     July 2015
2   A724273  Runster  04/14/2016 06:43:00 PM    April 2016
4   A682524      Rio  06/29/2014 10:38:00 AM     June 2014

                        Found Location Intake Type Intake Condition  \
0  2501 Magin Meadow Dr in Austin (TX)       Stray           Normal
1     9409 Bluegrass Dr in Austin (TX)       Stray           Normal
2   2818 Palomino Trail in Austin (TX)       Stray           Normal
4        800 Grove Blvd in Austin (TX)       Stray           Normal

  Animal Type Sex upon Intake Age upon Intake  \
0         Dog   Neutered Male         2 years
1         Dog   Spayed Female         8 years
2         Dog     Intact Male       11 months
4         Dog   Neutered Male         4 years

                                   Breed        Color
0                             Beagle Mix     Tricolor
1               English Springer Spaniel  White/Liver
2                            Basenji Mix  Sable/White
4  Doberman Pinsch/Australian Cattle Dog     Tan/Gray
```

The indexing now jumps from two to four after the row containing the cat is removed. This can become very messy when dealing with large DataFrames containing hundreds or even thousands of rows.

This is the output with `df.reset_index(inplace = True, drop = True)`:

```
  Animal ID     Name                DateTime     MonthYear  \
0   A786884   *Brock  01/03/2019 04:19:00 PM  January 2019
1   A706918    Belle  07/05/2015 12:59:00 PM     July 2015
2   A724273  Runster  04/14/2016 06:43:00 PM    April 2016
3   A682524      Rio  06/29/2014 10:38:00 AM     June 2014

                        Found Location Intake Type Intake Condition  \
0  2501 Magin Meadow Dr in Austin (TX)       Stray           Normal
1     9409 Bluegrass Dr in Austin (TX)       Stray           Normal
2   2818 Palomino Trail in Austin (TX)       Stray           Normal
3        800 Grove Blvd in Austin (TX)       Stray           Normal

  Animal Type Sex upon Intake Age upon Intake  \
0         Dog   Neutered Male         2 years
1         Dog   Spayed Female         8 years
2         Dog     Intact Male       11 months
3         Dog   Neutered Male         4 years

                                   Breed        Color
0                             Beagle Mix     Tricolor
1               English Springer Spaniel  White/Liver
2                            Basenji Mix  Sable/White
3  Doberman Pinsch/Australian Cattle Dog     Tan/Gray
```

After applying `df.reset_index(inplace = True, drop = True)` the DataFrame index order is now neat and continuous for easy indexing.
