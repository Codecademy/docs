---
Title: 'Methods'
Description: 'Methods in Swift are used to perform actions and provide functionality for instances of a class, struct, or enum.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
  - 'Game Development'
Tags:
  - 'Methods'
  - 'Functions'
  - 'Properties'
  - 'Parameters'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Methods** in Swift allow developers to define behaviors for objects (like classes, structures, and enumerations) and make them more interactive. They provide a way for objects to perform specific actions and enhance functionality. By using methods, Swift code is more organized, reusable, and efficient.

Methods are functions that are encapsulated within a defined `class`, `struct`, or `enum` and are called on an instance of an object type.

## Creating Methods

Methods are defined within an object using the `func` keyword, followed by the function name. A pair of parentheses `()` comes after the name and any parameters can be listed within them. Lastly, the method's code within a set of curly braces `{}`.

For example, think of a `Car` `class` that has a method called `.startEngine()`.

```swift
class Car {
    var brand = ""
    var color = ""

    // Method to start the car's engine
    func startEngine() {
        print("Starting the engine of the \(brand) car.")
    }
}
```

In the code above, a class called `Car` has two properties: `brand` and `color`. It also has a method named `.startEngine()` which does not take any parameters. When this method is called on an instance of a `Car` object, it will print a message about starting the car's engine.

## Using Methods

To utilize a method, an instance of the object must be created. This instance will possess the characteristics specified by the class, allowing access to its methods.

```swift
var myCar = Car()
myCar.brand = "Codecar"
myCar.color = "Shadow Grey"

myCar.startEngine()
// Output: Starting the engine of the Codecar car.
```

In the given example, an object named `myCar` was created from the `Car` class; its `brand` was set to `"Codecar"`, and `color` was set to `"Shadow Grey"`. Subsequently, the `.startEngine()` method was called on the `myCar` object which prints the message about starting the car's engine.
