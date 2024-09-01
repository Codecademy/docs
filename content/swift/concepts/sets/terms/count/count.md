---
Title: 'Sets Count()'
Description: 'Describing the syntax and basic use of count() for sets in Swift.'
Subjects:
  - 'iOS'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'iOS'
  - 'Sets'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
- 'learn-swift'
- 'paths/build-ios-apps-with-swiftui'
---

The **count** property returns the total amount of elements in the set.

## Syntax

set.count

## Example 1: set.count

```
var names: Set = ["Pete", "Dave", "Adam"] 
print(names.count)  
var coworkers = Set<String>()
print(coworkers.count)
```
### Output
```
3
0
```
In the above example, since
- <kbd>names</kbd> contain three string elements, the property returns 3.
- <kbd>coworkers</kbd> is an empty set, the property returns 0.

## Example 2: Using count with if...else
```
var numbers: Set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
if (numbers.count > 7) {
print( "The set size is large")
}
else {
print("The set size is small")
}
```
### Output
```
The set size is large
```

In the second example we have created the set named <kbd>numbers</kbd> with 10 elements.

Since there are 10 elements in the set, <kbd>numbers.count > 7</kbd> evaluates to <kbd>true</kbd>,
so the statement inside the <kbd>if</kbd> block is executed.
