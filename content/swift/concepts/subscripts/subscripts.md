---
Title: 'Subscripts'
Description: 'Subscripts are used to get and set values in collections such as arrays and dictionaries.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Subscripts** are used to get and set values in collections such as [arrays](https://www.codecademy.com/resources/docs/swift/arrays) and [dictionaries](https://www.codecademy.com/resources/docs/swift/dictionaries). It's also possible to define one or more subscripts for a [class](https://www.codecademy.com/resources/docs/swift/classes), [structure](https://www.codecademy.com/resources/docs/swift/structures), or [enum](https://www.codecademy.com/resources/docs/swift/enums) so values can easily be retrieved or set using an index or key, rather than using methods.

## Using Subscripts to Get and Set Values

The syntax below shows how a value can be retrieved from an array using subscript notation, by passing an integer as the `index` in square brackets after the array name. Dictionary values are retrieved similarly, by passing the `key` in square brackets after the dictionary name.

```pseudo
array[index]
dictionary[key]
```

New values are set using the same notation:

```pseudo
array[index] = new value
dictionary[key] = new value
```

### Getting and Setting Examples

The following example demonstrates how to set a new value in an array and then print it:

```swift
// Declare an array.
var herbGarden = ["Dill", "Lavender", "Parsley", "Rosemary", "Sage", "Thyme"]

// Set the element at position 0 to "Mint", replacing "Dill".
herbGarden[0] = "Mint"

// Print the element at position 0
print(herbGarden[0])
```

This example will output the following:

```shell
Mint
```

This next example shows how to set a new value in a dictionary and print it:

```swift
// Declare a dictionary.
var gardenInfo = ["name": "Happy Herb Garden", "type": "Herb", "length": "1m"]

// Set the element with the key "length" to "2m", replacing "1m".
gardenInfo["length"] = "2m"

// Print the element with the key "length".
print(gardenInfo["length"]!)
```

> **Note:** The "!" forces the optional String? value to unwrap.

This example will output the following:

```shell
2m
```

## Creating Subscripts

Subscripts are created using the `subscript` keyword followed by the input parameters (e.g. `index` or `key`) in brackets and then the return type.

The syntax below is for a subscript that can get and set values. Code for retrieving the value is contained in a `get {}` wrapper and code for setting the value is contained in a `set {}` wrapper.

```pseudo
subscript(input parameters) -> return type {
    get {
        return the value here
    }
    set(newValue) {
        set the new value here
    }
}
```

If a subscript is read-only, the code for retrieving the value can be entered directly inside the `subscript {}` wrapper, omitting the `get {}` wrapper.

```pseudo
subscript(input parameters) -> return type {
        return the value here
}
```

### Creating Subscripts Example

The example below defines a read-only subscript within a `struct` called `FlowerGarden`.

```swift
struct FlowerGarden {
    let flower: String
    subscript(count: Int) -> String {
        var flowers = ""
        if count > 0 {
            for _ in 1...count {
                flowers += flower
            }
        }
        return flowers
    }
}

let sakura = FlowerGarden(flower: "🌸")
print(sakura[5])

let sunflower = FlowerGarden(flower: "🌻")
print(sunflower[3])
```

Two instances of `FlowerGarden` are declared and then subscript notation is used to access them and print out the specified number of flowers, resulting in this output:

```shell
🌸🌸🌸🌸🌸
🌻🌻🌻
```
