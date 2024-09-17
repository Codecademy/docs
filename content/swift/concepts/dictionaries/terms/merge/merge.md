---
Title: '.merge()'
Description: 'Combines the elements of two dictionaries.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Dictionary'
  - 'Methods'
  - 'Properties'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.merge()`** method in Swift is used to combine the elements of two dictionaries. If the dictionaries have the same key, the value from the second dictionary will be used. If the dictionaries have different keys, the key-value pairs will be added to the resulting dictionary.

## Syntax

```pseudo
dictionary1.merge(dictionary2) { (current, new) -> ValueType in
    return resultValue
}
```

- `dictionary1`: The dictionary that will be updated with the key-value pairs from `dictionary2`.
- `dictionary2`: The dictionary whose key-value pairs will be merged into `dictionary1`.

A closure that takes two parameters:

- `current`: The current value (from `dictionary1`) for the key that exists in both dictionaries.
- `new`: The new value (from `dictionary2`) for the key that exists in both dictionaries.

The closure should return the value to use in the merged dictionary when the same key is present in both.

## Example

In the example below, two dictionaries are merged. The key `Jodi` is found in both dictionaries and the value from `petAges2` is used. The key `Benny` only exists in `petAges2`, so it is added to the resulting dictionary:

```swift
var petAges1 = ["Aurora": 10, "Jodi": 7]
var petAges2 = ["Jodi": 8, "Benny": 12]

petAges1.merge(petAges2) { (current, new) in new }

print(petAges1)
```

The above code produces the following output:

```shell
["Aurora": 10, "Jodi": 8, "Benny": 12]
```

In the output, the key-value pairs from `petAges2` have been merged into `petAges1`. The key `Jodi` has a value of `8` and the key `Benny` has a value of `12`.

The `.merge()` method is useful when you want to combine the key-value pairs of two dictionaries, updating the values of keys that are found in both dictionaries and adding new key-value pairs to the resulting dictionary.

This method is available in Swift 4.0 and later.
