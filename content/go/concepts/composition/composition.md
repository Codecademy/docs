---
Title: 'composition' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Composition is useful for building flexible and maintainable code' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Composition'
  - 'Development'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-go'
  - 'paths/computer-science'
---

Go's **composition** is like having a big toolbox with all the special tools you need to build amazing computer projects. The English definition of compose means to "create" or "make up a whole by adding parts". As composition is the noun form of compose, you can take a gander of what composition in Go might consist of.

## First things first, structs

Go's composition is a combination of various elements that make the language a powerful and efficient tool for software development. 

Let us take a look by first creating a struct called `pizza`

```
package main

import "fmt"

type Pizza struct {
	Name        string
	Size        string
	Toppings    []string
	IsDelicious bool
}
```
[Are you feeling bewildered by the concept of structs in programming? Look no further! Don't let confusion hold you back - unlock the power of structs today by clicking this text!](https://www.codecademy.com/resources/docs/go/structs)

## Using the struct we created to make a function

Now that we have our struct, we are capable of creating a new function that can help us define what specific **Style of Pizza** we want.

So let's do that here.
```
package main

import "fmt"

type Pizza struct {
	Name        string
	Size        string
	Toppings    []string
	IsDelicious bool
}

func pizzaStyle(p Pizza) string {
	return p.Name + " pizza is a " + p.Size + " pizza with toppings of " + fmt.Sprint(p.Toppings)
}

func main() {
	myPizza := Pizza{
		Name:        "Margherita",
		Size:        "medium",
		Toppings:    []string{"tomatoes", "mozzarella", "basil"},
		IsDelicious: true,
	}

	fmt.Println(pizzaStyle(myPizza))
}
```
**What do you think this would output?**
<details><summary>Click here to get the answer:</summary>
    <pre>
    Margherita pizza is a medium pizza with toppings of [tomatoes mozzarella basil]
    </pre>
</details>



## A struct within a struct?! It's a composition!

Take a good long look at this code and try to see what is different.

```
package main

import "fmt"

type Pizza struct {
	Name        string
	Size        string
	Toppings    []string
	IsDelicious bool
}

func pizzaStyle(p Pizza) string {
	return p.Name + " pizza is a " + p.Size + " pizza with toppings of " + fmt.Sprint(p.Toppings)
}

type Restaurant struct {
	Name      string
	Rating    int
	PizzaMenu []Pizza
}

func restaurantInfo(r Restaurant) string {
	return r.Name + " has a rating of " + fmt.Sprint(r.Rating) + " and serves the following pizzas: " + fmt.Sprint(r.PizzaMenu)
}

func main() {
	myPizza := Pizza{
		Name:        "Margherita",
		Size:        "medium",
		Toppings:    []string{"tomatoes", "mozzarella", "basil"},
		IsDelicious: true,
	}

	myRestaurant := Restaurant{
		Name:      "Pizzeria del Corso",
		Rating:    4,
		PizzaMenu: []Pizza{myPizza},
	}

	fmt.Println(pizzaStyle(myPizza))
	fmt.Println(restaurantInfo(myRestaurant))
}
```
You can see that the **Restaurant struct contains the Pizza struct!**

In this example, we define a struct called Pizza with fields for the name, size, toppings, and whether or not it's delicious. The pizzaStyle function takes a Pizza struct as an argument and returns a string that describes the pizza.

We also define a struct called Restaurant that contains the pizza struct, the restaurant name, and the restaurant rating. The restaurantInfo function takes a Restaurant struct as an argument and returns a string that describes the restaurant.

In the main function, we create a Pizza struct called myPizza and a Restaurant struct called myRestaurant. We then pass myPizza to pizzaStyle and myRestaurant to restaurantInfo, which are then printed to the console.

**Can you guess what both outputs would be?**
<details><summary>Click here to get the answer!</summary>
    <pre>
    Margherita pizza is a medium pizza with toppings of [tomatoes mozzarella basil]
    Pizzeria del Corso has a rating of 4 and serves the following pizzas: [{Margherita medium [tomatoes mozzarella basil] true}]
    </pre>
</details>

# Conclusion about Compositions

Composition is no doubt a very strong technique for making complex structures and objects as a developer. We break down problems into smaller parts, and then manage them in a structured way. As a result, we get something that is efficient, maintainable, and flexible. (All important for solving problems!)

When designing software, it's important to consider the composition of the components we create and how they fit together to form a larger system. By adopting a compositional approach, we can create software that is flexible, scalable, and easy to maintain over time.





