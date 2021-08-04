---
Title: "Enums"
Subjects:
  - "Computer Science"
Tags: 
  - "Enums"
  - "Data Types"
  - "Arrays"
  - "Vectors"
  - "Pointers"
  - "Memory"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-java"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

In Java, an *enumeration* (enum) is a special user defined type where we specify a set of values for a variable and the variable can only take one out of a small set of possible values. 

The keyword `enum` is used to define an enumeration.

An `enum` can contain constants, methods, etc.

## Syntax

```java
public enum name {
  constant1,
  constant1,
  ...
}
```

Here's an example:

```java
public enum Direction {
  NORTH, SOUTH, EAST, WEST
}
```

- `Direction.NORTH` will have a value of 0.
- `Direction.SOUTH` will have a value of 1.
- `Direction.EAST` will have a value of 2.
- `Direction.WEST` will have a value of 3.

## Example

```java
public enum Day {
  SUN, MON, TUE, WED,
  THU, FRI, SAT 
}
```
- `Day.MON` will have a value of 0.
- `Day.TUE` will have a value of 1.
- `Day.WED` will have a value of 2.
- ...

```java
Day day = Day.MON;
```
