---
Title: 'HashMap'
Description: 'In Java, a HashMap is used to store items as a "key/value" pairs. The keys and values can be of either same or different types. java // Create a HashMap which stores courses and their teachers as a key/value pair  HashMap<String, String> courseTeacher = new HashMap<String, String>();'
Subjects:
  - 'Computer Science'
Tags:
  - 'HashMap'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, a HashMap is used to store items as key-value pairs. The key and value can be of the same or different data type.

```java
// Create a HashMap which stores courses and their teachers as a key/value pair
HashMap<String, String> courseTeacher = new HashMap<String, String>();
```

## Creating a HashMap

In Java, a `HashMap` can be created in the following way:

```java
HashMap<KeyDatatype, ValueDatatype> HashMapName = new HashMap<KeyDatatype, ValueDatatype>();

```java
// Import the HashMap class
import java.util.HashMap;

  // Create a HashMap which stores courses and their teachers as a key/value pair
HashMap<String, String> courseTeacher = new HashMap<String, String>();
```

Here, `courseTeacher` will store keys of courses with `String` type and values of Teacher assigned for the course also of `String` type.

```java
// Import the HashMap class
import java.util.HashMap;

// Create a HashMap which stores students and their marks as a key-value pair
HashMap<String, Integer> studentMarks = new HashMap<String, Integer>();
```

Here, `studentMarks` stores keys of student names of `String` type and values of marks secured by the student of `Integer` type.

## Key-Value

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

In Java, an item can be added to a `HashMap` using the `.put()` method.

The `.put()` method takes in 2 attributes:

- key
- value

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

    System.out.println(courseTeacher);
    //Output: {Mathematics=Jeanette, History=Ben, Physics=Lily}


  }
}
```

## Accessing an Item

In Java, an item can be accessed within a `HashMap` using the `get()` method.

The `.get()` method takes in one attribute which is the key and returns the corresponding value.

```java
courseTeacher.get("Physics");
// Returns "Lily" which is the value for the key "Physics"
```

## Removing Items

In Java, an item can be removed from a `HashMap` using the `.remove()` method.

The `.remove()` method takes in 1 attribute which is the key and the method deletes the corresponding key-value pair from the `HashMap`.

```java
courseTeacher.remove("Physics");
```

```java
import java.util.HashMap; // import the HashMap class

public class Main {
  public static void main(String[] args) {

    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    // put(CourseName, Teacher)
    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    courseTeacher.remove("Physics");
    System.out.println(courseTeacher);

  }
}

// Output: { Mathematics = Jeanette, History = Ben }
```

The `clear` method can be used to delete all the items from the `HashMap`.

```java
courseTeacher.clear();
```

```java
import java.util.HashMap; // import the HashMap class

public class Main {
  public static void main(String[] args) {

    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    // put(CourseName, Teacher)
    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    courseTeacher.clear();
    System.out.println(courseTeacher);

  }
}

//Output: {}
```

## Traversing through a HashMap

A `HashMap` can easily be traversed with the for-each loop.

The `keySet()` method can be used to obtain only the keys while the `values()` method can be used to obtain only values.

```codebyte/java
import java.util.HashMap; // import the HashMap class

public class Main {
  public static void main(String[] args) {

    HashMap<String, String> courseTeacher = new HashMap<String, String>();

    courseTeacher.put("History", "Ben");
    courseTeacher.put("Mathematics", "Jeanette");
    courseTeacher.put("Physics", "Lily");

    System.out.println("Courses offered at our Institute:");

    for (String i : courseTeacher.keySet())
      System.out.println(i);

    System.out.println("\nTeachers teaching at our Institute:");

    for (String i : courseTeacher.values())
      System.out.println(i);

  }
}

/*
Output:
Courses offered at our Institute:
Mathematics
History
Physics

Teachers teaching at our Institute:
Jeanette
Ben
Lily
*/
```
