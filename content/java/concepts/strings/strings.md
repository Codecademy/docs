---
Title: 'Strings'
Description: 'A string in Java is an object that holds a sequence of characters contained within a pair of double quotes (").'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Strings** in Java are objects that can hold a sequence of characters contained within a pair of double quotes (`"`). It is not a primitive data type.

Strings can either be compared by value via method (e.g., [`.equals()`](https://www.codecademy.com/resources/docs/java/strings/equals)) or by reference, or location in memory, (e.g., `==`) via operator.

## Example

Java strings provide a way to store text such as words, sentences, or whole paragraphs. They can be any length and may contain letters, numbers, symbols, and spaces:

```java
import java.util.*;

class StringExample {
  public static void main(String[] args) {
    // Using a string literal
    System.out.println("Codecademy");

    // Creating a String variable
    String address = "575 Broadway #5, New York, NY 10012";
    System.out.println(address);
  }
}
```

This will output the following:

```shell
Codecademy
575 Broadway #5, New York, NY 10012
```
