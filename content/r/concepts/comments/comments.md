---
Title: 'Comments'
Description: 'A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

A comment is a piece of text within an R program that is not executed. It can be used to provide additional information to aid in understanding the code. It can also serve to "comment out" blocks of code that the programmer doesn't want executed, such as for archival purposes or debugging. Many languages support single line and multi-line comments. Only single-line comments are supported in R.

## Syntax

Comments in R begin with a `#` character. Everything after the `#` on that line will be ignored. The comment can either go at the beginning of the line or immediately after the code that will be executed:

```r
# This is a comment and won't be executed.

print("This is a line of code that will be executed.")

a <- 3 + 5 # comments can also go at the end of a line of code.

# To have a multi-line comment in R,
# multiple '#' characters must be used
# for each subsequent line.
```
