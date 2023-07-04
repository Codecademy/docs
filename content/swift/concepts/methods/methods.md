---

Title: 'Methods`
Description: 'Learn about methods in Swift and how they are used to perform actions and provide functionality.'

Subjects:

- 'iOS'

- 'Mobile Development'

- 'Game Development'

Tags:

- 'Methods'

- 'Functions'

- 'Properties'

- 'Parameters'

- 'Self'

- 'Mutating'

- 'Type Methods'

  

CatalogContent:

- 'learn-swift'

- 'build-ios-apps-with-swiftui'

---

  

__Methods__ in Swift are like special functions that belong to certain things, such as classes, structures, or groups of related values called enumerations. You can create and use methods to perform specific tasks or actions with those things.

  

## Instance Methods

  

Instance methods in Swift are like actions or behaviors that objects can perform. They are specific to each object and define what the object can do or how it can interact with other objects. 

  

Here's an example that defines a  __Robot__ class, which can perform different actions based on it's programming:

  

```swift
class Robot {
    var name: String
    var powerLevel: Int
    
    init(name: String, powerLevel: Int) {
        self.name = name
        self.powerLevel = powerLevel
    }
    
    func recharge() {
        print("\(name) is recharging...")
        powerLevel = 100
        print("\(name) is fully charged!")
    }
    
    func performTask(task: String) {
        if powerLevel > 0 {
            if task == "Fire Lasers" {
                print("\(name) is firing lasers!")
                powerLevel -= 20
            } else {
                print("\(name) is performing task: \(task)")
                powerLevel -= 10
            }
        } else {
            print("\(name) is out of power. Please recharge.")
        }
    }
}
```

  

In this example, the `Robot` class represents a robot with a `name` and a `powerLevel`. 

1.  The `recharge()` method allows the robot to recharge its power level back to 100
2.  The `performTask(task:)` method simulates the robot performing a task by decrementing its `powerLevel`
3.  If `powerLevel` reaches zero, it displays a message to recharge the robot.

  

Instance methods are called using dot syntax:

```swift
let myRobot = Robot(name: "Jeff", powerLevel: 80)

myRobot.performTask(task: "Clean the house")   // Output: Jeff is performing task: Clean the house

myRobot.performTask(task: "Fire Lasers")       // Output: Jeff is firing lasers!

myRobot.recharge()
// Output:
// Jeff is recharging...
// Jeff is fully charged!

```

  

## The self Property

In Swift, every object created from a class or structure has a special thing called `self`. It's like a magic word that points to the object itself (think `.this`). So, when we're inside a function that belongs to an object, we can use the keyword `self` to do things with that object's properties and functions.

Every now and again it is possible to run into a problem if a method has a parameter with the same name as the object's property. In those cases, we can use `self` to make it clear that we're talking about the object and not the parameter.

Imagine you have a `Car` class with a method called `drive`:

```swift
class Car {
    var brand: String
    var model: String
    var year: Int
    var isEngineRunning: Bool = false

    init(brand: String, model: String, year: Int) {
        self.brand = brand
        self.model = model
        self.year = year
    }

    func startEngine() {
        if !isEngineRunning {
            isEngineRunning = true
            print("\(brand) \(model) engine started.")
        } else {
            print("The engine is already running.")
        }
    }

    func stopEngine() {
        if isEngineRunning {
            isEngineRunning = false
            print("\(brand) \(model) engine stopped.")
        } else {
            print("The engine is already stopped.")
        }
    }
}

let myCar = Car(brand: "Toyota", model: "Corolla", year: 2022)
myCar.startEngine() // Output: "Toyota Corolla engine started."
myCar.stopEngine()  // Output: "Toyota Corolla engine stopped."
```
In this code, a Car class is defined with properties like `brand`, `model`, `year`, and `isEngineRunning`. 

There are also two methods: `startEngine` and `stopEngine`. These methods use the `self` keyword to refer to the specific instance of the car. 

