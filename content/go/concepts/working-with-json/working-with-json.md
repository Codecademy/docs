---
Title: 'Working with JSON'
Description: 'Working with JSON files, requests, or responses is essential to interacting with data that is exchanged between the Frontend and Backend in web applications.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'JSON'
  - 'Data'
  - 'Development'
  - 'Objects'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

**JSON** is one of the most commonly used data exchange formats for communication between web applications, other services, mobile applications, etc. Go provides built-in functions to work with JSON effectively.

## Using Marshal and Unmarshal

In Go, `json.Marshal` encodes a Go data structure into a JSON-formatted string. This encoded data can then be saved to a file, transmitted, or used in other applications.

The syntax of `json.Marshal` looks like this:

```pseudo
data, err := json.Marshal(v)
```

- `v`: The Go value to be marshaled (e.g., `struct`, `map`).
- `data`: The result of the marshaling, returned as a byte slice (`[]byte`).
- `err`: An error, if any, that occurred during marshaling.

Conversely, `json.Unmarshal` decodes JSON data into a Go data structure. The syntax for `json.Unmarshal` looks like this:

```pseudo
err := json.Unmarshal(data, &v)
```

- `data`: The JSON byte slice to be unmarshaled.
- `v`: The Go value (typically a pointer to a `struct` or `map`) where the unmarshaled data will be stored.
- `err`: An error, if any, that occurred during unmarshaling.

This allows for operations such as adding new elements, extracting specific values (e.g., configurations), or modifying existing ones, as demonstrated in the example below:

```go
package main

import (
  "encoding/json"
  "fmt"
  "os"
  "strings"
)

// Define a struct that mirrors the structure of the JSON data we want to unmarshal.
type Meal struct {
  Name        string   `json:"name"`
  Ingredients []string `json:"ingredients"`
}

type Meals struct {
  Meals []Meal `json:"meals"`
}

func main() {
  menu := `{
    "meals": [
      {"name": "Pizza Margherita", "ingredients": ["Dough", "Tomato Sauce", "Mozzarella Cheese", "Tomato", "Basil"]},
      {"name": "Spaghetti Carbonara", "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Pecorino Romano Cheese", "Black Pepper"]},
      {"name": "Chicken Stir-fry", "ingredients": ["Chicken", "Vegetables (e.g., Broccoli, Carrots, Onions, Peppers)", "Rice", "Soy Sauce", "Ginger", "Garlic"]},
      {"name": "Tacos al Pastor", "ingredients": ["Pork", "Pineapple", "Tortillas", "Onion", "Cilantro"]},
      {"name": "Caesar Salad", "ingredients": ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing"]}
    ]
  }`

  // Declare a variable to store the decoded data.
  meals := Meals{}

  // Unmarshal the JSON string into the `meals` struct.
  if err := json.Unmarshal([]byte(menu), &meals); err != nil {
    fmt.Println("Error unmarshalling data:", err)
    return
  }

  // Add a new meal to the menu.
  meal := Meal{
    Name:        "Pupusas",
    Ingredients: []string{"Cheese", "Refried beans", "Tomato Sauce", "Rice flour", "Pickled cabbage"},
  }

  // Add the new meal to the list.
  meals.Meals = append(meals.Meals, meal)

  // Add another meal inline.
  meals.Meals = append(meals.Meals, Meal{Name: "Sushi", Ingredients: []string{"Rice", "Fish", "Seaweed", "Wasabi", "Soy Sauce", "Ginger"}})

  // List the menu of meals.
  for _, meal := range meals.Meals {
    fmt.Printf("---\nMeal: %s\nIngredients: %s\n", meal.Name, strings.Join(meal.Ingredients, ", "))
  }

  // Serialize the object to a slice of bytes.
  data, err := json.Marshal(meals)
  if err != nil {
    fmt.Println("Error marshalling data:", err)
    return
  }

  fmt.Println("-------------")
  fmt.Println(string(data))

  // Create an empty file.
  file, err := os.Create("meals.json")
  if err != nil {
    fmt.Println("Error creating file:", err)
    return
  }

  // Ensure the file is closed after the program finishes.
  defer file.Close()

  // Write the serialized data into the file.
  if _, err = file.Write(data); err != nil {
    fmt.Println("Error writing to file:", err)
    return
  }

  fmt.Println("Data has been written to meals.json successfully.")
}
```

When running the above Go program, the following will happen:

- The menu of meals will be printed to the console.
- The serialized JSON data will be printed to the console.
- A `meals.json` file will be created in the working directory with the serialized data.

Here's how the console output will look like:

```shell
---
Meal: Pizza Margherita
Ingredients: Dough, Tomato Sauce, Mozzarella Cheese, Tomato, Basil
---
Meal: Spaghetti Carbonara
Ingredients: Spaghetti, Eggs, Pancetta, Pecorino Romano Cheese, Black Pepper
---
Meal: Chicken Stir-fry
Ingredients: Chicken, Vegetables (e.g., Broccoli, Carrots, Onions, Peppers), Rice, Soy Sauce, Ginger, Garlic
---
Meal: Tacos al Pastor
Ingredients: Pork, Pineapple, Tortillas, Onion, Cilantro
---
Meal: Caesar Salad
Ingredients: Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing
---
Meal: Pupusas
Ingredients: Cheese, Refried beans, Tomato Sauce, Rice flour, Pickled cabbage
---
Meal: Sushi
Ingredients: Rice, Fish, Seaweed, Wasabi, Soy Sauce, Ginger
-------------
{"meals":[{"name":"Pizza Margherita","ingredients":["Dough","Tomato Sauce","Mozzarella Cheese","Tomato","Basil"]},{"name":"Spaghetti Carbonara","ingredients":["Spaghetti","Eggs","Pancetta","Pecorino Romano Cheese","Black Pepper"]},{"name":"Chicken Stir-fry","ingredients":["Chicken","Vegetables (e.g., Broccoli, Carrots, Onions, Peppers)","Rice","Soy Sauce","Ginger","Garlic"]},{"name":"Tacos al Pastor","ingredients":["Pork","Pineapple","Tortillas","Onion","Cilantro"]},{"name":"Caesar Salad","ingredients":["Romaine Lettuce","Croutons","Parmesan Cheese","Caesar Dressing"]},{"name":"Pupusas","ingredients":["Cheese","Refried beans","Tomato Sauce","Rice flour","Pickled cabbage"]},{"name":"Sushi","ingredients":["Rice","Fish","Seaweed","Wasabi","Soy Sauce","Ginger"]}]
}
Data has been written to meals.json successfully.
```

## Using NewEncoder and NewDecoder

In Go, `json.NewEncoder` is commonly used to encode data into a JSON format, making it suitable for exchanging information between the backend and external clients that require a JSON response.

The syntax for `json.NewEncoder` looks like this:

```pseudo
encoder := json.NewEncoder(w)
err := encoder.Encode(v)
```

- `w`: The `io.Writer` (e.g., `http.ResponseWriter`, file, etc.) where the JSON output will be written.
- `v`: The Go value (typically a `struct`, `map`, etc.) to be encoded into JSON.
- `encoder`: A new `json.Encoder` instance that is used to encode the Go value.
- `err`: An error, if any, that occurred during encoding.

On the other hand, `json.NewDecoder` is used to decode data received from a REST API, transforming it into a usable Go data structure.

The syntax for `json.NewDecoder` looks like this:

```pseudo
decoder := json.NewDecoder(r)
err := decoder.Decode(v)
```

- `r`: The `io.Reader` (e.g., `http.Request.Body`, file) containing the JSON data to be decoded.
- `v`: A pointer to the Go value (typically a `struct`, `map`, etc.) where the decoded data will be stored.
- `decoder`: A new `json.Decoder` instance that is used to decode the JSON data.
- `err`: An error, if any, that occurred during decoding.

## Example

The following example:

- Listens for POST requests at the /fruit endpoint on http://localhost:4444/fruit, accepting a name query parameter.
- Fetches and decodes fruit data from an external API based on the provided fruit name, then adds product recommendations.
- Returns the modified fruit data as a JSON response or an error message if the input is invalid.

