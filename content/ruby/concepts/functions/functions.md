---
Title: 'Functions'
Description: 'Functions are a set of instructions that return one value. Functions that exist in an object are typically called methods. A function is declared using the def keyword. We close a function with the end keyword. ruby def greeting puts "Hello, World!" return end'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

Functions are a set of instructions that return one value. Functions that exist in an object are typically called methods.

## Function Basics

A function is declared using the `def` keyword. We close a function with the `end` keyword.

```ruby
def greeting
  puts "Hello, World!"
  return
end

# Output: Hello, World!
# Output => nil
```

## Functions with Parameters

Functions can take parameters. Parameters are variables that are passed into a function.

```ruby
def greeting(name)
  puts "Hello, #{name}!"
  return
end

greeting("John")
# Output: Hello, John!
# Output => nil

# Parentheses are optional when calling a function
greeting "Mary"
# Output: Hello, Mary!
# Output => nil
```

## Explicit and Implicit Return

If the `return` keyword is not used, the last expression in the function will be returned.

```ruby
def greeting(name)
  return "Hello, #{name}!"
end

greeting("John")
# Output: => Hello, John!

# Returns the value of the last expression evaluated
def greeting(name)
  "Hello, #{name}!"
end

greeting("Mary")
# Output: => Hello, Mary!
```

## Default Values

Default values may be provided and will be used if no argument is passed to our function.

```ruby
def greeting(name="human")
  return "Hello, #{name}!"
end

greeting
# Output: => Hello, human!
```
