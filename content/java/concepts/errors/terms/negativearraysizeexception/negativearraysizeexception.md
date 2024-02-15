---
Title: 'NegativeArraySizeException'
Description: 'Occurs when an application tries to create an array with negative size.'
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

**`NegativeArraySizeException`** is a runtime exception in Java that occurs when an application attempts to create an array with a negative size.

Since the `NegativeArraySizeException` is an unchecked exception, it does not need to be declared in the `throws` clause of a method or constructor.

## Example

The `NegativeArraySizeException` is thrown in the following example because it assigns a negative size to an array:

```java
public class NegativeArraySizeExceptionExample {
    public static void main(String[] args) {
        int[] array = new int[-5];
        System.out.println("Array length: " + array.length);
    }
}
```

The output would look like this:

```shell
Exception in thread "main" java.lang.NegativeArraySizeException: -5
    at NegativeArraySizeExceptionExample.main(NegativeArraySizeExceptionExample.java:3)
```
