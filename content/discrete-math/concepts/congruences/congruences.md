---
Title: 'Congruences'
Description: 'Congruences refer to the relationship between two integers a and b when they have the same remainder after division by positive integer m.'
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

# Congruences
Congruences refer to the relationship between two integers *a* and *b* when they have the same remainder after division by positive integer *m*.
---
#### a divides b
If *a* and *b* are integers with a $$\neq$$ 0 then *a* divides *b* if an integer *c*, exists given that *b = ac*.

**Explanation:**

- When a divides b, it is denoted as a | b.
- a is termed as factor or divisor of b while b is termed as multiple of a.
- If a | b then b / a is an integer  (*According to a divides b*).
- If a does not divide b, it is denoted with a $$\nmid$$ b  

#### a is congruent to b mod n

If *a* and *b* are integers and *m* is a positive integer, then *a* is congruent
to *b* modulo *m* iff *m|(a − b)*. It is termed as Congruence Relation. 

**Explanation:**
- The notation  $$a \equiv b \pmod{m}$$ says that a is congruent to b modulo m.
- m stands for modulus.
- Two integers are congruent mod m if and only if they have the same remainder remainder on being divided by m.
- If a is not congruent to b modulo m then it is denoted by $$a \not\equiv b \pmod{m}$$.

**Example:**

Suppose we have a as 17 and b as 5, to check if the a is congruent to b modulo m,

*Step 1:* $$17 \equiv 5 \pmod{6}$$
*Step 2:* $$6 \text{ divides } 17 - 5 = 12$$
**Solution:** $$17 \equiv 5 \pmod{6}$$ because 6 divides $$17 - 5 = 12$$

#### Linear Congruences

Linear Congrences is a special form of congruence denoted by $$ax \equiv b \pmod{m}$$, where *x* denotes an integer variable. Similar to previous cases of congruence, *a* and *b* are integers and *m* is modulo.

Here, *m* is a positive integer. Solution of congruence stands for all the values of integer *x* which are satisfied.

#### Reflexive Property
##### A congruence relation is reflexive if for any integers  
> $$a \equiv a \pmod{m}$$ for any integer \(a\) and positive integer \(m\).

#### Symmetric Property
##### A congruence relation is symmetric if for any integers 
> $$\text a \equiv b \pmod{m}, \text{ then } b \equiv a \pmod{m} \text{ for any integers } a, b \text{ and positive integer } m.$$

#### Transitive Property
##### A congruence relation is transitive if for any integers 
> $$\text{ If } a \equiv b \pmod{m} \text{ and } b \equiv c \pmod{m}, \text{ then } a \equiv c \pmod{m} \text{ for any integers } a, b, c \text{ and positive integer } m.$$
