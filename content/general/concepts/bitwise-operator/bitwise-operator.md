---
Title: 'Bitwise Operator'
Description: 'Bitwise operators are typographic characters used to represent objects that describe operations which can be performed on the most granular level of computing instructions: binary digits. Bitwise operators are used to manipulate these bits in order to facilitate the performance of applications.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Best Practices'
  - 'Memory'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

**Bitwise operators** are typographic characters used to represent objects that describe operations which can be performed on the most granular level of computing instructions: binary digits. Bitwise operators are used to manipulate these bits in order to facilitate the performance of applications.

Bitwise operators give programs greater control over applications by providing detailed implementation of algorithms (e.g., encryption, compression, etc.) and the ability to control physical state to a greater degree via manipulation of individual bits.

They are widely used in the embedded systems where we need to set/clear/toggle single bits of a specific register without modifying the other contents and also extensively used in areas of graphics, especially XOR (exclusive OR) operations.

## Bitwise Operator Table

| Operator | Example  | Meaning                    |
| -------- | -------- | -------------------------- |
| `&`      | `a & b`  | Bitwise AND                |
| `\|`     | `a \| b` | Bitwise OR                 |
| `^`      | `a ^ b`  | Bitwise XOR (exclusive OR) |
| `~`      | `~a`     | Bitwise NOT                |
| `<<`     | `a << n` | Bitwise left shift         |
| `>>`     | `a >> n` | Bitwise right shift        |

## Example in Python

```py
x = 7
y = 9

# Bitwise OR operation
print("x | y =", x | y)

# Bitwise AND operation
print("x & y =", x & y)

# Bitwise XOR operation
print("x ^ y =", x ^ y)

# Bitwise NOT operation
print("~x =", ~x)
```
