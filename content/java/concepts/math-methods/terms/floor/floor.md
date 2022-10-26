---
Title: 'Floor'
Description: 'Returns the largest integer value that is less than or equal to the argument. When the provided value is either an integer, zero, not a number, or positive or negative infinity.'
Subjects: 
    -'Code Foundations'
    -'Computer Science'
Tags: 
    - 'Documentation'
CatalogContent: 
  - 'learn-java/static-methods-of-the-math-class'
---

The static function **`.floor()`** included in the `Math` class returns the largest integer value that is less than or equal to the argument. When the provided value is either an integer, zero, not a number, or positive or negative infinity.

## Syntax

The Math package can be imported and utilized as shown below
```java
    import java.lang.Math;

    double x = 1.1;
    Math.floor(1.1); // passing values directly to the function
    Math.floor(x); // or passing values of variables
```

## Example 1

In the case of double values, `.floor()` returns the next integer value below the provided double value:

```java
    double x = 3.9;
    Math.floor(x); // returns the integer 3
```

## Example 2

Integers provided to the `.floor()` function return the same value as provided:

```java
    int x = 1;
    int y = 0;
    Math.floor(x); // returns the integer 1
    Math.floor(y); // returns the integer 0
```
## Example 3

Values that are not a number will return the NaN value

```java
    double x = 2.0 % 0;
    Math.floor(x); // returns NaN
```

## Example 4

Infinite values such as one divided by zero will return infinity:

```java
    double x = 1 / 0;
    Math.floor(x); // returns Infinity
```
