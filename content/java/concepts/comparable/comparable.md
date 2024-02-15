---
Title: 'Comparable'
Description: 'The Comparable interface is used to define how a class is to be sorted.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Comparison'
  - 'Data Structures'
  - 'Sort'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Comparable`** interface is used to define how a [class](https://www.codecademy.com/resources/docs/java/classes) is to be sorted. It is not to be confused with the [`Comparator`](https://www.codecademy.com/resources/docs/java/comparator) interface, which is implemented in a separate class. The `Comparable` interface is implemented in the class to be sorted.

## Syntax

```pseudo
class MyClass implements Comparable<MyClass> {
  // Class body.
  ...
  @Override public int compareTo(MyClass value)
  {
      // Comparison Logic
      ...
      return result;
  }
}
```

Applying the `Comparable` interface to `MyClass` requires the `implements` keyword (e.g., `Comparable<MyClass>`). This interface has a single `.compareTo()` method that returns an `int` value based on whether the `value` of a current class instance (referenced by `this`) can be logically sorted with the value of another instance of the same class. The `compareTo` method should follow the contract defined by the `Comparable` interface. The comparison logic should be consistent with the equals method (i.e., if `compareTo` returns `0`, equals should return true).

| Return Value | Meaning                         |
| :----------: | ------------------------------- |
|    `>= 1`    | this instance > passed instance |
|     `0`      | this instance = passed instance |
|   `<= -1`    | this instance < passed instance |

This method determines how items are sorted by methods such as [`Arrays.sort()`](https://www.codecademy.com/resources/docs/java/arrays/sort) and `Collections.sort()`.

## Example

The following example defines an `Employee` class that sorts based on `lastName` and then on `firstName`.

Implementing the class:

```java
import java.util.*;

// Employee.java
public class Employee implements Comparable<Employee> {
  String firstName;
  String lastName;

  // Constructor sets firstName and lastName
  public Employee(String first, String last)
  {
    this.firstName = first;
    this.lastName = last;
  }

  // User-friendly output when printed.
  public String toString()
  {
    return "( " + lastName + ", " + firstName + " )";
  }

  // Implement the Comparable interface
  @Override public int compareTo(Employee value)
  {
    if (this.lastName.compareTo(value.lastName) != 0) {
      // If lastNames are different, compare lastName
      return this.lastName.compareTo(value.lastName);
    } else {
      // If lastNames are the same, compare firstName
      return this.firstName.compareTo(value.firstName);
    }
  }
}
```

This last snippet demonstrates the `Comparable` interface:

```java
import java.util.*;

// SortExample.java
public class SortExample {
  public static void main(String[] args)
  {
    // Set up array with a few Employee classes
    Employee a[] = new Employee[5];
    a[0] = new Employee("Kirk","Douglas");
    a[1] = new Employee("Mel","Brooks");
    a[2] = new Employee("Jane","Fonda");
    a[3] = new Employee("Henry","Fonda");
    a[4] = new Employee("Michael","Douglas");

    // The .sort() method uses the Comparable interface.
    Arrays.sort(a);

    // Print out the sorted Employees
    for (int i=0; i < a.length; i++) {
      System.out.println(a[i]);
    }
  }
}
```

This example results in the following output:

```shell
( Brooks, Mel )
( Douglas, Kirk )
( Douglas, Michael )
( Fonda, Henry )
( Fonda, Jane )
```
