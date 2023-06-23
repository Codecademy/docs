---
Title: 'Class'
Description: 'A class is a piece of code within a program that functions as a template or blueprint for creating multiple instances of a particular object.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Classes'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

A **class** is a piece of code within a program that functions as a template or blueprint for creating multiple instances of a particular object.

The template provides initial values and behavior for each of these instances. Each instance is an object itself.

## Example

Suppose we want to create a `Cat` class with three instance variables:

- `@cat_name`
- `@cat_color`
- `@cat_age`

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
mochi = Cat.new("Mochi", "Gray", 2)

bean = Cat.new("Bean", "Black/Gray", 6)

femi = Cat.new("Femme en Noir", "Black/White", 9)
```
