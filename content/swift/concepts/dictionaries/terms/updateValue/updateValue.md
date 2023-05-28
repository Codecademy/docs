---
Title: '.updateValue()'
Description: 'Replaces the value stored for the given key or creates a new key-value pair.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
  - 'Computer Science'
Tags:
  - 'Dictionary'
  - 'Properties'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.updateValue()`** method replaces the value stored in a dictionary for a given key, and returns the replaced value. If the key does not exist, a new key-value pair is created and `nil` is returned.

## Syntax

```pseudo
dictionary.updateValue(value, forKey: key)
```

- `value` is the value being updated or added to the dictionary.
- `key` is the key getting updated or created.

## Examples

In the example below, the key `Loki` is found and updated to the new value, `8`. In addition, the key `Lenny` did not previously exist; a new key-value pair is added to the dictionary:

```swift
var petAges = ["Aurora": 10, "Loki": 7]

// Update existing key's value
petAges.updateValue(8, forKey: "Loki")
// Add new key-value pair
petAges.updateValue(12, forKey: "Lenny")

print(petAges)
```

This will output:

```shell
["Loki": 8, "Lenny": 12, "Aurora": 11]
```

### Return Values

`.updateValue()` returns the original value if an existing key is replaced.

The key `Dogs` exists in the dictionary below, and its value is updated:

```swift
var pets = ["Dogs": 1, "Cats": 1]

if let originalValue = pets.updateValue(2, forKey: "Dogs") {
    print("The original value of \(originalValue) was updated.")
} else {
    print("Key was not found in dictionary.")
}
```

This will output:

```shell
The original value of 1 was replaced.
```

If a key does not exist, `.updateValue()` returns `nil`.

`Parrots` does not exist as a key and `nil` is returned, therefore the `else` block is run:

```swift
if let originalValue = pets.updateValue(2, forKey: "Parrots") {
    print("The original value of \(originalValue) was updated.")
} else {
    print("Key was not found in dictionary.")
}
```

This will output:

```shell
Key was not found in dictionary.
```
