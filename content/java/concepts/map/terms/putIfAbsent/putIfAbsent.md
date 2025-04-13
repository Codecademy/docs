---
Title: '.putIfAbsent()'
Description: 'Adds the key-value pair to a map only if the key is not already present.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Hash Maps'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.putIfAbsent()`** method in Java adds a key-value pair to a map if the key isn't already there. If the `key` exists, it returns its associated `value`, showing no new addition. If the `key` is not present, it adds the pair to the map and returns `null`.

## Syntax

```pseudo
map.putIfAbsent(key, value)
```

- `key`: It is the `key` to be inserted into the map.
- `value`: It is the `value` associated with the `key`.

## Example

The following Java program demonstrates the `.putIfAbsent()` method:

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {

        // Creating a HashMap
        Map<Integer, String> map = new HashMap<>();

        // Adding some key-value pairs
        map.put(1, "apple");
        map.put(2, "banana");
        map.put(3, null); // Adding a key with a null value

        // Using putIfAbsent method
        String value1 = map.putIfAbsent(4, "orange");
        System.out.println("Value for key 4: " + value1);

        String value2 = map.putIfAbsent(2, "grape");
        System.out.println("Value for key 2: " + value2);

        String value3 = map.putIfAbsent(3, "pear");
        System.out.println("Value for key 3: " + value3);

        System.out.println("Updated Map: " + map);
    }
}
```

The output of the above code is as follows:

```shell
Value for key 4: null
Value for key 2: banana
Value for key 3: null
Updated Map: {1=apple, 2=banana, 3=pear, 4=orange}
```
