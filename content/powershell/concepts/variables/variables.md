---
Title: 'Variables'
Description: 'Variables are a way to store and manipulate data. There are multiple types including environment variables which can be created in variety of ways.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'PowerShell'
Tags:
  - 'Variables'
  - 'Data Types'
  - 'Environment Variables'
  - 'Variable Types'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

A **variable** is a location in computer memory used to store data, usually to be referred to and manipulated in a program. Variables in PowerShell can store the results of commands and expressions.

## Using a Variable

Variables in PowerShell are referenced using a dollar sign `$` followed by a valid variable name.

```PowerShell
PS > $pi
3.14
```

## Creating a Variable

To create a variable, a variable reference is followed by an equal sign `=` and the value to be assigned. 

```PowerShell
$my_string_variable = "Hello, World!"
```

Variables names are NOT case-sensitive and can include spaces and special characters. The convention is to use only alphanumeric characters and the underscore `_` character.

## Variable Types

PowerShell dynamically assigns a type to a variable depending on the value assigned to it. `.GetType().Name` can be appended to a variable reference to get that variable’s data type.

```PowerShell
PS > $my_string_variable.GetType().Name
String
```

## Constrained Variables

A certain type can be enforced onto a variable via casting. To create a constrained variable, specify the type in brackets before the variable reference.

```PowerShell
PS > [Int]$age = 25
PS > $age
25

PS > [Int]$age = "twenty five" # Results in an error
Cannot convert value "age" to type "System.Int32". Error: "Input string was not in a correct format."
```

## Creating Multiple Variables

Multiple variables can be created with one statement using either the same value for all variables or multiple values.

```PowerShell
$i = $j = $k = 0 # Same value
$number, $color, $bool = 25, "red", $false # Multiple values
```

## Environment Variables

Environment Variables store information related to the current environment like the Operating System and user sessions. These global variables can be accessed across commands and programs.

Running the `Get-ChildItem` cmdlet on the `Env:` drive lists all the environment variables. Alternatively, specifying the exact environment variable gets its value. 

```PowerShell
Get-ChildItem Env: # Lists all environment variables
(Get-Childitem Env:EIN_IMAGE).Value # Prints value of EIN_IMAGE
$Env:EIN_IMAGE # Shorter version to print value of EIN_IMAGE
```
