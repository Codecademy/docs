<!--
---
Subjects:
  - "What is a Class?"
Tags: 
  - "language-agnostic"
  - "class"
  - "OOP"
Catalog Content:  # If listing multiple URLs, please put the most relevant one first 
  - "https://www.codecademy.com/learn/learn-python/modules/learn-python-introduction-to-classes-u"
  - "https://www.codecademy.com/learn/learn-ruby/modules/learn-ruby-object-oriented-programming-part-i-u"
  - "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-classes"
---
-->

# What is a Class?

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