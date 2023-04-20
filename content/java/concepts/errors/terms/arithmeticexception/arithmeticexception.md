---
Title: 'ArithmeticException'
Description: 'Occurs when an arithmetic operation yields an error.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Errors'
  - 'Error Handling'
  - 'Exceptions'
  - 'Debugging'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `ArithmeticException` occurs when an arithmetic operation yields an error.

## Example

The `ArithmeticException` is thrown in the following example because it divides an integer by zero:

```java
public class DivideByZero {
  public static void main(String[] args) {
    int x = 9/0;
  }
}
```

The output would look like this:

```shell
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at DivideByZero.main(DivideByZero.java:3)
```
