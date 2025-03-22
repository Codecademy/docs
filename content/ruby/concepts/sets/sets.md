---
Title: 'Sets'
Description: 'In Ruby, a Set is a collection of unordered, non-duplicated values. They are functional like an Array but have quick lookup with Hash-storage. In order to use Sets: 1. Import the set module with require() 2. Use the Set keyword followed by brackets ([]) containing comma-separated values rb require("set") test_set = Set[1, 2]'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Classes'
  - 'Hashes'
  - 'Sets'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

In Ruby, a `Set` is a collection of unordered, non-duplicated values. They are functional like an `Array` but have quick lookup with `Hash`-storage.

## Syntax

In order to use Sets:

1. Import the `set` module with `require()`
2. Use the `Set` keyword followed by brackets (`[]`) containing comma-separated values

```rb
require("set")

test_set = Set[1, 2]

puts test_set # Output: #<Set: {1, 2}>
```

## Example

Values can be added to Sets with `#add()`:

```rb
test_set.add("It's a Beautiful Day!")

puts test_set
```

They can also be deleted with `#delete()`. Pass in the actual value. If the value doesn't exist in the Set, nothing happens to it:

```rb
test_set.delete(2)

puts test_set # Output: #<Set: {1, "It's a Beautiful Day!"}>

test_set.delete(100)

puts test_set # Output: #<Set: {1, "It's a Beautiful Day!"}>
```

Since Sets are array- and hash-like, they are iterable and can use methods like `each`:

```rb
require("set")

test_set = Set[1, 2]

test_set.add(3)
test_set.add("It's a Beautiful Day!")

test_set.each do |element|
  puts element
end
```
