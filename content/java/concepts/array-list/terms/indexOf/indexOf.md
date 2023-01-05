---
Title: '.indexOf()'
Description: 'If ArrayList contains given element returns the index of the first occurrence of it , else -1'
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

The **`.indexOf()`** method returns the index of the first occurrence of the specified element in [`ArrayList`(https://www.codecademy.com/resources/docs/java/array-list), or -1 if it does not contain the element

## Syntax

```pseudo
arrayListInstance.indexOf(element);
```

Signature of the method is `indexOf(Object element)` where `element` is the element whose lowest index is to be returned.

it does not throw any exception if the element is not present in the [`ArrayList`(https://www.codecademy.com/resources/docs/java/array-list) but returns -1.

but `.equals()` method may throw a NullPointerException if the element is null.

## Example

```java
// Import the ArrayList class from the java.util package
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Create ArrayList of type String named animals
    ArrayList<String> animals = new ArrayList<String>();
    // Add elements to ArrayList refer .add() docs for more info
    animals.add("Lion");
    animals.add("Tiger");
    animals.add("Cat");
    animals.add("Dog");
    animals.add("Tiger");
    animals.add("Lion");
    animals.add("Tiger");
    // Print the index of the first occurrence of the element "Tiger" in this case 1
    System.out.println(animals.indexOf("Tiger\n"));
    System.out.println(animals.indexOf("Elephant"));

  }
}
```

The code above will print the index of the first occurrence of the element `"Tiger"` in the [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) which is `1`.

## Output

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

## Output for above code

```shell
error: cannot find symbol
    System.out.println(arr.indexOf(3));
                      ^
  symbol:   method indexOf(int)
  location: variable arr of type int[]
1 error
```

To use the `.indexOf()` method with primitive data types, you need to use the wrapper classes.
