---
Title: 'map'
Description: 'Map is a built-in data structure used to store data of the same or different data type in key-value pairs.'
Subjects:
  - 'Computer Science'
Tags:
  - 'map'
  - 'Data Structures'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---
A map is a built-in data structure that is used to store a collection of unordered key-value pairs that can be the same or different data type. It is Go's implementation of a Hash Table, which allows for efficient access, insertion, and deletion.
## Syntax
An empty map can be created using the `create` function and assigning it to a variable.
```pseudo
[variable_name] := create(map[key_data_type]value_data_type)
```
```go
package main

import "fmt"

func main() {
 // Create a empty map called map
 emptyMap := make(map[string]int)

 // Output map
 fmt.Println(emptyMap)

}
```
This will print the following output:
```shell
map[]
```
A map can also be initialized with key-values pairs using a map literal
```pseudo
[variable_name] := map[key_data_type]value_data_type){key-1: value-1...}
```
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
This will print the following output:
```shell
map[Ana:95.6 John:85.2]
```
## Accessing Items
A value in the map can  be accessed using its corresponding key value. 
```pseudo
  [map_name][key_value]
```
It could also be stored in a variable
```pseudo
[variable_name] := [map_name][key_value]
```
```go
package main

import "fmt"

func main() {

 // Create map gradebook with key data type as string and value data type as float32
 gradebook:= map[string]float32{"John" : 85.2,"Ana" : 95.6}

 // Store the value corresponding to the key "John" in variable johnScore
 johnScore := gradebook["John"]

 // Print the variable johnScore
 fmt.Println(johnScore)

 // Print the value in gradebook with key "Ana"
 fmt.Println(gradebook["Ana"])

}
```
This will print the following output:
```shell
85.2
95.6
```
## Adding Items
Add new key-value pairs into the map by setting the new key value to a new value.
```pseudo
[map_name][new_key] = [new_value]
```
```go
package main

import "fmt"

func main() {
 // Create map with key data type as string and value data type as float32
 gradebook:= map[string]float32{"John" : 85.2, "Ana" : 95.6}

 // Print map gradebook
 fmt.Println(gradebook)

 // Add new key-value pairs into gradebook
 gradebook["Bob"] = 100
 gradebook["Elizabeth"] = 88.6

 // Output map gradebook with the new added values
 fmt.Println(gradebook)

}
```
This will print the following output:
```shell
map[Ana:95.6 John:85.2]
map[Ana:95.6 Bob:100 Elizabeth:88.6 John:85.2]
```
## Codebyte Example
```go
package main

import "fmt"

func main() {
  // Create empty map called m
  m := make(map[string]float32)
  
  // Print empty map m
  fmt.Println(m)
  
  // Add values to m
  m["Alex"] = 92.5
  m["Amanda"] = 85.2

  // Print map m
  fmt.Println(m)
  
  // Create map with values that has key data type as string and value data type as double
  gradebook:= map[string]float32{"John" : 85.2, "Ana" : 95.6}

  // Output map gradebook
  fmt.Println(gradebook)
  
  // Add new key-value pairs into gradebook
  gradebook["Bob"] = 100
  gradebook["Elizabeth"] = 88.6


 // Output map gradebook with new values
 fmt.Println(gradebook)

}
```
This will print the following output:
```shell
map[]
map[Alex:92.5 Amanda:85.2]
map[Ana:95.6 John:85.2]
map[Ana:95.6 Bob:100 Elizabeth:88.6 John:85.2]
```
