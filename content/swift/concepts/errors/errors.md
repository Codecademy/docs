---
Title: 'Errors'
Description: 'Errors provide a robust mechanism to handle program faults.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Errors'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Errors** allow a Swift program to flag and handle unexpected errors that might appear during the program runtime. They are a part of the error handling mechanism that permits a program to identify the type of an error and respond accordingly based on the type of the error.

## Creating an Error Type

`Error` is an empty protocol built in Swift, so any type can represent an error condition by conforming to the protocol.

As an error type can be simply a set of related error conditions, it is preferable to model it as an [enumeration type](https://www.codecademy.com/resources/docs/swift/enums).

Below is an example of how to model the error conditions that might occur while operating a car in a Swift program.

```swift
enum CarError: Error {
  case noFuel
  case brokenEngine
  case check(fluid: String)
}
```

## Throwing Errors

If a function or method contains code that might emit an error condition then it must have the `throws` keyword in its declaration. This allows the error to propagate back to the calling function, so the calling function can handle (resolve) the error. Such a function is called a throwing function.

```swift
// The first two functions are an example of throwing functions

func throwFunc() throws {}
func throwFunc2() throws -> ReturnType {}

// Non-throwing function -- it doesn't emit errors or it will handle
// errors from throwing functions being called inside the function.

func nonthrowFunc() {}
```

For example, while trying to start a `Car`, the ˋCar` might not be able to start; either there's no gas or the engine is damaged. The following example is one way to model the behaviors.

```swift
struct Car {
  var fuelLevel: Int
  var engineRunnable: Bool
  var replaceOil: Bool
}

func start(car: Car) throws {
  if !car.engineRunnable {
    throw CarError.brokenEngine
  }

  if car.fuelLevel <= 0 {
   throw CarError.noFuel
  }

  if car.replaceOil {
    throw CarError.check(fluid: "Oil")
  }
}
```

## Calling Throwing Functions

When a function calls a throwing function, it either must handle the errors using a `do-catch` block or declare itself as a throwing function to continue propagating the errors.

Use the `try` keyword when calling a throwing function as shown below:

```swift
func tryError() throws {
  // Try calling a function and assign the returned value
  let x = try throwingFuncWithReturningValue()

  // Try calling a function that does something
  try throwingFuncWithoutReturn()
}
```

## Handling the Errors

A `do-catch` statement is where errors from throwing functions are caught and handled inside the surrounding function.

```swift
func handleErrors() {
  do {
    let x = try throwingFuncWithReturningValue()
    try throwingFuncWithoutReturn()
  } catch SomeError.condition {
  // Do something
  } catch {
  // catch a generic error
  }
}
```

The following example shows a ˋdo-catch` statement within the previous example:

```swift
func drive(car: Car) {
  do {
    try start(car: car)
  } catch CarError.noFuel {
    print("Cannot start the engine! No gas!")
  } catch CarError.brokenEngine {
    print("The engine is damaged")
  } catch CarError.check(let fluid) {
    print("Check the \(fluid)")
  } catch {
    print("Unexpected error")
  }
}
```
