---
Title: '.forEach()'
Description: 'Performs a specified action on each element in an ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Iterators'
  - 'Loops'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.forEach()`** [method](https://www.codecademy.com/resources/docs/java/methods) performs a specified action on each element in an `ArrayList`. This method traverses each element in the `ArrayList` until all the elements have been processed or an exception is raised from the action. It only iterates through the elements without modifying the `ArrayList` and does not return any value.

## Syntax

```pseudo
arrayListInstance.forEach(Consumer<E> action);
```

- `arrayListInstance`: The name of the `ArrayList` to be iterated.
- `Consumer`: A functional [interface](https://www.codecademy.com/resources/docs/java/interfaces) representing an operation to be performed. It can be used as the assignment target for a lambda expression or method reference.
- `action`: The operation that accepts an element of type `E` in the `ArrayList` as its only argument and does not return any value.

## Example

The following example uses the `.forEach()` method with a lambda expression to print out the elements in an `ArrayList` called `students`:

```java
// Import the ArrayList class from the java.util package
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Create an ArrayList of strings called 'students'
    ArrayList<String> students = new ArrayList<>();

    students.add("Anna");
    students.add("Bailey");
    students.add("Chris");
    students.add("Donna");

    students.forEach((s) -> System.out.println(s));
  }
}
```

The above example produces the following output:

```shell
Anna
Bailey
Chris
Donna
```

Apart from using a lambda expression, each student in the `ArrayList` can also be printed out using a method reference:

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> students = new ArrayList<>();

    students.add("Anna");
    students.add("Bailey");
    students.add("Chris");
    students.add("Donna");

    students.forEach(System.out::println);
  }
}
```

The output matches with the previous one:

```shell
Anna
Bailey
Chris
Donna
```

The operation passed into `.forEach()` is meant to be performed on each element of the `ArrayList`, not the `ArrayList` itself. Therefore, if an operation to be performed on the `ArrayList` is passed into `.forEach()`, an [error](https://www.codecademy.com/resources/docs/java/errors) occurs.

In the following example, the `.get()` operation passed into `.forEach()` is to be performed on `students` to retrieve a student name from the `ArrayList`:

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> students = new ArrayList<>();

    students.add("Anna");
    students.add("Bailey");
    students.add("Chris");
    students.add("Donna");

    students.forEach(System.out.println(students.get(0)));
  }
}
```

The above code will throw an error:

```shell
Main.java:12: error: 'void' type not allowed here
      students.forEach(System.out.println(students.get(0)));
                                         ^
1 error
```
