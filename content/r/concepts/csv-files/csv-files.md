---
Title: 'CSV Files'
Description: 'Data within CSV files can be manipulated using built-in R functions.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Logical'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

Data within **[CSV](https://www.codecademy.com/resources/docs/general/csv) files** can be read and written using built-in functions.

## Changing Directories

The file being worked on should be located in the working directory. The current directory can be checked by printing the `getwd()` command:

```r
print(getwd())
```

The working directory can be set using the `setwd()` command:

```r
setwd(directory)
```

Where `directory` is the directory to be set. For example, `"/Users/kyra/Documents/students/students.csv"`.

## Reading Data

The `read.csv()` reads in data from a CSV file.

### Syntax

```pseudo
read.csv(file)
```

`file` is the file with `.csv` extension to read from.

### Example

Suppose there is a `students.csv` file with the following data in it:

| First Name | Last Name | Grade | ID     |
| ---------- | --------- | ----- | ------ |
| Rita       | Aros      | 3     | N76654 |
| Noah       | Chen      | 1     | N75435 |
| Averill    | Freeman   | 9     | N43542 |
| Stephen    | Holmes    | 11    | N97543 |
| Blake      | Jones     | 12    | N85342 |
| Francesca  | Mahone    | 8     | N49854 |
| Katelyn    | Miller    | 2     | N58632 |
| Martin     | Phillman  | 5     | N86873 |
| Carl       | Sanchez   | 4     | N43263 |
| April      | Tillman   | 7     | N63430 |
| Tori       | Vega      | 10    | N76543 |
| Frank      | Williams  | 3     | N86532 |
| Robert     | Ye        | 10    | N67541 |

The data can be retrieved and then printed to the console using the `read.csv`:

```r
# Reading in csv files
data <- read.csv("students.csv")

# Print out information
print(data)
```

This reads the data in as a data frame. The output would be the following:

```shell
   First.Name Last.Name Grade     ID
1       Rita       Aros     3 N76654
2        Noah      Chen     1 N75435
3     Averill   Freeman     9 N43542
4     Stephen    Holmes    11 N97543
5       Blake     Jones    12 N85342
6  Francesca     Mahone     8 N49854
7     Katelyn    Miller     2 N58632
8      Martin  Phillman     5 N86873
9        Carl   Sanchez     4 N43263
10      April   Tillman     7 N63430
11       Tori      Vega    10 N76543
12      Frank  Williams     3 N86532
13     Robert        Ye    10 N67541
```

## Writing Files

The `write.csv()` function can be used to write into CSV files.

### Syntax

```pseudo
write.csv(data, file)
```

- `data`: The information to write into the `.csv` file
- `file`: Name of the file with a `.csv` extension to write the `data` into.

### Example

The following example uses the `subset()` function to retrieve the students with grades higher than `8` from the students.csv file. Then it writes the subset into the `highschoolers.csv` file using the `write.csv()` function:

```r
# Retrieve data from CSV file
data <- read.csv("students.csv")

# Get subset of students in grades higher than 8
higherGrades <- subset(data, Grade > 8)

# Write the subset into a new CSV file
write.csv(higherGrades, "highSchoolers.csv")
```

## Built-in Functions

There are several built-in functions that can be used to analyze data within CSV files. Some of which are listed below:
