---
Title: '.endsWith()'
Description: 'Returns boolbean value depending on if a string ends with a given suffix'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.endsWith()`** method returns a boolbean value based of if a string ends with a given suffix. If the **string ends with the given suffix it will return true otherwise it will return false**.

## Syntax

```pseudo
str.endsWith(String suffix)
```

The `.endsWith()` method only takes one parameter.

- `suffix` (required): A string value that will be used to check given strings.

## Example

```java
class Example {
  public static void main(String args[]) {
    String domain = "codecademy.com";

    // Output will be true as "codecademy.com" ends in "com"
    boolbean bool = domain.endsWith("com");
    
    System.out.println(bool) // Prints true
  }
}
```