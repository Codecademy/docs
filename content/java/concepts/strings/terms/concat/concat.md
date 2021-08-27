---
Title: '.concat()'
Description: 'Returns a string that is the concatenation of the given strings.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Returns a string that is the concatenation of the given strings.

## Syntax

```java
string.concat(String str)
```

- `str` (required): A string value that will be concatenated, appended, to another string.

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
