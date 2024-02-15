---
Title: 'Data Frames'
Description: 'Data frames are objects that store data into two dimensions of columns and rows.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Data Types'
  - 'Objects'
  - 'Tables'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

**Data frames** are objects that store data into a table with two dimensions represented by columns and rows. The columns are the different characteristics and the rows are instances of a set of characteristics. Data frames are useful for storing different [data types](https://www.codecademy.com/resources/docs/r/data-types).

## Creating Data Frames

Data frames can be created using the `data.frame()` function.

### Syntax

```pseudo
data.frame(arguments)
```

The `arguments` are the list of vectors with the values for each column of the data frame.

> **Note:** Each vector should be of the same length.

### Example

The following example creates a data frame using a sample of team stats then [prints](https://www.codecademy.com/resources/docs/r/built-in-functions/print) it:

```r
team_stats <- data.frame(Team = c("Aces", "Sky", "Mystics", "Storm", "Sun", "Liberty", "Wings", "Mercury"),
                         Games_Played = c( 6, 7, 2, 6, 7, 3, 3, 2),
                         Wins = c(5, 4, 0, 3, 4, 1, 1, 0),
                         Losses = c(1, 3, 2, 3, 3, 2, 2, 2),
                         Win_Percentage = c(.833, .571, .000, .500, .571, .333, .333, .000))

print(team_stats)
```

The example above will print the following:

```shell
     Team Games_Played Wins Losses Win_Percentage
1    Aces            6    5      1          0.833
2     Sky            7    4      3          0.571
3 Mystics            2    0      2          0.000
4   Storm            6    3      3          0.500
5     Sun            7    4      3          0.571
6 Liberty            3    1      2          0.333
7   Wings            3    1      2          0.333
8 Mercury            2    0      2          0.000
```

## Other Operations

There are several functions that can be used for analyzing data frames. Some are listed below:
