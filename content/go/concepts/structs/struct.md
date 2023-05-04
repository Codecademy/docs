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

A **struct** is a user-defined type that combines several fields of different data types, but related, forming a collection.

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

## Example

```go
type Rectangle struct {
    width float64
    height float64
}
```

In this example, `Rectangle` is the name of the struct, and `width` and `height` are the fields contained in it. The fields
have a corresponding data type, float64, to be able to store decimal numbers.
In this particular example, both members have the same data type, but they could have had different ones.

## Setting values
