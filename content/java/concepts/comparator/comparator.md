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

In Java, the **`Comparator`** interface is used to order objects of an arbitrary [class](https://www.codecademy.com/resources/docs/java/classes). It is not to be confused with the [`Comparable`](https://www.codecademy.com/resources/docs/java/comparable) interface, which is implemented by the class to be sorted. The `Comparator` interface is implemented in a separate class.

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

Applying the `Comparator` interface to a class, `MyComparator`, requires the `implements` keyword (e.g., `Comparator<MyClass>`). This interface has a `.compare()` method, which returns an `int` value based on whether two `MyClass` instances, `a` and `b`, can be logically sorted:

| Return Value | Meaning                                        |
| :----------: | ---------------------------------------------- |
|    `>= 1`    | First object instance > Second object instance |
|     `0`      | First object instance = Second object instance |
|   `<= -1`    | First object instance < Second object instance |

A `Comparator` class can be passed as an argument to methods such as [`Arrays.sort()`](https://www.codecademy.com/resources/docs/java/arrays/sort) and `Collections.sort()` to specify the sort order, potentially overriding the natural sort order defined by the class’s own `.compareTo()` method.

## Example 1: Sort List of Strings by Length

In this example, the `StringLengthComparator` class is used to compare two strings based on their length. This is useful when the sorting logic is used in multiple places or needs to be unit-tested:

```java
import java.util.*;

class StringLengthComparator implements Comparator<String> {
  public int compare(String s1, String s2) {
    return s1.length() - s2.length(); // Ascending by length
  }
}

public class StringLengthSort {
  public static void main(String[] args) {
    List<String> words = Arrays.asList("banana", "apple", "pear", "kiwi");

    // Sort using comparator
    Collections.sort(words, new StringLengthComparator());

    System.out.println("Sorted by length: " + words);
  }
}
```

Here is the output:

```shell
Sorted by length: [pear, kiwi, apple, banana]
```

## Example 2: Sort Custom Objects by Field

In this example, `SalaryComparator` is a reusable class for comparing employees based on their salary and `Collections.sort()` applies the comparator to arrange employees in ascending order:

```java
import java.util.*;

class Employee {
  String name;
  int salary;

  Employee(String name, int salary) {
    this.name = name;
    this.salary = salary;
  }

  public String toString() {
    return name + ": " + salary;
  }
}

// Comparator to sort employees by salary
class SalaryComparator implements Comparator<Employee> {
  public int compare(Employee e1, Employee e2) {
    return e1.salary - e2.salary; // Ascending order
  }
}

public class EmployeeSort {
  public static void main(String[] args) {
    List<Employee> list = new ArrayList<>();
    list.add(new Employee("Alice", 70000));
    list.add(new Employee("Bob", 50000));
    list.add(new Employee("Charlie", 60000));

    // Sort using SalaryComparator
    Collections.sort(list, new SalaryComparator());

    System.out.println("Sorted by salary: " + list);
  }
}
```

Here is the output:

```shell
Sorted by salary: [Bob: 50000, Charlie: 60000, Alice: 70000]
```

## Example 3: Sort in Reverse Order

In this example, the `ReverseIntegerComparator` class reverses the natural ordering of integers. It's useful when built-in methods like `Comparator.reverseOrder()` are not allowed or available:

```java
import java.util.*;

class ReverseIntegerComparator implements Comparator<Integer> {
  public int compare(Integer a, Integer b) {
    return b - a; // descending order
  }
}

public class ReverseSortExample {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(5, 1, 3, 8, 2);

    // Reverse sort using explicit comparator
    Collections.sort(numbers, new ReverseIntegerComparator());

    System.out.println("Reverse sorted: " + numbers);
  }
}
```

Here is the output:

```shell
Reverse sorted: [8, 5, 3, 2, 1]
```

## Frequently Asked Questions

### 1. What is the difference between `Comparator` and `Comparable`?

- `Comparable` is implemented by a class to define its natural ordering.
- `Comparator` is used to define external and multiple sorting strategies.

### 2. Can a class have multiple comparators?

Yes. You can create multiple `Comparator` classes to sort objects differently—for example, by name, salary, or ID.

### 3. Is `Comparator` a functional interface?

Yes. Since Java 8, you can utilize lambda expressions to implement comparators concisely.
