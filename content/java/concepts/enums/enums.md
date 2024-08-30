---
Title: 'Enums'
Description: 'Enumeration (enum) is a special user defined type where we specify a set of values for a variable and the variable can only take one out of a small set of possible values.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Enums'
  - 'Data Types'
  - 'Arrays'
  - 'Vectors'
  - 'Pointers'
  - 'Memory'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Enumeration (enum) is a special user defined type where we specify a set of values for a variable and the variable can only take one out of a small set of possible values. Enumerations are classified as a [reference data type](https://www.codecademy.com/resources/docs/java/data-types#reference-data-types).

The keyword `enum` is used to define an enumeration.

An `enum` can contain constants, methods, etc.

## Syntax

Here's the basic syntax for creating an `enum`:

```java
public enum name {
  constant1,
  constant2,
  ...
}
```

Here's an `enum` with compass directions:

```java
public enum Direction {
  NORTH, SOUTH, EAST, WEST
}
```

- `Direction.NORTH` will have a value of NORTH.
- `Direction.SOUTH` will have a value of SOUTH.
- `Direction.EAST` will have a value of EAST.
- `Direction.WEST` will have a value of WEST.

## Example

```java
public enum Day {
  SUN, MON, TUE, WED,
  THU, FRI, SAT
}
```

- `Day.SUN` will have a value of SUN.
- `Day.MON` will have a value of MON.
- `Day.TUE` will have a value of TUE.
- `Day.WED` will have a value of WED.
- `Day.THU` will have a value of THU.
- `Day.FRI` will have a value of FRI.
- `Day.SAT` will have a value of SAT.

To access one of the values:

```java
Day day = Day.MON;
```
