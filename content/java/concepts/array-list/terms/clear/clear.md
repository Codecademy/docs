---
Title: 'clear()'
Description: 'Removes all elements from an ArrayList.' 
Subjects:
  - 'Java'
  - 'Data Structures'
Tags:
  - 'Method'
  - 'ArrayList'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/java-developer'
---

The **`clear()`** method removes all elements from an **ArrayList** in Java. After invoking this method, the list will be empty, but the ArrayList instance remains with its current capacity unchanged. It does not return anything but rather empties the list.

## Syntax

```pseudo
arrayListInstance.clear();
```

## Example
```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList and add some elements
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        
        System.out.println("Fruits: " + fruits);  // Output: Fruits: [Apple, Banana, Cherry]
        
        // Clear the ArrayList
        fruits.clear();
        
        System.out.println("Fruits after clear(): " + fruits);  // Output: Fruits after clear(): []
    }
}
```