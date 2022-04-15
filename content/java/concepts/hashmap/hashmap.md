---
Title: 'HashMap'
Description: 'HashMap is used to store items as a key-value pairs. The keys and values can be of either same or different types.'
Subjects:
  - 'Computer Science'
Tags:
  - 'HashMap'
  - 'Data Types'
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A `HashMap`, like a [`TreeMap`](https://www.codecademy.com/resources/docs/java/TreeMap), implements the [`Map`](https://www.codecademy.com/resources/docs/java/Map) interface, which means it stores items as key-value pairs. Unlike a `TreeMap`, the `HashMap` stores its items sorted in no particular order. (Actually, it's sorted by the hashes of its keys, which for most purposes is essentially random.) This is due to the different storage types each collection uses internally. The `HashMap` stores its keys as hashes for lookup, whereas the `TreeMap` stores its keys in a binary tree structure for lookup. The advantage of a `HashMap` is that its operations are much faster.

## Syntax

The `HashMap` class comes from the `java.util` package. Therefore, it must be imported in order to be used:

```java
import java.util.HashMap

HashMap<KeyDatatype, ValueDatatype> myHashMap = new HashMap<KeyDatatype, ValueDatatype>();
```

The `HashMap` is initialized with two generic types inside angle brackets `< ... >`. The generic data types for `KeyDatatype` and `ValueDatatype` can either be different or the same.

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
    System.out.println(courseTeacher.get("History"););
  }
}
```

This will print the following output:

```shell
Lily
Ben
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
```

This will output the following "course=teacher" assignments:

```shell
{History=Ben, Mathematics=Jeanette, Physics=Lily}
```

## Accessing an Item

An item can be accessed within a `HashMap` using the `.get()` method. It accepts one parameter, the key, and returns the corresponding value. From the first example:

```java
System.out.println(courseTeacher.get("Physics"));
```

Will print "Lily" because `.get()` returns the corresponding value for the "Physics" key.

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
```

The following output will look like this:

```shell
{History=Ben, Mathematics=Jeanette}
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
```

An empty `HashMap` will be displayed in the output below:

```shell
{}
```

## Traversing a `HashMap`

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
