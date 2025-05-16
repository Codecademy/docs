---
Title: 'HashMap'
Description: 'Stores items as key-value pairs, where each key is unique and can be used to fetch the associated value.'
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

A **`HashMap`** is an important part of the Java collections framework and implements the [`Map`](https://www.codecademy.com/resources/docs/java/map) interface. It stores items as key-value pairs, where each key is unique and is used to fetch the associated value. It is one of the most commonly used data structures for storing key-value pairs. It offers fast lookups, insertions, and deletions, making it an excellent choice for many programming tasks where performance matters.

**Key characteristics:**

- **Null Support**: Allows a single `null` key and multiple `null` values.
- **Order**: Does not maintain any insertion or sorted order of elements.
- **Thread Safety**: Not synchronized by default; not safe for concurrent access without external synchronization.
- **Performance**: Provides constant-time performance for `.get()` and `.put()` operations in average cases.
- **Key Uniqueness**: Keys must be unique; inserting a duplicate key will overwrite the existing value.

## Creating a `HashMap`

The `HashMap` [class](https://www.codecademy.com/resources/docs/java/classes) in Java is part of the `java.util` package:

```pseudo
import java.util.HashMap;

HashMap<KeyDataType, ValueDataType> myHashMap = new HashMap<KeyDataType, ValueDataType>();
```

In the syntax:

- `KeyDataType`: The [data type](https://www.codecademy.com/resources/docs/java/data-types) of the keys to be inserted.
- `ValueDataType`: The data type of the values to be inserted.

## Accessing Items in a `HashMap`

The `.get()` [method](https://www.codecademy.com/resources/docs/java/methods) can be used to access the value of a key in a `HashMap`.

### Syntax

```pseudo
hashmap_name.get(key);
```

**Parameters:**

- `key`: The key whose value is to be accessed.

**Return value:**

The `.get()` method returns the value of the given key.

### Example

This example demonstrates the usage of the `.get()` method to access the value of a key in a `HashMap`:

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    // Create a HashMap
    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    // Add items to the HashMap
    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    // Access the value of a key
    System.out.println(courseTeacher.get("Physics"));
  }
}
```

Here is the output:

```shell
Lily
```

## Adding Items to a `HashMap`

The `.put()` method is used to add items to a `HashMap`.

### Syntax

```pseudo
hashmap_name.put(key, value);
```

**Parameters:**

- `key`: The key to be added.
- `value`: The value for the key to be added.

### Example

This example demonstrates the usage of the `.put()` method to add items to a `HashMap`:

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    // Create a HashMap
    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    // Add items to the HashMap
    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    // Print the HashMap
    System.out.println(courseTeacher);
  }
}
```

Here is the output:

```shell
{Mathematics=Jeanette, History=Ben, Physics=Lily}
```

## Removing Items from a `HashMap`

There are two methods that can be used to remove items from a `HashMap`:

- `.remove()`: This method can be used to delete an item from a `HashMap`.
- `.clear()`: This method can be used to delete all items from a `HashMap`.

### Syntax

Here is the syntax for these methods:

```pseudo
hashmap_name.remove(key);
hashmap_name.clear();
```

**Parameters:**

- `key`: The key to be deleted along with its value.

### Example

This example demonstrates the usage of the `.remove()` and `.clear()` methods to delete items from a `HashMap`:

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    // Create a HashMap
    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    // Add items to the HashMap
    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    // Remove an item from the HashMap
    courseTeacher.remove("Physics");

    // Print the HashMap
    System.out.println(courseTeacher);

    // Remove all items from the HashMap
    courseTeacher.clear();

    // Print the HashMap
    System.out.println(courseTeacher);
  }
}
```

Here is the output:

```shell
{Mathematics=Jeanette, History=Ben}
{}
```

## Iterating Over a `HashMap`

There are three methods that can be used to iterate over a `HashMap`:

- `.keySet()`: Used to iterate over the keys in a `HashMap`.
- `.values()`: Used to iterate over the values in a `HashMap`.
- `.entrySet()`: Used to iterate over the items in a `HashMap`.

### Syntax

Here is the syntax for these methods:

```pseudo
hashmap_name.keySet();
hashmap_name.values();
hashmap_name.entrySet();
```

### Example

This example demonstrates the usage of the `for-each` [loop](https://www.codecademy.com/resources/docs/java/loops) to iterate over a `HashMap`:

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
  public static void main(String[] args) {
    // Create a HashMap
    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    // Add items to the HashMap
    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    // Iterate over the keys in the HashMap
    for (String i : courseTeacher.keySet()) {
      System.out.println(i);
    }

    // Iterate over the values in the HashMap
    for (String i : courseTeacher.values()) {
      System.out.println(i);
    }

    // Iterate over the items in the HashMap
    for (Map.Entry<String, String> entry: courseTeacher.entrySet()) {
      System.out.print(entry);
      System.out.print("\n");
    }
  }
}
```

In the example, `Map.Entry` is a nested interface within the `Map` interface that represents a key-value pair stored in a map.

Here is the output:

```shell
Mathematics
History
Physics
Jeanette
Ben
Lily
Mathematics=Jeanette
History=Ben
Physics=Lily
```

## Frequently Asked Questions

### 1. How does a `HashMap` work internally?

A `HashMap` uses an array of buckets, and each bucket is a linked list or a balanced tree (from Java 8 onward). Keys are hashed to determine the bucket index, and values are stored accordingly.

### 2. Is `HashMap` thread-safe?

No. `HashMap` is not synchronized. For thread-safe operations, use `Collections.synchronizedMap()` or `ConcurrentHashMap`.

### 3. How to increase the performance of a HashMap?

- Choose an appropriate initial capacity and load factor.
- Use immutable keys with properly implemented `hashCode()` and `equals()` methods.
