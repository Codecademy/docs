---
Title: '.indexOf()'
Description: 'Returns the zero-indexed position of the first occurrence of the given character(s) in a string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.indexOf()` method returns the zero-indexed position of the first occurrence of the given character(s) in a string. It returns `-1` if the given characters(s) are not found.

## Syntax

```java
string.indexOf(str, index)
```

Where `str` is a `String`, or an `int` representing a character or Unicode value, to find the index of, and `index` is an optional index position in the string to search from.

## Example

The following example finds the position of the string "World" in "Hello World!":

```java
class FindInxex {
  public static void main(String[] args) {
    String greeting = "Hello World";

    System.out.println(greeting.indexOf("World"));
    }
}
```

This outputs:

```shell
6
```
