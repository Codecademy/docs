---
Title: 'Dictionaries'
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

A dictionary is an unordered collection of paired data, or `key: value` pairs.

```swift
var dictionaryName = [
  "Key1": "Value1",
  "Key2": "Value2",
  "Key3": "Value3"
]
```

Keys can be be used to access, remove, add, or modify its associated value. Every key in a dictionary is unique.

```swift
// Each key is unique even if they all contain the same value

var fruitStand = [
  "Coconuts": 12,
  "Pineapples": 12,
  "Papaya": 12
]
```

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

**Note:** Assigning the value of a key-value pair to a variable will return an optional value. To extract the value, use optional unwrapping.

## `.count` Property

The `.count` property returns an integer that represents how many key-value pairs are in a dictionary.

```swift
var fruitStand = [
  "Apples": 12,
  "Bananas": 20,
  "Oranges", 17
]

print(fruitStand.count)  // Output: 3
```

## `.isEmpty` Property

The `.isEmpty` property will return a true value if there are no key-value pairs in a dictionary and false if the dictionary does contain key-value pairs.

```swift
var bakery = [String:Int]()

// Check if dictionary is empty
print(bakery.isEmpty)  // Prints: true

bakery["Cupcakes"] = 12

// Check if dictionary is empty
print(bakery.isEmpty)  // Prints: false
```

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
