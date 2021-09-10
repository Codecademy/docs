---
Title: 'Variables'
Description: 'A variable is a label that Ruby assigns to a particular object. There are four different types of variables in Ruby. Each type starts with a special character to indicate the type of variable it is. Local variables must begin with a lowercase letter or . These variables are local to the code block of the method they are declared in. ruby color = "green" person = "Shannon"  There is nothing special about the word color in this line of code. Its just a variable name. You could set pizza = "green". While that variable name choice might be misleading to the human reading it, the value would still be "green".'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Variables'
  - 'Scope'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

A variable is a label that Ruby assigns to a particular object. There are four different types of variables in Ruby. Each type starts with a special character to indicate the type of variable it is.

## Local Variables

Local variables must begin with a lowercase letter or `_`. These variables are local to the code block of the method they are declared in.

```ruby
color = "green"
_person = "Shannon"
```

There is nothing special about the word `color` in this line of code. It's just a variable name. You could set `pizza = "green"`. While that variable name choice might be misleading to the human reading it, the value would still be `"green"`.

## Instance Variables

Instance variables begin with an `@` symbol. Instance variables are variables that belong to an object.

```ruby
class Person

 def initialize(first, middle, last)

   # Instance Variables
   @first_name = first
   @middle_name = middle
   @last_name = last
 end

 # Displaying result
 def display_full_name()
   puts "Full name:  #@first_name #@middle_name #@last_name"
 end
end

# Create Objects
person1 = Person.new("Alexandra", "Smith", "Johnson")
person2 = Person.new("Marcus", "Alonzo", "Thomas")

# Call Methods
person1.display_full_name()
person2.display_full_name()

# Output: Full name: Alexandra Smith Johnson
# Output: Full name: Marcus Alonzo Thomas
```

## Class Variables

Class variables begin with an `@@` sign. Class variables are available across different objects shared by all the descendants of the class. They must be initialized before use.

```ruby
class Person

 # Class variable
 @@number_of_people = 0

 def initialize(first, middle, last)
  @first_name = first
  @middle_name = middle
  @last_name = last
 end

 # displaying result
 def display_full_name()
  puts "Full name:  #@first_name #@middle_name #@last_name"
 end

 def total_no_of_people()
   # class variable
   @@number_of_people += 1
   puts "Total number of people: #@@number_of_people"
 end
end

# Create Objects
person1 = Person.new("Alexandra", "Smith", "Johnson")
person2 = Person.new("Marcus", "Alonzo", "Thomas")

# Call Methods
person1.display_full_name()
person1.total_no_of_people()
person2.display_full_name()
person2.total_no_of_people()

# Output: Full name: Alexandra Smith Johnson
# Output: Total number of people: 1
# Output: Full name: Marcus Alonzo Thomas
# Output: Total number of people: 2
```

## Global Variables

Global variables begin with an `$` symbol. While Class variables are not available across different classes, global variables are. Its scope is global, meaning that it can be accessed from anywhere in the program.

```ruby
# Global variable
$global_variable_starting_score = 0

class Class1
 def print_global_starting_score
   # Access global variable
   puts "The starting score in Class1 is #$global_variable_starting_score"
 end
end

class Class2
 def print_global_starting_score
   # Access global variable
   puts "The starting score in Class2 is #$global_variable_starting_score"
 end
end

class1obj = Class1.new
class1obj.print_global_starting_score
class2obj = Class2.new
class2obj.print_global_starting_score

# Output: The starting score in Class1 is 0
# Output: The starting score in Class2 is 0
```
