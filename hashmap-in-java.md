# Hashmaps in Java

## Introduction
Hashmaps are part of Java's collection framework and allow you to store key-value pairs.

## Basic Operations
- **Adding a value:** `map.put(key, value);`
- **Retrieving a value:** `map.get(key);`
- **Removing a value:** `map.remove(key);`

## Example Code
```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("Apple", 1);
        map.put("Banana", 2);
        System.out.println(map.get("Apple")); // Outputs: 1
    }
}
