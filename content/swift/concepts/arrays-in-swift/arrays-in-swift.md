---
Title: "Arrays in Swift"
Subjects:
  - "iOS"
  - "Mobile Development"
Tags: 
  - "Arrays"
  - "Data Structures"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-swift"
  - "https://www.codecademy.com/learn/paths/build-ios-apps-with-swiftui"
---

Arrays in Swift are one of the most widely used data structures. An array is an ordered list of values, all of the same type, contained in the same structure. Swift, being a very type safe language, will throw compiler errors if you attempt to store values of different types, say attempting to store a `String` in an `int` array.

## Creating Arrays

Arrays can be created several different ways, each with a specific use case.

An empty array can be declared and initalized with the following syntax:

```pseudo
var arrayName = [Type]()
```

This is useful if you are are not ready to add elements yet or are unsure of how large the array will become.

```swift
var groceryList = [String]()
```

Arrays can also be initialized with a given size and default values. For example, maybe we are storing the values for a Battleship game and the default location marker we want is "U" for "Unchecked".

```swift
var alphaRow = [Character](repeating: "U", count: 10)
// Creates: ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U"]
```

Swift also allows you to assign different values within the array directly at initialization and will even perform type inferencing enabling you to shorten your code.

```swift
var statesIveVisited:[String] = ["NY", "CA", "TX", "FL"]
var statesImGoingTo = ["ME", "ID", "NV", "AK"]
```

If an array is declared as a constant, using `let`, then the arrray is immutable. You cannot change its size or change the values of its members, this is especially useful if you are trying to protect the data you are storing from being manipulated later on in your program.

## Accessing Arrays

Arrays can be accessed using subscript notation. Since all arrays are zero-indexed, the first index in the array will be `arrayName[0]` and the last element will be one less than the `.count` property of the array. Attempting to access an element that doesn't exist through subscript notation will result in a runtime error.

```swift
var statesIveVisited:[String] = ["NY", "CA", "TX", "FL"]
print("Yesterday I went to \(statesIveVisited[0]).") 
// Output: Yesterday I went to NY.

var statesImGoingTo = ["ME", "ID", "NV", "AK"]
print("Tomorrow I'm headed to \(statesImGoingTo[1])!") 
// Output: Tomorrow I'm headed to NV!

print("After Nevada, I'm going to head to \(statesImGoingTo[4]).") 
// Runtime Error: Index out of range
```

Arrays can also be accessed through built in array properties in the Swift Standard Library, some of these include `.first`, `.last`, and `.randomElement`. If no values exist in the array, these properties will return `nil` instead of throwing a runtime error.

```swift
print("The first and last states I've visited are \(statesIveVisited.first) and \(statesIveVisited.last), respectively.")
// Output: The first and last states I've visited are NY and FL, respectively.

print("To make life interesting, next week I'll fly to \(statesIveVisited.randomElement).")
```

Values in an array can be directly reassigned by accessing the element at a specific index and reassigning the value or assigned into separate variables themselves.

```swift
statesIveVisited[2] = "MI"
// ["NY", "CA", "MI", "FL"]

let coolestState = statesIveVisited[0]
```

## Adding and Removing Items

Adding elements to an array can be done through the `append()` or `insert()` methods. Using `append()` will add an element to the end of the array and `insert()` allows you to choose where you would like to add an element, pushing the current element at that index and all later elements to the right to make room. Both methods allow for single and multiple element additions.

```swift
var topBabyNames = ["Sophia", "Liam"]

topBabyNames.append("Riley")
// ["Sophia", "Liam", "Riley"]

topBabyNames.append(contentsOf: ["Olivia", "Noah"])
// ["Sophia", "Liam", "Riley", "Olivia", "Noah"]

topBabyNames.insert("Jackson", at: 3)
// ["Sophia", "Liam", "Riley", "Jackson", "Olivia", "Noah"]
```

Similarily, elements are removed using the `remove()`, `removeFirst()`, and `removeLast()` methods.

```swift
topBabyNames.remove(at: 2)
// ["Sophia", "Liam", "Jackson", "Olivia", "Noah"]

topBabyNames.removeFirst()
// ["Liam", "Jackson", "Olivia", "Noah"]

topBabyNames.removeLast()
// ["Liam", "Jackson", "Olivia"]
```

There are many more array manipulation methods available in the Swift Standard Library, including many more generic Collection based methods.

## Iterating Over Arrays

To iterate over the entire contents of an array in Swift use a `for-in` loop.

```swift
for name in topBabyNames {
    print("\(name)is the coolest name.")
}
// Output:
// Liam is the coolest name.
// Jackson is the coolest.
// Olivia is the coolest name.
```

A second technique is to call the `forEach()` method. This method will operate on all elements of the array and cannot by escaped using a `break` or `continue` call, evening returning a value in the body of the closure will only return that value out of the body and not the declaring method body. The `forEach()` method is commonly used when you want to ensure all elements are manipulated by the loop or to display the purpose of the loop to others reading your code.

```swift
topBabyNames.forEach { name in
  print("\(name) is the coolest name.")
}
// Same as above
```


## Useful Array Methods and Tests

Swift has a healthy library of methods and properties available for arrays and collections in general. Some of these include testing the contents of arrays such as `contains()` and `.isEmpty` while others can modify or manipulate the array entirely such as `map()`, `reduce()`, and `sort()`. Swift documentation for both collections and arrays include the exhaustive list.

```swift
var topBabyNames = ["Sophia", "Liam", "Riley", "Jackson", "Olivia", "Noah"]

topBabyNames.sort()
print(topBabyNames)
// ["Jackson", "Liam", "Noah", "Olivia", "Riley", "Sophia"]

topBabyNames.reverse()
print(topBabyNames)
// ["Sophia", "Riley", "Olivia", "Noah", "Liam", "Jackson"]

topBabyNames.contains("Olivia")
// true
```