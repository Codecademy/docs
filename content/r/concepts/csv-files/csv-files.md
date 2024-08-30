---
Title: 'CSV Files'
Description: 'R provides functions for manipulating data within CSV files.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'CSV'
  - 'Files'
  - 'Data Structures'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

Data within **[CSV](https://www.codecademy.com/resources/docs/general/csv) files** can be read and written to using the `read.csv()` and `write.csv()` functions.

## Reading Data

The `read.csv()` function reads data from a CSV file.

### Syntax

```pseudo
read.csv(file)
```

A `file` with a `.csv` extension is read from the `read.csv()` function.

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

The data can be retrieved using the `read.csv()` function and then [printed](https://www.codecademy.com/resources/docs/r/built-in-functions/print):

```r
# Reading csv files
data <- read.csv("students.csv")

# Print out information
print(data)
```

This reads the data in as a [data frame](https://www.codecademy.com/resources/docs/r/data-frames). The output would be the following:

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

The `write.csv()` function can be used to write data into CSV files.

### Syntax

```pseudo
write.csv(data, file)
```

- `data`: The information to write into the `.csv` file.
- `file`: Name of the file with a `.csv` extension to write the `data` into.

### Example

The following example uses the `subset()` function to retrieve students that are above grade `8` from the `students.csv` file. Then it writes the subset into the `highSchoolers.csv` file using the `write.csv()` function:

```r
# Retrieve data from CSV file
data <- read.csv("students.csv")

# Get subset of students in grades higher than 8
higherGrades <- subset(data, Grade > 8)

# Write the subset into a new CSV file
write.csv(higherGrades, "highSchoolers.csv")
```

The example above will return the `highSchoolers.csv` file with the following data in it:

```shell
  First.Name Last.Name Grade     ID
3    Averill   Freeman     9 N43542
4    Stephen    Holmes    11 N97543
5      Blake     Jones    12 N85342
11      Tori      Vega    10 N76543
13    Robert        Ye    10 N67541
```
