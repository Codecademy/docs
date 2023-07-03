---
Title: 'Structs'
Description: 'A user-defined type that combines several fields of different data types, but related, forming a collection.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Composition'
  - 'Initialization'
  - 'Fields'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

A **struct** is a user-defined type that combines several fields of different data types, normally related, forming a collection.

It works as a container, holding multiple fields of data, such as integers, strings, booleans, or even other structs, making it easy to access and store all the related data without cluttering up the code with multiple variables.

## Syntax

To declare a struct in Go, use the `type` and `struct` keywords. Inside the curly braces data fields are declared as needed with their corresponding data type.

```pseudo
type <struct_name> struct {
    <field_one> <data-type>
    <field_two> <data-type>
    ...
}
```

### Example

```go
type Rectangle struct {
    width float64
    height float64
}
```

In this example, `Rectangle` is the name of the struct, and `width` and `height` are the fields contained in it. The fields have a corresponding data type, `float64`, to be able to store decimal numbers.

In this particular example, both members have the same data type, but it's not mandatory.

## Setting Values

### Using Dot Notation

In Go, there are a few ways to set values on a struct. One of them is setting each value individually by using dot notation.

```go
type Car struct {
    brand string
    year int
    mileage float64
}

func main(){
    myCar := Car{}
    myCar.brand = "Ford"
    myCar.year = 2023
    myCar.mileage = 15000
}
```

In the example above, a `Car` struct is defined. In the `main` function, the values are set using the dot notation.
This method is used to access and modify the fields of a struct. To set the value of a field, use the `.` operator followed by the name of the field to modify, and then assign the desired value.

This way of setting values is very intuitive and convenient. However, for more complex initializations, it is best to consider
other options.

### Using Default Values

An alternative method is to use default values rather than explicitly setting each one to its value every time a new instance of that struct is created.

To use this method, a constructor function is defined. This will create a new instance of the struct and will set its default values if none are provided. These default values will be replaced when a new value is set to the field.

```go
func NewCar(brand string, year int, mileage float64) *Car {
    return &Car{brand, year, mileage}
}

func main(){
    car1 := NewCar("Toyota", 2023, 0)

    fmt.Printf("Brand: %s\n", car1.brand)       // Output: Brand: Toyota
    fmt.Printf("Year: %d\n", car1.year)         // Output: Year: 2023
    fmt.Printf("Mileage: %f\n", car1.mileage)   // Output: Mileage: 0
}
```

> **Note:** Constructor functions such as `NewCar`, in the code above, return struct pointers. The `*` operator is used in the function statement to declare the return value as a pointer type, and the `&` address operator is designating the returned `Car` struct as a pointer, a reference to a memory location.

There's another way to set default values.

```go
type Car struct {
    brand string `default: "Tesla"`
    year int `default: 2022`
    mileage float64 `default: 1520.20`
}
```

If a default value is not specified for a field, when initializing it, it will be assigned a zero value (e.g. 0 for integers, false for bools).

## Initializing Structs

There are two ways to initialize a struct in Go: the `var` keyword or a literal value.

### Using the `var` Keyword

```go
type Car struct {
    brand string
    year int
    mileage float64
}

func main() {

    var grandmaCar Car
    grandmaCar.brand = "Toyota"
    grandmaCar.year = 1993
    grandmaCar.mileage = 251200.84

}
```

This approach is useful when initializing the fields individually.

### Using a Literal Value

```go
func main() {

    dadsCar := Car{
       brand: "Range Rover",
       year: 2022,
       mileage: 10005.25,
    }
}
```

This way of initialization is handy to set all the field values at once.

## Adding a Method

Methods are added outside the struct. For instance, a receiver function is needed which will have a reference to the struct, to allow it to operate on the structs' data. The receiver, the struct itself, is a parameter that provides access to its own fields.

In the codebyte example below, the function `Drive()` takes the `Car` struct as the receiver, in the `main` function the method is invoked using dot notation printing to the console `I am driving my car.`

```codebyte/golang
package main
import "fmt"

type Car struct {
    brand string
    year int
    mileage float64
}

func (myCar Car) Drive() {
   fmt.Println("I am driving my car.")
}

func main() {
    myCar := Car{
      brand: "BMW",
      year: 2010,
      mileage: 15000}

  myCar.Drive()
}
```
