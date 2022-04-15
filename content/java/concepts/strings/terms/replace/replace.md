---
Title: '.replace()'
Description: 'Takes a string and returns a new string where a given char or CharSequence is replaced with another char or CharSequence.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.replace()` `String` method takes a string and replaces the given char or `CharSequence` with another char or `CharSequence`, returning the new string.

A char represents a single character while `CharSequence` is the interface representing a sequence of characters. The `String` class is one implementation of this interface.

## Syntax

```pseudo
string.replace(char oldValue, char newValue);

string.replace(CharSequence oldValue, CharSequence newValue);
```

A char represents a single character. Other legitimate values that can be applied to the `.replace()` method include the following:

- An instance of the `Character` class that resolves to a single character.
- A `CharSequence` interface that represents a sequence of characters (the `String` class is one implementation of this interface).

In any case, the returned result will always be a new `String` object with all instances of `oldValue` replaced with the `newValue`.

## Example

In the example below, a substring in `s`, "Hello", is replaced with "Goodbye" and reassigned:

```java
public class ReplaceMe {
  public static void main(String args[]) {
    String s = "Hello World!";
    System.out.println("Original String: " + s);

    char testA = 'e';
    System.out.println("With primitive char: " + s.replace(s.charAt(2), testA));

    Character testB = new Character('o');
    System.out.println("With Character class: " + s.replace(s.charAt(6), testB));

    CharSequence testC = "Goodbye";
    System.out.println("With CharSequence: " + s.replace("Hello", testC));
  }
}
```
