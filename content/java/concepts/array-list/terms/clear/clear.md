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
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.clear()`** method in Java removes all elements from an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list). After invoking this method, the `ArrayList` will be empty, but its capacity remains unchanged. The method does not return a value, it simply empties the list.

## Syntax

```pseudo
myArrayList.clear();
```

## Example

The example below shows the use of the `.clear()` method:

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<String> fruits = new ArrayList<>();

        // Adding elements to the ArrayList
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        // printing the original ArrayList
        System.out.println("Fruits: " + fruits);  
        
        // Clearing the ArrayList
        fruits.clear();

        // Printing the cleared ArrayList
        System.out.println("Fruits after clear(): " + fruits);
    }
}
```

Here is the output for the code above:

```shell
Fruits: [Apple, Banana, Cherry]
Fruits after clear(): []
```
