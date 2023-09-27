---
Title: '.Atan()'
Description: 'Returns the inverse tangent of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

**Math.Atan()** is a static method that calculates the inverse tangent of a given number, in radians.

## Syntax

```pseudo
Math.Atan(x);
```

- The `Math.Atan()` method takes one double as an argument and returns a double.
- Using this method requires the `System` namespace.

## Codebyte Example

The following example uses `Math.Atan()` to return the arctangent of a right angled triangle, where the side opposite the angle is equal to 7, and the side adjacent is 5.

```codebyte/csharp
namespace AtanExample {
  class Example {
    static void Main(string[] args) {
      double oppSide = 7;
      double adjSide = 5;
      double tangentValue = oppSide / adjSide;
      double arctangentValue = System.Math.Atan(tangentValue);
      System.Console.WriteLine($"Arcangent = {arctangentValue}");
    }
  }
}
```
