---
Title: '.log()'
Description: 'Returns the natural logarithm (base e) of a double value as a parameter.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`java.lang.Math.log()`** method returns `ln a`, the natural logarithm of a.

## Syntax

```pseudo
Math.log(a);
```

- The `.log()` method takes one parameter `a`.
- If `a` is `NaN`, then return value is `NaN`.
- If `a` is `negative number`, then return value is `NaN`.
- If `a` is `positive number`, then return value is `double`.
- If `a` is `positive / negative zero`, then return value is `positive infinity`.
- If `a` is `positive infinity`, then return value is `positive infinity`.

## Example

The following example demonstrates using `.log()` to find natural logs of:

```java
import java.lang.Math;

public class Main {
  	public static void main(String args[]) {
    	double a = 10;
    	double b = -6;
    	double c = 0;
    
		System.out.println("The result of log(" + a + ") is: " + Math.log(a));
		System.out.println("The result of log(" + b + ") is: " + Math.log(b));
		System.out.println("The result of log(" + c + ") is: " + Math.log(c));
  	}
}
```

This will produce the following output:

```shell
The result of log(10) is: 2.303
The result of log(-6) is: NaN
The result of log(0) is: -Infinity
```

## Codebyte Example

The following example is runnable and return `ln a`:

```codebyte/java
import java.lang.Math;

public class Main {
	public static void main(String args[]) {
		double a = -0;

		System.out.println("The result of log(" + a + ") is: " + Math.log(a));
	}
}
```
