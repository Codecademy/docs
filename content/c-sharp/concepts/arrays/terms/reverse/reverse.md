---
Title: '.Reverse()'
Description: 'Reverses the sequence of a subset of the elements in the one-dimensional Array.'
Subjects: 
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/build-web-apps-with-asp-net'
---

## Syntax

```pseudo
// Reverses the sequence of a subset of the elements in the one-dimensional Array.

public static void **Reverse** (Array array, int index, int length); 
```
## Example

The following example initializes `myArray` with values, and reverses the sequence:

```cs
using System;

  public class ArrayReverse
  {
    static void Main(string[] args)
    {
      int[] myArray = {0, 1, 2, 3, 4}; //initialize an array

      Array.Reverse(myArray); //reverse items in myArray
        
      for ( int i = myArray.GetLowerBound(0); i <= myArray.GetUpperBound(0); i++ )
        Console.WriteLine( "\t{1}", myArray.GetValue( i ) ); //output 4 3 2 1 0
    }
  }
```
Other arguments (int index, int length) must be used to change the sequence of a subset of elements:

```cs
using System;

  public class ArrayReverse
  {
    static void Main(string[] args)
    {
      int[] myArray = {0, 1, 2, 3, 4}; //initialize an array

      Array.Reverse(myArray, 1, 4); //reverse items in myArray
        
      for ( int i = myArray.GetLowerBound(0); i <= myArray.GetUpperBound(0); i++ )
        Console.WriteLine( "\t{1}", myArray.GetValue( i ) ); // output 0 4 3 2 1
    }
  }
```

## Codebyte Example

```codebyte/js
using System;

  public class ArrayReverse
  {
    static void Main(string[] args)
    {
      int[] myArray = {0, 1, 2, 3, 4}; //initialize an array

      Array.Reverse(myArray); //reverse the sequence of elements in myArray
        
      for ( int i = myArray.GetLowerBound(0); i <= myArray.GetUpperBound(0); i++ )
        Console.WriteLine( "\t{1}", myArray.GetValue( i ) ); //print all elements in myArray
    }
  }
```