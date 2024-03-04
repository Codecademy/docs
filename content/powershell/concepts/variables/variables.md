---
Title: 'Variables'
Description: 'Variables are a way to store and manipulate data. There are multiple types of variables which can be created and used in a variety of ways.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Bash/Shell'
Tags:
  - 'Data Types'
  - 'Variables'
  - 'Variable Types'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

A **variable** is a location in computer memory used to store data, usually to be referred to and manipulated in a program. Variables in PowerShell can store the results of commands and expressions.

## Using a Variable

Variables in PowerShell are referenced using a dollar sign `$` followed by a valid variable name.

```shell
PS > $pi = 3.14
PS > $pi
3.14
```

## Creating a Variable

To create a variable, a variable reference is followed by an equal sign `=` and the value to be assigned.

```shell
$my_string_variable = "Hello, World!"
```

Variables names are not case-sensitive and can include spaces and special characters. The convention is to use only alphanumeric characters and the underscore `_` character.

## Variable Types

PowerShell dynamically assigns a type to a variable depending on the value assigned to it. `.GetType().Name` can be appended to a variable reference to get that variable’s data type.

```shell
PS > $my_string_variable.GetType().Name
String
```

## Constrained Variables

A constrained variable is when a certain type can be enforced onto a variable via casting. To create a constrained variable, specify the type in brackets before the variable reference.

```shell
PS > [Int]$age = 25
PS > $age
25

PS > [Int]$age = "twenty five" # Results in an error
Cannot convert value "age" to type "System.Int32". Error: "Input string was not in a correct format."
```

## Creating Multiple Variables

Multiple variables can be created with one statement using either the same value for all variables or multiple values.

```shell
# Same value
$i = $j = $k = 0

# Multiple values
$number, $color, $bool = 25, "red", $false
```
