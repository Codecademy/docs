---
Title: 'Basic Operators'
Description: 'Basic operators in Swift are commonly used to evaluate, reassign, and combine values.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Operators'
  - 'Values'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Basic operators** in Swift are commonly used to evaluate, reassign, and combine values.

## Assignment Operator

The assignment operator `=` in Swift is the same as in most other languages and serves the same purpose. It is used to initialize or reassign a variable to some value. In Swift, unlike some other high-level programming languages like C or Java, the assignment operator does not return any values.

```swift
var a = 5
// When we reference variable 'a', it returns the value int: 5.
let z = (a = 6)
// Compile warning that 'b' is of type '()' "
// Output: '()'
```

Here, the `z = (a=6)` assignment leaves `z` to equal `()` once the `a=6` is evaluated.

## Arithmetic Operators

Swift contains the following operators that match their similar expressions in common math:

- Addition: `a + b`
- Subtraction: `a - b`
- Multiplication: `a * b`
- Division: `a / b`
- Modulus/remainder division: `a % b`

These work as expected for all mathematical operations, however, the `+` operator can also be used to concatenate two strings together such as `"Operators" + " in Swift" = "Operators in Swift"`.

## Comparison Operators

These operators are used to return `Bool` values for use in conditional statements. These control logic flow in loops or if statements for example. The basic comparison operators are below:

- Equal to: `this == that`
- Not equal to: `this != that`
- Greater than: `this > that`
- Greater than or equal to: `this >= that`
- Less than: `this < that`
- Less than or equal to: `this <= that`

The following code snippet shows a use case of comparison operators in a `while` loop:

```swift
var countUp = 0
var countDown = 10

while countUp < countDown {
  countUp = countUp + 1
  countDown = countDown - 1
}
```

## Logical Operators

Logical operators are used to evaluate or modify the value of Boolean values and are especially useful in control flow logic. In Swift, there are three operators:

- Logical NOT: `!this`
- Logical AND: `this && that`
- Logical OR: `this || that`

Logical NOT (`!`) operator appears directly before a Boolean value with no spaces. This operator inverts the value of the Boolean so that `true` becomes `false` and vice versa.

```swift
var earthIsFlat = false
if !earthIsFlat {
  print("All our physics doesn't work!")
}
```

The logical AND (`&&`) and OR (`||`) operators evaluate two `Boolean` values or expressions. In an AND evaluation, both expressions must result in `true`, resulting in the overall AND expression becoming `true`. In an OR evaluation only one expression must be `true` for the result of OR to be `true`. In both cases, if the left side of the expression evaluates to a value that the compiler can determine a value for the operator, the right side will not be evaluated at all.

```swift
var iAmTrue = true
var iAmFalse = false

if (iAmTrue && iAmFalse) {
  // Both sides are checked because the first value is true and the compiler needs to check the right side value
  print("Both values are 'true' and the AND operator returned 'true'.")
} else if (iAmTrue || iAmFalse) {
  // Only the left side is evaluated, as soon as the compiler sees a 'true', it can reason that the OR requirements are met and will enter the 'else if' body
  print("At least one value was 'true'  and the OR operator returned 'true'.")
} else {
  print("Neither value is 'true'.")
}
```

## Range Operators

Range operators provide quick and convenient ways of creating various ranges or iterating over elements in an object. The three primary types are Closed ( `a...z` ), Half-Open (`a..<z`), and One-Sided (`a...`), each providing different limits on the range. Swift does not allow for the creation of decrementing ranges, therefore the value of the first variable must not be greater than the value of the second.

The Closed Range operator (`a...z`) creates a range that begins at `a` and continues to and includes, `z`. The most common use case for Closed Range Operators is in `for-in` loops.

```swift
let userAge = 32

for year in 2...userAge {
  print("You turned \(year) years old!")
}
```

This should output:

```shell
You turned 2 years old!
You turned 3 years old!
... all the way to and including
You turned 32 years old!
```

Half-Open range operators (`a..<z`) create a range beginning at `a` and continue to `z` but not including `z`. They are commonly used when working with arrays or other zero-indexed lists.

```swift
let picnic = ["Caesar Salad", "Turkey Sandwich", "Cookie", "Juice Box"]

for i in 0..<picnic.count {
  print("Item #\(i+1) in the picnic basket is a \(picnic[i]).")
}
```

This should output:

```shell
Item 1 in the picnic basket is a Caesar Salad.
Item 2 in the picnic basket is a Turkey Sandwich.
Item 3 in the picnic basket is a Cookie.
Item 4 in the picnic basket is a Juice Box.
```

The One-Sided range operator defines a range that will continue as far in one direction as possible. We can use this range to iterate from or to specific ranges inside of other fixed-length entities.

```swift
for food in picnic[...2] {
  print(food)
}
// Caesar Salad
// Turkey Sandwich
// Cookie

for food in picnic[2...] {
  print(food)
}
// Cookie
// Juice Box

for food in picnic[..<3] {
  print(food)
}
// Caesar Salad
// Turkey Sandwich
// Cookie

let infiniteRange = 0... // 0 to infinity
for i in infiniteRange {
  print(i)
  // Creates an infinite loop, always take note of what
  // "stops" open-ended ranges
}
```

## Nil-Coalescing Operator

The nil-coalescing operator (`a ?? z`) unwraps an optional with the value of `a` unless `a` is `nil`, then it will return the value of `z`. `a` always has to be an optional type and `z` has to match the type that's stored in `a`.

```swift
let defaultPrice = 1.99
var getItemPrice: Double?

let priceToChargeCustomer = getItemPrice ?? defaultPrice
```

Since `getItemPrice` isn't assigned a value it defaults to `'nil'`. The price to charge the customer is either a price we get from an item or the default price. In this case, priceToChargeCustomer = 1.99

## Ternary Conditional Operator

The ternary conditional operator is shorthand for an `if`-`else` statement.

### Syntax

```pseudo
statementToTest ? doThisAndReturnIfTrue : doThisAndReturnIfFalse
```

- If the statement is `true`, the code on the left side of the ternary evaluates and returns a value.
- If it is `false`, the right side of the ternary evaluates and returns a value.

```swift
let exoticBirdBingo = ["ostrich", "falcon", "peacock", "flamingo", "gold and blue macaw"]
let birdsSeen = ["flamingo", "pigeon", "blue jay", "peacock"]

for bird in birdsSeen {
  print(exoticBirdBingo.contains(bird) ? "Cross \(bird) off your bingo card!" : "A \(bird) is just a normal bird.")
}
```

This would output:

```shell
Cross flamingo off your bingo card!
A pigeon just a normal bird.
A blue jay is just a normal bird.
Cross peacock off your bingo card!
```
