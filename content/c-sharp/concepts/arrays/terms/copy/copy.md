---
Title: '.Copy()'
Description: 'Copies elements in an array within a certain range.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Copy()`** method in [C#](https://www.codecademy.com/resources/docs/c-sharp) 
copies a range of elements from one array to another array. 

### Syntax

```
//Copies sourceArray to destinationArray
Array.Copy(sourceArray, destinationArray, int length);
```
`.Copy()` is static method of the `Array` object. It takes the arguments; `sourceArray`, 
`destinationArray` and `length` which is specified as an **integer**.
The `sourceArray` is copied, starting from the first element of the array, 
to the `destinationArray`, also starting from its first element.
### Example
The following example initializes the array `sourceArray` and the array
`destinationArray`. Using a `foreach` loop,
the contents of `destinationArray` are printed
to the console:
```
using System;
  public class Example
  {
    public static void Main(string[] args)
    {     
       string[] sourceArray = new string[] { "red", "orange", "yellow", "green", "blue", "indigo", "violet"};
       
       string[] destinationArray = new string[sourceArray.Length];

                                    //sourceArray.Length returns the integer for the third parameter, length. 
                                                                                                          
       Array.Copy(sourceArray, destinationArray, sourceArray.Length);
    
          foreach (string element in destinationArray)
            {
                Console.Write($"{element} ");     
            } 
    }
  }
```
This is what is printed to the console:
```
red orange yellow green blue indigo violet
```


### Codebyte Example
The following codebyte is runnable and shows one of the several
overload functions with the ``Array.Copy()`` method. In this example
the `sourceArray` is copied starting from the third element in the array [2]
and stores elements [2], [3], [4] starting as the first the `destinationArray`.
The remaining elements return 0:  
```
using System;
  public class OverloadExample
  {
    public static void Main(string[] args)
    {     
       int[] sourceArray = new int[] {10, 20, 30, 40, 50, 60, 70};
       
       int[] destinationArray = new int[sourceArray.Length]; 
                                                                                                          
       Array.Copy(sourceArray, 2, destinationArray, 0, 3);
    
          foreach (int element in destinationArray)
            {
                Console.Write($"{element} ");     
            } 
    }
  }
```
This is what is printed to the console:
```
30 40 50 0 0 0
```
