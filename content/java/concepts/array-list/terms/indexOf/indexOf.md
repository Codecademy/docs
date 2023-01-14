---
Title: '.indexOf()'
Description: 'Returns the index of the first occurrence of a given element, or -1 if not found.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Elements'
  - 'Search'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.indexOf()`** method returns the index of the first occurrence of the specified element in an `ArrayList`. If the element is not found, -1 is returned.

## Syntax

```pseudo
myArrayList.indexOf(element);
```

The index of its first occurrence (even if the value if `null`) is returned if the `element` exists. If the `element` can't be found, -1 will be returned.

## Example

The following example features two calls to `.indexOf()` on `animals`. The first will print the index of the first occurrence of the element with the string `"Tiger"`. The second will return -1 because `"Elephant"` does not exist in `animals`:

```java
// Import the ArrayList class from the java.util package
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Create ArrayList of type String named animals
    ArrayList<String> animals = new ArrayList<String>();
    animals.add("Lion");
    animals.add("Tiger");
    animals.add("Cat");
    animals.add("Dog");
    animals.add("Tiger");
    animals.add("Lion");
    animals.add("Tiger");
    System.out.println(animals.indexOf("Tiger"));
    System.out.println(animals.indexOf("Elephant"));

  }
}
```

This will print the following output:

```shell
1
-1
```

The `.indexOf()` method does not work with primitive data types.

## Example 2

```java
public class Main {
  public static void main(String[] args) {
//    array
    int[] arr = {1, 2, 3, 4, 5};
    // check if a element is peresent in a array
    // returns errror as arrays dont have indexOf() method
    System.out.println(arr.indexOf(3));

  }
}
```
```shell
error: cannot find symbol
    System.out.println(arr.indexOf(3));
                      ^
  symbol:   method indexOf(int)
  location: variable arr of type int[]
1 error
```

To use the `.indexOf()` method with primitive data types, you need to use the wrapper classes.
