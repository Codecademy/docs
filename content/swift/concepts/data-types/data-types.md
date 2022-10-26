---
Title: 'Data Types'
Description: 'Swift data types include Int, Float, Double, String, Character, and Bool. It is a type-safe language where variables hold values of a known data type.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Data Types'
  - 'Booleans'
  - 'Integers'
  - 'Strings'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

Swift, like all programming languages, designate certain [**data types**](https://www.codecademy.com/resources/docs/general/data-types) that help the operating system and computer hardware allocate memory based on what is going to be stored. These data types include numeric, textual, and logical values.

In a type-safe language like Swift, values are generally stored in [variables](https://www.codecademy.com/resources/docs/swift/variables), which are containers that hold data. The data type determines how big that variable container is and where the computer is going to store it for later access.

## Basic Data Types

| Type        |     Example      | Description           |
| ----------- | :--------------: | --------------------- |
| `Int`       |   `5`, `-638`    | Integer whole number  |
| `Float`     | `3.14`, `-8.323` | Floating point number |
| `Double`    |  `6.2831853071`  | Floating point number |
| `String`    |  `Hello world!`  | Text                  |
| `Character` |     `c`, `$`     | Single character      |
| `Bool`      | `true`, `false`  | Logical values        |

## Integer Data Types

Integers are whole numbers such as `35` and `-123`. As seen from the example column above, they can be either signed or unsigned whole numbers, the default being signed. Integers can be declared in five different ways:

| Type Reference | Description                                                      | Value Range                                                         |
| :------------: | ---------------------------------------------------------------- | ------------------------------------------------------------------- |
|     `Int`      | The standard reference used for whole numbers in Swift.          | Based on the platform (`Int32` on 32-bit, `Int64` on 64-bit, etc.). |
|     `Int8`     | Creates an 8-bit signed integer.                                 | -128 &endash; 127                                                   |
|    `Int32`     | Creates a 32-bit signed integer.                                 | -2,147,483,648 &endash; 2,147,483,647                               |
|    `Int64`     | Creates a 64-bit signed integer.                                 | -9,223,372,036,854,775,808 &endash; 9,223,372,036,854,775,807       |
|     `UInt`     | Unsigned that is created in the same manner as a standard `Int`. | Positive values only.                                               |
|    `UInt8`     | Creates an 8-bit unsigned integer.                               | 0 &endash; 255                                                      |
|    `UInt32`    | Creates a 32-bit unsigned integer.                               | 0 &endash; 4,294,967,295                                            |
|    `UInt64`    | Creates a 64-bit unsigned integer                                | 0 &endash; 18,446,744,073,709,551,615                               |

```swift
let shinyNewInteger: Int = 500
let verySmallInteger: Int8 = 16
```

## Floating Point Numbers

A `Float` and a `Double` are number data types that allow for decimals. A `Float` is a 32-bit 'floating-point' number and a `Double` is a 64-bit floating-point number, that being said, a `Float` has approximately half as much precision as a `Double`. If a high precision of accuracy is needed, it is best to use a `Double`. When a variable is declared without a specified type, Swift will type inference a `Double` as a precaution.

```swift
let accountBalance: Float = 857.45
let pi: Double = 3.14159265359
let gpa = 3.7 // inferred as a Double
```

## Strings and Characters

`String`s are a collection of `Character`s and `Character`s are the individual symbols that make up our languages. In Swift, the `String` type can be either mutable or immutable, as determined by the type of variable it's stored in, either a `var` or a `let` for a constant. Both `String` and `Character` are typically declared inside a set of double quotation marks, while multi-line `String`s are declared with a set of triple quotations opening and closing the text.

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

Boolean values, initialized using the `Bool` keyword, represent `true` and `false`. They are used in control flow and other conditional statements to process the logical decision points in the program leading them to be referred to as _logical_ values. They can be declared directly or by using a logical test.

```swift
let fallingOnPavementHurts = true

var gameOver: Bool = homeScore > 5 || awayScore > 5
```
