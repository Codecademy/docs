---
Title: '.containsValue()'
Description: 'A map method used to check if a given value is present'
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

The **`.containsValue()`** method determines whether a map contains the given value. The method returns the boolean value `true` if the map has one or more keys that map to the given value and `false` if the map does not contain the given value.

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

    HashMap<String, Integer> inventory = new HashMap<String, Integer>();
    inventory.put("Roses", 10);
    inventory.put("Lillies", 5);
    inventory.put("Tulips", 1);

    System.out.println("Flowers that have a quantity of 10 is present? - " + inventory.containsValue(10));
    System.out.println("Flowers that have a quantity of 3 is present? - " + inventory.containsValue(0));
  }
}
```
