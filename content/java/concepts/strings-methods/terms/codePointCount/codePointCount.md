---
Title: ".codePointCount()"
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

Returns the number of Unicode values in specified range of a string.

## Syntax

```java
public int codePointCount(int indexStart, int indexEnd)
```

- `indexStart` (required): The index of the first character in the string to start counting from.
- `indexEnd` (required): The index to the last character in the string to stop counting at.

## Example 1

Print the number of Unicode values in the string `"Hello World"`:

```java
class CountUnicodeValues {
  public static void main(String[] args) {
    String s = "Hello World";
    System.out.println(s.codePointCount(0, 10));
    // Output: 10
  }
}
```
