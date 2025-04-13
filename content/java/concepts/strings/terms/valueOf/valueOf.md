---
Title: '.valueOf()'
Description: 'Returns the string representation of a given value.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.valueOf()`** method returns the string representation of a given value.

## Syntax

```pseudo
String.valueOf(value)
```

The `.valueOf()` method is static and is called directly from the `String` class.

The `value` parameter can be one of the following [data types](https://www.codecademy.com/resources/docs/java/data-types):

- `int`
- `long`
- `float`
- `double`
- `boolean`
- `char`

## Example

The following is an example of the `.valueOf()` method being applied to values of different data types:

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
