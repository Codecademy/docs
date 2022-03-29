---
Title: 'HashMap'
Description: 'HashMap is used to store items as a key-value pairs. The keys and values can be of either same or different types.'
Subjects:
  - 'Computer Science'
Tags:
  - 'HashMap'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, a `HashMap` is used to store items as key-value pairs. The key and value can be of the same or different data type.

## Syntax

The `HashMap` class comes from the `java.util` package. Therefore, it must be imported in order to be used:

```java
import java.util.HashMap
```

Next, the `HashMap` is initialized with two generic types inside angle brackets `<` `>`:

```java
HashMap<KeyDatatype, ValueDatatype> myHashMap = new HashMap<KeyDatatype, ValueDatatype>();
```

The generic data type for `KeyDatatype` and `ValueDatatype` can either be different or the same.

## Keys and Values

A key can be used to uniquely identify a value in a `HashMap`. This allows for efficient data storage and easy access. In the example below, the course names are the keys and the teachers assigned are the values that can be accessed using the corresponding key.

```java
// Import the HashMap class
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {

    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    // Add keys and values (CourseNames, Teacher)
    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    System.out.println(courseTeacher.get("Physics"););
    // Output: Lily

    System.out.println(courseTeacher.get("History"););
    // Output: Ben
  }
}
```

## Adding Items

Items can be added to a `HashMap` using the `.put()` method. It accepts two attributes, a key and a value, and stores them as a pair (`{ key=value }`).

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    // Add keys and values (CourseNames, Teacher)
    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    System.out.println(courseTeacher);
  }
}

// Output: { Mathematics=Jeanette, History=Ben, Physics=Lily }
```

## Accessing an Item

An item can be accessed within a `HashMap` using the `.get()` method. It accepts one parameter, the key, and returns the corresponding value. Based on the previous example:

```java
courseTeacher.get("Physics"); // Output: "Lily"
```

"Lily" is returned because it is the corresponding value for the "Physics" key.

## Removing Items

Items can be removed from a `HashMap` using the `.remove()` method. It accepts one parameter, the key, and removes the corresponding key-value pair from the `HashMap`.

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {

    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    courseTeacher.remove("Physics");
    System.out.println(courseTeacher);

  }
}

// Output: { Mathematics = Jeanette, History = Ben }
```

## Removing All Items

The `.clear()` method can be used to remove all the items from the `HashMap`.

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {

    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    courseTeacher.clear();
    System.out.println(courseTeacher);

  }
}

// Output: {}
```

## Traversing a HashMap

A `HashMap` can be traversed with the for-each [loop](https://www.codecademy.com/resources/docs/java/loops). The `.keySet()` method can be used to obtain only the keys while the `.values()` method can be used to obtain only values.

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {

    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    System.out.println("Courses offered at our Institute:");

    for (String i : courseTeacher.keySet()) {
      System.out.println(i);
    }

    System.out.println("\nTeachers teaching at our Institute:");

    for (String i : courseTeacher.values()) {
      System.out.println(i);
    }
  }
}
```

The output will be:

```shell
Courses offered at our Institute:
Mathematics
History
Physics

Teachers teaching at our Institute:
Jeanette
Ben
Lily
```

