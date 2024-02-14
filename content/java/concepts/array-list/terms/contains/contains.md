---
Title: '.contains()'
Description: 'To check if an element is present in the list or not.'
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

The `.contains()` method is used for checking if the specified element is present in `ArrayList` or not. It will return true if the element is present; otherwise, it will return false.

## Syntax

To check if an element is present in `ArrayList`, it is passed as an argument in the `.contains()` method of `ArrayList`. The return value is of the boolean type. True if the element is present; otherwise, false if it is not present. More formally, it returns true if and only if this `ArrayList` contains at least one element `e` such that `(o==null? e==null: o.equals(e))`. Here `o` is the object passed to the list, and `e` is an element of the list.

```pseudo
arrayListInstance.contains(o);
```

## Example

In the example below, an empty `ArrayList` instance `fruitList` is created and can hold `String`-type elements. Next, a few fruit names are added with the [`.add()`](https://www.codecademy.com/resources/docs/java/array-list/add) method. Lastly, the presence of two fruit names is checked in the `ArrayList` with the `.contains()` method:

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
