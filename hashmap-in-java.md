Markdown
---
title: "HashMap in Java"
description: "A HashMap in Java is a part of the Java Collections Framework that stores data in key-value pairs. It uses a hash table for fast retrieval."
tags: [java, hashmap, data-structures, collections]
---

# HashMap in Java

A `HashMap` in Java is a part of the **Java Collections Framework**. It stores **key-value pairs**, where each key is unique and is used to retrieve its corresponding value.

`HashMap` implements the `Map` interface and is backed by a **hash table**.

## Key Features

- Stores data as **(Key, Value)** pairs.
- **Keys must be unique**, but values can be duplicated.
- Allows `null` for **one key** and **multiple values**.
- **Not synchronized** (not thread-safe by default).
- Provides constant-time performance for basic operations like `get()` and `put()` (on average).

---

## Declaration and Initialization

```java
import java.util.HashMap;

HashMap<Integer, String> map = new HashMap<>();

Example:
import java.util.HashMap;

public class Example {
    public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();

        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(3, "Cherry");

        System.out.println(map.get(2)); // Output: Banana

        map.remove(3);
        System.out.println(map.containsKey(3)); // Output: false
    }
}