---
Title: "Math.abs()"
Description: "Returns the absolute value of the argument."
Subjects:
  - "Computer Science"
Tags:
  - "Methods"
  - "Arithmetic"
CatalogContent:
  - "learn-java"
  - "paths/computer-science"
---

The `Math.abs()` method returns the absolute value of the argument.

An absolute value is the non-negative version of the value, without considering the positive/negative sign.

## Syntax

```java
Math.abs(n)
```

## Example 1

Use `Math.abs()` to return the absolute value of `-6.5`:

```java
double x = -6.5;

System.out.println(Math.abs(x));
// Output: 6.5
```

## Example 2

Use `Math.abs()` to return the absolute value of `-340.8`:

```java
class AbsoluteValue {
  public static void main(String[] args) {

    System.out.println(Math.abs(-340.8));
    // Output: 340.8
    
  }
}
```
