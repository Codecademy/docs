---
Title: "contentEquals()"
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

Returns `true` if the sequence of characters in the string is equal to the content of the specified string. If not, returns `false`.

## Syntax

```java
public Boolean contentEquals(CharSequence characters)
```

- `characters` (required): An `CharSequence` type value specifies the sequence of characters to be searched for.

## Example 1

Call the `contentEquals()` method on the string value assigned to `word` with the arguments `"water"` and `"watermelon"`:

```java
class isContentEqual {
  public static void main(String[] args) {
    String word = "watermelon";

    System.out.println(word.contentEquals("water"));
    System.out.println(word.contentEquals("watermelon"));
    // output: false
    // output: true
  }
}
```
