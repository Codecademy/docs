---
Title: 'Objects'
Description: 'Objects are made up of properties and methods. PowerShell allows developers to create custom objects and add variables and functions to them.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Bash/Shell'
Tags:
  - 'Classes'
  - 'Data Types'
  - 'Data Structures'
  - 'Hash Maps'
  - 'Methods'
  - 'Objects'
  - 'OOP'
  - 'Properties'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

Everything in PowerShell is an **object**. An object is a combination of variables and functions. Each object has:

- Properties: Variables that describe the object (characteristics).
- Methods: Functions that define how to use the object (actions).

Each object is an instance of a blueprint called a type, or [class](https://www.codecademy.com/resources/docs/general/class).

## Getting Properties and Methods of an Object

All information associated with an object is called a member. The `Get-Member` cmdlet reveals the members of an object, such as properties and methods. It also shows the type of an object.

```shell
"Codecademy" | Get-Member
```

## Object Properties

Properties are also called attributes and are characteristics of an object. The `Get-Member` cmdlet can be utilized with the `MemberType` parameter to only show the properties of an object. Consider a `String` object as an example:

```shell
PS > $my_string = "Codecademy"
PS > $my_string | Get-Member -MemberType Property # Shows all properties of the String object

  TypeName: System.String

Name   MemberType Definition
----   ---------- ----------
Length Property   int Length {get;}
```

`String` objects have a property called `Length`, which holds the number of characters in a string.

```shell
PS > $my_string.Length # "Codecademy" has 10 characters
10
```

## Object Methods

Methods are the actions an object can take. One of the methods of a `String` object, for example, is `Contains()`. This method returns `True` if a string contains the specified substring, otherwise `False`.

```shell
PS > $my_string.Contains("Code")
True
```

The `MemberType` parameter of the `Get-Member` cmdlet can be modified to show only the methods of an object.

```shell
# Shows all methods of the String object
$my_string | Get-Member -MemberType Method
```

## Creating a Custom Object

PowerShell allows the creation of custom objects. To create a custom object called `dog`, we use the `New-Object` cmdlet with the `PSCustomObject` type name.

```shell
$dog = New-Object -TypeName PSCustomObject
```

By default, new custom objects have no properties and four methods.

```shell
PS > $dog | Get-Member
  TypeName: System.Management.Automation.PSCustomObject

Name        MemberType Definition
----        ---------- ----------
Equals      Method     bool Equals(System.Object obj)
GetHashCode Method     int GetHashCode()
GetType     Method     type GetType()
ToString    Method     string ToString()
```

### Adding Properties

To add properties to custom objects, use the `Add-Member` cmdlet. A type of member must be specified using the `-MemberType` parameter. For a simple key-value pair, we use `NoteProperty` but there is also `AliasProperty`, `CodeProperty`, and `ScriptProperty`.

```shell
$dog | Add-Member -MemberType NoteProperty -Name "DogName" -Value "Rufus"
```

`-Name` is used to specify the name of the property and `-Value` is used to specify the value to be assigned.

### Adding Methods

Adding methods to custom objects is similar to adding properties but `ScriptMethod` is specified for the `MemberType` parameter. A piece of code encapsulated within curly braces `{ }` called `ScriptBlock` is also needed.

In the example below, a script block called `speak` is first defined and then added as a method to the `dog` custom object.

```shell
$speak = {
    "Woof!"
}

$dog | Add-Member -MemberType ScriptMethod -Name "speak" -Value $speak
```

### Using a Hashtable

An alternative method to creating a custom object is by utilizing a hashtable. A hashtable defines multiple key-value pairs which can be used to easily add properties to a custom object.

```shell
# Creates a custom object called dog
$dog = [PSCustomObject]@{
    # Adds a Name property with "Rufus" as its value
    Name = "Rufus"

    # Adds an Age property with 10 as its value
    Age = 10
}
```
