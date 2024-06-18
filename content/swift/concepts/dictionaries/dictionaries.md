---
Title: 'Dictionaries'
Description: 'A dictionary is an unordered collection of paired data referred to as a key and value pair, where the key is used to access its corresponding value.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Dictionaries'
  - 'Arrays'
  - 'Variables'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

A **dictionary** is an unordered collection of paired data or `key: value` pairs.

## Syntax

```pseudo
var dictionaryName = [
  Key1: Value1,
  Key2: Value2,
  Key3: Value3
]
```

Keys can be of any hashable type, meaning an object that has a hashcode. Typically, `Int`s and `String`s are used as keys. Every key in a dictionary is unique and they're used to access, remove, add, or modify its associated value. Values can be of any [data type](https://www.codecademy.com/resources/docs/swift/data-types).

While types can be mixed, it's best practice to keep the key's and value's type consistent. For example, a dictionary could have keys be of type `Int` and values of type `String`.

## Assigning a Value to a Variable

To assign the value of a key-value pair to a variable, set the value of a variable to `dictionaryName[keyValue]`.

```swift
var primaryHex = [
  "red": "#ff0000",
  "yellow": "#ffff00",
  "blue": "#0000ff",
]

print("The hex code for blue is \(primaryHex["blue"])")
// Prints: The hex code for blue is Optional("#0000ff")

if let redHex = primaryHex["red"] {
  print("The hex code for red is \(redHex)")
}
// Prints: The hex code for red is #ff0000
```

> **Note:** Assigning the value of a key-value pair to a variable will return an optional value. To extract the value, use optional unwrapping.

## Iterating Over a Dictionary

A `for`-`in` loop can be used to iterate through the keys and values of a dictionary.

```swift
var emojiMeaning = [
  "🤔": "Thinking Face",
  "😪": "Sleepy Face",
  "😵": "Dizzy Face"
]

// Iterate through both keys and values
for (emoji, meaning) in emojiMeaning {
  print("\(emoji) is known as the '\(meaning) Emoji'")
}

// Iterate only through keys
for emoji in emojiMeaning.keys {
  print(emoji)
}

// Iterate only through values
for meaning in emojiMeaning.values {
  print(meaning)
}
```

Below are some instance properties for dictionaries:
