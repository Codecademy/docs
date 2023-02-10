---
Title: '.startsWith()'
Description: 'Returns true if a string starts with given character(s) and false otherwise.'
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

The **`.startsWith()`** method returns `true` if a string starts with given character(s). Otherwise, `false` is returned.

## Syntax

```pseudo
string.startsWith(object);
```

The `object` can either be a string literal or a representation of a `String` value. This will return `true` if the `object` has the same starting character sequence as `string` .

## Example

The following example showcases the `.startsWith()` method:

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
