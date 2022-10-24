---
Title: '.valueOf()'
'Returns the string representation of a given value.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`String.valueOf()`** is a built-in java function for converting different types of values into its corresponding `string` representation.

## Syntax

```pseudo
String.valueOf(int i)         // Returns the string representation of int i.
String.valueOf(long l)        // Returns the string representation of long l.
String.valueOf(boolean b)     // Returns the string representation of boolean argument.
String.valueOf(float f)       // Returns the string representation of float f.
String.valueOf(double df)     // Returns the string representation of double argument.
```

## Example

This following example returns the string representation with the `.valueOf()` method:

```java
// Main.java
public class Main {
  public static void main(String[] args) {
      // Concatenating an integer with string
      int x = 20;
      String str = "22";
      System.out.println(String.valueOf(x) + str);

      // String representation of boolean argument
      boolean b = true;
      System.out.println(String.valueOf(b));

      // Concatenating string with float
      float f = 4.66f;
      System.out.println(str + String.valueOf(f));

      // Char to String
      char ch = 'A';
      System.out.println(String.valueOf(ch));
  }
}
```

This will produce the following output:

```shell
2022
true
224.66
A
```
