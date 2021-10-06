---
Title: 'What is an Object?'
Description: 'An object is an instance of a class. It has the properties and behaviors of its class.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Objects'
  - 'Inheritance'
  - 'Methods'
  - 'Structure'
  - 'Encapsulation'
  - 'Classes'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

An object is an instance of a class. It is created when we instantiate the class.

An object contains the properties and functionalities of its class. When an Object is created, memory will be allocated for it.

Creating an Object in Java:

```
// Creating the Employee class
class Employee {
  int id;
  String firstName;
  String lastName;
  char middleInitial;
  float years;
}

// Creating five different objects from the Employee class
Employee tina = new Employee();
Employee louise = new Employee();
Employee linda = new Employee();
Employee bob = new Employee();
Employee gene = new Employee();
```

In the above example we created an object for the class **_Employee_**. In Java we create an object using the **new** keyword. The **new** keyword tells the compiler to create a new instance of a class and allocate memory for it.
