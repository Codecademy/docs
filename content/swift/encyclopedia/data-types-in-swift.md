---
Title: "Data Types in Swift"
Subjects:
  - "iOS"
  - "Mobile Development"
Tags:
  - "Data Types"
  - "Booleans"
  - "Integers"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-swift"
  - "https://www.codecademy.com/learn/paths/build-ios-apps-with-swiftui"
---

All programming languages designate certain "types" of data. This helps the operating system and computer hardware allocate memory based on the type of data that is going to be stored. Swift, being a very type-safe language, takes great care to ensure that data types are understood, by both you and the compiler. 

In Swift, we generally store values in variables which can be thought of as a container to hold data. The data type determines how big that container is and where the computer is going to store it for accessing later.

## Basic Data Types

| Type        | Example          | Description           |
| ----------- | :--------------: | --------------------- |
| `Int`       | `5`, `-638`      | Integer whole number  |
| `Float`     | `3.14`, `-8.323` | Floating point number |
| `Double`    | `6.2831853071`   | Floating point number |
| `String`    | `Hello world!`   | Text                  |
| `Character` | `c`, `$`         | Single character      |
| `Bool`      | `true`, `false`  | Logical values        |

## Integer Data Types

Integers are whole numbers such as `35` and `-123`. As you can see from the example, they can be either signed or unsigned whole numbers, the default being signed. Integers can be declared in five different ways:

- `Int`: The standard reference used for whole numbers in Swift. It will create an integer with a size that is based on the platform it is operating on. On 32-bit systems it will create Int32, on 64-bit systems it will create an Int64.
- `Int8`: Creates an 8-bit signed integer (range of -128 to 127)
- `Int32`: Creates a 32-bit signed integer (range of -2,147,483,648 to 2,147,483,647)
- `Int64`: Creates a 64-bit signed integer (range of -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
- `UInt`: Unsigned (positivle values only) that is created in the same manner as a standard `Int`
- `UInt8`: Creates an 8-bit unsigned integer (range of 0 to 255)
- `UInt32`: Creates a 32-bit unsigned integer (range of 0 to 4,294,967,295)
- `UInt64`: Creates a 64-bit unsigned integer (range of 0 to 18,446,744,073,709,551,615)

```swift
let shinyNewInteger: Int = 500
let verySmallInteger: Int8 = 16
```

## Floating Point Numbers

A `Float` and a `Double` are number data types that allow for decimals. A `Float` is a 32-bit 'floating-point' number and a `Double` is a 64-bit floating-point number, that being said, a `Float` has approaximately half a much precision as a `Double`. If you need a high precision of accuracy, it is best to use a `Double`. In fact, when you declare a variable without specifying the type, Swift will type inference a `Double` as a precaution.

```swift
let accountBalance: Float = 857.45
let pi: Double = 3.14159265359
let gpa = 3.7 // inferred as a Double
```

## Strings and Characters

`String`s are a collection of `Character`s and `Character`s are the individual symbols that make up our languages. In Swift, the `String` type can be either mutable or immutable, as determined by the type of variable you store it in, either a `var` or a `let` for a constant. Both `String` and `Character` are typically declared inside a set of double quotation marks, while multi-line `String`s are declared with a set of triple quotations opening and closing the text.

<!--
Swift Markdown does not support multi-line strings in just generic Chrome, I'm not sure why. It looks fine in Author, so I'm not sure what formatting the SWE have used on the Codecademy site but hopefully it is also applied to the Codepedia site or else this won't work as intended. There are some languages that Markdown supports like this, we'll have to play with it when it begins to get published.
-->

```swift
let author: String = "Edgar Allen Poe"
let type: Character = "P"
let theRaven: String = """
Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore—
  While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.
“’Tis some visitor,” I muttered, “tapping at my chamber door—
        Only this and nothing more.”
"""
```

## Boolean Data Type

Boolean values, initialized using the `Bool` keyword, represent `true` and `false`. They are used in control flow and other conditional statements to process the logical decision points in your program leading them to be referred to as *logical* values. They can be declared directly or by using a logical test.

```swift
let fallingOnPavementHurts = true

var gameOver: Bool = homeScore > 5 || awayScore > 5
```
