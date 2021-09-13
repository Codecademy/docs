---
Title: 'Strings'
Description: 'A string is a sequence of one or more characters that represents a word or a sentence. It may contain letters, numbers, or symbols. They are created by surrounding a sequence of characters with single or double quotes. Strings are mutable, which means that they can be changed. A string can be created by using the " (double quotes) or  (single quotes) around a sequence of characters. ruby puts String created using single quotes. puts "String created using double quotes."  Double quotes allow variable interpolation. This means that you can use a variable inside a string.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Variables'
  - 'Variables Types'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

A string is a sequence of one or more characters that represents a word or a sentence. It may contain letters, numbers, or symbols. They are created by surrounding a sequence of characters with single or double quotes. Strings are mutable, which means that they can be changed.

## Creating Strings

A string can be created by using the `"` (double quotes) or `'` (single quotes) around a sequence of characters.

```ruby
puts 'String created using single quotes.'
puts "String created using double quotes."
# Output: String created using single quotes.
# Output: String created using double quotes.
```

## String Interpolation

Double quotes allow variable interpolation. This means that you can use a variable inside a string.

```ruby
favorite_color = "blue"

puts "My favorite color is #{favorite_color}."
# Output: My favorite color is blue.
```

```ruby
favorite_color = "blue"

puts 'Cannot interpolate #{favorite_color} with single quotes.'
# Output: Cannot interpolate #{favorite_color} with single quotes.
```

## Strings are Objects

Strings are objects. They have methods that can be invoked on them.

```ruby
greeting = "Hello, neighbor"
greeting_shout = greeting.upcase

puts greeting_shout
# Output: "HELLO, NEIGHBOR"
```

## Accessing Elements within a String

Square brackets (`[]`) can be used to access elements within a string by passing in indexes or ranges.

```ruby
# access element at index 3
greeting = "Hello, world!"

puts greeting[3]
# Output: l

# access element at the end of string with negative index
greeting = "Hello, world!"

puts greeting[-1]
# Output: !

# access a range of elements
greeting = "Hello, world!"
first_word = greeting[0..4]

puts first_word
# Output: Hello

# two comma separated values will indicate the starting index and the number of elements to be accessed
greeting = "Hello, world!"
second_word = greeting[7, 5]

puts second_word
# Output: world
```

## Multi-line Strings

Multi-line strings can be created by using `"`, `%//`, and `<<STRING STRING` syntax.

```ruby
puts "First string"

# Multi-line with `""`
puts ""

# Multi-line with `%//`
puts %/Second string/

# Multi-line with `<<STRING STRING`
puts <<STRING

In Ruby, a user can create the multiline
strings easily where into other programming
languages creating multiline strings
requires a lot of efforts
STRING
```

The output would be:

```
=begin
First string

Second string

Third string
```

## String Replication

Replicating a string is done with the `*` operator. The operator is preceded by the string to be replicated and followed by the number of times to replicate the string.

```ruby
tongue_twister = "Sally sells seashells by the seashore "

puts tongue_twister * 5
```

The output would be:

```bash
Sally sells seashells by the seashore Sally sells seashells by the seashore Sally sells seashells by the seashore Sally sells seashells by the seashore
```
