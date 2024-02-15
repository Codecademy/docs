---
Title: 'Structures'
Description: 'Structures are used to programmatically represent a real-life object. They are created with the struct keyword followed by its name and body.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Structures'
  - 'Classes'
  - 'Variables'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Structures**, are used to programmatically represent a real-life object in code. They are created with the `struct` keyword, followed by its name, and then body which contains its properties and methods.

```swift
struct Building {
  var address: String
  var floors: Int

  init(address: String, floors: Int, color: String) {
    self.address = address
    self.floors = floors
  }
}
```

> **Note:** All stored properties of structures must conform to [Hashable](https://developer.apple.com/documentation/swift/hashable) Protocol.

## Default Property Values

A structure’s properties can have preassigned default values to avoid assigning values during initialization. Optionally, these properties' values can still be assigned a value during initialization.

```swift
struct Car {
  var numOfWheels = 4
  var topSpeed = 80
}

var reliantRobin = Car(numOfWheels: 3)

print(reliantRobin.numOfWheels) // Prints: 3
print(reliantRobin.topSpeed)    // Prints: 80
```

## Structure Instance Creation

A new instance of a structure is created by using the name of the structure with parentheses `()` and any necessary arguments.

```pseudo
struct structName {
  var propertyName: Type
  // Other properties go here
  // followed by any methods.
}

// Create an instance with properties passed in
var instanceName(propertyName: propertyValue, ...)
```

### `init()` Method

Structures can have an `init()` method to initialize values to an instance’s properties. Unlike other methods, The `init()` method does not need the `func` keyword. In its body, the `self` keyword is used to reference the instance itself.

```pseudo
  init(propertyName: Type, ...) {
    self.propertyName = propertyName
    // Other instance properties go here.
  }
```

## Structure Methods

Methods are like functions that are specifically called on an instance. To call the method, an instance is appended with the method name using dot `.` notation, followed by parentheses that include any necessary arguments.

```swift
struct Dog {
  func bark() {
    print("Woof")
  }
}

let fido = Dog()
fido.bark() // Prints: Woof

var newTV = TV(screenSize: 65, displayType: "LED")

// Instance of Person:
var morty = Person(name: "Morty", age: 14)
```

## Mutating Methods

Structure methods declared with the mutating keyword allow the method to affect an instance’s own properties.

```swift
struct Menu {
  var menuItems = ["Fries", "Burgers"]

  mutating func addToMenu(dish: String) {
    self.menuItems.append(dish)
  }
}

var dinerMenu = Menu()

dinerMenu.addToMenu(dish: "Toast")

print(dinerMenu.menuItems)
// Output: ["Fries", "Burgers", "Toast"]
```
