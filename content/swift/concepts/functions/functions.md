---
Title: 'Functions' 
Description: 'Functions are self-contained chunks of code that perform a specific task.'
Subjects: 
  - 'iOS'
  - 'Code Foundations'
Tags:
  - 'iOS'
  - 'Algorithms'
  - 'Functions'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Functions** are self-contained chunks of code that perform a specific task. A function is given a name that identifies what it does, and this name is used to “call” the function to perform its task when needed.

## Defining and Calling Functions

Any function has three important elements used to define it. First is the function name. This is used to call the function. Second is the number of parameters a function takes, parameters referring to the input the function takes when calling it. Lastly is the return type of the function, which refers to the output data type of the function. When defining the name of the function, the name should describe its functionality. 

The figure below describes the syntax of functions in Swift:

![This diagram explains the syntax of the functions in Swift ](https://raw.githubusercontent.com/Codecademy/docs/main/media/swift-functions-diagram.png)

```Swift
func greet(person: String) -> String {
    let greeting = "Hello, " + person + "!"
    return greeting
}
```

For example, this function called `greet` takes a `String` parameter called `person`, and returns a `String` equal to "Hello" plus the `person` value. The `greet(person:)` function is called by passing it a `String` value after the `person:` argument label as shown below:

```Swift
print(greet(person: "Anna"))
// Prints "Hello, Anna!"
```

## Multiple Parameters

Functions can take more than one input parameter, the parameters must be separated by commas and assigned during the function call.
For example, this function takes two numbers as an input, and returns the division of the two numbers:

```Swift
func division(numerator: Double, denominator: Double) -> Double {
  return numerator / denominator
} 

let decimal = division(numerator: 1.0, denominator: 2.0) 
print(decimal)
 // Prints:  0.5 
```

## Returning Multiple Values

A tuple type can be used as the return type for a function to return multiple values as part of one compound return value. Each value within its parentheses needs to be labeled and assigned a type in the function definition.

For example, this function takes array of `Int` as an input, and returns the smallest and largest number in the array.

```Swift
func minMax(array: [Int]) -> (min: Int, max: Int) {
    var currentMin = array[0]
    var currentMax = array[0]
    for value in array[1..<array.count] {
        if value < currentMin {
            currentMin = value
        } else if value > currentMax {
            currentMax = value
        }
    }
    return (currentMin, currentMax)
}
```

Because the tuple’s member values are named as part of the function’s return type, they can be accessed with dot syntax to retrieve the minimum and maximum found values, as done below:

```Swift
let bounds = minMax(array: [8, -6, 2, 109, 3, 71])
print("min is \(bounds.min) and max is \(bounds.max)")
// Prints "min is -6 and max is 109"
```

## Omitting Argument Labels

To avoid having an argument labeled, use the `_` instead of an explicit argument label for that parameter.

```Swift
func findDifference(_ a: Int, b: Int) -> Int {
  return a - b
}

print(findDifference(6, b: 4)) // Prints: 2
```

But if a parameter has an argument label, the argument must be labeled when calling the function.

## Functions With an Implicit Return

If the whole function body consists of a single expression, the function implicitly returns the value of that expression. For example:

```Swift
func greeting(for person: String) -> String {
    "Hello, " + person + "!"
}
```

The entire definition of the `greeting(for:)` function is the greeting message that it returns, which means it can use this shorter form. Any function that contains one return line can omit the `return` keyword.

## Default Parameters

A default parameter has a value assigned to a parameter in the function’s definition. For example:

```Swift
func timeToFinishBook(numWords: Double, wordsPerMin: Double = 200) -> Double {
  let totalMinutes = numWords / wordsPerMin 
  return totalMinutes / 60 
}

print("\(timeToFinishBook(numWords: 93000)) hours")
// Prints: 7.75 hours 
```

When a function with a default parameter is called, an argument for that parameter is not required. If the argument is included, that value will overwrite the default value and be used in the function body.

## Variadic Parameters

A variadic parameter accepts zero or more values of a specified type. Variadic parameters are written by inserting three period characters (`...`) after the parameter’s type name. The example below calculates the arithmetic mean (also known as the average) for a list of numbers of any length:

```Swift
func arithmeticMean(_ numbers: Double...) -> Double {
    var total: Double = 0
    for number in numbers {
        total += number
    }
    return total / Double(numbers.count)
}
arithmeticMean(1, 2, 3, 4, 5)
// returns 3.0, which is the arithmetic mean of these five numbers
arithmeticMean(3, 8.25, 18.75)
// returns 10.0, which is the arithmetic mean of these three numbers
```

The values passed to a variadic parameter are made available within the function’s body as an array. For example, a variadic parameter with a name of `numbers` and a type of `Double...` is made available within the function’s body as a constant array called `numbers` of type `Double`.

## In-Out Parameters

To be able to change the value passed for a certain argument, an `inout` argument should be used. An in-out parameter is denoted by `inout` in the function definition, and when the function is called, its variable argument must be prepended with an `&`.

> **Note**: in-out parameters can’t have default values, and variadic parameters can’t be marked as `inout`.

```Swift
func swapTwoInts(_ a: inout Int, _ b: inout Int) {
    let temporaryA = a
    a = b
    b = temporaryA
}
```

This function swaps the value of a and b.

```Swift
var someInt = 3
var anotherInt = 107
swapTwoInts(&someInt, &anotherInt)
print("someInt is now \(someInt), and anotherInt is now \(anotherInt)")
// Prints "someInt is now 107, and anotherInt is now 3"
```

The example above shows that the original values of `someInt` and `anotherInt` are modified by the `swapTwoInts(_:_:)` function, even though the two variables were originally defined outside of the function.

> **Note**: In-out parameters aren’t the same as returning a value from a function. The `swapTwoInts` example above doesn’t define a `return` type or return a value, but it still modifies the values of `someInt` and `anotherInt`. In-out parameters are an alternative way for a function to have an effect outside of the scope of its function body.