Inside the methods, the car's properties, like `brand` and `model` can be accessed, and the status of `isEngineRunning` can be modified based on whether it's already running or stopped.

When an instance of the Car class is created, like myCar, the methods can be called on that specific instance to start and stop its engine. The `self` keyword helps us work with the object itself and keep track of its state and behavior.

##Modifying Value Types from Within Instance Methods

  

By default, when working with a structure or enumeration in Swift (which are called value types), it is not possible to directly change their properties from within their instance methods.

  

However, to be able to modify the properties of a structure or enumeration inside a specific method, one can use the __mutating__ keyword. This keyword tells Swift that the method might change the properties of the structure or enumeration.

  

When the method is called and makes changes, those changes are saved and applied to the original instance of the structure or enumeration when the method finishes.

  

So, the __mutating__ keyword allows us to modify the properties of a value type within its instance methods.

  

```swift
struct Point {

var x = 0.0, y = 0.0

mutating func moveBy(x deltaX: Double, y deltaY: Double) {

x += deltaX

y += deltaY

}

}

  

var somePoint = Point(x: 1.0, y: 1.0)

somePoint.moveBy(x: 2.0, y: 3.0)

print("The point is now at (\(somePoint.x), \(somePoint.y))")

// Prints "The point is now at (3.0, 4.0)"

```

  

In the above code, the `moveBy(x:y:)` method is marked as __mutating__ because it modifies the `x` and `y` properties of the structure `Point`.

  

## Assigning to self Within a Mutating Metho`

  

When a method in Swift is marked as __mutating__, this means it can modify the properties of the structure or enumeration it belongs to. But what if the goal is to change the entire instance itself, not just its properties? In Swift, it's possible to assign a new instance to the special keyword __self__ within a mutating method.

  

```swift
struct Person {

var name: String

  

mutating func changeName(newName: String) {

self = Person(name: newName) // Assigning a new instance to self

}

}

```

  

In the code above, we have a structure called _`Person_` with a property called _`name_`. The _`changeName_` method is marked as __mutating__ because it modifies the _`Person_` instance. Inside this method, it's possible to assign a completely new _`Person_` instance to _`self_`. It's like creating a whole new person and replacing the old one with i`

  

This can be useful in situations where the aim is to completely replace the instance with a new one. For example:

  

```swift
struct GameCharacter {

var name: String

var health: Int

  

mutating func respawn() {

// Creating a new character instance with updated properties

self = GameCharacter(name: "Player", health: 100)

}

}

```

  

In the code above, the `respawn` method is marked as __mutating__. When the character needs to respawn, we can use `self` within the method to create a new `GameCharacter` instance with the desired properties and replace the old character with it.

  

So, assigning to __self__ within a mutating method allows us t`change the entire instance itself, giving us the flexibility to create new instances and replace the old ones when needed.

  

## Type Methods

  

These methods are associated with the type itself, rather than an instance of the type. It's like having methods that can be called directly on the type, without needing to create an object or instance first.

  

To define a type method, we use the __static__ keyword before the method declaration.

  

```swift
struct MathUtility {

static func multiply(_ a: Int, by b: Int) -> Int {

return a * b

}

}

```

  

In the code above, we have a structure called `MathUtility`. Inside it, we define a type method called `multiply`. This method takes two parameters (`a` and `b`) and returns their multiplication result. Since it's a type method, we use the `static` keyword before the method declaration.

  

Here's an example of how this method could be us`:

  

```swift
let result = MathUtility.multiply(5, by: 3)

print(result) // Output: 15

```

  

We directly called `multiply` on the `MathUtility` type, passing in the values 5 and 3 as arguments. The type method performs the multiplication and returns the result, which is then assigned to the `result` constant. Finally, we print the result, which will be 15 in this case.

  

Type methods are useful when working with operations or computations that are relevant to the entire type, rather than specific instances. They provide a way to organise and encapsulate functionality related to the type itself.