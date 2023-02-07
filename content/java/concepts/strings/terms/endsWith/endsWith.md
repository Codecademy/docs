---
Title: '.endsWith()'
Description: 'Returns a boolean value depending on if a string ends with a given suffix'
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

The `.endsWith()` method only takes one parameter.

- `suffix` (required): A string value that will be used to check given strings.

## Example

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