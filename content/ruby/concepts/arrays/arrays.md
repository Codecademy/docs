---
Title: 'Arrays'
Description: 'Arrays store data values in a list. An array can contain any data type. Values are comma separated and enclosed in square brackets. Elements in the array start at an index of 0. This method will create an array with zero, one or two arguments. No arguments will create an empty array. A single argument will determine the size of the array. Two arguments will determine the size of the array and the second argument will populate the array with that value. ruby array1 = Array.new puts array1.length array2 = Array.new(7) puts "#{array2}"'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Data Types'
  - 'Arrays'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

Arrays store data values in a list. An array can contain any data type. Values are comma separated and enclosed in square brackets. Elements in the array start at an index of 0.

## Creating Arrays with `new` Class Method

This method will create an array with zero, one or two arguments. No arguments will create an empty array. A single argument will determine the size of the array. Two arguments will determine the size of the array and the second argument will populate the array with that value.

```ruby
# Create an array without any arguments
array1 = Array.new

puts array1.length
# Output: 0

# Create an array with a length of seven
array2 = Array.new(7)

puts "#{array2}"
# Output: [nil, nil, nil, nil, nil, nil, nil]

puts array2.length
# Output: 7

# Create an array with four arguments
array3 = Array.new(4, "hello")

puts "#{array3}"
# Output: ["hello", "hello", "hello", "hello"]
```

## Creating Arrays Literals

The literal constructor `[]` can also be used to create an array. Between the brackets, you can use a comma separated list of values. The values types may be any type of data.

```ruby
 countdown = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

 puts "#{countdown}"
 # Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

 puts countdown.length
 # Output: 10

 puts countdown.size
 # Output: 10
```

## Accessing Elements in Arrays

There are a few ways to access elements in an array. A common way is to use the index of an array to access an element.

```ruby
haystack1 = ["hay", "hay", "needle", "hay", "hay"]

puts haystack1[2]
# Output: "needle"

puts haystack1[-3]
# Output: "needle"

# A second value can be passed in to select the number of elements to return
haystack2 = ["hay", "hay", "needle", "needle", "hay"]

puts haystack2[2, 2]
# Output: needle
# Output: needle
```
