---
Title: 'Constructors'
Description: 'Constructors are like normal methods within the class, but are used to initialize the object of the class.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Constructors'
  - 'Parameters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Constructors** are like normal methods within the class but are used to initialize the object of the class.

In Java, every time the `new` keyword is used to create an object, at least one constructor is called.

## Types of Constructors

- Default constructor: These constructors do not accept any parameters.
- Parameterized constructor: These constructors accept a specific number of parameters.

## Creating Constructors

Here are some rules for creating constructors:

- Constructors always have same name as their class name.
- Constructors cannot be declared as `abstract`, `static`, `final`, and `synchronized`.
- Constructors do not have any explicit return types.

### Creating a Default Constructor

Here, the `Tree` class has a default constructor named `Tree()` with no parameters. When the instance of the class is created in `main()`, the constructor is called.

```java
class Tree {
  // Creating a default constructor
  Tree() {
    System.out.println("Tree is created");
  }

  public static void main(String args[]) {
    Tree t = new Tree();  // Calling a default constructor
  }
}

// Output: Tree is created
```

### Creating a Parameterized Constructor

Here, the `Employee` class has a parameterized constructor which takes parameters `int i` and `string n` respectively. These values are passed while creating an instance of class in `main()`.

```java
class Employee {
  int id;
  String name;

  // Creating a parameterized constructor
  Employee(int i, String n) {
    id = i;
    name = n;
    System.out.println(id + " " + name);
  }

  public static void main(String args[]) {
    Employee e = new Employee(110, "Ashish"); // Creating objects and passing values
  }
}

// Output: 110 Ashish
```
