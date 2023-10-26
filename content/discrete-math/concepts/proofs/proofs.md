---
Title: 'Proofs'
Description: 'A proof is a series of statements intended to demonstrate some conclusion.'
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

A **proof** is a series of statements intended to demonstrate some conclusion. Each step in a proof must follow logically from previous steps in accordance with recognized rules of logic and mathematical reasoning.

In discrete mathematics, proofs are used to establish the truth or falsity of important claims. When an important claim is proven, it becomes known as a theorem.

## Conjecture

When an important mathematical claim is suspected to be true, but has not yet been proven, it is known as a conjecture.

Mathematical exploration and discovery are driven by the formulation and investigation of conjectures.

## Mathematical Induction

Mathematical induction is a technique used in discrete mathematics to prove universal generalizations. A universal generalization is a claim which says that every element in some series has some property. For example, the following is a universal generalization:

```plaintext
For every whole number n, where n ≥ 1, n is either even or odd.
```

The above statement claims that every element in the series of whole numbers beginning with `1` has the property of being either even or odd.

A proof by mathematical induction consists of two steps. The steps of a mathematical induction will be illustrated below by proving the example universal generalization just given.

### 1. Base Step

In the base step (also known as the base case, initial case, or basis step), the first element or elements in the series are shown to have the relevant property. For example:

```plaintext
When n = 1, n is odd.
```

The first element in the series of whole numbers beginning with `1` is `1`. Above, this element is shown to have the relevant property of being either even or odd. In this case, the element is odd.

### 2. Inductive Step

In the inductive step (also known as the step case), it is shown that if the previous element has the relevant property, then the succeeding element has the relevant property. Generally, this is done by assuming that the previous element has the property (this assumption is known as the inductive hypothesis), and then showing that the next element must also have the property. This proof technique is known as conditional proof. Continuing the example proof:

```plaintext
Assume for conditional proof that n is either even or odd. Now we will prove that n + 1 is either even or odd. If n is odd, then n + 1 is even. If n is even, then n + 1 is odd. Therefore, in either case, n + 1 is either odd or even.
```

The inductive step above shows that no matter the value of `n` in the series, if `n` is either even or odd, then `n + 1` is either even or odd.

### The Logic of Mathematical Induction

Why do the base step and the inductive step together demonstrate the truth of a universal generalization? The logic of a mathematical induction can be pictured as a series of dominoes falling. In the base step, the first domino is knocked over. In the inductive step, it is shown that any successive domino will be knocked over by the domino falling behind it. Thus, once the first domino is knocked over, the second will be knocked over, then the third, and so on for all the dominoes.

In less metaphorical terms, the base step shows that the first `n` elements have the relevant property. It then follows from the inductive step that the element at `n + 1` has that property. Now the inductive step can be applied again on the element at `n + 1` to show that the element at `n + 2` has the property. Since this can be done indefinitely, the entire series is shown to have the relevant property.
