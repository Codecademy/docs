#Methods

Methods are functions associated with a particular type in Swift. They can be defined and called on classes, structures, and enumerations. Methods encapsulate specific tasks and functionality for working with an instance or type.

##Instance Methods

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

1. __increment()__ increments the counter by 1
2. __increment(by: Int)__ increments the counter by a specified integer amount
3. __reset()__ resets the counter to zero

You call instance methods using dot syntax, just like accessing properties:

```let counter = Counter()
// the initial counter value is 0

counter.increment()
// counter is now 1

counter.increment(by: 5)
// counter is now 6

counter.reset()
// counter is 0 again
```

##The self Property

Every instance of a type in Swift has a special property called __self__. It refers to the instance itself (think .this), allowing you to access its properties and methods from within instance methods. 

In most cases, you don't need to use the __self__ keyword explicitly because Swift automatically assumes you're referring to the current instance. However, if a parameter name of an instance method has the same name as an instance property, you can use __self__ to clarify which one you're referring to.

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