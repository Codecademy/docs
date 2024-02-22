---
Title: '.contains()'
Description: 'Checks if an element is present in the ArrayList or not.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Java'
  - 'Arrays'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.contains()`** [method](https://www.codecademy.com/resources/docs/java/methods) is declared in the `List` [interface](https://www.codecademy.com/resources/docs/java/interfaces) and implemented in the [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) [class](https://www.codecademy.com/resources/docs/java/classes). It is used to check if the element is present in the specified `ArrayList` or not. The function returns a boolean value of `true` if the element is present and `false` if not.

## Syntax

The `.contains()` method can be called on an `ArrayList` instance and requires a single parameter:

```pseudo
arrayListInstance.contains(obj);
```

- `arrayListInstance`: The `ArrayList` on which the `.contains()` method is called.
- `obj`: The element whose presence in the `ArrayList` is to be checked.

## Example

In the example below, an empty `ArrayList` instance `fruitList` is created, which can hold [`String`](https://www.codecademy.com/resources/docs/java/strings) type elements. Next, a few fruit names are added with the [`.add()`](https://www.codecademy.com/resources/docs/java/array-list/add) method. Lastly, the presence of two fruit names is checked in the `ArrayList` with the `.contains()` method:

```java
import java.util.ArrayList;

public class Fruits {
  public static void main(String[] args) {

    ArrayList<String> fruitList = new ArrayList<String>();

    fruitList.add("Mangos");
    fruitList.add("Bananas");
    fruitList.add("Watermelons");
    fruitList.add("Grapes");

    // Checking if 'Oranges' and 'Bananas' are present in 'fruitList'
    boolean areOrangesPresent = fruitList.contains("Oranges");
    boolean areBananasPresent = fruitList.contains("Bananas");

    System.out.println("Fruit list contains oranges: "+ areOrangesPresent);
    System.out.println("Fruit list contains bananas: "+ areBananasPresent);
  }
}
```

The output of the above example will look like this:

```shell
Fruit list contains oranges: false
Fruit list contains bananas: true
```
