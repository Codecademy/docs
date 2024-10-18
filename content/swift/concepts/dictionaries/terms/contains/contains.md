---
Title: '.contains'
Description: 'A Boolean value that indicates whether a dictionary contains a specified key.'
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

The **`.contains`** method returns a Boolean value that indicates whether a dictionary contains a specified key. The method takes a single argument, which is a key. If the dictionary contains the specified key, the method returns `true` otherwise, it returns `false`.

## Syntax

```pseudo
dictionaryInstance.contains(where: { key, value in
  return key == "key" && value == "value"
})
```

This will output:

```shell
true
false
```
