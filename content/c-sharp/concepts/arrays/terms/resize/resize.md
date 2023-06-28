---
Title: '.Resize()'
Description: 'Updates the size of an existing array.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Collections'
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

`.Resize()` is a method of the `Array` object. When used with a one-dimensional array, it defines the number of elements acceptable by the array, or redefines the size of an array. This can be used to both lengthen or shorten the number of elements within a given array.

## Example

The following example will conceptualize how the `.Resize()` method functions within an array.

```cs
using System;

public class Example
{
   public static void Main()
   {
        // Martians have intercepted a broadcast of the musical album, Jeff Wayne's "War of the Worlds", and they love it.  The Martians have created an array of the songs they were able to intercept.
        String[] WaroftheWorlds = {"The_Eve_of_the_War", "Horsell_Common_and_the_Heat_Ray", "The_Artilleryman_and_the_Fighting_Machine", "Forever_Autumn", "Thunder_Child", "The_Red_Weed_(Part_1)", "The_Spirit_of_Man", "The_Red_Weed_(Part_2)", "The_Artilleryman_Returns", "Brave_New_World"};
        Console.WriteLine("Broadcast from Earth:");
        PrintUlla(WaroftheWorlds);

        // The Martians know that there are still three songs on the album, but they do not know what these songs are called.  Instead, they resize their array to set empty placeholders for these songs.
        Array.Resize(ref WaroftheWorlds, WaroftheWorlds.Length + 3);
        Console.WriteLine("Complete Broadcast (Will Receive Soon):");
        PrintUlla(WaroftheWorlds);

        // The Martians favorite part of the album is really where they triumph over humanity. They decide that this part of the array is their favorite, and resize the array to only include the first five songs.
        Array.Resize(ref WaroftheWorlds, 5);
        Console.WriteLine("Invasion Plan:");
        PrintUlla(WaroftheWorlds);
   }

    public static void PrintUlla(String[] WaroftheWorlds)
    {
        for(int i = 0; i < WaroftheWorlds.Length; i++)
        {
            Console.WriteLine("   [{0}] : {1}", i, WaroftheWorlds[i]);
        }
        Console.WriteLine();
    }
}
```

The example above will return the following output:

```shell
Broadcast from Earth:
   [0] : The_Eve_of_the_War
   [1] : Horsell_Common_and_the_Heat_Ray
   [2] : The_Artilleryman_and_the_Fighting_Machine
   [3] : Forever_Autumn
   [4] : Thunder_Child
   [5] : The_Red_Weed_(Part_1)
   [6] : The_Spirit_of_Man
   [7] : The_Red_Weed_(Part_2)
   [8] : The_Artilleryman_Returns
   [9] : Brave_New_World

Complete Broadcast (Will Receive Soon):
   [0] : The_Eve_of_the_War
   [1] : Horsell_Common_and_the_Heat_Ray
   [2] : The_Artilleryman_and_the_Fighting_Machine
   [3] : Forever_Autumn
   [4] : Thunder_Child
   [5] : The_Red_Weed_(Part_1)
   [6] : The_Spirit_of_Man
   [7] : The_Red_Weed_(Part_2)
   [8] : The_Artilleryman_Returns
   [9] : Brave_New_World
   [10] :
   [11] :
   [12] :

Invasion Plan:
   [0] : The_Eve_of_the_War
   [1] : Horsell_Common_and_the_Heat_Ray
   [2] : The_Artilleryman_and_the_Fighting_Machine
   [3] : Forever_Autumn
   [4] : Thunder_Child
```

## Codebyte Example

The following executable example of the `.Resize()` method initializes an array `numbers` and then doubles the length of it.

```codebyte/csharp
using System;

public class ResizeExample
{
    public static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };

        Console.WriteLine(numbers.Length);

         // Resize the array to double its length
        Array.Resize(ref numbers, numbers.Length * 2);

        Console.WriteLine(numbers.Length);
    }
}
```
