---
Title: '.endsWith()'
Description: 'Returns true if a string ends with a given suffix, otherwise false.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.endsWith()`** method returns `true` if a string ends with a given suffix, otherwise `false`.

## Syntax

```pseudo
str.endsWith(String suffix)
```

- `suffix` (required): The characters to be matched in the string.

## Example

The example below demonstrates the use of the `.endsWith()` method:

```java
// Example.java
class Example {
  public static void main(String args[]) {
    String domain = "codecademy.com";

    // Output will be true as "codecademy.com" ends in "com"
    boolean bool = domain.endsWith("com");
    System.out.println(bool);
  }
}
```

This outputs the following:

```shell
true
```
