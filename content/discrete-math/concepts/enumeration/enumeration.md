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

**Enumeration** is another word for count. In the context of mathematics, enumerating is a type of counting given a specified event or situation. An enumeration is a complete, ordered listing of all the items in a collection. When speaking in the context of mathematics and computer science, listing all the elements of a set comes into play.

**Counting Theory** is a part of discrete mathematics that deals with counting the number of possible outcomes of a given event. Being an essential element of probability, it tries to answer an abstract question, "How many?"

## Preliminaries: On Choices

It is said that in order to combine numbers correctly, it's best to look for the words `AND` and `OR` in the description of the sequence of choices available.

Some notes on `"AND"`:

- Corresponds to the Cartesian product of sets.
- If one element of the set A `AND` one element of the set B is chosen, then this is equivalent to choosing one element of the `Cartesian product of A and B`.

Some notes on `OR`:

- Corresponds to the union of sets.
- If an element of the set A `OR` one element of the set B is chosen, then this is equivalent to choosing one element of the union of A and B.

It is very useful to describe a choice sequence for constructing the set of objects of interest by paying close attention to the words `"AND"` and `"B"`.

## Fundamental Counting Principle

The fundamental counting principle states that the total number of outcomes of two or more independent events is the product of the number of outcomes of each individual event.

## Example

Suppose there are 3 shirts (call them `A`, `B`, and `C`), and 4 pairs of pants (call them `w`, `x`, `y`, and `z`). There will be `3x4=12` possible outfits:

```plaintext
Aw, Ax, Ay, Az,
Bw, Bx, By, Bz,
Cw, Cx, Cy, Cz
```

## Principle of Inclusion and Exclusion (The Subtraction Rule)

The principle of inclusion and exclusion is an approach that derives the method of finding the number of elements in the union of two (2) finite sets.

In the context of combinations and probability, the necessity of finding a counting method in order to make sure that an object is not counted twice is wanting.

The formula (ꓴ is "AND", ꓵ is "OR"):

```tex
n(A ꓴ B) = n(A) + n(B) - n(A ꓵ B)
```

The exclusion of the intersection of the sets addresses the problem or question of duplication.

## Product Rule

The rule states that if there are `n(A)` ways to do `A` and `n(B)` ways to do `B`, then the number of ways to do `A` and `B` is `n(A) x n(B)`. This is true if the number of ways of doing `A` and `B` are independent; the number of choices for doing `B` is the same regardless of which choice is made for `A`.

The general take, however:

There are `n(A) x n(B) x n(C)` ways to do `A` and `B` and `C`.

## Sum Rule

The rule states that if there are `n(A)` ways to do `A` and, distinct from them, `n(B)` ways to do `B`, then the number of ways to do `A` or `B` is `n(A) + n(B)`.

And, the general rule:

There are `n(A) + n(B) + n(C)` ways to do `A` or `B` or `C`.

## The Division Rule

There are `n/d` ways to do a task if it can be done using a procedure that can be carried out in `n` ways, where there are `d` corresponding outcomes per group.
