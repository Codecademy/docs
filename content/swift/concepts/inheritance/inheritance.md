---
Title: 'Inheritance'
Description: 'Inheritance allows code reusability by sharing features between classes.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Inheritance'
  - 'Classes'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Inheritance** allows properties, methods, and other characteristics to be transferred between classes. This is a feature that differentiates [classes](https://www.codecademy.com/resources/docs/swift/classes) from other [data types](https://www.codecademy.com/resources/docs/swift/data-types).

A class that inherits features is known as the child class or subclass. The class that the subclass inherited from is known as the parent class or superclass.

## Syntax

A class can inherit from another class with the following syntax:

```pseudo
class SuperClass {
  // Superclass definition goes here
}

class SubClass: SuperClass {
  // Subclass definition goes here
}
```

The subclass will inherit all the properties and methods from the superclass and can also have its own defined ones.

## Example

The following example is a class named `Car` with one variable, `topSpeed` that is equal to 200, and a function named `drive()` that prints a string:

```swift
class Car {
  var topSpeed = 200
  func drive() {
    print("Driving")
  }
}
```

A second class can inherit from the `Car` class as shown below:

```swift
class Jeep: Car {
  // Creating new property
  var currentNumberOfMiles = 0
}
```

An instance of `Jeep` can be created like this:

```swift
let wrangler = Jeep()
```

Properties can be accessed or changed like this:

```swift
wrangler.topSpeed = 100
print(wrangler.topSpeed)
// Output: 100

wrangler.currentNumberOfMiles = 300
print(wrangler.currentNumberOfMiles)
// Output: 300
```

## Override

A method of a superclass can be overridden within the subclass by using the `override` keyword. The following example creates a new subclass of `Car` called `Tesla` and uses the `override` keyword on the `drive()` function:

```swift
class Tesla: Car {
  override func drive() {
    print("Driving very quietly")
  }
}
```

When an instance of `Tesla` is created and the `func` method is called on it, the new implementation of `drive()` will print:

```swift
let modelY = Tesla()
modelY.drive()
// Output: Driving very quietly
```

### Accessing Superclass Method After Override

If the superclass version of the method needs to be accessed in the overridden version, the `super` keyword can be used:

```swift
class Tesla: Car {
  override func drive() {
    super.drive()
    print("Driving very quietly")
  }
}
```

When `.drive()` is called on an instance of the class, both the superclass and overridden versions of the method will be called:

```swift
modelY.drive()
```

This will output:

```shell
Driving
Driving very quietly
```

### Prevent Overriding

Overriding can be prevented by using the `final` keyword when declaring the method in the superclass. An example of this is shown below using the previous example:

```swift
class Car {
  var topSpeed = 200
    final func drive() { // Declaring final for drive()
      print("Driving")
    }
}

class Tesla: Car {
  override func drive() { // ERROR: Instance method overrides a 'final' instance method
    super.drive()
    print("Driving very quietly")
  }
}
```

When the method is declared `final`, any attempt to override a method declared `final` will result in an error.
