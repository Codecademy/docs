---
Title: '.log10()'
Description: 'Returns the logarithm base 10 of a double value as a parameter.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.log10()`** method returns `log a`, the logarithm of `a` with base 10.

## Syntax

```pseudo
Math.log10(a);
```

- The `.log10()` method takes one parameter `a`.
- If `a` is `NaN`, then return value is `NaN`.
- If `a` is `negative number`, then return value is `NaN`.
- If `a` is `positive number`, then return value is `double`.
- If `a` is `positive / negative zero`, then return value is `positive infinity`.
- If `a` is `positive infinity`, then return value is `positive infinity`.

## Example

The following example demonstrates using `.log10()` to find logs (with base 10):

```java
import java.lang.Math;

public class Main {
    public static void main(String args[]) {
        double a = 10;
        double b = -6;
        double c = 0;

        System.out.println("The result of log10(" + a + ") is: " + Math.log10(a));
        System.out.println("The result of log10(" + b + ") is: " + Math.log10(b));
        System.out.println("The result of log10(" + c + ") is: " + Math.log10(c));
    }
}
```

This will produce the following output:

```shell
The result of log10(10.0) is: 1
The result of log10(-6.0) is: NaN
The result of log10(0.0) is: -Infinity
```

## Codebyte Example

The following example is runnable and returns `log a`:

```codebyte/java
import java.lang.Math;

public class Main {
    public static void main(String args[]) {
        double a = -0;

        System.out.println("The result of log10(" + a + ") is: " + Math.log10(a));
    }
}
```
