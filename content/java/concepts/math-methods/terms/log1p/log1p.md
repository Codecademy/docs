---
Title: '.log1p()'
Description: 'Returns the natural logarithm (base e) of the sum of a double value as a parameter and 1.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`java.lang.Math.log1p()`** method returns `ln (a + 1)`, the natural logarithm of a.

## Syntax

```pseudo
Math.log1p(a);
```

- The `.log1p()` method takes one parameter `a`.
- If `a` is `NaN`, then return value is `NaN`.
- If `a` is `negative number`, then return value is `NaN`.
- If `a` is `positive number`, then return value is `double`.
- If `a` is `positive / negative zero`, then return value is `positive infinity`.
- If `a` is `positive infinity`, then return value is `positive infinity`.

## Example

The following example demonstrates using `.log1p()` to find natural logs of:

```java
import java.lang.Math;

public class Main {
     public static void main(String args[]) {
        double a = 23;
        double b = -42;
        double c = 0;

        System.out.println("The result of log1p(" + a + ") is: " + Math.log1p(a));
        System.out.println("The result of log1p(" + b + ") is: " + Math.log1p(b));
        System.out.println("The result of log1p(" + c + ") is: " + Math.log1p(c));
    }
}
```

This will produce the following output:

```shell
The result of log1p(10) is: 3.1780538303479458
The result of log1p(-6) is: NaN
The result of log1p(0) is: -Infinity
```

## Codebyte Example

The following example is runnable and return `ln (a + 1)`:

```codebyte/java
import java.lang.Math;

public class Main {
    public static void main(String args[]) {
        double a = -0;

        System.out.println("The result of log1p(" + a + ") is: " + Math.log1p(a));
    }
}
```
