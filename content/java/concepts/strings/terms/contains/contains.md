---
Title: '.contains()'
Description: 'Returns true if a sequence of characters exists in a given string, otherwise false.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Returns `true` if a sequence of characters exists in a given string, otherwise `false`.

## Syntax

```java
string.contains(CharSequence characters)
```

- `characters` (required): A character value that specifies the character(s) to be searched for.

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
