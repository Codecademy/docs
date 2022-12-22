---
Title: 'map'
Description: 'Map is a built-in data structure used to store data of the same or different data type in unordered key-value pairs.'
Subjects:
  - 'Computer Science'
Tags:
  - 'map'
  - 'Data Structures'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

## What is a map?

A **map** is a built-in data structure that is used to store a collection of unordered key-value pairs that can be the same or different data type. It is Go's implementation of a hash table, which allows for efficient access, insertion, and deletion.

## Syntax

### Initializing an empty map

An empty map can be created using the `create()` function and assigning it to a variable.

```pseudo
variable_name := create(map[key_data_type]value_data_type)
```

### Initializing a map with existing key-value pairs.

A map can also be initialized with key-values pairs by using a map literal.

```pseudo
map_name := map[key_data_type]value_data_type{key-1: value-1...}
```
 
### Accessing Items

A value in the map can be accessed using its corresponding key value by putting the key in brackets.

```pseudo
map_name[key_value]
```

The value that results from the code above can also be stored in a variable for later use.

```pseudo
variable_name := map_name[key_value]
```

If the key does not exist, then a null value will be returned based on the data type of the values in the map.
 
### Adding Items

Add new key-value pairs into the map by setting the new key value to a new value.

```pseudo
map_name[new_key] = [new_value]
```

## Examples

### Create empty map

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

Output:

```shell
map[]
```

### Initialize a map with key-value pairs

The following code demonstrates how to initialize and print a map already containing key-value-pairs.  

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
map[Ana:95.6 John:85.2]
```

### Access a key-value pair in the map

The following code will print the corresponding value for the key `"John"`.

```go
package main

import "fmt"

func main() {
    
   // Initialize map gradebook with values
   gradebook := map[string]float32{"John": 85.2, "Ana": 95.6}
    
   // Print the value with key "John"
   fmt.Println(gradebook["John"])
} 


```

This will output:

```shell
85.2
```

### Store a value corresponding to a key of the map into a variable

The following code will access the value in a map corresponding to the key of "Ana". It will store the result in a variable called `anaScore` and print it.

```go
package main

import "fmt"

func main() {
    
   // Initialize map gradebook with values
   gradebook := map[string]float32{"John": 85.2, "Ana": 95.6}
    
   // Store the value that has a key of "Ana" in anaScore
   anaScore := gradebook["Ana"]
   
   fmt.Println(anaScore)
} 
```

```shell
95.6
```

### Accessing a key that does not exist

The following code demonstrates what is returned for a non-existent key. The map maps a string to a float.

```go
package main

import "fmt"

func main() {
    
   // Initialize map gradebook with values
   gradebook := map[string]float32{"John": 85.2, "Ana": 95.6}
    
   // Store the value that has a key of "John" in johnScore
   johnScore := gradebook["David"]
   
   // Since "David" does not exist in the map, 0 will be printed
   fmt.Println(johnScore)
}

```
Output:

```shell
0
```

### Adding a new key-value pair into a map
The following code will first print an initialized map. It will then add two more key-value pairs into the map and print the map.

```go
package main

import "fmt"

func main() {
    
   // Initialize map gradebook with values
   gradebook := map[string]float32{"John": 85.2, "Ana": 95.6}
    
   // Print the initialized map
   fmt.Println(gradebook)
   
   // Add more key-value pairs
   gradebook["George"] = 76.4
   gradebook["Emma"] = 90
   
   // Print the map again
    fmt.Println(gradebook)
}
```

This will output:

```shell
map[Ana:95.6 John:85.2]
map[Ana:95.6 Emma:90 George:76.4 John:85.2]
```

### Codebyte Example

The following code will summarize all the initializations and operations for a map in Go that has been shown in this document.

```go
package main

import "fmt"

func main() {
  // Create empty map called m
  m := make(map[string]float32)
  
  // Print empty map m
  fmt.Println("Empty map m: ",m)
  
  // Add values to m
  m["Alex"] = 92.5
  m["Amanda"] = 85.2

  // Print map m
  fmt.Println("m with 2 added key-value pairs: ",m)
  
  // Create map called gradebook with values that has key data type as string and value data type as double
  gradebook:= map[string]float32{"John" : 85.2, "Ana" : 95.6}

  // Output map gradebook
  fmt.Println("map gradebook: ", gradebook)
  
  // Access non-existing key gets zero value
  fmt.Println("grade of Bob who is not in map gradebook: ", gradebook["Bob"])
  
  // Store the value of the key "Ana" into variable
  anaGrade := gradebook["Ana"]
  
  // Print the variable
   fmt.Println("Ana grade: ", anaGrade)
  
  // Add new key-value pairs into gradebook
  gradebook["Bob"] = 100
  gradebook["Elizabeth"] = 88.6


 // Output map gradebook with new values
 fmt.Println("map gradebook with 2 more values: ", gradebook)

}
```

This will output: 

```shell
Empty map m:  map[]
m with 2 added key-value pairs:  map[Alex:92.5 Amanda:85.2]
map gradebook:  map[Ana:95.6 John:85.2]
grade of Bob who does not exist within map gradebook:  0
Ana grade:  95.6
map gradebook with 2 more values: map[Ana:95.6 Bob:100 Elizabeth:88.6 John:85.2]
```
