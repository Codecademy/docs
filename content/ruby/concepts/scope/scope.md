---
Title: 'Scope'
Description: 'In Ruby, variables have a scope that outlines what other variables and methods are available to them versus which ones are not. There are different levels of scope: - Class-level - Instance-level - Global-level - Local-level Variables defined at the class-level scope are usually marked with @@. They are available for use anywhere within the class block or any sub-class blocks: rb'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Scope'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

In Ruby, variables have a scope that outlines what other variables and methods are available to them versus which ones are not. There are different levels of scope:

- Class-level
- Instance-level
- Global-level
- Local-level

## Class-level

Variables defined at the class-level scope are usually marked with `@@`. They are available for use anywhere within the class block or any sub-class blocks:

```rb
class MyClass
  @@class_variable = "This is the Class variable"

  def inner_method
    "From MyClass: #{@@class_variable}"
  end
end

class SubClass < MyClass
  def display_class_variable
    "From SubClass: #{@@class_variable}"
  end
end


classInstance = MyClass.new()

subClassInstance = SubClass.new()

puts subClassInstance.display_class_variable
# Output: From SubClass: This is the Class variable

puts classInstance.inner_method
# Output: From MyClass: This is the Class variable
```

## Instance-level

Variables defined at the instance-level scope are usually marked with `@` and created within a class's `initialize` method. They are available for whenever an instance of the class if was defined in is used:

```rb
class Person
  def initialize(name)
    @name = name
  end

  def name
    @name
  end
end

person = Person.new("Randy")

puts person.instance_variables # Output: @name
puts person.name # Output: Randy
```

## Global-level

Variables defined in the global scope can be access anywhere within the Ruby program. Their names start with `$`:

```rb
$global_number = 42

def show_numbers
  puts [$global_number]
end

show_numbers # Output: 42
```

## Local-level

Variables defined at the local scope are the most contextual; whichever block they are defined in usually determines how far their scope reaches.

Below, `local_to_outside_method` is local to the general, global scope of the program. Inside the `add_numbers()` method is a variable whose scope exists only within the method, `local_to_method`:

```rb
local_to_outside_method = 32

def add_numbers(outside_term)
  local_to_method = 42
  outside_term + local_to_method
end

puts local_to_outside_method + add_numbers(3) # Output: 77
```
