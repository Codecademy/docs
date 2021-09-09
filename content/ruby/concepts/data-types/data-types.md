---
Title: 'Data Types'
Description: 'Data types represent different types of data such as numbers, booleans, strings, etc. As an object-oriented language, all data types are based on classes. Ruby has different types of numbers such as integers and floating point numbers. ruby count = 1 rating = 1.5 miles = 127 hours = 2.5'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Data Types'
  - 'Variables'
  - 'Arrays'
  - 'Booleans'
  - 'Hashes'
  - 'Numbers'
  - 'Strings'
  - 'Symbol'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

Data types represent different types of data such as numbers, booleans, strings, etc. As an object-oriented language, all data types are based on classes.

## Numbers

Ruby has different types of numbers such as integers and floating point numbers.

```ruby
# Integer type
count = 1

# Float type
rating = 1.5

# Both float and integer types
miles = 127
hours = 2.5
miles_per_hour = miles / hours

puts "Miles per hour: #{miles_per_hour}"
# Output: Miles per hour: 50.8
```

## Booleans

A value of either `true` or `false`.

```ruby
temp = 100
isHot = temp > 80

puts isHot
# Output: true

if isHot
  puts "Better wear shorts today!"
else
  puts "Better wear long pants today!"
end

# Output: Better wear shorts today!
```

## Strings

A string is a sequence of characters that represents a word or a sentence. They are created by surrounding a sequence of characters with single or double quotes.

```ruby
puts "Hello World!"
puts 'Hello World!'
```

## Arrays

Arrays store data in a list. An array can contain any type of data. Values are comma separated and enclosed in square brackets. Positions in the array start at 0.

```ruby
mixed_array = [true, 2, "three", 4.0]

puts "The first element is: #{mixed_array[0]}"
# Output: The first element is: true

```

## Hashes

A collection of key-value pairs enclosed within curly braces. Values are assigned to keys using the `=>` syntax.

```ruby
person = {
  first_name: "Kara",
  last_name: "Brennan",
  age: 29
}

puts "#{person[:first_name]} #{person[:last_name]} is #{person[:age]} years old."
# Output: Kara Brennan is 29 years old.
```

## Symbols

Symbols are a unique data type in Ruby. They are similar to strings except that they take up less memory and have better performance. Symbols are created by using the `:` syntax.

```ruby
basketball_team = {:center => "Shaquille O'Neal", :forward => "LeBron James", :guard => "Steph Curry"}

puts basketball_team[:center]
# Output: Shaquille O'Neal

puts basketball_team[:forward]
# Output: LeBron James

puts basketball_team[:guard]
# Output: Steph Curry
```
