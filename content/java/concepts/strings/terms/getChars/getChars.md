---
Title: '.getChars()'
Description: 'Copies characters from the given string into the destination character array.'
Subjects:
  - 'Java'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.getChars()`** string method copies a set of characters from a string into a destination character array.

## Syntax

The basic syntax of `.getChars()` in Java is:

```pseudo
getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)
```

A brief description of the parameters is as follows:

- `srcBegin`: The index to start copying the new array.
- `scrEnd`: The index to stop copying the new array.
- `dst`: The name of the new array.
- `dstBegin`: The index of the destination array.

## Example

In the following example, `.getChars()` converts an array into a new shorter array. It then prints the new array in the console:

```java
public class Test {

   public static void main(String args[]) {
      String OldLine = new String("Welcome to Texas.");
      char[] NewLine = new char[5];
      try {
         OldLine.getChars(11, 16, NewLine, 0);

         System.out.println(NewLine);
      } catch ( Exception ex) {
         System.out.println("The indexes are out of range.");
      }
   }
}
```

This results in the following output:

```shell
Texas
```
