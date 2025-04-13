---
Title: 'POJO'
Description: 'A POJO (Plain Old Java Object) is a class not tied to any Java framework, allowing any Java program to create simple, framework-independent objects for data representation.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Data Structures'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A **POJO** (Plain Old Java Object) is a simple Java [class](https://www.codecademy.com/resources/docs/java/classes) used to model data without depending on any specific [framework](https://www.codecademy.com/resources/docs/general/framework). It promotes clean, maintainable code and enhances portability and reusability across applications.

For ease of maintenance, POJOs are now widely recognized. They are easy to read and write. A POJO class does not have a naming convention for its properties and methods. It can be utilized by any Java application and is independent of any Java Framework.

## Creating a POJO

A POJO class should follow these principles:

- **No enforced inheritance**: A POJO does not need to extend framework-specific base classes.
- **Minimal implementation**: A POJO avoids implementing framework-specific interfaces.
- **No mandatory annotations**: POJOs can have annotations but should not depend on framework-specific ones.
- **No restrictions**: A POJO class should not have any predefined restrictions on naming properties or methods.

Typically, a POJO contains:

1. Private fields to store data
2. Public getter and setter methods to access and modify the fields
3. Optional constructors (default and/or parameterized)
4. Optional override of methods like [`toString()`](https://www.codecademy.com/resources/docs/java/stringbuilder/toString), [`equals()`](https://www.codecademy.com/resources/docs/java/strings/equals), and [`hashCode()`](https://www.codecademy.com/resources/docs/java/strings/hashCode).

## Example 1: Creating a Simple POJO Class for Student Data

This example demonstrates a simple POJO class to represent a student entity:

```java
public class Student {
  // Step 1: Declare private fields
  private int id;
  private String name;
  private int age;

  // Step 2: Create a no-argument constructor
  public Student() {
    // Default constructor
  }

  // Step 3: Create a parameterized constructor
  public Student(int id, String name, int age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  // Step 4: Getter for id
  public int getId() {
    return id;
  }

  // Step 5: Setter for id
  public void setId(int id) {
    this.id = id;
  }

  // Step 6: Getter for name
  public String getName() {
    return name;
  }

  // Step 7: Setter for name
  public void setName(String name) {
    this.name = name;
  }

  // Step 8: Getter for age
  public int getAge() {
    return age;
  }

  // Step 9: Setter for age
  public void setAge(int age) {
    this.age = age;
  }

  // Optional: Override toString() method for better representation
  @Override
  public String toString() {
    return "Student{id=" + id + ", name='" + name + "', age=" + age + "}";
  }
}
```

In this example, a simple POJO has been created that:

- Has three private fields: `id`, `name`, and `age`
- Provides both default and parameterized constructors
- Includes getter and setter methods for each field
- Overrides the `toString()` method for better object representation

## Example 2: Employee POJO with Object Comparison

This example demonstrates a POJO with implementation of `equals()` and `hashCode()` methods for proper object comparison:

```java
public class Employee {
  // Step 1: Declare private fields
  private int empId;
  private String name;
  private String department;
  private double salary;

  // Step 2: Create a no-argument constructor
  public Employee() {
    // Default constructor
  }

  // Step 3: Create a parameterized constructor
  public Employee(int empId, String name, String department, double salary) {
    this.empId = empId;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  // Step 4: Getters and Setters
  public int getEmpId() {
    return empId;
  }

  public void setEmpId(int empId) {
    this.empId = empId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDepartment() {
    return department;
  }

  public void setDepartment(String department) {
    this.department = department;
  }

  public double getSalary() {
    return salary;
  }

  public void setSalary(double salary) {
    this.salary = salary;
  }

  // Step 5: Override toString() method
  @Override
  public String toString() {
    return "Employee{empId=" + empId +
               ", name='" + name + "'" +
               ", department='" + department + "'" +
               ", salary=" + salary + "}";
  }

  // Step 6: Override equals() method for object comparison
  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;

    Employee employee = (Employee) obj;

    if (empId != employee.empId) return false;
    if (Double.compare(employee.salary, salary) != 0) return false;
    if (!name.equals(employee.name)) return false;
    return department.equals(employee.department);
  }

  // Step 7: Override hashCode() method for consistent hashing
  @Override
  public int hashCode() {
    int result;
    long temp;
    result = empId;
    result = 31 * result + name.hashCode();
    result = 31 * result + department.hashCode();
    temp = Double.doubleToLongBits(salary);
    result = 31 * result + (int) (temp ^ (temp >>> 32));
    return result;
  }
}
```

This POJO demonstrates:

- Implementation of proper object comparison with `equals()` and `hashCode()`
- A more complex data structure with multiple fields of different types
- Standard getter and setter methods following Java conventions

## Best Practices

When working with POJOs in Java, consider these best practices:

1. **Encapsulation**: Make fields private and provide public getter/setter methods to control access.
2. **Immutability**: When possible, make POJOs immutable by removing setter methods and making fields final.
3. **Proper Constructors**: Provide both a no-argument constructor (required by many frameworks) and parameterized constructors.
4. **Method Overrides**: Override `toString()`, `equals()`, and `hashCode()` methods for better debugging and proper object comparison.
5. **Serialization**: Implement `Serializable` if the POJO needs to be transferred across networks or persisted.
6. **Documentation**: Include JavaDoc comments to describe the purpose of the POJO and its fields.
7. **Validation**: Add validation in setter methods to ensure data integrity.
8. **Minimize Dependencies**: Keep POJOs clean by avoiding dependencies on specific libraries or frameworks.

## Frequently Asked Questions

<details>
<summary>1. What is the difference between POJO and JavaBean?</summary>
<p>A POJO has no specific rules, while a JavaBean follows strict conventions:
- JavaBeans must have a no-argument constructor
- JavaBeans must implement Serializable
- JavaBeans properties must have getter and setter methods
- JavaBeans typically use private fields with public accessor methods</p>
</details>

<details>
<summary>2. Can a POJO extend other classes or implement interfaces?</summary>
<p>Yes, a POJO can extend other classes and implement interfaces. It becomes a POJO by virtue of not being dependent on any specific framework or having framework-specific code, not by its inheritance hierarchy.</p>
</details>

<details>
<summary>3. What is the difference between POJO and JSON?</summary>
<p>POJO is a simple Java object used to represent data in code, while JSON is a text-based format used to store and exchange data. POJOs exist in Java programs; JSON is used for communication between systems.</p>
</details>
