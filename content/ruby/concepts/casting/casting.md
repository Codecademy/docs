---
Title: 'Casting'
Description: 'In Ruby, the language comes with a variety of building typecasting methods for conerting values from one data type to another. For the most part methods usually begin with to[data-type]. To convert from String to Integer, use toi: rb meaningoflife = "42" puts meaningoflife.class # Output: String meaningoflife = meaningoflife.to_i'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Types'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

In Ruby, the language comes with a variety of building typecasting methods for conerting values from one data type to another.

## Syntax

For the most part methods usually begin with `to_[data-type]`.

### To Integer

To convert from String to Integer, use `to_i`:

```rb
meaning_of_life = "42"

puts meaning_of_life.class # Output: String

meaning_of_life = meaning_of_life.to_i

puts meaning_of_life.class # Output: Integer
```

### To Float

To convert from String to Float-type, use `to_f`:

```rb
meaning_of_life = "42.0"

puts meaning_of_life.class # Output: String

meaning_of_life = meaning_of_life.to_f

puts meaning_of_life.class # Output: Float
```

### To Array

To convert an Object to an Array, use `to_a`:

```rb
myObj = {
  name: "Denise",
  occupation: "Software Engineer"
}

puts myObj.to_a
```

The output would be:

```shell
name
Denise
occupation
Software Engineer
```
