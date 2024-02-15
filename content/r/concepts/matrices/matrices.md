---
Title: 'Matrices'
Description: 'Matrices in R are a fundamental data type used for storing two-dimensional tabular data with rows and columns.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Matrices'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

In R, **matrices** are data structures that contain elements of the same data type arranged in rows and columns. They provide a convenient way to store and manipulate structured data, making them widely used in various data analysis and statistical operations.

Matrices are created using the `matrix()` function, which takes the data elements and dimensions as input parameters. The elements can be numeric, character, logical, or any other data type supported by R. The dimensions of a matrix define the number of rows and columns, allowing for organized storage and efficient computations.

Once created, matrices offer a wide range of operations and functions. Basic arithmetic operations can be performed, such as addition, subtraction, multiplication, and division, on matrices of compatible dimensions. R also provides functions for matrix transposition, subsetting, row and column manipulation, and various matrix algebra operations like determinant calculation, inverse computation, and eigenvalue extraction.

## Syntax

To create a matrix, simply use the `matrix()` method. Here are some examples:

```r
# Create a matrix with 8 values stored in a tabular format with 2 rows and 4 columns
myMatrix <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8), nrow=2, ncol=4)

# Return the created matrix
myMatrix
```

This example results in the following output:

```shell
     [,1] [,2] [,3] [,4]
[1,]    1    3    5    7
[2,]    2    4    6    8
```

Another example of matrices with string values is:

```r
# Create matrix with string values
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

# Return the created matrix
myMatrix2
```

This example results in the following output:

```shell
     [,1]    [,2]
[1,] "tokyo" "washington"
[2,] "delhi" "paris"
```

## Access Matrix Items

The matrix items can be accessed by using `[ ]` brackets where the first parameter in the bracket specifies the row-position, while the second specifies the column-position:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

# Return statement
myMatrix2[1, 2]
```

This example results in the following output:

```shell
"washington"
```

The whole row can be accessed if by specifying a comma after the number in the bracket:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

# Return statement
myMatrix2[1, ]
```

This example results in the following output:

```shell
[1] "tokyo"      "washington"
```

The whole column can be accessed by specifying a comma before the number in the bracket:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

# Return statement
myMatrix2[, 2]
```

This example results in the following output:

```shell
[1] "washington" "paris"
```

## Accessing Multiple Rows

Multiple rows can be accessed by using the `c()` function:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

# Return statement
myMatrix2[c(1, 2),]
```

This example results in the following output:

```shell
      [,1]    [,2]
[1,] "tokyo" "washington"
[2,] "delhi" "paris"
```

## Adding and Removing Rows and Columns

The `cbind()` function may be used to add more columns in a Matrix:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)
newmatrix <- cbind(myMatrix2, c("london", "berlin"))

# Return the new matrix
newmatrix
```

This example results in the following output:

```shell
   [,1]    [,2]         [,3]
[1,] "tokyo" "washington" "london"
[2,] "delhi" "paris"      "berlin"
```

The `rbind()` function is used to add more rows in a Matrix:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)
newmatrix <- rbind(myMatrix2, c("moscow", "brasília"))

# Return the new matrix
newmatrix
```

This example results in the following output:

```shell
      [,1]     [,2]
[1,] "tokyo"  "washington"
[2,] "delhi"  "paris"
[3,] "moscow" "brasília"
```

The `c()` function may be used to remove rows and columns:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

# Remove the first row and the first column
myMatrix2 <- myMatrix2[-c(1), -c(1)]

# Return the matrix
myMatrix2
```

This example results in the following output:

```shell
  [1] "paris"
```

## Check if an Item Exists

To find out if a specified item is present in a matrix, use the `%in%` operator:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

# Return
"delhi" %in% myMatrix2
"cairo" %in% myMatrix2
```

This example results in the following output:

```shell
  [1] TRUE
  [1] FALSE
```

## Dimension and Length of a Matrix

The `dim()` function is used to find the number of rows and columns in a matrix (and can also be used to reshape a matrix):

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

# Return
dim(myMatrix2)
```

This example results in the following output:

```shell
  [1] 2 2
```

The `length()` function can also be used to find the dimension of a matrix:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)
length(myMatrix2)
```

This example results in the following output:

```shell
[1] 4
```

## Mathematical Operations on Matrices

Addition, subtraction, multiplication and division can also be performed on matrices in R.

```r
# Create two 2x3 matrices.
matrix1 <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 3)
matrix2 <- matrix(c(7, 8, 9, 10, 11, 12), nrow = 3)

# Add the matrices
result1 <- matrix1 + matrix2

# Subtract the matrices
result2 <- matrix1 - matrix2

# Multiply the matrices
result3 <- matrix1 * matrix2

# Divide the matrices
result4 <- matrix1 / matrix2

# Print
print("The first matrix is:")
print(matrix1)
print("The second matrix is:")
print(matrix2)
# Print results
print("The result of Addition of is:")
print(result1)
print("The result of Subtraction of is:")
print(result2)
print("The result of Multiplication of is:")
print(result3)
print("The result of Division of is:")
print(result4)
```

This example results in the following output:

```shell
[1] "The first matrix is:"
     [,1] [,2]
[1,]    1    4
[2,]    2    5
[3,]    3    6
[1] "The second matrix is:"
     [,1] [,2]
[1,]    7   10
[2,]    8   11
[3,]    9   12
[1] "The result of Addition of is:"
     [,1] [,2]
[1,]    8   14
[2,]   10   16
[3,]   12   18
[1] "The result of Subtraction of is:"
     [,1] [,2]
[1,]   -6   -6
[2,]   -6   -6
[3,]   -6   -6
[1] "The result of Multiplication of is:"
     [,1] [,2]
[1,]    7   40
[2,]   16   55
[3,]   27   72
[1] "The result of Division of is:"
          [,1]      [,2]
[1,] 0.1428571 0.4000000
[2,] 0.2500000 0.4545455
[3,] 0.3333333 0.5000000
```

Matrices are often used to represent data sets or mathematical models in R. They are commonly employed in statistical analysis, data manipulation, linear algebra, and machine learning tasks. With the availability of powerful packages like `matrixStats`, `Matrix`, and `dplyr`, working with matrices in R becomes even more efficient and flexible.
