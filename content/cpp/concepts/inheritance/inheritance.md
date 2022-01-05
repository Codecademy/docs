---
Title: 'Inheritance'
Description: 'Inheritance is the ability to base a new class on an existing class, creating a class that starts out with the same properties and methods as the existing class.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Inheritance'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Inheritance is the ability to create a new class based on an existing class, starting out with the same existing properties and methods. It is generally used when it's necessary to implement a number of different objects that are all of the same type and share several common characteristics.

## Syntax

The class that inherits these properties and methods is called the "derived class" or "sub-class". The class that the sub-class inherits from is called the "base class".

```pseudo
class BaseClass {
  accessModifier:
    dataType property1;
    dataType property2;
};

class SubClass: public BaseClass {
  accessModifier:
    dataType subProp1;
    dataType subProp2;
};
```

### Access Specifiers

- `public` members of the base class are `public` in the derived class.
- `protected` members of the base class are accessible by the derived class, but not outside the class.
- `private` members of the base class aren't accessible to the derived class.


## Example

A good example is a `Shape` class. It might have a `center` property with x,y coordinates, a `weight` property that defines a line width, and a `color` property that would define a fill color. Derived from this base class might be a `Rectangle` which would have `height` and `width` properties, and a `Circle` that would have a `radius` property. Both `Circle` and `Rectangle` would share the properties and methods of their base class, `Shape`, as well as the additional properties and methods that are in their own class definition.

```cpp
// Create the base Shape class
class Shape {
  public:
    int center[2];
    int weight;
    int color;
};

// Create sub-class Rectangle
class Rectangle: public Shape {
  public:
    int height;
    int width;
};

// Create sub-class Circle
class Circle: public Shape {
  public:
    int radius;
};
```


