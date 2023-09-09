---
Title: 'Equatable'
Description: 'Enables two instances of a type to be compared for equality.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Protocols'
  - 'Equality'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**`Equatable`** is a protocol that enables two instances of a type to be compared for equality using the `==` or `!=` operators.

## Syntax

In a straightforward case, for a type to conform to `Equatable`, all of its properties must also conform to `Equatable`:

```pseudo
struct myStruct: Equatable {
  // Properties that conform to Equatable
}
```

When checking for equality between two instances of the `myStruct` [structure](https://www.codecademy.com/resources/docs/swift/structures), all properties will be compared.

### Syntax Using a Custom `==` Method

If a customised approach is needed for equality comparison, then a custom `==` method can be included so that the type can conform to `Equatable`:

```pseudo
struct myStruct: Equatable {
  // Properties

  static func == (lhs: myStruct, rhs: myStruct) -> Bool {
    // Custom logic for equality comparison
  }
}
```

A custom `==` method can be helpful if only specific properties need to be compared, or in cases when some of the properties don't conform to `Equatable`.

## Example

In the example below, a `TeaCup` structure is declared with three properties `color`, `volume`, and `unit`. These properties all conform to the `Equatable` protocol so instances of `TeaCup` can be compared using the `==` operator.

Below the `TeaCup` structure, two instances of `TeaCup` are created and compared for equality:

```swift
struct TeaCup: Equatable {
  var color: String
  var volume: Int
  var unit: Unit

  enum Unit {
    case cups, ml
  }
}

let blueCup = TeaCup(color: "Blue", volume: 237, unit: .ml)
let pinkCup = TeaCup(color: "Pink", volume: 1, unit: .cups)

if blueCup == pinkCup {
  print("Teacups are equal.")
}
else {
  print("Teacups are not equal.")
}
```

Because the `blueCup` and `pinkCup` properties are not equal, the following output occurs:

```shell
Teacups are not equal.
```

## Example Using a Custom `==` Method

In the example below, a `TeaCup` structure is declared containing a custom `==` method. This method compares the `volume` of the teacups, converting to `ml` if necessary. The `color` property is ignored.

Following the `TeaCup` structure, two instances of `TeaCup` called `blueCup` and `pinkCup` are created and compared:

```swift
struct TeaCup: Equatable {
  var color: String
  var volume: Int
  var unit: Unit

  enum Unit {
    case cups, ml
  }

  static func == (lhs: TeaCup, rhs: TeaCup) -> Bool {
    return volume_in_ml(lhs) == volume_in_ml(rhs)

    func volume_in_ml(_ teaCup: TeaCup) -> Int {
      switch teaCup.unit {
      case .ml:
        return teaCup.volume
      case .cups:
        return teaCup.volume*237
      }
    }
  }
}

let blueCup = TeaCup(color: "Blue", volume: 237, unit: .ml)
let pinkCup = TeaCup(color: "Pink", volume: 1, unit: .cups)

if blueCup == pinkCup {
  print("Teacups are equal.")
}
else {
  print("Teacups are not equal.")
}
```

Both the teacups have equal volume, so this will output:

```shell
Teacups are equal.
```
