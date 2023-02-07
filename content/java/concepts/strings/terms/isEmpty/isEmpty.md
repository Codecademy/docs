---
Title: '.isEmpty()'
Description: 'Returns true if a string has no content. Returns false if the string has content.
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Returns `true` if a string has no content. Returns `false` if the string has content.

## Syntax

```java
string.isEmpty();
```

- `string` The String to be checked for content.

## Example 1

Call the `.isEmptyMethod()` method on the `drink` String and the `food` String:

```java
class isStringEmpty {
  public static void main(String[] args) {
    String drink = "lemonade";
    String food = "";

    System.out.println(drink.isEmpty());
    System.out.println(food.isEmpty());
    // Output: false
    // Output: true
  }
}
```

## Example 2

Call the `.isEmptyMethod()` method on the `clothes` String and the `hat` String and save to boolean variables:

```java
class isStringEmpty {
  public static void main(String[] args) {
    String clothes = "jacket";
    String hat = "";

    boolean clothesIsEmpty = clothes.isEmpty();
    boolean hatIsEmpty = hat.isEmpty();
    
    System.out.println(clothesIsEmpty);
    System.out.println(hatIsEmpty);
    // Output: false
    // Output: true
  }
}
```
