---
Title: 'Enumeration'
Description: 'Enumeration is a complete, ordered listing of all the items in a collection.'
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

**Counting Theory** is a part of 'discrete mathematics' that deals with counting the number of possible outcomes of a given event. Being an essential element of 'probability', it tries to answer an abstract question, "how many?"

**Enumeration** is a complete, ordered listing of all the items in a collection. When speaking in the context of 'mathematics' and 'computer science', the listing of all the elements of a set comes into play.

## Fundamental Counting Principle

The fundamental counting principle states that the total number of outcomes of two or more independent events is the product of the number of outcomes of each individual event.

## Example

Suppose there are 3 shirts (call them `A`, `B`, and `C`), and 4 pairs of pants (call them `w`, `x`, `y`, and `z`). There will be `3x4=12` possible outfits:

`Aw, Ax, Ay, Az,
Bw, Bx, By, Bz,
Cw, Cx, Cy, Cz`

## Principle of Inclusion and Exclusion

The principle of inclusion and exclusion is an approach which derives the method of finding the number of elements in the union of two (2) finite sets.

In the context of combinations and probability, the necessity of finding a counting method in order to make sure that an object is not counted twice is wanting.

The formula:

`n(A ꓴ B) = n(A) + n(B) - n(A ꓵ B)`

The exclusion of the intersection of the sets addresses the problem or question of duplication.

## Product Rule

The rule states that if there are `n(A)` ways to do `A` and `n(B)` ways to do `B`, then the number of ways to do A and B is `n(A) x n(B)`. This is true if the number of ways of doing `A` and `B` are independent; the number of choices for doing `B` is the same regardless of which choice is made for `A`.

The general take, however:

There are `n(A) x n(B) x n(C)` ways to do `A` and `B` and `C`.

## Sum Rule

The rule states that if there are `n(A)` ways to do `A` and, distinct from them, `n(B)` ways to do `B`, then the number of ways to do `A` or `B` is `n(A) + n(B)`.

And, the general rule:

There are `n(A) + n(B) + n(C)` ways to do `A` or `B` or `C`.
