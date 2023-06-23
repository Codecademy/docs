---
Title: '.startsWith()'
Description: 'Returns true if a string starts with a given character sequence and false otherwise.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Booleans'
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.startsWith()`** method returns `true` if a string starts with a given character sequence. Otherwise, `false` is returned.

## Syntax

```pseudo
string.startsWith(stringOfCharacters);
```

The `stringOfChcaracters` can either be a string literal or a representation of a `String` value (variables, constants, etc).
This method will only return case-sensitive matches (i.e. "Word" != "word").

## Example

The following example demonstrates the `.startsWith()` method:

```java
import java.io.*;

public class Main {
  public static void main(String[] args) {
    // With string literals
    System.out.println("Hello World".startsWith("ello"));

    // With string objects
    String insertBadCoffeePun = "Java";
    String noMoreJokes = "J";
    System.out.println("We have had enough of bad coffee puns: " + insertBadCoffeePun.startsWith(noMoreJokes));
  }
}
```

This will print the following output:

```shell
false
We have had enough of bad coffee puns: true
```
