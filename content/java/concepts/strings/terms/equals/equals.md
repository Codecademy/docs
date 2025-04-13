---
Title: '.equals()'
Description: 'Returns true if two strings are equal in value and false otherwise.'
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

The **`.equals()`** method returns `true` if two strings are equal in value. Otherwise, `false` is returned.

## Syntax

```pseudo
string.equals(object);
```

The `object` can either be a string literal or a representation of a `String` value. This will return `true` if the `string` has the same character sequence as `object`.

## Example

The following example showcases the `.equals()` method:

```java
import java.io.*;

public class MyClass {
  public static void main(String[] args) {
    // With string literals
    System.out.println("4".equals("four"));

    // With string objects
    String myFavoriteLanguage = "Java";
    String codeNinjasFavoriteLangauge = "Java";
    System.out.println(myFavoriteLanguage.equals(codeNinjasFavoriteLangauge));
  }
}
```

This will print the following output:

```shell
false
true
```
