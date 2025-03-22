---
Title: 'Closures'
Description: 'Closures allow for more flexible code.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Closures'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Closures** in Swift contain chunks of code that can be passed around and reused within the same code.

They can store and capture references to variables and constants which is also referred to as closing over constants and variables. The best part is that all memory management is handled by Swift.

## Using Closures

Closures look very similar to functions. To show this, a variable called `hello` is assigned to a closure that prints out "Hello World":

```swift
let hello = { print("Hello World!") }

hello()
```

The closure is the code between the curly brackets, `{` and `}`. The closure is then called by using the opening and closing parenthesis, `(` and `)`, on the constant `hello`. This executes the closure and prints out `Hello World!`.

### Parameters

Just like functions, closures can also take in parameters or input values. The previous example can be changed to say "Hello" to a specific person instead of the generic "Hello World".

```swift
let helloName:(String) -> () = { name in
  print("Hello \(name)!")
}

helloName("World")
```

This prints out:

```shell
Hello World!
```

There are two important parts to this closure:

- The type, `(String) -> ()`, which specifies the value being taken in and returned by the closure.
- The expression, `{name in ...}`, where `in` separates the parameters from the closure body.

The function call, `hello(...)`, executes the closure.

It is also important to note that the return type is void because nothing of a specific type is being returned in this example. This can be written as `()` or `(void)`.

### Type Inference

Swift can infer the type for the parameters and the return type. To demonstrate this, the following numbers will be sorted in ascending order using Swift's `.sorted()` method.

```swift
let numbers = [38, 45, 66, 72, 19, 73]
```

Here, a variable named `sortedNumbers` is created and the `.sorted()` method is called on the `numbers` array:

```swift
var sortedNumbers = numbers.sorted( by: { (num1:Int, num2:Int) -> Bool in
  return num1 < num2
})
```

The closure inside the curly brackets is the argument the numbers are being sorted by. Two integers, `num1` and `num2`, are taken in and a boolean is returned. When `num1` is less than `num2`, it returns `true`. Otherwise, it returns `false`.

The `.sorted()` method sorts through the whole array and returns a new array.

Since the `.sorted()` method is being called on an array of integers, Swift can infer that the argument is of type `(Int, Int) -> (Bool)`, and types do not need to be written in the argument. The above expression can be written as follows:

```swift
sortedNumbers = numbers.sorted(by: { num1, num2 in return num1 < num2 })
```

### Single Expression Closures

If the closure uses a single expression, like the one above where `num1 < num2` is the sole expression, Swift knows what needs to be returned.

The `return` key can be omitted in the argument; based on the above example, and written as follows:

```swift
sortedNumbers = numbers.sorted(by: { num1, num2 in num1 < num2 })
```

### Shorthand Argument Names

There are also shorthand argument names that Swift makes available to inline closures. They are based on the closure's argument values. `$0` is used for the first argument value, `$1` for the second value, `$2` for the third, and so on.

When using shorthand argument names, the argument list and the `in` keyword can be completely omitted. When removing this from the previous expression, it looks like this:

```swift
sortedNumbers = numbers.sorted(by: { $0 < $1 })
```

### Operations

Swift has type-specific implementations of operators. In the above closure expression when the `<` operator is being used on integers, Swift can further infer that two integers must be taken in and a value of type `Bool` will be returned.

The shorthand expression names can be removed entirely and just the operator needs to be passed in as the argument, like so:

```swift
sortedNumbers = numbers.sorted(by: < )
```

## Autoclosures

Autoclosures are used to wrap a closure expression being passed as an argument of a function.

It makes for slightly cleaner code because the curly brackets are eliminated when calling the function. This allows the function to be called like it had a `String` parameter rather than a closure.

Take the following code for example that does not take an autoclosure:

```swift
func find(search: () -> Bool) {
  if search() {
      print("The result was true!")
  } else {
      print("The result came back false!")
  }
}

find(search: { 122 < 82 })
// Output: The result came back false!
```

This function prints `The result was true!` when the argument is `true`, else it prints `The result came back false`. In this example, the latter is printed since `122` is not less than `82`.

Notice when calling the function the comparison argument is in curly braces. These can be removed when using an autoclosure, as shown below:

```swift
func find(search: @autoclosure () -> Bool) {
  if search() {
      print("The result was true!")
  } else {
      print("The result came back false!")
  }
}

find(search: 122 < 82)
```

The `@autoclosure` attribute is used right before the parameters in the closure argument. When the function is called, the argument is automatically converted into a closure.

Autoclosures can be very useful because they delay code execution. After all, the closure doesn't run unless called.

## Trailing Closures

When using a closure as the final argument of a function, Swift has a trailing closure syntax that is useful especially if the closure expression is too long to be written in the function's argument field. The trailing closure syntax allows for defining the closure outside of the function.

Take the following code, for example, the closure is the only and final argument of the function. Using trailing closure syntax, the closure can be defined outside of the function call.

```swift
func function(closure: () -> Void) {
  print("Inside function call");
  closure();
  print("After closure call")
}

function {
  print("Inside closure");
}
```

The output is:

```shell
Inside function call

Inside closure

After closure call
```

## Capturing Values

Closures can capture values from the context surrounding them. Swift stores the external values alongside the closure so they can easily be referred to and modified.

Take the following code for example, which is a simple counter function that increments the count by one when it's called.

```swift
func counter() -> () -> Int {
  var count = 0
  let add = { () -> Int in
      count += 1
      return count
  }
  return add
}

let countUp = counter()

print(countUp())    // Output: 1
print(countUp())    // Output: 2
print(countUp())    // Output: 3

let countUpTwo = counter()

print(countUpTwo()) // Output: 1
print(countUp())    // Output: 4
```

In the first instance of `counter()`, assigned to the variable `countUp`, the closure stored the previous value and incremented the value each time it was called. Creating a new instance of `counter()` affect `countUp` because they are not in the same context as each other.

## Why Use Closures?

Closures make code easier to read and shorter without losing any intentions to the code. It allows for the removal of any unnecessary parts of code to make it clear and precise. It also gives code greater flexibility, by allowing the passing around of functional code in variables and constants.
