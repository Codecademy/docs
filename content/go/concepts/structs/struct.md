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
  - 'path/computer-science'
---

A **struct** is a user-defined type that combines several fields of different data types, normally related, forming a
collection.

It works as a container, holding multiple fields of data, such as integers, strings, booleans, or even other structs,
making it easy to access and store all the related data without cluttering up the code with multiple variables.

## Syntax

To declare a struct in Go, it's used the `type` and `struct` keywords. Inside we declare as many data fields as needed with
their corresponding data type.

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

In this example, `Rectangle` is the name of the struct, and `width` and `height` are the fields contained in it. The fields
have a corresponding data type, float64, to be able to store decimal numbers.
In this particular example, both members have the same data type, but it's not mandatory.

## Setting values

### Using dot notation

In Go, there are a few ways to set values on a struct. One of them is setting each value individually by using dot notation.

#### Example

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

In the example above, a Car struct is defined and in the main function, the values are set using the dot notation.
This method is used to access and modify the fields of a struct. To set the value of a field, use the `.` operator followed
by the name of the field to modify, and then assign the desired value.

This way of setting values is very intuitive and convenient. However, for initializations more complex, is best to consider
other options.

### Using default values

This is a way of initializing struct fields to default values, rather than explicitly set each field to it's value every
time a new instance of that struct is created.
To use this method, a constructor function is defined. This will create a new instance of the struct and will set its
default values if none is provided.

#### Example

```go
func NewCar(brand string, year int, mileage float64) *myCar {
    return &myCar{
        Brand: "Toyota",
        Year: 2023,
        Mileage: 0
    }
}

func main(){
    car1 := NewCar()

    fmt.Printf("Brand: %s\n", car1.Brand)       // output: Brand: Toyota
    fmt.Printf("Year: %d\n", car1.Year)         // output: Year: 2023
    fmt.Printf("Mileage: %f\n", car1.Mileage)   // output: Mileage: 0
}
```

These default values will be replaced when a new value is set to the field.
