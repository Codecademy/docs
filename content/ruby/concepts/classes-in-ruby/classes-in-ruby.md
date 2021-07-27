---
Title: "Classes in Ruby"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Classes"
  - "Objects"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-ruby"
  - "https://www.codecademy.com/learn/learn-rails"
---

Classes are like blueprints for creating objects. Objects are often called instances of a class. Classes define the properties and methods that objects created from them will have. For example, a ball is a class and baseball, football, and basketball are instances of the ball class.

## Defining a Class

The `class` keyword followed by a name with the first letter capitalized creates a new class. The `end` keyword ends the class definition. Objects, or instances of the class, are created by calling the new method on the class.

```ruby
# class name is Ball
class Ball
    # properties and methods of the class
end

# create two instances of the Ball class
ball1 = Ball.new
ball2 = Ball.new

# print the class of ball1
puts ball1.class
puts ball2.class
# Output: Ball
# Output: Ball
```

## Passing Parameters to new Method

The new method is passed parameters when it is called. The parameters are assigned to the properties of the class.

```ruby
# class name is Ball
class Ball

  # initialize method - called whenever a new object is created
  def initialize(name, size, shape, color)
    @name = name
    @size = size
    @shape = shape
    @color = color

    puts "The #@name is #@size and #@shape and looks #@color."
  end

end

# create two instances of the Ball class
ball1 = Ball.new("basketball", "medium", "round", "orange")
ball2 = Ball.new("football", "medium", "oblong", "brown")
ball3 = Ball.new("soccer ball", "medium", "round", "black and white")

# Output:
# The basketball is medium and round and looks orange.
# The football is medium and oblong and looks brown.
# The soccer ball is medium and round and looks black and white.
```
