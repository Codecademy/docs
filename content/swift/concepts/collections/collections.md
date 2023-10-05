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

**Collections** are [data structures](https://www.codecademy.com/resources/docs/general/data-structures) that store multiple values of the same, or different, [type(s)](https://www.codecademy.com/resources/docs/swift/data-types).

Swift provides these collection types:

- [arrays](https://www.codecademy.com/resources/docs/swift/arrays)
- [sets](https://www.codecademy.com/resources/docs/swift/sets)
- [dictionaries](https://www.codecademy.com/resources/docs/swift/dictionaries)

Collections are value types, whose instances are copied when they are assigned to a variable or constant, or when they are passed to a function.

## Syntax

In Swift, collections are defined using different syntaxes, depending on the type of collection:

```swift
var fruits = ["apple", "banana", "orange"] // An array

var colors = Set("red", "green", "blue") // A set

var scores = ["Alice": 90, "Bob": 80, "Charlie": 70] // A dictionary
```

## Creating a Collection

In Swift, a collection can be declared using either the literal syntax or the initializer syntax.

For example, in the code below, the array `employees` is declared with names and salaries through the initialization method. The `employees` variable is assigned to the value type of `[Employee]` which creates an array of instances of the class `Employee`.

```swift
var employees: [Employee] = [
  Employee(name: "SpongeBob", salary: 100),
  Employee(name: "Patrick", salary: 50),
  Employee(name: "Squidward", salary: 200)
]
```

> **Note:**: Arrays are also named types, which are types that are given a name when defined and can be referred to as such (i.e. instances of `[Employee]` have the type `[Employee]`).

### Altering Collections

Values within collections can be altered:

- New values can be appended to ordered collections (arrays and sets):
  - Array: [.append()](https://www.codecademy.com/resources/docs/swift/arrays/append) method
- New values can be inserted at a specified index (arrays and sets) or key (dictionary):
  - Array: [.insert()](https://www.codecademy.com/resources/docs/swift/arrays/insert) method
  - Set: [.insert()](https://www.codecademy.com/resources/docs/swift/sets/insert) method
- Values can be removed from a collection at a specified index (arrays or sets) or at a specified key (dictionary):
  - Array: [.remove()](https://www.codecademy.com/resources/docs/swift/arrays/remove) method
  - Set: [.remove()](https://www.codecademy.com/resources/docs/swift/sets/remove) method
  - Dictionary: [.removeValue()](https://www.codecademy.com/resources/docs/swift/dictionaries/removevalue) method

## Accessing Elements and Properties

To view an array’s elements or properties:

```swift
print(employees.count)
// Output: 3

print(employees[0].name)
// Output: SpongeBob

print(employees[2].salary)
// Output: 200

// SpongeBob is getting a raise! So the .increaseSalary(by:) method will be called on employees[0]

print(employees[0].salary)
// Output: 100

employees[0].increaseSalary(by: 50)
print(employees[0].salary)
// Output: 150
```
