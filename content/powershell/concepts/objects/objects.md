---
Title: 'Objects'
Description: 'Objects are made up of properties and methods. PowerShell allows us to create custom objects and add our own variables and functions to them.'
Subjects:
  - 'Computer Science'
  - 'PowerShell'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Classes'
  - 'Data Types'
  - 'Data Structures'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

Everything in PowerShell is an **object**. An object is a combination of variables and functions. Each object has:

- **Properties**: variables that describe the object (characteristics)
- **Methods**: functions that describe how to use the object (actions)

Each object is an instance of a blueprint called a *type*, or *[class](https://en.wikipedia.org/wiki/Class_(computer_programming))*. 

## Getting Properties and Methods of an Object

All information associated with an object is called a member. The `Get-Member` cmdlet reveals the member of an object – properties, methods, and so on. It also shows the type of an object.

```PowerShell
"Codecademy" | Get-Member
```

## Object Properties

Properties, or attributes, are characteristics of an object. String objects, for example, have a property called `Length` which holds the number of characters in a string.

```PowerShell
PS > "hello".Length # "hello" has 5 characters
5
```

The `Get-Member` cmdlet can be utilized with the `MemberType` parameter to only show the properties of an object. Consider a script file:

```PowerShell
PS > Get-ChildItem .\script.ps1 | Get-Member -MemberType Property # Shows all properties of the script
   
  TypeName: System.IO.FileInfo

Name              MemberType Definition
----              ---------- ----------
Attributes        Property   System.IO.FileAttributes Attributes {get;set;}
CreationTime      Property   datetime CreationTime {get;set;}
CreationTimeUtc   Property   datetime CreationTimeUtc {get;set;}
Directory         Property   System.IO.DirectoryInfo Directory {get;}
DirectoryName     Property   string DirectoryName {get;}
Exists            Property   bool Exists {get;}
Extension         Property   string Extension {get;}
FullName          Property   string FullName {get;}
IsReadOnly        Property   bool IsReadOnly {get;set;}
LastAccessTime    Property   datetime LastAccessTime {get;set;}
LastAccessTimeUtc Property   datetime LastAccessTimeUtc {get;set;}
LastWriteTime     Property   datetime LastWriteTime {get;set;}
LastWriteTimeUtc  Property   datetime LastWriteTimeUtc {get;set;}
Length            Property   long Length {get;}
LinkTarget        Property   string LinkTarget {get;}
Name              Property   string Name {get;}

PS > (Get-ChildItem .\script.ps1).CreationTime # Prints the date when the script was created
Thursday, January 19, 2023 3:34:43 AM
```

## Object Methods

Methods are the actions an object can take. One of the methods of a String object, for example, is `Contains()`. This method returns `True` if a string contains the specified substring, otherwise `False`.

```PowerShell
PS > $my_string = "codecademy"
PS > $my_string.Contains("code")
True
```

`MemberType` parameter of the `Get-Member` cmdlet can be modified to show only the methods of an object.

```PowerShell
$dog | Get-Member -MemberType Method # Shows all methods of the dog object
```

## Creating a Custom Object

PowerShell allows the creation of custom objects. To create a custom object called `dog`, we use the `New-Object` cmdlet with the `PSCustomObject` type name.

```PowerShell
$dog = New-Object -TypeName PSCustomObject
```

By default, new custom objects have no properties and four methods.

```PowerShell
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

```PowerShell
$dog | Add-Member -MemberType NoteProperty -Name "Name" -Value "Rufus"
```

`-Name` is used to specify the name of the property and `-Value` is used to specify the value to be assigned.

### Adding Methods

Adding methods to custom objects is similar to adding properties but `ScriptMethod` is specified for the `MemberType` parameter. A piece of code encapsulated within curly braces `{ }` called `ScriptBlock` is also needed.

In the example below, a script block called `speak` is first defined and then added as a method to the `dog` custom object.

```PowerShell
$speak = {
    "Woof!"
}

$dog | Add-Member -MemberType ScriptMethod -Name "speak" -Value $speak
```

### Using a Hashtable

An alternative method to creating a custom object is by utilizing a hashtable. A hashtable defines multiple key-value pairs which can be used to easily add properties to a custom object.

```PowerShell
$dog = [PSCustomObject]@{ # Creates a custom object called dog
    Name = "Rufus" # Adds a Name property with "Rufus" as its value
    Age = 10       # Adds a Age property with 10 as its value
}
```
