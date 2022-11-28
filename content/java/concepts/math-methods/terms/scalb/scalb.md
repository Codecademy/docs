---
Title: '.scalb()'
Description: 'Returns the first argument multiplied by 2 to the power of the second argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.scalb()`** method returns the first argument multiplied by 2 to the power of the second argument.

### Syntax

```pseudo
Math.scalb(value, scale)
```

The parameter `value` is of type `double` and the parameter `scale` is of type `int`.

## Example

```java
// Main.java
public class Main {
  public static void main(String[] args) {
    double value = 23.2;
    int scale = 4;
    int scale2 = 7;
    System.out.println(Math.scalb(value, scale));
    System.out.println(Math.scalb(value, scale2));
  }
}
```

This will produce the following output:

```shell
371.2
2969.6
```
