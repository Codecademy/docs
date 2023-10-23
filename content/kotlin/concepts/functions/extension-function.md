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

