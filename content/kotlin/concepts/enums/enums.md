---
Title: 'Enums'
Description: 'A type of class with a predefined set of instances.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Enums'
  - 'Data Types'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

Kotlin **enums** are called enum classes and they aren't simply collections of constants, as in other languages, they also have properties, methods, etc. Each enum acts as a separate instance of the enum class, and the declaration begins with the keywords `enum class` followed by the class name.

Often compared to enums in Java, Kotlin enums do not require that one knows all possible values at compile time, and their declaration does not create a class behind the scenes.

Beyond custom methods and properties found in Java enums, Kotlin enums can use anonymous classes and implement interfaces.

## Syntax

```pseudo
enum class <enum_class_name> {
  constant1,
  constant2,
  constant3
}
```

## Enums Properties and Methods

Enum classes have features also found in standard classes that include the properties and synthetic methods detailed below.

Properties:

- `ordinal`: This property stores the ordinal value of the constant, which is usually a zero-based index.
- `name`: This property stores the name of the constant.

Methods:

- `values`: This method returns a list of all the constants defined within the enum class.
- `valueOf`: This method returns the enum constant that matches the input string passed. If the constant is not present in the enum, then an `IllegalArgumentException` is thrown.

The following example demonstrates the use of the enum class properties in Kotlin:

```kotlin
enum class Gasoline {
    DIESEL,
    PREMIUM,
    UNLEADED
}
fun main()
{
    // A simple demonstration of properties
    for (gasoline in Gasoline.values()) {println("${gasoline.ordinal} = ${gasoline.name}")}}
```

This prints the following output:

```shell
0 = DIESEL
1 = PREMIUM
2 = UNLEADED
```

The following code demonstrates the basic use of an enum method:

```kotlin
enum class Gasoline {
    DIESEL,
    PREMIUM,
    UNLEADED
}
fun main()
{
    // A simple demonstration of methods
    for (gasoline in Gasoline.values()) println("${Gasoline.valueOf("UNLEADED")}")
}
```

This results in the following output:

```shell
UNLEADED
UNLEADED
UNLEADED
```

## The Use of Constructors to Add Properties

These enums can also use constructors to add properties, the following code demonstrates a basic implementation.

```kotlin
enum class Colors(val symbol: String) {
    RED("war"),
    BLUE("peace"),
    WHITE("neutrality")
}
fun main()
{
    println(Colors.RED.symbol)
}
```

The example above returns:

```shell
war
```

## Using the `when` Expression

One of the interesting features of Kotlin enums is the complete elimination of the need to use the `else` clause because of the restriction on the value that a type can take.

The following example demonstrates the use of `when` with an enum class:

```kotlin
enum class TradedMetals{
    GOLD,
    SILVER,
    COPPER,
    IRON,
    TITANIUM,
    PLATINUM,
    LITHIUM;
}

fun main(){
    when(TradedMetals.IRON){
        TradedMetals.GOLD -> println("The symbol of Gold is Au")
        TradedMetals.SILVER -> println("The symbol of Silver is Ag")
        TradedMetals.COPPER -> println("The symbol of Copper is Cu")
        TradedMetals.IRON -> println("The symbol of Iron is Fe")
        TradedMetals.TITANIUM -> println("The symbol of Titanium is Ti")
        TradedMetals.PLATINUM -> println("The symbol of Platinum is Pt")
        TradedMetals.LITHIUM -> println("The symbol of Lithium is Li")
        // Adding an else clause will generate a warning
    }
}
```

This will return the following output:

```shell
The symbol of Iron is Fe
```

## Implementing an Interface

Another feature of enum classes is the capacity to implement an interface, the following example demonstrates how:

```kotlin
interface IAccountInterestRates {
    fun getInterestRate() : Double
}

enum class AccountTypes(val minBalance: Int) : IAccountInterestRates {
    SAVINGS_ACCOUNT(0) {
        override fun getInterestRate(): Double {
            return(1.2)
        }
    },
    CHECKING_ACCOUNT(100) {
        override fun getInterestRate(): Double {
            return(0.5)
        }
    },
    WALLET(100) {
        override fun getInterestRate(): Double {
            return(0.0)
        }
    }
}

fun main() {
    // Calling a static method within the enum
    println("Savings bank interest rate is : ${AccountTypes.SAVINGS_ACCOUNT.getInterestRate()}")
}
```

The output is:

```shell
Savings bank interest rate is : 1.2
```

## Enums as Anonymous Classes

Enum constants behave as anonymous classes by implementing their own functions along with overriding the abstract functions of the class. The most important thing is that each enum constant must be overridden by using its own functions along with overriding the abstract functions of the class.

The example below demonstrates how enum constants can be declared through an anonymous class:

```kotlin
enum class Seasons(var weather: String) {
    SUMMER("hot"){
        // There would be a compile time error if the function is not overridden
        override fun foo() {
            println("Hottest days of the year")
        }
    },
    WINTER("cold"){
        override fun foo() {
            println("Coldest days of the year")
        }
    },
    RAINY("moderate"){
        override fun foo() {
            println("Rainiest days of the year")
        }
    };
    abstract fun foo()
}
// main function
fun main(args: Array<String>) {
    // calling foo() function override be Summer constant
    Seasons.SUMMER.foo()
}
```

The output is:

```shell
Hottest days of the year
```
