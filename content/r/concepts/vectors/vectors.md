---
Title: 'Vectors'
Description: 'Vectors are used to store multiple values of the same data type.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Vectors'
  - 'Variables'
  - 'Integers'
  - 'Booleans'
  - 'Strings'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

**Vectors** are used to store multiple values of the same [data type](https://www.codecademy.com/resources/docs/r/data-types) for later use. Unlike other programming languages, vectors in R are not zero-indexed; they start from 1.

## Creating a Vector

In R, vectors are made with the ‘c()’ function to combine different elements of the same type together.

## Vector Types

Vectors can be of different datatypes.

```r
# This creates a vector of names (character vector)
names <- c('Adam','John','Walter')
```

```r
# This creates a vector of integers
marks <- c(90,87,100,79,91)
```

Apart from the 'c()' function, the semicolon (`:`) can be used to create a vector containing a range of numbers:

```r
# This vector contains all the numbers between 1 and 10
numbers <- 1:10
numbers # output [1,2,3,4,5,6,7,8,9,10]
```

In R, character vectors can contain alphanumeric values and special characters.

```r
# This vector contains both alphabetic and numeric values, and would be a character vector type
alphanumerics <- c('water','fire','ice',90)
alphanumerics # Output: ['water','fire','ice','90']
```

## Accessing Vector Elements

There is need to access the elements in vector to perform operations on each element. The most common way to access the vector elements is by using the subscript operator [].

```r
# Accessing elements with an index number as subscript.
numbers <- c(65,49,55,36,126)
numbers[2] # Output: 49
number[4] # Output: 36
```

Vector elements can also be accessed by logical indexing

```r
# Accessing vector elements using logical indexing.
numbers <- c(1,2,3,4,5)
numbers[numbers<2]
# Output: 1
```

## Updating a Vector

A vector element can be updated just by replacing the value using the subscript operator [] by specifying the index.

```r
numbers <- c(2,5,1,7,9)

numbers[3] = 8
numbers # Output: [2,5,8,7,9]
numbers[1] = 0
numbers # Output: [0,5,8,7,9]
```
To start, the third element in `numbers` is updated to 8. Next, the first element is updated to 0.


## Vector Recycling

Vector recycling is a process in which two vectors are involved in an operation where the operation needs the vectors to be of same length and the two vectors are of different length. In those cases, R repeats the elements of shorter vector to match the length of longer vector.

Example for vector recycling using addition:

Vector addition requires the two vectors to be of same length.

Case 1: When the two vector lengths are equal.

```r
numbers1 <- c(1,2,3,4,5)
numbers2 <- c(3,4,5,6,7)
sum <- numbers1 + numbers2
# Output: [4,6,8,10,12]
```

Case 2: When the vector lengths are not the same.

```r
numbers1 <- c(1,2,3,4,5,6)
numbers2 <- c(3,4)
sum <- numbers1 + numbers2 
# Output [4,6,6,8,8,10]
```
Here 1 is added with 3 and then 2 is added with 4. Now numbers2 vector end is reached.

Now to complete the addition operation R repeats the smaller vector till the larger vector end is reached.

Therefore, 3 is added with 3 and 4 is added with 4 then 5 is added with 3 and 6 is added with 4.4
This process is called as vector recycling.