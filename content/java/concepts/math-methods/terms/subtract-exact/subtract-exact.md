---
Title: '.subtractExact()'
Description: 'Returns the difference of the arguments.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.subtractExact()`** method returns the difference of the arguments.

## Syntax

```pseudo
Math.subtractExact(int num)
```

Datatype of the value returned by '.subtractExact()' method depends upon the arguments passed.

- If both the arguments are of type int then the return type will be int.
- If both the arguments are of type long then the return type will be long.
- If one of the arguments is of long type then the return will be long.

## Example

The following example showcases the `.subtractExact()` method being applied to two variables:

```java
public class Check {
  public static void main(String args[]) {
       long x = 64L;
       long y = 49L;
       System.out.println(Math.subtractExact(x, y));
   }
}
```

This results in the following output:

```java
15
```
