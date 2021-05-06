---
Title: "What is a Class?"
Subjects:
  - "Computer Science"
  - "Web Development"
Tags: 
  - "Class"
  - "Object"
  - "OOP"
Catalog Content:  
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/web-development"
---

A class is a piece of code within a program that functions as a template for creating instances of a particular object. The template provides initial values and behavior for each of these instances. Each instance is an object itself. 


## Example

```rb
// Forget a closing quotation mark and this will throw a syntax error
class Animal
   def initialize(name, legs, diet)
      @animal_name = name
      @animal_legs = legs
      @animal_diet = diet
   end
end

lion = Animal.new("lion", 4, "carnivore")
```
