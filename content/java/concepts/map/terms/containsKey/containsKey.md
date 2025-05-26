---
Title: '.containsKey()'
Description: 'Checks if a map contains a specified key.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Structures'
  - 'Elements'
  - 'Hash Maps'
  - 'Values'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.containsKey()`** method is declared in the `Map` interface and is primarily implemented in the [`HashMap`](https://www.codecademy.com/resources/docs/java/hashmap) class. It is used to determine if a `Map` object contains a specific key. The method returns `true` if the key exists and `false` otherwise.

## Syntax

The `.containsKey()` method can be called on a `HashMap` instance like this:

```pseudo
hashMap.containsKey(key);
```

**Parameters:**

- `key`: The key to be checked. This can take on the form of any type of `Object`.

**Return value:**

The `.containsKey()` method returns `true` if the map contains the given key and `false` otherwise.

## Example 1: Basic Usage of `.containsKey()`

In this example, the `.containsKey()` method is used to check for the presence of the keys `"Apples"` and `"Bananas"` within a `HashMap`:

```java
import java.util.HashMap;

public class Groceries {
  public static void main(String[] args) {
    // Create a HashMap
    HashMap<String, Integer> basket = new HashMap<String, Integer>();

    // Add items to the HashMap
    basket.put("Apples", 50);
    basket.put("Oranges", 30);

    // Check if the key "Apples" exists in the HashMap
    System.out.println("Basket contains Apples: " + basket.containsKey("Apples"));

    // Check if the key "Bananas" exists in the HashMap
    System.out.println("Basket contains Bananas: " + basket.containsKey("Bananas"));
  }
}
```

Here is the output:

```shell
Basket contains Apples: true
Basket contains Bananas: false
```

## Example 2: Conditional Logic with `.containsKey()`

In this example, the `.containsKey()` method is used to check if the key `"Germany"` exists in the map before adding it. This prevents overwriting existing data unintentionally:

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    // Create a HashMap
    HashMap<String, String> capitals = new HashMap<>();

    // Add items to the HashMap
    capitals.put("USA", "Washington, D.C.");
    capitals.put("France", "Paris");

    // Create a string
    String country = "Germany";

    // Check if the key "Germany" exists in the HashMap
    if (!capitals.containsKey(country)) {
      // Add the key "Germany" to the HashMap
      capitals.put(country, "Berlin");

      System.out.println(country + " is added to the map.");
    } else {
      System.out.println(country + " is already in the map.");
    }
  }
}
```

Here is the output:

```shell
Germany is added to the map.
```

## Example 3: Using `.containsKey()` in Loops

In this example, the `.containsKey()` method is used in a loop to validate the presence of multiple keys in a map before attempting to retrieve their values:

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    // Create a HashMap
    HashMap<Integer, String> idMap = new HashMap<>();

    // Add items to the HashMap
    idMap.put(1, "Apple");
    idMap.put(2, "Banana");
    idMap.put(3, "Cherry");

    // Create an array
    int[] searchKeys = {2, 4};

    // Check if the keys in the array exist in the HashMap
    for (int key : searchKeys) {
      if (idMap.containsKey(key)) {
        System.out.println("Key " + key + " maps to value: " + idMap.get(key));
      } else {
        System.out.println("Key " + key + " not found.");
      }
    }
  }
}
```

In this example, the `.get()` method is used to get the value of a specific key.

Here is the output:

```shell
Key 2 maps to value: Banana
Key 4 not found.
```

## Frequently Asked Questions

### 1. Can `.containsKey()` be used with all map types?

Yes, all classes implementing the `Map` interface (e.g., `HashMap`, `TreeMap`, `LinkedHashMap`) support the `.containsKey()` method.

### 2. What happens if I pass `null` as a key to `.containsKey()`?

If the map allows `null` keys (like `HashMap`), `.containsKey()` will work. Otherwise, a `NullPointerException` is thrown.

### 3. Is `.containsKey()` time-efficient?

Yes. In a `HashMap`, `.containsKey()` has average time complexity of _O(1)_, making it very efficient for key lookups.
