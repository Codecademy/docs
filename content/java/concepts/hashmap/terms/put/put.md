---
Title: '.put()'
Descripton: 'Associates the specified value with the specified key in this map.'
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

The HashMap **`.put()`** method is used to add a key-value pair to a [`HashMap`](https://www.codecademy.com/resources/docs/java/hashmap). If the key already exists, it updates the value associated with that key.

## Syntax

```java
hashMap.put(key,value);
```

Parameters:

- `key`: The key with which the specified value is to be associated.
- `value`: The value to be associated with the specified key.

Returns:

- The previous value associated with the key, or `null` if there was no mapping for the key.

## Example

This example demonstrates how to use the `.put()` method to add and update key-value pairs in a [`HashMap`](https://www.codecademy.com/resources/docs/java/hashmap).

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

```Shell
HashMap: {Alice=25, Bob=30, Charlie=35}
Previous age of Alice: 25
Updated HashMap: {Alice=26, Bob=30, Charlie=35}
```

## Codebyte Example

Run this code to see how the `.put()` method works with different scenarios:

```codebyte/java
import java.util.HashMap;

public class HashMapPutExample {
    public static void main(String[] args) {
        HashMap<String, String> countries = new HashMap<String, String>();
        
        // Adding new key-value pairs
        String result1 = countries.put("USA", "Washington D.C.");
        String result2 = countries.put("France", "Paris");
        String result3 = countries.put("Japan", "Tokyo");
        
        System.out.println("Adding new entries:");
        System.out.println("Result of adding USA: " + result1); // null
        System.out.println("Result of adding France: " + result2); // null
        System.out.println("Current map: " + countries);
        
        // Updating existing key
        String result4 = countries.put("USA", "Washington");
        System.out.println("\nUpdating existing entry:");
        System.out.println("Previous value for USA: " + result4); // Washington D.C.
        System.out.println("Updated map: " + countries);
        
        // Adding null values
        countries.put("Germany", null);
        countries.put(null, "Unknown");
        System.out.println("\nAfter adding null key and value:");
        System.out.println("Final map: " + countries);
    }
}
```
