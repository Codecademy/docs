---
Title: 'Collections'
Description: 'Collections are data structures used to store multiple values in a given variable.'

Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Collections'
  - 'Arrays'
  - 'Dictionaries'
  - 'Sets'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Collections** are data structures that store multiple values of the same, or different types. Swift provides three main collection types: arrays, sets, and dictionaries.


Collections are can be value types or reference types, depending on the implementation.

A value type is a type whose instances are copied when they are assigned to a variable or constant, or when they are passed to a function. A reference type is a type whose instances share a single copy of the data, and use references to access it.


## Syntax

In Swift, collections are defined using different syntaxes, depending on the type of collection.
* **Arrays** are ordered collections of values. They are defined using square brackets `[]`, with the values separated by commas. For example: `var fruits = [\"apple\", \"banana\", \"orange\"]`
* **Sets** are unordered collections of unique values. They are defined using the Set keyword, followed by a pair of parentheses`()`, with the values separated by commas. For example:`var colors = Set(\"red\", \"green\", \"blue\")`
* **Dictionaries** are unordered collections of key-value pairs. They are defined using square brackets `[]`, with the keys and values separated by colons`:`, and the pairs separated by commas. For example:`var scores = [\"Alice\": 90, \"Bob\": 80, \"Charlie\": 70]`

### `append()`,`insert()` and `remove()`
Values can be added or removed from collections with the following methods:
* `append()` adds a new value to the end of an array or a set.
* `insert()` adds a new value at a specified index in an array, or inserts a new key-value pair in a dictionary.
* `remove()` removes a value from an array or a set at a specified index, or removes a key-value pair from a dictionary by its key.

```swift

// Adding values to an array
fruits.append("grape") // fruits is now ["apple", "banana", "orange", "grape"]
fruits.insert("pear", at: 1) // fruits is now ["apple", "pear", "banana", "orange", "grape"]

// Removing values from an array
fruits.remove(at: 3) // fruits is now ["apple", "pear", "banana", "grape"]
fruits.removeLast() // fruits is now ["apple", "pear", "banana"]

// Adding values to a set
colors.append("yellow") // colors is now {"red", "green", "blue", "yellow"}

// Removing values from a set
colors.remove("green") // colors is now {"red", "blue", "yellow"}

// Adding key-value pairs to a dictionary
scores["David"] = 85 // scores is now ["Alice": 90, "Bob": 80, "Charlie": 70, "David": 85]

// Removing key-value pairs from a dictionary
scores.removeValue(forKey: "Bob") // scores is now ["Alice": 90, "Charlie": 70, "David": 85]
```

## Creating a collection
In Swift, you can create a collection using literal syntax or initializer syntax.

For example, in the code below, the array `employees` is declared with names and salaries through the initialization method. The `employees` variable is assigned to the value of `[Employee]`, this creates an array of instances of the class `Employee`.

```
var employees: [Employee] = [
    Employee(name: "SpongeBob", salary: 100),
    Employee(name: "Patrick", salary: 50),
    Employee(name: "Squidward", salary: 200)
]
```

**Note:**:  Arrays are also named types, which are types that are given a name when defined and can be referred to as such (i.e. instances of `[Employee]` have the type `[Employee]`).

## Accessing Elements and Properties
To view an array’s elements or properties:
```
print(employees.count)
// Output: 3

print(employees[0].name)
// Output: SpongeBob

print(employees[2].salary)
// Output: 200
```
For example, `SpongeBob` is getting a raise! So the `.increaseSalary(by:)` method will be called on `employees[0]` element:
```
print(employees[0].salary)
// Output: 100

employees[0].increaseSalary(by: 50)
print(employees[0].salary)
// Output: 150
```