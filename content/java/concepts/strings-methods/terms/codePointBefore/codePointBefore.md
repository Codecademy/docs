---
Title: ".codePointBefore()"
Subjects:
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-java"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition

Returns the Unicode value before the given index in the string.

## Syntax

```java
string.codePointBefore(index)
```

- `index` (required): An `int` value that represents the Unicode value you want to retrieve for the element before the given index.

## Example 1

Print the Unicode value of the first character, `"H"` at the first index:

```java
class FirstCharacterUnicodeValue {
  public static void main(String[] args) {
    String greeting = "Hello World";
    
    System.out.println(greeting.codePointBefore(1));
    // Output: 72
  }
}
```
