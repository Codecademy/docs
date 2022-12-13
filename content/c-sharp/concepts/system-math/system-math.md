---
Title: 'System.Math'
Description: 'Explanation of the Math class contained within the System namespace of Microsofts .NET platform.'
Subjects: 
- 'Code Foundations'
- 'Computer Science'
Tags: 
- 'Libraries'
- 'Arithmetic'
- 'Functions'
CatalogContent: 
- 'learn-c-sharp'
- 'paths/build-web-apps-with-asp-net'
---

When writing code in C#, common mathematical functions can be performed using the **System.Math** class. System.Math is a static class that is included within .NET as part of the `System` namespace. 

<details>
<summary>Click here to learn more about .NET</summary>
<a href="https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet">.NET</a> is a free, cross-platform, open source developer platform created by Microsoft.
</details>

## Syntax

The **using directive** `using System;` can be included within a .cs file to gain access to the Math class.

The Math class is static and is accessed without needing to create an instance.

## Example

```cs
//include the System namespace within xxx.cs
using System;

//elsewhere within xxx.cs
int x = Math.Pow(4,2); //raise 4 to the 2nd power

//expected: x = 16
```

In cases where access to System.Math is required but access to the entire System namespace is not. The following syntax can be used instead.

```cs
//within yyy.cs

int x = System.Math.Floor((double)3/2); //round down the result of 3/2

//expected: x = 1
```

A list of popular System.Math functions and properties can be found in the table below: