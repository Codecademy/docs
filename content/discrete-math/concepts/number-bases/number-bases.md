---
Title: 'Number Bases'
Description: 'Number Bases are diverse systems for representing and expressing numbers.'
Subjects:
  - 'Computer Science'
  - 'Discrete Math'
Tags:
  - 'Arithmetic'
  - 'Logic'
  - 'Logical'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'computer-science'
  - 'paths/computer-science'
---

**Number Bases** are diverse systems for representing and expressing numbers. Each base defines the number of digits used to represent a value in that specific system.

## Types of Bases

A base can be any whole number greater than 1. The four most commonly used number bases in a computer system are:

- Binary (Base 2)
- Octal (Base 8)
- Decimal (Base 10)
- Hexadecimal (Base 16)

### Binary

[Binary](https://www.codecademy.com/resources/docs/general/binary) is a number system that uses a base of 2. A number in binary can only be represented by `0`'s and `1`'s. In computer languages, the notation for representing binary numbers is leading `0b`. For example, `0b1010` is a binary number.

### Octal

Octal is a number system that uses a base of 8. A number in octal can only be represented by eight digits `0-7`. In computer languages, the notation for representing octal numbers is leading `0o`. For example, `0o0176` is an octal number.

### Decimal

Decimal is the most common number system that uses a base of 10. A number in decimal contains digits `0-9`. In computer languages, by default, there is no notation required to represent decimal numbers. For example, `9801` is a decimal number.

### Hexadecimal

[Hexadecimal](https://www.codecademy.com/resources/docs/general/hexadecimal) is a number system that uses a base of 16. The first ten digits of a hexadecimal number contain digits `0-9` and the remaining six digits contain letters `A-F` (not case sensitive). A common notation of hexadecimal numbers is prefixing with `0x`. For example, `0xA63F` is a hexadecimal number.

## Converting Between Bases

Converting between number bases requires two key concepts: the place value system and the digit representation.

In the place value system, each digit's value is determined by its position within the number. Each position represents a value based on the number's base raised to an exponent. Starting from the rightmost digit, the exponent begins at zero and increases by one as we move to the left. For instance, in decimal (base 10), `999` can be represented as `9 * 10^2 + 9 * 10^1 + 9 * 10^0`.

Digit representation refers to the symbols used to express numbers in a specific number system. For example, in hexadecimal, the number `15` is represented as `F`.

### Binary to Other Bases

- To convert binary (base-2) to decimal (base-10), multiply each digit by 2 raised to its respective power and sum them up. For example, `0b1001` in binary is `1 * 2^3 + 0 * 2^2 + 0 * 2^1 + 1 * 2^0 = 9` in decimal.
- To convert binary to octal (base-8), group the binary digits into sets of three (from the right) and convert each group to its octal equivalent. For example, `0b001100` in binary is grouped as `001 100`, and the octal equivalent is `0o14`.
- To convert binary to hexadecimal (base-16), group the binary digits into sets of four (from the right) and convert each group to its hexadecimal equivalent. For example, `0b10011111` in binary is grouped as `1001 1111`, and the hexadecimal equivalent is `0x9F`.

### Octal to Other Bases

- To convert octal (base-8) to decimal, multiply each digit by 8 raised to its respective power and sum them up. For example, `0o67` in octal is `6 * 8^1 + 7 * 8^0 = 55` in decimal.
- To convert octal to binary, convert each octal digit to its 3-bit binary equivalent. For example, `0o67` in octal is `110 111` in binary.
- To convert octal to hexadecimal, first convert the octal number to binary and then group the binary digits into sets of four and convert each group to its hexadecimal equivalent.

### Decimal to Other Bases

- To convert decimal (base-10) to binary, repeatedly divide the decimal number by `2`, keeping track of each remainder. The binary equivalent is obtained by reading the remainders in reverse order.

For example, to convert `27` to binary:

```plaintext
27 / 2 = 13 remainder 1,
13 / 2 = 6 remainder 1,
6 / 2 = 3 remainder 0,
3 / 2 = 1 remainder 1,
1 / 2 = 0 remainder 1
```

The binary equivalent is `11011`.

- To convert decimal to octal, repeatedly divide the decimal number by `8`, keeping track of each remainder. The octal equivalent is obtained by reading the remainders in reverse order.
- To convert decimal to hexadecimal, repeatedly divide the decimal number by `16`, keeping track of each remainder. The hexadecimal equivalent is obtained by reading the remainders in reverse order, with `10` represented as `A`, `11` as `B`, and so on.

### Hexadecimal to Other Bases

- To convert hexadecimal (base-16) to decimal, multiply each digit by 16 raised to its respective power and sum them up. For example, `0x3F` in hexadecimal is `3 * 16^1 + 15 * 16^0 = 63` in decimal.
- To convert hexadecimal to binary, convert each hexadecimal digit to its 4-bit binary equivalent. For example, `0x3F` in hexadecimal is `0011 1111` in binary.
- To convert hexadecimal to octal, first convert the hexadecimal number to binary and then group the binary digits into sets of three and convert each group to its octal equivalent.
