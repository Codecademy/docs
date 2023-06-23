---
Title: '.replaceAll()'
Description: 'Replaces every matching subsequence in the input sequence with the specified replacement string.'
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

The `String` class' **`.replaceAll()`** method replaces every matching subsequence in the input sequence with the specified replacement string.

## Syntax

```pseudo
string.replaceAll(String regex, String repl);
```

`regex` represents the [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions): a set of special characters and letters used for matching specific text.
`repl` represents the string to be substituted for each match.

> **Note:** It's important to note that certain characters in the replacement string, such as backslashes and dollar signs ($), may have special meanings, so it's recommended to use `Matcher.quoteReplacement(String)` to prevent these characters from affecting the results.
>
> **Note:** Both the [`.replace()`](https://www.codecademy.com/resources/docs/java/strings/replace) and `.replaceAll()` methods replace all occurrences of a matching string and accept `CharSequence` as input. However, the key difference is that `.replaceAll()` treats the given `CharSequence` as a _regular expression_ and searches for `regex` matches, while `.replace()` treats the input as plain text.

## Example

The example below removes all whitespace:

```java
public class Main {
  public static void main(String[] args) {
    String myString = "Dog\t  \r\rComputer\n\n  \r House \t Yes \n  ";

    String regex = "\\s";
    // The shorthand code \s represents spaces, tabs, and newline characters
    String replacement = "";

    String newString = myString.replaceAll(regex, replacement);
    System.out.println(newString);
```

This results in the following output:

```shell
DogComputerHouseYes
```
