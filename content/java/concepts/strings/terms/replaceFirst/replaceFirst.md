---
Title: '.replaceFirst()'
Description: 'Replaces the first matching substring in a given string with the specified replacement string.'
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

The **`.replaceFirst()`** method replaces the first matching substring in a given string with the specified replacement string.

## Syntax

```pseudo
string.replaceFirst(String substring, String replacement);
```

The **`.replaceFirst()`** method takes two parameters:

- `substring`, a string or a [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions) (a set of special characters and letters) to specify which substring needs to be replaced.
  > **Note:** In regular expressions some characters, for example asterisk (`*`) or question mark (`?`), have special meanings. To match a substring with special characters, these characters must be "escaped" with the backslash (`\`) character or the`Matcher.quoteReplacement(String)` method can be used to get the string literal of a string passed as parameter.
- `replacement`, a string to specify the substring to be substituted for.

The **`.replaceFirst()`** method returns a string with the replaced substring.

The `.replaceFirst()`** method only replaces the first  matching occurrence, while the [`.replaceAll()`](https://www.codecademy.com/resources/docs/java/strings/replaceAll) replaces all matching occurrences of the specified `substring`.

## Example

The example below replaces the first occurrence of the string `pizza` with the  string `donut`:

```java
public class Main {
  public static void main(String[] args) {
    String myString = "I love pizza. I eat pizza every day. I make my own pizza. ";
    System.out.print("Original string: " + myString +"\n");

    String substring = "pizza";
    String replacement = "donut";

    String replacedString = myString.replaceFirst(substring, replacement);
    System.out.println("Replaced string: " + replacedString);
  }
}
```

This results in the following output:

```shell
Original string: I love pizza. I eat pizza every day. I make my own pizza. 
Replaced string: I love donut. I eat pizza every day. I make my own pizza. 
```
