---
Title: 'Advanced Operators'
Description: 'Advanced operators in Swift provide the programmer with increased functionality and complex value manipulation. They include compound assignments, bitwise, and custom operators, to name a few.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Operators'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Advanced operators** in Swift provide the programmer with increased functionality and complex value manipulation. They build upon the [basic operators](https://www.codecademy.com/resources/docs/swift/operators/basic-operators) and include compound assignments, bitwise, and custom operators.

## Compound Assignment Operator

Compound assignment operators combine the assignment operator `=` with another separate operation. The following operations are allowed:

- Addition, `+`
- Subtraction, `-`
- Division, `/`
- Multiplication, `*`
- Modulo, `%`

For example:

```swift
var a = 1
a +=  9 // a = 10
a *= 4 // a = 40
a -= 7 // a = 33
a /= 3 // a = 11
a %= 5 // a = 1
```

## Bitwise Operators

[Bitwise operators](https://www.codecademy.com/resources/docs/general/bitwise-operator) are used to manipulate the raw data bits of a structure such as graphics, file inputs, or device drivers. While not common, these operators are very useful in their specific use cases. Swift also allows overloading of the standard operators to include a custom definition of the function.

### NOT Operator

Bitwise NOT `~` operator inverts all the bits in a number, so `0101 0101` will become `1010 1010`. It is very important to note that using the `~` operator on a signed integer, a standard integer, inverts a positive integer, n, into -(n+1) and not the inverse binary.

```swift
var newBinaryNumber: UInt8 = 0b01010101  // 01010101
var NewinvertedBinary = ~newBinaryNumber // 10101010

print(NewinvertedBinary)
// Output: 170

var standardInt = 85
var invertedStandardInt = ~standardInt

print(invertedStandardInt)
// Output: -86
```

### AND Operator

Bitwise AND `&` operator returns a new binary from the combination of two other binary numbers. If there is a `1` in the same place in each binary string, the result will have a `1` in that digit, else, a `0` will be place

```swift
        0 0 1 1 0 1 0 1
AND     0 1 1 1 1 1 0 1
EQUALS  0 0 1 1 0 1 0 1

let firstBinary = 0b00110101
let secondBinary = 0b01111101
let result = firstBinary & secondBinary // 00110101
```

### OR Operator

Bitwise OR `|` operator compares two numbers and returns a new number where each bit is set to `1` if either bit equals `1` in the original two numbers.

```swift
        0 0 1 1 0 1 0 1
OR      0 1 1 1 1 1 0 1
EQUALS  0 1 1 1 1 1 0 1

let firstBinary = 0b00110101
let secondBinary = 0b01111101
let result = firstBinary | secondBinary // 01111101
```

### XOR Operator

Bitwise XOR `^` operator, also known as 'exclusive OR', compares two binary numbers. It will return a new number with each bit set to `1` if the bits of the original numbers are different, or exclusive. `0`s will be placed anywhere that the two bits are equivalent.

```swift
        0 0 1 1 0 1 0 1
XOR     0 1 1 1 1 1 0 1
EQUALS  0 1 0 0 1 0 0 0

let firstBinary = 0b00110101
let secondBinary = 0b01111101
let result = firstBinary ^ secondBinary // 01001000
```

### Left and Right Shift Operators

Bitwise shift operators, `<<` and `>>` operate slightly differently on signed and unsigned values. For unsigned values, the process is very straight-forward, the number shifts to the left or right by the number of digits specified. In essence, for every shift to the left that is made, the value of the number is doubled, and for every shift right the number is halved.

```swift
var shifty: UInt8 = 0b00001000
shifty << 1        // 00010000
shifty << 3        // 01000000
shifty >> 7        // 00000000

// Digits shifted outside the scope of the value are discarded, as with the shift of 7 above
```

In signed numbers, the first digit represents the sign, `0` for positive, `1` for negative. For this reason, it is important to keep that digit as we shift in either direction. Let's start with an 8-bit signed number, 15. We said the first digit was the sign, 15 is positive so the sign is `0` and the remaining 7 bits are: `0001111`. Together our 8-bit number is `00001111`. When shifted left, the signed digit remains the same and digits are "pushed" out of the binary number at the signed digit. When shifting right, instead of filling the void space with a `0`, it is filled with the signed digit.

```swift
var signedFifteen = 0b00001111         // 0 0001111

var shiftedRight = signedFifteen >> 1  // 0 0000111
// Signed digit is '0' and is used to fill  ^
var shiftedLeft = signedFifteen << 4   // 0 1110000
// Signed digit acts as end point, leading '1' is dropped
```

## Custom and Overloaded Operators

Swift also allows for custom operators to be created or existing operators to be overloaded within a given [class](https://www.codecademy.com/resources/docs/swift/classes) or [structure](https://www.codecademy.com/resources/docs/swift/structures). The following examples feature a small `Student` structure that uses these operators:

```swift
struct Student {
  var name: String
  var studentId: Int
  var gpa: Double
}

var tim = Student(name: "Tim", studentId: 234234, gpa: 2.95)
var amy = Student(name: "Amy", studentId: 233241, gpa: 3.70)
```

The equatable operator (`==`) and its inverse (`!=`) will use Swift's standard definition unless it is redefined. The "equatability" of the two students can be tested by adding conformance to `Equatable` and creating a `==` function.

```swift
extension Student: Equatable {
  static func == (student1: Student, student2: Student) -> Bool {
    return student1.studentId == student2.studentId
  }
}

if tim == amy {
  print("These students are the same")
} else {
  print("These are different students")
}
// Output: "These are different students"
```

The `==` operator is used to logically compare `studentId` properties of two students.

Swift also allows us to override most of the common operators. A complete list of them can be found in the [Swift Reference Manual](https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#ID418).

In the examples below, when "adding" or "subtracting" from a student, the goal is to manipulate the `gpa` property.

```swift
extension Student {
  static func + (left: Student, right: Double) -> Double {
    if left.gpa + right > 4.0 {
      return 4.0
    }
    return left.gpa + right
  }
  static func - (left: Student, right: Double) -> Double {
    if left.gpa - right < 0.0 {
      return 0.0
    }
    return left.gpa - right
  }
}
```

The addition `+` and subtraction `-` operators are redefined to adjust a student's `gpa` property. Additionally, there is logic in place to prevent the `gpa` from going above `4.0` or below `0.0`.

Similar to basic operators, compound operators like `+=` can be redefined:

```swift
extension Student {
  static func += (left: inout Student, right: Double) -> Student {
    left.gpa = left + right
    return left
  }
}
```

The above examples are not inclusive of all the tasks that can be reassigned, and custom operators such as `+++` or `-+-` can also be created for example.
