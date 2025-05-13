---
Title: 'Map'
Description: 'A map is a built-in data structure used to store unordered key-value pairs.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Data Types'
  - 'Elements'
  - 'Map'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

In Go, a **`map`** is a built-in data structure that is used to store a collection of unordered key-value pairs. The pairs can be of the same [data type](https://www.codecademy.com/resources/docs/go/data-types) or mixed types. It is Go's implementation of a hash table, which allows for efficient access, insertion, and deletion.

## Creating a Map

An empty map can be created using the `make()` [function](https://www.codecademy.com/resources/docs/go/functions):

```pseudo
variable_name := make(map[key_data_type]value_data_type)
```

An empty map can also be created using a map literal:

```pseudo
variable_name := map[key_data_type]value_data_type{}
```

A map literal can also be used for initializing a map:

```pseudo
map_name := map[key_data_type]value_data_type{
  key-1: value-1,
  key-2: value-2,
  key-N: value-N,
}
```

### Example

This example shows how to create a map using these methods:

```go
package main
import "fmt"

func main() {
  // Create a map using make()
  gradebook1 := make(map[string]float32)

  // Create a map using a map literal
  gradebook2 := map[string]float32{}

  // Initialize a map using a map literal
  gradebook3 := map[string]float32{"John": 85.2, "Ana": 95.6}

  // Print the maps
  fmt.Println(gradebook1)
  fmt.Println(gradebook2)
  fmt.Println(gradebook3)
}
```

This will return the following output:

```shell
map[]
map[]
map[Ana:95.6 John:85.2]
```

> **Note:** All pairs should terminate with a comma, including the final pair, unless the assignment is all made on one line.

## Accessing Items in a Map

A value in a map can be accessed by putting its corresponding key in brackets after the map name:

```pseudo
map_name[key_value]
```

If the key does not exist, the zero value will be returned based on the data type of the values in the map (e.g. `int`: `0`, `bool`: `false`).

### Example

Here is an example that prints the corresponding value for the key `"John"`:

```go
package main
import "fmt"

func main() {
  // Initialize a map
  gradebook := map[string]float32{"John": 85.2, "Ana": 95.6}

  // Print the value for the key "John"
  fmt.Println(gradebook["John"])
}
```

This will return the following output:

```shell
85.2
```

## Adding Items to a Map

New key-value pairs can be added to a map by setting a new key to a new value:

```pseudo
map_name[new_key] = [new_value]
```

### Example

This example adds two new key-value pairs to a map:

```go
package main
import "fmt"

func main() {
  // Initialize a map
  gradebook := map[string]float32{"John": 85.2, "Ana": 95.6}

  // Add two new key-value pairs to the map
  gradebook["George"] = 76.4
  gradebook["Emma"] = 90

  // Print the map
  fmt.Println(gradebook)
}
```

This will output:

```shell
map[Ana:95.6 Emma:90 George:76.4 John:85.2]
```

## Removing Items from a Map

Key-value pairs can be removed from a map with the built-in `delete()` function:

```pseudo
delete(map_name, existing_key)
```

### Example

This example removes a key-value pair from a map:

```go
package main
import "fmt"

func main() {
  // Initialize a map
  gradebook := map[string]float32{"John": 85.2, "Ana": 95.6}

  // Delete an item from the map
  delete(gradebook, "John")

  // Print the map
  fmt.Println(gradebook)
}
```

This will output:

```shell
map[Ana:95.6]
```

## Iterating Over a Map

This example uses the `for...range` [loop](https://www.codecademy.com/resources/docs/go/loops) to iterate over a map:

```go
package main
import "fmt"

func main() {
  // Initialize a map
  gradebook := map[string]float32{"John": 85.2, "Ana": 95.6}

  /// Iterate over the map and print its items
  for key, value := range gradebook {
    fmt.Printf("(%s, %.1f)\n", key, value)
  }
}
```

This will output:

```shell
(John, 85.2)
(Ana, 95.6)
```

## Frequently Asked Questions

### 1. Can a map key be any type in Go?

No. In Go, map keys must be comparable types, such as [strings](https://www.codecademy.com/resources/docs/go/strings), integers, or [structs](https://www.codecademy.com/resources/docs/go/structs) that do not contain [slices](https://www.codecademy.com/resources/docs/go/slices), maps, or functions.

### 2. Are Go maps ordered?

No. Maps in Go are unordered, and their iteration order is not guaranteed to be the same every time.

### 3. Are maps thread-safe in Go?

No. Maps are not safe for concurrent use. Use `sync.Map` or synchronization techniques if needed.
