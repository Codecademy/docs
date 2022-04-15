---
Title: 'TreeMap'
Description: 'Used to store items as key-value pairs, ensuring items are sorted in a natural key order. The keys and values can be either the same or of different types.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Data Structures'
  - 'Data Types'
  - 'Collections'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A `TreeMap`, like a [`HashMap`](https://www.codecademy.com/resources/docs/java/HashMap), uses the [`Map`](https://www.codecademy.com/resources/docs/java/Map) interface, which means it stores items as key-value pairs. Unlike a `HashMap`, the `TreeMap` stores its items sorted by the natural ordering of its keys. This is due to the differing means of storage each type of collection uses internally. The `HashMap` stores its keys as hashes for lookup, whereas the `TreeMap` stores its keys in a binary tree structure for lookup. The tradeoff for this natural ordering of the `TreeMap` is that it operates slower than a `HashMap`.

## Syntax

```java
import java.util.TreeMap

TreeMap<KeyDatatype, ValueDatatype> myTreeMap = new TreeMap<KeyDatatype, ValueDatatype>();
```

The `TreeMap` class comes from the `java.util` package. Therefore, it must be imported in order to be used. The `TreeMap` is initialized with two generic types inside angle brackets `< ... >`. The generic data types for `KeyDatatype` and `ValueDatatype` can either be different or the same.

## Accessing Items

Keys are used for uniquely identifying a value in a `HashMap`. This allows for efficient data storage and easy access. In the example below, the course names are the keys and the teachers assigned are the values that can be accessed by passing the corresponding key into the `.get()` method.

```java
import java.util.TreeMap;

public class Main {
  public static void main(String[] args) {

    TreeMap<String, String> courseTeacher = new TreeMap<String, String>();

    // Add keys and values (CourseNames, Teacher)
    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    System.out.println(courseTeacher.get("Physics"));
    System.out.println(courseTeacher.get("History"));
  }
}
```

This will output:

```shell
Lily
Ben
```

## Adding Items

Items can be added to a `TreeMap` using the `.put()` method. It accepts two parameters, a key and a value, and stores them as a pair (`{ key=value }`).

```java
import java.util.TreeMap;

public class Main {
  public static void main(String[] args) {
    TreeMap<String, String> courseTeacher = new TreeMap<String, String>();

    // Add keys and values (CourseNames, Teacher)
    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    System.out.println(courseTeacher);
  }
}
```

This will output:

```shell
{History=Ben, Mathematics=Jeanette, Physics=Lily}
```

## Removing Items

Items can be removed from a `TreeMap` using the `.remove()` method. It accepts one parameter, the key, and removes the corresponding key-value pair from the `HashMap`.

```java
import java.util.TreeMap;

public class Main {
  public static void main(String[] args) {

    TreeMap<String, String> courseTeacher = new TreeMap<String, String>();

    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    courseTeacher.remove("Physics");
    System.out.println(courseTeacher);

  }
}
```

This will output the following:

```shell
{History=Ben, Mathematics=Jeanette}
```

## Removing All Items

The `.clear()` method can be used to remove all the items from the `TreeMap`.

```java
import java.util.TreeMap;

public class Main {
  public static void main(String[] args) {

    TreeMap<String, String> courseTeacher = new TreeMap<String, String>();

    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    courseTeacher.clear();
    System.out.println(courseTeacher);
  }
}
```

The emptied `TreeMap` will be displayed in the output below:

```shell
{}
```

## Traversing a `TreeMap`

A `TreeMap` can be traversed with the for-each [loop](https://www.codecademy.com/resources/docs/java/loops). The `.keySet()` method can be used to obtain only the keys while the `.values()` method can be used to obtain only values.

```java
import java.util.TreeMap;

public class Main {
  public static void main(String[] args) {

    TreeMap<String, String> courseTeacher = new TreeMap<String, String>();

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

The following output will look like this:

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
