---
Title: '.random()'
Description: 'Returns a pseudorandom double that is 0.0 or greater, and less than 1.0.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
  - 'Random'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.random()`** method returns a pseudorandom `double` that is greater than or equal to 0.0 and less than 1.0 &mdash; `[0.0, 1.0)`.

## Syntax

```pseudo
Math.random()
```

The `.random()` method takes no parameters.

## Example

The following example demonstrates using `.random()` to choose a number between 1 and 10:

```java
public class Test {
  public static void main(String args[]) {
    double r = Math.random();
    long n = Math.round((r * 10.0) + .5);
    System.out.println(n);
   }
}
```

The output will be a `long` type between 1 and 10.
