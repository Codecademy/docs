---
Title: 'Data Frames'
Description: 'Data Frames are objects that store data into two dimensions.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Data Types'
  - 'Objects'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

**Data Frames** are objects that store data into a table with two dimensions. The two dimensions are represented by columns and rows. The columns are the different variables and the rows are the observations of each variable. Data frames are useful for storing data of different types.

## Creating Data Frames

Data Frames can be created using the data.frame() function.

### Syntax

```pseudo
data.frame(arguments)
```

- `arguments` are the list of vectors with the values to be used in the data frame. 

*Note:* Each vector should be of the same length.

### Example

The following example saves a sample of team stat values into a data frame:

```r
team.stats <- data.frame(Team = c("Aces","Sky","Mystics", "Storm", "Sun", "Liberty"), 
                         Games_Played = c( 4, 5, 2, 4, 5, 3), 
                         Wins = c(3, 3, 0, 3, 3, 1), 
                         Losses = c(1,2,2,1,2,2), 
                         Win_Percentage = c(.750, .600, .000, .750, .600, .333))

print(team.stats)
```

The above will print the following:

```shell
     Team Games_Played Wins Losses Win_Percentage
1    Aces            4    3      1          0.750
2     Sky            5    3      2          0.600
3 Mystics            2    0      2          0.000
4   Storm            4    3      1          0.750
5     Sun            5    3      2          0.600
6 Liberty            3    1      2          0.333
```

## Built-in Functions

There are several built-in functions that can be used to analyze data within data frames. Some of which are listed below: