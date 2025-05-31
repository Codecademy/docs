---
Title: '.put()'
Description: 'Inserts or updates a key-value pair in the map.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Data Types'
  - 'Hash Maps'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`.put()`** method adds a key-value pair to a HashMap; if the key already exists, it updates the corresponding value.

## Syntax

```pseudo
hashMap.put(key, value);
```

**Parameters:**

- `key`: The key with which the given value is to be associated.
- `value`: The value to be associated with the specified key.

**Return value:**

Returns the previous value associated with the specified key, or `null` if the key was not previously present in the map.

## Example

This example demonstrates how to use the `.put()` method to add and update key-value pairs in a `HashMap`:

```java
import java.util.HashMap;

public class HashMapExample {
  public static void main(String[] args){
    HashMap<String, Integer> ages = new HashMap<String, Integer>();

    // Adding key-value pairs to the HashMap
    ages.put("Alice", 25);
    ages.put("Bob", 27);
    ages.put("Charlie", 30);

    // Printing the HashMap
    System.out.println("HashMap: " + ages);

    // Updating the value for an existing key
    Integer previousAge = ages.put("Alice", 26);
    System.out.println("Previous age of Alice: " + previousAge);
    System.out.println("Updated HashMap: " + ages);
  }
}
```

The output of this code is:

```shell
HashMap: {Bob=27, Alice=25, Charlie=30}
Previous age of Alice: 25
Updated HashMap: {Bob=27, Alice=26, Charlie=30}
```
