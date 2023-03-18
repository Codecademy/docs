---
Title: '.matches()'
Description: 'Checks whether a string matches a given regular expression.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Regular Expressions'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.matches()`** method checks whether a string matches a given [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions), returning `true` or `false`.

## Syntax

```pseudo
string.matches(regex)
```

- The `.matches()` method returns a boolean value.
  - The parameter `regex` is a given regular expression that the string is compared to. 
  - This method only returns complete matches, it will not return 'true' for a subset of characters.

The `.matches()` method returns:
  - True if `regex` matches the string.
  - False if `regex` doesn't match the string.
  
## Example

The `.matches()` method is showcased in the following example:

```java
\\ Example.java

class Example {
  public static void main(String[] args) {
    // a regex that matches 'hello' or 'goodbye'
    String regex = "Hello|Goodbye";

    System.out.println("Hello World".matches(regex));
    System.out.println("Goodbye".matches(regex));
    System.out.println("Hello, Goodbye".matches(regex));
    System.out.println("Hello".matches(regex));
  }
}
```
This example results in the following output:

```shell
false
true
false
True
```