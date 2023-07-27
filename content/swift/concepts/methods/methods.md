---
Title: 'Methods'
Description: 'Methods in Swift are used to perform actions and provide functionality.'
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

Methods in Swift allow us to define behaviours for our objects and make them more interactive. They provide a way for objects to perform specific actions and enhance the functionality of our classes. By using methods, we can make our Swift code more organized, reusable, and efficient.

For example, think of a "Car" class that has a method called "startEngine." When creating a "Car" object, use the "startEngine" method to make the car's engine come to life.

## Creating Methods

First, start by defining the method using the `func` keyword, which stands for "function" and give it a name. Then a pair of parentheses `()` comes after the method name and any parameters can be listed within them. Lastly, place the method's code within a set of curly braces `{}`.

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

In the code above, there is a class called `Car` with two properties: `brand` and `color`. As well as a method named `startEngine`, which does not take any parameters. When this method is called on a Car object, it will print a message about starting the car's engine.

## Using Methods

To utilize a method, an instance of the class must be created. This instance will possess the characteristics specified by the class, allowing access to its methods.

```swift
var myCar = Car()
myCar.brand = "Codecar"
myCar.color = "Shadow Grey"

myCar.startEngine()
// Output: Starting the engine of the Codecar car.
```

In the given example, an object named `myCar` was created from the class `Car`, and its `brand` was set to "Codecar," and `color` was set to "Shadow Grey." Subsequently, the `startEngine()` method was called on the `myCar` object, resulting in the printing of a message about starting the car's engine.