```go
package main

import (
  "encoding/json"
  "errors"
  "fmt"
  "io"
  "log"
  "net/http"
  "strings"
)

type ProductsByFruit map[string][]string

type Fruit struct {
  Name     string   `json:"name"`
  ID       int      `json:"id"`
  Family   string   `json:"family"`
  Order    string   `json:"order"`
  Genus    string   `json:"genus"`
  Products []string `json:"products"`
}

func main() {
  mux := http.NewServeMux()
  mux.HandleFunc("/fruit", func(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodPost {
      http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
      return
    }

    // Get query params from URL
    params := r.URL.Query()

    // Validate the name of the fruit
    if fruitName := params.Get("name"); len(fruitName) > 0 {

      // Set the content type for the response
      w.Header().Set("Content-Type", "application/json")

      // Get the results of the invocation to the REST API
      result, err := GetFruitData(fruitName)
      if err != nil {
        http.Error(w, fmt.Sprintf("Failed to get fruit data: %v", err), http.StatusInternalServerError)
        return
      }

      // Decode the response into the fruit struct
      fruit := Fruit{}
      err = json.NewDecoder(result).Decode(&fruit)
      if err != nil {
        http.Error(w, "Error decoding data", http.StatusInternalServerError)
        return
      }

      // Enhance the fruit data with products
      productsByFruit := ProductsByFruit{
        "strawberry": {"Smoothies", "Ice cream", "Jelly"},
        "banana":     {"Banana split", "Smoothies"},
        "tomato":     {"Salads", "Sauces"},
        "raspberry":  {"Pies", "Smoothies"},
        "orange":     {"Juice", "Jelly"},
        "blueberry":  {"Smoothies", "Pies"},
        "pumpkin":    {"Pies", "Latte"},
      }

      fruit.Products = productsByFruit[strings.ToLower(fruitName)]
      if fruit.Products == nil {
        fruit.Products = []string{"No specific products available"}
      }

      // Encode the modified fruit struct to the response
      if err := json.NewEncoder(w).Encode(fruit); err != nil {
        http.Error(w, "Error encoding data", http.StatusInternalServerError)
        return
      }

    } else {
      http.Error(w, "Bad request, query param ?name= required", http.StatusBadRequest)
      return
    }
  })

  if err := http.ListenAndServe(":4444", mux); err != nil {
    log.Fatal("Error occurred while starting the server: ", err)
  }
}

func GetFruitData(name string) (io.ReadCloser, error) {
  // Retrieve data from external REST API
  response, err := http.Get(fmt.Sprintf("https://www.fruityvice.com/api/fruit/%s", name))
  if err != nil {
    return nil, fmt.Errorf("failed to make request: %v", err)
  }
  if response == nil {
    return nil, errors.New("no response from the server")
  }

  // Handle different HTTP status codes
  switch response.StatusCode {
  case http.StatusOK:
    return response.Body, nil
  case http.StatusNotFound:
    return nil, errors.New("fruit not found")
  default:
    return nil, fmt.Errorf("server error with status: %d", response.StatusCode)
  }
}
```

To run the code, save it in a `.go` file and execute it using the command:

```shell
go run <filename>.go
```

Ensure that the Go server is running, then send a POST request with a name query parameter to `http://localhost:4444/fruit`.

## Comparison between `json.Marshal` and `json.NewDecoder`

Below is a comparison between `json.Marshal` and `json.NewDecoder` based on their use cases and performance considerations:

| Feature      | `json.Marshal`                                                                | `json.NewDecoder`                                |
| ------------ | ----------------------------------------------------------------------------- | ------------------------------------------------ |
| Input        | Go value (`struct`, `map`, etc.)                                              | `io.ReadCloser` (network connection)             |
| Output       | JSON byte slice                                                               | Go value (struct, map, etc.)                     |
| Memory Usage | Can potentially use more memory if the input data is large                    | Generally more memory-efficient for large inputs |
| Use Cases    | Converting Go data to JSON for various purposes, suitable for small data sets | Decoding JSON data from streams or large files   |
