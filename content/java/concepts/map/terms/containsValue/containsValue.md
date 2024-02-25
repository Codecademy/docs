---
Title: 'containsValue()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'A map method used to check if a given value is present' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: 
  - 'Computer Science'
Tags: 
  - 'map'
  - 'hashmap'
  - 'java'
CatalogContent: 
  - 'learn-java'
  - 'paths/computer-science'
---

The map method **containsValue()** is used to determine whether a map contains a given value. It returns a boolean value. The boolean value will return true if the map has one or more keys that map to the given value. If the map does not contain the given value, it will return false.

## Syntax

```java
map.containsValue(value);
```

- value: This can be any type of Object

## Example

```java
import java.util.HashMap;

public class FlowerInventory{
  
  public static void main(String[] args) {

    //Create a hashmap for flowers where the string represents the name of the flower and the integer represents the quantity of the flower
    Map<String, Integer> inventory = new HashMap<String, Integer>();
    inventory.put("Roses", 10);
    inventory.put("Lillies", 5);
    inventory.put("Tulips", 1);

    System.out.println("Flowers that have a quantity of 10 is present? " + inventory.containsValue(10)); //Output: Flowers that have a quantity of 10 is present? true
    System.out.println("Flowers that have a quantity of 3 is present?" + inventory.containsValue(0)); // Output: Flowers that have a quantity of 3 is present? false
  }
}
```
