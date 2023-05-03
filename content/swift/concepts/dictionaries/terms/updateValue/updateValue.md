---
Title: '.updateValue()'
Description: 'Replaces the value stored for the given key or creates a new key-value pair.'
Subjects:
  - 'Mobile Development
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

The **`.updateValue()`** instance method replaces the value stored in a dictionary for the given key and returns the replaced value. If the key does not exist, a new key-value pair is created and `nil` is returned. 

## Syntax

```pseudo
dictionary.updateValue(value, forKey: key)
```
`value` is the value being updated or added to the dictionary.\
`key` is the key getting updated or created.

## Example 1

The key `Loki` is found and updated to the new value, `8`. 

```swift
var petAges = ["Aurora": 10, "Loki": 7]

petAges.updateValue(8, forKey: "Loki")

print(petAges)
```
### Output:

```shell
["Aurora": 10, "Loki": 8 ]
```

## Example 2

The key `Lenny` did not previously exist; a new key-value pair is added to the dictionary. 

```swift
petAges.updateValue(12, forKey: "Lenny")

print(petAges)
```

### Output:

```shell
["Loki": 8, "Lenny": 12, "Aurora": 11]
```

## Return Value

`.updateValue()` returns the original value if an existing key is replaced. If the key does not exist, `.updateValue()` returns `nil`. 

## Example 3

The key `Dogs` exists; the value is updated. 

```swift
var pets = ["Dogs": 1, "Cats": 1]

if let originalValue = pets.updateValue(2, forKey: "Dogs") {
  print("The original value of \(originalValue) was updated.")
}
  else {
    print("Key was not found in dictionary.")
  }
```

### Output:

```shell
The original value of 1 was replaced.
```

## Example 4

`Parrots` does not exist as a key; `nil` is returned.

```swift
if let originalValue = pets.updateValue(2, forKey: "Parrots") {
  print("The original value of \(originalValue) was updated.")
}
  else {
    print("Key was not found in dictionary.")
  }

```

### Output:

```shell
Key was not found in dictionary.
```
