---
Title: 'Functions'
Description: 'A function is a set of instructions that are executed together whenever invoked via its name. Parameters and importing modules can further enhance the usage of functions.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Bash/Shell'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

A **function** is a set of statements that are executed when the function name is called. Functions allow programmers to break down a problem into smaller chunks and help define a particular task. A couple of the major reasons for using functions are readability and reusability.

## Function Definition

The syntax for defining functions in PowerShell is:

```pseudo
Function <Name>{
  <statement 1>
  <statement 2>
  <statement 3>
  ...
}
```

The `Name` of the function is used to invoke the function. Statements are written between the curly brackets `{ }`.

## Invoking a Function

To invoke or call a function, simply use the function's name.

```shell
Function StatusDisplay{
  $date = get-date -format "MM/dd/yyyy HH:mm:ss"
  write-host "Script is running at $date"
}

StatusDisplay
# Output: Script is running at 02/27/2023 06:24:04
```

## Parameters and Arguments

Parameters can be added to the function declaration to make them more flexible. The keyword `param` is used to declare all parameters in the first function statement.

```pseudo
Function <Name>{
  param (<parameter 1>, <parameter 2>, ...)
  <statements>
  ...
}
```

To invoke a function with arguments, the values passed to the function as parameters, list arguments after the function call:

```pseudo
<Name> <argument 1> <argument 2> ...
```

### Example

```shell
Function StatusDisplay{
  param ($filename, $status)
  $date = get-date -format "MM/dd/yyyy HH:mm:ss"
  write-host "$filename is running $status at $date"
}

StatusDisplay "server.ps1" "normal"
# Output: server.ps1 is running normal at 02/27/2023 22:57:29
```

## Default Parameters

A function will use default parameters unless arguments are explicitly provided in the function call. Default parameters are defined by assigning values to parameters:

```pseudo
Function <Name>{
  param (<parameter 1> = <value 1>, <parameter 2> = <value 2>, ...)
  <statements>
  ...
}
```

### Example

```shell
Function StatusDisplay{
  param ($filename, $status = "normal")
  $date = get-date -format "MM/dd/yyyy HH:mm:ss"
  write-host "$filename is running $status at $date"
}

StatusDisplay "server.ps1"
# Output: server.ps1 is running normal at 02/27/2023 22:57:29
```

## Importing Functions

Functions (as well as variables, cmdlets, and more) can be imported from another script `.ps1` file using the `Import-Module` cmdlet. Its syntax is:

```pseudo
Import-Module <Path to file containing functions>
```

### Example

Assume there's a function called `StatusDisplay` in a script file called `my_functions.ps1`. All modules including the `StatusDisplay` function can be imported into another script like so:

```shell
Import-Module .\my_functions.ps1

StatusDisplay
# Output: Script is running at 02/28/2023 12:29:16
```
