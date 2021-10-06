---
Title: 'Constructors'
Description: 'Explained constructors and their types, gave examples of default and parameterized constructors.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Constructors'
  - 'Parameters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Constructors are like normal methods within the class, but are used to initialise the object of the class. Everytime you use the new() keyword to create an object atleast one constructor is called.

## Types of constructors in Java

1. Default Constructor<br />
These constructors do not accept any parameters.<br />
2. Parameterized constructor<br />
These constructors accept a specific number of parameters.<br />

## Rules for creating constructors in Java

1. Constructor always has same name as class name.
2. You cannot declare constructor as abstract, static, final and synchronized.
3. Construtors do not have any explicit return types.

## Creating default constructor

Here class Tree has a defult constructor named Tree with no parameters, when the instance of class is created at main function the constructor is called.

```
class Tree{  
  //creating a default constructor  
  Tree(){
  System.out.println("Tree is created");
  }  
  //main method  
  public static void main(String args[]){  
   Tree t=new Tree();  //calling a default constructor  
  }  
}  
```

Output:

```
Tree is created
```

## Creating parameterized constructor

Here the class Employee has a parameterized constructor which takes parameters "int i" and "string n" respectively these values are passed while creating and instance of class from main function.

```
class Employee{  
    int id;  
    String name;  
    //creating a parameterized constructor  
    Employee(int i,String n){  
      id = i;  
      name = n; 
      System.out.println(id+" "+name);
    }  
   
 
    public static void main(String args[]){  
    
      Employee e = new Employee(110,"Ashish"); //creating objects and passing values  
     
   }  
}  
```

Output:

```
110 Ashish
```
