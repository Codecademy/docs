---
Title: 'Enums'
Description: 'Enums are a special data type that enable a variable to be a set of predefined constants.'
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

**Enums** are a special data type that enable a variable to be a set of predefined constants.

Kotlin enums are called enum classes and they aren't simply collections of constants, as in other languages, they also have properties, methods, etc. Each enum acts as a separate instance of the enum class, and the declaration begins with the keywords `enum class` followed by the class name.

Often compared to enums corresponding to `java`, kotlin enums do not require that one knows all possible values at compile time and their declaration does not create a class behind the scenes.

Beyond custom methods and properties limited to `java` enums, kotlin enums can use anonymous classes and implement interfaces.

## Syntax

```pseudo
enum class <enum_class_name> {
  constant1,
  constant2,
  constant3
}
```

Enums properties and methods –

Properties –

- `ordinal`: This property stores the ordinal value of the constant, which is usually a zero-based index.
- `name`: This property stores the name of the constant.

Methods –

- `values`: This method returns a list of all the constants defined within the enum class.
- `valueOf`: This method returns the enum constant that matches the input string passed. If the constant, is not present in the enum, then an `IllegalArgumentException` is thrown.

## Example

The following example demonstrates the use of the enum class properties in Kotlin:

```kotlin
enum class GASOLINE {
    DIESEL,
    PREMIUM,
    UNLEADED
}
fun main()
{
    // A simple demonstration of properties
    for (gasoline in GASOLINE.values()) {println("${gasoline.ordinal} = ${gasoline.name}")}}
```

This prints the following output:

```shell
0 = DIESEL
1 = PREMIUM
2 = UNLEADED
```

and the use of methods:

```kotlin
enum class GASOLINE {
    DIESEL,
    PREMIUM,
    UNLEADED
}
fun main()
{
    // A simple demonstration of methods
    for (gasoline in GASOLINE.values()) println("${GASOLINE.valueOf("UNLEADED")}")
}
```

the output:

```shell
UNLEADED
UNLEADED
UNLEADED
```
The use of when expression -

One of the interesting features of kotlin enums is the complete elimination of the need to use the else clause because of the restriction on the value that a type can take.

## Example

```kotlin
enum class TRADED_METALS{
    GOLD,
    SILVER,
    COPPER,
    IRON,
    TITANIUM,
    PLATINUM,
    LITHIUM;
}
   
fun main(){
    when(TRADED_METALS.IRON){
        TRADED_METALS.GOLD -> println("The symbol of Gold is Au")
        TRADED_METALS.SILVER -> println("The symbol of Silver is Ag")
        TRADED_METALS.COPPER -> println("The symbol of Copper is Cu")
        TRADED_METALS.IRON -> println("The symbol of Iron is Fe")
        TRADED_METALS.TITANIUM -> println("The symbol of Titanium is Ti")
        TRADED_METALS.PLATINUM -> println("The symbol of Platinum is Pt")
        TRADED_METALS.LITHIUM -> println("The symbol of Lithium is Li")
        // Adding an else clause will generate a warning
    }
}
```

the output:

```shell
The symbol of Iron is Fe
```

Use of constructors to add more properties -

## Example

```kotlin
enum class COLORS(val symbol: String) {
    RED(symbol: "war"),
    BLUE(symbol: "peace"),
    WHITE(ymbol: "neutrality")
}
fun main()
{
    printIn(COLORS.RED.symbol)
}
```
the output:

```shell
war
```

Implementing interface - 

## Example

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
    // calling static method in Enum
    println("Savings bank interest rate is : ${AccountTypes.SAVINGS_ACCOUNT.getInterestRate()}")
}
```

output is:

```shell
Savings bank interest rate is : 1.2
```

Enums as Anonymous Classes –

Enum constants behave as anonymous classes by implementing their own functions along with overriding the abstract functions of the class. The most important thing is that each enum constant must be overridden by using its own functions along with overriding the abstract functions of the class.

## Example

```kotlin
enum class Seasons(var weather: String) {
    Summer("hot"){
        // compile time error if not override the function foo()
        override fun foo() {              
            println("Hot days of a year")
        }
    },
    Winter("cold"){
        override fun foo() {
            println("Cold days of a year")
        }
    },
    Rainy("moderate"){
        override fun foo() {
            println("Rainy days of a year")
        }
    };
    abstract fun foo()
}
// main function
fun main(args: Array<String>) {
    // calling foo() function override be Summer constant
    Seasons.Summer.foo() 
}
```

The output is:

```shell
Hot days of a year
```
