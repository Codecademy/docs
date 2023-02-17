---
Title: '.matches()'
Description: 'Checks whether a string matches a given regular expression.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.matches()`** method checks whether a string matches a given [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions), returning True or False.

## Syntax

```pseudo
string.matches(regex)
```

The `.matches()` method takes a single parameter:
  - regex - a regular expression that the string is compared to.
 
## Return Value

The `.matches()` method returns:
  - True if the regex matches the string.
  - False if the regex doesn't match the string.
  
## Example

The `.matches()` method is showcased in the following example:

```java
import java.io.*;

class Example {
  public static void main(String[] args) {
    // a regex pattern for
    // five letter string that starts with 'hello' or ends with 'goodbye'
    String regex = "^hello|goodbye$";

    System.out.println("hello quick brown fox".matches(regex)); // true
    System.out.println("hi lazy dog".matches(regex)); // false
    System.out.println("goodbye quick brown fox".matches(regex)); // false
    System.out.println("lazy dog, goodbye".matches(regex)); // true
  }
}
```
