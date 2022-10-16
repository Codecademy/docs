---
Title: '.round()'
Description: 'Returns the closest integer or long to the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.round()`** method returns the closest integer or long to the argument.

## Syntax

```pseudo
Math.round(n)
```

The `.round()` method takes one parameter `n`, the value that needs to be rounded.

## Example

The following example demonstrates using `.round()` to round the value 1.8 to the nearest integer:

```java
public class Test {
  public static void main(String args[]) {
    int n = Math.random(1.8);
    System.out.println(n);
    // Output: 2
   }
}
```
