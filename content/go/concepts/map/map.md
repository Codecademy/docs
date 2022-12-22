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

### Initializing a map with existing key-value pairs

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

THis will output:

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
