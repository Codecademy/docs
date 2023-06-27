#Methods

Methods are functions associated with a particular type in Swift. They can be defined and called on classes, structures, and enumerations. Methods encapsulate specific tasks and functionality for working with an instance or type.

##Instance Methods

Instance methods are functions that belong to instances of a class, structure, or enumeration. They support the functionality of those instances, either by providing ways to access and modify properties or by providing functionality related to the instance's purpose.

Here's an example that defines a simple **Counter** class, which can be used to count the number of times an action occurs:

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

In the above code, the ***Counter*** class defines 3 instance methods:

1. ***increment()*** increments the counter by 1
2. ***increment(by: Int)*** increments the counter by a specified integer amount
3. ***reset()*** resets the counter to zero

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