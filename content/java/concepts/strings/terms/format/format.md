---
Title: '.format()'
Description: 'Returns a string with additional arguments in a specifically defined format.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.format()`** method returns a string with additional arguments in a specifically defined format.

## Syntax

```pseudo
string.format(String str, ...args);
```

- `str` is of type `String` and includes a **format specifier**.
- `args` is an optional argument, which can be of any data type, to be returned with the first string argument.

Some common format specifiers include:

| Format Specifier |  Type   |
| :--------------: | :-----: |
|       `%b`       | boolean |
|       `%c`       |  char   |
|       `%d`       | integer |
|       `%f`       |  float  |
|       `%s`       | string  |

See Java's similar [`.printf()`](https://www.codecademy.com/resources/docs/java/output/printf) method for more information on format specifiers.

**Note:** `NullPointerException` will be thrown if the format is `null`. An `IllegalFormatException` will be thrown if the specifier and argument do not match or the specifier does not exist.

## Example

The following example prints out three strings. The first parameter includes a format specifier(s) within a string and has one or two arguments:

```java
class MyFormat {
  public static void main(String[] args) {
    String name = "Katara";
    String job = "bender";

    System.out.println(String.format("%s is a water %s.", name, job));
    System.out.println(String.format("%d years!", 100));
    System.out.println(String.format("%s", "Yip yip."));
  }
}
```

This outputs the following:

```shell
Katara is a water bender.
100 years!
Yip yip.
```
