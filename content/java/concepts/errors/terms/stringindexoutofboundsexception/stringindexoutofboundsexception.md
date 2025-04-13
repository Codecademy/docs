---
Title: 'StringIndexOutOfBoundsException'
Description: 'Occurs when a String method tries to use an index that is either negative or greater than the size of the string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Errors'
  - 'Error Handling'
  - 'Exceptions'
  - 'Debugging'
  - 'Strings'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `StringIndexOutOfBoundsException` is an [exception](https://www.codecademy.com/resources/docs/general/error) that occurs when a [`String`](https://www.codecademy.com/resources/docs/java/strings) method tries to use an index that is either negative or greater than the size of the `String`.

## Example

The following example creates a `StringIndexOutOfBoundsException`:

```java
public class ErrorExample {
  public static void main(String[] args) {
    String greeting = "Hello World";
    System.out.println(greeting.charAt(-1));
  }
}
```

The output is something like this:

```shell
Exception in thread "main" java.lang.StringIndexOutOfBoundsException: String index out of range: -1
    at java.base/java.lang.StringLatin1.charAt(StringLatin1.java:48)
    at java.base/java.lang.String.charAt(String.java:1512)
    at ErrorExample.main(ErrorExample.java:4)
```
