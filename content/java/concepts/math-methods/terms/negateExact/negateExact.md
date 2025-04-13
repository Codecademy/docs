---
Title: '.negateExact()'
Description: 'Returns the negation of the argument and raises an exception if the result overflows.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.negateExact()`** method returns the negation of the argument and raises an [exception](https://www.codecademy.com/resources/docs/java/errors) if the result overflows.

## Syntax

```pseudo
Math.negateExact(num)
```

The `num` parameter can be of type `int` or `long`.

## Example

The following example demonstrates using the `.negateExact()` method:

```java
// Test.java
public class Test {
  public static void main(String args[]) {
    int num_int = 12;
    long num_long = 123L;
    System.out.println(Math.negateExact(num_int));
    System.out.println(Math.negateExact(num_long));
  }
}
```

This results in the following output:

```shell
-12
-123
```
