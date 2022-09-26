---
Title: '.replace()'
Description: 'Returns a new string where all instances of a given value are switched with a new value.'
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

The `String` class' `.replace()` method returns a new string where all instances of a given value are switched with a new value.

## Syntax

```pseudo
string.replace(char oldValue, char newValue);
```

A char represents a single character. Other valid inputs for the `.replace()` method include the following:

- An instance of the `Character` class that resolves to a single character.
- A `CharSequence` interface that represents a sequence of characters (the `String` class is one implementation of this interface).

In any case, the returned result will always be a new `String` object with all instances of `oldValue` replaced with the `newValue`.

## Example

The example below tests a string `s` with the usage of char values, `Character` instances, and a `CharSequence` where a substring, "Hello", is replaced with "Goodbye" and reassigned:

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

This results in the following output:

```shell
Original String: Hello World!
With primitive char: Heeeo Wored!
With Character class: Hello oorld!
With CharSequence: Goodbye World!
```
