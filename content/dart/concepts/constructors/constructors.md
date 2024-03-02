---
Title: 'Constructors'
Description: 'Constructors are special methods that initialize an instance of a class.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

A **constructor** is a special method that initializes an instance of a class. This method is called automatically whenever an object is created. All objects have a default constructor (whether declared or not), but certain languages allow for the creation of custom constructor logic that will determine the object behavior on instantiation.

In Dart, there are six constructor types:

- `Default constructors`
- `Generative constructors`
- `Named constructors`
- `Redirecting constructors`
- `Constant constructors`
- `Factory constructors`

## Default constructors

If a constructor is not declared, Dart will create a default constructor. This constructor has no arguments, and its only role is to instantiate the object.

## Generative constructor

This is the most basic constructor in Dart. It is declared with the same name as its class. Generative constructors can accept initializing formal parameters which can instantiate instance variables:

```dart
class Pixel {
  int a = 0;
  int b = 0;

  // The generative constructor is called with the class name, and the initializing formal parameters are passed using the this keyword:
  Pixel(this.a, this.b);
}
```

## Named constructors

When a class needs multiple constructors, named constructors can be used to declare several different behaviors on instantiation:

```dart
const int aOrigin = 0
const int bOrigin =0

class Pixel {
  int a = 0;
  int b = 0;

  // Generative constructor
  Pixel(this.a, this.b);
 // Named constructor
  Point.setOrigin()
      : a = aOrigin,
        b = bOrigin;
}
```

## Redirecting constructors

A redirecting constructor has no functionality of its own. Its only purpose is to call a different constructor:

```dart
class Pixel {
  int a = 0;
  int b = 0;

  // Main constructor
  Pixel(this.a, this.b);
 // Redirecting constructor
  Pixel.setA(int a) : this(a, 0);
}
```

## Constant constructors

Constant constructors create compile-time constant objects. In order to do this, declare a `const` constructor and all variables using `final`:

```dart
class ImmutablePixel {

  final int a, b;

  const ImmutablePixel(this.a, this.b);
}
```

## Factory constructors

The factory constructor can initialize different versions of a class. For example, factory constructors can return an instance from a cache, rather than create a new one. It can also return the instance of a subtype.

```dart
class Pixel {
  factory Pixel() {
    // Main factory constructor code
  }

  factory Pixel.pixelFromCache() {
    // Named factory constructor code
  }
}
```

> **Note:** Factory constructors do not have access to the `this` keyword.

## Dart constructors are not inheritable

A subclass will only inherit the default constructor of its superclass. However, a non-default superclass constructor can be invoked in a subclass:

```dart
class Pixel {
  String? color;

  Pixel.generate(this.color) {
     print(color);
  }
}

class GreenPixel extends Pixel{
   GreenPixel.generate(super.color) : super.generate();
}

void main() {
    var testPixel1 =Pixel.generate('white');
    var testPixel2 = GreenPixel.generate('green');
  }
```

## Super parameters and the initializer list

To better deal with constructor parameters and superclasses, Dart offers two main tools: superparameters and the initializer list. Superparameters will forward parameters to the declared superclass constructor. They help avoid having to manually pass each parameter in the super invocation of a constructor:

```dart
class Pixel {
  final int a;
  final int b;

  Pixel(this.a, this.p);
}

class Vexel extends Pixel {
  final int c;

  Vexel(super.a, super.b, this.c);
}
```

Alternatively, the initializer list can initialize instance variables before a superclass constructor runs. These lists are useful when setting up `final` fields.

```dart
class Sum {
  final int a;
  final int b;
  final int sumOfParameters;

  Sum(int a, int b)
      : a = a,
        b = b,
        sumOfParameters = a+b;
}

void main() {
  var s = Sum(2, 3);
  print(s.sumOfParameters);
}
```
