---
Title: 'Poisson Distribution'
Description: 'The Poisson distribution is a probability distribution representing the count of events occurring in a fixed interval of time or space.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Functions'
  - 'Math'
  - 'Probability'
CatalogContent:
  - 'learn-data-science'
  - 'paths/data-science'
---

The **Poisson distribution** is a probability distribution representing the count of events occurring in a fixed interval of time, space, or any other continuous domain, given that the events occur independently and at a constant average rate. It is widely used in data science for modeling events such as website traffic spikes, customer arrivals at a store, or the number of defects in a manufacturing process.

A Poisson experiment must satisfy the following conditions:

- **Events Occur Independently**: One event does not affect the occurrence of another.
- **Constant Average Rate**: The average number of events in the interval remains the same.
- **Events Cannot Occur Simultaneously**: Only one event can occur at any given point in time or space.

The formula for calculating the Poisson distribution is given by:

$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$$

Where:

- $`X`$: A discrete random variable representing the number of occurrences (events).
- $`λ`$: The average number of occurrences in a given interval.
- $`k`$: The number of occurrences.
- $`e`$: The mathematical constant (approximately 2.718).

## Example

Suppose a customer support center receives an average of 5 calls per hour. What is the probability that exactly 3 calls are received in a given hour?

According to the Poisson distribution formula:

- $`λ`$ = 5 (Expected calls per hour)
- $`k`$ = 3 (Calls received)

Therefore, the equation stands:

$$P(X = 3) = \frac{e^{-5} 5^3}{3!}$$

The approximate value obtained after simplifying this equation is 0.1404 (or 14.04%).

So, the probability of getting exactly 3 calls in an hour is approximately 14.04%.
