---
Title: 'Iterators'
Description: 'Iterators are used to do one thing multiple times. They are used in tandem with collections (Hashes, Arrays, etc...). A collection is an object that stores a group of data members. Returns all elements in a range, array or hash. Values are returned in the order they are stored in the collection. ruby letters = [C, o, d, e, c, a, d, e, m, y] letters.each do|letter| puts letter end'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Iterators'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

Iterators are used to do one thing multiple times. They are used in tandem with collections (Hashes, Arrays, etc...). A collection is an object that stores a group of data members.

## Each Iterator

Returns all elements in a range, array or hash. Values are returned in the order they are stored in the collection.

```ruby
letters = ['C', 'o', 'd', 'e', 'c', 'a', 'd', 'e', 'm', 'y']

letters.each do|letter|
  puts letter
end
```

- Our collection, `letters`, is an array.
- The `each` is a method that iterates through the collection.
- The `do` and `end` are used to indicate the scope of the `each` method.
- `letter` is a variable that is used to store the value of each iteration.

The output would be:

```
C
o
d
e
c
a
d
e
m
y
```

## Collect Iterator

Runs on all the elements in a collection. Returns the entire collection.

```ruby
numbers = [1, 2, 3, 4, 5]

numbers_squared = numbers.collect {|number| number * number}

puts numbers_squared
# Output: [1, 4, 9, 16, 25]
```

- The `collect` method is a method that iterates through the `numbers` array.
- `number` is a variable that is used to store the value of each iteration.

## Times Iterator

This iterator is a loop designed to repeat a block of code a certain number of times. May or may not use an iteration variable.

```ruby
5.times do |i|
  puts "Message number #{i + 1}"
end
```

- `5.times` is the specified number of times to repeat the block of code.

The output would be:

```
Message number 1
Message number 2
Message number 3
Message number 4
Message number 5
```
