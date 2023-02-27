---
Title: '.join()'
Description: 'Returns a new string composed of the elements joined together with the specified delimiter.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.join()`** method returns a new string composed of the elements joined together with the specified delimiter.

## Syntax

```java
String.join(CharSequence delimiter, CharSequence... elements);
```

- `delimiter` (required): The delimiter that is used to join the elements.
- `elements`(required): The elements to be joined together.

## Example 1

Use `.join()` to create the string `"Hello World"` out of the given strings `"Hello"` and `"World"`:

```java
class Join {
  public static void main(String[] args) {
    String element1 = "Hello";
    String element2 = "World";

    String message = String.join(" ", element1, element2);
    System.out.println(message);
  }
}
```

The output would be:

```
Hello World
```

## Example 2

Use `.join()` to join the name of your friends to a single string, each name separated by a pipe:

```java
class JoinPipe {
  public static void main(String[] args) {
    String names = String.join(" | ", "Carl", "Jonas", "Emily", "Daniel", "Nina");
    System.out.println(names);
  }
}
```

The output would be:

```
Carl | Jonas | Emily | Daniel | Nina
```