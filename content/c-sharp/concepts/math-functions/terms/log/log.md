---
Title: '.log()' 
Description: 'Returns the natural (base e) logarithm of a specified number.'
Subjects: 
  - 'Computer science'
  - 'Data Science'
  - 'Machine Learning'
Tags: 
  - 'API'
  - 'Errors'
CatalogContent:
  - 'learn C#'
  - 'Software Engineering Python 1'
---

[A brief definition - make sure first mention of term is in **bold**.]

## Syntax

LOG(number, [base])

Syntax: public static float Log (float x, float y);
Parameters:
x: It is the specified number whose logarithm to be calculated and its type is System.Single.
y: It is the base of the logarithm of type System.Single.

## Example

// C# program to demonstrate working
// of MathF.Log(Single, Single) method
using System;

class Geeks {

    // Main Method
    public static void Main(String[] args)
    {

        // Here val = 4.4f and base is 0.4f then
        // output will be logarithm of given value
        Console.WriteLine(MathF.Log(4.4f, 0.4f));

        // Here val is 0.5f and base > 1f then output
        // will be -0.5f
        Console.WriteLine(MathF.Log(0.5f, 4f));

        // Here val is 0.9f and base = 1f then output
        // will be NaN
        Console.WriteLine(MathF.Log(0.9f, 1f));

        // Here val is 0.4f and base is NaN then output
        // will be NaN
        Console.WriteLine(MathF.Log(0.4f, Single.NaN));
    }
}

## Codebyte Example (if applicable)

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```