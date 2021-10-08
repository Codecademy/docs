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

Constructors are like normal methods within the class but are used to initialize the object of the class. Every time the `new` keyword is used to create an object, at least one constructor is called.

## Types of Constructors

1. Default Constructor: These constructors do not accept any parameters.
2. Parameterized constructor: These constructors accept a specific number of parameters.

## Rules for Creating Constructors

- Constructor always has same name as class name.
- You cannot declare constructor as abstract, static, final and synchronized.
- Construtors do not have any explicit return types.

## Creating Default Constructor

Here, class `Tree` has a default constructor named `Tree()` with no parameters, when the instance of the class is created at the `main()` function the constructor is called.

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

## Creating Parameterized Constructor

Here the class `Employee` has a parameterized constructor which takes parameters `int i` and `string n` respectively these values are passed while creating and instance of class from `main()` function.

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
