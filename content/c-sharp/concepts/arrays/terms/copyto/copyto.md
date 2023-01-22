---
Title: '.CopyTo()'
Description: 'Copies a specified number of characters to a specified position in an array'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Elements'
  - 'Search'
CatalogContent:
  - 'learn-c#'
  - 'paths/computer-science'
---

The **`.CopyTo()`** used to copy a specified number of characters from a specified position in this instance to a specified position in an array of Unicode characters.

## Syntax

```pseudo
public void CopyTo (int srcIndex, char[] dest, int desIndex, int count);
```
The index follows a 64-bit integer that represents the index in array at which copying begins.

## Example

The following code example shows how to copy an Array to another Array.

```
// C# .CopyTo Example

using System;

public class SamplesArray
{

   public static void Main()
   {

      // Creates and initializes two new Arrays.
      Array mySourceArray=Array.CreateInstance(typeof(string), 6);
      mySourceArray.SetValue("three", 0);
      mySourceArray.SetValue("napping", 1);
      mySourceArray.SetValue("cats", 2);
      mySourceArray.SetValue("in", 3);
      mySourceArray.SetValue("the", 4);
      mySourceArray.SetValue("barn", 5);
      Array myTargetArray=Array.CreateInstance(typeof(string), 15);
      myTargetArray.SetValue("The", 0);
      myTargetArray.SetValue("quick", 1);
      myTargetArray.SetValue("brown", 2);
      myTargetArray.SetValue("fox", 3);
      myTargetArray.SetValue("jumps", 4);
      myTargetArray.SetValue("over", 5);
      myTargetArray.SetValue("the", 6);
      myTargetArray.SetValue("lazy", 7);
      myTargetArray.SetValue("dog", 8);

      // Displays the values of the Array.
      Console.WriteLine("The target Array contains the following (before and after copying):");
      PrintValues(myTargetArray, ' ');

      // Copies the source Array to the target Array, starting at index 6.
      mySourceArray.CopyTo(myTargetArray, 6);

      // Displays the values of the Array.
      PrintValues(myTargetArray, ' ');
   }

   public static void PrintValues(Array myArr, char mySeparator)
   {

      System.Collections.IEnumerator myEnumerator = myArr.GetEnumerator();
      int i = 0;
      int cols = myArr.GetLength(myArr.Rank - 1);
      while (myEnumerator.MoveNext())
      {
         if (i < cols)
         {
            i++;
         }
         else
         {
             Console.WriteLine();
             i = 1;
         }
         Console.Write("{0}{1}", mySeparator, myEnumerator.Current);
      }
      Console.WriteLine();
   }
}
/*
This code produces the following output.

The target Array contains the following (before and after copying):
 The quick brown fox jumps over the lazy dog
 The quick brown fox jumps over three napping cats in the barn
*/

```