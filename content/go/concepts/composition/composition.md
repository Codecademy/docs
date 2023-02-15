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

## How to compose a composition

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
[Confused on what a struct is? You can come check out our link to understand Structs by clicking this sentence!](https://www.codecademy.com/resources/docs/go/structs)

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
What do you think this would output?
Click below to get the answer:
>!Margherita pizza is a medium pizza with toppings of [tomatoes mozzarella basil]




## Subsection 2

[Text about subsection 2]

## Subsection n

[Text about subsection n]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
