---
Title: '.removeAll()'
Description: 'Removes all key-value pairs in a dictionary.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Dictionary'
  - 'Properties'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.removeAll()`** method will remove all key-value pairs from a dictionary.

## Syntax

```pseudo
dictionaryInstance.removeAll()
```

**Note:** The `.removeAll()` method takes no parameters.

## Example

```swift
var bookShelf = [
    "Moby Dick": "Herman Melville",
    "The Odyssey": "Homer",
    "Pride and Prejudice": "Jane Austen"
]

bookShelf.removeAll()

print(bookShelf)
```

In the example above, all key-value pairs in the `bookShelf` dictionary are removed. This will output an empty dictionary:

```shell
[:]
```
