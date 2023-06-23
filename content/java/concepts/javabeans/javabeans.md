---
Title: 'JavaBeans'
Description: 'JavaBeans are class definitions following a set of particular conventions. They are not tied to any Java framework so any Java program can use them.'
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

**JavaBeans** are [class](https://www.codecademy.com/resources/docs/java/classes) definitions following a set of particular conventions. They are not tied to any Java framework so any Java program can use them. All JavaBeans can be considered [POJOs](https://www.codecademy.com/resources/docs/java/pojo) (plain old Java objects). Many Java libraries and frameworks rely on the JavaBean conventions.

## Syntax

The following syntax conventions are used in JavaBeans:

- All properties are private and the class exposes them through getter and setter methods.
- All getters and setters are named "getX" or "setX". In the case of a [boolean](https://www.codecademy.com/resources/docs/general/data-types/boolean) property, "isX" can be used for a getter.
- A default constructor that requires no arguments must be present.
- It implements the `Serializable` interface, allowing the program to store its state.

> **Note:** In implementing a Serializable class, it is strongly recommended to declare an explicit `serialVersionUID` value. While the explicit declaration is optional, the generated values might vary from compiler to compiler, leading to an unexpected [`InvalidClassException`](https://www.codecademy.com/resources/docs/java/errors/invalidclassexception) during deserialization. `serialVersionUID` should be a `static` `final` `long`, and it is recommended to be `private`.

## Example

The following is an example of a JavaBean:

```java
// Student.java
import java.io.Serializable;
public class Student implements Serializable {
  private static final long serialVersionUID = 12345678L
  private String firstName;
  private String lastName;
  private String major;

  public Student() {
  }

  public Student(String firstName, String lastName, String major) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.major = major;
  }

  public String getFirstName() {
    return this.firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return this.lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getMajor() {
    return this.major;
  }

  public void setMajor(String major) {
    this.major = major;
  }
}
```

## Potential Disadvantages

The JavaBeans standard does enforce some characteristics that may be disadvantageous depending on the implementation:

- The default constructor allows the object to be instantiated without initializing its properties. Depending on the object, this may be considered an invalid state.
- The creation of getters and setters may be unnecessary for an implementation and may result in a lot of unnecessary coding.
- The JavaBean is mutable due to its setter methods which might lead to [concurrency](https://www.codecademy.com/resources/docs/java/threading) or memory consistency issues.
