---
Title: '.replace()'
Description: 'Returns a new string where a given char or CharSequence replaced with another char or CharSequence.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.replace()` String method takes a string and replaces a given char or CharSequence with another given char or CharSequence.

## Syntax

```pseudo
string.replace(char oldValue, char newValue)
```

```pseudo
string.replace(CharSequence oldValue, CharSequence newValue)
```

In both cases the result will be `string` with all instances of `oldValue` replaced with `newValue`.

## Example

```java
public class ReplaceMe{
  public static void main(String args[]){
    String s = "Hello World!";
    s = s.replace("Hello","Goodbye");
    System.out.println(s);
  }
}
```

Output:

```pseudo
Goodbye World!
```
