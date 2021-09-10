---
Title: 'Hashes'
Description: 'A collection of key-value pairs enclosed within curly braces. Values are assigned to keys using the => syntax. This will create an empty hash with no default values. Default values may also be provided. ruby emptyhash = Hash.new puts emptyhash.inspect puts "#{emptyhash[1]}" hashdefault = Hash.new("Codecademy")'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Data Types'
  - 'Hashes'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

A collection of key-value pairs enclosed within curly braces. Values are assigned to keys using the `=>` syntax.

## Creating Hash with `new` Class Method

This will create an empty hash with no default values. Default values may also be provided.

```ruby
# Create a new empty hash
empty_hash = Hash.new

puts empty_hash.inspect
# Output: {}

puts "#{empty_hash[1]}"
# An empty hash will have nothing to display

# Create a new hash with a default value
hash_default = Hash.new("Codecademy")

puts hash_default.inspect
# Output: {}

# An empty hash will return the default value
puts "#{hash_default[4]}"
# Output: Codecademy
```

## Creating Hash Literals

A hash literal is created by enclosing a list of key-value pairs between curly braces.

```ruby
programming_languages = {"key1" => "Ruby", "key2" => "Python", "key3" => "Java", "key4" => "C++", "key5" => "C#"}

puts programming_languages.inspect
# Output: {"key1"=>"Ruby", "key2"=>"Python", "key3"=>"Java", "key4"=>"C++", "key5"=>"C#"}
```

Retrieving a hash value involves putting the required key between square brackets (`[]`).

```ruby
programming_languages = {"key1" => "Ruby", "key2" => "Python", "key3" => "Java", "key4" => "C++", "key5" => "C#"}

puts programming_languages["key1"]
# Output: Ruby
```

Changing a hash value involves putting the required key between square brackets (`[]`) and assigning a new value.

```ruby
programming_languages = {"key1" => "Ruby", "key2" => "Python", "key3" => "Java", "key4" => "C++", "key5" => "C#"}

# print original value of "key1"
puts programming_languages["key1"]
# Output: Ruby

# change value of "key1"
programming_languages["key1"] = "Ruby on Rails"

puts programming_languages["key1"]
# Output: Ruby on Rails
```
