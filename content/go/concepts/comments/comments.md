---
Title: 'Comments'
Description: 'A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
  - 'paths/computer-science'
---

A **comment** is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.

## Single-line Comments

Single-line comments are created using two consecutive forward slashes. The compiler ignores any text after `//` on the same line.

```go
// This line will denote a single-line comment in Go
```

## Multi-line Comments

Multi-line comments are created using `/*` to begin the comment, and `*/` to end the comment. The compiler ignores any text in between:

```go
/*
This is all commented out.
None of it is going to run!
*/
```

Multi-line comments can also be created using `//` to begin each line:

```go
// This is all commented out.
// None of it is going to run!
```

## Doc Comment

Doc comments are used to provide details and descriptions of a program such as the author of the code, the date the code was written, and a description of the program. Multi-line comments can be used to create a doc comment at the top of the file. Below is a sample Doc comment:

```go
// File Name   : hello.go
// Description : This program prints hello world to the display
// Author      : Maheshwaran Dhandapani
// Date        : 11/12/2022
```

## Example

Here's a program with a Doc comment and two single-line comments:

```go
// File Name   : hello.go
// Description : This program prints hello world to the display
// Author      : Maheshwaran Dhandapani
// Date        : 11/12/2022

package main

import "fmt"

// Main function of the program
func main() {
    // Displays some text to the screen
    fmt.Println("Hello World!!!")
}
```
