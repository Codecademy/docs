---
Title: '.clear()'
Description: 'Removes all elements from an ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Java'
  - 'Elements'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.clear()`** [method](https://www.codecademy.com/resources/docs/java/methods) in Java removes all elements from an `ArrayList`. After invoking this method, the `ArrayList` gets empty, but its capacity remains unchanged. The method does not return a value.

## Syntax

```pseudo
myArrayList.clear();
```

- `myArrayList`: The `ArrayList` to be cleared.

## Example

The example below shows the use of the `.clear()` method:

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Creating an ArrayList
    ArrayList<String> fruits = new ArrayList<>();

    // Adding elements to the ArrayList
    fruits.add("Apple");
    fruits.add("Banana");
    fruits.add("Cherry");

    // Printing the ArrayList
    System.out.println("Fruits: " + fruits);

    // Clearing the ArrayList
    fruits.clear();

    // Printing the cleared ArrayList
    System.out.println("Fruits after .clear(): " + fruits);
  }
}
```

Here is the output for the code above:

```shell
Fruits: [Apple, Banana, Cherry]
Fruits after .clear(): []
```
