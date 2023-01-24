---
Title: '.Resize()'
Description: 'Updates the size of an existing array.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Resize()`** method changes the number of elements of a one-dimensional array to the specified new size.

## Syntax

```pseudo
// Sets a new size for the specified array
Array.Resize<int>(ref int[] array, int newSize);
```

`.Resize()` is a modifier of the `Array` object.  When used as part of a one-dimensional array, it defines the number of elements acceptable by the array, or redefines the size of an array.  This can be used to both lengthen or shorten the number of elements within a given array.

## Example

The following example :

```cs
using System;

public class Example
{
   public static void Main()
   {
        //Create and initialize an example string array.
        String[] planets = {"Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"};

        //Display the values of the array.
        PrintIndexAndValues(planets);

        //Resize the array to a bigger size (adding three elements).
        Array.Resize(ref planets, planets.Length + 3);

        //Display the values of the new (larger) array.
        PrintIndexAndValues(planets);

        //Resize the array to a smaller size (eight total elements).
        Array.Resize(ref planets, 8);

        //Display the values of the new (smaller) array.
        PrintIndexAndValues(planets);
   }
   
    public static void PrintIndexAndValues(String[] planets)  {
        for(int i = 0; i < planets.Length; i++)
        {
            Console.WriteLine("   [{0}] : {1}", i, planets[i]);
        }
        Console.WriteLine();
    }
}
/*

The string array initially produces the following output:
   [0] : Mercury
   [1] : Venus
   [2] : Earth
   [3] : Mars
   [4] : Jupiter
   [5] : Saturn
   [6] : Uranus
   [7] : Neptune
   [8] : Pluto

After resizing to add three elements to the array, the string array produces the following output:
   [0] : Mercury
   [1] : Venus
   [2] : Earth
   [3] : Mars
   [4] : Jupiter
   [5] : Saturn
   [6] : Uranus
   [7] : Neptune
   [8] : Pluto
   [9] :
   [10] :
   [11] :
   
After resizing to a defined set of eight elements, the string array produces the following output:
   [0] : Mercury
   [1] : Venus
   [2] : Earth
   [3] : Mars
   [4] : Jupiter
   [5] : Saturn
   [6] : Uranus
   [7] : Neptune

*/
```