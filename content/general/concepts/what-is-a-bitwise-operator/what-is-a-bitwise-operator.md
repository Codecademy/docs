---
Title: "What is a Bitwise Operator?"
Subjects:
  - "Computer Science"
  - "Web Development"
Tags:
  - "Best Practices"
  - "Memory"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/code-foundations"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/web-development"
---

_Bitwise operators_ are typographic characters used to represent objects that describe operations which can be performed on the most granular level of computing instructions: binary digits. Bitwise operators are used to manipulate these bits in order to facilitate the performance of applications. 

Bitwise operators give programs greater control over applications by providing detailed implementation of algorithms (e.g., encryption, compression, etc.) and the ability to control physical state to a greater degree via manipulation of individual bits. They are widely used in the embedded systems where we need to set/clear/toggle single bits of a specific register without modifying the other contents. Bitwise Operators are also extensively used in areas of graphics, especially XOR (exclusive OR) operations.

```py
# Bitwise operators in Python 

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

## A Bitwise Operator Table 

```html

<body>
<h2>Bitwise Operator Table</h2>
<table>
  <tr>
    <th>Operator</th>
    <th>Example</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>&</td>
    <td>a & b</td>
    <td>Bitwise AND</td>
  </tr>
  <tr>
    <td>|</td>
    <td>a | b</td>
    <td>Bitwise OR</td>
  </tr>
  <tr>
    <td>^</td>
    <td>a ^ b</td>
    <td>Bitwise XOR (exclusive OR)</td>
  </tr>
  <tr>
    <td>~</td>
    <td>~a</td>
    <td>Bitwise NOT</td>
  </tr>
  <tr>
    <td><<</td>
    <td>a << n</td>
    <td>Bitwise left shift</td>
  </tr>
  <tr>
    <td>>></td>
    <td>a >> n</td>
    <td>Bitwise right shift</td>
  </tr>
</table>
</body>
```
