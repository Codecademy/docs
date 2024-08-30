---
Title: '.replaceFirst()'
Description: 'Replaces the first matching substring in a string with the specified replacement string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Characters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.replaceFirst()`** method replaces the first matching substring in a string with the specified replacement string.

## Syntax

```pseudo
string.replaceFirst(String substring, String replacement);
```

The `.replaceFirst()` method takes two parameters:

- `substring`, a string or a [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions) to specify which substring needs to be replaced.

> **Note:** In regular expressions, some characters, for example, the asterisk (`*`) or the question mark (`?`), have special meanings. To match a substring with these special characters, they must be "escaped" with the backslash (`\`) character, or the 'Matcher.quoteReplacement(String)` method can be used to get the string literal of any string passed as a parameter.

- `replacement`, a string to specify the substring to be substituted.

The `.replaceFirst()` method returns a string with the replaced substring, and it only replaces the first matching occurrence of the `substring`, while [`.replaceAll()`](https://www.codecademy.com/resources/docs/java/strings/replaceAll) replaces all matching occurrences of the `substring`.

## Example

The example below replaces the first occurrence of the substring `pizza` in `myString` with the string `donut` and prints the results.

```java
public class Main {
  public static void main(String[] args) {
    String myString = "I love pizza. I eat pizza every day. I make my own pizza.";
    String substring = "pizza";
    String replacement = "donut";

    String replacedString = myString.replaceFirst(substring, replacement);

    System.out.println("Original string: " + myString );
    System.out.println("Replaced string: " + replacedString);
  }
}
```

This results in the following output:

```shell
Original string: I love pizza. I eat pizza every day. I make my own pizza.
Replaced string: I love donut. I eat pizza every day. I make my own pizza.
```
