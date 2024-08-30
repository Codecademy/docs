---
Title: 'Proof by Contradiction'
Description: 'Proving a statement by assuming that it is false and showing a contradiction follows on that assumption.'
Subjects:
  - 'Computer Science'
  - 'Discrete Math'
Tags:
  - 'Arithmetic'
  - 'Logic'
  - 'Logical'
  - 'Math'
CatalogContent:
  - 'discrete-math'
---

**Proof by Contradiction** is a technique used in mathematical proofs to demonstrate a statement by assuming that it is false and then showing that a contradiction follows on that assumption. By proving that a contradiction would occur if a statement were false, the truth of that statement is thereby demonstrated.

Proof by contradiction is also sometimes known as **indirect proof** or **reductio ad absurdum**, meaning to reduce to an absurdity.

## Steps for Proof by Contradiction

1. _Suppose the negation_: Assume that the statement is false.
2. _Prove a contradiction_: Prove that a contradiction follows, given the assumption.

## Example

The following example uses proof by contradiction to prove there are infinitely many primes.

### Suppose the Negation

```plaintext
Assume, for proof by contradiction, that there are only finitely many primes.
```

### Prove a Contradiction

```plaintext
By assumption, there is some finite number of primes, n. Label the series of primes p1, p2, ..., pn.

Now let P be the product of all primes plus 1: P = p1 * p2 ... * pn + 1.

The Prime Factorization Theorem states that any integer greater than 1 is either prime or equal to a product of prime numbers. Either way, any integer greater than 1 has at least one prime factor (either itself or some combination of others).

Let pm be an arbitrary prime factor of P. By definition, P = p1 * p2 ... * pn + 1. Therefore P / pm = (p1 * p2 ... * pn + 1) / pm.

Since p1, p2, ..., pn contains all primes, pm equals some value in p1, p2, ..., pn. As pm equals some prime in p1, p2, ..., pn, it follows that ((p1 * p2 ... * pn + 1) / pm) is equal to some integer value plus 1/pm. Therefore ((p1 * p2 ... * pn + 1) / pm) is not equal to an integer value. Therefore pm is not a factor of P, since it does not divide P evenly.

Therefore there is a contradiction: pm both is and is not a factor of P.

Since assuming there are finitely many primes leads to a logical contradiction, there must be infinitely many primes.
```
