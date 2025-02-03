---
Title: 'Number' 
Description: 'A number is a mathematical value used to represent a quantity.'
  - 'Code Foundations'
  - 'Information Technology'
Tags:
  - 'Data Types'
  - 'Information Technology'
CatalogContent: 
  - 'paths/computer-science'
  - 'paths/code-foundations'
---

A **number** is a primitive data type used to represent mathematical values and permissions. They are used in arithmetic operations, data encoding and other computations. `0`, `-1`, `0.3` are examples of numbers (decimals may be treated as a seperate data type in some languages).

## Number Systems

The way in which a number is represented is called a number system. Based on the number of digits they use, which is called the base, there are mainly 4 number systems:

- **Decimal System**: This system uses **10 digits**, ie. `0`-`9`. Each digit is at a specific place with the place's value corressponding to a power of 10.
- **Binary System**: The binary system only uses **two digits**, `0` & `1`, to represent values. It is mostly used by computers and electronic devices to represent HIGH (`1`) and LOW (`0`) values.
- **Octal System**: The octal system uses only **8 digits**, ie. `0`-`7`. It is used to represent UTF-8 characters and file permissions in UNIX systems.
- **Hexadecimal System**: The hexadecimal system uses **16 digits**. Digits `0`-`9` are taken directly from the decimal system. Digits from `10`-`15` are represented by letters `A`-`F`, ie. `10` is `A`, `11` is `B`, `12` is `C`, `13` is `D`, `14` is `E` and `15` is `F`.

## Basic Arithmetic Operations on Two Numbers (JavaScript)
```codebyte/js
const sum = 3 + 4;
const remainder = 4 - 3;
const division = 8/2;
const product = 4*2;

console.log(sum, remainder, division, product);
```
