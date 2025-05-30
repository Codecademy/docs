---
Title: '.put()'
Description: 'Associates the specified value with the specified key in this map.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Data Types'
  - 'HashMap'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`.put()`** method is used to add a key-value pair to a `HashMap`. If the key already exists, it modifies the value associated with that key.

## Syntax

```pseudo
hashMap.put(key,value);
```

**Parameters:**

- `key`: The key with which the given value is to be associated.
- `value`: The value to be linked with the specified key.

**Return value:**

- The previous value linked with the key, or `null` if there's no mapping for the key.

## Example

This example demonstrates how to use the `.put()` method to add and update key-value pairs in a `HashMap`:

```java
import java.util.HashMap;

public class HashMapExample {
  public static void main(String[] args){
    HashMap<String, Integer> ages = new HashMap<String, Integer>();
  
    // Adding key-value pairs to the HashMap
    ages.put("Alice", 25);
    ages.put("Bob",27);
    ages.put("Charlie",30);
  
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
HashMap: {Alice=25, Bob=30, Charlie=35}
Previous age of Alice: 25
Updated HashMap: {Alice=26, Bob=30, Charlie=35}
```
