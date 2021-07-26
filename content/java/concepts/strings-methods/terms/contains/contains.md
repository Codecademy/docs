---
Title: "contains()"
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

Returns `true` if a sequence of characters exists in a given string, otherwise `false`.

## Syntax

```java
public Boolean contains(CharSequence characters)
```

- `characters` (required): A `CharSequence` type value that specifies the character(s) to be searched for.

## Example 1

Check if the variable `sentence` contains either the string `"fox"` or `"bear"`:

```java
class AnimalFinder {
  public static void main(String[] args) {
    String sentence = "The quick brown fox jumps over the lazy dog.";
    System.out.println(sentence.contains("fox"));
    System.out.println(sentence.contains("bear"));
    // Output: true
    // Output: false
  }
}
```
