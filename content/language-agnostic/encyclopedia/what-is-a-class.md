---
Title: "What is a Class?"
Subjects:
  - "Computer Science"
  - "Web Development"
Tags: 
  - "Classes"
  - "Objects"
  - "OOP"
Catalog Content:  
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/web-development"
---

A class is a piece of code within a program that functions as a template for creating instances of a particular object. The template provides initial values and behavior for each of these instances. Each instance is an object itself. 


## Example

Suppose we want to create a `Cat` class:

```rb
class Cat
   def initialize(name, color, age)
      @cat_name = name
      @cat_color = color
      @cat_age = age
   end
end
```

Now we can create a bunch of objects based off of the `Cat` class:

```rb
mochi = Cat.new("Mochi", "Gray", 1)
bean = Cat.new("Bean", "Black/White", 6)
```
