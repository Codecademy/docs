---

Title: 'Methods'

Description: 'Learn about methods in Swift and how they are used to perform actions and provide functionality'

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
- 'Learn Swift'
- 'Build iOS Apps with SwiftUI'

---

In Swift, methods are like actions that an object can perform. Imagine a factory-like class as a blueprint for creating objects, and methods are the functions that these objects can execute. 

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

## Creating Objects and Using Methods

To utilize a method, an instance of the class must be created. This instance will possess the characteristics specified by the class, allowing access to its methods.

```swift
var myCar = Car()
myCar.brand = "Codecar"
myCar.color = "Shadow Grey"

myCar.startEngine()
// Output: Starting the engine of the Codecar car.
```

In the example above, we created an object `myCar` of the class "Car" and set its `brand` to "Codecar" and `color` to "Shadow Grey." Then, we called the `startEngine()` method on the `myCar` object, which printed the message about starting the car's engine.

## Conclusion

Methods in Swift allow us to define behaviours for our objects and make them more interactive. They provide a way for objects to perform specific actions and enhance the functionality of our classes. By using methods, we can make our Swift code more organized, reusable, and efficient.