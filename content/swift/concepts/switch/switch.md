---
Title: 'Switch'
Description: 'The switch statement is a type of conditional used to check the value of an expression against multiple cases.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Switch'
  - 'Control Flow'
  - 'Variables'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`switch`** statement is a type of conditional used to check the value of an expression against multiple cases.

A `case` executes when it matches the value of the expression. When there are no matches between the `case` statements and the expression, the `default` statement executes.

```swift
var secondaryColor = "green"

switch secondaryColor {
  case "orange":
    print("Mix of red and yellow.")
  case "green":
    print("Mix of blue and yellow.")
  case "purple":
    print("Mix of red and blue.")
  default:
    print("This might not be a secondary color.")
}

// Output: Mix of blue and yellow.
```

## Interval Matching

Intervals within a `switch` statement’s case provide a range of values that are checked against an expression.

```swift
let year = 1905
var artPeriod: String

switch year {
  case 1860...1885:
    artPeriod = "Impressionism"
  case 1886...1910:
    artPeriod = "Post Impressionism"
  case 1912...1935:
    artPeriod = "Expressionism"
  default:
    artPeriod = "Unknown"
}

print(artPeriod)
// Output: Post Impressionism
```

## Compound Cases

A compound case within a `switch` statement is a single `case` that contains multiple values. These values are all checked against the `switch` statement’s expression and are separated by commas.

```swift
let service = "Seamless"

switch service {
  case "Uber", "Lyft":
    print("Travel")
  case "DoorDash", "Seamless", "GrubHub":
    print("Restaurant delivery")
  case "Instacart", "FreshDirect":
    print("Grocery delivery")
  default:
    print("Unknown service")
}

// Output: Restaurant delivery
```

## Where Clause

Within a `switch` statement, a `where` clause is used to test additional conditions against an expression.

```swift
let num = 7

switch num {
  case let x where x % 2 == 0:
    print("\(num) is even.")
  case let x where x % 2 == 1:
    print("\(num) is odd.")
  default:
    print("\(num) is invalid.")
}

// Output: 7 is odd.
```
