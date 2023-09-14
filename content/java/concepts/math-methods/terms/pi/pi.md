---
Title: 'PI'
Description: 'The mathematical constant pi.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Constants'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.PI`** constant in Java is a static field available in the `java.lang.Math` class. It represents the mathematical constant π (pi), which is a non-repeating, irrational number approximately equal to 3.141592653589793. Pi is the ratio of the circumference of a circle to its diameter.

## Syntax

```java
double val = Math.PI;
```

## Example

The following code demonstrates a basic use of the `Math.PI` constant.

```java
public class Main {
  public static void main(String[] args) {

    double circle_radius = 5;
    double circle_area = Math.PI * (circle_radius * circle_radius)
    System.out.println(circle_area);
    }
}
```

This will return the following output:

```shell
78.53981633974483
```
