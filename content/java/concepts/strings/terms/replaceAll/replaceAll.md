---
Title: '.replaceAll()'
Description: 'Searches a string for a specific regex pattern and replaces each occurrence with a replacement string.'
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

The **`.replaceAll()`** method replaces every occurrence of a specified regular expression with a specified replacement string.

## Syntax

```pseudo
string.replaceAll(String regex, String repl);
```

`regex`: defines the [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions) pattern to match in the string.

`repl`: the string that will replace every occurrence of the pattern found in the original string.

> **Note:** If you're aiming to search and replace a sequence of plain text without using a regex pattern, use the [`.replace()`](https://www.codecademy.com/resources/docs/java/strings/replace) method.

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

In this example, `sanitizePhoneNumber` is a method that takes a phone number and removes any non-digit characters. In the `replaceAll()` method, we pass `[^0-9]` for the `regex` argument and `""` for the `repl` argument. This means that we are replacing every non-digit character with an empty string. Our sanitized phone number is then printed to the console:

```shell
1234567890
```
