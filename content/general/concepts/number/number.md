---
Title: 'Number'
Description: 'A number is a mathematical value used to represent a quantity.'
Subjects:
  - 'Code Foundations'
  - 'Information Technology'
Tags:
  - 'Data Types'
  - 'Information Technology'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/code-foundations'
---

A **number** is a primitive data type used to represent mathematical values and is commonly used in arithmetic operations, data encoding, and other computations. Examples of numbers include _0_, _-1_, _0.3_, and other numeric values.

> **Note:** In some programming languages, decimals may be treated as a separate data type, such as `float` or `double`.

## Number Systems

A number system defines how a number is represented. The representation depends on the number of digits (base) it uses. The main number systems are:

- **Decimal System** (Base 10): This system uses 10 digits, 0-9. Each digit’s place value corresponds to a power of 10.
- **Binary System** (Base 2): The binary system uses only two digits, 0 and 1, to represent values. It is extensively used by computers and electronic devices to represent HIGH (_1_) and LOW (_0_) states.
- **Octal System** (Base 8): The octal system uses 8 digits, 0-7. It is used in computer systems to represent values like UTF-8 characters and file permissions in UNIX systems.
- **Hexadecimal System** (Base 16): The hexadecimal system uses 16 digits, where 0-9 are taken directly from the decimal system and 10-15 are represented by letters A-F (i.e., _10_ is A, _11_ is B, _12_ is C, _13_ is D, _14_ is E, and _15_ is F). It is commonly used in computer science, particularly for representing memory addresses.

## Basic Arithmetic Operations on Two Numbers (JavaScript)

This code calculates the sum, difference, division, and product of the given numbers and prints the results to the console:

```codebyte/javascript
const sum = 3 + 4;
const difference = 4 - 3;
const division = 8/2;
const product = 4*2;

console.log(sum, difference, division, product);
```
