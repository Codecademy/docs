---
Title: '.addExact()'
Description: 'Returns the sum of its arguments.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Function'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.addExact()`** method returns the sum of its arguments. It will throw an *exception* if the result overflows either int or long. This function is `static`, henceforth object creation is not required.

## Syntax

```pseudo
Math.addExact(type a, type b)
```
Here `type` is the datatype of the argument passed to the function. **`Math.addExact()`** function accepts two arguments from the user and the datatype must be same for both the arguments. 

+ If any one argument is `Integer.MAX_VALUE` or `Long.MAX_VALUE`, or if the desired result exceeds _int_ or _long_, then it will throw an exception. 

## Example

This example uses `.addExact()` to return the sum for `(a, b)`:

```java
public class Main {
  public static void main(String[] args) {
    int a = 575;
    int b = 209;
    System.out.println(Math.addExact(a, b));

    // Example for overflow
    long x = Long.MAX_VALUE;
    long y = 86712;
    System.out.println(Math.addExact(x, y));
  }
}
```

This will produce the following output:

```shell
784
Exception in thread "main" java.lang.ArithmeticException: long overflow
        at java.base/java.lang.Math.addExact(Math.java:845)
        at Main.main(Main.java:13)
``` 