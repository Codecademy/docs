---
Title: '.contains()'
Description: 'Checks if an element is present in the ArrayList or not.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.contains()`** method is declared in the `List` interface and implemented in the `ArrayList` class. It is used to check if the element is present in the specified `ArrayList` or not. The function returns a boolean value of `true` if the element is present and `false` if not.

## Syntax

The `.contain()` method can be called on an `ArrayList` instance, and it requires one parameter, the object whose presence we need to check in `ArrayList`. More formally, it returns `true` if and only if the specified `ArrayList` contains at least one element `e` such that `(obj==null? e==null: obj.equals(e))`. Here `obj` is the object passed to the list, and `e` is an element of the list.

```pseudo
arrayListInstance.contains(obj);
```

`obj`: Element whose presence in the ArrayList is to be tested

## Example

In the example below, an empty `ArrayList` instance `fruitList` is created and can hold `String` type elements. Next, a few fruit names are added with the [`.add()`](https://www.codecademy.com/resources/docs/java/array-list/add) method. Lastly, the presence of two fruit names is checked in the `ArrayList` with the `.contains()` method:

```java
import java.util.ArrayList;

public class Fruits {
  public static void main(String[] args) {

    ArrayList<String> fruitList = new ArrayList<String>();

    fruitList.add("Mangos");
    fruitList.add("Bananas");
    fruitList.add("Watermelons");
    fruitList.add("Grapes");

    // Check if Oranges and Bananas are present in the fruit list or not.
    boolean areOrangesPresent = fruitList.contains("Oranges");
    boolean areBananasPresent = fruitList.contains("Bananas");

    System.out.println("Fruit list contains oranges: "+ areOrangesPresent);
    System.out.println("Fruit list contains bananas: "+ areBananasPresent);
  }
}
```

The output of the above will look like this:

```shell
Fruit list contains oranges: false
Fruit list contains bananas: true
```
