---
Title: '.replaceAll()'
Description: 'Searches a string with a regex pattern and replaces each match with a replacement string.'
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

The **`.replaceAll()`** method replaces every match of a specified regular expression with a given string.

## Syntax

```pseudo
string.replaceAll(regex, repl);
```

- `regex`: A string that defines the [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions) pattern.
- `repl`: The string that will replace every occurrence of the pattern found in the original string.

> **Note:** If the objective is to search and replace a sequence of plain text without using a regex pattern, use the [`.replace()`](https://www.codecademy.com/resources/docs/java/strings/replace) method.

## Example

The example below sanitizes a user inputted phone number by removing any non-digit characters:

```java
public class Main {
  public static void main(String[] args) {
    String phoneNumber = "(123) 456-7890";
    String sanitizedPhoneNumber = sanitizePhoneNumber(phoneNumber);
    System.out.println(sanitizedPhoneNumber);
  }
  public static String sanitizePhoneNumber(String number) {
    return number.replaceAll("[^0-9]", "");
  }
}
```

> **Note:** When using regex metacharacters (e.g. `.`,`*`,`+`,`?`,`^`,`$`,`\\`) in the `repl` string, use `Matcher.quoteReplacement(String)` to ensure they are interpreted literally.

In this example, `sanitizePhoneNumber` is a method that takes a phone number and removes any non-digit characters. In the `replaceAll()` method, the `[^0-9]` pattern is passed for the `regex` argument and `""` for the `repl` argument. This means that every non-digit character will be replaced with an empty string. Then the sanitized phone number is printed to the console:

```shell
1234567890
```
