---

Title: Methods

Description: Learn about methods in Swift and how they are used to perform actions and provide functionality.

Subjects:

- iOS

- Mobile Development

- Game Development

Tags:

- Methods

- Functions

- Properties

- Parameters

- Self

- Mutating

- Type Methods

  

CatalogContent:

- 'learn-swift'

- 'build-ios-apps-with-swiftui'

---

  

__Methods__ are functions associated with a particular type in Swift. They can be defined and called on classes, structures, and enumerations. Methods encapsulate specific tasks and functionality for working with an instance or type.

  

## Instance Methods

  

Instance methods are functions that belong to instances of a class, structure, or enumeration. They support the functionality of those instances, either by providing ways to access and modify properties or by providing functionality related to the instance's purpose.

  

Here's an example that defines a simple __Counter__ class, which can be used to count the number of times an action occurs:

  

```class Counter {

var count = 0

func increment() {

count += 1

}

func increment(by amount: Int) {

count += amount

}

func reset() {

count = 0

}

}

```

  

In the above code, the __Counter__ class defines 3 instance methods:

  

1.  __increment()__ increments the counter by 1

2.  __increment(by: Int)__ increments the counter by a specified integer amount

3.  __reset()__ resets the counter to zero

  

Instance methods are called using dot syntax, just like accessing properties:

  

```let counter = Counter()

// the initial counter value is 0

  

counter.increment()

// counter is now 1

  

counter.increment(by: 5)

// counter is now 6

  

counter.reset()

// counter is 0 again

```

  

## The self Property

  

Every instance of a type in Swift has a special property called __self__. It refers to the instance itself (think .this), allowing us to access its properties and methods from within instance methods.

  

In most cases, we don't need to use the __self__ keyword explicitly because Swift automatically assumes we're referring to the current instance. However, if a parameter name of an instance method has the same name as an instance property, we can use __self__ to clarify which one we're referring to.

  

```struct Point {

var x = 0.0, y = 0.0

func isToTheRightOf(x: Double) -> Bool {

return self.x > x

}

}

  

let somePoint = Point(x: 4.0, y: 5.0)

  

if somePoint.isToTheRightOf(x: 1.0) {

print("This point is to the right of the line where x == 1.0")

}

// Prints "This point is to the right of the line where x == 1.0"

```

  

In the above code, __self.x__ is used to refer to the instance property __x__, while __x__ alone refers to the parameter.

  

##Modifying Value Types from Within Instance Methods

  

By default, when working with a structure or enumeration in Swift (which are called value types), it is not possible to directly change their properties from within their instance methods.

  

However, to be able to modify the properties of a structure or enumeration inside a specific method, one can use the __mutating__ keyword. This keyword tells Swift that the method might change the properties of the structure or enumeration.

  

When the method is called and makes changes, those changes are saved and applied to the original instance of the structure or enumeration when the method finishes.

  

So, the __mutating__ keyword allows us to modify the properties of a value type within its instance methods.

  

```struct Point {

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

  

In the above code, the __moveBy(x:y:)__ method is marked as __mutating__ because it modifies the __x__ and __y__ properties of the structure __Point__.

  

## Assigning to self Within a Mutating Method

  

When a method in Swift is marked as __mutating__, this means it can modify the properties of the structure or enumeration it belongs to. But what if the goal is to change the entire instance itself, not just its properties? In Swift, it's possible to assign a new instance to the special keyword __self__ within a mutating method.

  

```struct Person {

var name: String

  

mutating func changeName(newName: String) {

self = Person(name: newName) // Assigning a new instance to self

}

}

```

  

In the code above, we have a structure called __Person__ with a property called __name__. The __changeName__ method is marked as mutating__ because it modifies the __Person__ instance. Inside this method, it's possible to assign a completely new __Person__ instance to __self__. It's like creating a whole new person and replacing the old one with it.

  

This can be useful in situations where the aim is to completely replace the instance with a new one. For example:

  

```struct GameCharacter {

var name: String

var health: Int

  

mutating func respawn() {

// Creating a new character instance with updated properties

self = GameCharacter(name: "Player", health: 100)

}

}

```

  

In the code above, the __respawn__ method is marked as __mutating__. When the character needs to respawn, we can use __self__ within the method to create a new __GameCharacter__ instance with the desired properties and replace the old character with it.

  

So, assigning to __self__ within a mutating method allows us to change the entire instance itself, giving us the flexibility to create new instances and replace the old ones when needed.

  

## Type Methods

  

These methods are associated with the type itself, rather than an instance of the type. It's like having methods that can be called directly on the type, without needing to create an object or instance first.

  

To define a type method, we use the __static__ keyword before the method declaration.

  

```struct MathUtility {

static func multiply(_ a: Int, by b: Int) -> Int {

return a * b

}

}

```

  

In the code above, we have a structure called __MathUtility__. Inside it, we define a type method called __multiply__. This method takes two parameters (__a__ and __b__) and returns their multiplication result. Since it's a type method, we use the __static__ keyword before the method declaration.

  

Here's an example of how we could use this method:

  

```let result = MathUtility.multiply(5, by: 3)

print(result) // Output: 15

```

  

We directly called __multiply__ on the __MathUtility__ type, passing in the values 5 and 3 as arguments. The type method performs the multiplication and returns the result, which is then assigned to the __result__ constant. Finally, we print the result, which will be 15 in this case.

  

Type methods are useful when working with operations or computations that are relevant to the entire type, rather than specific instances. They provide a way to organise and encapsulate functionality related to the type itself.