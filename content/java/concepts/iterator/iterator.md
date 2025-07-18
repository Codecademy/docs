---
Title: 'Iterator'
Description: 'Provides a standardized way to traverse elements in a collection sequentially.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Iterators'
  - 'Loops'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Java **iterator** is an interface that provides a standardized way to traverse elements in a collection sequentially, one element at a time. It acts as a cursor that points to elements within collections such as [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list), `LinkedList`, [`HashSet`](https://www.codecademy.com/resources/docs/java/hashset), and other classes that implement the [`Collection`](https://www.codecademy.com/resources/docs/java/collection) interface. The iterator interface is part of the Java Collections Framework and is found in the `java.util` package.

## Syntax

To create an iterator, use the following syntax:

```pseudo
Iterator<E> iteratorName = collection.iterator();
```

**Parameters:**

- `collection`: Any object that implements the `Collection` interface
- `E`: The type of elements stored in the collection

**Return value:**

Returns an `Iterator` that can traverse the collection one element at a time

**Key methods:**

- [`hasNext()`](https://www.codecademy.com/resources/docs/java/iterator/hasNext): Returns `true` if there are more elements to iterate over
- [`next()`](https://www.codecademy.com/resources/docs/java/iterator/next): Returns the next element in the iteration and advances the cursor
- [`remove()`](https://www.codecademy.com/resources/docs/java/iterator/remove): Removes the last element returned by the iterator. Not all iterators support this operation.

## Example 1: Basic Java Iterator Usage

This example demonstrates the fundamental usage of an iterator to traverse through an `ArrayList`:

```java
import java.util.ArrayList;
import java.util.Iterator;

public class BasicIteratorExample {
  public static void main(String[] args) {
    // Create an ArrayList and add elements
    ArrayList<String> fruits = new ArrayList<>();
    fruits.add("Apple");
    fruits.add("Banana");
    fruits.add("Cherry");
    fruits.add("Date");

    // Create an iterator for the ArrayList
    Iterator<String> it = fruits.iterator();

    // Iterate through the collection
    while (it.hasNext()) {
      String fruit = it.next();
      System.out.println(fruit);
    }
  }
}
```

The output of the above code is:

```shell
Apple
Banana
Cherry
Date
```

This example creates an `ArrayList` of fruits, obtains an iterator using the `iterator()` method, and uses a `while` loop with `hasNext()` and `next()` methods to traverse and print each element.

## Example 2: Employee Database Processing Using Java Iterators

This example shows how iterators can be used in a real-world scenario to process employee records and filter data based on specific criteria:

```java
import java.util.ArrayList;
import java.util.Iterator;

class Employee {
  private String name;
  private double salary;
  private String department;

  public Employee(String name, double salary, String department) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  // Getter methods
  public String getName() { return name; }
  public double getSalary() { return salary; }
  public String getDepartment() { return department; }

  @Override
  public String toString() {
    return name + " (" + department + ") - $" + salary;
  }
}

public class EmployeeProcessor {
  public static void main(String[] args) {
    // Create list of employees
    ArrayList<Employee> employees = new ArrayList<>();
    employees.add(new Employee("Alice Johnson", 75000, "Engineering"));
    employees.add(new Employee("Bob Smith", 45000, "Marketing"));
    employees.add(new Employee("Carol Davis", 85000, "Engineering"));
    employees.add(new Employee("David Wilson", 38000, "Support"));

    // Find high-earning engineering employees
    System.out.println("High-earning Engineering employees:");
    Iterator<Employee> it = employees.iterator();
    while (it.hasNext()) {
      Employee emp = it.next();
      if (emp.getDepartment().equals("Engineering") && emp.getSalary() > 70000) {
        System.out.println(emp);
      }
    }
  }
}
```

The output of the above code is:

```shell
High-earning Engineering employees:
Alice Johnson (Engineering) - $75000.0
Carol Davis (Engineering) - $85000.0
```

This example demonstrates using an iterator to process a collection of employee objects, filtering for engineering employees with salaries above $70,000.

## Example 3: Using Java Iterators in Inventory Management System

This example illustrates using iterators to manage product inventory, including removing items that meet certain conditions during iteration:

```java
import java.util.ArrayList;
import java.util.Iterator;

class Product {
  private String name;
  private int quantity;
  private double price;

  public Product(String name, int quantity, double price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  // Getter methods
  public String getName() { return name; }
  public int getQuantity() { return quantity; }
  public double getPrice() { return price; }

  @Override
  public String toString() {
    return name + " (Qty: " + quantity + ", Price: $" + price + ")";
  }
}

public class InventoryManager {
  public static void main(String[] args) {
    // Create inventory list
    ArrayList<Product> inventory = new ArrayList<>();
    inventory.add(new Product("Laptop", 0, 899.99));
    inventory.add(new Product("Mouse", 25, 29.99));
    inventory.add(new Product("Keyboard", 0, 79.99));
    inventory.add(new Product("Monitor", 8, 299.99));

    System.out.println("Original inventory:");
    Iterator<Product> displayIt = inventory.iterator();
    while (displayIt.hasNext()) {
      System.out.println(displayIt.next());
    }

    // Remove out-of-stock items using iterator
    Iterator<Product> it = inventory.iterator();
    while (it.hasNext()) {
      Product product = it.next();
      if (product.getQuantity() == 0) {
        System.out.println("Removing out-of-stock item: " + product.getName());
        it.remove(); // Safe removal during iteration
      }
    }

    System.out.println("\nInventory after removing out-of-stock items:");
    Iterator<Product> finalIt = inventory.iterator();
    while (finalIt.hasNext()) {
      System.out.println(finalIt.next());
    }
  }
}
```

The output of the above code is:

```shell
Original inventory:
Laptop (Qty: 0, Price: $899.99)
Mouse (Qty: 25, Price: $29.99)
Keyboard (Qty: 0, Price: $79.99)
Monitor (Qty: 8, Price: $299.99)
Removing out-of-stock item: Laptop
Removing out-of-stock item: Keyboard

Inventory after removing out-of-stock items:
Mouse (Qty: 25, Price: $29.99)
Monitor (Qty: 8, Price: $299.99)
```

This example shows how to safely remove items from a collection during iteration using the iterator's `remove()` method, which is essential for inventory management scenarios.

## Frequently Asked Questions

### 1. What is the difference between for loop and iterator?

A traditional for loop uses index access and is limited to indexed collections. An iterator works with all collection types and provides safe element removal during traversal, while modifying collections during for loops can cause issues.

### 2. What is the alternative to iterator in Java?

The main alternatives include enhanced for loops (for-each), traditional for loops, streams, and `ListIterator`. Enhanced for loops are the most common alternative for simple traversal.

### 3. What is the purpose of an iterator?

An iterator provides a standard, safe way to traverse collections without exposing their internal structure. It enables sequential access and supports safe modification during iteration across all collection types.
