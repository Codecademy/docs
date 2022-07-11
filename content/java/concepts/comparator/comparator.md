---
Title: 'Comparator'
Description: 'The Comparator interface is used to order objects of an arbitrary class.'
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

The **`Comparator`** interface is used to order objects of an arbitrary [class](https://www.codecademy.com/resources/docs/java/classes). It is not to be confused with the [`Comparable`](https://www.codecademy.com/resources/docs/java/comparable) interface, which is implemented by the class to be sorted. The `Comparator` interface is implemented in a separate class.

## Syntax

```pseudo
class MyComparator implements Comparator<MyClass> {
  @Override public int compare(MyClass a, MyClass b)
  {
    // Compare logic
    ...
    return result;
  }
}
```

Applying the `Comparator` interface to a class, `MyComparator`, requires the `implements` keyword (e.g., `Comparator<MyClass>`). This interface has a `.compare()` method that returns an `int` value based on whether two `MyClass` instances, `a` and `b`, can be logically sorted.

| Return Value | Meaning                                        |
| :----------: | ---------------------------------------------- |
|    `>= 1`    | first object instance > second object instance |
|     `0`      | first object instance = second object instance |
|   `<= -1`    | first object instance < second object instance |

A `Comparator` class can be passed as an argument to methods such as [`Arrays.sort()`](https://www.codecademy.com/resources/docs/java/arrays/sort) and `Collections.sort()` to specify the sort order, potentially overriding the natural sort order defined by the class’s own `.compareTo()` method.

## Example

The following example showcases the `Comparator` interface. First, an `Employee` class is defined:

```java
// Employee.java
public class Employee {
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
}
```

The next snippet defines an `EmployeeSort` class that implements the `Comparator` interface and overrides its `.compare()` method to sort based on `lastName` and then on `firstName`:

```java
import java.util.*;

// EmployeeSort.java
public class EmployeeSort implements Comparator<Employee> {

  // Implement the Comparator interface
  @Override public int compare(Employee valueA, Employee valueB)
  {
    if (valueA.lastName.compareTo(valueB.lastName) != 0) {
      // If lastNames are different, compare lastName
      return valueA.lastName.compareTo(valueB.lastName);
    } else {
      // If lastNames are the same, compare firstName
      return valueA.firstName.compareTo(valueB.firstName);
    }
  }
}
```

This last snippet demonstrates the `Comparator` interface:

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

    // Use .sort() method with Comparable class.
    Arrays.sort(a, new EmployeeSort());

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
