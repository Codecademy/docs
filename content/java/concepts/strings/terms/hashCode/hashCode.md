---
Title: '.hashCode()'
Description: 'Returns an integer hash code value for the object on which it is invoked.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.hashCode()`** method returns an integer hash code value for the object on which it is invoked. The hash code for a `String` object is computed as follows:

```pseudo
s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
```

`s[i]` is the `i`-th character of the string, `n` is the length of the string, and `^` indicates exponentiation.

## Syntax

```pseudo
int hashCodeValue = objectName.hashCode();
```

- `hashCodeValue` is an integer variable that stores the hash code value returned by the `.hashCode()` method.

## Example

The example below demonstrates the use of the `.hashCode()` method:

```java
// Example.java
public class Example {
  public static void main(String[] args) {
    String str = "codeacademy.com";
    int hashCodeValue = str.hashCode();
    System.out.println(hashCodeValue);
  }
}
```

This outputs the following:

```shell
667975538
```

> **Note:** The hash code value may vary for the same object when the program is executed multiple times. This is because the hash code value is generated based on the object's memory address, which may vary each time the program is run due to the dynamic nature of memory allocation in computer systems.
