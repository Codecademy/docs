---
Title: "concat()"
Subjects:
  - "Computer Science"
Tags:
  - "Methods"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-java"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition

Returns a string that is the concatenation of the given strings.

## Syntax

```java
public String concat(String str)
```

- `str` (required): An string value that will be concatenated, appended, to another string.

## Example 1

Append the string `flavor` to `dessert`:

```java
class FlavoredDessert {
  public static void main(String[] args) {
    String flavor = "Strawberry ";
    String dessert = "Ice Cream";
    System.out.println(flavor.concat(dessert));
    // Output: Strawberry Ice Cream
  }
}
```

## Example 2

Concat the strings `firstName`, `middleName`, and `lastName`:

```java
class FullName {
  public static void main(String[] args) {
    String firstName = "Kimberly ";
    String middleName = "Angela ";
    String lastName = "Rodriguez";
    System.out.println(firstName.concat(middleName).concat(lastName));
    // Output: Kimberly Angela Rodriguez
  }
}
```
