---
Title: '.isEmpty()'
Description: 'Returns true if a string has no content, otherwise false.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.isEmpty()`** method returns `true` if a string has no content. It returns `false` if the string has content.

## Syntax

```java
string.isEmpty();
```

- `string`: The string to be checked for content.

## Example 1

The example below applies the `.isEmpty()` method to the strings `drink` and `food`:

```java
// isStringEmpty.java
class isStringEmpty {
  public static void main(String[] args) {
    String drink = "lemonade";
    String food = "";

    System.out.println(drink.isEmpty());
    System.out.println(food.isEmpty());
  }
}
```

This will print the following output:

```shell
false
true
```
