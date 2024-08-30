---
Title: '.join()'
Description: 'Returns a new string composed of the elements joined together with the specified delimiter.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Characters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.join()`** method returns a new string composed of the elements joined together with the specified delimiter.

## Syntax

```java
String.join(delimiter, element1, element2...elementN);
```

- `delimiter` (required): The delimiter that is used to join the elements.
- `elements`(required): The elements to be joined together.

## Example

The example below uses `.join()` to concatenate several names with a pipe delimiter:

```java
// JoinPipe.java
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
