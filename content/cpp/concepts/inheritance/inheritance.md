---
Title: 'Inheritance'
Description: 'Inheritance is the ability to create a new class based on an existing class, starting out with the same existing properties and methods.'
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

**Inheritance** is the ability to create a new class based on an existing class, starting out with the same existing properties and methods. It is generally used when it's necessary to implement a number of different objects that are all of the same type and share several common characteristics.

## Syntax

The class that inherits these properties and methods is called the derived class or sub-class. The class that the sub-class inherits from is called the base class.

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

A good example is a `Shape` class that might include:

- A `center` property with (x, y) coordinates.
- A `weight` property that defines a line width.
- A `color` property that would define a fill color.
- A `translate` method that relocates the center property.

Some possible sub-classes derived from this base class might be:

- A `Rectangle` class which would have `height` and `width` properties. It could also have its own `perimeter` method.
- A `Circle` class that would have a `radius` property. It could also have its own `circumference` method.

Both the `Circle` and `Rectangle` classes would share the properties and methods of their base class, `Shape`, in addition to properties and methods unique to their own class definition.

```cpp
// Create the base Shape class
class Shape {
  public:
    int center[2];
    int weight;
    int color;

  void translate(int deltaX, int deltaY) {
    center[0] += deltaX;
    center[1] += deltaY;
  }
};

// Create sub-class Rectangle
class Rectangle: public Shape {
  public:
    int height;
    int width;

  int perimeter() {
    return (height + width) * 2;
  }
};

// Create sub-class Circle
class Circle: public Shape {
  public:
    int radius;

  float circumference() {
    return 2.0 * 3.1416 * float (radius);
  }
};
```
