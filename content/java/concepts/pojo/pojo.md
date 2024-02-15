---
Title: 'POJO'
Description: 'A POJO (plain old Java object) is a class definition that is not tied to any Java framework so any Java program can use it.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Objects'
  - 'Data Types'
  - 'Constructors'
  - 'Methods'
  - 'OOP'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A **plain old Java object (POJO)** is a [class](https://www.codecademy.com/resources/docs/java/classes) definition that is not tied to any Java [framework](https://www.codecademy.com/resources/docs/general/framework) so any Java program can use it. A POJO has no particular naming convention for properties and methods, or any other special restrictions. Their primary advantage is their reusability and simplicity.

## Example

The following is an example of a POJO:

```java
// Student.java

public class Student {
  public String firstName;
  public String lastName;
  private String major;

  public Student(String firstName, String lastName, String major) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.major = major;
  }

  public String name() {
    return this.firstName + " " + this.lastName;
  }

  public String getMajor() {
    return this.major;
  }
}
```

## Limitations

Because a POJO doesn't follow any conventions for constructing or accessing the class's state, it can make it more difficult for other programmers trying to understand how to use them. It also may limit a framework's ability to use the class or augment its functionality. To address some of these limitations, a standard known as [JavaBeans](https://www.codecademy.com/resources/docs/java/javabeans) was introduced. A JavaBean is a POJO, but with a number of additional rules for how to implement it.
