---
Title: '.incrementExact()'

Description: 'Returns the argument incremented by one, throwing an exception if the result overflows the datatype.'
Subjects:
- 'Computer Science'
  Tags:
- 'Functions'
- 'Methods'
- 'Arithmetic'

  CatalogContent:
- 'learn-java'
---

The **`Math.incrementExact()`** method returns the argument incremented by one. It throws an [exception](https://www.codecademy.com/resources/docs/java/errors) if the result overflows the specified datatype either `long` or `int`.

## Syntax

```pseudo
Math.incrementExact(num)
```

- The `num` argument is a `long` or `int` value.

## Example

The following example uses `Math.incrementExact()` to increase the input by 1:

```java
public class Main {
  public static void main(String[] args) {
    int value = 21;
    long input = 123L;
    long negValue = -38L;
    System.out.println(Math.incrementExact(value));
    System.out.println(Math.incrementExact(input));
    System.out.println(Math.incrementExact(negValue));
  }
}
```

This will produce the following output:

```shell
22
124
-37
```
