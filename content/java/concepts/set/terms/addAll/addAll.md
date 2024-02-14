---
Title: '.addAll()'
Description: 'Adds all of the elements in the specified collection to this set if they are not already present.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Set'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.addAll()` method is declared in the [`Set`](https://www.codecademy.com/resources/docs/java/set) interface and is implemented in the [`HashSet`](https://www.codecademy.com/resources/docs/java/hashset) class. It is used to add all of the elements in the specified [`collection`](https://www.codecademy.com/resources/docs/java/collection) to this set if they're not already present. The function returns a boolean value `true` if the elements are added successfully, and `false` if not.

## Syntax

The `.addAll()` method can be called on a `HashSet` instance and it requires one parameter, the collection which we need to add in the set:

```pseudo
hashSet.addAll(Collection<? extends E> c);
```

`Collection<? extends E> c` : Here `c` is a collection of type `? extends E`. The method can take any collection of elements that are a subtype of E. This means that you can add elements of a subclass of E to the Set, but you cannot add elements of a superclass of E.

## Example

In the example below, the `.addAll()` method is used to add elements of `shoppingList1` and `shoppingList2` in the `combinedShoppingList` set:

```java
import java.util.HashSet;
import java.util.Set;

public class GroceryShopping {
  public static void main(String[] args) {

    // Creating two sets representing grocery shopping lists
    Set<String> shoppingList1 = new HashSet<>();
    Set<String> shoppingList2 = new HashSet<>();

     // Adding items to the first shopping list
    shoppingList1.add("Apples");
    shoppingList1.add("Bananas");
    shoppingList1.add("Milk");

    // Adding items to the second shopping list, including a common item with shoppingList1
    shoppingList2.add("Grapes");
    shoppingList2.add("Bananas"); // Common item
    shoppingList2.add("Bread");

    // Creating a new set to combine items from both shopping lists
    Set<String> combinedShoppingList = new HashSet<>();

    // Using addAll() to combine items from shoppingList1 and shoppingList2
    combinedShoppingList.addAll(shoppingList1);
    combinedShoppingList.addAll(shoppingList2);

    // Displaying the contents of the combined shopping list
    System.out.println("Combined Shopping List: " + combinedShoppingList);
  }
}
```

The above example will give the following output:

```shell
Combined Shopping List: [Bread, Grapes, Bananas, Apples, Milk]
```

In the above example, both sets contain `Bananas`, however, the `combinedShoppingList` set contains it only once.
