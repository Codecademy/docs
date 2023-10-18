## Extension Function 

- These functions provide ease to add more functionality to the existing classes, without inheriting them. This is called an Extension Function. 

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

```

- Output : The square of 5 is 25
