---
Title: '.forEach()'
Description: 'Performs an action on each element of the ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Iterators'
  - 'Loops'
  - 'Functional Programming'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.forEach()`** method performs a specified action on each element in an `ArrayList`.

This method traverses each element of the `Iterable` of `ArrayList` until all the elements have been processed or an exception is raised from the action. It only iterates through the elements without modifying the ArrayList. This method does not return any value.

## Syntax

```pseudo
arrayListInstance.forEach(Consumer<? super E> action);
```

This method takes an action of type `Consumer<? super E>` as an input. `Consumer<T>` is a functional interface that represents an operation which accepts a single input argument and does not return any value. As a functional interface, it can be used as the assignment target for a *lambda expression* or *method reference*.

For this reason, a *lambda expression* or *method reference* is often seen to represent the action to be performed inside the `forEach()` method.

## Example:

The following example code prints out each element in an `ArrayList` called `students` by calling `.forEach()` on `students` and using the lambda expression `(s) -> System.out.println(s)` as `action`, where the input parameter `s` represents each element in the ArrayList `students`

```java
// Import the ArrayList class from the java.util package
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Create an ArrayList of strings called "students"
    ArrayList<String> students = new ArrayList<>();

    students.add("Anna");
    students.add("Bailey");
    students.add("Chris");
    students.add("Donna");

    students.forEach((s) -> System.out.println(s));
  }
}
```

This will print each student's name in a separate line:

```shell
Anna
Bailey
Chris
Donna
```

Apart from using a lambda expression, we can also print each student in the ArrayList using a method reference `System.out::println`:

```java
students.forEach(System.out::println);
```

and achieve the same result:

```shell
Anna
Bailey
Chris
Donna
```

## Note:

The action passed into `forEach()` is meant to be performed on each element of the ArrayList, not the ArrayList itself. Therefore, if we pass into `forEach()` an operation we want to perform on the ArrayList, we will receive an error.

For example, in the following code, supposed we attempt to perform `get()` on `students` to retrieve a student name from the ArrayList and pass this action into `forEach()`

```java
// Import the ArrayList class from the java.util package
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Create an ArrayList of strings called "students"
    ArrayList<String> students = new ArrayList<>();

    students.add("Anna");
    students.add("Bailey");
    students.add("Chris");
    students.add("Donna");

    students.forEach(System.out.println(students.get(0)));
  }
}
```

This code will throw an error:

```
Main.java:13: error: 'void' type not allowed here
    	students.forEach(System.out.println(students.get(0)));
    	                                   ^
1 error
```
because `forEach()` does not accept an operation to be performed on the `student` ArrayList, only on the elements in it.