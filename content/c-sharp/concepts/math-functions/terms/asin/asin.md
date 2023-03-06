---
Title: 'asin'
Description: 'Math function which returns the inverse sine of an angle'
Subjects: 
  - 'Computer Science'
Tags:
  - 'Geometry'
CatalogContent:
  - 'learn-cs' # There is no corresponding Catalog Content in the catalog content file. Please revise as needed
  - 'paths/computer-science'
---

[Introduction - make sure first mention of concept is in **bold**.] (The first 160 characters of this section will appear as the description of the page when it shows up on search engines. It's important!)
The **Math.asin()** function computes an **angle** in **radians** whose **sine** is a specified number. In Math, this is known as the **inverse sine** function.

## Syntax

```public static double Asin (double value)```

## Parameters

value: the input value, which must be in the range -1 <= value <= 1

## Return Value

An angle measured in radians, and of type Double, whose sine is value. If an invalid value is passed to the function, or no value is passed at all, NaN is returned.

## Codebyte Example

```codebyte/cs
# Example runnable code block.
using System;
class CodeacademyDemo
{
    static void Main()
    {
        Double result = Math.Asin(0);
        System.Console.WriteLine("Asin(0) = "+ result + " radians");

        Double result1 = Math.Asin(1);
        System.Console.WriteLine("Asin(1) = "+ result1 + " radians");

        Double result2 = Math.Asin(-1);
        System.Console.WriteLine("Asin(-1) = "+ result2 + " radians");

        Double result3 = Math.Asin(2);
        System.Console.WriteLine("Asin(2) = "+ result3);
    }
}
```
