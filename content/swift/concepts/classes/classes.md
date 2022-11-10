---
Title: 'Classes'
Description: 'Classes in Swift define characteristics and behaviors of an object.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Classes'
  - 'Objects'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Classes** serve as a template to define characteristics and behaviors of an object.

They are reference types, meaning all instances of a class carry the same characteristics and behaviors.

An instance is an object created based on a class.

## Syntax

In Swift, classes are defined using the `class` keyword, followed by a class name, and a pair of curly braces `{}`.

```swift
class MyClass {
  // Class body
}
```

> **Note:** Class names should be capitalized as per convention.

### `var`, `init()`, and `func`

Variables can be defined with the following steps:

1. Use the `var` keyword.
2. Provide a variable name.
3. Assign a value with `=`.

`init()` is a special method that gets called when a class instance is created. It can take any number of arguments in the form of `property: DataType`. The `self` keyword refers to the instance itself.

Functions within a class are defined with the following steps:

1. Use the `func` keyword.
2. Name the function.
3. Provide a set of curly braces `{}` to hold the function's body.

```swift
class Employee {
  var name = ""
  var salary = 0
  var manager = false

  init(name: String, salary: Int) {
    self.name = name
    self.salary = salary
  }

  func promote() {
    self.manager = true
  }
}
```

In the code above, `Employee` class is given three properties or variables:

- A `name` set to an empty string `""`.
- A `salary` set to an integer value of `0`.
- A `manager` boolean value set to `false`.

The `init()` method takes in `name` and `salary` arguments that are of data type string and integer, respectively.

When called on an instance, the `.promote()` method will set its `manager` property to `true`.

## Creating an Instance

In Swift, the `init()` method is called when a class instance is created.

An employee by the `name` of `"Sandy Cheeks"` works for "Tree Dome Enterprises Limited" and makes a `salary` of 10,000 acorns a year. Below, the `sandyCheeks` variable is assigned to the value of `Employee()`. This creates an instance of the class `Employee`.

Sandy's name and salary are set through the initialization method:

```swift
var sandyCheeks = Employee(name: "Sandy Cheeks", salary: 10000)
```

**Note:** Classes are also named types, which are types that are given a name when defined and can be referred to as such (i.e. instances of `Employee` have the type `Employee`).

## Access Functions and Variables

To view an instance's characteristics or properties:

```swift
print(sandyCheeks.name)
// Output: Sandy Cheeks

print(sandyCheeks.salary)
// Output: 10000
```

Sandy is getting a promotion! So the `.promote()` method will be called on `sandyCheeks` instance:

```swift
print(sandyCheeks.manager)
// Output: false

sandyCheeks.promote()
print(sandyCheeks.manager)
// Output: true
```
