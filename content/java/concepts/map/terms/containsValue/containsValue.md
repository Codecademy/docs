---
Title: '.containsValue()'
Description: 'Checks if a given value is present in a map.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Map'
  - 'Hash Maps'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.containsValue()`** [method](https://www.codecademy.com/resources/docs/java/methods) determines whether a map contains a given value. This method returns `true` if the map has one or more keys that match with the given value and `false` if the map does not contain the given value.

## Syntax

```java
map.containsValue(value);
```

- `map`: The name of the map to be checked.
- `value`: The value to be searched.

## Example

The below example demonstrates the use of the `.containsValue()` method:

```java
import java.util.HashMap;

public class FlowerInventory {
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

The above code returns the following output:

```shell
Flowers that have a quantity of 10 is present? - true
Flowers that have a quantity of 3 is present? - false
```
