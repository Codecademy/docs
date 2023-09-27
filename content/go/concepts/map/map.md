---
Title: 'Map'
Description: 'A built-in data structure used to store unordered key-value pairs.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Map'
  - 'Data Structures'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

A **map** is a built-in data structure that is used to store a collection of unordered key-value pairs. The pairs can be of the same type or of mixed types. It is Go's implementation of a hash table, which allows for efficient access, insertion, and deletion.

## Syntax

An empty map can be created using the `make()` function and assigning it to a variable.

```pseudo
variable_name := make(map[key_data_type]value_data_type)
```

An empty map can also be created by assigning the variable to a map literal.

```pseudo
variable_name := map[key_data_type]value_data_type{}
```

### Initializing a Map With Existing Key-Value Pairs

A map literal can also be used when initializing values in the declaration.

```pseudo
map_name := map[key_data_type]value_data_type{
  key-1: value-1,
  key-2: value-2,
  key-N: value-N,
}
```

> **Note:** All pairs should terminate with a comma, including the final pair, unless the assignment is all made on one line.

### Accessing Items

A value in the map can be accessed using its corresponding key value by putting the key in brackets.

```pseudo
map_name[key_value]
```

The value that results from the code above can also be stored in a variable for later use.

```pseudo
variable_name := map_name[key_value]
```

If the key does not exist, then the zero value will be returned based on the data type of the values in the map (e.g. int : 0, bool : false).

### Adding Items

Add new key-value pairs into the map by setting the new key value to a new value.

```pseudo
map_name[new_key] = [new_value]
```

### Removing Items

Key-value pairs can be removed from a map with the built-in `delete()` function.

```pseudo
delete(map_name, existing_key)
```

## Examples

### Declaring an Empty Map

The following code demonstrates how to create and print an empty map.

```go
package main

import "fmt"

func main() {

  // Create a empty map called emptyMap
  emptyMap := make(map[string]int)

  // Print map
  fmt.Println(emptyMap)

}
```

This will output:

```shell
map[]
```

### Declaring a Map with Values

The following code demonstrates how to initialize and print a map with key-value pairs.

```go
package main

import "fmt"

func main() {

  // Initialize map gradebook with values
  gradebook := map[string]float32{"John": 85.2, "Ana": 95.6}

  // Print map gradebook
  fmt.Println(gradebook)
}
```

This will output:

```shell
map[John:85.2 Ana:95.6]
```

### Accessing Elements

The following code will print the corresponding value for the key `"John"`.

```go
  // Print the value with key "John"
  fmt.Println(gradebook["John"])
```

This will output:

```shell
85.2
```

### Iterating All Key/Value Pairs in a Map

The following code will iterate and print all the key/value pairs of the map.

```go
  // Iterate all key/value pairs of the gradebook map
  for key, value := range gradebook {
    fmt.Printf("(%s, %.1f)\n", key, value)
  }
```

This will output:

```shell
(John, 85.2)
(Ana, 95.6)
```

### Storing a Map Value in a Variable

The following code will access the value in a map corresponding to the key of "Ana". It will store the result in a variable called `anaScore` and print it.

```go
  // Store the value that has a key of "Ana" in anaScore
  anaScore := gradebook["Ana"]

  fmt.Println(anaScore)
```

This will output:

```shell
95.6
```

### Accessing a Key That Doesn't Exist

The following code demonstrates what is returned for a non-existent key. The map maps a string to a float.

```go
  // Store the value that has a key of "John" in johnScore
  johnScore := gradebook["David"]

  // Since "David" does not exist in the map, 0 will be printed
  fmt.Println(johnScore)
```

This will output:

```shell
0
```

### Adding Values

The following code will first print an initialized map. It will then add two more key-value pairs into the map and print the map.

```go
  // Print the initialized map
  fmt.Println(gradebook)

  // Add more key-value pairs
  gradebook["George"] = 76.4
  gradebook["Emma"] = 90

  // Print the map again
  fmt.Println(gradebook)
```

This will output:

```shell
map[Ana:95.6 John:85.2]
map[Ana:95.6 Emma:90 George:76.4 John:85.2]
```

### Removing Values

The following code will first print an initialized map. It will then remove a key-value pair and print the map.

```go
  // Print the initialized map
  fmt.Println(gradebook)

  // Delete an item
  delete(gradebook, "John")

  // Print the map again
  fmt.Println(gradebook)
```

This will output:

```shell
map[Ana:95.6 Emma:90 George:76.4 John:85.2]
map[Ana:95.6 Emma:90 George:76.4]
```

### Codebyte Example

The following code will summarize all the initializations and operations for a map in Go that has been shown in this document.

```codebyte/golang
package main

import "fmt"

func main() {

  // Create empty map called m
  m := make(map[string]float32)

  // Print empty map m
  fmt.Println("Empty map m: ", m)

  // Add values to m
  m["Alex"] = 92.5
  m["Amanda"] = 85.2

  // Print map m
  fmt.Println("m with 2 added key-value pairs: ", m)

  // Create map called gradebook with values that has key data type as string and value data type as double
  gradebook:= map[string]float32{"John" : 85.2, "Ana" : 95.6}

  // Output map gradebook
  fmt.Println("map gradebook: ", gradebook)

  // Access non-existing key gets zero value
  fmt.Println("grade of Bob who is not in map gradebook: ", gradebook["Bob"])

  // Store the value of the key "Ana"
  anaGrade := gradebook["Ana"]

  // Print the variable
  fmt.Println("Ana grade: ", anaGrade)

  // Add new key-value pairs into gradebook
  gradebook["Bob"] = 100
  gradebook["Elizabeth"] = 88.6

  // Output map gradebook with new values
  fmt.Println("map gradebook with 2 more values: ", gradebook)

  // Remove a key-value pair
  delete(gradebook, "Bob")

  // Output map
  fmt.Println("final map: ", gradebook)
}
```
