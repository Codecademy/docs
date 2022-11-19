
---
Title: 'Variables'
Description: 'Variables are used to store numbers, strings, true/false boolean states, or objects based on their type when declaring them.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Booleans'
  - 'Strings'
  - 'Integers'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

## Definition

Variables are used to store data such as numbers, strings, or Booleans in memory for later use.

## Difference From Constants 

Unlike constants, when declaring a variable, its value can be reassigned later on but with restriction that the new value's data type is the same as the data type when initialized.

### Pseudocode Example

This is acceptable

```pseudo
declare an int variable
use it in a while loop
reassign it to zero after
```

This will result in an error

```pseudo
declare an int variable
use it in a while loop
reassign it to "Codecaedmy" after
```

## Syntax

```Go
var 'variable name' 'var type'
```

Begin with the `var` keyword followed by the name of the variable, and at the end the variable type. Each of these are separated by spaces.

Variable names should:

- Begin with a letter. 
- Must not contain special characters, only letters and digits.
- Must not be a Go keyword. 
- Names are case sensitive.
 
Some of the basic types are:

- int
- bool
- string

## Declaration 

To declare a variable you have multiple ways with syntax similar to other programming languages.

### Initializing After Declaring

This way is used if a group of variables is needed but they will be assigned values later in the program.

#### Example

```Go
var numbers int
var nameOfProgrammer string
numbers = 100
nameOfProgrammer = "Codecademy Learner"
```

### Initializing With Declaring

This way is used to assign values directly when defining a variable.

#### Example

```Go
var state bool = true
var nameOfProgrammer string = "Codecademy Learner"
```

### Initializing Using Type Inference

This way lets the compiler assign the type for the input without declaring it.

#### Example

```Go
var piNumber = 3.14
var myName = "Abdulrahman"
``` 

### Fast Initializing 

This way skips almost all the syntax and only needs the name of the variable followed by `:=`.

```Go
dontMove := false
```

### Multiple Variable Initializing

This way used to declare more than one variable in the same line by separating them with commas `,`.

```Go
var numbers, name = 100, "Codecademy User"
user, activeState := "Abdulrahman", true
``` 





