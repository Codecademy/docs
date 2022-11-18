
---
Title: 'Variables'
Description: 'Variables are used to store numbers, strings, true/false boolean states, or objects based on their type when declaring them'
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

Variables are used to store user information like numbers, strings or true/false state to be used in the program later on.

## Difference from constants 

Unlike constants, when declaring a variable, its value can be reassigned later on but with restriction to be similar to the data type when initialized.

### Example using pseudo

This is acceptable

```pseudo
declaring an int variable 
use it in a while loop
reassign it to zero after
```

This will result in an error

```pseudo
declaring an int variable 
use it in a while loop
reassign it to "Codecaedmy" after
```

## syntax explination

```Go
var 'variable name' 'var type'
```

first begin with the `var` keyword followed by the name of the variable, and at the end the variable type, each of these are seperated by spaces.

### variable names should:

- begin with a letter 
- must not contain special characters (only letters and digits)
- must not be a GO keyword 
- names are case sensitive
 
### some of the basic types are:

- int
- bool
- string

## Declaration 

To declare a variable you have multiple ways with syntax nearly similar to some programming languages.

### initilizing after declaring

this way is used if a group of variables is needed but they will be assigned values later in the program

#### Example

```Go
var numbers int
var nameOfProgrammer string
...
...
numbers = 100
nameOfProgrammer = "Codecademy Learner"
```

### initilizing with declaring

this way is used to assign values directly when defining a variable

#### Example

```Go
var state bool = true
var nameOfProgrammer string = "Codecademy Learner"
```

### initilizing using type inference

this way let the compiler assign the type for the input without declaring it

#### Example

```Go
var piNumber = 3.14
var myName = "Abdulrahman"
``` 

### fast initilizing 

this way skip almost all the syntax and only needs the name of the variable followed by ':='

```Go
dontMove := false
```

### multiple variable initilizing

this way used to declare more than one variable in the same line by seperate them with commas ','

```Go
var numbers, name = 100, "Codecademy User"
user, activeState := "Abdulrahman", true
``` 





