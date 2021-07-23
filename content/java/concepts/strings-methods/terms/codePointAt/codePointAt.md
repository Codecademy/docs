---
Title: ".codePointAt()"
Subjects:
  - "Computer Science"
Tags:
  - "Methods"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-java"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition

Returns the Unicode value at the given index in the string.

## Syntax

```java
public int codePointAt(int index)
```

- `index` (required): An int value that represents the index of the Unicode value you want to retrieve.

## Example 1

Print the Unicode value of the first character in the string `"Hello World"`:

```java
class FirstCharacterUnicodeValue {
  public static void main(String[] args) {
    String greeting = "Hello World";
    System.out.println(greeting.codePointAt(0));
    // Output: 72
  }
}
```
