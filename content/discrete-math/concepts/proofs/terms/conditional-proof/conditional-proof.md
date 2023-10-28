---
Title: 'Conditional Proof'
Description: 'Proving a conditional statement by assuming the antecedent and showing that the consequent follows.'
Subjects:
  - 'Computer Science'
  - 'Discrete Math'
Tags:
  - 'Arithmetic'
  - 'Logic'
  - 'Logical'
  - 'Math'
CatalogContent:
  - 'computer-science'
  - 'paths/computer-science'
---

**Conditional Proof** is a technique used in mathematical proofs to prove a conditional statement.

A conditional statment is a statement of the form 'if..., then...'. The **antecedent** (also called the hypothesis or premise) is the condition of the conditional statement: the part following 'if'. The **consequent** (also called the conclusion) is what is claimed to follow from the condition: the part following 'then'.

Conditional proof works by assuming the antecedent of the conditional, and then showing that the consequent follows. By assuming the antecedent and then proving that the consequent follows, given that assumption, the entire conditional is shown to be true.

## Steps for Conditional Proof

1. Supposition for Conditional Proof: Assume that the antecedent is true.
2. Prove the consequent: Prove that the consequent is true.

## Example

The following statement will be proven below: If 4 is a factor of x, then 2 is a factor of x.

### Supposition for Conditional Proof

```plaintext
Assume, for conditional proof, that for some integer n, where n ≥ 0, x / 4 = n.
```

### Prove the Consequent

```plaintext
First, perform some basic algebraic manipulation on the assumption:

x / 4 = n         [by assumption above]
x = 4n            [multiplying both sides by 4]
x / 2 = 4n / 2    [dividing both sides by 2]
x / 2 = 2n        [simplifying right-hand side]

Since n is an integer value greater than or equal to 0, 2n is also an integer value greater than or equal to 0.

It follows that x / 2 is equal to an integer value greater than or equal to 0. By definition, 2 is therefore a factor of x.
```
