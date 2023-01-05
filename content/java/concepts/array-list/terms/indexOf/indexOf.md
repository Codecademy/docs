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

<!--TODO add link to .equals() if its docs are implemented -->

the content of the element is compared to the content of the elements in the [`ArrayList`(https://www.codecademy.com/resources/docs/java/array-list) using the `.equals()` method

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
    System.out.println(animals.indexOf("Tiger"));
  }
}
```

The code above will print the index of the first occurrence of the element `"Tiger"` in the [`ArrayList`(https://www.codecademy.com/resources/docs/java/array-list) which is `1`.

## Output

```shell
1
```
