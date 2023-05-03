---
Title: 'Strings'
Description: 'Strings in R are a fundamental data type used for storing text data.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'R'
  - 'Strings'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

Strings in R are a fundamental data type used for storing text data. They are created using quotation marks, either single (') or double ("), and can contain any combination of letters, numbers, and symbols. The sections that follow will cover the syntax for creating and manipulating strings in R.

## Syntax

To create a string in R, simply enclose the text you want to use in quotation marks `' '`/ `" "`. Here are some examples:

```r
# Single quotes
my_string_1 <- 'Hello, World!'

# Double quotes
my_string_2 <- "This is a string."
```

## Concatenating Strings

To combine multiple strings together, you can use the `paste()` function:

```r
# Concatenating two strings
string_1 <- "Hello"
string_2 <- "world"
my_string <- paste(string_1, string_2)
```

You can also use the `paste0()` function, which concatenates strings without any separator:

```r

# Concatenating two strings without a separator
string_1 <- "Hello"
string_2 <- "world"
my_string <- paste0(string_1, string_2)
```

## Subsetting Strings

To extract a specific portion of a string, you can use square brackets `[]` and specify the starting and ending indices:

```r
my_string <- "Hello, World!"
substring <- my_string[1:5]
# Output: "Hello"

```
You can also use the substr() function to extract a substring from a string:

```r
my_string <- "Hello, World!"
substring <- substr(my_string, start = 1, stop = 5)
# Output: "Hello"

```

## Modifying Strings

To modify a string, you can use various functions available in R. For example, you can convert a string to uppercase or lowercase using the `toupper()` and `tolower()` functions, respectively:

```r
my_string <- "Hello, World!"
uppercase_string <- toupper(my_string)
# Output: "HELLO, WORLD!"

lowercase_string <- tolower(my_string)
# Output: "hello, world!"
```

You can also remove whitespace from the beginning and/or end of a string using the `trimws()` function:

```r
my_string <- "   Hello, World!   "
trimmed_string <- trimws(my_string)
# Output: "Hello, World!"
```

## Calculating the Length of a String
In R, the `nchar()` function is used to calculate the length of a string:

```r
# Define a string variable
my_string <- "Hello, World!"

# Calculate the length of the string
string_length <- nchar(my_string)
# Output: 13

