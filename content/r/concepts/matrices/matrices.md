---
Title: 'Matrices'
Description: 'Matrices in R are a fundamental data type used for storing two dimensional tabular data with rows and columns.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'R'
  - 'Matrices'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

In R, **Matrices** are rectangular data structures that contain elements of the same data type arranged in rows and columns. They provide a convenient way to store and manipulate structured data, making them widely used in various data analysis and statistical operations. \par

Matrices in R are created using the `matrix()` function, which takes the data elements and dimensions as input parameters. The elements can be numeric, character, logical, or any other data type supported by R. The dimensions of a matrix define the number of rows and columns, allowing for organized storage and efficient computations. \par

Once created, matrices in R offer a wide range of operations and functions. You can perform basic arithmetic operations, such as addition, subtraction, multiplication, and division, on matrices of compatible dimensions. R also provides functions for matrix transposition, subsetting, row and column manipulation, and various matrix algebra operations like determinant calculation, inverse computation, and eigenvalue extraction.


## Syntax

To create a matrix in R, simply use the 'matrix()' method. Here are some examples:

```r
# Create a matrix with 8 values stored in a tabular format with 2 rows and 4 columns
myMatrix <- matrix(c(1,2,3,4,5,6,7,8),nrow=2,ncol=4)

# Print the created matrix
myMatrix

# Create matrix with string values
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

# Print the created matrix
myMatrix2
```

## Access Matrix Items

We can access the matrix items by using [ ] brackets where the first parameter in the bracket specifies the row-position, while the second specifies the column-position: 

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

myMatrix2[1, 2] 
# Output: "washington"
```

The whole row can be accessed if by specifying a comma after the number in the bracket:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

myMatrix2[1, ] 
# Output: [1] "tokyo"      "washington"
```

The whole column can be accessed if you specify a comma before the number in the bracket:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

myMatrix2[, 2] 
# Output: [1] "washington" "paris"     
```
## Accessing Multiple Rows

Multiple rows can be accessed by using the c() function:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

myMatrix2[c(1,2),] 
# Output:  	[,1]    [,2]        
# 	  [1,] "tokyo" "washington"
#	  [2,] "delhi" "paris"
```

The `substr()` function extracts a substring from a string:

```r
my_string <- "Hello, World!"
substring <- substr(my_string, start = 1, stop = 5)
# Output: "Hello"
```

## Adding and Removing Rows and Columns

We may use the cbind() function to add more columns in a Matrix:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)
newmatrix <- cbind(myMatrix2, c("london", "berlin"))

# Print the new matrix
newmatrix 
```
We use the 'rbind()' function to add more rows in a Matrix:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

newmatrix <- rbind(myMatrix2, c("Moscow","Brasília","Ottawa"))

# Print the new matrix
newmatrix 
```

We may use the 'c()' function to remove rows and columns:
```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

#Remove the first row and the first column
myMatrix2 <- myMatrix2[-c(1), -c(1)]

myMatrix2  
```

## Check if an Item Exists
To find out if a specified item is present in a matrix, use the '%in%' operator:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)

"delhi" %in% thismatrix 
"cairo" %in% thismatrix 
```

# Dimension and Length of Matrix
The dim() function is used to find the number of rows and columns in a Matrix:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)
dim(myMatrix2) 
```
The length() function can also be used to find the dimension of a Matrix:

```r
myMatrix2 <- matrix(c("tokyo", "delhi", "washington", "paris"), nrow = 2, ncol = 2)
length(myMatrix2) 
```
# Mathematical Operations on Matrices

Addition, Subtraction, Multiplication and Division can also be performed on Matrices in R.

```r
# Create two 2x3 matrices.
matrix1 <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 3)
print(matrix1)

matrix2 <- matrix(c(7, 8, 9, 10, 11, 12), nrow = 3)
print(matrix2)

# Add the matrices.
result1 <- matrix1 + matrix2

# Subtract the matrices
result2 <- matrix1 - matrix2

# Multiply the matrices.
result3 <- matrix1 * matrix2

# Divide the matrices
result4 <- matrix1 / matrix2
```

## Pro-Tip💡 
Matrices are often used to represent data sets or mathematical models in R. They are commonly employed in statistical analysis, data manipulation, linear algebra, and machine learning tasks. With the availability of powerful packages like `matrixStats`, `Matrix`, and `dplyr`, working with matrices in R becomes even more efficient and flexible.
