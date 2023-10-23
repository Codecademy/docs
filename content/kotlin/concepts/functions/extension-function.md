## Extension Functions 

- Kotlin provides the opportunity to add more functionality to existing classes, by leveraging available methods without having to inherit the class. These declarations that use existing methods in new or custom classes are called extension functions. 

- Below example demonstrates the use of this concept : 

```

// Define an extension function for the Int class
fun Int.square(): Int {
    return this * this
}

fun main() {
    val number = 5
    
    // Calling the extension function to calculate the square of the number
    val square = number.square()
    
    println("The square of $number is $square")
}

Output : The square of 5 is 25
```

### Use of extension functions in a real-world project

- When we fetch a data class from JSON, we can make a DTO (Data access object) class which a data class. It will consist of an extension
  function that will convert that large data into specific data that we need to display on our app.

- MealDTO.kt
  
  ```
  data class MealDTO(
    val dateModified: Any,
    val idMeal: String,
    val strArea: String,
    val strCategory: String,
    val strCreativeCommonsConfirmed: Any,
    val strDrinkAlternate: Any,
    val strImageSource: Any,
    val strIngredient1: String,
    val strIngredient10: String,
    val strIngredient11: String,
    val strIngredient12: String,
    val strIngredient13: String,
    val strIngredient14: String,
    val strIngredient15: String,
    val strIngredient16: String,
    val strIngredient17: String,
    val strIngredient18: String,
  )

  // This is an extension function 
  fun MealDTO.toMeal(): Meal {
    return Meal(
        idMeal = idMeal,
        strMeal = strMeal,
        strMealThumb = strMealThumb,
        strInstructions = strInstructions
    )
}

- We can further use this extension function to convert the meal Items in our ViewModel to the Meal Object.

```
operator fun invoke(): Flow<Resource<List<Meal>>> = flow {
        try {
            emit(Resource.Loading())
            val meals = repository.getMeals(mealId!!).map { it.toMeal() }
            emit(Resource.Success(meals))
        } catch (e: Exception) {
            emit(Resource.Error(e.localizedMessage ?: "Unexpected Error Occurred"))
        } catch (e: IOException) {
            emit(Resource.Error("Couldn't reach Server"))
        }
    }
  ```

- You can see its usage, in this project of [Meal App](https://github.com/utkarsh006/MealItems)
