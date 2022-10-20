---
Title: '.decrementExact()'

Description: 'Returns the argument decremented by one, throwing an exception if the result overflows the datatype.'
Subjects:
- 'Computer Science'
  Tags:
- 'Functions'
- 'Methods'
- 'Arithmetic'

  CatalogContent:
- 'learn-java'
---

The **`Math.decrementExact()`** method returns the argument decremented by one. It throws an [exception](https://www.codecademy.com/resources/docs/java/errors) if the result overflows the specified datatype either `long` or `int`.

## Syntax

```pseudo
Math.decrementExact(num)
```

- The `num` argument is a `long` or `int` value.

## Example

The following example uses `Math.decrementExact()` to decrement the input by 1:

```java
public class Main {
  public static void main(String[] args) {
    int value = 21;
    long input = 123L;
    long negValue = -38L;
    System.out.println(Math.decrementExact(value));
    System.out.println(Math.decrementExact(input));
    System.out.println(Math.decrementExact(negValue));
  }
}
```

This will produce the following output:

```shell
20
122
-39
```
