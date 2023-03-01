---
Title: 'Composition'
Description: 'Composition is useful for building flexible and maintainable code.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Composition'
  - 'Development'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

Go's **composition** is like having a big toolbox with all the special tools needed to build amazing computer projects. The English definition of compose means to create or make up a whole by adding parts. Go's composition is a combination of various elements that make the language a powerful and efficient tool for software development. 

## Structs

The following example creates a [struct](https://www.codecademy.com/resources/docs/go/structs) called `Pizza`:

```go
package main

import "fmt"

type Pizza struct {
  Name        string
  Size        string
  Toppings    []string
  IsDelicious bool
}
```

This structure can be used to create a new function that can help define what specific style of pizza is ordered.

This is done in the following example:

```go
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

This example results in the following output:

```shell
Margherita pizza is a medium pizza with toppings of [tomatoes mozzarella basil]
```

## A Struct Within a Struct

The following example has an important difference.

```go
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

In this example `Restaurant` contains the `Pizza` structure.

In this example, a `struct` named `Pizza` is defined with fields for the name, size, toppings, and whether or not it's delicious. The `pizzaStyle` function takes a `Pizza` `struct` as an argument and returns a string that describes the pizza.

A `struct` named `Restaurant` is also defined that contains the `Pizza` structure, the restaurant name, and the restaurant rating. The `restaurantInfo()` function takes a `Restaurant` instance as an argument and returns a string that describes the restaurant.

In the main function, a `Pizza` struct called `myPizza` and a `Restaurant` `struct` called `myRestaurant` are created. Then `myPizza` is passsed to `pizzaStyle` and `myRestaurant` is passed to `restaurantInfo`, which are then printed to the console.

This example results in the following output:

```shell
Margherita pizza is a medium pizza with toppings of [tomatoes mozzarella basil]
Pizzeria del Corso has a rating of 4 and serves the following pizzas: [{Margherita medium [tomatoes mozzarella basil] true}]
```

## Benefits Of Using Composition

Composition is a very strong technique for making complex structures and objects as a developer. Problems are broken down into smaller parts, and then managed in a structured way. The result is something that is efficient, maintainable, and flexible. (All important for solving problems!)

When designing software, it's important to consider the composition of the components we create and how they fit together to form a larger system. By adopting a compositional approach, software is created that is flexible, scalable, and easy to maintain over time.
