---
Title: 'Classes'
Description: 'Classes are like blueprints for creating objects. Objects are often called instances of a class. Classes define the properties and methods that objects created from them will have. For example, a ball is a class and baseball, football, and basketball are instances of the ball class. The class keyword followed by a name with the first letter capitalized creates a new class. The end keyword ends the class definition. Objects, or instances of the class, are created by calling the new method on the class. ruby class Ball # Properties and methods of the class end ball1 = Ball.new'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Classes'
  - 'Objects'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

Classes are like blueprints for creating objects. Objects are often called instances of a class. Classes define the properties and methods that objects created from them will have. For example, a ball is a class and baseball, football, and basketball are instances of the ball class.

## Defining a Class

The `class` keyword followed by a name with the first letter capitalized creates a new class. The `end` keyword ends the class definition. Objects, or instances of the class, are created by calling the new method on the class.

```ruby
# Class name is Ball
class Ball
  # Properties and methods of the class
end

# Create two instances of the Ball class
ball1 = Ball.new
ball2 = Ball.new

# Print the class of ball1 and ball2
puts ball1.class
puts ball2.class
```

The output would look something like:

```
Ball
Ball
```

## Passing Parameters to new Method

The new method is passed parameters when it is called. The parameters are assigned to the properties of the class.

```ruby
# Class name is Ball
class Ball

  # Initialize method - called whenever a new object is created
  def initialize(name, size, shape, color)
    @name = name
    @size = size
    @shape = shape
    @color = color

    puts "The #@name is #@size and #@shape and looks #@color."
  end

end

# Create two instances of the Ball class
ball1 = Ball.new("basketball", "medium", "round", "orange")
ball2 = Ball.new("football", "medium", "oblong", "brown")
ball3 = Ball.new("soccer ball", "medium", "round", "black and white")
```

The output would look something like:

```
The basketball is medium and round and looks orange.
The football is medium and oblong and looks brown.
The soccer ball is medium and round and looks black and white.
```
