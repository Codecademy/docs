---
Title: 'Working with JSON'
Description: 'Working with JSON files, requests, or responses is essential to interacting with data that is exchanged between the Frontend and Backend in web applications.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'JSON'
  - 'Marshal'
  - 'Unmarshal'
  - 'Encode'
  - 'Decode'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

**JSON** is one of the most commonly used data exchange formats for communication between web applications, other services, mobile applications, etc.

Go provides built-in functions to work with JSON effectively. Below are some of the most commonly used functions:

| Feature      | `json.Marshal`                                                                  | `json.NewDecoder`                                  |
| ------------ | ----------------------------------------------------------------------------- | ------------------------------------------------ |
| Input        | Go value (`struct`, `map`, etc.)                                                  | `io.ReadCloser` (network connection)               |
| Output       | JSON byte slice                                                               | Go value (struct, map, etc.)                     |
| Memory Usage | Can potentially use more memory if the input data is large                    | Generally more memory-efficient for large inputs |
| Use Cases    | Converting Go data to JSON for various purposes, suitable for small data sets | Decoding JSON data from streams or large files   |

## Marshal and Unmarshal


In Go, `json.Marshal` encodes a Go data structure into a JSON-formatted string. This encoded data can then be saved to a file, transmitted, or used in other applications. 

Conversely, `json.Unmarshal` decodes JSON data into a Go data structure. This allows for operations such as adding new elements, extracting specific values (e.g., configurations), or modifying existing ones, as demonstrated in the example below:

```go
package main

import (
    "encoding/json"
    "fmt"
    "os"
    "strings"
)

// We need to define a struct that mirrors the structure of the JSON data we want to unmarshal.
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

    // We need a variable to store the data decoded from the unmarshaling process.
    meals := Meals{}

    // To unmarshal the data, we need to provide:
    // 1. Data in the format of a slice of bits.
    // 2. A pointer to the location where the data will be stored.
    if err := json.Unmarshal([]byte(menu), &meals); err != nil {
        // Handle the errors in case they occur.
        fmt.Println(err)
    }

    // In case we need to add a new object to the
    meal := Meal{
        Name:        "Pupusas",
        Ingredients: []string{"Cheese", "Refried beans", "Tomato Sauce", "Rice flour", "Pickled cabbage"},
    }

    // Add new meal for the menu
    meals.Meals = append(meals.Meals, meal)

    // Add new meal in line for the menu
    meals.Meals = append(meals.Meals, Meal{Name: "Sushi", Ingredients: []string{"Rice", "Fish", "Seaweed", "Wasabi", "Soy Sauce", "Ginger"}})

    // List the menu of meals
    for _, meal := range meals.Meals {
        fmt.Printf("---\nMeal: %s\ningredients: %s \n", meal.Name, strings.Join(meal.Ingredients, ", "))
    }

    // Serialize the object to a slice of bytes
    data, err := json.Marshal(meals)
    if err != nil {
        fmt.Println(err)
    }
    fmt.Println("-------------")
    fmt.Println(string(data))

    // Crate an empty file
    file, err := os.Create("meals.json")
    if err != nil {
        fmt.Println("Error opening file:", err)
        return
    }

    defer file.Close()

    // Write data into the file previously created
    if _, err = file.Write(data); err != nil {
        fmt.Println(err)
        return
    }

}
```

## NewEncoder and NewDecoder

In Go `json.NewDecoder` is used to format data received from a REST API. Other function that is commonly used is `json.NewEncoder` to exchange data between backend side and external clients that require a JSON response.

In the following example, we will demonstrate the usage of both functions. We will make a call to an external REST API and enhance the result by adding products made from the fruit specified in the query parameter. For example: `http://localhost:4444/fruit?name=Strawberry`

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
    mux.HandleFunc("POST /fruit", func(w http.ResponseWriter, r *http.Request) {

        // Get query params from URL
        params := r.URL.Query()

        // We are going to validate the name of the fruit
        if fruitName := params.Get("name"); len(fruitName) > 0 {

            // Set the specific content type for the response
            w.Header().Set("Content-Type", "application/json")

            // Get the results of the invocation to the REST API.
            result, err := GetFruitData(fruitName)

            // We need to handle any errors that occur during the decoding process.
            if err != nil {
                http.Error(w, "Error fruit data not found", http.StatusNotFound)
                return
            }

            // We need a variable to store the results from the decoding process.
            fruit := Fruit{}

            // To Decode the data, we need to provide:
            // 1. Data in the format of io.ReadCloser.
            // 2. A pointer to the location where the data will be stored.
            err = json.NewDecoder(result).Decode(&fruit)

            // We need to handle any errors that occur during the decoding process.
            if err != nil {
                http.Error(w, "Error on decoding data", http.StatusInternalServerError)
                return
            }

            // We need a map of products, keyed by fruit, to enhance the results of the external REST API.
            productsByFruit := ProductsByFruit{
                "strawberry": {"Smoothies", "Ice cream", "Jelly"},
                "banana":     {"Banana split", "Smoothies"},
                "tomato":     {"Salads", "Sauces"},
                "raspberry":  {"Pies", "Smoothies"},
                "orange":     {"Juice", "Jelly"},
                "blueberry":  {"Smoothies", "Pies"},
                "pumpkin":    {"Pies", "Late"},
            }

            // Set the products by fruit
            fruit.Products = productsByFruit[strings.ToLower(fruitName)]

            // Other way to handle any errors.
            if err := json.NewEncoder(w).Encode(fruit); err != nil {
                http.Error(w, "Error on encoding data", http.StatusInternalServerError)
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
    // Retrieve data form external REST API.
    response, err := http.Get(fmt.Sprintf("https://www.fruityvice.com/api/fruit/%s", name))

    // Handle errors
    switch response.StatusCode {
    case http.StatusOK:
        return response.Body, err
    case http.StatusNotFound:
        return nil, errors.New("is the fruit name you entered correct")
    default:
        return nil, fmt.Errorf("errors on the server with status: %d", response.StatusCode)
    }
}
```
