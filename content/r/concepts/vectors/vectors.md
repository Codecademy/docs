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

## Vector Types

Atomic vectors are made with the ‘c()’ function to combine different elements of the same type together:

```pseudo
atomic_vector <- c(element_1, element_2, ... element_N)
```

## Vector Types

Vectors can be of different datatypes.

## Examples

The following atomic vectors are created with the `c()` function:

Recursive vectors can have elements of any data type and is created with the `list()` function:  

## Examples

The following atomic vectors are created with the `c()` function:

```r
# Character vector
names <- c('Adam', 'John', 'Walter')
# Integer vector
marks <- c(90, 87, 100, 79, 91)
# Logical vector
booleans <- c(TRUE, FALSE, TRUE)
```

```r
# This creates a vector of integers
marks <- c(90,87,100,79,91)
```


Apart from the 'c()' function, the colon operator (`:`) can be used to create a vector containing a range of numbers:

```r
# This vector contains all the numbers between 1 and 10
numbers <- 1:10
numbers
# Output: [1] 1 2 3 4 5 6 7 8 9 10
```

In R, character vectors can contain alphanumeric values and special characters.

```r
# This vector contains both alphabetic and numeric values, and would be a character vector type
alphanumerics <- c('water', 'fire', 'ice', 90)
alphanumerics
# Output: [1] "water" "fire" "ice" "90"
```

## Accessing Vector Elements

There is need to access the elements in vector to perform operations on each element. The most common way to access the vector elements is by using the subscript operator [].

```r
# Accessing elements with an index number as subscript.

numbers <- c(65, 49, 55, 36, 126)
numbers[2]
numbers[4]


The output would look like this:

# Output: [1] 49
# Output: [1] 36

```
Vector elements can also be accessed by logical indexing

```r
# Accessing vector elements using logical indexing.
numbers <- c(1, 2, 3, 4, 5)
numbers[numbers < 4]
# Output: [1] 1 2 3
```

## Updating a Vector

Vector elements can be updated by specifying the index with the subscript operator (`[]`) and replacing with the new value:

```r
numbers <- c(2, 5, 1, 7, 9)
cat("Original vector: ", numbers, "\n")
numbers[3] = 8
cat("Third element changed: ", numbers, "\n")
numbers[1] = 0
cat("First element changed: ", numbers)
```
To start, the third element in `numbers` is updated to 8. Next, the first element is updated to 0.


## Vector Recycling

Vector recycling is a process in which two vectors of different lengths are operated upon such that the elements of the shorter vector are repeated to match the length of the longer vector.

### Example
The following example presents two cases of vector recycling using addition, which requires the two vectors to be equal in length.

Vector addition requires the two vectors to be of same length.

Case 1: When the two vector lengths are equal:

```r
numbers_1 <- c(1, 2, 3, 4, 5)
numbers_2 <- c(3, 4, 5, 6, 7)
sum <- numbers_1 + numbers_2
sum
# Output: [1] 4 6 8 10 12
```

Case 2: When the vector lengths are unequal:

```r
numbers_1 <- c(1, 2, 3, 4, 5, 6)
numbers_2 <- c(3, 4)
sum <- numbers_1 + numbers_2
sum
# Output: [1] 4 6 6 8 8 10
```
Here, the first two elements of `numbers_1` are added to the first, and only, two elements of `numbers_2`. Then, to complete the addition operation, R repeats (or recycles) the elements of the smaller `numbers_2` vector (`3` and `4`) until the end of `numbers_1` is reached.