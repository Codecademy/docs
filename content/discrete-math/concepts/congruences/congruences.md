---
Title: 'Congruences'
Description: 'Congruences refer to the relationship between two integers a and b when they have the same remainder after division by positive integer m that is greater than 1.'
Subjects:
  - 'Computer Science'
  - 'Discrete Math'
Tags:
  - 'Arithmetic'
  - 'Math'
  - 'Logical'
  - 'Logic'
CatalogContent:
  - 'computer-science'
  - 'paths/computer-science'
---

**Congruences** refer to the relationship between two integers, _a_ and _b_, that have the same remainder after division by a positive integer, _m_ (which is greater than 1).

## _a_ divides _b_

If _a_ and _b_ are integers where a ≠ 0, then _a_ divides _b_ if an integer _c_ exists given that _b = ac_.

Explanation:

- When _a_ divides _b_, it is denoted as _a_ | _b_.
- _a_ is termed as a factor or divisor of _b_, while _b_ is termed as multiple of _a_.
- If _a_ | _b_ then _b_ / _a_ is an integer (According to _a_ divides _b_).
- If _a_ does not divide _b_, it is denoted with _a_ ⋮ _b_

## _a_ is congruent to _b_ mod _m_

If _a_ and _b_ are integers and _m_ is a positive integer, then _a_ is congruent to _b_ modulo _m_ if _m|(a − b)_. It is termed as Congruence Relation.

Explanation:

- The notation $$a \equiv b \pmod{m}$$ says that _a_ is congruent to _b_ modulo _m_.
- _m_ stands for modulus.
- Two integers are congruent `mod _m_` if and only if they have the same remainder on being divided by `_m_`.
- If _a_ is not congruent to _b_ modulo _m_ then it is denoted by $$a \not\equiv b \pmod{m}$$.

### Example

Suppose _a_ is 17 and _b_ is 5. To check if _a_ is congruent to _b_ modulo _m_:

1. $$17 \equiv 5 \pmod{6}$$
2. $$6 \text{ divides } 17 - 5 = 12$$

Solution: $$17 \equiv 5 \pmod{6}$$ because 6 divides $$17 - 5 = 12$$

## Congruence Properties

Congruence properties pertain to the equivalence relation between integers where two numbers share the same remainder when divided by a fixed positive integer.

### Linear Congruences

Linear congruence is a special form of congruence denoted by $$ax \equiv b \pmod{m}$$, where _x_ denotes an integer variable. Similar to previous cases of congruence, _a_ and _b_ are integers and _m_ is modulo.

Here, _m_ is a positive integer. Solution of congruence stands for all the values of integer _x_ which are satisfied.

### Reflexive Property

A congruence relation is reflexive if for any integers:

```tex
a \equiv a \pmod{m} \text{for any integer } a \text{ and positive integer } m.
```

### Symmetric Property

A congruence relation is symmetric if for any integers:

```tex
\text{If } a \equiv b \pmod{m}, \text{ then } b \equiv a \pmod{m} \text{ for any integers } a, b \text{ and positive integer } m.
```

### Transitive Property

A congruence relation is transitive if for any integers:

```tex
\text{If } a \equiv b \pmod{m} \text{ and } b \equiv c \pmod{m}, \text{ then } a \equiv c \pmod{m} \text{ for any integers } a, b, c \text{ and positive integer } m.
```
